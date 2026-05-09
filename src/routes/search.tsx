import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Search, MapPin, SlidersHorizontal } from "lucide-react";

export const Route = createFileRoute("/search")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      q: (search.q as string) || "",
    };
  },
  component: SearchPage,
});

function SearchPage() {
  const { q } = Route.useSearch();

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="pt-32 pb-20 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="font-display text-4xl text-ink mb-2">
              Results for "{q || "Nearby"}"
            </h1>
            <p className="text-muted-foreground flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              Showing products and services within 5km of your location
            </p>
          </div>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-surface-elevated text-sm font-medium hover:bg-surface transition-colors">
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Placeholder for search results */}
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="aspect-square bg-surface-elevated rounded-3xl mb-4" />
              <div className="h-5 bg-surface-elevated rounded-full w-3/4 mb-2" />
              <div className="h-4 bg-surface-elevated rounded-full w-1/2" />
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 rounded-[3rem] bg-surface-elevated border border-border/50 text-center">
          <h2 className="font-display text-2xl text-ink mb-4">
            Haven't found what you're looking for?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Post a request on the neighborhood board and let local providers
            come to you.
          </p>
          <button className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-soft hover:shadow-elevated transition-all">
            Post a Request
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
