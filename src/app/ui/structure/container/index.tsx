import clsx from "clsx";
import { ReactElement } from "react";

interface ContainerProps {
    id?: string
    children: ReactElement
    asSection?: boolean
    className?: string | string[]
    noPadding?: boolean
    fitScreen?: boolean
}

export default function Section({ id, children, asSection = true, noPadding = false, fitScreen = false, className }: ContainerProps) {
    const defaultClasses = clsx(
        "flex items-center justify-center",
        fitScreen && "min-height-screen",
        noPadding ? "py-0" : "py-12",

    );

    return (
        asSection ? (
            <section className={clsx(defaultClasses, className)} id={id}>
                {children}
            </section>
        ) : (
            <div className={clsx(defaultClasses, className)} id={id}>
                {children}
            </div>
        )
    );
}
