import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { MapVisual } from "@/components/site/MapVisual";
import { useState } from "react";
import {
  Search,
  MapPin,
  Sparkles,
  ArrowRight,
  Star,
  ShieldCheck,
  Zap,
  Heart,
  ShoppingCart,
  CheckCircle2,
  Users,
  Clock,
  MessageCircle,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Provinear | Everything you need, right around the corner." },
      {
        name: "description",
        content:
          "Stop searching far. Start discovering near. Provinear is the easiest way to buy and sell within your neighborhood.",
      },
    ],
  }),
});

function Index() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate({ to: "/search", search: { q: searchQuery } });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FDFCFB] text-foreground overflow-x-hidden selection:bg-primary/20 font-sans">
      <Nav />

      {/* HERO SECTION: THE HOOK */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Abstract Premium Background */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[1000px] h-[1000px] bg-[radial-gradient(ellipse_at_center,var(--primary-soft)_0%,transparent_70%)] opacity-60 pointer-events-none mix-blend-multiply" />
        <div className="absolute top-40 left-0 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,oklch(0.95_0.02_70)_0%,transparent_70%)] opacity-50 pointer-events-none mix-blend-multiply" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 z-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-primary/10 px-4 py-2 text-xs font-bold text-primary mb-8 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              The neighborhood marketplace is live
            </div>

            {/* Headline < 12 words, Formula: Help [audience] achieve [outcome] without [pain point] */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5rem] leading-[1.05] text-ink tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000">
              Get exactly what you need locally, <br />
              <span className="text-primary italic">
                without the shipping wait.
              </span>
            </h1>

            <p className="mt-6 text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
              Skip the endless searching and word-of-mouth. Provinear instantly
              connects you with the best products and services hidden right in
              your area.
            </p>

            <form
              onSubmit={handleSearch}
              className="mt-10 max-w-2xl group animate-in fade-in slide-in-from-bottom-10 duration-1000"
            >
              <div className="relative flex items-center p-2 rounded-[2.5rem] bg-white border border-border/60 shadow-[0_8px_30px_oklch(0.28_0.09_295_/_0.06)] focus-within:ring-4 focus-within:ring-primary/10 transition-all">
                <div className="pl-6 pr-4 text-muted-foreground group-focus-within:text-primary transition-colors">
                  <Search className="h-6 w-6" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="What are you looking for today?"
                  className="w-full h-16 bg-transparent focus:outline-none text-xl placeholder:text-muted-foreground/60"
                />
                <button
                  type="submit"
                  className="shrink-0 px-8 h-16 rounded-[2rem] bg-primary text-primary-foreground font-bold hover:bg-ink transition-all shadow-lg active:scale-95 text-lg"
                >
                  Find it near me
                </button>
              </div>

              {/* Trust Indicators right below search */}
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-medium pl-4">
                <div className="flex -space-x-2">
                  {[
                    "https://i.pravatar.cc/100?img=1",
                    "https://i.pravatar.cc/100?img=2",
                    "https://i.pravatar.cc/100?img=3",
                    "https://i.pravatar.cc/100?img=4",
                  ].map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt="User"
                      className="w-8 h-8 rounded-full border-2 border-[#FDFCFB]"
                    />
                  ))}
                </div>
                <div className="text-muted-foreground">
                  Joined by <span className="text-ink font-bold">10,000+</span>{" "}
                  locals discovering what they need.
                </div>
              </div>
            </form>
          </div>

          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative z-10 scale-110 drop-shadow-2xl">
              <MapVisual />
            </div>
            {/* Interactive Floating Badges */}
            <div className="absolute top-10 -left-10 z-20 bg-white/80 backdrop-blur-xl border border-white rounded-3xl p-4 shadow-elevated animate-float-y">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-600">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-ink">
                    Escrow Protected
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">
                    Funds held securely
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute bottom-20 -right-8 z-20 bg-white/80 backdrop-blur-xl border border-white rounded-3xl p-4 shadow-elevated animate-float-y"
              style={{ animationDelay: "2s" }}
            >
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-ink">
                    Instant Delivery
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">
                    Within 30 minutes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMOTIONAL BENEFITS STRIP */}
      <section className="py-16 bg-white border-y border-border/40 relative z-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              t: "Always Within Reach",
              d: "Never worry about distant vendors. Find exactly what you need, right where you are.",
              i: MapPin,
            },
            {
              t: "Shop With Confidence",
              d: "Your money stays perfectly safe in Escrow until the product is securely in your hands.",
              i: ShieldCheck,
            },
            {
              t: "Real Human Connection",
              d: "Speak directly to the hands that craft your products and provide your services.",
              i: MessageCircle,
            },
          ].map((item, idx) => (
            <div key={item.t} className="flex gap-5 group">
              <div className="h-14 w-14 shrink-0 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <item.i className="h-7 w-7" />
              </div>
              <div>
                <div className="font-display text-2xl text-ink mb-2">
                  {item.t}
                </div>
                <div className="text-base text-muted-foreground leading-relaxed">
                  {item.d}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CURIOSITY INTRO & CATEGORIES */}
      <section
        id="categories"
        className="py-24 bg-[#FDFCFB] relative overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-3xl">
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs flex items-center gap-2 mb-4">
                <Sparkles className="h-4 w-4" /> Uncover The Unseen
              </span>
              <h2 className="font-display text-4xl md:text-6xl text-ink leading-tight mb-6">
                Discover local gems, <br />
                <span className="text-primary italic">
                  without word-of-mouth.
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Find exactly what you need nearby in seconds. No more asking
                around or hoping to stumble upon the right service.
              </p>
            </div>
            <button className="h-14 px-8 rounded-full border-2 border-border hover:border-primary hover:text-primary font-bold transition-all shrink-0 bg-white shadow-sm">
              Explore all categories
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                n: "The Baker's Corner",
                img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
                d: "Fresh & Warm",
              },
              {
                n: "Artisan Crafts",
                img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
                d: "Handmade Locally",
              },
              {
                n: "Home Services",
                img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
                d: "Trusted Experts",
              },
              {
                n: "Fashion & Style",
                img: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=800&q=80",
                d: "Tailored For You",
              },
            ].map((cat) => (
              <div
                key={cat.n}
                className="group cursor-pointer relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2"
              >
                <img
                  src={cat.img}
                  alt={cat.n}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-90" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem]" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-primary-soft text-xs font-bold tracking-widest uppercase mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {cat.d}
                  </p>
                  <h3 className="text-white font-display text-3xl leading-tight">
                    {cat.n}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE PULSE: NEARBY ACTIVITY (Premium Product Display) */}
      <section id="nearby" className="py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">
              Live Feed
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink mt-4 leading-tight">
              Extraordinary finds, <br /> just streets away.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                n: "Artisan Sourdough",
                p: "₦3,500",
                d: "0.8km",
                r: 4.9,
                s: "The Bread Lab",
                img: "https://images.unsplash.com/photo-1585478259715-876a6a81fc08?auto=format&fit=crop&w=600&q=80",
              },
              {
                n: "Custom Denim Jacket",
                p: "₦25,000",
                d: "1.2km",
                r: 4.8,
                s: "Thread & Ink",
                img: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?auto=format&fit=crop&w=600&q=80",
              },
              {
                n: "Organic Shea Butter",
                p: "₦4,200",
                d: "2.5km",
                r: 5.0,
                s: "Glow Nature",
                img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80",
              },
              {
                n: "Camera Lens Repair",
                p: "From ₦15k",
                d: "3.1km",
                r: 4.7,
                s: "Analog Soul",
                img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80",
              },
            ].map((prod, i) => (
              <div
                key={i}
                className="group bg-white rounded-[2rem] p-3 border border-border/40 shadow-soft hover:shadow-elevated transition-all duration-500 hover:border-primary/20"
              >
                <div className="relative aspect-square rounded-[1.5rem] overflow-hidden mb-5">
                  <img
                    src={prod.img}
                    alt={prod.n}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 h-10 w-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-ink hover:text-primary transition-colors shadow-sm cursor-pointer hover:scale-110 active:scale-95">
                    <Heart className="h-5 w-5" />
                  </div>
                  <div className="absolute bottom-3 left-3 bg-ink/80 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5">
                    <MapPin className="h-3 w-3" /> {prod.d}
                  </div>
                </div>

                <div className="px-3 pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-extrabold truncate pr-2">
                      {prod.s}
                    </span>
                    <div className="flex items-center gap-1 text-xs font-bold text-ink shrink-0 bg-warm/50 px-2 py-0.5 rounded-full">
                      <Star className="h-3 w-3 fill-primary text-primary" />
                      {prod.r}
                    </div>
                  </div>
                  <h3 className="text-xl font-display text-ink leading-tight mb-4 group-hover:text-primary transition-colors line-clamp-1">
                    {prod.n}
                  </h3>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-2xl font-display text-ink">
                      {prod.p}
                    </span>
                    <button className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all active:scale-95">
                      <ShoppingCart className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY BOARD: THE SOUL */}
      <section
        id="board"
        className="py-24 bg-ink text-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,var(--primary)_0%,transparent_70%)] opacity-30 mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,var(--primary-glow)_0%,transparent_70%)] opacity-20 mix-blend-screen pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-primary-soft font-bold uppercase tracking-[0.2em] text-xs flex items-center gap-2 mb-4">
              <Users className="h-4 w-4" /> User Request Board
            </span>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-tight mt-4 mb-8">
              Ask, and you <br /> shall receive.
            </h2>
            <p className="text-xl text-white/70 leading-relaxed mb-10 max-w-lg">
              Can't find it nearby? Just ask. Local pros are ready to help. Post
              a request and watch the offers roll in.
            </p>
            <div className="flex flex-wrap gap-5">
              <button className="h-14 px-8 rounded-full bg-primary text-white font-bold text-lg hover:shadow-[0_0_30px_oklch(0.55_0.18_300_/_0.5)] hover:scale-105 transition-all">
                Post a Request
              </button>
              <button className="h-14 px-8 rounded-full border border-white/20 hover:bg-white/10 font-bold text-lg transition-all">
                Browse board
              </button>
            </div>
          </div>

          <div className="grid gap-5">
            {[
              {
                u: "Tunde",
                t: "Need a plumber for a leak in Bodija",
                d: "Just now",
                o: "12 offers",
              },
              {
                u: "Sarah",
                t: "Looking for 50 custom cupcakes for Saturday",
                d: "2h ago",
                o: "8 offers",
              },
              {
                u: "Ibrahim",
                t: "Can someone fix a MacBook battery nearby?",
                d: "5h ago",
                o: "15 offers",
              },
            ].map((req, i) => (
              <div
                key={i}
                className="group bg-white/5 border border-white/10 backdrop-blur-md p-6 lg:p-8 rounded-[2rem] flex items-start gap-6 transition-all hover:bg-white/10 hover:border-white/20 hover:translate-x-4 duration-500 shadow-xl"
              >
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-white font-display text-2xl shrink-0 shadow-inner">
                  {req.u[0]}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-lg text-white/90">
                        {req.u}
                      </span>
                      <span className="text-[10px] text-white/50 flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {req.d}
                      </span>
                    </div>
                    <span className="text-[10px] text-primary-soft uppercase font-bold tracking-widest bg-primary/20 border border-primary/30 px-3 py-1 rounded-full">
                      {req.o}
                    </span>
                  </div>
                  <p className="text-xl lg:text-2xl text-white font-display leading-tight">
                    "{req.t}"
                  </p>
                  <button className="mt-5 flex items-center gap-2 text-sm font-bold text-primary-soft group-hover:gap-3 transition-all opacity-80 group-hover:opacity-100">
                    Make an offer <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SELLERS: THE OPPORTUNITY */}
      <section
        id="sellers"
        className="py-24 lg:py-32 bg-[#FDFCFB] overflow-hidden relative"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full" />
            <div className="relative aspect-[4/5] lg:aspect-square rounded-[3rem] overflow-hidden shadow-elevated border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=80"
                alt="Seller"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <div className="text-4xl lg:text-5xl font-display mb-3">
                  Sarah's Studio
                </div>
                <div className="flex items-center gap-2 text-sm font-bold opacity-90 uppercase tracking-widest bg-white/20 backdrop-blur-md px-4 py-2 rounded-full inline-flex">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  Top Rated Neighborhood Maker
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">
              Join the ecosystem
            </span>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-tight mt-4 mb-8 text-ink">
              Turn your local craft into a{" "}
              <span className="text-primary italic">thriving business.</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
              Join thousands of providers being discovered every day. Create
              your beautiful digital storefront in minutes and let customers
              find you effortlessly.
            </p>
            <ul className="grid gap-5 mb-12">
              {[
                "Zero technical skills required to start",
                "Instant reach to your immediate neighborhood",
                "Built-in secure escrow payments for peace of mind",
                "Earn your Purchase & Fulfillment Scores",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-4 text-ink font-bold text-lg bg-white p-4 rounded-2xl shadow-sm border border-border/50"
                >
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
            <button className="h-16 px-10 rounded-full bg-ink text-white font-bold text-lg hover:bg-primary transition-all shadow-elevated active:scale-95">
              Start selling today
            </button>
          </div>
        </div>
      </section>

      {/* FINAL CTA: THE CONVERSION */}
      <section className="py-24 px-6 lg:px-10 bg-white">
        <div className="mx-auto max-w-7xl rounded-[3rem] lg:rounded-[4rem] bg-ink p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-[0_40px_100px_-20px_oklch(0.28_0.09_295_/_0.4)]">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_top_right,var(--primary)_0%,transparent_60%)] opacity-50" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_bottom_left,var(--primary-glow)_0%,transparent_60%)] opacity-40" />

          <div className="relative z-10">
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8">
              Commerce, <br /> finally connected.
            </h2>
            <p className="text-xl lg:text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-14">
              Join the movement of localized commerce. Find what you need,
              support who you love, and grow where you live.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <button
                onClick={() =>
                  navigate({ to: "/search", search: { q: searchQuery } })
                }
                className="h-16 px-10 rounded-full bg-white text-ink font-bold text-lg shadow-elevated hover:scale-105 active:scale-95 transition-all"
              >
                Start exploring
              </button>
              <button className="h-16 px-10 rounded-full border-2 border-white/20 text-white font-bold text-lg hover:bg-white/10 active:scale-95 transition-all">
                Download the app
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
