"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useI18n } from "@/components/i18n-provider"
import { BarChart3, Film, Globe, LayoutDashboard, Tag, DollarSign } from "lucide-react"

interface NavItem {
  title: string
  href: string
  icon: React.ReactNode
  translationKey: string
  adminType: "global" | "regional" | "both"
}

export function MainNav({
  adminType = "global",
}: {
  adminType?: "global" | "regional"
}) {
  const pathname = usePathname()
  const { t } = useI18n()

  const navItems: NavItem[] = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard className="mr-2 h-4 w-4" />,
      translationKey: "dashboard",
      adminType: "both",
    },
    {
      title: "Series Management",
      href: "/series",
      icon: <Film className="mr-2 h-4 w-4" />,
      translationKey: "series",
      adminType: "both",
    },
    {
      title: "Regional Sites",
      href: "/sites",
      icon: <Globe className="mr-2 h-4 w-4" />,
      translationKey: "sites",
      adminType: "global",
    },
    {
      title: "Tags & Categories",
      href: "/tags",
      icon: <Tag className="mr-2 h-4 w-4" />,
      translationKey: "tags",
      adminType: "global",
    },
    {
      title: "Statistics",
      href: "/statistics",
      icon: <BarChart3 className="mr-2 h-4 w-4" />,
      translationKey: "statistics",
      adminType: "both",
    },
    {
      title: "Pricing & Promotions",
      href: "/pricing",
      icon: <DollarSign className="mr-2 h-4 w-4" />,
      translationKey: "pricing",
      adminType: "regional",
    },
  ]

  const filteredNavItems = navItems.filter((item) => item.adminType === "both" || item.adminType === adminType)

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      {filteredNavItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex items-center text-sm font-medium transition-colors hover:text-primary",
            pathname === item.href ? "text-primary" : "text-muted-foreground",
          )}
        >
          {item.icon}
          <span className="hidden md:inline">{t(item.translationKey)}</span>
        </Link>
      ))}
    </nav>
  )
}
