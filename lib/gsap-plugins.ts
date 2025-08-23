'use client';

import { gsap, SteppedEase } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export { gsap, SteppedEase, ScrollTrigger };