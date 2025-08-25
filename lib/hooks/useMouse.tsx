'use client';

import { useEffect, useState } from "react";

export default function useMouse() {
    const [mouse, setMouse] = useState<{ x: number, y: number } | null>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMouse({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    return mouse;
}
