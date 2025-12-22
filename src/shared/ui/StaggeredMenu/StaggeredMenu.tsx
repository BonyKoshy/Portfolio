import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
  useEffect,
} from "react";
import { gsap } from "gsap";

export interface StaggeredMenuItem {
  label: string;
  link: string;
  ariaLabel?: string;
}

export interface StaggeredMenuSocialItem {
  label: string;
  link: string;
}

export interface StaggeredMenuProps {
  items?: StaggeredMenuItem[];
  socialItems?: StaggeredMenuSocialItem[];
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
}

export interface StaggeredMenuRef {
  toggleMenu: () => void;
}

const StaggeredMenu = forwardRef<StaggeredMenuRef, StaggeredMenuProps>(
  ({ items = [], socialItems = [], onMenuOpen, onMenuClose }, ref) => {
    const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLElement>(null);
    const preLayersRef = useRef<HTMLDivElement>(null);
    const busyRef = useRef(false);

    const playOpen = useCallback(() => {
        if (busyRef.current) return;
        busyRef.current = true;
        
        const tl = gsap.timeline({
          onComplete: () => {
            busyRef.current = false;
          },
        });
  
        if (panelRef.current && preLayersRef.current) {
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
        }
      },[]);
  
      const playClose = useCallback(() => {
        if (busyRef.current) return;
        busyRef.current = true;
  
        if (panelRef.current && preLayersRef.current) {
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
        }
      }, []);
  
      const handleClose = useCallback(() => {
        if (busyRef.current || !open) return;
        setOpen(false);
        onMenuClose?.();
        playClose();
      }, [open, onMenuClose, playClose]);
  
      // Click Outside Logic
      useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
            handleClose();
          }
        };
  
        if (open) {
          document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [open, handleClose]);
  
      // Keyboard Navigation Logic
      useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
          const keyNumber = parseInt(event.key, 10);
          if (!isNaN(keyNumber) && keyNumber > 0 && keyNumber <= items.length) {
            const targetItem = items[keyNumber - 1];
            if (targetItem && panelRef.current) {
              const linkElement = panelRef.current.querySelector(
                `a[href="${targetItem.link}"]`
              ) as HTMLElement;
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
        if (!panelRef.current || !preLayersRef.current) return;
         const ctx = gsap.context(() => {
           // Fix: ensure we don't crash if refs are null
           if(panelRef.current && preLayersRef.current) {
              gsap.set([panelRef.current, ...Array.from(preLayersRef.current.children)], {
               xPercent: 100,
              });
           }
        });
        return () => ctx.revert();
      }, []);


    return (
      <div className={`fixed top-0 left-0 w-full h-full pointer-events-none z-50 ${open ? "is-open" : ""}`}>
        <div ref={preLayersRef} className="absolute top-0 right-0 h-full z-5 pointer-events-none w-[clamp(320px,45vw,550px)] max-lg:w-full" aria-hidden="true">
          <div className="sm-prelayer absolute top-0 right-0 h-full w-full bg-(--prelayer-1)" />
          <div className="sm-prelayer absolute top-0 right-0 h-full w-full bg-(--prelayer-2)" />
        </div>
        <aside
          ref={panelRef}
          className="absolute top-0 right-0 h-screen w-[clamp(320px,45vw,550px)] max-lg:w-full bg-(--panel-bg) backdrop-blur-xl flex flex-col pt-32 px-10 pb-8 overflow-y-auto z-10 pointer-events-auto shadow-2xl"
          aria-hidden={!open}
        >
          <div className="flex-1 flex flex-col gap-5 items-start text-left">
            <ul className="list-none m-0 p-0 flex flex-col gap-2 [counter-reset:smItem] w-full" data-numbering role="list">
              {items.map((it) => (
                <li className="relative overflow-hidden w-full" key={it.label}>
                  <a
                    className="sm-panel-item relative text-(--text-primary) font-bold text-[3rem] max-xl:text-[2.5rem] max-md:text-[2.5rem] max-sm:text-[2.25rem] cursor-pointer leading-none tracking-[-1.5px] uppercase transition-colors duration-250 inline-block no-underline pr-0 hover:text-(--accent) group w-full text-left"
                    href={it.link}
                    onClick={handleClose}
                  >
                    {it.label}
                    <span className="inline-block relative text-sm font-normal text-(--accent) tracking-normal pointer-events-none select-none opacity-50 transition-opacity duration-300 group-hover:opacity-100 before:content-[counter(smItem,decimal-leading-zero)] [counter-increment:smItem] align-top ml-2 mt-0.5"></span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8 flex flex-col gap-3 w-full items-start" aria-label="Social links">
              <h3 className="m-0 text-base font-medium text-(--accent)">Socials</h3>
              <ul className="list-none m-0 p-0 flex flex-row items-center gap-4 flex-wrap justify-start" role="list">
                {socialItems.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium text-(--text-primary) no-underline relative inline-block py-0.5 transition-colors duration-300 hover:text-(--accent) group"
                    >
                        <span className="opacity-100 group-hover:opacity-100 transition-opacity duration-300">{s.label}</span>
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
