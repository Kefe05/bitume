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
    <footer className="flex items-center flex-col justify-center">
      <div className="flex gap-4 items-center mx-auto">
        {footerLinks.map((link, idx) => <Link href={"#"} key={idx}>{link.title}</Link>)}
      </div>
      <div className="flex"><Copyright />{currentYear} <p>News Todays. All rights reserved</p></div>
    </footer>
  )
}
