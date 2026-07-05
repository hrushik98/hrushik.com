import type React from "react"
import type { Metadata } from "next"
import { Bricolage_Grotesque, Sora, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-bricolage",
})

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sora",
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
})

export const metadata: Metadata = {
  title: "Hrushik — AI Engineer",
  description:
    "P. Phani Hrushik Reddy. AI Engineer at Techolution — fine-tuning LLMs, building speech pipelines and multi-agent systems, and running inference at 20K+ requests a day.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Hrushik — AI Engineer",
    description:
      "AI systems that ship: production LLM infrastructure, real-time speech AI, and multi-agent architectures.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${sora.variable} ${jetbrains.variable}`}
      style={
        {
          "--font-display-stack": `var(--font-bricolage), "Bricolage Grotesque", sans-serif`,
          "--font-body-stack": `var(--font-sora), "Sora", system-ui, sans-serif`,
          "--font-mono-stack": `var(--font-jetbrains), "JetBrains Mono", ui-monospace, monospace`,
        } as React.CSSProperties
      }
    >
      <body className="font-sans antialiased">
        <div className="lab-atmosphere" aria-hidden />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
