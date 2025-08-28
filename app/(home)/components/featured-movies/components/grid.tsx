'use client';

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-plugins";
import GridItem from "./grid-item";
import FeaturedMoviesCaption from "./featured-movies-caption";

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


export default function Grid() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const gridWrappersRef = useRef<HTMLDivElement[]>([]);
    const gridRef = useRef<HTMLDivElement>(null);
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
                start: 'top center',
                end: 'bottom bottom',
                scrub: 1.5,
            }
        })
            .from(gridWrappersRef.current, {
                stagger: 0.07,
                y: () => gsap.utils.random(window.innerHeight, window.innerHeight * 1.8),
            })
            .to(sectionRef.current, {
                opacity: 0,
            })
            .from(captionWrapper.current, {
                opacity: 0,
                y: 100,
            }, '1')
    }, [])

    return (
        <div ref={sectionRef} className="w-full h-[300vh] relative">
            <div className="w-full h-[100vh] sticky top-0">
                <div ref={gridRef} className="grid grid-cols-8 gap-1 relative">
                    {movies.map((movie, index) => {
                        return (
                            <GridItem
                                key={`${movie}-${index}`}
                                index={index}
                                imageUrl={movie}
                                setGridWrappersRefs={setGridWrappersRefs}
                            />
                        )
                    })}
                </div>

                <FeaturedMoviesCaption captionWrapper={captionWrapper} />
            </div>
        </div>
    )
}