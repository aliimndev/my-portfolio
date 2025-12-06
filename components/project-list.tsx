import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    tech: "Next.js, Stripe, PostgreSQL",
    year: "2024",
    href: "#",
  },
  {
    title: "Task Management App",
    tech: "React, Node.js, Socket.io",
    year: "2024",
    href: "#",
  },
  {
    title: "Real-time Chat",
    tech: "TypeScript, WebSocket, Redis",
    year: "2024",
    href: "#",
  },
  {
    title: "API Gateway",
    tech: "Go, Docker, Kubernetes",
    year: "2023",
    href: "#",
  },
  {
    title: "Analytics Dashboard",
    tech: "React, D3.js, GraphQL",
    year: "2023",
    href: "#",
  },
]

export function ProjectList() {
  return (
    <section id="work">
      <h2 className="mb-8 text-sm text-muted-foreground">Selected Work</h2>
      <div className="space-y-1">
        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.href}
            className="group flex items-center justify-between rounded-sm py-4 transition-colors hover:bg-secondary/50"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
              <span className="font-medium text-foreground">{project.title}</span>
              <span className="text-sm text-muted-foreground">{project.tech}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">{project.year}</span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
