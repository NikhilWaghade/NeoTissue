// Configuration for NeoTissueBio
export const SERVER_DOMAIN =
  import.meta.env.VITE_SERVER_DOMAIN || "http://localhost:4242";

// Email configuration
export const EMAIL_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
};

// Contact form configuration
export const CONTACT_CONFIG = {
  SUCCESS_MESSAGE:
    "Thank you for contacting NeoTissueBio! We'll get back to you soon.",
  ERROR_MESSAGE:
    "Sorry, there was an error sending your message. Please try again.",
};
