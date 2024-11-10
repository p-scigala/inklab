import clsx from "clsx";
import Image, { ImageProps } from "next/image";
import ImagesSlider from "../images-slider";
import Link, { LinkProps } from "next/link";

interface TextWithImageProps {
  images?: ImageProps[]
  text?: string
  button?: LinkProps
  imagePosition?: 'left' | 'right'
  imagePositionMobile?: 'top' | 'bottom'
}

export default function TextWithImage({ images, text, button, imagePosition = 'left', imagePositionMobile = 'top' }: TextWithImageProps) {
  return (
    <div className={clsx(
      "flex w-full max-w-[1024px] h-auto items-center justify-center",
      imagePosition === 'right' && 'flex-row-reverse',
      imagePositionMobile === 'bottom' && 'md:flex-col',
    )}>
      <div className="w-1/2 px-4">
        <div className="relative w-full h-[480px] max-h-screen">
          {images && <ImagesSlider items={
            images.map((image, key) => {
              return <Image
                key={key}
                src={image.src}
                alt={image.alt || ''}
                title={image.title || ''}
                width={image.width || 640}
                height={image.height || 480}
                className={clsx(
                  "w-full h-full object-cover",
                  image.className,
                )}
              />
            })
          } />}
        </div>
      </div>
      <div className="w-1/2 px-4">
        {text && <div dangerouslySetInnerHTML={{ __html: text }} />}
        {button && <Link href={button.href} />}
      </div>
    </div >
  )
}
