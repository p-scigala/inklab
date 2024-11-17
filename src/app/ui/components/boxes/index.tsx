import Heading from "@/app/ui/primitives/heading";
import Box, { BoxProps } from "./box";
import clsx from "clsx";

interface BoxesProps {
  items: BoxProps[]
}

export default function Boxes({ items }: BoxesProps) {
  return (
    <div className="Boxes w-full flex flex-col items-center justify-center">
      <div className={clsx(
        "w-full max-w-[1024px] flex flex-col justify-center gap-8",
        "sm:flex-col",
        "md:flex-row"
        )}>
        {items.map((box, key) => {
          return (
            <Box key={key} image={box.image} text={box.text} shift={box.shift} />
          )
        })}
      </div>
    </div>
  );
}
