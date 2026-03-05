/**
 * Social links from portfolioData.social: maps platform/icon names to Tabler icons.
 * variant "default" = hero (circles with border); "footer" = compact icon-only links.
 */
import React from "react";
import { portfolioData } from "@/data/portfolio";
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandX,
  TbBrandInstagram,
  TbBrandMedium,
  TbMail,
} from "react-icons/tb";

/** Platform/icon key -> React icon component; used for both Hero and Footer. */
const iconMap: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  Github: TbBrandGithub,
  Linkedin: TbBrandLinkedin,
  Twitter: TbBrandX,
  X: TbBrandX,
  Instagram: TbBrandInstagram,
  Medium: TbBrandMedium,
  Mail: TbMail,
};

interface SocialIconsProps {
  variant?: "default" | "footer";
  className?: string;
}

export function SocialIcons({
  variant = "default",
  className = "",
}: SocialIconsProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {portfolioData.social.map((link) => {
        // Fallback to Mail if icon not found
        const Icon = iconMap[link.icon] || iconMap[link.platform] || TbMail;

        if (variant === "footer") {
          return (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary transition-colors"
              aria-label={link.platform}
            >
              <Icon size={22} />
            </a>
          );
        }

        // Default variant (Hero)
        return (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border-2 border-slate-700 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all"
            aria-label={link.platform}
          >
            <Icon size={22} />
          </a>
        );
      })}
    </div>
  );
}
