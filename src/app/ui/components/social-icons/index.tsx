import Link from "next/link";
import Image from "next/image";

interface SocialIconsProps {
  links: {
    title?: string
    alt?: string
    src: string
    link?: string
  }[]
}

export default function SocialIcons({ links }: SocialIconsProps) {
  return (
    <div className="flex justify-center items-center gap-4">
      {links.map((link, key) => {
        return <Link
          href={link.link || ""}
          key={key}
        >
          <Image
            src={link.src}
            alt={link.title || ""}
            title={link.alt || ""}
            width={18}
            height={18}
          />
        </Link>
      })}
    </div>
  );
}
