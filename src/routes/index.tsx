import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Zap,
} from "lucide-react";

import { EarlyAccessModal } from "@/components/site/EarlyAccessModal";
import { Footer } from "@/components/site/Footer";
import { MapVisual } from "@/components/site/MapVisual";
import { Nav } from "@/components/site/Nav";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Provinear | Commerce that works for the people inside it." },
      {
        name: "description",
        content:
          "Provinear connects customers and providers in a way that makes commerce feel human again. Discover what is around you, reach what is further, and build real relationships with the people behind what you buy.",
      },
    ],
  }),
});

function Index() {
  useScrollReveal();
  const [activeCategory, setActiveCategory] = useState(0);
  const [isEarlyAccessOpen, setIsEarlyAccessOpen] = useState(false);
  const [earlyAccessIntent, setEarlyAccessIntent] = useState<"discover" | "sell">("discover");
  const [collapsedCards, setCollapsedCards] = useState<Record<number, boolean>>({});

  const toggleCardCollapse = (idx: number) => {
    setCollapsedCards((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const openEarlyAccess = (intent: "discover" | "sell") => {
    setEarlyAccessIntent(intent);
    setIsEarlyAccessOpen(true);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#FDFCFB] font-sans text-foreground selection:bg-primary/20">
      <Nav onJoinClick={() => openEarlyAccess("discover")} />
      <EarlyAccessModal
        open={isEarlyAccessOpen}
        onOpenChange={setIsEarlyAccessOpen}
        defaultIntent={earlyAccessIntent}
      />

      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="pointer-events-none absolute top-0 right-0 h-[1000px] w-[1000px] translate-x-1/3 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,var(--primary-soft)_0%,transparent_70%)] opacity-60 mix-blend-multiply" />
        <div className="pointer-events-none absolute top-40 left-0 h-[800px] w-[800px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,oklch(0.95_0.02_70)_0%,transparent_70%)] opacity-50 mix-blend-multiply" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-12 lg:px-10">
          <div className="z-10 lg:col-span-7">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white px-4 py-2 text-xs font-bold text-primary shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              Coming soon: join early
            </div>

            <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-ink 
                           animate-in fade-in slide-in-from-bottom-6 duration-1000 
                           md:text-7xl lg:text-[5rem]">
              Commerce,{" "}
              <span className="text-primary">closer</span>
              <br />
              to you.
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground animate-in fade-in slide-in-from-bottom-8 duration-1000 md:text-2xl">
              Provinear connects customers and providers in a way that actually
              makes commerce feel human again. Discover what is around you,
              reach what is further, and build real relationships with the
              people behind what you buy.
            </p>

            <div className="mt-10 max-w-2xl animate-in fade-in slide-in-from-bottom-10 duration-1000">
              <div className="rounded-[2rem] border border-border/60 bg-white/92 p-5 shadow-elevated backdrop-blur-xl md:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">
                  Join early access
                </p>
                <h3 className="mt-2 font-display text-2xl leading-tight text-ink md:text-3xl">
                  Be part of something being built differently.
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Join as a customer discovering better options, or as a provider
                  ready to be found. We are onboarding both sides before we
                  open.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <button
                    type="button"
                    onClick={() => openEarlyAccess("discover")}
                    className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 text-base font-bold text-primary-foreground shadow-lg transition-all hover:bg-ink"
                  >
                    Join early access
                  </button>
                  <p className="text-sm text-muted-foreground">
                    Quick signup. Just email and what you want to use it for.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:col-span-5 lg:block">
            <div className="relative z-10 scale-110 drop-shadow-2xl">
              <MapVisual />
            </div>
            <div className="absolute top-10 -left-10 z-20 rounded-3xl border border-white bg-white/80 p-4 shadow-elevated backdrop-blur-xl animate-float-y">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10 text-green-600">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-ink">
                    Optional escrow
                  </div>
                  <div className="text-xs font-medium text-muted-foreground">
                    Providers who use it earn the Provinear trust badge
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute right-[-2rem] bottom-20 z-20 rounded-3xl border border-white bg-white/80 p-4 shadow-elevated backdrop-blur-xl animate-float-y"
              style={{ animationDelay: "2s" }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-ink">
                    Providers near and far
                  </div>
                  <div className="text-xs font-medium text-muted-foreground">
                    Find what is close. Reach what is further.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-20 border-y border-border/40 bg-white py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:px-10 md:grid-cols-3">
          {[
            {
              t: "Customers meet providers",
              d: "Not just listings. Provinear is built for customers and providers to actually connect: see each other, talk, transact, and build trust over time.",
              i: MapPin,
            },
            {
              t: "A marketplace with a soul",
              d: "Every provider on Provinear has a storefront, a story, and a reputation they have earned. You always know who you are dealing with.",
              i: ShieldCheck,
            },
            {
              t: "Commerce, both ways",
              d: "Customers can find providers. Providers can find customers. Anyone can list something for sale. The platform works for everyone inside it.",
              i: MessageCircle,
            },
          ].map((item, idx) => {
            const delays = ["0s", "0.12s", "0.24s"];
            return (
              <div
                key={item.t}
                className="group flex gap-5 reveal"
                style={{ transitionDelay: delays[idx] }}
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/5 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                  <item.i className="h-7 w-7" />
                </div>
                <div>
                  <div className="mb-2 font-display text-2xl text-ink">
                    {item.t}
                  </div>
                  <div className="text-base leading-relaxed text-muted-foreground">
                    {item.d}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section
        id="categories"
        className="relative overflow-hidden bg-[#FDFCFB] py-24"
      >
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-3xl reveal">
              <span className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                <Sparkles className="h-4 w-4" /> The ecosystem
              </span>
              <h2 className="mb-6 font-display text-4xl leading-tight text-ink md:text-6xl">
                Every provider. Every kind of commerce. <br />
                <span className="text-primary italic">
                  One connected place.
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                From the baker two streets away to the tailor who ships
                nationwide. Provinear gives every provider a place to be found
                and every customer a better way to find them.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsEarlyAccessOpen(true)}
              className="h-14 shrink-0 rounded-full border-2 border-border bg-white px-8 font-bold transition-all hover:border-primary hover:text-primary hover:shadow-sm inline-flex items-center reveal"
              style={{ transitionDelay: "0.1s" }}
            >
              Join early access
            </button>
          </div>

          <div
            className="flex h-[600px] w-full flex-col gap-4 lg:flex-row reveal"
            style={{ transitionDelay: "0.2s" }}
          >
            {[
              {
                n: "Things made with care",
                img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
                d: "Products & goods",
              },
              {
                n: "Handmade & original",
                img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
                d: "Independent makers",
              },
              {
                n: "Useful expertise, nearby",
                img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
                d: "Services & skills",
              },
              {
                n: "Independent style",
                img: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=800&q=80",
                d: "Style & fashion",
              },
            ].map((cat, idx) => (
              <div
                key={cat.n}
                onMouseEnter={() => setActiveCategory(idx)}
                className={`group relative cursor-pointer overflow-hidden rounded-[2rem] shadow-soft transition-all duration-700 ease-in-out hover:shadow-elevated lg:rounded-[3rem] ${activeCategory === idx
                    ? "flex-[4] lg:flex-[3]"
                    : "flex-1 hover:flex-[1.2]"
                  }`}
              >
                <img
                  src={cat.img}
                  alt={cat.n}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-700 ${activeCategory === idx
                      ? "from-ink/90 via-ink/20 to-transparent opacity-90"
                      : "from-ink/90 via-ink/50 to-ink/20 opacity-80"
                    }`}
                />
                <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10 lg:rounded-[3rem]" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p
                    className={`mb-2 text-xs font-bold uppercase tracking-widest text-primary-soft transition-all duration-500 delay-100 ${activeCategory === idx
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0 lg:hidden"
                      }`}
                  >
                    {cat.d}
                  </p>
                  <h3
                    className={`font-display leading-tight text-white transition-all duration-500 ${activeCategory === idx
                        ? "text-4xl lg:text-5xl"
                        : "text-2xl lg:absolute lg:bottom-12 lg:left-12 lg:origin-bottom-left lg:rotate-[-90deg] lg:whitespace-nowrap"
                      }`}
                  >
                    {cat.n}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="nearby" className="relative overflow-hidden bg-white py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.06),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16 max-w-3xl reveal">
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-primary">
              <Sparkles className="h-4 w-4" />
              How discovery works
            </span>

            <h2 className="font-display text-4xl leading-tight text-ink md:text-6xl">
              Search, explore, or simply ask,
              <br />
              <span className="text-primary italic">
                and the market answers.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground">
              Provinear gives you three ways in: search for what you need,
              explore what providers around you are offering, or post a request
              and let providers come to you with their best offer.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:grid-rows-2">
            {[
              {
                n: "Find what is already around you",
                d: "Browse by category, location, or search in plain language. Provinear surfaces providers you never knew existed.",
                t: "Search & discover",
                img: "https://images.unsplash.com/photo-1585478259715-876a6a81fc08?auto=format&fit=crop&w=1200&q=80",
                cls: "lg:col-span-7 lg:row-span-2",
              },
              {
                n: "Every provider, a real presence",
                d: "Not just a listing. A storefront with products, reviews, a story, and a way to talk directly.",
                t: "Provider storefronts",
                img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80",
                cls: "lg:col-span-5",
              },
              {
                n: "Products and services, together",
                d: "One place for goods, services, and skilled work from providers who are genuinely discoverable.",
                t: "Commerce that connects",
                img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80",
                cls: "lg:col-span-5",
              },
              // {
              //   n: "More personal discovery",
              //   d: "Less noise. More useful local finds that actually feel relevant.",
              //   t: "What we&apos;re building",
              //   img: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?auto=format&fit=crop&w=900&q=80",
              //   cls: "lg:col-span-2",
              // },
            ].map((item, idx) => {
              const revealClass = idx === 0 ? "reveal-left" : "reveal-right";
              const delay = idx === 0 ? "0.15s" : idx === 1 ? "0.25s" : "0.35s";
              return (
                <div
                  key={item.n}
                  className={`group relative overflow-hidden rounded-[2.5rem] ${item.cls} ${revealClass}`}
                  style={{ transitionDelay: delay }}
                >
                  <div className="absolute inset-0">
                    <img
                      src={item.img}
                      alt={item.n}
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-white/10" />

                  <div className="relative flex h-full flex-col justify-end p-8 lg:p-10">
                    <div className="mb-4">
                      <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/80 backdrop-blur-md">
                        {item.t}
                      </span>
                    </div>

                    <h3 className="max-w-md font-display text-3xl leading-tight text-white md:text-5xl">
                      {item.n}
                    </h3>

                    <p className="mt-4 max-w-md text-base leading-relaxed text-white/75 md:text-lg">
                      {item.d}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/*<section id="nearby" className="relative bg-white py-24">*/}
      {/*  <div className="mx-auto max-w-7xl px-6 lg:px-10">*/}
      {/*    <div className="mx-auto mb-20 max-w-3xl text-center">*/}
      {/*      <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">*/}
      {/*        Preview feed*/}
      {/*      </span>*/}
      {/*      <h2 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl lg:text-6xl">*/}
      {/*        A quick look at what <br /> you could find nearby.*/}
      {/*      </h2>*/}
      {/*    </div>*/}

      {/*    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">*/}
      {/*      {[*/}
      {/*        {*/}
      {/*          n: "Wildflower sourdough",*/}
      {/*          p: "Preview only",*/}
      {/*          d: "Baked this morning",*/}
      {/*          r: "Fresh bread from a local provider",*/}
      {/*          s: "Local provider",*/}
      {/*          img: "https://images.unsplash.com/photo-1585478259715-876a6a81fc08?auto=format&fit=crop&w=600&q=80",*/}
      {/*        },*/}
      {/*        {*/}
      {/*          n: "Custom denim work",*/}
      {/*          p: "Preview only",*/}
      {/*          d: "Made to order",*/}
      {/*          r: "Custom work from a nearby provider",*/}
      {/*          s: "Local provider",*/}
      {/*          img: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?auto=format&fit=crop&w=600&q=80",*/}
      {/*        },*/}
      {/*        {*/}
      {/*          n: "Botanical body care",*/}
      {/*          p: "Preview only",*/}
      {/*          d: "Thoughtful ingredients",*/}
      {/*          r: "Care products from an independent provider",*/}
      {/*          s: "Local provider",*/}
      {/*          img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80",*/}
      {/*        },*/}
      {/*        {*/}
      {/*          n: "Precision camera repair",*/}
      {/*          p: "Preview only",*/}
      {/*          d: "Skilled hands nearby",*/}
      {/*          r: "Repair help from a trusted provider",*/}
      {/*          s: "Service provider",*/}
      {/*          img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80",*/}
      {/*        },*/}
      {/*      ].map((prod) => (*/}
      {/*        <div*/}
      {/*          key={prod.n}*/}
      {/*          className="group rounded-[2.5rem] border border-border/60 bg-surface p-4 shadow-soft transition-all duration-500 hover:border-primary/20 hover:shadow-elevated"*/}
      {/*        >*/}
      {/*          <div className="relative mb-5 aspect-square overflow-hidden rounded-[2rem]">*/}
      {/*            <img*/}
      {/*              src={prod.img}*/}
      {/*              alt={prod.n}*/}
      {/*              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"*/}
      {/*            />*/}
      {/*            <div className="absolute top-4 right-4 rounded-full bg-white/90 px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-ink shadow-sm backdrop-blur-md">*/}
      {/*              {prod.p}*/}
      {/*            </div>*/}
      {/*            <div className="absolute bottom-4 left-4 rounded-full bg-ink/90 px-4 py-2 text-xs font-bold text-white shadow-lg backdrop-blur-md flex items-center gap-2">*/}
      {/*              <MapPin className="h-4 w-4" /> {prod.d}*/}
      {/*            </div>*/}
      {/*          </div>*/}

      {/*          <div className="px-3 pb-3">*/}
      {/*            <div className="mb-3 flex items-center justify-between">*/}
      {/*              <span className="truncate pr-2 text-[11px] font-extrabold uppercase tracking-widest text-muted-foreground">*/}
      {/*                {prod.s}*/}
      {/*              </span>*/}
      {/*              <div className="shrink-0 rounded-full bg-warm/60 px-3 py-1 text-xs font-bold text-ink">*/}
      {/*                Preview*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*            <h3 className="mb-3 line-clamp-1 text-2xl font-display leading-tight text-ink transition-colors group-hover:text-primary">*/}
      {/*              {prod.n}*/}
      {/*            </h3>*/}
      {/*            <p className="min-h-12 text-sm leading-relaxed text-muted-foreground">*/}
      {/*              {prod.r}*/}
      {/*            </p>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

      <section
        id="board"
        className="relative overflow-hidden bg-ink py-24 text-white"
      >
        <div className="pointer-events-none absolute top-0 right-0 h-[800px] w-[800px] bg-[radial-gradient(ellipse_at_center,var(--primary)_0%,transparent_70%)] opacity-30 mix-blend-screen" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[600px] w-[600px] bg-[radial-gradient(ellipse_at_center,var(--primary-glow)_0%,transparent_70%)] opacity-20 mix-blend-screen" />

        <div className="relative mx-auto grid max-w-7xl items-start gap-20 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <span className="reveal-fade mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-soft">
              <Users className="h-4 w-4" /> The Request Board
            </span>
            <h2 className="reveal-left mt-4 mb-8 font-display text-5xl leading-tight md:text-6xl lg:text-7xl">
              Post what you need. <br /> Providers come to you.
            </h2>
            <p
              className="reveal-left mb-10 max-w-lg text-xl leading-relaxed text-white/70"
              style={{ transitionDelay: "0.15s" }}
            >
              The Request Board inverts the usual marketplace. You describe what
              you need: a product, service, skill, or job. Providers on
              Provinear make you their offer. You compare, choose, and go.
            </p>
            <div className="reveal-left" style={{ transitionDelay: "0.3s" }}>
              <button
                type="button"
                onClick={() => openEarlyAccess("discover")}
                className="inline-flex h-14 items-center rounded-full bg-primary px-8 text-lg font-bold text-white transition-all hover:scale-105 hover:shadow-[0_0_30px_oklch(0.55_0.18_300_/_0.5)]"
              >
                Join early: post your first request
              </button>
            </div>
          </div>

          <div className="grid gap-5">
            {[
              {
                u: "MB",
                name: "Marcus B.",
                quote:
                  "There's a slow leak under my kitchen sink. I need someone reliable who can fix it properly.",
                time: "Posted 2h ago",
                offers: "3 offers",
                provider: {
                  initials: "AW",
                  name: "Ade Works",
                  badge: "Certified · Verified",
                  offer:
                    "We handle this type of repair regularly. I can come to you, assess on the spot, and have it sorted in one visit. Escrow available if you prefer protected payment.",
                },
              },
              {
                u: "PS",
                name: "Priya S.",
                quote:
                  "Looking for someone who can make 50 custom cupcakes for a Saturday celebration. Delivery would be a bonus.",
                time: "Posted 4h ago",
                offers: "8 offers",
                provider: {
                  initials: "SC",
                  name: "Sweet Craft Bakery",
                  badge: "Food · Catering",
                  offer:
                    "Event orders are our speciality. We'll box everything beautifully and coordinate delivery so it arrives ready to serve. Let us know the occasion and we'll take care of the rest.",
                },
              },
              {
                u: "JO",
                name: "James O.",
                quote:
                  "I need a MacBook Pro battery replacement done by someone who actually knows Apple hardware.",
                time: "Posted 1h ago",
                offers: "5 offers",
                provider: {
                  initials: "TF",
                  name: "TechFix",
                  badge: "Electronics · Repairs",
                  offer:
                    "Apple hardware is all we do. We use quality replacement parts, work is backed by a warranty, and turnaround is fast. Happy to show you our past work before you decide.",
                },
              },
            ].map((req, idx) => {
              const cardDelays = ["0.4s", "0.55s", "0.7s"];
              return (
                <div
                  key={req.quote}
                  onClick={() => toggleCardCollapse(idx)}
                  className="group rounded-[3rem] border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/10 lg:p-8 reveal cursor-pointer"
                  style={{ transitionDelay: cardDelays[idx] }}
                >
                  <div className="flex items-start gap-6">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[2rem] bg-gradient-to-br from-primary to-primary-glow font-display text-3xl text-white shadow-inner">
                      {req.u[0]}
                    </div>
                    <div className="flex-1">
                      <div className="mb-3 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-xl font-bold text-white/90">
                            {req.name}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-white/50">
                            <Clock className="h-3.5 w-3.5" /> {req.time}
                          </span>
                        </div>
                        <span className="rounded-full border border-primary/30 bg-primary/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-soft">
                          {req.offers}
                        </span>
                      </div>
                      <p className="text-2xl font-display leading-tight text-white lg:text-3xl">
                        &quot;{req.quote}&quot;
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 border-t border-white/10" />

                  <div
                    className={`rounded-2xl bg-white/8 reveal-hover-content ${collapsedCards[idx] ? "is-collapsed" : ""}`}
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-glow text-xs font-bold text-white">
                        {req.provider.initials}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-white">
                          {req.provider.name}
                        </span>
                        <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/70">
                          {req.provider.badge}
                        </span>
                      </div>
                    </div>

                    <p className="mb-3 text-sm leading-relaxed text-white/80">
                      {req.provider.offer}
                    </p>
                    <p
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsEarlyAccessOpen(true);
                      }}
                      className="flex items-center gap-2 text-sm font-bold text-primary-soft opacity-90 cursor-pointer"
                    >
                      View offer <ArrowRight className="h-4 w-4" />
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="sellers"
        className="relative overflow-hidden bg-[#FDFCFB] py-24 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl items-start gap-20 px-6 lg:grid-cols-2 lg:px-10">
          <div className="relative order-2 lg:order-1 reveal-left">
            <div className="absolute inset-0 rounded-full bg-primary/10 blur-[120px]" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] border-8 border-white shadow-elevated lg:aspect-square">
              <img
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=80"
                alt="Independent provider preview"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <div className="mb-3 text-4xl font-display lg:text-5xl">
                  Your shop, before the rush
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-bold uppercase tracking-widest opacity-90 backdrop-blur-md">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  Provineers: providers on Provinear
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 reveal-right" style={{ transitionDelay: "0.1s" }}>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              For providers
            </span>
            <h2 className="mt-4 mb-8 font-display text-2xl leading-snug text-ink md:text-3xl lg:text-4xl max-w-xl">
  Everything a provider needs to show up, connect,{" "}
  <span className="text-primary italic font-normal">
    and grow.
  </span>
</h2>
            <p className="mb-10 text-xl leading-relaxed text-muted-foreground">
              Provinear gives providers a real digital presence: not just a
              listing, but a storefront, a direct line to customers, tools to
              manage orders, and the ability to join marketplaces that put you
              in front of the right people.
            </p>
            <ul className="mb-12 grid gap-5">
              {[
                "Build your storefront and list your products or services",
                "Join marketplaces, curated by location or by what you offer",
                "Manage orders, communicate with customers, and grow your reputation",
                "Choose optional escrow to earn the Provinear trust badge",
              ].map((point, idx) => (
                <li
                  key={point}
                  className="flex items-center gap-4 rounded-2xl border border-border/50 bg-white p-4 text-lg font-bold text-ink shadow-sm reveal"
                  style={{ transitionDelay: `${(idx + 1) * 0.05}s` }}
                >
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-primary" />
                  {point}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => openEarlyAccess("sell")}
              className="inline-flex h-16 items-center rounded-full bg-ink px-10 text-lg font-bold text-white shadow-elevated transition-all hover:bg-primary"
            >
              Join as a provider
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-ink p-12 text-center text-white shadow-[0_40px_100px_-20px_oklch(0.28_0.09_295_/_0.4)] lg:rounded-[4rem] lg:p-24">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
          <div className="absolute top-0 right-0 h-[800px] w-[800px] bg-[radial-gradient(circle_at_top_right,var(--primary)_0%,transparent_60%)] opacity-50" />
          <div className="absolute bottom-0 left-0 h-[600px] w-[600px] bg-[radial-gradient(circle_at_bottom_left,var(--primary-glow)_0%,transparent_60%)] opacity-40" />

          <div className="relative z-10">
            <h2 className="mb-4 font-display text-4xl leading-tight md:text-5xl lg:text-6xl reveal-fade">
              Commerce is becoming more connected <br className="hidden md:inline" /> and more discoverable.
            </h2>
            <p
              className="mx-auto mb-8 max-w-2xl text-lg font-medium text-primary-soft md:text-xl lg:text-2xl reveal-fade"
              style={{ transitionDelay: "0.1s" }}
            >
              Be part of how it starts.
            </p>
            <p
              className="mx-auto mb-14 max-w-2xl text-base leading-relaxed text-white/70 lg:text-lg reveal"
              style={{ transitionDelay: "0.2s" }}
            >
              Provinear is being built to make commerce more connected, more
              discoverable, and more human. Join early, as a customer, a
              provider, or both.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row reveal" style={{ transitionDelay: "0.28s" }}>
              <button
                type="button"
                onClick={() => openEarlyAccess("discover")}
                className="inline-flex h-16 items-center rounded-full bg-white px-10 text-lg font-bold text-ink shadow-elevated transition-all hover:scale-105"
              >
                Join early access
              </button>
              <button
                type="button"
                onClick={() => openEarlyAccess("sell")}
                className="inline-flex h-16 items-center rounded-full border-2 border-white/30 px-10 text-lg font-bold text-white transition-all hover:border-white/60 hover:bg-white/10"
              >
                Join as a provider
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
