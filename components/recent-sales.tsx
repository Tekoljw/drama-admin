import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Series" />
          <AvatarFallback>S1</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Love in the City</p>
          <p className="text-sm text-muted-foreground">Romance, Comedy</p>
        </div>
        <div className="ml-auto font-medium">+$1,999.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Series" />
          <AvatarFallback>S2</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Mystery Island</p>
          <p className="text-sm text-muted-foreground">Thriller, Adventure</p>
        </div>
        <div className="ml-auto font-medium">+$1,599.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Series" />
          <AvatarFallback>S3</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Ancient Dynasty</p>
          <p className="text-sm text-muted-foreground">Historical, Drama</p>
        </div>
        <div className="ml-auto font-medium">+$1,299.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Series" />
          <AvatarFallback>S4</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Future World</p>
          <p className="text-sm text-muted-foreground">Sci-Fi, Action</p>
        </div>
        <div className="ml-auto font-medium">+$999.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Series" />
          <AvatarFallback>S5</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">School Days</p>
          <p className="text-sm text-muted-foreground">Youth, Comedy</p>
        </div>
        <div className="ml-auto font-medium">+$699.00</div>
      </div>
    </div>
  )
}
