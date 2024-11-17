"use client";

import { ReactElement, useState } from "react";
import clsx from "clsx";
import ArrowLeft from "/public/arrows/arrow-left-v2.svg";
import ArrowRight from "/public/arrows/arrow-right-v2.svg";
import Image from "next/image";

interface SliderProps {
    items: ReactElement[]
    width?: number
    className?: string | string[]
}

export default function Slider({ items, width, className }: SliderProps) {
    const [active, setActive] = useState<number>(0);

    const changeItem = (dir: boolean) => {
        let index = active;
        index = dir ? index + 1 : index - 1;
        if (index >= items.length) index = 0;
        if (index < 0) index = items.length - 1;
        setActive(index);
    }

    return (
        <div className={clsx("Slider relative flex items-center justify-start gap-4", className)}>
            {items.length > 1 && (
                <button
                    className="w-10 h-10 transition-all"
                    onClick={() => changeItem(false)}>
                    <Image src={ArrowLeft} alt="" />
                </button>
            )}
            <div className="relative overflow-hidden" style={{ width: width + "px" }}>
                <div className="relative h-fit flex transition-all duration-300"
                    style={{ left: -(active * 100) + "%", width: items.length * 100 + "%" }}>
                    {items.map((item, key) => {
                        return (
                            <div key={key}>{item}</div>
                        )
                    })}
                </div>
            </div>
            {items.length > 1 && (
                <button
                    className="w-10 h-10 transition-all"
                    onClick={() => changeItem(true)}>
                    <Image src={ArrowRight} alt="" />
                </button>
            )}
        </div>
    )
}
