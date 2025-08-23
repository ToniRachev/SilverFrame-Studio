import Image from "next/image";

export default function HeroImage() {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            <Image src="/home/hero.jpg" alt="Hero Image" fill className="w-full h-full object-cover" />
        </div>
    )
}