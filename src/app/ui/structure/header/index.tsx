"use client";

import Image from 'next/image';
import Logo from '/public/logo-small.png';
import Navigation from '../navigation';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLayoutEffect } from 'react';
import clsx from 'clsx';

export default function Header() {
  const [transparent, setTransparent] = useState<boolean>(true)
  const [scrollPosition, setScrollPosition] = useState<number>(0)
  const [viewportHeight, setViewportHeight] = useState<number>(500)

  useLayoutEffect(() => {
    setViewportHeight(window.innerHeight);
    setScrollPosition(window.scrollY);
    setTransparent(scrollPosition + 70 < viewportHeight ? true : false);
  }, [scrollPosition, viewportHeight]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollPosition(window.scrollY);
      setTransparent(scrollPosition + 70 < viewportHeight ? true : false);
    }, { passive: true });
    window.addEventListener('resize', () => {
      setViewportHeight(window.innerHeight);
      setTransparent(scrollPosition + 70 < viewportHeight ? true : false);
    });
  }, [scrollPosition, viewportHeight]);

  const leftMenu = [
    {
      name: 'Home',
      href: '/#home',
    },
    {
      name: 'About us',
      href: '/#about-us',
    },
    {
      name: 'Opinions',
      href: '/#opinions',
    },
    {
      name: 'Find us',
      href: '/#find-us',
    },
  ];

  const rightMenu = [
    {
      name: 'Our works',
      href: '/gallery',
    },
    {
      name: 'Contact us',
      href: '/contact',
    },
  ];

  return (
    <header className={clsx(
      "fixed w-full h-[70px] flex items-center justify-center px-4 z-10",
      !transparent && "bg-white shadow",
      "transition")}>
      <div className="w-full max-w-[1024px] flex items-center justify-between">
        <Image
          src={Logo}
          alt="InkLab logo"
          width={60}
          height={60} className="h-[60px]" />
        <Navigation
          links={leftMenu}
          className="justify-center absolute left-0 right-0"
          itemsClassName={transparent ? "text-white" : ""} />
        <Navigation
          links={rightMenu}
          className="justify-end"
          itemsClassName={transparent ? "text-white" : ""} />
      </div>
    </header>
  );
}