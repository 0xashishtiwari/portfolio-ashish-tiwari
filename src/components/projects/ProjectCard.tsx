import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

type ProjectCardProps = {
  title: string
  description: string
  imageUrl: string | StaticImageData
  liveUrl: string
  repoUrl: string
}

export function ProjectCard({
  title,
  description,
  imageUrl,
  liveUrl,
  repoUrl,
}: ProjectCardProps) {
  return (
   <Card className="w-full h-[420px] flex flex-col overflow-hidden hover:shadow-lg transition-all hover:scale-[1.03] duration-300">

      {/* Image */}
      <div className="relative aspect-video w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Header */}
      <CardHeader>
        <CardAction>
          <Badge variant="secondary" className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Operational
          </Badge>
        </CardAction>

        <CardTitle>{title}</CardTitle>
      </CardHeader>

      {/* Description */}
     <CardDescription className="px-2 pb-4 text-sm text-muted-foreground text-justify line-clamp-3">
        {description}
      </CardDescription>

      {/* Footer Buttons */}
      <CardFooter className="flex gap-2 bottom-0 px-2 mt-auto">
        
        {/* Live */}
        <Button asChild className=" w-1/2 font-semibold">
          <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
            Live
          </Link>
        </Button>

        {/* Repo / Deployed */}
        <Button asChild variant="outline" className=" w-1/2 font-semibold">
          <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
            Code
          </Link>
        </Button>

      </CardFooter>

    </Card>
  )
}