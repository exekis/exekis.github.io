import { Github, Linkedin, Music} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Projects from "@/components/sections/Projects"

export default function Home() {

  const socials = [
    {
      title: "GitHub",
      href: "https://github.com/exekis",
      icon: <Github className="w-4 h-4" />
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/kiarash-sotoudeh/",
      icon: <Linkedin className="w-4 h-4"/>
    },
    {
      title: "Spotify",
      href: "https://open.spotify.com/user/efd4z12jjxli06kzkh0uk5hbs?si=f3612c92d02b40f5",
      icon: <Music className="w-4 h-4"/>
    }
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-purple-blue text-2xl md:text-3xl">Hey, it&apos;s Kiarash here! :D</h1>
      <p className="text-lg text-gray-white">
        Programming Languages & Formal Methods Enthusiast | Open Source Contributor
      </p>
      <div className="flex gap-4 flex-wrap">
        {socials.map((social) => (
          <Link href={social.href} key={social.title}>
            <Button variant="outline" className="gap-2 text-purple border-muted hover:border-gray-white">
              {social.icon}
              {social.title}
            </Button>
          </Link>
        ))}
      </div>
      <Projects />
    </div>
  )
}
