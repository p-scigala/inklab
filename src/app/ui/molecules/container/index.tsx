import clsx from "clsx";
import { ReactElement } from "react";

interface ContainerProps {
    children: ReactElement
    asSection?: boolean
    className?: string | string[]
}

export default function Section({ children, asSection = true, className }: ContainerProps) {
    const defaultClasses = "flex items-center justify-center";

    return (
        asSection ? (
            <section className={clsx(defaultClasses, "min-h-screen", className)}>
                {children}
            </section>
        ) : (
            <div className={clsx(defaultClasses, className)}>
                {children}
            </div>
        )
    );
}
