import { Wordmark } from "@/components/site/Wordmark";
import { Search } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Nav() {
  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <header className="w-full max-w-5xl rounded-full border border-white/40 bg-white/70 backdrop-blur-xl shadow-lg shadow-black/5">
        <div className="flex items-center justify-between px-6 py-4">
          <Link
            to="/"
            className="group flex items-center transition-opacity hover:opacity-90"
          >
            <Wordmark size="md" />
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-bold text-[#566173] lg:flex">
            <a
              href="/#categories"
              className="transition-colors hover:text-[#0b1120]"
            >
              Browse
            </a>
            <a
              href="/#nearby"
              className="transition-colors hover:text-[#0b1120]"
            >
              Nearby
            </a>
            <a
              href="/#board"
              className="transition-colors hover:text-[#0b1120]"
            >
              Request Board
            </a>
            <a
              href="/#sellers"
              className="transition-colors hover:text-[#0b1120]"
            >
              For Sellers
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/search"
              search={{ q: "" }}
              className="hidden items-center gap-2 rounded-full border border-[#0b1120]/10 bg-white px-5 py-2.5 text-sm font-bold text-[#0b1120] shadow-sm transition-all hover:-translate-y-0.5 sm:flex"
            >
              <Search className="h-4 w-4 text-[#8b5cf6]" />
              Explore
            </Link>
            <a
              href="/#waitlist"
              className="inline-flex rounded-full bg-[#0b1120] px-6 py-2.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
