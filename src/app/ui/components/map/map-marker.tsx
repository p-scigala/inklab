"use client";

import { ReactElement, useEffect, useLayoutEffect, useState } from "react"
import Image from "next/image"
import Marker from "/public/icons/marker.svg"
import IconClose from "/public/icons/close.svg"
import clsx from "clsx";
import Icon from "@/app/ui/primitives/icon";

export interface MapMarkerProps {
  x: number
  y: number
  content?: string | ReactElement
  contentType?: "static" | "onHover" | "onClick"
  label?: string
}

export default function MapMarker({ x, y, content, contentType, label }: MapMarkerProps) {
  const [contentVisible, setContentVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const typeOnClick = contentType === "onClick" || isMobile;
  const typeOnHover = contentType === "onHover";
  const typeStatic = contentType === "static" && !isMobile;

  useLayoutEffect(() => {
    setIsMobile(window.innerWidth < 480 ? true : false);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 480 ? true : false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <button
        onClick={typeOnClick ? (() => setContentVisible(true)) : undefined}
        onMouseOver={typeOnHover && !typeOnClick ? () => setContentVisible(true) : undefined}
        onMouseOut={typeOnHover && !typeOnClick ? () => setContentVisible(false) : undefined}
        className="absolute"
        style={{
          top: `calc(${y}% - ${isMobile ? 40 : 60}px)`,
          left: `calc(${x}% - ${isMobile ? 15 : 20}px)`
        }}
      >
        <Image
          src={Marker}
          alt=""
          width={isMobile ? 30 : 40}
          height={isMobile ? 40 : 60}
          aria-hidden="true"
          className={clsx("transition-all origin-bottom",
            "hover:scale-[1.1]", (contentVisible || typeStatic) && "scale-[1.1]"
          )} />
        {label && !contentVisible && <div className="absolute text-center flex items-center justify-center w-[80px] left-[-20px]">{label}</div>}

      </button>
      {content && (
        <div className={clsx(
          "absolute top-0 h-fit p-4 bg-foreground-100 border shadow transition-all z-10",
          isMobile ? "w-full" : "w-[140px] text-sm md:w-[240px] md:text-base left-[40px] ml-4",
          !contentVisible && !typeStatic && "invisible opacity-0",
        )}
          style={{
            top: isMobile ? `calc(${y}% + 15px)` : `calc(${y}% - 60px)`,
            left: isMobile ? 0 : `calc(${x}% + 20px)`,
          }}
        >
          <div className={clsx(
            "absolute w-[10px] h-[10px] bg-foreground-100 transform rotate-45 m-auto",
          )}
            style={{
              top: isMobile ? "-5px" : "15px",
              left: isMobile ? `calc(${x}% - 5px)` : "-5px",
            }}
          />

          <div className={clsx("relative", typeOnClick && "pr-[32px]")}>
            {content}
            {typeOnClick && (
              <button
                onClick={() => setContentVisible(false)}
                className="absolute right-0 top-0"
              >
                <Icon image={IconClose} size={12} />
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
