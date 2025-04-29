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
import { ChevronDown, Eye, MoreHorizontal, Pause, Play, RefreshCw, Search, X } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function UploadTasksPage() {
  const { t } = useI18n()

  // Sample data for upload tasks
  const tasks = [
    {
      id: "TASK-001",
      name: "Love in the City - Episode 1",
      progress: 100,
      startTime: "2023-04-15 10:30:45",
      estimatedCompletion: "2023-04-15 10:45:12",
      status: "completed",
    },
    {
      id: "TASK-002",
      name: "Love in the City - Episode 2",
      progress: 75,
      startTime: "2023-04-15 11:15:22",
      estimatedCompletion: "2023-04-15 11:30:00",
      status: "inProgress",
    },
    {
      id: "TASK-003",
      name: "Mystery Island - Episode 1",
      progress: 30,
      startTime: "2023-04-15 11:45:10",
      estimatedCompletion: "2023-04-15 12:15:00",
      status: "inProgress",
    },
    {
      id: "TASK-004",
      name: "Ancient Dynasty - Episode 5",
      progress: 0,
      startTime: "2023-04-15 12:00:00",
      estimatedCompletion: "2023-04-15 12:45:00",
      status: "queued",
    },
    {
      id: "TASK-005",
      name: "Future World - Episode 3",
      progress: 50,
      startTime: "2023-04-15 10:15:30",
      estimatedCompletion: "2023-04-15 10:45:00",
      status: "paused",
    },
    {
      id: "TASK-006",
      name: "School Days - Episode 2",
      progress: 10,
      startTime: "2023-04-15 09:30:15",
      estimatedCompletion: "2023-04-15 10:15:00",
      status: "failed",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-500">{t("completed")}</Badge>
      case "inProgress":
        return <Badge className="bg-blue-500">{t("inProgress")}</Badge>
      case "queued":
        return <Badge variant="outline">{t("queued")}</Badge>
      case "paused":
        return <Badge variant="secondary">{t("paused")}</Badge>
      case "failed":
        return <Badge variant="destructive">{t("failed")}</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  const getActionButton = (status: string) => {
    switch (status) {
      case "inProgress":
        return (
          <Button variant="outline" size="sm">
            <Pause className="mr-2 h-4 w-4" />
            {t("pauseTask")}
          </Button>
        )
      case "paused":
        return (
          <Button variant="outline" size="sm">
            <Play className="mr-2 h-4 w-4" />
            {t("resumeTask")}
          </Button>
        )
      case "failed":
        return (
          <Button variant="outline" size="sm">
            <RefreshCw className="mr-2 h-4 w-4" />
            {t("retryTask")}
          </Button>
        )
      case "queued":
        return (
          <Button variant="outline" size="sm">
            <X className="mr-2 h-4 w-4" />
            {t("cancelTask")}
          </Button>
        )
      default:
        return (
          <Button variant="outline" size="sm">
            <Eye className="mr-2 h-4 w-4" />
            {t("viewDetails")}
          </Button>
        )
    }
  }

  return (
    <div className="container space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">{t("uploadTasks")}</h2>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t("uploadTaskManagement")}</CardTitle>
          <CardDescription>{t("manageUploadTasks")}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="relative w-64">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder={t("searchSeries")} className="pl-8" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder={t("status")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t("allStatus")}</SelectItem>
                  <SelectItem value="inProgress">{t("inProgress")}</SelectItem>
                  <SelectItem value="completed">{t("completed")}</SelectItem>
                  <SelectItem value="queued">{t("queued")}</SelectItem>
                  <SelectItem value="paused">{t("paused")}</SelectItem>
                  <SelectItem value="failed">{t("failed")}</SelectItem>
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
                  <DropdownMenuItem>{t("date")}</DropdownMenuItem>
                  <DropdownMenuItem>{t("series")}</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t("taskId")}</TableHead>
                  <TableHead>{t("taskName")}</TableHead>
                  <TableHead>{t("progress")}</TableHead>
                  <TableHead>{t("startTime")}</TableHead>
                  <TableHead>{t("estimatedCompletion")}</TableHead>
                  <TableHead>{t("taskStatus")}</TableHead>
                  <TableHead className="text-right">{t("actions")}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tasks.map((task) => (
                  <TableRow key={task.id}>
                    <TableCell className="font-medium">{task.id}</TableCell>
                    <TableCell>{task.name}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={task.progress} className="w-[100px]" />
                        <span>{task.progress}%</span>
                      </div>
                    </TableCell>
                    <TableCell>{task.startTime}</TableCell>
                    <TableCell>{task.estimatedCompletion}</TableCell>
                    <TableCell>{getStatusBadge(task.status)}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        {getActionButton(task.status)}
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Open menu</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>{t("actions")}</DropdownMenuLabel>
                            <DropdownMenuItem>{t("viewDetails")}</DropdownMenuItem>
                            {task.status !== "completed" && task.status !== "failed" && (
                              <DropdownMenuItem className="text-destructive">
                                <X className="mr-2 h-4 w-4" />
                                {t("cancelTask")}
                              </DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
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
