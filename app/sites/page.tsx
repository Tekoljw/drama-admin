"use client"

import { useI18n } from "@/components/i18n-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Edit, Globe, MoreHorizontal, Plus, Settings, Trash } from "lucide-react"

export default function SitesPage() {
  const { t } = useI18n()

  // Sample data for regional sites
  const sites = [
    {
      id: "SITE-001",
      name: "United States",
      code: "us",
      currency: "USD",
      languages: ["English"],
      status: "Active",
      series: 142,
      users: 12500,
    },
    {
      id: "SITE-002",
      name: "China",
      code: "cn",
      currency: "CNY",
      languages: ["Chinese"],
      status: "Active",
      series: 142,
      users: 45000,
    },
    {
      id: "SITE-003",
      name: "Thailand",
      code: "th",
      currency: "THB",
      languages: ["Thai", "English"],
      status: "Active",
      series: 98,
      users: 8700,
    },
    {
      id: "SITE-004",
      name: "India",
      code: "in",
      currency: "INR",
      languages: ["English", "Hindi"],
      status: "Active",
      series: 76,
      users: 22000,
    },
    {
      id: "SITE-005",
      name: "Japan",
      code: "jp",
      currency: "JPY",
      languages: ["Japanese", "English"],
      status: "Setup",
      series: 0,
      users: 0,
    },
  ]

  return (
    <div className="container space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">{t("sites")}</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add New Site
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Regional Sites Management</CardTitle>
          <CardDescription>Manage all your regional sites, currencies, and language settings.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Region</TableHead>
                  <TableHead>Currency</TableHead>
                  <TableHead>Languages</TableHead>
                  <TableHead>Series</TableHead>
                  <TableHead>Users</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sites.map((site) => (
                  <TableRow key={site.id}>
                    <TableCell className="font-medium">{site.id}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Globe className="mr-2 h-4 w-4" />
                        {site.name}
                      </div>
                    </TableCell>
                    <TableCell>{site.currency}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {site.languages.map((lang) => (
                          <Badge key={lang} variant="outline">
                            {lang}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>{site.series}</TableCell>
                    <TableCell>{site.users.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge variant={site.status === "Active" ? "default" : "secondary"}>{site.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Settings className="mr-2 h-4 w-4" />
                            Configure
                          </DropdownMenuItem>
                          <DropdownMenuItem>View Dashboard</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">
                            <Trash className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
