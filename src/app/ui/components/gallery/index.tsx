"use client";

import Image from "next/image";
import { useState } from "react";

interface GalleryItemProps {
    url: string
    thumb?: string
    alt?: string
}

interface GalleryProps {
    items: GalleryItemProps[]
    thumb?: {
        width?: number
        height?: number
    }
}

export default function Gallery({ items, thumb }: GalleryProps) {
    const [fullscreen, setFullscreen] = useState<boolean>(false);
    const [activeItem, setActiveItem] = useState<GalleryItemProps | null>(null);
    const displayImage = (item: GalleryItemProps) => {
        setFullscreen(true);
        setActiveItem(item);
    }

    return (
        <div className="gallery">
            {items.map((item, index) => {
                return <button onClick={() => displayImage(item)} key={index}>
                    <Image
                        src={item.thumb || item.url}
                        alt={item.alt || ""}
                        width={thumb?.width || 100}
                        height={thumb?.height || 100}
                    />
                </button>
            })}

            {fullscreen && activeItem && (
                <div>
                    <Image
                        src={activeItem.thumb || activeItem.url}
                        alt={activeItem.alt || ""}
                        width={1024}
                        height={768}
                    />
                </div>
            )}

        </div>
    );
}
