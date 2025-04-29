"use client"

import { useI18n } from "@/components/i18n-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AgentsPage() {
  const { t } = useI18n()

  return (
    <div className="container p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-bold tracking-tight">{t("agentManagement") || "Agent Management"}</h2>
      </div>

      <Tabs defaultValue="malaysia" className="space-y-4">
        <TabsList className="grid grid-cols-4 w-full">
          <TabsTrigger value="malaysia">Malaysia Site</TabsTrigger>
          <TabsTrigger value="myanmar">Myanmar Site</TabsTrigger>
          <TabsTrigger value="laos">Laos Site</TabsTrigger>
          <TabsTrigger value="thailand">Thailand Site</TabsTrigger>
        </TabsList>

        {["malaysia", "myanmar", "laos", "thailand"].map((site) => (
          <TabsContent key={site} value={site}>
            <Tabs defaultValue="agents" className="space-y-4">
              <TabsList>
                <TabsTrigger value="agents">Agents List</TabsTrigger>
                <TabsTrigger value="commissions">Commission Records</TabsTrigger>
                <TabsTrigger value="reports">Commission Reports</TabsTrigger>
              </TabsList>

              <TabsContent value="agents">
                <Card>
                  <CardHeader>
                    <CardTitle>Agents List</CardTitle>
                    <CardDescription>Manage all agents and their commissions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 border rounded">Agents list will be displayed here</div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="commissions">
                <Card>
                  <CardHeader>
                    <CardTitle>Commission Records</CardTitle>
                    <CardDescription>Agent commission history and records</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 border rounded">Commission records will be displayed here</div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reports">
                <Card>
                  <CardHeader>
                    <CardTitle>Commission Reports</CardTitle>
                    <CardDescription>Agent commission analytics and reports</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 border rounded">Commission reports and charts will be displayed here</div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
