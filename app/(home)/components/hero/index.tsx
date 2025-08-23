import HeroImage from "./components/hero-image";
import HeroContent from "./components/hero-content";

export default function Hero() {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            <HeroImage />
            <HeroContent />
        </div>
    )
}