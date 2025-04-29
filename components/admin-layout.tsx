"use client"

import type React from "react"
import { AdminHeader } from "@/components/admin-header"
import { Sidebar } from "@/components/sidebar"
import { usePathname } from "next/navigation"

interface AdminLayoutProps {
  children: React.ReactNode
  adminType?: "global" | "regional"
}

export function AdminLayout({ children, adminType: defaultAdminType = "global" }: AdminLayoutProps) {
  const pathname = usePathname()

  // Determine admin type based on URL path
  const adminType = pathname.startsWith("/regional") ? "regional" : defaultAdminType

  return (
    <div className="flex min-h-screen flex-col">
      <AdminHeader adminType={adminType} />
      <div className="flex flex-1">
        <div className="hidden md:block w-64">
          <Sidebar adminType={adminType} className="h-[calc(100vh-4rem)] sticky top-16" />
        </div>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}
