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
    <footer className="flex items-center flex-col justify-center text-gray-600">
      <div className="flex gap-4 items-center mx-auto">
        {footerLinks.map((link, idx) => <Link href={"#"} className="capitalize" key={idx}>{link.title}</Link>)}
      </div>
      <div className="flex gap-2 items-center"><Copyright size={15} /> <p> {currentYear} News Todays. All rights reserved</p></div>
    </footer>
  )
}
