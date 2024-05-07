"use client"

import { Global } from "@emotion/react"
import { globalStyle } from "@/styles/global"

export default function Home() {
  return (
    <main>
      <Global styles={globalStyle} />
    </main>
  )
}
