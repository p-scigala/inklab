import clsx from "clsx";
import Image, { ImageProps } from "next/image";

interface IconProps {
    image: ImageProps
    size?: number | 'large' | 'medium' | 'small'
    className?: string | string[]
    bordered?: boolean
}

export default function Icon({ image, size = 'medium', className, bordered }: IconProps) {
    const iconSize = () => {
        if (size === 'large') return 48
        else if (size === 'medium') return 32
        else if (size === 'small') return 16
        else return size
    }
    return (
        <Image
            src={image.src}
            alt=""
            width={iconSize()}
            height={iconSize()}
            className={clsx(className, bordered && "border-2 border-background-100 rounded-full p-1")}
            aria-hidden="true"
        />
    );
}
