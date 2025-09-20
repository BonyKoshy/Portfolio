import React, { useCallback, useLayoutEffect, useRef, useState, useImperativeHandle, forwardRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './StaggeredMenu.css';

const StaggeredMenu = forwardRef(({
  items = [],
  socialItems = [],
  onMenuOpen,
  onMenuClose
}, ref) => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const preLayersRef = useRef(null);
  const busyRef = useRef(false);

  // This is the new logic for keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (event) => {
      // Convert the pressed key to a number
      const keyNumber = parseInt(event.key, 10);
      
      // Check if it's a valid number for our menu items (e.g., 1, 2, 3, 4)
      if (!isNaN(keyNumber) && keyNumber > 0 && keyNumber <= items.length) {
        
        // Find the corresponding menu item (arrays are 0-indexed)
        const targetItem = items[keyNumber - 1];
        if (targetItem) {
          const linkElement = panelRef.current?.querySelector(`a[href="${targetItem.link}"]`);
          if (linkElement) {
            linkElement.click(); // Simulate a click on the link
            handleClose(); // Close the menu
          }
        }
      }
    };

    // Only listen for key presses if the menu is open
    if (open) {
      document.addEventListener('keydown', handleKeyPress);
    }

    // Cleanup: remove the event listener when the menu closes or component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [open, items]); // Rerun this effect if `open` or `items` change


  const handleClose = useCallback(() => {
    if (busyRef.current) return;
    setOpen(false);
    onMenuClose?.();
    playClose();
  }, [onMenuClose]);
  
  useImperativeHandle(ref, () => ({
    toggleMenu: () => {
      const target = !open;
      if (target) {
        setOpen(true);
        onMenuOpen?.();
        playOpen();
      } else {
        handleClose();
      }
    }
  }));

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([panelRef.current, ...preLayersRef.current.children], { xPercent: 100 });
    });
    return () => ctx.revert();
  }, []);

  const playOpen = useCallback(() => {
    if (busyRef.current) return;
    busyRef.current = true;
    const tl = gsap.timeline({
      onComplete: () => { busyRef.current = false; }
    });
    tl.set(panelRef.current.querySelectorAll('.sm-panel-item'), { yPercent: 100, autoAlpha: 0 });
    tl.to([preLayersRef.current.children, panelRef.current], {
      xPercent: 0,
      duration: 0.6,
      ease: 'power3.out',
      stagger: 0.05
    });
    tl.to(panelRef.current.querySelectorAll('.sm-panel-item'), {
      yPercent: 0,
      autoAlpha: 1,
      duration: 0.5,
      ease: 'power3.out',
      stagger: 0.08
    }, "-=0.4");
  }, []);

  const playClose = useCallback(() => {
    if (busyRef.current) return;
    busyRef.current = true;
    gsap.to([panelRef.current, ...Array.from(preLayersRef.current.children).reverse()], {
      xPercent: 100,
      duration: 0.4,
      ease: 'power3.in',
      stagger: 0.04,
      onComplete: () => { busyRef.current = false; }
    });
  }, []);

  return (
    <div className={`staggered-menu-wrapper ${open ? 'is-open' : ''}`}>
      <div ref={preLayersRef} className="sm-prelayers" aria-hidden="true">
        <div className="sm-prelayer" />
        <div className="sm-prelayer" />
      </div>
      <aside ref={panelRef} className="staggered-menu-panel" aria-hidden={!open}>
        <div className="sm-panel-inner">
          <ul className="sm-panel-list" data-numbering role="list">
            {items.map((it) => (
              <li className="sm-panel-itemWrap" key={it.label}>
                <a className="sm-panel-item" href={it.link}>{it.label}</a>
              </li>
            ))}
          </ul>
          <div className="sm-socials" aria-label="Social links">
            <h3 className="sm-socials-title">Socials</h3>
            <ul className="sm-socials-list" role="list">
              {socialItems.map((s) => (
                <li key={s.label}>
                  <a href={s.link} target="_blank" rel="noopener noreferrer" className="sm-socials-link">{s.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
});

export default StaggeredMenu;