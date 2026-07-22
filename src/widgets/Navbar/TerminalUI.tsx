import React, {
  useLayoutEffect,
  useRef,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";
import { gsap } from "gsap";
import { Terminal as TerminalIcon } from "lucide-react";
import {
  ThemeContext,
  ThemeContextValues,
} from "@/app/providers/ThemeProvider";
import TextType from "@/shared/ui/TextType/TextType";

interface TerminalUIProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistory {
  command: string;
  renderOutput: (
    isTyping: boolean,
    setIsTyping: (v: boolean) => void,
    isLatest: boolean
  ) => ReactNode;
}

const AVAILABLE_COMMANDS = [
  "help",
  "whoami",
  "ls -la /skills",
  "cat experience.log",
  "ping network",
  "wget resume.pdf",
  "clear",
  "exit",
  "sudo rm -rf /",
  "reboot",
  "uptime",
  "theme dark",
  "theme light",
  "theme light --force",
];

const SequentialGrid = ({ items, isLatest, isTyping, onComplete }: any) => {
  const [activeIdx, setActiveIdx] = useState(0);

  if (!isLatest) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1">
        {items.map((text: string, i: number) => (
          <div key={i}>{text}</div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1">
      {items.map((text: string, i: number) => {
        const isLast = i === items.length - 1;
        const isActive = i <= activeIdx;

        return (
          <div key={i} className={isActive ? "opacity-100" : "opacity-0"}>
            {isActive && (
              <TextType
                text={text}
                typingSpeed={10}
                pauseDuration={1500}
                showCursor={i === activeIdx && isTyping}
                cursorCharacter="|"
                cursorBlinkDuration={0.5}
                variableSpeed={{ min: 10, max: 40 }}
                loop={false}
                onSentenceComplete={() => {
                  if (isLast) onComplete?.();
                  else setActiveIdx((prev) => prev + 1);
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

const SequentialList = ({ items, isLatest, isTyping, onComplete }: any) => {
  const [activeIdx, setActiveIdx] = useState(0);

  if (!isLatest) {
    return (
      <div className="flex flex-col gap-1">
        {items.map((item: any, i: number) => (
          <a
            key={i}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="hover:text-violet-400 underline decoration-zinc-800 underline-offset-4"
          >
            {item.text}
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1">
      {items.map((item: any, i: number) => {
        const isLast = i === items.length - 1;
        const isActive = i <= activeIdx;

        if (!isActive) return null;

        return (
          <a
            key={i}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="hover:text-violet-400 underline decoration-zinc-800 underline-offset-4"
          >
            <TextType
              text={item.text}
              typingSpeed={10}
              pauseDuration={1500}
              showCursor={i === activeIdx && isTyping}
              cursorCharacter="|"
              cursorBlinkDuration={0.5}
              variableSpeed={{ min: 10, max: 40 }}
              loop={false}
              onSentenceComplete={() => {
                if (isLast) onComplete?.();
                else setActiveIdx((prev) => prev + 1);
              }}
            />
          </a>
        );
      })}
    </div>
  );
};

const TerminalUI: React.FC<TerminalUIProps> = ({ isOpen, onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const [isTyping, setIsTyping] = useState(false);

  const themeContext = useContext(ThemeContext) as ThemeContextValues | null;

  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const getTextTypeProps = (
    isLatest: boolean,
    isTyping: boolean,
    setIsTyping: (v: boolean) => void
  ) => {
    const props: any = {
      typingSpeed: 10,
      pauseDuration: 1500,
      showCursor: isLatest && isTyping,
      cursorCharacter: "|",
      cursorBlinkDuration: 0.5,
      variableSpeed: { min: 10, max: 40 },
      loop: false,
    };
    if (isLatest) {
      props.onSentenceComplete = (_s: string, _i: number) => setIsTyping(false);
    }
    return props;
  };

  const bootSequence = (
    <pre className="text-fg-tertiary text-[10px] sm:text-xs leading-none font-mono">
      {`   _____ __  __ _____      ____   __ __
  / ___/ \\ \\/ // ___/     / __ ) / //_/
  \\__ \\   \\  / \\__ \\     / __  |/ ,<   
 ___/ /   / / ___/ /    / /_/ // /| |  
/____/   /_/ /____/    /_____//_/ |_|  
                                       
SYSTEM BOOT // v2.0.4 (Mainline)
Type 'help' to see available commands.`}
    </pre>
  );

  // GSAP Height Animation
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    gsap.set(container, { height: 0, opacity: 0, overflow: "hidden" });

    const tl = gsap.timeline({ paused: true });

    // Animate height to fill 90vh minus the 64px top bar
    tl.to(container, {
      height: "calc(90vh - 64px)",
      opacity: 1,
      duration: 0.5,
      ease: "power3.inOut",
    });

    tlRef.current = tl;

    return () => {
      tl.kill();
    };
  }, []);

  // Open/Close state sync
  useEffect(() => {
    if (!tlRef.current) return;
    if (isOpen) {
      // Reset history and input when terminal is opened
      setHistory([
        {
          command: "",
          renderOutput: () => bootSequence,
        },
      ]);
      setInput("");
      tlRef.current.play();

      // Focus input
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      tlRef.current.reverse();
      setIsTyping(false);
    }
  }, [isOpen]);

  // Handle focus when typing finishes
  useEffect(() => {
    if (!isTyping && isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  }, [isTyping, isOpen]);

  // Auto-Scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  const processCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    let renderOutput: CommandHistory["renderOutput"] = () => null;
    const lowerCmd = trimmed.toLowerCase();

    switch (lowerCmd) {
      case "help":
        renderOutput = () => (
          <div className="flex flex-col gap-1">
            <div>whoami - Display current user identity</div>
            <div>ls -la /skills - List core competencies</div>
            <div>cat experience.log - Display work history</div>
            <div>ping network - Show network connections (links)</div>
            <div>wget resume.pdf - Download resume file</div>
            <div>clear - Clear terminal output</div>
            <div>uptime - System uptime information</div>
            <div>theme [args] - Toggle system theme (dark/light)</div>
            <div>reboot - Restart terminal session</div>
            <div>exit - Close terminal</div>
          </div>
        );
        break;
      case "whoami": {
        const text =
          "Bony Koshy. BCA Graduate. Incoming System and Application Services Associate @ Accenture.";
        renderOutput = (isTyping, setIsTyping, isLatest) =>
          isLatest ? (
            <TextType
              text={text}
              {...getTextTypeProps(isLatest, isTyping, setIsTyping)}
            />
          ) : (
            text
          );
        break;
      }
      case "ls -la /skills": {
        const items = [
          "Windows_Server",
          "NetApp",
          "NetBackup",
          "Rubrik",
          "EverPure",
          "Linux",
        ];
        renderOutput = (isTyping, setIsTyping, isLatest) => (
          <SequentialGrid
            items={items}
            isLatest={isLatest}
            isTyping={isTyping}
            onComplete={() => setIsTyping(false)}
          />
        );
        break;
      }
      case "cat experience.log": {
        const text = `CMS Cybersecurity Council (CCC) - Systems Admin\nAccenture - Incoming June 2026`;
        renderOutput = (isTyping, setIsTyping, isLatest) =>
          isLatest ? (
            <TextType
              text={text}
              {...getTextTypeProps(isLatest, isTyping, setIsTyping)}
            />
          ) : (
            text
          );
        break;
      }
      case "ping network": {
        const items = [
          {
            href: "https://linkedin.com",
            text: "LINKEDIN: 64 bytes from lnkd.in...",
          },
          {
            href: "https://github.com",
            text: "GITHUB: 64 bytes from gh.com...",
          },
          {
            href: "mailto:contact@example.com",
            text: "EMAIL: 64 bytes from mail.server...",
          },
        ];
        renderOutput = (isTyping, setIsTyping, isLatest) => (
          <SequentialList
            items={items}
            isLatest={isLatest}
            isTyping={isTyping}
            onComplete={() => setIsTyping(false)}
          />
        );
        break;
      }
      case "wget resume.pdf": {
        const text = "Downloading resume.pdf...";
        renderOutput = (isTyping, setIsTyping, isLatest) =>
          isLatest ? (
            <TextType
              text={text}
              {...getTextTypeProps(isLatest, isTyping, setIsTyping)}
            />
          ) : (
            text
          );
        setTimeout(() => {
          window.open("/resume.pdf", "_blank");
        }, 500);
        break;
      }
      case "clear":
        setHistory([]);
        setInput("");
        return; // Don't push clear command to history
      case "exit":
        onClose();
        setInput("");
        return;
      case "sudo rm -rf /": {
        const text =
          "Permission denied: System root is immutable. This incident will be reported.";
        renderOutput = (isTyping, setIsTyping, isLatest) =>
          isLatest ? (
            <TextType
              text={text}
              {...getTextTypeProps(isLatest, isTyping, setIsTyping)}
            />
          ) : (
            text
          );
        break;
      }
      case "reboot": {
        const text = "Initiating system reboot...";
        renderOutput = (isTyping, setIsTyping, isLatest) =>
          isLatest ? (
            <TextType
              text={text}
              {...getTextTypeProps(isLatest, isTyping, setIsTyping)}
            />
          ) : (
            text
          );
        setTimeout(() => {
          setHistory([
            {
              command: "",
              renderOutput: () => bootSequence,
            },
          ]);
        }, 800);
        break;
      }
      case "uptime": {
        const text =
          "up 21 years, 235 days, 1 user, load average: 100% (Preparing for deployment)";
        renderOutput = (isTyping, setIsTyping, isLatest) =>
          isLatest ? (
            <TextType
              text={text}
              {...getTextTypeProps(isLatest, isTyping, setIsTyping)}
            />
          ) : (
            text
          );
        break;
      }
      case "theme dark": {
        let text = "";
        if (themeContext) {
          if (themeContext.theme === "dark") {
            text = "[SYSTEM] Theme is already set to DARK.";
          } else {
            themeContext.toggleTheme("dark");
            text =
              "[SYSTEM] Theme protocols updated to DARK. Ah, darkness... your retinas thank you for sparing them from the flashbang.";
          }
        } else {
          text = "Theme module unavailable.";
        }
        renderOutput = (isTyping, setIsTyping, isLatest) =>
          isLatest ? (
            <TextType
              text={text}
              {...getTextTypeProps(isLatest, isTyping, setIsTyping)}
            />
          ) : (
            text
          );
        break;
      }
      case "theme light": {
        let text = "";
        if (themeContext && themeContext.theme === "light") {
          text =
            "[ERROR] You are already in LIGHT mode. What do you want, a supernova? Put on some sunglasses, bruh.";
        } else {
          text =
            "[WARNING] Light theme requested. High photon emission may degrade visual receptors. Append --force to override.";
        }
        renderOutput = (isTyping, setIsTyping, isLatest) =>
          isLatest ? (
            <TextType
              text={text}
              {...getTextTypeProps(isLatest, isTyping, setIsTyping)}
            />
          ) : (
            text
          );
        break;
      }
      case "theme light --force": {
        let text = "";
        if (themeContext) {
          if (themeContext.theme === "light") {
            text =
              "[FATAL] Override denied. Maximum brightness achieved. My eyes are burning, please stop.";
          } else {
            themeContext.toggleTheme("light");
            text =
              "[SYSTEM] Override accepted. Initiating light sequence. Godspeed to your retinas.";
          }
        } else {
          text = "Theme module unavailable.";
        }
        renderOutput = (isTyping, setIsTyping, isLatest) =>
          isLatest ? (
            <TextType
              text={text}
              {...getTextTypeProps(isLatest, isTyping, setIsTyping)}
            />
          ) : (
            text
          );
        break;
      }
      default: {
        const text = `Command not found: ${trimmed}. Type 'help' for available commands.`;
        renderOutput = (isTyping, setIsTyping, isLatest) =>
          isLatest ? (
            <TextType
              text={text}
              {...getTextTypeProps(isLatest, isTyping, setIsTyping)}
            />
          ) : (
            text
          );
      }
    }

    if (lowerCmd !== "help" && lowerCmd !== "clear" && lowerCmd !== "exit") {
      setIsTyping(true);
    }

    setHistory((prev) => [...prev, { command: trimmed, renderOutput }]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Tab" || e.key === "ArrowRight") {
      const suggestion = input
        ? AVAILABLE_COMMANDS.find((cmd) => cmd.startsWith(input.toLowerCase()))
        : undefined;
      if (suggestion && input !== suggestion) {
        e.preventDefault();
        setInput(suggestion);
      }
    } else if (e.key === "Enter") {
      if (input.trim()) {
        setCmdHistory((prev) => [...prev, input.trim()]);
      }
      setHistoryIndex(-1);
      processCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const newIndex =
          historyIndex === -1
            ? cmdHistory.length - 1
            : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(cmdHistory[newIndex] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= cmdHistory.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(newIndex);
          setInput(cmdHistory[newIndex] || "");
        }
      }
    }
  };

  const suggestion = input
    ? AVAILABLE_COMMANDS.find((cmd) => cmd.startsWith(input.toLowerCase()))
    : undefined;

  return (
    <div
      ref={containerRef}
      className="w-full bg-bg-default border-t border-border-default flex flex-col font-mono"
      onClick={handleContainerClick}
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-bg-surface border-b border-border-subtle shrink-0">
        <div className="flex items-center gap-2">
          <TerminalIcon size={14} className="text-primary" />
          <span className="text-[10px] text-fg-secondary uppercase tracking-widest">
            System.Terminal
          </span>
        </div>
        <button
          onClick={onClose}
          className="text-fg-tertiary hover:text-fg-primary transition-colors cursor-target focus:outline-none text-xs"
        >
          [ EXIT ]
        </button>
      </div>

      {/* Terminal Content */}
      <div
        ref={contentRef}
        className="flex-1 p-4 overflow-y-auto flex flex-col gap-2 cursor-text"
      >
        <div className="space-y-1 text-sm sm:text-base">
          {history.map((entry, i) => (
            <div key={i} className="flex flex-col gap-1">
              {entry.command && (
                <div className="flex items-start gap-2">
                  <span className="text-primary shrink-0">guest@sys_bk:~$</span>
                  <span className="text-fg-primary break-all">
                    {entry.command}
                  </span>
                </div>
              )}
              {entry.renderOutput && (
                <div className="text-fg-secondary whitespace-pre-wrap">
                  {entry.renderOutput(
                    isTyping,
                    setIsTyping,
                    i === history.length - 1
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Active Input Line */}
        {!isTyping && (
          <div className="flex items-center gap-2 mt-1 text-sm sm:text-base">
            <span className="text-primary shrink-0">guest@sys_bk:~$</span>

            <div className="relative flex-1 flex items-center min-h-[24px]">
              {/* Ghost Text Overlay */}
              {suggestion && input && (
                <div className="absolute inset-0 flex items-center pointer-events-none whitespace-pre text-fg-tertiary">
                  <span className="text-transparent">{input}</span>
                  <span>{suggestion.slice(input.length)}</span>
                </div>
              )}

              {/* Native Input */}
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="relative z-10 flex-1 bg-transparent border-none outline-none text-fg-primary cursor-text p-0 focus:ring-0 w-full h-full caret-primary"
                spellCheck="false"
                autoComplete="off"
              />
            </div>
          </div>
        )}
        <div ref={bottomRef} className="h-4 shrink-0" />
      </div>
    </div>
  );
};

export default TerminalUI;
