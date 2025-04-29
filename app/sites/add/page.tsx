"use client"

import { useI18n } from "@/components/i18n-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Save } from "lucide-react"

export default function AddSitePage() {
  const { t } = useI18n()

  return (
    <div className="container space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">{t("addNewSite")}</h2>
      </div>

      <Tabs defaultValue="basic" className="space-y-4">
        <TabsList>
          <TabsTrigger value="basic">{t("basicInfo")}</TabsTrigger>
          <TabsTrigger value="localization">{t("localization")}</TabsTrigger>
          <TabsTrigger value="settings">{t("settings")}</TabsTrigger>
        </TabsList>

        <TabsContent value="basic">
          <Card>
            <CardHeader>
              <CardTitle>{t("basicInformation")}</CardTitle>
              <CardDescription>{t("enterSiteBasicDetails")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="site-name">{t("siteName")}</Label>
                  <Input id="site-name" placeholder={t("enterSiteName")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="site-code">{t("siteCode")}</Label>
                  <Input id="site-code" placeholder={t("enterSiteCode")} />
                  <p className="text-xs text-muted-foreground">{t("siteCodeDescription")}</p>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="site-description">{t("description")}</Label>
                <Textarea id="site-description" placeholder={t("enterSiteDescription")} rows={4} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="region">{t("region")}</Label>
                  <Input id="region" placeholder={t("enterRegionName")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">{t("country")}</Label>
                  <Select>
                    <SelectTrigger id="country">
                      <SelectValue placeholder={t("selectCountry")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">{t("unitedStates")}</SelectItem>
                      <SelectItem value="cn">{t("china")}</SelectItem>
                      <SelectItem value="th">{t("thailand")}</SelectItem>
                      <SelectItem value="in">{t("india")}</SelectItem>
                      <SelectItem value="jp">{t("japan")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="site-url">{t("siteUrl")}</Label>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">https://</span>
                  <Input id="site-url" placeholder="example.dramaplatform.com" />
                </div>
                <p className="text-xs text-muted-foreground">{t("siteUrlDescription")}</p>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="active" />
                <Label htmlFor="active">{t("activateImmediately")}</Label>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">{t("cancel")}</Button>
              <Button>{t("continue")}</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="localization">
          <Card>
            <CardHeader>
              <CardTitle>{t("localizationSettings")}</CardTitle>
              <CardDescription>{t("configureSiteLocalization")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>{t("supportedLanguages")}</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="lang-en" defaultChecked />
                    <Label htmlFor="lang-en">{t("english")}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="lang-zh" />
                    <Label htmlFor="lang-zh">{t("chinese")}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="lang-th" />
                    <Label htmlFor="lang-th">{t("thai")}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="lang-hi" />
                    <Label htmlFor="lang-hi">{t("hindi")}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="lang-ja" />
                    <Label htmlFor="lang-ja">{t("japanese")}</Label>
                  </div>
                </div>
              </div>

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
                    <SelectItem value="hi">{t("hindi")}</SelectItem>
                    <SelectItem value="ja">{t("japanese")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="currency">{t("currency")}</Label>
                <Select defaultValue="usd">
                  <SelectTrigger id="currency">
                    <SelectValue placeholder={t("selectCurrency")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">USD - US Dollar</SelectItem>
                    <SelectItem value="cny">CNY - Chinese Yuan</SelectItem>
                    <SelectItem value="thb">THB - Thai Baht</SelectItem>
                    <SelectItem value="inr">INR - Indian Rupee</SelectItem>
                    <SelectItem value="jpy">JPY - Japanese Yen</SelectItem>
                  </SelectContent>
                </Select>
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
                    <SelectItem value="ist">India Standard Time (IST)</SelectItem>
                    <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">{t("back")}</Button>
              <Button>{t("continue")}</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>{t("siteSettings")}</CardTitle>
              <CardDescription>{t("configureSiteSettings")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>{t("contentSettings")}</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="sync-content" defaultChecked />
                    <Label htmlFor="sync-content">{t("syncGlobalContent")}</Label>
                  </div>
                  <p className="text-xs text-muted-foreground">{t("syncGlobalContentDescription")}</p>
                </div>
              </div>

              <div className="space-y-2">
                <Label>{t("userSettings")}</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="allow-registration" defaultChecked />
                    <Label htmlFor="allow-registration">{t("allowUserRegistration")}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="require-approval" />
                    <Label htmlFor="require-approval">{t("requireApproval")}</Label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>{t("analyticsSettings")}</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="enable-analytics" defaultChecked />
                    <Label htmlFor="enable-analytics">{t("enableAnalytics")}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="share-data" defaultChecked />
                    <Label htmlFor="share-data">{t("shareDataWithGlobal")}</Label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="admin-notes">{t("adminNotes")}</Label>
                <Textarea id="admin-notes" placeholder={t("enterAdminNotes")} rows={3} />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">{t("back")}</Button>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                {t("createSite")}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
