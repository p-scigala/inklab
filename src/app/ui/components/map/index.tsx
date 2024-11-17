import MapMarker, { MapMarkerProps } from "./map-marker";
import Image, { ImageProps } from "next/image";

interface MapProps {
  image: ImageProps
  markers?: MapMarkerProps[]
}

export default function Map({ image, markers }: MapProps) {
  return (
    <div className="Map relative w-full max-w-[1024px] flex justify-center flex-col items-center gap-8">
      <Image src={image.src} width={image.width} height={image.height} className="w-full h-auto" alt="" />
      {markers && markers.map((marker, key) => {
        return <MapMarker key={key} {...marker} />
      })
      }
    </div>
  );
}
