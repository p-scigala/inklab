import Navigation from "@/app/ui/structure/navigation";
import SocialIcons from "@/app/ui/components/social-icons";
import Link from "next/link";

export default function Footer() {
    const nav = [
        {
            name: "Home",
            href: "/#home",
        },
        {
            name: "About us",
            href: "/#about-us",
        },
        {
            name: "Opinions",
            href: "/#opinions",
        },
        {
            name: "Contact",
            href: "/contact",
        },
        {
            name: "Gallery",
            href: "/gallery",
        },
    ];

    const social = [
        {
            title: "Facebook",
            src: "/icons/facebook.svg",
        },
        {
            title: "Instagram",
            src: "/icons/instagram.svg",
        },
        {
            title: "TikTok",
            src: "/icons/tiktok.svg",
        },
    ]
    return (
        <footer className="flex items-center justify-center flex-col gap-8 p-4 border-t">
            <SocialIcons links={social} />
            <Navigation links={nav} className="flex-col sm:flex-row" />
            <div className="text-center">
                Coded & designed by <Link href="https:/p-scigala.pl"><strong>P-SCIGALA</strong></Link> | All rights reserved
            </div>
        </footer>
    );
}