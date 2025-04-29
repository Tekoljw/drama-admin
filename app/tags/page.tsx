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
import { Edit, MoreHorizontal, Plus, Trash } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TagsPage() {
  const { t } = useI18n()

  // Sample data for tags
  const primaryTags = [
    {
      id: "TAG-001",
      name: "Male",
      type: "Primary",
      series: 78,
      editable: false,
    },
    {
      id: "TAG-002",
      name: "Female",
      type: "Primary",
      series: 64,
      editable: false,
    },
  ]

  const secondaryTags = [
    {
      id: "TAG-003",
      name: "Romance",
      type: "Secondary",
      series: 42,
      editable: true,
    },
    {
      id: "TAG-004",
      name: "Comedy",
      type: "Secondary",
      series: 38,
      editable: true,
    },
    {
      id: "TAG-005",
      name: "Drama",
      type: "Secondary",
      series: 35,
      editable: true,
    },
    {
      id: "TAG-006",
      name: "Action",
      type: "Secondary",
      series: 28,
      editable: true,
    },
    {
      id: "TAG-007",
      name: "Thriller",
      type: "Secondary",
      series: 22,
      editable: true,
    },
    {
      id: "TAG-008",
      name: "Historical",
      type: "Secondary",
      series: 18,
      editable: true,
    },
    {
      id: "TAG-009",
      name: "Sci-Fi",
      type: "Secondary",
      series: 15,
      editable: true,
    },
    {
      id: "TAG-010",
      name: "Fantasy",
      type: "Secondary",
      series: 12,
      editable: true,
    },
  ]

  return (
    <div className="container space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">{t("tags")}</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add New Tag
        </Button>
      </div>

      <Tabs defaultValue="primary" className="space-y-4">
        <TabsList>
          <TabsTrigger value="primary">Primary Tags</TabsTrigger>
          <TabsTrigger value="secondary">Secondary Tags</TabsTrigger>
        </TabsList>

        <TabsContent value="primary">
          <Card>
            <CardHeader>
              <CardTitle>Primary Tags</CardTitle>
              <CardDescription>These are fixed tags that cannot be modified or deleted.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Series Count</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {primaryTags.map((tag) => (
                      <TableRow key={tag.id}>
                        <TableCell className="font-medium">{tag.id}</TableCell>
                        <TableCell>{tag.name}</TableCell>
                        <TableCell>
                          <Badge variant="secondary">{tag.type}</Badge>
                        </TableCell>
                        <TableCell>{tag.series}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm" disabled>
                            System Tag
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="secondary">
          <Card>
            <CardHeader>
              <CardTitle>Secondary Tags</CardTitle>
              <CardDescription>These tags can be created, modified, and deleted as needed.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Series Count</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {secondaryTags.map((tag) => (
                      <TableRow key={tag.id}>
                        <TableCell className="font-medium">{tag.id}</TableCell>
                        <TableCell>{tag.name}</TableCell>
                        <TableCell>
                          <Badge variant="secondary">{tag.type}</Badge>
                        </TableCell>
                        <TableCell>{tag.series}</TableCell>
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
        </TabsContent>
      </Tabs>
    </div>
  )
}
