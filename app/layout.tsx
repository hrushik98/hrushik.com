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
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "LLM fine-tuning",
    "Speech Recognition",
    "ASR",
    "IndicConformer",
    "whisper.cpp",
    "Gemma 2",
    "Techolution",
    "Hrushik Reddy",
    "Software Engineer"
  ],
  authors: [{ name: "P. Phani Hrushik Reddy" }],
  creator: "P. Phani Hrushik Reddy",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Hrushik — AI Engineer",
    description:
      "AI systems that ship: production LLM infrastructure, real-time speech AI, and multi-agent architectures.",
    type: "website",
    url: "https://www.hrushik.com",
    siteName: "Hrushik Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hrushik — AI Engineer",
    description: "AI systems that ship: production LLM infrastructure, real-time speech AI, and multi-agent architectures.",
  }
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "P. Phani Hrushik Reddy",
              "url": "https://www.hrushik.com",
              "jobTitle": "AI Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "Techolution"
              },
              "sameAs": [
                "https://github.com/hrushik98",
                "https://www.linkedin.com/in/hrushik/",
                "https://leetcode.com/phanihrushik/"
              ],
              "description": "AI Engineer fine-tuning LLMs, building speech pipelines, and designing production ML infrastructure."
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <div className="lab-atmosphere" aria-hidden />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
