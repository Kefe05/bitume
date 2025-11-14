import { CreditCard, Moon, Search } from "lucide-react";
import Link from "next/link";
import { Input } from "./ui/input";
import { CgBell } from "react-icons/cg";
import Image from "next/image";


export default function Nav() {
  const topics = [
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
    <nav className="flex gap-2 items-center justify-between py-3 px-4 border-bottom border-gray-300 border">
      <div  className="flex items-center gap-4">
        <div className="w-[150px] h-[50px]">
          <Image src="/Home-Logo.png" alt="Logo" width={120} height={30} className="bg-contain size-full " />
        </div>
        <div className="flex gap-4">
          {
            topics.map((topic, idx) => <Link href={"#"} className="capitalize text-gray-600" key={idx}>{topic.name}</Link>)
          }
        </div>
      </div>

     <div className="flex items-center gap-8">
        <div className="relative h-fit">
          <Input className="pl-10 w-[200px] bg-gray-200/40 border-none" placeholder="Search" />
          <Search className="absolute top-2 left-2 text-gray-400 " size={20} />
        </div>
        <Moon size={20} className="text-gray-600"/>
        <CgBell className="text-gray-600 size-5" />
     </div>

    </nav>
  )
}
