"use client"

import { useI18n } from "@/components/i18n-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Save } from "lucide-react"

export default function SettingsPage() {
  const { t } = useI18n()

  return (
    <div className="container space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">{t("settings")}</h2>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">{t("general")}</TabsTrigger>
          <TabsTrigger value="appearance">{t("appearance")}</TabsTrigger>
          <TabsTrigger value="notifications">{t("notifications")}</TabsTrigger>
          <TabsTrigger value="security">{t("security")}</TabsTrigger>
          <TabsTrigger value="api">{t("api")}</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>{t("generalSettings")}</CardTitle>
              <CardDescription>{t("manageGeneralSettings")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="platform-name">{t("platformName")}</Label>
                <Input id="platform-name" defaultValue="Drama Platform" />
                <p className="text-sm text-muted-foreground">{t("platformNameDescription")}</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-email">{t("contactEmail")}</Label>
                <Input id="contact-email" type="email" defaultValue="support@dramaplatform.com" />
                <p className="text-sm text-muted-foreground">{t("contactEmailDescription")}</p>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label htmlFor="default-language">{t("defaultLanguage")}</Label>
                <Select defaultValue="en">
                  <SelectTrigger id="default-language">
                    <SelectValue placeholder={t("selectLanguage")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">{t("english")}</SelectItem>
                    <SelectItem value="zh">{t("chinese")}</SelectItem>
                    <SelectItem value="th">{t("thai")}</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-muted-foreground">{t("defaultLanguageDescription")}</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timezone">{t("timezone")}</Label>
                <Select defaultValue="utc">
                  <SelectTrigger id="timezone">
                    <SelectValue placeholder={t("selectTimezone")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="utc">UTC</SelectItem>
                    <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                    <SelectItem value="cst">China Standard Time (CST)</SelectItem>
                    <SelectItem value="ict">Indochina Time (ICT)</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-muted-foreground">{t("timezoneDescription")}</p>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="maintenance-mode">{t("maintenanceMode")}</Label>
                  <p className="text-sm text-muted-foreground">{t("maintenanceModeDescription")}</p>
                </div>
                <Switch id="maintenance-mode" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                {t("saveChanges")}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="appearance">
          <Card>
            <CardHeader>
              <CardTitle>{t("appearanceSettings")}</CardTitle>
              <CardDescription>{t("manageAppearanceSettings")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>{t("theme")}</Label>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="light" name="theme" defaultChecked />
                    <Label htmlFor="light">{t("light")}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="dark" name="theme" />
                    <Label htmlFor="dark">{t("dark")}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="system" name="theme" />
                    <Label htmlFor="system">{t("system")}</Label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="primary-color">{t("primaryColor")}</Label>
                <div className="grid grid-cols-6 gap-2">
                  <div className="h-8 w-8 rounded-full bg-blue-500 cursor-pointer ring-2 ring-offset-2 ring-blue-500" />
                  <div className="h-8 w-8 rounded-full bg-green-500 cursor-pointer" />
                  <div className="h-8 w-8 rounded-full bg-red-500 cursor-pointer" />
                  <div className="h-8 w-8 rounded-full bg-purple-500 cursor-pointer" />
                  <div className="h-8 w-8 rounded-full bg-orange-500 cursor-pointer" />
                  <div className="h-8 w-8 rounded-full bg-gray-500 cursor-pointer" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="animations">{t("animations")}</Label>
                  <p className="text-sm text-muted-foreground">{t("animationsDescription")}</p>
                </div>
                <Switch id="animations" defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                {t("saveChanges")}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>{t("notificationSettings")}</CardTitle>
              <CardDescription>{t("manageNotificationSettings")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-notifications">{t("emailNotifications")}</Label>
                  <p className="text-sm text-muted-foreground">{t("emailNotificationsDescription")}</p>
                </div>
                <Switch id="email-notifications" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="system-notifications">{t("systemNotifications")}</Label>
                  <p className="text-sm text-muted-foreground">{t("systemNotificationsDescription")}</p>
                </div>
                <Switch id="system-notifications" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="marketing-emails">{t("marketingEmails")}</Label>
                  <p className="text-sm text-muted-foreground">{t("marketingEmailsDescription")}</p>
                </div>
                <Switch id="marketing-emails" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                {t("saveChanges")}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>{t("securitySettings")}</CardTitle>
              <CardDescription>{t("manageSecuritySettings")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="password">{t("changePassword")}</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="new-password">{t("newPassword")}</Label>
                <Input id="new-password" type="password" placeholder="••••••••" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirm-password">{t("confirmPassword")}</Label>
                <Input id="confirm-password" type="password" placeholder="••••••••" />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="two-factor">{t("twoFactorAuth")}</Label>
                  <p className="text-sm text-muted-foreground">{t("twoFactorAuthDescription")}</p>
                </div>
                <Switch id="two-factor" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                {t("saveChanges")}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="api">
          <Card>
            <CardHeader>
              <CardTitle>{t("apiSettings")}</CardTitle>
              <CardDescription>{t("manageApiSettings")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="api-key">{t("apiKey")}</Label>
                <div className="flex space-x-2">
                  <Input id="api-key" value="sk_live_12345678901234567890" readOnly />
                  <Button variant="outline">{t("copy")}</Button>
                  <Button variant="outline">{t("regenerate")}</Button>
                </div>
                <p className="text-sm text-muted-foreground">{t("apiKeyDescription")}</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="webhook-url">{t("webhookUrl")}</Label>
                <Input id="webhook-url" placeholder="https://your-website.com/webhook" />
                <p className="text-sm text-muted-foreground">{t("webhookUrlDescription")}</p>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="api-access">{t("apiAccess")}</Label>
                  <p className="text-sm text-muted-foreground">{t("apiAccessDescription")}</p>
                </div>
                <Switch id="api-access" defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                {t("saveChanges")}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
