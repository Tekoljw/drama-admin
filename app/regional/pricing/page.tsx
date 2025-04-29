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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PricingPage() {
  const { t } = useI18n()

  // Sample data for pricing
  const seriesPricing = [
    {
      id: "SERIES-001",
      title: "Love in the City",
      defaultPrice: "$2.99",
      regionalPrice: "$2.49",
      currency: "USD",
      discount: "17%",
      status: "Custom",
    },
    {
      id: "SERIES-002",
      title: "Mystery Island",
      defaultPrice: "$3.99",
      regionalPrice: "$3.99",
      currency: "USD",
      discount: "0%",
      status: "Default",
    },
    {
      id: "SERIES-003",
      title: "Ancient Dynasty",
      defaultPrice: "$4.99",
      regionalPrice: "$3.99",
      currency: "USD",
      discount: "20%",
      status: "Custom",
    },
    {
      id: "SERIES-004",
      title: "Future World",
      defaultPrice: "$3.99",
      regionalPrice: "$2.99",
      currency: "USD",
      discount: "25%",
      status: "Custom",
    },
    {
      id: "SERIES-005",
      title: "School Days",
      defaultPrice: "$2.99",
      regionalPrice: "$2.99",
      currency: "USD",
      discount: "0%",
      status: "Default",
    },
  ]

  const promotions = [
    {
      id: "PROMO-001",
      name: "Summer Sale",
      discount: "30%",
      startDate: "2023-06-01",
      endDate: "2023-08-31",
      status: "Active",
    },
    {
      id: "PROMO-002",
      name: "New User Discount",
      discount: "50%",
      startDate: "2023-01-01",
      endDate: "2023-12-31",
      status: "Active",
    },
    {
      id: "PROMO-003",
      name: "Holiday Special",
      discount: "25%",
      startDate: "2023-12-15",
      endDate: "2024-01-15",
      status: "Scheduled",
    },
  ]

  const vipPlans = [
    {
      id: "VIP-001",
      name: "Monthly Basic",
      price: "$9.99",
      duration: "1 month",
      benefits: "Unlimited access to all series",
      status: "Active",
    },
    {
      id: "VIP-002",
      name: "Quarterly Premium",
      price: "$24.99",
      duration: "3 months",
      benefits: "Unlimited access + early releases",
      status: "Active",
    },
    {
      id: "VIP-003",
      name: "Annual Gold",
      price: "$89.99",
      duration: "12 months",
      benefits: "Unlimited access + early releases + exclusive content",
      status: "Active",
    },
  ]

  return (
    <div className="container space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">{t("pricing")}</h2>
        <Select defaultValue="us">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="cn">China</SelectItem>
            <SelectItem value="th">Thailand</SelectItem>
            <SelectItem value="in">India</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="series" className="space-y-4">
        <TabsList>
          <TabsTrigger value="series">Series Pricing</TabsTrigger>
          <TabsTrigger value="promotions">Promotions</TabsTrigger>
          <TabsTrigger value="vip">VIP Plans</TabsTrigger>
        </TabsList>

        <TabsContent value="series">
          <Card>
            <CardHeader>
              <CardTitle>Series Pricing</CardTitle>
              <CardDescription>Manage pricing for individual series in this region</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-end mb-4">
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Bulk Edit Pricing
                </Button>
              </div>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead>Default Price</TableHead>
                      <TableHead>Regional Price</TableHead>
                      <TableHead>Currency</TableHead>
                      <TableHead>Discount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {seriesPricing.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.id}</TableCell>
                        <TableCell>{item.title}</TableCell>
                        <TableCell>{item.defaultPrice}</TableCell>
                        <TableCell>{item.regionalPrice}</TableCell>
                        <TableCell>{item.currency}</TableCell>
                        <TableCell>{item.discount}</TableCell>
                        <TableCell>
                          <Badge variant={item.status === "Custom" ? "default" : "secondary"}>{item.status}</Badge>
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
                                Edit Price
                              </DropdownMenuItem>
                              <DropdownMenuItem>Reset to Default</DropdownMenuItem>
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

        <TabsContent value="promotions">
          <Card>
            <CardHeader>
              <CardTitle>Promotions</CardTitle>
              <CardDescription>Manage promotional campaigns and discounts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-end mb-4">
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add New Promotion
                </Button>
              </div>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Discount</TableHead>
                      <TableHead>Start Date</TableHead>
                      <TableHead>End Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {promotions.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.id}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.discount}</TableCell>
                        <TableCell>{item.startDate}</TableCell>
                        <TableCell>{item.endDate}</TableCell>
                        <TableCell>
                          <Badge variant={item.status === "Active" ? "default" : "secondary"}>{item.status}</Badge>
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

        <TabsContent value="vip">
          <Card>
            <CardHeader>
              <CardTitle>VIP Plans</CardTitle>
              <CardDescription>Manage VIP subscription plans for this region</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-end mb-4">
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add New VIP Plan
                </Button>
              </div>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Benefits</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {vipPlans.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.id}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.price}</TableCell>
                        <TableCell>{item.duration}</TableCell>
                        <TableCell>{item.benefits}</TableCell>
                        <TableCell>
                          <Badge variant={item.status === "Active" ? "default" : "secondary"}>{item.status}</Badge>
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
