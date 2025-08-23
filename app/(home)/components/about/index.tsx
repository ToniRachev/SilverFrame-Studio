import ParallaxImage from "@/components/parallax-image";

export default function About() {
    return (
        <div className="min-h-[200vh]">
            <ParallaxImage
                image="/home/about/about-center.jpg"
                alt="About"
                className="w-[30vw] h-[50vh]"
            />
        </div>
    )
}