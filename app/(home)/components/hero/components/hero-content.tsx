import Button from "@/components/button";
import SectionContainer from "@/components/section-container";
import clsx from "clsx";
import { GSAP_SELECTORS } from "@/lib/gsap-constants";

export default function HeroContent() {
    return (
        <SectionContainer>
            <div className='absolute bottom-24 text-balance'>
                <h1>
                    <span className={clsx('block', GSAP_SELECTORS.preloader.home.hero.content)}>The Vanishing</span>
                    <span className={clsx('block', GSAP_SELECTORS.preloader.home.hero.content)}>of Aurora Lane</span>
                </h1>
                <p className={GSAP_SELECTORS.preloader.home.hero.content}>A story of shadows and light, where every secret hides another truth...</p>
                <div className={GSAP_SELECTORS.preloader.home.hero.content}>
                    <Button className="uppercase">Watch Trailer</Button>
                </div>
            </div>
        </SectionContainer>
    )
}