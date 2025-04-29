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
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, Edit, MoreHorizontal, Search, Trash, UserPlus } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function UsersPage() {
  const { t } = useI18n()

  // Sample data for users
  const users = [
    {
      id: "USER-001",
      name: "Alex Johnson",
      email: "alex@example.com",
      role: "Admin",
      status: "Active",
      lastLogin: "2023-04-15",
      region: "Global",
    },
    {
      id: "USER-002",
      name: "Sarah Chen",
      email: "sarah@example.com",
      role: "Editor",
      status: "Active",
      lastLogin: "2023-04-14",
      region: "China",
    },
    {
      id: "USER-003",
      name: "Michael Wong",
      email: "michael@example.com",
      role: "Viewer",
      status: "Inactive",
      lastLogin: "2023-03-20",
      region: "Thailand",
    },
    {
      id: "USER-004",
      name: "Lisa Kim",
      email: "lisa@example.com",
      role: "Editor",
      status: "Active",
      lastLogin: "2023-04-12",
      region: "United States",
    },
    {
      id: "USER-005",
      name: "David Patel",
      email: "david@example.com",
      role: "Admin",
      status: "Active",
      lastLogin: "2023-04-10",
      region: "India",
    },
  ]

  return (
    <div className="container space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">{t("users")}</h2>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          {t("addUser")}
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">{t("allUsers")}</TabsTrigger>
          <TabsTrigger value="admins">{t("admins")}</TabsTrigger>
          <TabsTrigger value="editors">{t("editors")}</TabsTrigger>
          <TabsTrigger value="viewers">{t("viewers")}</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>{t("userManagement")}</CardTitle>
              <CardDescription>{t("manageUsers")}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="relative w-64">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder={t("searchUsers")} className="pl-8" />
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="ml-2">
                        {t("filter")}
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>{t("filterBy")}</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>{t("role")}</DropdownMenuItem>
                      <DropdownMenuItem>{t("status")}</DropdownMenuItem>
                      <DropdownMenuItem>{t("region")}</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t("id")}</TableHead>
                      <TableHead>{t("name")}</TableHead>
                      <TableHead>{t("email")}</TableHead>
                      <TableHead>{t("role")}</TableHead>
                      <TableHead>{t("status")}</TableHead>
                      <TableHead>{t("lastLogin")}</TableHead>
                      <TableHead>{t("region")}</TableHead>
                      <TableHead className="text-right">{t("actions")}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              user.role === "Admin" ? "default" : user.role === "Editor" ? "secondary" : "outline"
                            }
                          >
                            {user.role}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={user.status === "Active" ? "default" : "outline"}>{user.status}</Badge>
                        </TableCell>
                        <TableCell>{user.lastLogin}</TableCell>
                        <TableCell>{user.region}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>{t("actions")}</DropdownMenuLabel>
                              <DropdownMenuItem>
                                <Edit className="mr-2 h-4 w-4" />
                                {t("edit")}
                              </DropdownMenuItem>
                              <DropdownMenuItem>{t("resetPassword")}</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">
                                <Trash className="mr-2 h-4 w-4" />
                                {t("delete")}
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
        </TabsContent>

        <TabsContent value="admins">
          <Card>
            <CardHeader>
              <CardTitle>{t("adminUsers")}</CardTitle>
              <CardDescription>{t("manageAdminUsers")}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] flex items-center justify-center text-muted-foreground">
                {t("adminUsersContent")}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="editors">
          <Card>
            <CardHeader>
              <CardTitle>{t("editorUsers")}</CardTitle>
              <CardDescription>{t("manageEditorUsers")}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] flex items-center justify-center text-muted-foreground">
                {t("editorUsersContent")}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="viewers">
          <Card>
            <CardHeader>
              <CardTitle>{t("viewerUsers")}</CardTitle>
              <CardDescription>{t("manageViewerUsers")}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] flex items-center justify-center text-muted-foreground">
                {t("viewerUsersContent")}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
