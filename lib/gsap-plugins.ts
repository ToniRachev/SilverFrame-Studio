'use client';

import { gsap, SteppedEase } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export { gsap, SteppedEase, SplitText, ScrollTrigger };