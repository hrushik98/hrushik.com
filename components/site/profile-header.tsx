import Image from "next/image"
import profilePic from "@/public/profile.jpeg"
import {
  CursorIcon,
  GithubIcon,
  LeetcodeIcon,
  LinkedinIcon,
  MailIcon,
  ResumeIcon,
  XIcon,
} from "./icons"

const socials = [
  { label: "GitHub", href: "https://github.com/hrushik98", Icon: GithubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hrushik/", Icon: LinkedinIcon },
  { label: "X", href: "https://x.com/hrushik04", Icon: XIcon },
  { label: "LeetCode", href: "https://leetcode.com/phanihrushik/", Icon: LeetcodeIcon },
  { label: "Email", href: "mailto:phanihrushik.10@gmail.com", Icon: MailIcon },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1SDW5B8xtovppSjxfhiLx2TSNgES2NGcK/view?usp=sharing",
    Icon: ResumeIcon,
  },
]

export function ProfileHeader() {
  return (
    <header>
      <Image
        src={profilePic}
        alt="Hrushik Reddy"
        width={88}
        height={88}
        priority
        placeholder="blur"
        className="size-[88px] rounded-full object-cover"
      />

      <div className="mt-5 flex items-center gap-1.5">
        <h1 className="text-[15px] font-semibold text-neutral-900">hrushik reddy</h1>
        <CursorIcon className="size-3.5 text-neutral-300" />
      </div>
      <p className="mt-0.5 text-neutral-500">ai engineer.</p>

      <nav className="mt-3 flex items-center gap-4" aria-label="Social links">
        {socials.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={label}
            className="text-neutral-400 transition-colors hover:text-neutral-900"
          >
            <Icon className="size-[17px]" />
          </a>
        ))}
      </nav>
    </header>
  )
}
