'use client';

import SectionContainer from "@/components/section-container";
import DirectorsContent from "./components/directors-content";
import DirectorsWorkList from "./components/directors-work-list";
import { useState } from "react";
import DirectorsImagesList from "./components/directors-images-list";

const directors = [
    {
        name: 'Elena Marquez',
        imageUrl: '/home/directors/elena-marquez.jpg',
        workVideoUrl: '/home/directors/elena-marquez-work.mp4',
    },
    {
        name: 'Daniel Koenig',
        imageUrl: '/home/directors/daniel-koenig.jpg',
        workVideoUrl: '/home/directors/daniel-koenig-work.mp4',
    },
    {
        name: 'Marissa Duvall',
        imageUrl: '/home/directors/marissa-duvall.jpg',
        workVideoUrl: '/home/directors/marissa-duvall-work.mp4',
    },
    {
        name: 'Marcus Hale',
        imageUrl: '/home/directors/marcus-hale.jpg',
        workVideoUrl: '/home/directors/marcus-hale-work.mp4',
    },
    {
        name: 'Adrian Colemont',
        imageUrl: '/home/directors/adrian-colemont.jpg',
        workVideoUrl: '/home/directors/adrian-colemont-work.mp4',
    },
    {
        name: 'Sofia Moretti',
        imageUrl: '/home/directors/sofia-moretti.jpg',
        workVideoUrl: '/home/directors/sofia-moretti-work.mp4',
    }
]

export default function Directors() {
    const [activeDirectorIndex, setActiveDirectorIndex] = useState<number>(0);

    const handleHoverDirectorWork = (directorIndex: number) => {
        setActiveDirectorIndex(directorIndex);
    }

    const activeDirector = directors[activeDirectorIndex];

    return (
        <SectionContainer className="pt-[20vh]">
            <div className="w-full h-full flex gap-8">
                <DirectorsImagesList directors={directors} activeDirectorIndex={activeDirectorIndex} activeDirector={activeDirector} />
                <DirectorsContent />
                <DirectorsWorkList directors={directors} setActiveDirectorIndex={handleHoverDirectorWork} />
            </div>
        </SectionContainer>
    )
}