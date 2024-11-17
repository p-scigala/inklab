import Image, { ImageProps } from "next/image";
import Slider from "../slider";
import Heading from "@/app/ui/primitives/heading";
import ImagePlaceholder from "/public/globe.svg";
import Star from "/public/icons/star.svg";

interface OpinionsProps {
  items: {
    name: string
    description: string
    image?: ImageProps
    rating?: number
  }[]
}

export default function Opinions({ items }: OpinionsProps) {
  return (
    <div className="Opinions flex items-center justify-center flex-col w-full">
      <div className="flex items-center justify-center w-full">
        <Slider
          width={640}
          className="w-fit max-w-full"
          items={
            items.map((opinion, key) => {
              const ratingNumber = opinion.rating || null;
              const stars = [];

              if (ratingNumber) {
                for (let x = 0; x < ratingNumber; x++) {
                  stars.push(<Image key={`star-${x}`} src={Star} alt="" width={16} height={16} />)
                }
              }

              return (
                <div className="Opinion flex items-center justify-center flex-col sm:flex-row gap-4 max-w-[640px] w-full p-1" key={key}>
                  <div className="rounded-full border overflow-hidden">
                    <Image src={opinion.image ? opinion.image.src : ImagePlaceholder}
                      alt={opinion.image?.alt || ""}
                      width={opinion.image?.width || 96}
                      height={opinion.image?.height || 96} />
                  </div>
                  <div>
                    <div className="flex gap-2 sm:gap-4 items-center flex-center justify-center flex-col sm:flex-row sm:justify-between border-b pb-2 mb-2">
                      <Heading tag="h3" styleAs="h5" content={opinion.name} />
                      <div className="flex gap-1 mb-1">{stars}</div>
                    </div>
                    <p>{opinion.description}</p>
                  </div>
                </div>
              )
            })
          } />
      </div>
    </div>
  );
}
