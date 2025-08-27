'use client';

import { gsap } from "@/lib/gsap-plugins";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

import SectionContainer from "@/components/section-container";

export default function Footer() {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageWrapperRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const text2Ref = useRef<HTMLHeadingElement>(null);
    const caption1Ref = useRef<HTMLDivElement>(null);
    const caption2Ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom-=30%",
                end: "center center-=20%",
                scrub: true,
            },
        })
            .addLabel("start")
            .fromTo(text2Ref.current, {
                y: '-15vh'
            }, {
                y: 0,
                ease: "power2.inOut",
            }, "start")
            .fromTo(textRef.current, {
                y: '15vh'
            }, {
                y: 0,
                ease: "power2.inOut",
            }, "start")
            .fromTo(
                imageWrapperRef.current,
                {
                    scale: 0,
                },
                {
                    scale: 1,
                    ease: "power1.inOut",

                }, "start")
            .fromTo(caption1Ref.current, {
                opacity: 0,
                ease: "power2.inOut",
            }, {
                opacity: 1,
                ease: "power2.inOut",
            }, "start+=0.3")
            .fromTo(caption2Ref.current, {
                opacity: 0,
                ease: "power2.inOut",
            }, {
                opacity: 1,
                ease: "power2.inOut",
            }, "start+=0.3")
    }, [])


    return (
        <footer>
            <SectionContainer className="">
                <div ref={containerRef} className="w-full h-screen flex flex-col justify-center items-center">
                    <h1 ref={textRef} className="!m-0 !indent-0">Let&apos;s</h1>

                    <div ref={imageWrapperRef} className="relative w-[30vw] h-[30vh] origin-center">
                        <Image src="/home/awards/studio-award.jpg" alt="Contact 1" fill className="object-cover object-[50%_90%]" />

                        <div ref={caption1Ref} className="absolute -left-1/3 top-1/2 -translate-y-1/2 opacity-0">
                            <p className="italic">Stories worth telling</p>
                        </div>

                        <div ref={caption2Ref} className="absolute -right-1/3 top-1/2 -translate-y-1/2 flex gap-10 justify-end opacity-0">
                            <p className="italic">Films worth making</p>
                        </div>
                    </div>

                    <h1 ref={text2Ref} className="!indent-0">Create</h1>
                </div>
            </SectionContainer>
        </footer>
    )
}