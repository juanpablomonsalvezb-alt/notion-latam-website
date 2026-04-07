// Google Analytics 4 — Notion LATAM
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("config", GA_TRACKING_ID, { page_path: url });
  }
};

// ────────────────────────────────────────
// Event helpers
// ────────────────────────────────────────
type GTagEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

export const event = ({ action, category, label, value }: GTagEvent) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
};

// ────────────────────────────────────────
// Navigation events
// ────────────────────────────────────────
export const trackClickLogo = () =>
  event({ action: "click_logo", category: "navigation" });

export const trackOpenMobileMenu = () =>
  event({ action: "open_mobile_menu", category: "navigation" });

export const trackFooterLink = (label: string) =>
  event({ action: "footer_link_click", category: "navigation", label });

// ────────────────────────────────────────
// Templates events
// ────────────────────────────────────────
export const trackViewTemplate = (templateName: string) =>
  event({ action: "view_template_details", category: "templates", label: templateName });

export const trackFilterTemplates = (filter: string) =>
  event({ action: "filter_templates", category: "templates", label: filter });

export const trackAddToWishlist = (templateName: string) =>
  event({ action: "add_to_wishlist", category: "templates", label: templateName });

export const trackTemplatePurchaseStart = (templateName: string) =>
  event({ action: "template_purchase_start", category: "templates", label: templateName });

export const trackTemplatePurchaseComplete = (templateName: string, value: number) =>
  event({ action: "template_purchase_complete", category: "templates", label: templateName, value });

// ────────────────────────────────────────
// Curso events
// ────────────────────────────────────────
export const trackViewCurriculum = () =>
  event({ action: "view_curriculum", category: "curso" });

export const trackWatchPreviewVideo = () =>
  event({ action: "watch_preview_video", category: "curso" });

export const trackCourseEnrollmentStart = (plan: string) =>
  event({ action: "course_enrollment_start", category: "curso", label: plan });

export const trackCoursePurchaseComplete = (plan: string, value: number) =>
  event({ action: "course_purchase_complete", category: "curso", label: plan, value });

// ────────────────────────────────────────
// Consultoría events
// ────────────────────────────────────────
export const trackViewServiceDetails = (service: string) =>
  event({ action: "view_service_details", category: "consultoria", label: service });

export const trackComparePackages = () =>
  event({ action: "compare_packages", category: "consultoria" });

export const trackBookDiscoveryCall = () =>
  event({ action: "book_discovery_call", category: "consultoria" });

export const trackConsultationFormSubmit = () =>
  event({ action: "consultation_form_submit", category: "consultoria" });

// ────────────────────────────────────────
// Bot / Waitlist events
// ────────────────────────────────────────
export const trackJoinWaitlist = () =>
  event({ action: "join_waitlist", category: "bot" });

export const trackWaitlistShare = (platform: string) =>
  event({ action: "waitlist_share", category: "bot", label: platform });

// ────────────────────────────────────────
// Engagement events
// ────────────────────────────────────────
export const trackNewsletterSubscribe = () =>
  event({ action: "newsletter_subscribe", category: "engagement" });

export const trackSocialMediaClick = (platform: string) =>
  event({ action: "social_media_click", category: "engagement", label: platform });

export const trackTestimonialExpand = () =>
  event({ action: "testimonial_expand", category: "engagement" });

export const trackFaqExpand = (question: string) =>
  event({ action: "faq_expand", category: "engagement", label: question });
