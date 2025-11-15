import { Search } from "lucide-react";
import { Input } from "./ui/input";
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
        <Input
          className="pl-10 focus-visible:ring-sky-300/10 focus-visible:border-sky-300 focus-visible:ring-2 shadow-none"
          placeholder="Search for topics, news..."
        />
        <Search className="absolute top-2 left-2 text-gray-400 " size={20} />
      </div>


      {/*Topics */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {
          topics.map((topic, idx) => <Button className="capitalize rounded-full btn-primary animate-300" key={idx}>{topic.name}</Button>)
        }
      </div>

      {/* Banner */}
      <Card
        className="h-[400px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80')" }}
      >
        <CardContent className="flex flex-col justify-end space-y-4  h-full text-white">
          <h2 className="text-6xl font-bold">Breaking:Major political Event unfolds </h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque qui voluptatem minus atque alias similique non culpa nulla consequuntur autem, totam cumque nihil, repellendus iusto assumenda suscipit! Quaerat enim rem hic doloribus aliquam eveniet quod, officia, exercitationem accusamus adipisci dolores.</p>
          <Button className="w-fit text-lg bg-sky-600 hover:bg-sky-700 text-white  cursor-pinter">Read More</Button>
        </CardContent>

      </Card>




    </section>
  )
}
