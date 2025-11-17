import {  Search } from "lucide-react";
import Link from "next/link";
import { Input } from "./ui/input";
import { CgBell } from "react-icons/cg";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";


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
    <nav className="flex gap-2 items-center justify-between py-3 px-4 border-b border-gray-300 ">
      <div className="flex items-center gap-4">
        <div className="w-[150px] h-[50px]">
          <Link href={"/"}>
            <Image src="/Home-Logo.png"  alt="Logo" width={120} height={30} className="bg-contain size-full dark:invert-100 " />
          </Link>
        </div>
        <div className="flex gap-4">
          {
            topics.map((topic, idx) => 
              <button
                key={idx}
                className="capitalize text-sm font-medium dark:text-gray-200 text-gray-700  relative group whitespace-nowrap cursor-pointer"
              >
                {topic.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 dark:bg-amber-400 bg-sky-600 animate-300 group-hover:w-full" />
              </button>)
          }
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="relative h-fit">
          <Input className="pl-10 w-[200px] 
          focus-visible:ring-sky-300 dark:focus-visible:ring-amber-300  bg-gray-200/40 dark:bg-gray-400/20 border-none dark:focus-visible:border-amber-300
          focus-visible:border-sky-300 focus-visible:ring-2 shadow-none" placeholder="Search" />
          <Search className="absolute top-2 left-2 text-gray-400 " size={20} />
        </div>
       <ThemeToggle />
        <CgBell className="text-gray-600 dark:text-gray-200 dark:hover:text-amber-500 hover:text-sky-500 animate-300  size-5" />
      </div>

    </nav>
  )
}
