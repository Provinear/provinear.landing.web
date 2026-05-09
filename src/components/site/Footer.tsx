import { Wordmark } from "@/components/site/Wordmark";

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-[#0b1120] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <Wordmark size="md" />
          <div className="max-w-md">
            <p className="text-sm leading-7 text-white/70">
              Provinear helps you find trusted nearby products and services
              faster, without depending on scattered contacts, group chats, or
              guesswork.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm font-medium text-white/70">
              <a href="/#categories" className="hover:text-white">
                Browse
              </a>
              <a href="/#board" className="hover:text-white">
                Request Board
              </a>
              <a href="/#sellers" className="hover:text-white">
                For Sellers
              </a>
              <a href="/#waitlist" className="hover:text-white">
                Waitlist
              </a>
            </div>
          </div>
          <p className="text-xs text-white/45">
            © {new Date().getFullYear()} Provinear. Early access landing page.
          </p>
        </div>
      </div>
    </footer>
  );
}
