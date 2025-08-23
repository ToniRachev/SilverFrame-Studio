'use client';

import { useEffect, useRef } from "react";
import { gsap, SteppedEase } from "@/lib/gsap-plugins";

export default function NoiseAnimation() {
    const noiseRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = noiseRef.current;
        if (!element) return;

        gsap.to(element, {
            backgroundPosition: '100% 100%',
            duration: 0.12,
            repeat: -1,
            yoyo: true,
            ease: SteppedEase.config(1),
            filter: 'blur(1px)',
        });
    }, []);

    return (
        <>
            <div className="absolute inset-0 w-full h-full bg-black opacity-20" />
            <div
                ref={noiseRef}
                className="absolute bottom-0 right-0 w-full h-full inset-0 opacity-10 mix-blend-multiply"
                style={{
                    backgroundImage: 'url("/noise.png")',
                    backgroundSize: 'contain'
                }}
            />
        </>
    );
}
