import { Wordmark } from "@/components/site/Wordmark";

export function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex items-center justify-between">
        <a href="/" className="group flex items-center transition-opacity hover:opacity-90">
          <Wordmark size="md" />
        </a>
        <nav className="hidden md:flex items-center gap-9 text-sm text-muted-foreground">
          <a href="#vision" className="hover:text-foreground transition-colors">Vision</a>
          <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
          <a href="#marketplaces" className="hover:text-foreground transition-colors">Marketplaces</a>
          <a href="#providers" className="hover:text-foreground transition-colors">Providers</a>
        </nav>
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface-elevated/60 backdrop-blur px-3.5 py-1.5 text-xs text-muted-foreground">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Coming soon
          </span>
        </div>
      </div>
    </header>
  );
}
