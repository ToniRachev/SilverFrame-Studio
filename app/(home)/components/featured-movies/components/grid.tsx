'use client';

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-plugins";

const movies = [
    '/home/featured-movies/barren-desert.png',
    '/home/featured-movies/paradise.png',
    '/home/featured-movies/paradise.png',
    '/home/featured-movies/barren-desert.png',
    '/home/featured-movies/paradise.png',
    '/home/featured-movies/barren-desert.png',
    '/home/featured-movies/paradise.png',
    '/home/featured-movies/paradise.png',
    '/home/featured-movies/barren-desert.png',
    '/home/featured-movies/paradise.png',
    '/home/featured-movies/barren-desert.png',
    '/home/featured-movies/paradise.png',
    '/home/featured-movies/paradise.png',
    '/home/featured-movies/barren-desert.png',
    '/home/featured-movies/paradise.png',
    '/home/featured-movies/barren-desert.png',
    '/home/featured-movies/paradise.png',
    '/home/featured-movies/paradise.png',
    '/home/featured-movies/barren-desert.png',
    '/home/featured-movies/paradise.png',
    '/home/featured-movies/barren-desert.png',
    '/home/featured-movies/paradise.png',
    '/home/featured-movies/barren-desert.png',
    '/home/featured-movies/paradise.png',
]

const indexToSkip = [1, 5, 7, 9, 12, 18, 21]

export default function Grid() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const gridWrappersRef = useRef<HTMLDivElement[]>([]);
    const captionWrapper = useRef<HTMLDivElement>(null);

    const setGridWrappersRefs = (el: HTMLDivElement, index: number) => {
        gridWrappersRef.current[index] = el;
    }

    useGSAP(() => {
        gsap.timeline({
            defaults: {
                ease: 'sine',
            },
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top bottom',
                end: '+=250%',
                scrub: 1.5,
            }
        })
            .from(gridWrappersRef.current, {
                stagger: 0.07,
                y: () => gsap.utils.random(window.innerHeight, window.innerHeight * 1.8),
            })
            .from(captionWrapper.current, {
                opacity: 0,
                y: 100,
            }, '1')
    }, [])

    return (
        <div ref={sectionRef} className="w-full h-[300vh] relative">
            <div className="w-full h-[100vh] sticky top-0">
                <div className="grid grid-cols-8 gap-1 relative">
                    {movies.map((movie, index) => {
                        if (indexToSkip.includes(index)) {
                            return (
                                <div key={index} className="w-full h-[calc(100vh/3)]" />
                            )
                        }

                        return (
                            <div key={index} className="w-full h-full" ref={el => setGridWrappersRefs(el!, index)}>
                                <Image src={movie} alt="movie" width={400} height={500} className="w-full h-[calc(100vh/3)] object-cover" />
                            </div>
                        )
                    })}

                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-5" />
                </div>

                <div ref={captionWrapper} className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col">
                    <h1 className="m-0 p-0 leading-none">A Selection of Our Stories</h1>
                    <p className="text-right">Crafted with passion to inspire audiences</p>
                </div>
            </div>
        </div>
    )
}