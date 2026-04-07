// Facebook / Instagram Pixel — Notion LATAM
export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || "";

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

export const pageview = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "PageView");
  }
};

export const viewContent = (contentName: string, contentCategory: string) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "ViewContent", {
      content_name: contentName,
      content_category: contentCategory,
    });
  }
};

export const addToCart = (contentName: string, value: number) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "AddToCart", {
      content_name: contentName,
      value,
      currency: "USD",
    });
  }
};

export const initiateCheckout = (value: number) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "InitiateCheckout", { value, currency: "USD" });
  }
};

export const purchase = (value: number, contentName?: string) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Purchase", {
      value,
      currency: "USD",
      content_name: contentName,
    });
  }
};

export const lead = (contentName?: string) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Lead", { content_name: contentName });
  }
};

export const completeRegistration = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "CompleteRegistration");
  }
};
