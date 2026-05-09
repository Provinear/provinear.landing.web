import { Wordmark } from "@/components/site/Wordmark";
import { Search, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-8 flex items-center justify-between">
        <Link
          to="/"
          className="group flex items-center transition-opacity hover:opacity-90"
        >
          <Wordmark size="md" />
        </Link>

        <nav className="hidden lg:flex items-center gap-10 text-sm font-semibold text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <a
            href="#categories"
            className="hover:text-primary transition-colors"
          >
            Categories
          </a>
          <a href="#nearby" className="hover:text-primary transition-colors">
            Nearby
          </a>
          <a href="#board" className="hover:text-primary transition-colors">
            Request Board
          </a>
          <a href="#sellers" className="hover:text-primary transition-colors">
            For Sellers
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/search"
            search={{ q: "" }}
            className="hidden sm:flex items-center gap-2 rounded-2xl border border-border/60 bg-white/50 backdrop-blur px-4 py-2 text-xs font-bold text-ink hover:bg-white transition-all shadow-soft"
          >
            <Search className="h-3.5 w-3.5 text-primary" />
            Find nearby
          </Link>
          <button className="px-5 py-2.5 rounded-2xl bg-primary text-primary-foreground text-xs font-bold shadow-soft hover:shadow-elevated transition-all">
            Join Provinear
          </button>
        </div>
      </div>
    </header>
  );
}
