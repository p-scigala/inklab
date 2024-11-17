import clsx from "clsx";
import Image, { ImageProps } from "next/image";
import ImagesSlider from "../images-slider";
import Link, { LinkProps } from "next/link";
import Heading from "@/app/ui/primitives/heading";

interface TextWithImageProps {
  images?: ImageProps[]
  text?: string
  textAlign?: "left" | "right" | "center"
  textAlignMobile?: "left" | "right" | "center"
  title?: string
  button?: LinkProps
  imagePosition?: "left" | "right"
  imagePositionMobile?: "top" | "bottom"
}

export default function TextWithImage({
  images,
  text,
  textAlign = "left",
  textAlignMobile = "left",
  title,
  button,
  imagePosition = "left",
  imagePositionMobile = "top"
}: TextWithImageProps) {


  return (
    <div className={clsx(
      "TextWithImage w-full max-w-[1024px] gap-8 md:gap-0 h-auto flex items-center justify-center flex-col md:flex-row",
      imagePosition === "right" && "md:flex-row-reverse",
      imagePositionMobile === "bottom" && "flex-col-reverse",
    )}>
      <div className="w-full md:w-1/2">
        <div className="relative w-full h-[480px] max-h-screen">
          {images && <ImagesSlider items={
            images.map((image, key) => {
              return <Image
                key={key}
                src={image.src}
                alt={image.alt || ""}
                title={image.title || ""}
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
      <div className={clsx(
        "w-full md:w-1/2 px-4",
        textAlignMobile === "center" && "text-center",
        textAlignMobile === "left" && "text-left",
        textAlignMobile === "right" && "text-right",
        textAlign === "center" && "md:text-center",
        textAlign === "left" && "md:text-left",
        textAlign === "right" && "md:text-right")
      }>
        {title && <Heading tag="h2" content={title} className="mb-4" />}
        {text && <div
          dangerouslySetInnerHTML={{ __html: text }}
        />}
        {button && <Link href={button.href} />}
      </div>
    </div >
  )
}
