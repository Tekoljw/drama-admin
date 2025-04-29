import type React from "react"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { I18nProvider } from "@/components/i18n-provider"
import { AdminLayout } from "@/components/admin-layout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "OKCKA Admin",
  description: "Multilingual short drama platform management system",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <I18nProvider>
            <AdminLayout adminType="global">{children}</AdminLayout>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
