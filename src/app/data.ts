import { ImageProps } from "next/image";
import { MapMarkerProps } from "./ui/components/map/map-marker";

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
        title: "Who we are",
        text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
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
                    delay: 0.3
                },
                {
                    image: {
                        src: "/works/works-03.webp",
                    },
                    text: `Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.`,
                    delay: 0.6
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
    contact: {
        address1: {
            street: '30 Earls Avenue',
            city: 'White Ladies Aston',
            phone: '+44 878 1186 3087',
            zipCode: 'WR7 8NA',
            country: 'United Kingdom',
            conutryShort: 'UK',
        },
        address2: {
            street: '3 Seafield Street',
            city: 'Llanvihangel Gobion',
            phone: '+44 077 1406 2086',
            zipCode: 'NP7 5UH',
            country: 'United Kingdom',
            conutryShort: 'UK',
        },
        address3: {
            street: '67 Witney Way',
            city: 'Knockando',
            phone: '+44 079 5557 0031',
            zipCode: 'AB38 4AN',
            country: 'United Kingdom',
            conutryShort: 'UK',
        },
        map: {
            markers: [
                {
                    label: "Put cursor over me!",
                    x: 17.5,
                    y: 70,
                    content: "Lorem ipsum 1",
                    contentType: 'onHover',
                } as MapMarkerProps,
                {
                    x: 47.6,
                    y: 20,
                    content: "Lorem ipsum 2",
                    contentType: 'static',
                } as MapMarkerProps,
                {
                    label: 'Click on me!',
                    x: 72,
                    y: 66,
                    content: "Lorem ipsum 3",
                    contentType: 'onClick',
                } as MapMarkerProps,
            ]
        }
    }
}