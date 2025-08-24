'use client';

import React, { ReactNode, useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText, ScrollTrigger } from "@/lib/gsap-plugins";

type TextMaskProps = {
    children: ReactNode;
    delay?: number;
    once?: boolean;
}

export default function TextMask({ children, delay = 0, once = false }: Readonly<TextMaskProps>) {
    const container = useRef<HTMLDivElement | null>(null);
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        document.fonts.ready.then(() => {
            setFontsLoaded(true);
        });
    }, []);

    useGSAP(() => {
        if (!fontsLoaded) return;

        const elements = container.current?.querySelectorAll("[data-text-mask]") || [];
        elements.forEach((element) => {
            const split = new SplitText(element, {
                type: 'lines',
                mask: 'lines',
            });

            gsap.set(split.lines, {
                y: '100',
            })

            gsap.to(split.lines, {
                y: 0,
                duration: 1,
                stagger: 0.1,
                ease: 'power4.out',
                delay,
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top bottom',
                    toggleActions: 'restart none none reset',
                    once: once,
                    markers: false,
                }
            })
        })

        ScrollTrigger.refresh();
    }, { scope: container, dependencies: [fontsLoaded] });

    return (
        <div ref={container}>
            {React.Children.map(children, (child) => (
                React.isValidElement(child) ? (
                    <div data-text-mask>
                        {child}
                    </div>
                ) : child
            ))}
        </div>
    )
}