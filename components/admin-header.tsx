"use client"

import { useI18n } from "@/components/i18n-provider"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { UserNav } from "@/components/user-nav"
import { useState } from "react"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Sidebar } from "@/components/sidebar"
import Image from "next/image"
import Link from "next/link"

interface AdminHeaderProps {
  adminType: "global" | "regional"
}

export function AdminHeader({ adminType }: AdminHeaderProps) {
  const { t } = useI18n()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] p-0">
              <Sidebar adminType={adminType} />
            </SheetContent>
          </Sheet>
          <Link href="/dashboard" className="flex items-center">
            <Image src="/logo.png" alt="OKCKA" width={120} height={40} className="mr-2" />
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ModeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  )
}
