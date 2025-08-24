import SectionContainer from "@/components/section-container";
import TextMask from "@/components/text-mask";

export default function About() {
    return (
        <SectionContainer className="h-[100vh] w-full flex flex-col gap-24">
            <div className="flex flex-col max-w-[120ch]">
                <TextMask>
                    <p>SilverFrame Studios</p>
                    <h3 className="!leading-none">Dedicated to crafting cinematic experiences that captivate audiences worldwide, we bring every story to life with artistry and passion. From visionary storytelling to meticulous production design, each project is carefully crafted to inspire, entertain, and leave a lasting impression.</h3>
                </TextMask>
            </div>

            <div className="w-full flex justify-end">
                <TextMask>
                    <p className="max-w-[120ch] !leading-none">With a team of talented directors, writers, cinematographers, and production specialists, we explore diverse genres and innovative techniques to push the boundaries of modern cinema. Every frame is carefully composed, every narrative thoughtfully developed, ensuring that our films resonate deeply with audiences and leave a lasting impression.</p>
                </TextMask>
            </div>
        </SectionContainer>
    )
}