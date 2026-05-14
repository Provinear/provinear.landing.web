import { Wordmark } from "@/components/site/Wordmark";
import { Link } from "@tanstack/react-router";

type NavProps = {
  onJoinClick?: () => void;
};

export function Nav({ onJoinClick }: NavProps) {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-7xl">
      <div className="bg-white/90 backdrop-blur-md border border-border/50 rounded-full px-6 lg:px-8 py-3.5 flex items-center justify-between shadow-soft">
        <Link
          to="/"
          className="group flex items-center transition-opacity hover:opacity-90"
        >
          <Wordmark size="md" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <a
            href="#categories"
            className="hover:text-primary transition-colors"
          >
            Preview
          </a>
          <a href="#nearby" className="hover:text-primary transition-colors">
            Nearby
          </a>
          <a href="#board" className="hover:text-primary transition-colors">
            How it works
          </a>
          <a href="#sellers" className="hover:text-primary transition-colors">
            For Providers
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onJoinClick}
            className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-soft hover:shadow-elevated transition-all active:scale-95"
          >
            Join early access
          </button>
        </div>
      </div>
    </header>
  );
}
