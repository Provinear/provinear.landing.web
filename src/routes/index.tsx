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

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Provinear | Find better local options." },
      {
        name: "description",
        content:
          "Provinear is a simpler way to find local providers, products, and services. Join early as a customer or provider.",
      },
    ],
  }),
});

function Index() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isEarlyAccessOpen, setIsEarlyAccessOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#FDFCFB] font-sans text-foreground selection:bg-primary/20">
      <Nav onJoinClick={() => setIsEarlyAccessOpen(true)} />
      <EarlyAccessModal
        open={isEarlyAccessOpen}
        onOpenChange={setIsEarlyAccessOpen}
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
              Early access
            </div>

            <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-ink animate-in fade-in slide-in-from-bottom-6 duration-1000 md:text-7xl lg:text-[5rem]">
              Find good things nearby, <br />
              <span className="text-primary italic">
                without the usual stress.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground animate-in fade-in slide-in-from-bottom-8 duration-1000 md:text-2xl">
              Provinear is a new way to find local providers, services, and
              products around you. Early access
              is now open.
            </p>

            <div className="mt-10 max-w-2xl animate-in fade-in slide-in-from-bottom-10 duration-1000">
              <div className="rounded-[2rem] border border-border/60 bg-white/92 p-5 shadow-elevated backdrop-blur-xl md:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">
                  Join early access
                </p>
                <h3 className="mt-2 font-display text-2xl leading-tight text-ink md:text-3xl">
                  Get in before launch.
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Join the waitlist as a customer or provider. We&apos;ll let
                  you know when your side opens first.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <button
                    type="button"
                    onClick={() => setIsEarlyAccessOpen(true)}
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
                    Providers can choose it and earn the trust badge
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
                    Built for your area
                  </div>
                  <div className="text-xs font-medium text-muted-foreground">
                    Find product or services closer to you
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
              t: "Made for nearby",
              d: "Provinear is built around the people, providers, products, and services close to you.",
              i: MapPin,
            },
            {
              t: "Simple and clear",
              d: "We want it to be easy to trust what you find and easy to know what to do next.",
              i: ShieldCheck,
            },
            {
              t: "Real people first",
              d: "This is about real local people helping with real needs, not just more listings on a screen.",
              i: MessageCircle,
            },
          ].map((item) => (
            <div key={item.t} className="group flex gap-5">
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
          ))}
        </div>
      </section>

      <section
        id="categories"
        className="relative overflow-hidden bg-[#FDFCFB] py-24"
      >
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <span className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                <Sparkles className="h-4 w-4" /> A first look
              </span>
              <h2 className="mb-6 font-display text-4xl leading-tight text-ink md:text-6xl">
                Things people miss today <br />
                <span className="text-primary italic">
                  should be easier to find.
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                These are the kinds of local finds Provinear is being built to
                show better, from product providers and service providers.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsEarlyAccessOpen(true)}
              className="h-14 shrink-0 rounded-full border-2 border-border bg-white px-8 font-bold transition-all hover:border-primary hover:text-primary hover:shadow-sm inline-flex items-center"
            >
              Join early access
            </button>
          </div>

          <div className="flex h-[600px] w-full flex-col gap-4 lg:flex-row">
            {[
              {
                n: "Morning Tables",
                img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
                d: "Freshly made nearby",
              },
              {
                n: "Handmade Objects",
                img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
                d: "Craft with a signature",
              },
              {
                n: "Skilled Home Help",
                img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
                d: "Useful, trusted, close",
              },
              {
                n: "Independent Style",
                img: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=800&q=80",
                d: "Made with personality",
              },
            ].map((cat, idx) => (
              <div
                key={cat.n}
                onMouseEnter={() => setActiveCategory(idx)}
                className={`group relative cursor-pointer overflow-hidden rounded-[2rem] shadow-soft transition-all duration-700 ease-in-out hover:shadow-elevated lg:rounded-[3rem] ${
                  activeCategory === idx
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
                  className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-700 ${
                    activeCategory === idx
                      ? "from-ink/90 via-ink/20 to-transparent opacity-90"
                      : "from-ink/90 via-ink/50 to-ink/20 opacity-80"
                  }`}
                />
                <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10 lg:rounded-[3rem]" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p
                    className={`mb-2 text-xs font-bold uppercase tracking-widest text-primary-soft transition-all duration-500 delay-100 ${
                      activeCategory === idx
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0 lg:hidden"
                    }`}
                  >
                    {cat.d}
                  </p>
                  <h3
                    className={`font-display leading-tight text-white transition-all duration-500 ${
                      activeCategory === idx
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
          <div className="mb-16 max-w-3xl">
      <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-primary">
        <Sparkles className="h-4 w-4" />
        Preview experience
      </span>

            <h2 className="font-display text-4xl leading-tight text-ink md:text-6xl">
              A calmer way to discover
              <br />
              <span className="text-primary italic">
          products and services nearby.
        </span>
            </h2>

            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground">
              We&apos;re designing Provinear to feel less like scrolling through
              endless listings and more like finding genuinely useful local people,
              products, and services around you.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:grid-rows-2">
            {[
              {
                n: "Freshly baked nearby",
                d: "Imagine discovering local food spots and makers without digging through clutter.",
                t: "Preview concept",
                img: "https://images.unsplash.com/photo-1585478259715-876a6a81fc08?auto=format&fit=crop&w=1200&q=80",
                cls: "lg:col-span-7 lg:row-span-2",
              },
              {
                n: "Helpful skilled services",
                d: "From repairs to tailoring, we want nearby help to feel easier to find.",
                t: "Service discovery",
                img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80",
                cls: "lg:col-span-5",
              },
              {
                n: "Independent local products",
                d: "A simpler way to come across thoughtful products made around you.",
                t: "Local providers",
                img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80",
                cls: "lg:col-span-3",
              },
              // {
              //   n: "More personal discovery",
              //   d: "Less noise. More useful local finds that actually feel relevant.",
              //   t: "What we&apos;re building",
              //   img: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?auto=format&fit=crop&w=900&q=80",
              //   cls: "lg:col-span-2",
              // },
            ].map((item) => (
                <div
                    key={item.n}
                    className={`group relative overflow-hidden rounded-[2.5rem] ${item.cls}`}
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
            ))}
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

        <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <span className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-soft">
              <Users className="h-4 w-4" /> What to expect
            </span>
            <h2 className="mt-4 mb-8 font-display text-5xl leading-tight md:text-6xl lg:text-7xl">
              Ask once. Hear back <br /> from people nearby.
            </h2>
            <p className="mb-10 max-w-lg text-xl leading-relaxed text-white/70">
              When Provinear opens, you should be able to ask for what you need
              and hear from nearby providers who can actually help.
            </p>
            <button
              type="button"
              onClick={() => setIsEarlyAccessOpen(true)}
              className="inline-flex h-14 items-center rounded-full bg-primary px-8 text-lg font-bold text-white transition-all hover:scale-105 hover:shadow-[0_0_30px_oklch(0.55_0.18_300_/_0.5)]"
            >
              Join early access
            </button>
          </div>

          <div className="grid gap-5">
            {[
              {
                u: "Maya",
                t: "Looking for a ceramic artist who can make a short run of gifts.",
                d: "Example request",
              },
              {
                u: "Jon",
                t: "Need a tailor nearby for a fast alteration before the weekend.",
                d: "Example request",
              },
              {
                u: "Lina",
                t: "Hoping to find someone local who repairs vintage film cameras.",
                d: "Example request",
              },
            ].map((req) => (
              <div
                key={req.t}
                className="group flex items-start gap-6 rounded-[3rem] border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/10 lg:p-8"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[2rem] bg-gradient-to-br from-primary to-primary-glow font-display text-3xl text-white shadow-inner">
                  {req.u[0]}
                </div>
                <div className="flex-1">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-xl font-bold text-white/90">
                        {req.u}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-white/50">
                        <Clock className="h-3.5 w-3.5" /> {req.d}
                      </span>
                    </div>
                    <span className="rounded-full border border-primary/30 bg-primary/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-soft">
                      Preview
                    </span>
                  </div>
                  <p className="mb-4 text-2xl font-display leading-tight text-white lg:text-3xl">
                    &quot;{req.t}&quot;
                  </p>
                  <p className="flex items-center gap-2 text-sm font-bold text-primary-soft opacity-90">
                    Replies will show here <ArrowRight className="h-4 w-4" />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="sellers"
        className="relative overflow-hidden bg-[#FDFCFB] py-24 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2 lg:px-10">
          <div className="relative order-2 lg:order-1">
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
                  Early provider access
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              For providers
            </span>
            <h2 className="mt-4 mb-8 font-display text-5xl leading-tight text-ink md:text-6xl lg:text-7xl">
              Let local customers find you{" "}
              <span className="text-primary italic">from the start.</span>
            </h2>
            <p className="mb-10 text-xl leading-relaxed text-muted-foreground">
              If you offer a useful product or service, Provinear should help
              more nearby customers see you early.
            </p>
            <ul className="mb-12 grid gap-5">
              {[
                "Get in before customer access opens wider",
                "Show what you do without getting lost in clutter",
                "Get updates made for providers",
                "Choose optional escrow if you want the Provinear trust badge",
                "Be part of the first group we bring in",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-4 rounded-2xl border border-border/50 bg-white p-4 text-lg font-bold text-ink shadow-sm"
                >
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-primary" />
                  {point}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => setIsEarlyAccessOpen(true)}
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
            <h2 className="mb-8 font-display text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
              Join before it <br /> opens wider.
            </h2>
            <p className="mx-auto mb-14 max-w-2xl text-xl leading-relaxed text-white/80 lg:text-2xl">
              Provinear is opening soon. Join now if you want one of the
              first invites.
            </p>
            <button
              type="button"
              onClick={() => setIsEarlyAccessOpen(true)}
              className="inline-flex h-16 items-center rounded-full bg-white px-10 text-lg font-bold text-ink shadow-elevated transition-all hover:scale-105"
            >
              Join early access
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
