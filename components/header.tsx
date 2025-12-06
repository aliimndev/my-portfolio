import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-5">
        <Link href="/" className="font-mono text-sm tracking-tight text-foreground">
          ali.dev
        </Link>
        <nav className="flex items-center gap-8">
          <Link href="#work" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Work
          </Link>
          <Link
            href="mailto:hello@ali.dev"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
