'use client';

import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import Image from "next/image";
import { useRef } from "react";
import { gsap } from "@/lib/gsap-plugins";

interface ParallaxImageProps {
    image: string;
    alt: string;
    className?: string;
    motionRange?: 'small' | 'medium' | 'large';
    reverse?: boolean;
}

const parallaxValues = {
    small: '1vh',
    medium: '5vh',
    large: '10vh',
}

export default function ParallaxImage({ image, alt, className, motionRange = 'small', reverse = false }: Readonly<ParallaxImageProps>) {
    const container = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        if (!container.current) return;

        gsap.fromTo(container.current, {
            y: reverse ? `-${parallaxValues[motionRange]}` : parallaxValues[motionRange]
        }, {
            y: reverse ? parallaxValues[motionRange] : `-${parallaxValues[motionRange]}`,
            ease: 'none',
            duration: 1,
            scrollTrigger: {
                trigger: container.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            }
        })
    }, [])

    return (
        <div ref={container} className={clsx('relative overflow-hidden', className)}>
            <Image
                src={image}
                alt={alt}
                fill
                className="object-cover w-full h-full"
            />
        </div>
    )
}