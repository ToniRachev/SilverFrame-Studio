'use client';

import SectionContainer from "@/components/section-container";
import { useCallback, useRef, useState } from "react";
import CursorImageFollower from "./components/cursor-image-follower";
import ServicesHeading from "./components/services-heading";
import ServicesList from "./components/services-list";
import { EXIT_DELAY } from "./lib/constants";

const services = [
    {
        title: "Film Production",
        imageUrl: "/home/about/about-center.jpg"
    },
    {
        title: "Cinematography",
        imageUrl: "/home/about/about-left.jpg"
    },

    {
        title: "Post-Production",
        imageUrl: "/home/about/about-right.jpg"
    },
    {
        title: "Story Development",
        imageUrl: "/home/about/about-center.jpg"
    },
]

export default function Services() {
    const [activeService, setActiveService] = useState<number | null>(null);
    const [exiting, setExiting] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [initialMousePosition, setInitialMousePosition] = useState<{ x: number, y: number } | null>(null);

    const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLLIElement>, index: number) => {
        setExiting(false);
        setActiveService(index);
        setInitialMousePosition({ x: e.clientX, y: e.clientY });
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
    }, [])

    const handleMouseLeave = useCallback(() => {
        setExiting(true);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setExiting(false);
            setActiveService(null);
        }, EXIT_DELAY);
    }, [])

    const service = activeService === null ? null : services[activeService];

    return (
        <SectionContainer className="w-full flex flex-col justify-center items-center text-center">
            <ServicesHeading />

            <ServicesList
                services={services}
                activeService={activeService}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
            />

            {service && (
                <CursorImageFollower
                    imageUrl={service.imageUrl}
                    exiting={exiting}
                    initialMousePosition={initialMousePosition}
                />
            )}
        </SectionContainer>
    )
}