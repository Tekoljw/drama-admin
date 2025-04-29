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
import { ChevronDown, Download, Edit, FileText, MoreHorizontal, Search, Upload } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function SiteSeriesPage() {
  const { t } = useI18n()
  const [openSubtitleDialog, setOpenSubtitleDialog] = useState(false)
  const [selectedEpisode, setSelectedEpisode] = useState<any>(null)

  // Sample data for sites
  const sites = [
    {
      id: "us",
      name: "United States",
      code: "us",
      language: "English",
    },
    {
      id: "cn",
      name: "China",
      code: "cn",
      language: "Chinese",
    },
    {
      id: "th",
      name: "Thailand",
      code: "th",
      language: "Thai",
    },
    {
      id: "in",
      name: "India",
      code: "in",
      language: "English",
    },
  ]

  // Sample data for series by site
  const seriesBySite = {
    us: [
      {
        id: "SERIES-001",
        title: "Love in the City",
        episodes: [
          { id: "EP-001", title: "The Beginning", number: 1, subtitles: true },
          { id: "EP-002", title: "First Encounter", number: 2, subtitles: true },
        ],
        status: "Published",
      },
      {
        id: "SERIES-002",
        title: "Mystery Island",
        episodes: [
          { id: "EP-003", title: "The Mystery", number: 1, subtitles: true },
          { id: "EP-004", title: "Secrets Revealed", number: 2, subtitles: false },
        ],
        status: "Published",
      },
      {
        id: "SERIES-003",
        title: "Ancient Dynasty",
        episodes: [{ id: "EP-005", title: "The Emperor", number: 1, subtitles: true }],
        status: "Published",
      },
    ],
    cn: [
      {
        id: "SERIES-001",
        title: "Love in the City",
        episodes: [
          { id: "EP-001", title: "The Beginning", number: 1, subtitles: true },
          { id: "EP-002", title: "First Encounter", number: 2, subtitles: true },
        ],
        status: "Published",
      },
      {
        id: "SERIES-003",
        title: "Ancient Dynasty",
        episodes: [{ id: "EP-005", title: "The Emperor", number: 1, subtitles: true }],
        status: "Published",
      },
      {
        id: "SERIES-005",
        title: "School Days",
        episodes: [
          { id: "EP-009", title: "First Day", number: 1, subtitles: true },
          { id: "EP-010", title: "New Friends", number: 2, subtitles: true },
        ],
        status: "Published",
      },
    ],
    th: [
      {
        id: "SERIES-001",
        title: "Love in the City",
        episodes: [
          { id: "EP-001", title: "The Beginning", number: 1, subtitles: true },
          { id: "EP-002", title: "First Encounter", number: 2, subtitles: false },
        ],
        status: "Published",
      },
      {
        id: "SERIES-003",
        title: "Ancient Dynasty",
        episodes: [{ id: "EP-005", title: "The Emperor", number: 1, subtitles: true }],
        status: "Published",
      },
      {
        id: "SERIES-005",
        title: "School Days",
        episodes: [
          { id: "EP-009", title: "First Day", number: 1, subtitles: true },
          { id: "EP-010", title: "New Friends", number: 2, subtitles: false },
        ],
        status: "Published",
      },
    ],
    in: [
      {
        id: "SERIES-001",
        title: "Love in the City",
        episodes: [
          { id: "EP-001", title: "The Beginning", number: 1, subtitles: true },
          { id: "EP-002", title: "First Encounter", number: 2, subtitles: true },
        ],
        status: "Published",
      },
      {
        id: "SERIES-003",
        title: "Ancient Dynasty",
        episodes: [{ id: "EP-005", title: "The Emperor", number: 1, subtitles: false }],
        status: "Published",
      },
    ],
  }

  const handleSubtitleManagement = (episode: any) => {
    setSelectedEpisode(episode)
    setOpenSubtitleDialog(true)
  }

  return (
    <div className="container space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">{t("siteSeries")}</h2>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t("siteSeriesManagement")}</CardTitle>
          <CardDescription>{t("manageSiteSeries")}</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="us" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <TabsList>
                {sites.map((site) => (
                  <TabsTrigger key={site.id} value={site.id}>
                    {site.name} ({site.language})
                  </TabsTrigger>
                ))}
              </TabsList>
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
                    <DropdownMenuItem>{t("subtitles")}</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {sites.map((site) => (
              <TabsContent key={site.id} value={site.id}>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>{t("id")}</TableHead>
                        <TableHead>{t("title")}</TableHead>
                        <TableHead>{t("episodeNumber")}</TableHead>
                        <TableHead>{t("episodeTitle")}</TableHead>
                        <TableHead>{t("subtitles")}</TableHead>
                        <TableHead className="text-right">{t("actions")}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {seriesBySite[site.id as keyof typeof seriesBySite].flatMap((series) =>
                        series.episodes.map((episode) => (
                          <TableRow key={episode.id}>
                            <TableCell className="font-medium">{series.id}</TableCell>
                            <TableCell>{series.title}</TableCell>
                            <TableCell>{episode.number}</TableCell>
                            <TableCell>{episode.title}</TableCell>
                            <TableCell>
                              {episode.subtitles ? (
                                <Badge className="bg-green-500">{t("available")}</Badge>
                              ) : (
                                <Badge variant="outline">{t("notAvailable")}</Badge>
                              )}
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
                                  <DropdownMenuItem onClick={() => handleSubtitleManagement(episode)}>
                                    <FileText className="mr-2 h-4 w-4" />
                                    {t("subtitleManagement")}
                                  </DropdownMenuItem>
                                  {episode.subtitles && (
                                    <DropdownMenuItem>
                                      <Download className="mr-2 h-4 w-4" />
                                      {t("downloadSubtitles")}
                                    </DropdownMenuItem>
                                  )}
                                  <DropdownMenuItem>
                                    <Upload className="mr-2 h-4 w-4" />
                                    {t("uploadSubtitles")}
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem>
                                    <Edit className="mr-2 h-4 w-4" />
                                    {t("edit")}
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        )),
                      )}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      <Dialog open={openSubtitleDialog} onOpenChange={setOpenSubtitleDialog}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>
              {t("subtitleManagement")} - {selectedEpisode?.title}
            </DialogTitle>
            <DialogDescription>{t("uploadNewSubtitle")}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">{t("subtitleLanguage")}</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder={t("selectLanguage")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">{t("english")}</SelectItem>
                  <SelectItem value="zh">{t("chinese")}</SelectItem>
                  <SelectItem value="th">{t("thai")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">{t("subtitleFormat")}</label>
              <Select defaultValue="srt">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="srt">SRT</SelectItem>
                  <SelectItem value="vtt">VTT</SelectItem>
                  <SelectItem value="ass">ASS</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">{t("subtitleFile")}</label>
              <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center">
                <Upload className="h-8 w-8 mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground mb-1">{t("dragAndDrop")}</p>
                <Button variant="secondary" className="mt-4">
                  {t("selectFile")}
                </Button>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline">{t("cancel")}</Button>
            <Button>{t("upload")}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
