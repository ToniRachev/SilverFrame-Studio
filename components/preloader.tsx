'use client';

import { useEffect, useRef, useState } from "react";
import { gsap, SplitText } from "@/lib/gsap-plugins"
import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";
import { GSAP_SELECTORS } from "@/lib/gsap-constants";

const movieStages = [
    'Inspiration',
    'Story',
    'Creation',
    'Vision',
    'Premiere',
    'Legacy'
]

export default function Preloader() {
    const lenis = useLenis();

    const [loading, setLoading] = useState(true);

    const preloaderRef = useRef<HTMLDivElement>(null);
    const loaderRef = useRef<HTMLDivElement>(null);
    const stagesRef = useRef<HTMLDivElement[]>([]);

    const setStagesRef = (index: number, ref: HTMLDivElement | null) => {
        if (ref) {
            stagesRef.current[index] = ref;
        }
    }

    useGSAP(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                setLoading(false);
            }
        })
            .fromTo(stagesRef.current,
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 0.3,
                    ease: "power2.inOut",
                    stagger: {
                        each: 0.6,
                        yoyo: true,
                        repeat: 1,
                    }
                }
            )
            .to(loaderRef.current, {
                width: '100svw',
                duration: 2,
                ease: 'power2.inOut',
            })
            .to('.text-loader', {
                opacity: 0,
                duration: 0.5,
                ease: 'power2.inOut',
            })
            .to(loaderRef.current, {
                height: '100vh',
                duration: 0.5,
                ease: 'power2.inOut',
            })
            .fromTo(`.${GSAP_SELECTORS.preloader.home.hero.container}`, {
                opacity: 0,
                rotateZ: -15,
                scale: 0,
            }, {
                opacity: 1,
                rotateZ: 0,
                scale: 1,
                duration: 1.5,
                ease: 'elastic.out(0.2,1.5)',
            }, '< 0.2')

        const textElements = document.querySelectorAll(`.${GSAP_SELECTORS.preloader.home.hero.content}`);

        if (textElements.length > 0) {
            textElements.forEach((element, index) => {
                const split = new SplitText(element, {
                    type: 'lines',
                    mask: 'lines',
                    linesClass: 'line',
                    autoSplit: true,
                });

                tl.fromTo(split.lines, {
                    y: '100%',
                }, {
                    y: 0,
                    duration: 1,
                    stagger: 0.01,
                    ease: 'expo.out',
                }, index === 0 ? '>-1.2' : '<0.1')
            });
        }
    })

    useEffect(() => {
        if (loading) {
            lenis?.scrollTo(0, { immediate: true });
            lenis?.stop();
        } else {
            lenis?.start();
        }
    }, [loading, lenis])


    if (!loading) return null;

    return (
        <div ref={preloaderRef} className="fixed top-0 left-0 w-full max-w-[100svw] h-[100svh] bg-stone-200 flex items-center">

            <div className="absolute w-full h-full  flex items-center justify-center">
                {movieStages.map((stage, index) => (
                    <div key={stage} ref={(ref) => setStagesRef(index, ref)} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black opacity-0">
                        <h1 className="!text-[8em]">{stage}</h1>
                    </div>
                ))}
            </div>

            <div ref={loaderRef} className="w-0 h-[8vh] bg-black flex justify-between items-center gap-4 overflow-hidden z-100">
                <h5 className="text-loader px-2">SilverFrame</h5>
                <h5 className="text-loader px-2">Studios</h5>
            </div>
        </div>
    )
}