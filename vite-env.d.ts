/// <reference types="vite/client" />

declare global {
  namespace JSX {
    interface IntrinsicElements {
      load: {
        src: string;
        title?: string;
      };
    }
  }
}
