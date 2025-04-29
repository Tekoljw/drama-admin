"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useI18n } from "@/components/i18n-provider"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  Film,
  Globe,
  LayoutDashboard,
  Tag,
  DollarSign,
  Settings,
  Users,
  ChevronDown,
  ChevronRight,
} from "lucide-react"
import { useState } from "react"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  adminType?: "global" | "regional"
}

interface NavItem {
  title: string
  href: string
  icon: React.ReactNode
  translationKey: string
  adminType: "global" | "regional" | "both"
  children?: {
    title: string
    href: string
    translationKey: string
  }[]
}

export function Sidebar({ className, adminType = "global", ...props }: SidebarProps) {
  const pathname = usePathname()
  const { t } = useI18n()
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    series: true,
    sites: true,
  })

  const toggleGroup = (group: string) => {
    setOpenGroups((prev) => ({
      ...prev,
      [group]: !prev[group],
    }))
  }

  const navItems: NavItem[] = [
    {
      title: "Dashboard",
      href: adminType === "global" ? "/dashboard" : "/regional/dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
      translationKey: "dashboard",
      adminType: "both",
    },
    {
      title: "Series Management",
      href: "/series",
      icon: <Film className="h-5 w-5" />,
      translationKey: "series",
      adminType: "both",
      children: [
        {
          title: "All Series",
          href: "/series",
          translationKey: "allSeries",
        },
        {
          title: "Upload New",
          href: "/series/upload",
          translationKey: "uploadNew",
        },
        {
          title: "Episodes",
          href: "/series/episodes",
          translationKey: "episodes",
        },
        {
          title: "Upload Tasks",
          href: "/series/upload-tasks",
          translationKey: "uploadTasks",
        },
      ],
    },
    {
      title: "Regional Sites",
      href: "/sites",
      icon: <Globe className="h-5 w-5" />,
      translationKey: "sites",
      adminType: "global",
      children: [
        {
          title: "All Sites",
          href: "/sites",
          translationKey: "allSites",
        },
        {
          title: "Add Site",
          href: "/sites/add",
          translationKey: "addSite",
        },
        {
          title: "Site Series",
          href: "/sites/series",
          translationKey: "siteSeries",
        },
      ],
    },
    {
      title: "Tags & Categories",
      href: "/tags",
      icon: <Tag className="h-5 w-5" />,
      translationKey: "tags",
      adminType: "global",
    },
    {
      title: "Statistics",
      href: adminType === "global" ? "/statistics" : "/regional/statistics",
      icon: <BarChart3 className="h-5 w-5" />,
      translationKey: "statistics",
      adminType: "both",
    },
    {
      title: "Pricing & Promotions",
      href: "/regional/pricing",
      icon: <DollarSign className="h-5 w-5" />,
      translationKey: "pricing",
      adminType: "regional",
    },
    {
      title: "Income Records",
      href: "/income-records",
      icon: <DollarSign className="h-5 w-5" />,
      translationKey: "incomeRecords",
      adminType: "both",
    },
    {
      title: "Agent Management",
      href: "/agents",
      icon: <Users className="h-5 w-5" />,
      translationKey: "agentManagement",
      adminType: "both",
    },
    {
      title: "Users",
      href: "/users",
      icon: <Users className="h-5 w-5" />,
      translationKey: "users",
      adminType: "both",
    },
    {
      title: "Settings",
      href: "/settings",
      icon: <Settings className="h-5 w-5" />,
      translationKey: "settings",
      adminType: "both",
    },
  ]

  const filteredNavItems = navItems.filter((item) => item.adminType === "both" || item.adminType === adminType)

  return (
    <div className={cn("pb-12 border-r h-full", className)} {...props}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <div className="mb-4 px-2 flex justify-center">
            <div className="w-[120px] h-[40px] bg-gray-200 flex items-center justify-center">LOGO</div>
          </div>
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            {t(adminType === "global" ? "globalAdmin" : "regionalAdmin")}
          </h2>
        </div>
        <ScrollArea className="h-[calc(100vh-10rem)]">
          <div className="space-y-1 px-2">
            {filteredNavItems.map((item) => (
              <div key={item.href} className="mb-2">
                {item.children ? (
                  <div>
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-start gap-2 font-medium",
                        pathname.startsWith(item.href) && "bg-accent",
                      )}
                      onClick={() => toggleGroup(item.href.split("/")[1])}
                    >
                      {item.icon}
                      <span>{t(item.translationKey) || item.title}</span>
                      {openGroups[item.href.split("/")[1]] ? (
                        <ChevronDown className="ml-auto h-4 w-4" />
                      ) : (
                        <ChevronRight className="ml-auto h-4 w-4" />
                      )}
                    </Button>
                    {openGroups[item.href.split("/")[1]] && (
                      <div className="ml-6 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <Button
                            key={child.href}
                            variant="ghost"
                            asChild
                            className={cn(
                              "w-full justify-start",
                              pathname === child.href && "bg-accent text-accent-foreground",
                            )}
                          >
                            <Link href={child.href}>{t(child.translationKey) || child.title}</Link>
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Button
                    variant="ghost"
                    asChild
                    className={cn(
                      "w-full justify-start gap-2",
                      pathname === item.href && "bg-accent text-accent-foreground",
                    )}
                  >
                    <Link href={item.href}>
                      {item.icon}
                      <span>{t(item.translationKey) || item.title}</span>
                    </Link>
                  </Button>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
