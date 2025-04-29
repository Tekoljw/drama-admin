"use client"

import { useI18n } from "@/components/i18n-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function IncomeRecordsPage() {
  const { t } = useI18n()

  return (
    <div className="container p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-bold tracking-tight">{t("incomeRecords") || "Income Records"}</h2>
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
            <Card>
              <CardHeader>
                <CardTitle>{site.charAt(0).toUpperCase() + site.slice(1)} Site</CardTitle>
                <CardDescription>View and manage all income records</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="recharge" className="space-y-4">
                  <TabsList>
                    <TabsTrigger value="recharge">Recharge Records</TabsTrigger>
                    <TabsTrigger value="vip">VIP Purchase Records</TabsTrigger>
                    <TabsTrigger value="agent">Agent Qualification Records</TabsTrigger>
                  </TabsList>

                  <TabsContent value="recharge">
                    <div className="p-4 border rounded">Recharge records will be displayed here</div>
                  </TabsContent>

                  <TabsContent value="vip">
                    <div className="p-4 border rounded">VIP purchase records will be displayed here</div>
                  </TabsContent>

                  <TabsContent value="agent">
                    <div className="p-4 border rounded">
                      Agent qualification purchase records will be displayed here
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
