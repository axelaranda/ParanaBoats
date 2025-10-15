import { SiInstagram, SiFacebook, SiTiktok } from "react-icons/si";
import type { JSX } from "react";

type Props = {
  instagram?: string;
  facebook?: string;
  tiktok?: string;
  size?: number;           
  className?: string;       
  utm?: string;             
};

export default function SocialLinks({
  instagram, facebook, tiktok,
  size = 28, className = "", utm = ""
}: Props) {
  const q = utm ? (utm.startsWith("?") ? utm : `?${utm}`) : "";
  const links = [
    instagram && { href: `https://instagram.com/${instagram}${q}`, label: "Instagram", icon: <SiInstagram size={size}/> },
    facebook  && { href: `https://facebook.com/${facebook}${q}`,   label: "Facebook",  icon: <SiFacebook size={size}/> },
    tiktok    && { href: `https://www.tiktok.com/@${tiktok}${q}`,  label: "TikTok",    icon: <SiTiktok size={size}/> },
  ].filter(Boolean) as {href:string;label:string;icon:JSX.Element}[];

  return (
    <nav aria-label="Redes sociales" className={className}>
      <ul className="flex items-center gap-3">
        {links.map(({ href, label, icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener"
              aria-label={label}
              className="inline-flex items-center justify-center
                         rounded-full p-2 bg-custom-dark text-custom-light
                         hover:brightness-125 active:scale-95 transition shadow-sm"
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
