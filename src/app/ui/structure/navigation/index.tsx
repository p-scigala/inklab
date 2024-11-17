"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface NavigationProps {
    links: {
        name?: string
        href: string
        icon?: string
        disabled?: boolean
    }[]
    className?: string | string[]
    itemsClassName?: string | string[]
    setMenuVisible?: any
}

export default function Navigation({ links, className, itemsClassName, setMenuVisible }: NavigationProps) {
    const pathname = usePathname();

    return (
        <nav className={clsx("max-w-full flex items-center gap-2 w-fit whitespace-nowrap", className)}>
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.disabled ? "#" : link.href}
                        className={clsx(
                            "p-1 transition",
                            itemsClassName,
                            pathname === link.href && "active",
                            link.disabled ? "opacity-50 cursor-auto pointer-events-none" : "hover:text-primary-500",
                        )}
                        onClick={() => setMenuVisible(false)}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
}