import { absoluteUrl } from "@/lib/utils"
import { Metadata } from "next"
import { Playfair_Display, Open_Sans } from "next/font/google"
import "@/styles/index.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://thaalaasapuwa.com"),
  title: {
    default: "Thaala Asapuwa",
    template: "%s | Thaala Asapuwa"
  },
  description: "Centre for Sri Lankan Art & Culture - Coming Soon",
  openGraph: {
    title: "Thaala Asapuwa - Centre for Sri Lankan Art & Culture",
    description: "Centre for Sri Lankan Art & Culture - Coming Soon",
    url: absoluteUrl("/"),
    siteName: "Thaala Asapuwa",
    images: [
      {
        url: absoluteUrl("/images/thaala-logo.png"),
        width: 192,
        height: 192
      }
    ],
    locale: "en_US",
    type: "website"
  },
  icons: {
    icon: [{ url: "/favicon/favicon-32x32.png" }],
    apple: [{ url: "/favicon/apple-touch-icon.png" }]
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${openSans.variable}`}>
      <body className="font-open-sans">{children}</body>
    </html>
  )
}
