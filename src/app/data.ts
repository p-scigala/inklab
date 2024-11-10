import { ImageProps } from "next/image";

export const data = {
    hero: {
        images: [
            {
                src: "/imgs/image-01.webp"
            },
            {
                src: "/imgs/image-02.webp"
            },
        ],
    },
    aboutUs: {
        images: [
            {
                src: "/imgs/image-03.webp"
            },
            {
                src: "/imgs/image-04.webp"
            },
        ],
        text: `<h2>Who we are</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur.</p>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa 
            qui officia deserunt mollit anim id est laborum.</p>`,
        boxes: {
            title: "What we do",
            boxes: [
                {
                    image: {
                        src: "/works/works-01.webp",
                    },
                    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
                },
                {
                    image: {
                        src: "/works/works-02.webp",
                    },
                    text: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.`,
                    shift: "md",
                },
                {
                    image: {
                        src: "/works/works-03.webp",
                    },
                    text: `Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.`,
                },
            ],
        },
    },
    opinions: [
        {
            name: 'Lorem ipsum',
            description: `Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.`,
            rating: 5,
            image: {
                src: "/profile/profile-photo-01.webp"
            } as ImageProps
        },
        {
            name: 'Lorem ipsum 2',
            description: `Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.`,
            rating: 5,
            image: {
                src: "/profile/profile-photo-02.webp"
            } as ImageProps
        },
        {
            name: 'Lorem ipsum 3',
            description: `Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.`,
            rating: 5,
            image: {
                src: "/profile/profile-photo-03.webp"
            } as ImageProps
        },
    ],
}