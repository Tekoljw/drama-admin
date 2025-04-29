"use client"

import { useI18n } from "@/components/i18n-provider"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLocale("en")}>
          {t("english")} {locale === "en" && "✓"}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLocale("zh")}>
          {t("chinese")} {locale === "zh" && "✓"}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLocale("th")}>
          {t("thai")} {locale === "th" && "✓"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
