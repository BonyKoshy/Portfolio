import React, {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
  useEffect,
} from "react";
import { gsap } from "gsap";
import "./StaggeredMenu.css";

const StaggeredMenu = forwardRef(
  ({ items = [], socialItems = [], onMenuOpen, onMenuClose }, ref) => {
    const [open, setOpen] = useState(false);
    const panelRef = useRef(null);
    const preLayersRef = useRef(null);
    const busyRef = useRef(false);

    const handleClose = useCallback(() => {
      if (busyRef.current || !open) return; // Prevent multiple close triggers
      setOpen(false);
      onMenuClose?.();
      playClose();
    }, [open, onMenuClose]); // Added `open` dependency

    // --- NEW LOGIC #1: Close on click outside ---
    useEffect(() => {
      const handleClickOutside = (event) => {
        // If the click is outside the panelRef, close the menu
        if (panelRef.current && !panelRef.current.contains(event.target)) {
          handleClose();
        }
      };

      // Add listener only when the menu is open
      if (open) {
        document.addEventListener("mousedown", handleClickOutside);
      }

      // Cleanup: remove the event listener
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [open, handleClose]); // Rerun when `open` or `handleClose` changes

    // Logic for keyboard shortcuts (from previous step)
    useEffect(() => {
      const handleKeyPress = (event) => {
        const keyNumber = parseInt(event.key, 10);
        if (!isNaN(keyNumber) && keyNumber > 0 && keyNumber <= items.length) {
          const targetItem = items[keyNumber - 1];
          if (targetItem) {
            const linkElement = panelRef.current?.querySelector(
              `a[href="${targetItem.link}"]`
            );
            if (linkElement) {
              linkElement.click();
              handleClose();
            }
          }
        }
      };

      if (open) {
        document.addEventListener("keydown", handleKeyPress);
      }

      return () => {
        document.removeEventListener("keydown", handleKeyPress);
      };
    }, [open, items, handleClose]);

    useImperativeHandle(ref, () => ({
      toggleMenu: () => {
        if (busyRef.current) return;
        const target = !open;
        if (target) {
          setOpen(true);
          onMenuOpen?.();
          playOpen();
        } else {
          handleClose();
        }
      },
    }));

    useLayoutEffect(() => {
      const ctx = gsap.context(() => {
        gsap.set([panelRef.current, ...preLayersRef.current.children], {
          xPercent: 100,
        });
      });
      return () => ctx.revert();
    }, []);

    const playOpen = useCallback(() => {
      if (busyRef.current) return;
      busyRef.current = true;
      const tl = gsap.timeline({
        onComplete: () => {
          busyRef.current = false;
        },
      });
      tl.set(panelRef.current.querySelectorAll(".sm-panel-item"), {
        yPercent: 100,
        autoAlpha: 0,
      });
      tl.to([preLayersRef.current.children, panelRef.current], {
        xPercent: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.05,
      });
      tl.to(
        panelRef.current.querySelectorAll(".sm-panel-item"),
        {
          yPercent: 0,
          autoAlpha: 1,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.08,
        },
        "-=0.4"
      );
    }, []);

    const playClose = useCallback(() => {
      if (busyRef.current) return;
      busyRef.current = true;
      gsap.to(
        [
          panelRef.current,
          ...Array.from(preLayersRef.current.children).reverse(),
        ],
        {
          xPercent: 100,
          duration: 0.4,
          ease: "power3.in",
          stagger: 0.04,
          onComplete: () => {
            busyRef.current = false;
          },
        }
      );
    }, []);

    return (
      <div className={`staggered-menu-wrapper ${open ? "is-open" : ""}`}>
        <div ref={preLayersRef} className="sm-prelayers" aria-hidden="true">
          <div className="sm-prelayer" />
          <div className="sm-prelayer" />
        </div>
        <aside
          ref={panelRef}
          className="staggered-menu-panel"
          aria-hidden={!open}
        >
          <div className="sm-panel-inner">
            <ul className="sm-panel-list" data-numbering role="list">
              {items.map((it) => (
                <li className="sm-panel-itemWrap" key={it.label}>
                  {/* --- NEW LOGIC #2: Added onClick handler here --- */}
                  <a
                    className="sm-panel-item"
                    href={it.link}
                    onClick={handleClose}
                  >
                    {it.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="sm-socials" aria-label="Social links">
              <h3 className="sm-socials-title">Socials</h3>
              <ul className="sm-socials-list" role="list">
                {socialItems.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sm-socials-link"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </div>
    );
  }
);

export default StaggeredMenu;
