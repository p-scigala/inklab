"use client";

import { ReactElement, useState } from "react"
import Image from "next/image"
import Marker from "/public/icons/marker.svg"
import IconClose from "/public/icons/close.svg"
import clsx from "clsx";
import Icon from "../../primitives/icon";

export interface MapMarkerProps {
  x: number
  y: number
  content?: {
    visibility?: 'static' | 'onHover' | 'onClick'
    text: string | ReactElement
  }
}

export default function MapMarker({ x, y, content }: MapMarkerProps) {
  const [contentVisible, setContentVisible] = useState(false);
  const width = 40;
  const height = 60;

  return (
    <div
      className="absolute"
      style={{
        top: `calc(${y}% - ${height}px)`,
        left: `calc(${x}% - ${width / 2}px)`
      }}
    >
      <button>
        <Image
          alt=""
          width={width}
          height={height}
          src={Marker}
          aria-hidden="true"
          onClick={content?.visibility === 'onClick' ? (() => setContentVisible(true)) : undefined}
          onMouseOver={content?.visibility === 'onHover' ? () => setContentVisible(true) : undefined}
          onMouseOut={content?.visibility === 'onHover' ? () => setContentVisible(false) : undefined}
          className={clsx("transition-all",
            "hover:scale-[1.1]", contentVisible && "scale-[1.1]"
          )} />
      </button>
      {content && (
        <div className={clsx(
          `absolute top-0 left-[${width}px] w-[240px] h-fit ml-4 p-4 bg-foreground-100 border shadow transition-all`,
          "before:content-[''] before:block before:absolute before:top-0 before:bottom-0 before:left-[-5px] before:m-auto",
          "before:w-[10px] before:h-[10px] before:bg-foreground-100 before:transform before:rotate-45",
          !contentVisible && content?.visibility !== 'static' && "invisible opacity-0",
        )}>
          <div className="relative pr-[32px]">
            {content?.text}
            {content?.visibility === 'onClick' && (
              <button
                onClick={() => setContentVisible(false)}
                className="absolute right-0"
              >
                <Icon image={IconClose} size={12} />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
