'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

interface NavigationProps {
    links: {
        name?: string
        href: string
        icon?: string
    }[]
    className?: string | string[]
    itemsClassName?: string | string[]
}

export default function Navigation({ links, className, itemsClassName }: NavigationProps) {
    const pathname = usePathname();

    return (
        <nav className={clsx("flex items-center gap-2 w-fit", className)}>
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            "p-1",
                            "hover:text-primary-500",
                            "transition",
                            itemsClassName,
                            pathname === link.href && 'active',
                        )}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
}