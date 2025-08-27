import HeroImage from "./components/hero-image";
import HeroContent from "./components/hero-content";
import NoiseAnimation from "@/components/noise-animation";
import clsx from "clsx";
import { GSAP_SELECTORS } from "@/lib/gsap-constants";

export default function Hero() {
    return (
        <div className={clsx('relative h-screen w-full overflow-hidden opacity-0', GSAP_SELECTORS.preloader.home.hero.container)}>
            <HeroImage />
            <NoiseAnimation />
            <HeroContent />
        </div>
    )
}