import clsx from "clsx";
import Image, { ImageProps } from "next/image";
import Frame from "../../primitives/frame";

export interface BoxProps {
    image?: ImageProps
    text?: string
    shift?: "none" | "sm" | "md" | "lg"
    delay?: number
}

export default function Box({ image, text, shift, delay }: BoxProps) {
    const animationDelay = delay ? delay : 0;

    return (
        <Frame className={clsx(
            "Box",
            "h-fit flex gap-4 top-0 transition-all",
            "w-full flex-col",
            "sm:w-full sm:flex-row sm:items-center",
            "md:w-1/3 md:flex-col",
            "hover:shadow-lg hover:top-4",
            shift === "sm" && "md:mt-8",
            shift === "md" && "md:mt-16",
            shift === "lg" && "md:mt-24",
        )}>
            <>
                {image &&
                    <div className="relative w-full sm:w-1/2 md:w-full h-[160px] overflow-hidden flex">
                        <Image
                            src={image.src}
                            alt={image.alt || ""}
                            title={image.title || ""}
                            width={image.width || 280}
                            height={image.height || 160}
                            className={clsx(
                                "absolute w-full h-full object-cover animate-move-and-hide",
                                image.className,
                                delay && `${delay}s`
                            )}
                            style={{ animationDelay: `${animationDelay}s` }}
                        />
                        <Image
                            src={image.src}
                            alt={image.alt || ""}
                            title={image.title || ""}
                            width={image.width || 280}
                            height={image.height || 160}
                            className={clsx(
                                "absolute w-full h-full object-cover animate-move-and-hide",
                                image.className,
                            )}
                            style={{ animationDelay: `${animationDelay + 5}s` }}
                        />
                    </div>
                }
                {text && <div className="w-full sm:w-1/2 md:w-full">
                    <p>{text}</p>
                </div>}
            </>
        </Frame>
    );
}