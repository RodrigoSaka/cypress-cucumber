declare global {
  interface Window {
    token?: string;
    generateJWT: () => string;
  }
  interface HTMLBodyElement {
    token?: string;
  }
}

export {};
