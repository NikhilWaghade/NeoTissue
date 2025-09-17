// Configuration for NeoTissueBio
export const SERVER_DOMAIN =
  import.meta.env.VITE_SERVER_DOMAIN || "http://localhost:4242";

// Contact form configuration
export const CONTACT_CONFIG = {
  SUCCESS_MESSAGE:
    "Thank you for contacting NeoTissueBio! We'll get back to you soon.",
  ERROR_MESSAGE:
    "Sorry, there was an error sending your message. Please try again.",
};
