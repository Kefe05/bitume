import { Copy, Copyright } from "lucide-react"
import Link from "next/link"


export default function Footer() {
  const footerLinks = [
    {
      title: "about us",
    },
    {
      title: "contact",
    },
    {
      title: "privacy policy",
    },
    {
      title: "terms of service",
    },
  ]

  const date = new Date();
  const currentYear = date.getFullYear()


  return (
    <footer className="flex items-center flex-col justify-center text-gray-600 dark:text-gray-400">
      <div className="flex gap-4 items-center mx-auto min-[300]:text-xs min-[500px]:text-base">
        {footerLinks.map((link, idx) => <Link href={`/${link.title}`} className="capitalize hover:text-white" key={idx}>{link.title}</Link>)}
      </div>
      <div className="flex gap-2 items-center"><Copyright size={15} /> <p> {currentYear} News Todays. All rights reserved</p></div>
    </footer>
  )
}
