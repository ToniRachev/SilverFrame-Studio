import SectionContainer from "@/components/section-container";
import Image from "next/image";

export default function StudioSpotlight() {
    return (
        <SectionContainer className="pt-[20vh]">
            <p className="!text-2xl max-w-[45ch]">
                Every story is crafted with passion and precision. We combine creativity, technical skill, and cinematic vision to bring unforgettable films to life. From the first spark of an idea to the final cut, our team works tirelessly to ensure every frame tells a compelling story.
                With a focus on innovation and artistry, we explore diverse genres and styles, pushing the boundaries of modern cinema. Our directors, writers, and production specialists collaborate seamlessly to deliver projects that captivate audiences worldwide. Every project embodies our commitment to cinematic excellence, from intimate dramas to epic adventures.
            </p>

            <div className="mt-[20vh] w-full h-[80vh] relative">
                <Image src="/home/spotlight/studio-spotlight.jpg" alt="Studio Spotlight" fill className="w-full h-full object-cover object-[center_80%]" />
            </div>
        </SectionContainer>
    )
}