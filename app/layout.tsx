import "@/styles/global.scss"
import { Metadata } from "next"
import localFont from "next/font/local"

export const metadata: Metadata = {
  title: {
    template: "music",
    default: "music",
  },
  description: "This is Spotify API-based toy project ",
}

const pretendard = localFont({
  src: "../static/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pre",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={pretendard.className}>{children}</body>
    </html>
  )
}
