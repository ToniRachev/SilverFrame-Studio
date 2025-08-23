import Button from "@/components/button";
import SectionContainer from "@/components/section-container";

export default function HeroContent() {
    return (
        <SectionContainer>
            <div className="absolute bottom-24 text-balance max-w-prose">
                <h1>The Vanishing of Aurora Lane</h1>
                <p>A story of shadows and light, where every secret hides another truth...</p>
                <Button className="uppercase">Watch Trailer</Button>
            </div>
        </SectionContainer>
    )
}