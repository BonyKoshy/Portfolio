// src/components/LogoLoop/LogoLoop.jsx
import React, { useCallback, useEffect, useMemo, useRef, useState, memo } from 'react';
import './LogoLoop.css';

// ... (The hooks like useAnimationFrame, etc., remain unchanged)
const ANIMATION_CONFIG = { SMOOTH_TAU: 0.25, MIN_COPIES: 2, COPY_HEADROOM: 2 };
const toCssLength = value => (typeof value === 'number' ? `${value}px` : (value ?? undefined));
const useResizeObserver = (callback, elements, dependencies) => { useEffect(() => { if (!window.ResizeObserver) { const handleResize = () => callback(); window.addEventListener('resize', handleResize); callback(); return () => window.removeEventListener('resize', handleResize); } const observers = elements.map(ref => { if (!ref.current) return null; const observer = new ResizeObserver(callback); observer.observe(ref.current); return observer; }); callback(); return () => { observers.forEach(observer => observer?.disconnect()); }; }, dependencies); };
const useImageLoader = (seqRef, onLoad, dependencies) => { useEffect(() => { const images = seqRef.current?.querySelectorAll('img') ?? []; if (images.length === 0) { onLoad(); return; } let remainingImages = images.length; const handleImageLoad = () => { remainingImages -= 1; if (remainingImages === 0) { onLoad(); } }; images.forEach(img => { const htmlImg = img; if (htmlImg.complete) { handleImageLoad(); } else { htmlImg.addEventListener('load', handleImageLoad, { once: true }); htmlImg.addEventListener('error', handleImageLoad, { once: true }); } }); return () => { images.forEach(img => { img.removeEventListener('load', handleImageLoad); img.removeEventListener('error', handleImageLoad); }); }; }, dependencies); };
const useAnimationLoop = (trackRef, targetVelocity, seqWidth, isHovered, pauseOnHover) => { const rafRef = useRef(null); const lastTimestampRef = useRef(null); const offsetRef = useRef(0); const velocityRef = useRef(0); useEffect(() => { const track = trackRef.current; if (!track) return; if (seqWidth > 0) { offsetRef.current = ((offsetRef.current % seqWidth) + seqWidth) % seqWidth; track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`; } const animate = timestamp => { if (lastTimestampRef.current === null) { lastTimestampRef.current = timestamp; } const deltaTime = Math.max(0, timestamp - lastTimestampRef.current) / 1000; lastTimestampRef.current = timestamp; const target = pauseOnHover && isHovered ? 0 : targetVelocity; const easingFactor = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU); velocityRef.current += (target - velocityRef.current) * easingFactor; if (seqWidth > 0) { let nextOffset = offsetRef.current + velocityRef.current * deltaTime; nextOffset = ((nextOffset % seqWidth) + seqWidth) % seqWidth; offsetRef.current = nextOffset; const translateX = -offsetRef.current; track.style.transform = `translate3d(${translateX}px, 0, 0)`; } rafRef.current = requestAnimationFrame(animate); }; rafRef.current = requestAnimationFrame(animate); return () => { if (rafRef.current !== null) { cancelAnimationFrame(rafRef.current); rafRef.current = null; } lastTimestampRef.current = null; }; }, [targetVelocity, seqWidth, isHovered, pauseOnHover, trackRef]); };


export const LogoLoop = memo(
  ({
    logos,
    speed = 120,
    direction = 'left',
    logoHeight = 28,
    gap = 32,
    pauseOnHover = true,
    fadeOut = false,
    fadeOutColor,
    scaleOnHover = false,
    onLogoClick, // New prop to handle clicks
    className,
    style
  }) => {
    const containerRef = useRef(null);
    const trackRef = useRef(null);
    const seqRef = useRef(null);
    const [seqWidth, setSeqWidth] = useState(0);
    const [copyCount, setCopyCount] = useState(ANIMATION_CONFIG.MIN_COPIES);
    const [isHovered, setIsHovered] = useState(false);
    
    const targetVelocity = useMemo(() => (direction === 'left' ? 1 : -1) * Math.abs(speed), [speed, direction]);

    const updateDimensions = useCallback(() => {
      const containerWidth = containerRef.current?.clientWidth ?? 0;
      const sequenceWidth = seqRef.current?.getBoundingClientRect?.()?.width ?? 0;
      if (sequenceWidth > 0) {
        setSeqWidth(Math.ceil(sequenceWidth));
        const copiesNeeded = Math.ceil(containerWidth / sequenceWidth) + ANIMATION_CONFIG.COPY_HEADROOM;
        setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
      }
    }, []);

    useResizeObserver(updateDimensions, [containerRef, seqRef], [logos, gap, logoHeight]);
    useImageLoader(seqRef, updateDimensions, [logos, gap, logoHeight]);
    useAnimationLoop(trackRef, targetVelocity, seqWidth, isHovered, pauseOnHover);

    const cssVariables = useMemo(() => ({
      '--logoloop-gap': `${gap}px`,
      '--logoloop-logoHeight': `${logoHeight}px`,
      ...(fadeOutColor && { '--logoloop-fadeColor': fadeOutColor })
    }), [gap, logoHeight, fadeOutColor]);

    const rootClassName = useMemo(() =>
      ['logoloop', fadeOut && 'logoloop--fade', scaleOnHover && 'logoloop--scale-hover', className].filter(Boolean).join(' '),
      [fadeOut, scaleOnHover, className]
    );

    const handleMouseEnter = useCallback(() => setIsHovered(true), []);
    const handleMouseLeave = useCallback(() => setIsHovered(false), []);
    
    const renderLogoItem = useCallback((item, key) => {
        const content = <span className="logoloop__node">{item.node}</span>;
        
        // Use a button for accessibility and click handling
        return (
            <li className="logoloop__item" key={key}>
                <button 
                    className="logoloop__link" 
                    onClick={() => onLogoClick(item.title)}
                    aria-label={item.title}
                >
                    {content}
                </button>
            </li>
        );
    }, [onLogoClick]);

    const logoLists = useMemo(() =>
      Array.from({ length: copyCount }, (_, copyIndex) => (
        <ul
          className="logoloop__list"
          key={`copy-${copyIndex}`}
          aria-hidden={copyIndex > 0}
          ref={copyIndex === 0 ? seqRef : undefined}
        >
          {logos.map((item, itemIndex) => renderLogoItem(item, `${copyIndex}-${itemIndex}`))}
        </ul>
      )), [copyCount, logos, renderLogoItem]
    );

    return (
      <div
        ref={containerRef}
        className={rootClassName}
        style={{ ...cssVariables, ...style }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="logoloop__track" ref={trackRef}>{logoLists}</div>
      </div>
    );
  }
);

LogoLoop.displayName = 'LogoLoop';
export default LogoLoop;