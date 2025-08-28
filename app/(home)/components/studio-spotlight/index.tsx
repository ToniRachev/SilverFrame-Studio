'use client'

import SectionContainer from "@/components/section-container";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText } from "@/lib/gsap-plugins";
import Image from "next/image";
import { useRef } from "react";

export default function StudioSpotlight() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const imageWrapperRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const captionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const split = SplitText.create(captionRef.current, {
            type: 'words',
        })

        gsap.set(split.words, {
            opacity: 0,
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',
                end: 'bottom bottom',
                pin: imageWrapperRef.current,
                scrub: true,
            }
        })
            .to(imageWrapperRef.current, {
                maskSize: '400%',
                webkitMaskSize: '400%',
                duration: 3,
                ease: 'power2.inOut',
            }, '1')

            .to(imageRef.current, {
                scale: 1,
                duration: 3.5
            }, '<')
            .to(split.words, {
                opacity: 1,
                duration: 0,
                ease: 'power2.inOut',
                stagger: 0.3,
            })
    }, [])

    return (
        <div className="mt-[-200vh]">
            <div ref={sectionRef} className="w-full h-[300vh] overflow-hidden">
                <div className="w-full h-[100vh] relative">
                    <div
                        ref={imageWrapperRef}
                        className="absolute top-0 left-0 w-[100svw] h-[100vh] overflow-hidden z-10"
                        style={{
                            WebkitMask: `url('/spotlight-mask.svg') no-repeat center center / contain`,
                            mask: `url('/spotlight-mask.svg') no-repeat center center / contain`,
                            WebkitMaskPosition: 'center',
                            maskPosition: 'center',
                            maskSize: '0%',
                        }}
                    >
                        <div className="w-[100svw] h-[100svh] relative overflow-hidden">
                            <Image ref={imageRef} src="/home/featured-movies/spotlight.jpg" alt="movie" fill className="object-cover object-center scale-125" />

                            <div ref={captionRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-prose text-center select-none pointer-events-none">
                                <h1>We Bring Stories Worth Sharing</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SectionContainer className="pt-[20vh]">
                <p className="!text-2xl max-w-[45ch]">
                    Every story is crafted with passion and precision. We combine creativity, technical skill, and cinematic vision to bring unforgettable films to life. From the first spark of an idea to the final cut, our team works tirelessly to ensure every frame tells a compelling story.
                    With a focus on innovation and artistry, we explore diverse genres and styles, pushing the boundaries of modern cinema. Our directors, writers, and production specialists collaborate seamlessly to deliver projects that captivate audiences worldwide. Every project embodies our commitment to cinematic excellence, from intimate dramas to epic adventures.
                </p>

                <div className="mt-[20vh] w-full h-[80vh] relative">
                    <Image src="/home/spotlight/studio-spotlight.jpg" alt="Studio Spotlight" fill className="w-full h-full object-cover object-[center_80%]" />
                </div>
            </SectionContainer>
        </div>
    )
}