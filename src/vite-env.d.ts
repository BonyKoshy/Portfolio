/// <reference types="vite/client" />

declare module '*.jsx' {
  const content: unknown;
  export default content;
}

interface ViewTransition {
  finished: Promise<void>;
  ready: Promise<void>;
  updateCallbackDone: Promise<void>;
  skipTransition: () => void;
}

interface Document {
  startViewTransition(updateCallback: () => Promise<void> | void): ViewTransition;
}
