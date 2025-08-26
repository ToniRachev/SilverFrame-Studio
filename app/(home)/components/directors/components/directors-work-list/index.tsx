'use client';

import { useState } from "react";

import { DirectorInterface } from "../../lib/types";
import DirectorWork from "./director-work";

interface DirectorsWorkListProps {
    directors: DirectorInterface[];
    setActiveDirectorIndex: (directorIndex: number) => void;
}

export default function DirectorsWorkList({ directors, setActiveDirectorIndex }: Readonly<DirectorsWorkListProps>) {
    const [hoveredWorkIndex, setHoveredWorkIndex] = useState<number | null>(null);

    return (
        <ul className="grid grid-cols-2 gap-2 max-w-[40vw]">
            {directors.map((director, index) => (
                <DirectorWork
                    key={director.name}
                    director={director}
                    index={index}
                    activeHoveredWorkIndex={hoveredWorkIndex}
                    setHoveredWorkIndex={setHoveredWorkIndex}
                    setSelectedDirector={() => setActiveDirectorIndex(index)}
                />
            ))}
        </ul>
    )
}