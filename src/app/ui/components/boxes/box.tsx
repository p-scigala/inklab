import clsx from "clsx";
import Image, { ImageProps } from "next/image";

export interface BoxProps {
    image?: ImageProps
    text?: string
    shift?: 'none' | 'sm' | 'md' | 'lg'
}

export default function Box({ image, text, shift }: BoxProps) {
    return (
        <div className={clsx(
            "Box relative w-1/3 h-fit p-4 top-0 shadow border transition-all",
            "hover:shadow-lg hover:top-4",
            shift === 'sm' && "mt-8",
            shift === 'md' && "mt-16",
            shift === 'lg' && "mt-24",
        )}>
            {image &&
                <div className={clsx(
                    "relative w-full h-[160px] mb-4 overflow-hidden flex",
                )}>
                    <Image
                        src={image.src}
                        alt={image.alt || ''}
                        title={image.title || ''}
                        width={image.width || 280}
                        height={image.height || 160}
                        className={clsx(
                            "absolute w-full h-full object-cover animate-move-and-hide",
                            image.className,
                        )}
                    />
                    <Image
                        src={image.src}
                        alt={image.alt || ''}
                        title={image.title || ''}
                        width={image.width || 280}
                        height={image.height || 160}
                        className={clsx(
                            "absolute w-full h-full object-cover animate-move-and-hide",
                            image.className,
                        )}
                        style={{ animationDelay: "5s" }}
                    />
                </div>
            }
            {text && <p>{text}</p>}
        </div >
    );
}