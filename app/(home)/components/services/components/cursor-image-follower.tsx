import { useRef } from "react";
import { gsap } from "@/lib/gsap-plugins";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import clsx from "clsx";
import useMouse from "@/lib/hooks/useMouse";
import { EXIT_DELAY } from "../lib/constants";

interface CursorImageFollowerProps {
    imageUrl: string | null;
    exiting: boolean;
    initialMousePosition: { x: number, y: number } | null;
}

export default function CursorImageFollower({ imageUrl, exiting, initialMousePosition }: Readonly<CursorImageFollowerProps>) {
    const containerRef = useRef<HTMLDivElement>(null);
    const mouse = useMouse();

    useGSAP(() => {
        if (mouse) {
            gsap.set(containerRef.current, {
                x: mouse.x,
                y: mouse.y,
                xPercent: -50,
                yPercent: -50,
            })
        } else {
            gsap.set(containerRef.current, {
                x: initialMousePosition?.x ?? 0,
                y: initialMousePosition?.y ?? 0,
                xPercent: -50,
                yPercent: -50,
            })
        }
    }, [])

    useGSAP(() => {
        if (exiting) return;

        gsap.to(containerRef.current, {
            x: mouse?.x ?? 0,
            y: mouse?.y ?? 0,
            ease: 'back.out(1.2)',
            duration: 0.6,
        })
    }, [mouse, exiting])

    useGSAP(() => {
        if (!exiting) {
            gsap.set(containerRef.current, {
                scale: 1,
                opacity: 1,
                clipPath: 'polygon(15% 10%, 85% 10%, 85% 90%, 15% 90%)',
            })

            gsap.to(containerRef.current, {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                ease: 'power1.inOut',
                duration: 0.3,
                overwrite: true,
                opacity: 1,
                startAt: {
                    opacity: 0.5
                }
            })
        } else {
            gsap.to(containerRef.current, {
                scale: 0.5,
                opacity: 0,
                ease: 'power1.inOut',
                duration: EXIT_DELAY / 1000,
                overwrite: true,
            })
        }
    }, [imageUrl, exiting])


    if (!imageUrl) return null;
    return (
        <div
            ref={containerRef}
            className={clsx('fixed inset-0 w-[30vw] h-[40vh] pointer-events-none select-none z-10')}
        >
            <Image src={imageUrl} alt="mouse follower" fill className="object-cover" />
        </div>
    )
}