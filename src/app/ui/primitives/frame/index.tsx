import clsx from "clsx";
import { ReactElement } from "react";

interface FrameProps {
    children: ReactElement
    className?: string | string[]
}

export default function Frame({ children, className }: FrameProps) {
    return (
        <div className={clsx("Frame relative p-4 shadow border", className)}>
            {children}
        </div>
    );
}
