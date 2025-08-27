'use client';

import { useRef } from "react";

import { DirectorInterface } from "../../lib/types";
import clsx from "clsx";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

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
    const isActive = activeHoveredWorkIndex !== null && activeHoveredWorkIndex === index;
    const isHovered = activeHoveredWorkIndex !== null;

    const videoRef = useRef<HTMLVideoElement>(null);
    const viewWorkRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.to(viewWorkRef.current, {
            opacity: isActive ? 1 : 0,
            filter: isActive ? 'blur(0px)' : 'blur(10px)',
            duration: 0.5,
            ease: 'power2.inOut',
        })
    }, [isActive])

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

    return (
        <li
            onMouseEnter={handleMouseEnter} onMouseLeave={handlePause}
            className={clsx('transition-opacity duration-300 ease-in-out cursor-pointer', isActive ? 'opacity-100' : 'opacity-50', !isHovered && 'opacity-100')}
        >
            <div className="relative">
                <video ref={videoRef} src={director.workVideoUrl} muted loop className="object-cover" />

                <div ref={viewWorkRef} className="absolute bottom-0 left-4 opacity-0">
                    <h5>View work</h5>
                </div>
            </div>
            <p>{director.name}</p>
        </li>
    )
}