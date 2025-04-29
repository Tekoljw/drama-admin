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
import { ChevronDown, Download, Edit, MoreHorizontal, Plus, Search, Trash, Upload, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function SeriesPage() {
  const { t } = useI18n()
  const [openLanguageDialog, setOpenLanguageDialog] = useState(false)
  const [selectedSeries, setSelectedSeries] = useState<any>(null)

  // Sample data for series
  const series = [
    {
      id: "SERIES-001",
      title: "Love in the City",
      episodes: 12,
      languages: [
        { code: "en", name: "English", sites: ["United States", "India"] },
        { code: "zh", name: "Chinese", sites: ["China"] },
        { code: "th", name: "Thai", sites: ["Thailand"] },
      ],
      tags: ["Romance", "Comedy"],
      status: "Published",
    },
    {
      id: "SERIES-002",
      title: "Mystery Island",
      episodes: 8,
      languages: [
        { code: "en", name: "English", sites: ["United States"] },
        { code: "zh", name: "Chinese", sites: ["China"] },
      ],
      tags: ["Thriller", "Adventure"],
      status: "Published",
    },
    {
      id: "SERIES-003",
      title: "Ancient Dynasty",
      episodes: 24,
      languages: [
        { code: "zh", name: "Chinese", sites: ["China"] },
        { code: "en", name: "English", sites: ["United States", "India"] },
        { code: "th", name: "Thai", sites: ["Thailand"] },
      ],
      tags: ["Historical", "Drama"],
      status: "Published",
    },
    {
      id: "SERIES-004",
      title: "Future World",
      episodes: 10,
      languages: [{ code: "en", name: "English", sites: ["United States"] }],
      tags: ["Sci-Fi", "Action"],
      status: "Draft",
    },
    {
      id: "SERIES-005",
      title: "School Days",
      episodes: 16,
      languages: [
        { code: "zh", name: "Chinese", sites: ["China"] },
        { code: "th", name: "Thai", sites: ["Thailand"] },
      ],
      tags: ["Youth", "Comedy"],
      status: "Draft",
    },
  ]

  const handleViewLanguages = (series: any) => {
    setSelectedSeries(series)
    setOpenLanguageDialog(true)
  }

  return (
    <div className="container space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">{t("series")}</h2>
        <div className="flex items-center gap-2">
          <Button>
            <Upload className="mr-2 h-4 w-4" />
            {t("upload")}
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            {t("export")}
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t("seriesManagement")}</CardTitle>
          <CardDescription>{t("manageAllSeries")}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="relative w-64">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder={t("searchSeries")} className="pl-8" />
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
                  <DropdownMenuItem>{t("status")}</DropdownMenuItem>
                  <DropdownMenuItem>{t("language")}</DropdownMenuItem>
                  <DropdownMenuItem>{t("tags")}</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              {t("addNewSeries")}
            </Button>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t("id")}</TableHead>
                  <TableHead>{t("title")}</TableHead>
                  <TableHead>{t("episodes")}</TableHead>
                  <TableHead>{t("supportedLanguages")}</TableHead>
                  <TableHead>{t("tags")}</TableHead>
                  <TableHead>{t("status")}</TableHead>
                  <TableHead className="text-right">{t("actions")}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {series.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.id}</TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.episodes}</TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex items-center gap-1"
                        onClick={() => handleViewLanguages(item)}
                      >
                        {item.languages.length} {t("languages")}
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {item.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={item.status === "Published" ? "default" : "outline"}>
                        {item.status === "Published" ? t("published") : t("draft")}
                      </Badge>
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
                          <DropdownMenuLabel>{t("actions")}</DropdownMenuLabel>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            {t("edit")}
                          </DropdownMenuItem>
                          <DropdownMenuItem>{t("manageEpisodes")}</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleViewLanguages(item)}>
                            {t("languageVersions")}
                          </DropdownMenuItem>
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

      <Dialog open={openLanguageDialog} onOpenChange={setOpenLanguageDialog}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>
              {selectedSeries?.title} - {t("languageVersions")}
            </DialogTitle>
            <DialogDescription>
              {t("supportedLanguages")} {t("availableSites")}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 max-h-[400px] overflow-y-auto">
            {selectedSeries?.languages.map((lang: any) => (
              <div key={lang.code} className="border rounded-md p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">{lang.name}</h3>
                  <Badge variant="outline">{lang.code}</Badge>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">{t("availableSites")}:</p>
                  <div className="flex flex-wrap gap-2">
                    {lang.sites.map((site: string) => (
                      <Badge key={site} variant="secondary">
                        {site}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
