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
import { ChevronDown, Edit, MoreHorizontal, Plus, Search, Trash, Upload } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function EpisodesPage() {
  const { t } = useI18n()

  // Sample data for episodes
  const episodes = [
    {
      id: "EP-001",
      title: "The Beginning",
      series: "Love in the City",
      number: 1,
      duration: "24:15",
      languages: ["English", "Chinese", "Thai"],
      status: "Published",
    },
    {
      id: "EP-002",
      title: "First Encounter",
      series: "Love in the City",
      number: 2,
      duration: "26:30",
      languages: ["English", "Chinese", "Thai"],
      status: "Published",
    },
    {
      id: "EP-003",
      title: "The Mystery",
      series: "Mystery Island",
      number: 1,
      duration: "28:45",
      languages: ["English", "Chinese"],
      status: "Published",
    },
    {
      id: "EP-004",
      title: "Secrets Revealed",
      series: "Mystery Island",
      number: 2,
      duration: "25:20",
      languages: ["English", "Chinese"],
      status: "Draft",
    },
    {
      id: "EP-005",
      title: "The Emperor",
      series: "Ancient Dynasty",
      number: 1,
      duration: "30:10",
      languages: ["Chinese", "English", "Thai"],
      status: "Published",
    },
  ]

  return (
    <div className="container space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">{t("episodes")}</h2>
        <div className="flex items-center gap-2">
          <Button>
            <Upload className="mr-2 h-4 w-4" />
            {t("uploadEpisode")}
          </Button>
          <Button variant="outline">
            <Plus className="mr-2 h-4 w-4" />
            {t("batchUpload")}
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t("episodeManagement")}</CardTitle>
          <CardDescription>{t("manageAllEpisodes")}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="relative w-64">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder={t("searchEpisodes")} className="pl-8" />
              </div>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder={t("selectSeries")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t("allSeries")}</SelectItem>
                  <SelectItem value="love">Love in the City</SelectItem>
                  <SelectItem value="mystery">Mystery Island</SelectItem>
                  <SelectItem value="ancient">Ancient Dynasty</SelectItem>
                </SelectContent>
              </Select>
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
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t("id")}</TableHead>
                  <TableHead>{t("title")}</TableHead>
                  <TableHead>{t("series")}</TableHead>
                  <TableHead>{t("episodeNumber")}</TableHead>
                  <TableHead>{t("duration")}</TableHead>
                  <TableHead>{t("languages")}</TableHead>
                  <TableHead>{t("status")}</TableHead>
                  <TableHead className="text-right">{t("actions")}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {episodes.map((episode) => (
                  <TableRow key={episode.id}>
                    <TableCell className="font-medium">{episode.id}</TableCell>
                    <TableCell>{episode.title}</TableCell>
                    <TableCell>{episode.series}</TableCell>
                    <TableCell>{episode.number}</TableCell>
                    <TableCell>{episode.duration}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {episode.languages.map((lang) => (
                          <Badge key={lang} variant="outline">
                            {lang}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={episode.status === "Published" ? "default" : "outline"}>
                        {episode.status === "Published" ? t("published") : t("draft")}
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
                          <DropdownMenuItem>{t("preview")}</DropdownMenuItem>
                          <DropdownMenuItem>{t("languageVersions")}</DropdownMenuItem>
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
    </div>
  )
}
