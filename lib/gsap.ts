import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Ensures GSAP plugins are registered safely in Next.js client-side environments.
 */
let pluginsRegistered = false;

export function registerGSAP(): void {
  if (typeof window !== "undefined" && !pluginsRegistered) {
    gsap.registerPlugin(ScrollTrigger);
    pluginsRegistered = true;
  }
}

// Auto-register on client environment
if (typeof window !== "undefined") {
  registerGSAP();
}

export { gsap, ScrollTrigger };
export default gsap;
