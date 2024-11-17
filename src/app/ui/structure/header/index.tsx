"use client";

import Image from "next/image";
import Logo from "/public/logo-alt.svg";
import IconMenu from "/public/icons/menu.svg";
import Navigation from "../navigation";
import { useState } from "react";
import { useEffect } from "react";
import { useLayoutEffect } from "react";
import clsx from "clsx";
import Icon from "../../primitives/icon";

export default function Header() {
  const [transparent, setTransparent] = useState<boolean>(true)
  const [menuVisible, setMenuVisible] = useState<boolean>(false)
  const [scrollPosition, setScrollPosition] = useState<number>(0)
  const [viewportHeight, setViewportHeight] = useState<number>(500)

  const scrollHandler = () => {
    setScrollPosition(window.scrollY);
    setTransparent(scrollPosition + 70 < viewportHeight ? true : false);
  }

  const resizeHandler = () => {
    setViewportHeight(window.innerHeight);
    setTransparent(scrollPosition + 70 < viewportHeight ? true : false);
  }

  useLayoutEffect(() => {
    resizeHandler();
    scrollHandler();
  });

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  });

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, { passive: true });
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  });

  const leftMenu = [
    {
      name: "Home",
      href: "/#home",
    },
    {
      name: "About us",
      href: "/#about-us",
    },
    {
      name: "Opinions",
      href: "/#opinions",
    },
    {
      name: "Find us",
      href: "/#find-us",
    },
  ];

  const rightMenu = [
    {
      name: "Our works",
      href: "/gallery",
      disabled: true
    },
    {
      name: "Contact us",
      href: "/contact",
      disabled: true
    },
  ];

  return (
    <header className={clsx(
      "fixed w-full h-full md:h-[70px] flex items-center justify-center px-4 z-30",
      menuVisible ? "right-0 bg-foreground-900" : "right-[-100%] md:right-0",
      !transparent && "bg-foreground-100 shadow",
      "transition-all")}>
      <div className={clsx(
        "w-full max-w-[1024px] h-full flex items-center md:justify-between md:flex-row flex-col top-0 transition-all py-[70px] md:py-0",
        menuVisible && ""
      )}>
        <Image
          src={Logo}
          alt="InkLab logo"
          width={60}
          height={60}
          className="h-[120px] md:h-[60px] w-[120px] md:w-[60px]"
        />
        <Navigation
          links={leftMenu}
          className="justify-center md:absolute left-0 right-0 m-auto md:text-base text-2xl md:flex-row flex-col "
          itemsClassName={transparent ? "text-foreground-100" : ""}
          setMenuVisible={setMenuVisible}
        />
        <Navigation
          links={rightMenu}
          className="justify-end mt-4 md:mt-0 md:text-base text-2xl md:flex-row flex-col "
          itemsClassName={transparent ? "text-foreground-100" : ""}
          setMenuVisible={setMenuVisible}
        />
      </div>

      <button
        className={clsx(
          "MenuButton fixed w-[60px] h-[60px] flex items-center justify-center top-[5px] right-[5px]",
          "transition-all md:hidden",
          transparent && "invert"
        )}
        onClick={() => setMenuVisible(!menuVisible)}
      >
        <Icon image={IconMenu} />
      </button>
    </header>
  );
}
