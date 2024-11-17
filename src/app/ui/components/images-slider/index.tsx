"use client";

import { ReactElement, useState } from "react";
import clsx from "clsx";
import ArrowLeft from "/public/arrows/arrow-left.svg";
import ArrowRight from "/public/arrows/arrow-right.svg";
import Image from "next/image";

interface ImagesSliderProps {
    items: ReactElement[]
    className?: string | string[]
}

export default function ImagesSlider({ items, className }: ImagesSliderProps) {
    const [active, setActive] = useState<number>(0);

    const changeItem = (dir: boolean) => {
        let index = active;
        index = dir ? index + 1 : index - 1;
        if (index >= items.length) index = 0;
        if (index < 0) index = items.length - 1;
        setActive(index);
    }

    return (
        <div className={clsx("ImagesSlider relative flex items-center jusify-start w-full h-full overflow-hidden", className)}>
            <button
                className="absolute w-10 h-10 z-[2] left-[-20px] hover:left-[-10px] transition-all"
                onClick={() => changeItem(false)}>
                <Image src={ArrowLeft} alt="" />
            </button>
            <div className="w-full h-full relative overflow-hidden">
                <div className="absolute h-full flex transition-all duration-300"
                    style={{ left: -(active * 100) + "%", width: items.length * 100 + "%" }}>
                    {items.map((item, key) => {
                        return <div key={key} className={clsx(
                            "w-full h-full object-cover",
                            active === key && ""
                        )}>
                            {item}
                        </div>
                    })}
                </div>
            </div>
            <button
                className="absolute w-10 h-10 z-[2] right-[-20px] hover:right-[-10px] transition-all"
                onClick={() => changeItem(true)}>
                <Image src={ArrowRight} alt="" />
            </button>
        </ div>
    )
}
