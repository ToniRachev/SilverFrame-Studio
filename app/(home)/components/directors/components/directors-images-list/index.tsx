'use client';

import { useRef } from "react";
import { DirectorInterface } from "../../lib/types";
import DirectorImage from "./director-image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-plugins";

interface DirectorsImagesListProps {
    directors: DirectorInterface[];
    activeDirectorIndex: number;
    activeDirector: DirectorInterface;
}

const DIRECTOR_IMAGES_LIST_HEIGHT = 650;

export default function DirectorsImagesList({ directors, activeDirectorIndex, activeDirector }: Readonly<DirectorsImagesListProps>) {
    const listRef = useRef<HTMLUListElement>(null);
    const splitName = activeDirector.name.split(' ');

    const directorsList = [
        {
            ...directors[directors.length - 1],
            name: 'Mockup first director'
        },
        ...directors,
        {
            ...directors[0],
            name: 'Mockup last director'
        }
    ];

    useGSAP(() => {
        const activeIndex = activeDirectorIndex + 1;
        const targetScrollTop = DIRECTOR_IMAGES_LIST_HEIGHT * activeIndex;
        gsap.to(listRef.current, {
            scrollTop: targetScrollTop,
            duration: 1,
            ease: 'back.out(1.7)',
        })

        gsap.fromTo('.director-name', {
            filter: 'blur(10px)',
        }, {
            filter: 'blur(0px)',
            duration: 0.3,
            ease: 'power2.inOut',
        })
    }, [activeDirectorIndex])

    return (
        <div className="relative">
            <ul ref={listRef} className="overflow-hidden h-full relative" style={{ height: `${DIRECTOR_IMAGES_LIST_HEIGHT}px` }}>
                {directorsList.map((director) => (
                    <DirectorImage key={director.name} imageUrl={director.imageUrl} />
                ))}
            </ul>
            <div className="director-name w-full flex flex-col items-end justify-center pt-4">
                <h3 className="!leading-none">{splitName[0]}</h3>
                <h3 className="text-decor !leading-none">{splitName[1]}</h3>
            </div>
        </div>
    )
}