"use client"

import { useI18n } from "@/components/i18n-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Upload, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function SeriesUploadPage() {
  const { t } = useI18n()

  return (
    <div className="container space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Upload New Series</h2>
      </div>
      
      <Tabs defaultValue="basic" className="space-y-4">
        <TabsList>
          <TabsTrigger value="basic">Basic Info</TabsTrigger>
          <TabsTrigger value="episodes">Episodes</TabsTrigger>
          <TabsTrigger value="languages">Languages</TabsTrigger>
          <TabsTrigger value="pricing">Pricing</TabsTrigger>
        </TabsList>
        
        <TabsContent value="basic">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>
                Enter the basic details for this series
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Series Title</Label>
                  <Input id="title" placeholder="Enter series title" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="original-language">Original Language</Label>
                  <Select>
                    <SelectTrigger id="original-language">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="zh">Chinese</SelectItem>
                      <SelectItem value="th">Thai</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Enter series description" rows={4} />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="director">Director</Label>
                  <Input id="director" placeholder="Enter director name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="release-year">Release Year</Label>
                  <Input id="release-year" placeholder="Enter release year" type="number" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="cast">Cast (comma separated)</Label>
                <Input id="cast" placeholder="Actor 1, Actor 2, Actor 3" />
              </div>
              
              <div className="space-y-2">
                <Label>Primary Tags</Label>
                <div className="flex gap-2">
                  <Button variant="outline" className="rounded-full">
                    <Badge variant="secondary" className="rounded-full">Male</Badge>
                  </Button>
                  <Button variant="outline" className="rounded-full">
                    <Badge variant="secondary" className="rounded-full">Female</Badge>
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Secondary Tags</Label>
                <div className="flex flex-wrap gap-2">
                  <Badge className="rounded-full">Romance</Badge>
                  <Badge className="rounded-full">Comedy</Badge>
                  <Badge variant="outline" className="rounded-full">Drama</Badge>
                  <Badge variant="outline" className="rounded-full">Action</Badge>
                  <Badge variant="outline" className="rounded-full">Thriller</Badge>
                  <Badge variant="outline" className="rounded-full">Historical</Badge>
                  <Badge variant="outline" className="rounded-full">Sci-Fi</Badge>
                  <Badge variant="outline" className="rounded-full">Fantasy</Badge>
                  <Button variant="outline" size="sm" className="rounded-full">
                    <Plus className="h-3 w-3 mr-1" />
                    Add Tag
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Cover Image</Label>
                <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center">
                  <Upload className="h-8 w-8 mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-1">Drag and drop or click to upload</p>
                  <p className="text-xs text-muted-foreground">PNG, JPG up to 5MB</p>
                  <Button variant="secondary" className="mt-4">Select File</Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Save as Draft</Button>
              <Button>Continue to Episodes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="episodes">
          <Card>
            <CardHeader>
              <CardTitle>Episodes</CardTitle>
              <CardDescription>
                Upload and manage episodes for this series
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-end">
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Episode
                </Button>
              </div>
              
              <div className="space-y-4">
                {/* Episode 1 */}
                <div className="border rounded-md p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-medium">Episode 1</h3>
                      <p className="text-sm text-muted-foreground">Duration: Not uploaded</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <Label htmlFor="ep1-title">Episode Title</Label>
                      <Input id="ep1-title" placeholder="Enter episode title" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ep1-number">Episode Number</Label>
                      <Input id="ep1-number" type="number" value="1" />
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <Label htmlFor="ep1-description">Description</Label>
                    <Textarea id="ep1-description" placeholder="Enter episode description" rows={2} />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Video File</Label>
                      <div className="border-2 border-dashed rounded-md p-4 flex flex-col items-center justify-center">
                        <Upload className="h-6 w-6 mb-2 text-muted-foreground" />
                        <p className="text-xs text-muted-foreground">MP4, MOV up to 2GB</p>
                        <Button variant="secondary" size="sm" className="mt-2">Select File</Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Thumbnail</Label>
                      <div className="border-2 border-dashed rounded-md p-4 flex flex-col items-center justify-center">
                        <Upload className="h-6 w-6 mb-2 text-muted-foreground" />
                        <p className="text-xs text-muted-foreground">PNG, JPG up to 2MB</p>
                        <Button variant="secondary" size="sm" className="mt-2">Select File</Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Episode 2 */}
                <div className="border rounded-md p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-medium">Episode 2</h3>
                      <p className="text-sm text-muted-foreground">Duration: Not uploaded</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <Label htmlFor="ep2-title">Episode Title</Label>
                      <Input id="ep2-title" placeholder="Enter episode title" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ep2-number">Episode Number</Label>
                      <Input id="ep2-number" type="number" value="2" />
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <Label htmlFor="ep2-description">Description</Label>
                    <Textarea id="ep2-description" placeholder="Enter episode description" rows={2} />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Video File</Label>
                      <div className="border-2 border-dashed rounded-md p-4 flex flex-col items-center justify-center">
                        <Upload className="h-6 w-6 mb-2 text-muted-foreground" />
                        <p className="text-xs text-muted-foreground">MP4, MOV up to 2GB</p>
                        <Button variant="secondary" size="sm" className="mt-2">Select File</Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Thumbnail</Label>
                      <div className="border-2 border-dashed rounded-md p-4 flex flex-col items-center justify-center">
                        <Upload className="h-6 w-6 mb-2 text-muted-foreground" />
                        <p className="text-xs text-muted-foreground">PNG, JPG up to 2MB</p>
                        <Button variant="secondary" size="sm" className="mt-2">Select File</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Previous</Button>
              <Button>Continue to Languages</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="languages">
          <Card>
            <CardHeader>
              <CardTitle>Language Versions</CardTitle>
              <CardDescription>
                Add translations and language versions for this series
              </CardDescription>
            </CardHeader>\
