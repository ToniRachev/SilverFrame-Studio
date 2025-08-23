import HeroImage from "./components/hero-image";
import HeroContent from "./components/hero-content";
import NoiseAnimation from "@/components/noise-animation";

export default function Hero() {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            <NoiseAnimation />
            <HeroImage />
            <HeroContent />
        </div>
    )
}