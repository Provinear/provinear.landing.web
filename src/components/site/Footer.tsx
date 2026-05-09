import { Wordmark } from "@/components/site/Wordmark";

export function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <Wordmark size="md" />
          <div className="max-w-md">
            <p className="text-sm leading-7 text-primary-foreground/72">
              Provinear helps you find trusted nearby products and services
              faster, without depending on scattered contacts, group chats, or
              guesswork.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm font-medium text-primary-foreground/72">
              <a href="/#categories" className="hover:text-primary-foreground">
                Browse
              </a>
              <a href="/#board" className="hover:text-primary-foreground">
                Request Board
              </a>
              <a href="/#sellers" className="hover:text-primary-foreground">
                For Sellers
              </a>
              <a href="/#waitlist" className="hover:text-primary-foreground">
                Waitlist
              </a>
            </div>
          </div>
          <p className="text-xs text-primary-foreground/45">
            © {new Date().getFullYear()} Provinear. Early access landing page.
          </p>
        </div>
      </div>
    </footer>
  );
}
