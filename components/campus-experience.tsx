import { Calendar, Users } from "lucide-react"

const experiences = [
    {
        title: "Chief Organizer — Student Leadership Training (LDKM)",
        organization: "Chief organizer for a student leadership training program.",
        description: "Led and organized a student leadership training program, coordinating planning, logistics, and execution to deliver an effective leadership development experience.",
        year: "2025",
    },
    {
        title: "Curriculum Development",
        organization: "Participant in a curriculum workshop supporting academic program development.",
        description: "Contributed ideas and feedback to help improve course structure and learning outcomes",
        year: "2025",
    },
    {
        title: "Head of Fullstack Web Development",
        organization: "Student Executive Board (BEM), Faculty of Computer Science",
        description: "Developed and launched the official BEM website.",
        year: "2025",
    },
    {
        title: "Web Development Team Lead",
        organization: "Multimedia In Action (MIA) 2025 — Web in Action",
        description: "Led and coordinated the team in developing and presenting a functional web project.",
        year: "2025",
    },
    {
        title: "Head of Catering Team",
        organization: "Faculty Anniversary of Computer Science",
        description: "Ensured organized catering for 100 attendees, contributing to a successful event.",
        year: "2025",
    },
    {
        title: "Head of Media Team",
        organization: "Election Committee (KPU) — Student Organization (Campus Elections)",
        description: "Produce and manage media content to support campus events.",
        year: "2025",
    },
    {
        title: "Campus Achievement",
        organization: "Winner of Web Development Competition ",
        description: "Faculty of Computer Science, Class of 2024",
        year: "2024",
    },
]

export function CampusExperience() {
    return (
        <section id="experience" className="mt-16">
            <h2 className="mb-8 text-sm text-muted-foreground">Campus Experience</h2>
            <div className="space-y-1">
                {experiences.map((exp) => (
                    <div
                        key={exp.title}
                        className="group flex flex-col gap-2 rounded-sm py-4 transition-colors hover:bg-secondary/50 sm:flex-row sm:items-start sm:justify-between"
                    >
                        <div className="flex flex-col gap-1">
                            <span className="font-medium text-foreground">{exp.title}</span>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Users className="h-3 w-3" />
                                <span>{exp.organization}</span>
                            </div>
                            <p className="text-sm text-muted-foreground/80">{exp.description}</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            <span>{exp.year}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
