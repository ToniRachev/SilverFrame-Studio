import SectionContainer from "@/components/section-container";
import AboutParallaxImages from "./components/about-parallax-images";
import AboutContent from "./components/about-content";

export default function About() {
    return (
        <SectionContainer className="h-[100vh] w-full flex">
            <div className="w-full flex-1/2">
                <AboutParallaxImages />
            </div>

            <div className="w-full flex-1/2">
                <AboutContent />
            </div>
        </SectionContainer>
    )
}