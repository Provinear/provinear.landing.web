import { Wordmark } from "@/components/site/Wordmark";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 mt-24 overflow-hidden">
      {/* Oversized brand watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-10 md:-bottom-16 select-none"
      >
        <div className="font-display text-[22vw] md:text-[16vw] leading-none tracking-tight text-center bg-gradient-to-b from-primary/10 to-transparent bg-clip-text text-transparent">
          Provinear
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-32 md:pb-40">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <Wordmark size="md" />
          <p className="text-sm text-muted-foreground max-w-md">
            Find local providers, products, and services nearby.
          </p>
          <p className="text-xs text-muted-foreground/80">
            © {new Date().getFullYear()} Provinear.
          </p>
        </div>
      </div>
    </footer>
  );
}
