import { Wordmark } from "@/components/site/Wordmark";
import { Search } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f8f4ec]/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link
          to="/"
          className="group flex items-center transition-opacity hover:opacity-90"
        >
          <Wordmark size="md" />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-[#566173] lg:flex">
          <a
            href="/#how-it-works"
            className="transition-colors hover:text-[#0b1120]"
          >
            How it works
          </a>
          <a
            href="/#categories"
            className="transition-colors hover:text-[#0b1120]"
          >
            Use cases
          </a>
          <a href="/#nearby" className="transition-colors hover:text-[#0b1120]">
            Nearby
          </a>
          <a href="/#board" className="transition-colors hover:text-[#0b1120]">
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
            className="hidden items-center gap-2 rounded-full border border-[#0b1120]/10 bg-white px-4 py-2 text-xs font-semibold text-[#0b1120] shadow-[0_10px_30px_rgba(11,17,32,0.06)] transition-all hover:-translate-y-0.5 sm:flex"
          >
            <Search className="h-3.5 w-3.5 text-[#f28b34]" />
            Find nearby
          </Link>
          <a
            href="/#waitlist"
            className="inline-flex rounded-full bg-[#0b1120] px-5 py-2.5 text-xs font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Join waitlist
          </a>
        </div>
      </div>
    </header>
  );
}
