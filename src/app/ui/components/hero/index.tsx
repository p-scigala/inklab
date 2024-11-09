import { ReactElement } from "react";
import Image from 'next/image';
import clsx from "clsx";

interface HeroProps {
    images: {
        src: string
    }[]
    children?: ReactElement
    className?: string | string[]
}

export default function Hero({ images, children, className }: HeroProps) {
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
                        className="absolute w-full h-full object-cover"
                    />
                })};
                <div className="absolute w-screen h-screen top-0 bg-black opacity-40 z-1" />
            </div>
            <div>
                {children}
            </div>
        </ div>
    );
}
