import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hrushik.com"),
  title: "hrushik reddy - ai engineer",
  description:
    "P. Phani Hrushik Reddy. AI engineer at Techolution - fine-tuning open-source LLMs, building real-time speech pipelines, and running production inference at 20K+ requests a day.",
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
    "Software Engineer",
  ],
  authors: [{ name: "P. Phani Hrushik Reddy" }],
  creator: "P. Phani Hrushik Reddy",
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", apple: "/favicon.svg" },
  openGraph: {
    title: "hrushik reddy - ai engineer",
    description:
      "AI systems that ship: production LLM infrastructure, real-time speech AI, and multi-agent architectures.",
    type: "website",
    url: "https://www.hrushik.com",
    siteName: "hrushik.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "hrushik reddy - ai engineer",
    description:
      "AI systems that ship: production LLM infrastructure, real-time speech AI, and multi-agent architectures.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "P. Phani Hrushik Reddy",
              url: "https://www.hrushik.com",
              jobTitle: "AI Engineer",
              worksFor: { "@type": "Organization", name: "Techolution" },
              sameAs: [
                "https://github.com/hrushik98",
                "https://www.linkedin.com/in/hrushik/",
                "https://leetcode.com/phanihrushik/",
              ],
              description:
                "AI Engineer fine-tuning LLMs, building speech pipelines, and designing production ML infrastructure.",
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
