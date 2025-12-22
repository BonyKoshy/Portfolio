// src/types/declarations.d.ts

// Allow import of .jsx files (temporary until full migration)
declare module '*.jsx' {
  const content: any;
  export default content;
}

// Module declarations for absolute paths that point to JSX files
declare module '@/features/theme/ThemeContext';
declare module '@/shared/ui/ContextMenu';
declare module '@/widgets/Header/Header';
declare module '@/widgets/Hero/Hero';
declare module '@/widgets/About/About';
declare module '@/widgets/CertificatesList/CertificatesList';
declare module '@/widgets/Projects/Projects';
declare module '@/widgets/Contact/Contact';
declare module '@/pages/PrivacyPolicy';
declare module '@/pages/Unauthorized';
declare module '@/pages/Forbidden';
declare module '@/pages/NotFound';
declare module '@/shared/ui/StaggeredMenu/StaggeredMenu';
declare module '@/features/theme/ui/ThemeToggle';
declare module '@/shared/ui/Squares/Squares';
declare module '@/shared/ui/GradualBlur/GradualBlur';

// Virtual PWA module
declare module 'virtual:pwa-register/react' {
  export interface RegisterSWOptions {
    immediate?: boolean;
    onNeedRefresh?: () => void;
    onOfflineReady?: () => void;
    onRegistered?: (registration: ServiceWorkerRegistration | undefined) => void;
    onRegisterError?: (error: any) => void;
  }

  export function useRegisterSW(options?: RegisterSWOptions): {
    needRefresh: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
    offlineReady: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
    updateServiceWorker: (reloadPage?: boolean) => Promise<void>;
  };
}
