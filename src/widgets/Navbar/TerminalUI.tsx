import React, { useLayoutEffect, useRef, useEffect, useState, ReactNode, useContext } from 'react';
import { gsap } from 'gsap';
import { Terminal as TerminalIcon } from 'lucide-react';
import { ThemeContext, ThemeContextValues } from "@/app/providers/ThemeProvider";

interface TerminalUIProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistory {
  command: string;
  output: ReactNode | string;
}

const AVAILABLE_COMMANDS = [
  'help', 'whoami', 'ls -la /skills', 'cat experience.log',
  'ping network', 'wget resume.pdf', 'clear', 'exit',
  'sudo rm -rf /', 'reboot', 'uptime', 'theme dark', 'theme light', 'theme light --force'
];

const TerminalUI: React.FC<TerminalUIProps> = ({ isOpen, onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  
  const themeContext = useContext(ThemeContext) as ThemeContextValues | null;
  
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

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

    gsap.set(container, { height: 0, opacity: 0, overflow: 'hidden' });
    
    const tl = gsap.timeline({ paused: true });
    
    // Animate height to fill 90vh minus the 64px top bar
    tl.to(container, {
      height: 'calc(90vh - 64px)',
      opacity: 1,
      duration: 0.5,
      ease: 'power3.inOut'
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
      setHistory([{
        command: '',
        output: bootSequence
      }]);
      setInput('');
      tlRef.current.play();
      
      // Focus input
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      tlRef.current.reverse();
    }
  }, [isOpen]);

  // Auto-Scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  const processCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    let output: ReactNode | string = '';
    const lowerCmd = trimmed.toLowerCase();

    switch (lowerCmd) {
      case 'help':
        output = (
          <div className="flex flex-col gap-1">
            <div>whoami             - Display current user identity</div>
            <div>ls -la /skills     - List core competencies</div>
            <div>cat experience.log - Display work history</div>
            <div>ping network       - Show network connections (links)</div>
            <div>wget resume.pdf    - Download resume file</div>
            <div>clear              - Clear terminal output</div>
            <div>uptime             - System uptime information</div>
            <div>theme [args]       - Toggle system theme (dark/light)</div>
            <div>reboot             - Restart terminal session</div>
            <div>exit               - Close terminal</div>
          </div>
        );
        break;
      case 'whoami':
        output = 'Bony Koshy. BCA Graduate. Incoming System and Application Services Associate @ Accenture.';
        break;
      case 'ls -la /skills':
        output = (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1">
            <div>Windows_Server</div>
            <div>NetApp</div>
            <div>NetBackup</div>
            <div>Rubrik</div>
            <div>EverPure</div>
            <div>Linux</div>
          </div>
        );
        break;
      case 'cat experience.log':
        output = (
          <div className="whitespace-pre-wrap">
            {`CMS Cybersecurity Council (CCC) - Systems Admin\nAccenture - Incoming June 2026`}
          </div>
        );
        break;
      case 'ping network':
        output = (
          <div className="flex flex-col gap-1">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-violet-400 underline decoration-zinc-800 underline-offset-4">LINKEDIN: 64 bytes from lnkd.in...</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-violet-400 underline decoration-zinc-800 underline-offset-4">GITHUB: 64 bytes from gh.com...</a>
            <a href="mailto:contact@example.com" className="hover:text-violet-400 underline decoration-zinc-800 underline-offset-4">EMAIL: 64 bytes from mail.server...</a>
          </div>
        );
        break;
      case 'wget resume.pdf':
        output = 'Downloading resume.pdf...';
        setTimeout(() => {
          window.open('/resume.pdf', '_blank');
        }, 500);
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return; // Don't push clear command to history
      case 'exit':
        onClose();
        setInput('');
        return;
      case 'sudo rm -rf /':
        output = 'Permission denied: System root is immutable. This incident will be reported.';
        break;
      case 'reboot':
        output = 'Initiating system reboot...';
        setTimeout(() => {
          setHistory([{
            command: '',
            output: bootSequence
          }]);
        }, 800);
        break;
      case 'uptime':
        output = 'up 21 years, 235 days, 1 user, load average: 100% (Preparing for deployment)';
        break;
      case 'theme dark':
        if (themeContext) {
          themeContext.toggleTheme('dark');
          output = '[SYSTEM] Theme protocols updated to DARK.';
        } else {
          output = 'Theme module unavailable.';
        }
        break;
      case 'theme light':
        output = '[WARNING] Light theme requested. High photon emission may degrade visual receptors. Append --force to override.';
        break;
      case 'theme light --force':
        if (themeContext) {
          themeContext.toggleTheme('light');
          output = '[SYSTEM] Override accepted. Initiating light sequence.';
        } else {
          output = 'Theme module unavailable.';
        }
        break;
      default:
        output = `Command not found: ${trimmed}. Type 'help' for available commands.`;
    }

    setHistory((prev) => [...prev, { command: trimmed, output }]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Tab' || e.key === 'ArrowRight') {
      const suggestion = input ? AVAILABLE_COMMANDS.find(cmd => cmd.startsWith(input.toLowerCase())) : undefined;
      if (suggestion && input !== suggestion) {
        e.preventDefault();
        setInput(suggestion);
      }
    } else if (e.key === 'Enter') {
      if (input.trim()) {
        setCmdHistory((prev) => [...prev, input.trim()]);
      }
      setHistoryIndex(-1);
      processCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const newIndex = historyIndex === -1 ? cmdHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(cmdHistory[newIndex] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= cmdHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(cmdHistory[newIndex] || '');
        }
      }
    }
  };

  const suggestion = input ? AVAILABLE_COMMANDS.find(cmd => cmd.startsWith(input.toLowerCase())) : undefined;

  return (
    <div ref={containerRef} className="w-full bg-bg-default border-t border-border-default flex flex-col font-mono" onClick={handleContainerClick}>
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
                  <span className="text-fg-primary break-all">{entry.command}</span>
                </div>
              )}
              {entry.output && (
                <div className="text-fg-secondary">
                  {entry.output}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Active Input Line */}
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
              className="relative z-10 flex-1 bg-transparent border-none outline-none text-fg-primary cursor-text p-0 focus:ring-0 w-full h-full"
              spellCheck="false"
              autoComplete="off"
            />
          </div>
        </div>
        <div ref={bottomRef} className="h-4 shrink-0" />
      </div>

    </div>
  );
};

export default TerminalUI;
