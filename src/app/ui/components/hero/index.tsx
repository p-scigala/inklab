"use client";

import { ReactElement, useEffect, useLayoutEffect, useState } from "react";
import Image, { ImageProps } from 'next/image';
import clsx from "clsx";

interface HeroProps {
    images: ImageProps[]
    children?: ReactElement
    className?: string | string[]
}

export default function Hero({ images, children, className }: HeroProps) {
    const [active, setActive] = useState<number>(0);
    const [scrollPosition, setScrollPosition] = useState<number>(0)
    const [viewportHeight, setViewportHeight] = useState<number>(500)
    const [contentOpacity, setContentOpacity] = useState<number>(1)

    useLayoutEffect(() => {
        setScrollPosition(window.scrollY);
        setViewportHeight(window.innerHeight);
        const opacity = 1 - (scrollPosition / viewportHeight * 2);
        setContentOpacity(opacity > 0 ? opacity : 0);
    }, [scrollPosition, viewportHeight]);

    useEffect(() => {
        const calcOpacity = () => {
            const opacity = 1 - (scrollPosition / viewportHeight * 2);
            setContentOpacity(opacity > 0 ? opacity : 0);
        }

        window.addEventListener('scroll', () => {
            setScrollPosition(window.scrollY);
            calcOpacity();
        }, { passive: true });
        window.addEventListener('resize', () => {
            setViewportHeight(window.innerHeight);
            calcOpacity();
        });
    }, [scrollPosition, viewportHeight]);

    useEffect(() => {
        const interval = setInterval(() => {
            let index = active;
            index++;
            if (index >= images.length) index = 0;
            setActive(index);
        }, 5000);

        return () => clearInterval(interval);
    });

    return (
        <div className={clsx(className, "min-h-screen flex items-center justify-center")}>
            <div className="absolute w-screen h-screen">
                {images.map((image, key) => {
                    return <Image
                        key={key}
                        src={image.src}
                        alt=""
                        width={1920}
                        height={1080}
                        className={clsx(
                            "absolute w-full h-full object-cover",
                            "transition duration-1000 opacity-0",
                            active === key && "opacity-100 z-[1]"
                        )}
                    />
                })};
                <div className="absolute w-screen h-screen top-0 bg-black opacity-40 z-[2]" />
            </div>
            <div
                style={{ opacity: contentOpacity }}
                className="relative flex items-center justify-center z-[3]">
                {children}
            </div>
        </ div>
    );
}
