"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { Input } from "./ui/input";
import { CgBell } from "react-icons/cg";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Nav() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
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
    <nav className="flex gap-2 items-center justify-between py-3 px-4 sm:px-6 border-b border-gray-300">
      <div className="flex items-center gap-2 sm:gap-4">
        <div className="w-[100px] sm:w-[120px] md:w-[150px] h-[40px] sm:h-[50px] shrink-0">
          <Link href={"/"}>
            <Image src="/Home-Logo.png" alt="Logo" width={120} height={30} className="bg-contain size-full dark:invert-100" />
          </Link>
        </div>
        <div className="hidden lg:flex gap-4">
          {
            topics.map((topic, idx) => 
              <button
                key={idx}
                className="capitalize text-sm font-medium dark:text-gray-200 text-gray-700 relative group whitespace-nowrap cursor-pointer"
              >
                {topic.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 dark:bg-amber-400 bg-sky-600 animate-300 group-hover:w-full" />
              </button>)
          }
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4 md:gap-8">
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            if (searchQuery.trim()) {
              router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
            }
          }}
          className="relative h-fit hidden sm:block"
        >
          <Input 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 w-[150px] md:w-[200px] 
            focus-visible:ring-sky-300 dark:focus-visible:ring-amber-300 bg-gray-200/40 dark:bg-gray-400/20 border-none dark:focus-visible:border-amber-300
            focus-visible:border-sky-300 focus-visible:ring-2 shadow-none" 
            placeholder="Search news..." 
          />
          <button type="submit" className="absolute top-2 left-2">
            <Search className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors" size={20} />
          </button>
        </form>
        <ThemeToggle />
        <CgBell className="text-gray-600 dark:text-gray-200 dark:hover:text-amber-500 hover:text-sky-500 animate-300 size-5 cursor-pointer" />
      </div>

    </nav>
  )
}
