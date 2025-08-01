// src/components/BlurText/BlurText.jsx
import { motion } from 'framer-motion';
import { useEffect, useRef, useState, useMemo } from 'react';
// No dedicated CSS file for BlurText itself for now, it's styled via props and inline styles.

const buildKeyframes = (from, steps) => {
  const keys = new Set([
    ...Object.keys(from),
    ...steps.flatMap((s) => Object.keys(s)),
  ]);

  const keyframes = {};
  keys.forEach((k) => {
    keyframes[k] = [from[k], ...steps.map((s) => s[k])];
  });
  return keyframes;
};

const BlurText = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = (t) => t,
  onAnimationComplete,
  stepDuration = 0.35,
}) => {
  // Split by words or characters based on animateBy prop
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  // Intersection Observer to trigger animation when component is in view
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current); // Stop observing once animated
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threshold, rootMargin]);

  // Default animation keyframes based on direction (e.g., blur from top)
  const defaultFrom = useMemo(
    () =>
      direction === 'top'
        ? { filter: 'blur(10px)', opacity: 0, y: -50 }
        : { filter: 'blur(10px)', opacity: 0, y: 50 },
    [direction]
  );

  const defaultTo = useMemo(
    () => [
      {
        filter: 'blur(5px)',
        opacity: 0.5,
        y: direction === 'top' ? 5 : -5,
      },
      { filter: 'blur(0px)', opacity: 1, y: 0 },
    ],
    [direction]
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) =>
    stepCount === 1 ? 0 : i / (stepCount - 1)
  );

  return (
    // Use a <p> tag as the container to allow line breaks
    <p
      ref={ref}
      className={className}
      style={{ display: 'flex', flexWrap: 'wrap' }} // Allow words to wrap
    >
      {elements.map((segment, index) => {
        // Check for explicit line breaks and render them as <br>
        if (segment === '<br/>') {
          return <br key={`br-${index}`} />;
        }
        // Add a non-breaking space for word separation
        const trailingSpace = animateBy === 'words' && index < elements.length - 1 ? '\u00A0' : '';

        const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);

        const spanTransition = {
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000,
        };
        spanTransition.ease = easing; // Dynamically set easing

        return (
          <motion.span
            className="inline-block will-change-[transform,filter,opacity]" // Keep these classes for animation performance
            key={index}
            initial={fromSnapshot}
            // Animate only if inView, otherwise stay at initial state
            animate={inView ? animateKeyframes : fromSnapshot}
            transition={spanTransition}
            // Call onAnimationComplete only for the last segment
            onAnimationComplete={
              index === elements.length - 1 ? onAnimationComplete : undefined
            }
          >
            {segment}
            {trailingSpace}
          </motion.span>
        );
      })}
    </p>
  );
};

export default BlurText;