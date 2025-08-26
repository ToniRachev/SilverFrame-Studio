'use client';

import { useRef } from "react";

import { DirectorInterface } from "../../lib/types";
import clsx from "clsx";

interface DirectorWorkProps {
    director: DirectorInterface;
    index: number;
    setSelectedDirector: () => void;
    activeHoveredWorkIndex: number | null;
    setHoveredWorkIndex: (index: number | null) => void;
}

export default function DirectorWork(
    {
        director,
        index,
        setSelectedDirector,
        activeHoveredWorkIndex,
        setHoveredWorkIndex
    }: Readonly<DirectorWorkProps>) {
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setHoveredWorkIndex(index);
        }
    }

    const handlePause = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            setHoveredWorkIndex(null);
        }
    }

    const handleMouseEnter = () => {
        handlePlay();
        setSelectedDirector();
    }

    const isActive = activeHoveredWorkIndex !== null && activeHoveredWorkIndex === index;
    const isHovered = activeHoveredWorkIndex !== null;

    return (
        <li
            onMouseEnter={handleMouseEnter} onMouseLeave={handlePause}
            className={clsx('transition-opacity duration-300 ease-in-out', isActive ? 'opacity-100' : 'opacity-50', !isHovered && 'opacity-100')}
        >
            <video ref={videoRef} src={director.workVideoUrl} muted loop className="object-cover" />
            <p>{director.name}</p>
        </li>
    )
}