import { MapPin, GraduationCap, Download } from "lucide-react"

export function Hero() {
  return (
    <section className="mb-20">
      <p className="mb-4 text-sm text-muted-foreground">Fullstack Engineer</p>
      <h1 className="mb-6 text-4xl font-medium tracking-tight text-foreground sm:text-5xl">Ali Imannudin</h1>
      <p className="max-w-md text-base leading-relaxed text-muted-foreground">
        Building scalable web systems with modern technologies. Focused on clean code and intuitive user experiences.
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-4 w-4" />
          <span>Computer Science - Djuanda University</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          <span>Bogor, Indonesia</span>
        </div>
        <a
          href="/resume.pdf"
          download="Ali_Imannudin_Resume.pdf"
          className="flex items-center gap-2 text-foreground transition-all duration-300 hover:opacity-70"
        >
          <Download className="h-4 w-4" />
          <span className="underline underline-offset-4">Resume</span>
        </a>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {[
          { name: 'typescript', label: 'TypeScript' },
          { name: 'react', label: 'React' },
          { name: 'nextjs', label: 'Next.js' },
          { name: 'go', label: 'Go' },
          { name: 'nodejs', label: 'Node.js' },
          { name: 'postgresql', label: 'PostgreSQL' },
          { name: 'docker', label: 'Docker' },
          { name: 'redis', label: 'Redis' },
          { name: 'tailwind', label: 'TailwindCSS' },
          { name: 'git', label: 'Git' },
          { name: 'python', label: 'Python' },
          { name: 'mongodb', label: 'MongoDB' },
        ].map((tech) => (
          <img
            key={tech.name}
            src={`https://skillicons.dev/icons?i=${tech.name}&theme=dark`}
            alt={tech.label}
            title={tech.label}
            className="h-8 w-8 grayscale brightness-150 opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
          />
        ))}
      </div>
    </section>
  )
}
