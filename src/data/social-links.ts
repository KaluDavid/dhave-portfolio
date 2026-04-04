import { IconType } from "react-icons";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { Mail } from "lucide-react";

interface SocialLinks {
  name: string;
  href: string;
  icon: IconType;
  username: string;
  color: string;
}

export const socialLinks: SocialLinks[] = [
  {
    name: "GitHub",
    href: "https://github.com/KaluDavid",
    icon: FiGithub,
    username: "@KaluDavid",
    color: "hover:bg-gray-100 dark:hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kalu-david-a2771723a/",
    icon: FiLinkedin,
    username: "/in/kalu-david",
    color: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/thedavidkalu",
    icon: FiTwitter,
    username: "@thedavidkalu",
    color: "hover:bg-sky-50 dark:hover:bg-sky-900/20",
  },
  {
    name: "Email",
    href: "mailto:kaludavidinyang@gmail.com",
    icon: Mail,
    username: "kaludavidinyang@gmail.com",
    color: "hover:bg-green-50 dark:hover:bg-green-900/20",
  },
];
