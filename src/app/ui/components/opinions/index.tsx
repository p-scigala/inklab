import Image, { ImageProps } from "next/image";
import Slider from "../slider";
import Heading from "../primitives/heading";
import ImagePlaceholder from '/public/globe.svg';
interface OpinionsProps {
  items: {
    name: string
    description: string
    image?: ImageProps
    rating?: number
  }[]
  title?: string
}

export default function Opinions({ items, title }: OpinionsProps) {
  return (
    <div className="Opinions flex items-center justify-center flex-col w-full px-4">
      {title && <Heading tag="h2" content={title} className="mb-12" />}
      <div className="flex items-center justify-center w-full">
        <Slider
          width={640}
          className="max-w-[1024px]"
          items={
            items.map((opinion, key) => {
              return (
                <div className="Opinion flex items-center justify-center gap-4 max-w-[640px] w-full" key={key}>
                  <div>
                    <Image src={opinion.image ? opinion.image.src : ImagePlaceholder}
                      alt={opinion.image?.alt || ''}
                      width={opinion.image?.width || 64}
                      height={opinion.image?.height || 64} />
                  </div>
                  <div>
                    <Heading tag="h3" styleAs="h5" content={opinion.name} />
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
