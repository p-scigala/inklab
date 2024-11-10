import clsx from "clsx";
import { ReactElement } from "react";

interface ContainerProps {
    id?: string
    children: ReactElement
    asSection?: boolean
    className?: string | string[]
}

export default function Section({ id, children, asSection = true, className }: ContainerProps) {
    const defaultClasses = "flex items-center justify-center";

    return (
        asSection ? (
            <section className={clsx(defaultClasses, "min-h-screen", className)} id={id}>
                {children}
            </section>
        ) : (
            <div className={clsx(defaultClasses, className)} id={id}>
                {children}
            </div>
        )
    );
}
