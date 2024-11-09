import Navigation from "@/app/ui/molecules/navigation";
import SocialIcons from "../../components/social-icons";

export default function Footer() {
    const nav = [
        {
            name: 'Home',
            href: '/',
            icon: ''
        },
        {
            name: 'About',
            href: '/about',
            icon: '',
        },
        {
            name: 'Contact',
            href: '/contact',
            icon: ''
        },
        {
            name: 'Gallery',
            href: '/gallery',
            icon: ''
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
        <footer>
            <SocialIcons links={social} />
            <Navigation links={nav} />
        </footer>
    );
}