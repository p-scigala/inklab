import clsx from "clsx";
import React from "react";
import { ReactElement } from "react";

interface HeadingProps {
    tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
    styleAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
    className?: string | string[]
    content: string | ReactElement
}

export default function Heading({ tag, styleAs, className = "", content }: HeadingProps) {
    const HeadingTag = React.createElement(tag, { className: clsx(styleAs, className) }, content);

    return (
        <>
            {HeadingTag}
        </>
    );
}
