import Link from "next/link"
import {Heart, Share, Share2, SlashIcon} from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card } from "@/components/ui/card"
import { BiComment } from "react-icons/bi"
export default function Banner() {
  return (
    <section className="space-y-4">


      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">News</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <SlashIcon />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/components">Tech</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
         
        </BreadcrumbList>
      </Breadcrumb>

     <h2>Tech Giant Unveils new Innovation at annual confernece</h2>
     <small>By ameila Harper . Published on July 26, 2024</small>

      <Card className="h-[400px] my-3 bg-gray-400">
       
      </Card>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam corporis quam quod facilis ex molestias doloremque nam numquam porro iusto!</p>

      <hr />
      <div className="flex justify-center gap-4 items-center">
        <div>
          <Heart />
          1.2k
        </div>
        <div>
          <BiComment />
          1.2k
        </div>
        <div>
          <Share2 />
          1.2k
        </div>
      </div>
      <hr />


    </section>
  )
}
