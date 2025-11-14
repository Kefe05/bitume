import { Search } from "lucide-react";
import { Input } from "./ui/input";
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group"
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";


export default function Banner() {
  
  const topics = [
    {
      name: "all",
    },
    {
      name: "top stories"
    },
    {
      name: "world"
    },
    {
      name: "politics"
    }, 
    {
      name: "business"
    }, 
    {
      name: "tech"
    }

  ]



  return (
    <section className="space-y-4">
      {/* Search bar */}
      <div className="relative h-fit">
          <Input  className="pl-10" placeholder="Search for topics, news..."/>
          <Search className="absolute top-2 left-2 text-gray-400 " size={20} />
      </div>


      {/*Topics */}
      <ButtonGroup>
        {
          topics.map((topic, idx) => <Button className="capitialize" key={idx}>{topic.name}</Button> )
        }
      </ButtonGroup>

      {/* Banner */}
      <Card className="h-[400px] bg-gray-400">
       <CardContent className="flex flex-col justify-center space-y-4 ">
        <h2 className="text-4xl font-bold">Breaking:Major political Event unfolds </h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque qui voluptatem minus atque alias similique non culpa nulla consequuntur autem, totam cumque nihil, repellendus iusto assumenda suscipit! Quaerat enim rem hic doloribus aliquam eveniet quod, officia, exercitationem accusamus adipisci dolores.</p>
       <Button className="w-fit">Read More</Button>
       </CardContent>
    
      </Card>

      


    </section>
  )
}
