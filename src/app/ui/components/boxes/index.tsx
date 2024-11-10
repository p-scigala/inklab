import Heading from "../primitives/heading";
import Box, { BoxProps } from "./box";

interface BoxesProps {
  items: BoxProps[]
  title?: string
}

export default function Boxes({ items, title }: BoxesProps) {
  return (
    <div className="Boxes w-full flex flex-col items-center justify-center px-4">
      <Heading tag="h2" content={title as string} className="mb-4" />
      <div className="w-full max-w-[1024px] flex justify-center gap-8">
        {items.map((box, key) => {
          return (
            <Box key={key} image={box.image} text={box.text} shift={box.shift} />
          )
        })}
      </div>
    </div>
  );
}
