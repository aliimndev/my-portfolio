import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProjectList } from "@/components/project-list"
import { CampusExperience } from "@/components/campus-experience"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-2xl px-6 pb-24 pt-32">
        <Hero />
        <ProjectList />
        <CampusExperience />
      </main>
      <Footer />
    </div>
  )
}

