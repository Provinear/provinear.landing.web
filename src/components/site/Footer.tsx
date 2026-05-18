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
        <div className="grid gap-6 md:grid-cols-3 items-center text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <Wordmark size="md" />
          </div>
          <p className="text-sm text-muted-foreground text-center max-w-md mx-auto">
            Commerce, closer to you. <br className="hidden sm:inline" /> An ecosystem for customers and providers.
          </p>
          <div className="flex justify-center md:justify-end text-xs text-muted-foreground/80">
            © {new Date().getFullYear()} Provinear.
          </div>
        </div>
      </div>
    </footer>
  );
}
