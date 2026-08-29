import { FiGithub, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";
import { SiTiktok } from "react-icons/si"
const socials = [
  { icon: FiGithub, href: "https://github.com/iqra-jamil", label: "GitHub" },
  {
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/iqra-jamil-55861b29b/",
    label: "LinkedIn",
  },
  {
    icon: SiTiktok,
    href: "tiktok.com/@iqrajamil_",
    label: "TikTok",
  },
  { icon: FiMail, href: "mailto:iqraj690@gmail.com", label: "Email" },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-ink-soft py-10">
      <div className="container-px mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <p className="font-display text-sm text-text-muted">
          Iqra Jamil<span className="text-amber">.</span>
        </p>

        <div className="flex items-center gap-3">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.label === "Email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-violet hover:text-violet"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>

        <p className="text-xs text-text-dim">
          &copy; {year} Iqra Jamil. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
