import Link from "next/link"

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-5">
        <span className="text-sm text-muted-foreground">© 2025</span>
        <div className="flex items-center gap-6">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            LinkedIn
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            X
          </Link>
        </div>
      </div>
    </footer>
  )
}
