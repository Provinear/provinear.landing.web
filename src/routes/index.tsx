import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { MapVisual } from "@/components/site/MapVisual";
import { Wordmark } from "@/components/site/Wordmark";
import { BrandPin } from "@/components/site/BrandPin";
import {
  Compass,
  MapPin,
  Store,
  PackageSearch,
  Sparkles,
  ArrowUpRight,
  Home as HomeIcon,
  Wrench,
  Shirt,
  UtensilsCrossed,
  Cpu,
  HeartPulse,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Provinear. Commerce, closer to you." },
      {
        name: "description",
        content:
          "Provinear is a localized commerce ecosystem connecting people to the providers, products and services around them. A new layer of discovery for everyday commerce.",
      },
      { property: "og:title", content: "Provinear. Commerce, closer to you." },
      {
        property: "og:description",
        content:
          "A localized commerce ecosystem. Discover the providers, products and services around you.",
      },
    ],
  }),
});

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface-elevated/70 backdrop-blur px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
      <span className="h-1 w-1 rounded-full bg-primary" />
      {children}
    </span>
  );
}

function SectionHeader({
  eyebrow,
  title,
  lede,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`max-w-2xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-display mt-5 text-4xl md:text-5xl leading-[1.05] text-ink">
        {title}
      </h2>
      {lede && (
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
          {lede}
        </p>
      )}
    </div>
  );
}

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />

      {/* HERO */}
      <section className="relative pt-36 pb-24 lg:pt-44 lg:pb-32">
        <div className="absolute inset-0 bg-hero pointer-events-none" />
        <div className="absolute inset-0 bg-grid pointer-events-none mask-fade-edges opacity-70" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-7">
            <Eyebrow>A new layer for local commerce</Eyebrow>
            <h1 className="font-display mt-6 text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-ink">
              Commerce,{" "}
              <span className="text-gradient-primary">closer</span>
              <br className="hidden sm:block" /> to you.
            </h1>
            <p className="mt-7 max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed">
              Provinear is a living network of nearby commerce, connecting
              people to the providers, products and services around them.
              Discoverable, local, human.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft">
                <Sparkles className="h-4 w-4" /> Launching soon
              </span>
              <a
                href="#vision"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                Read the vision <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <dl className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
              {[
                ["Local", "Discovery by proximity"],
                ["Open", "For customers & providers"],
                ["Connected", "An ecosystem of tools"],
              ].map(([k, v]) => (
                <div key={k} className="border-l border-border/70 pl-4">
                  <dt className="text-sm font-medium text-foreground">{k}</dt>
                  <dd className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="animate-drift">
              <MapVisual />
            </div>

            {/* Brand pin overlay on map */}
            <BrandPin
              size={56}
              float
              glow
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_8px_24px_oklch(0.28_0.09_295_/_0.35)]"
            />

            {/* floating chips */}
            <div className="absolute -left-2 top-10 hidden md:flex items-center gap-2 rounded-2xl bg-surface-elevated/90 backdrop-blur border border-border/70 shadow-soft px-3.5 py-2 text-xs">
              <BrandPin size={14} />
              <span className="text-foreground/80">Within 1.2 km</span>
            </div>
            <div className="absolute right-0 bottom-12 hidden md:flex items-center gap-2 rounded-2xl bg-surface-elevated/90 backdrop-blur border border-border/70 shadow-soft px-3.5 py-2 text-xs">
              <Store className="h-3.5 w-3.5 text-primary" />
              <span className="text-foreground/80">12 providers nearby</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="relative py-24 lg:py-32 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="The quiet problem"
              title={
                <>
                  Great commerce exists{" "}
                  <span className="text-gradient-primary">around us</span>,
                  but it stays invisible.
                </>
              }
            />
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {[
              {
                t: "Hard to find nearby",
                d: "We search far for what already exists a few streets away.",
              },
              {
                t: "Talented businesses are unseen",
                d: "Skilled providers lack a place to be discovered locally.",
              },
              {
                t: "Word-of-mouth is fragmented",
                d: "Trust travels slowly across social channels and chats.",
              },
              {
                t: "Distance breaks experience",
                d: "Commerce gets harder when convenience disappears.",
              },
            ].map((p) => (
              <div
                key={p.t}
                className="rounded-3xl bg-surface-elevated border border-border/70 p-6 shadow-soft"
              >
                <div className="h-9 w-9 rounded-2xl bg-primary-soft flex items-center justify-center text-primary">
                  <PackageSearch className="h-4 w-4" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-foreground">
                  {p.t}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {p.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="relative py-24 lg:py-32 bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeader
            eyebrow="How it works"
            title={
              <>
                A calm flow from <em className="not-italic text-gradient-primary">need</em>{" "}
                to nearby.
              </>
            }
            lede="Provinear connects everyday intent with the providers closest to it. Four simple movements, woven together."
            align="center"
          />

          <ol className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { t: "Explore", d: "Step into marketplaces shaped by where you are.", i: Compass },
              { t: "Discover", d: "See providers, products and services around you.", i: MapPin },
              { t: "Connect", d: "Reach out, compare and choose with clarity.", i: Sparkles },
              { t: "Transact", d: "Buy, sell or offer, in the rhythm of your day.", i: Store },
            ].map((s, i) => {
              const Icon = s.i;
              return (
                <li
                  key={s.t}
                  className="relative rounded-3xl bg-surface-elevated border border-border/70 p-7 shadow-soft"
                >
                  <span className="absolute -top-3 left-7 inline-flex h-6 items-center rounded-full bg-gradient-primary px-2.5 text-[11px] font-medium text-primary-foreground">
                    0{i + 1}
                  </span>
                  <Icon className="h-5 w-5 text-primary" />
                  <h3 className="mt-5 font-display text-2xl text-ink">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {s.d}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* MARKETPLACES */}
      <section id="marketplaces" className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeader
            eyebrow="Two ways to discover"
            title={
              <>
                Marketplaces, organised by{" "}
                <span className="text-gradient-primary">place</span> and{" "}
                <span className="text-gradient-primary">purpose</span>.
              </>
            }
            lede="Provinear hosts two complementary ways for commerce to surface; one shaped by geography, the other by what people offer."
          />

          <div className="mt-16 grid lg:grid-cols-2 gap-6">
            {/* GEO CARD */}
            <article className="group relative overflow-hidden rounded-[2rem] bg-surface-elevated border border-border/70 p-8 lg:p-10 shadow-soft transition-all duration-500 hover:shadow-elevated hover:-translate-y-1">
              <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-br from-primary/15 to-transparent blur-3xl pointer-events-none" />
              <div className="relative flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  Geo-based
                </span>
                <span className="font-display text-sm text-muted-foreground/80">01</span>
              </div>

              <h3 className="font-display mt-5 text-3xl lg:text-[2.4rem] text-ink leading-[1.05] tracking-tight">
                Providers grouped by{" "}
                <span className="italic text-gradient-primary">proximity</span>.
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
                Buyers see who's closest first. Convenience becomes the default.
                Local economies become more legible to the people inside them.
              </p>

              {/* Refined map canvas */}
              <div className="mt-9 relative h-64 rounded-2xl border border-border/60 bg-gradient-to-br from-surface to-warm/40 overflow-hidden">
                {/* concentric proximity rings */}
                <svg viewBox="0 0 400 256" className="absolute inset-0 w-full h-full" aria-hidden>
                  <defs>
                    <radialGradient id="geo-fade" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="oklch(0.55 0.18 300)" stopOpacity="0.18" />
                      <stop offset="100%" stopColor="oklch(0.55 0.18 300)" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <circle cx="200" cy="128" r="110" fill="url(#geo-fade)" />
                  {[40, 70, 100].map((r) => (
                    <circle
                      key={r}
                      cx="200" cy="128" r={r}
                      fill="none"
                      stroke="oklch(0.55 0.18 300)"
                      strokeOpacity="0.18"
                      strokeWidth="1"
                      strokeDasharray={r === 100 ? "2 6" : undefined}
                    />
                  ))}
                  {/* connection lines from center */}
                  <g stroke="oklch(0.55 0.18 300)" strokeOpacity="0.25" strokeWidth="1" className="animate-dash-flow">
                    <line x1="200" y1="128" x2="92" y2="70" />
                    <line x1="200" y1="128" x2="320" y2="80" />
                    <line x1="200" y1="128" x2="305" y2="190" />
                    <line x1="200" y1="128" x2="120" y2="200" />
                  </g>
                </svg>

                {/* provider pins (Provinear logo) */}
                {[
                  [23, 27, 0, 18, -10],
                  [80, 31, 0.6, 16, 8],
                  [76, 74, 1.2, 20, -6],
                  [30, 78, 0.3, 17, 12],
                  [50, 18, 0.9, 15, -4],
                  [55, 82, 1.5, 19, 6],
                ].map(([x, y, delay, size, rot], i) => (
                  <span
                    key={i}
                    className="absolute -translate-x-1/2 -translate-y-full"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      animation: `float-y 5s ease-in-out ${delay}s infinite`,
                    }}
                  >
                    {/* shadow under pin */}
                    <span
                      className="absolute left-1/2 -translate-x-1/2 rounded-full bg-primary/25 blur-[3px]"
                      style={{
                        width: Number(size) * 0.8,
                        height: 4,
                        top: `calc(100% + 2px)`,
                      }}
                    />
                    <BrandPin size={Number(size)} rotate={Number(rot)} />
                  </span>
                ))}

                {/* center "you" pin (large, glowing) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-primary/30 animate-ping-slow" />
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-primary/20 animate-ping-slow [animation-delay:1.4s]" />
                  <BrandPin size={40} glow className="relative drop-shadow-[0_8px_18px_oklch(0.28_0.09_295_/_0.5)]" />
                </div>

                {/* floating chip */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-surface-elevated/90 backdrop-blur border border-border/70 px-2.5 py-1 text-[10px] font-medium text-foreground/80 shadow-soft">
                  <BrandPin size={12} />
                  6 within 2 km
                </div>

                {/* corner stat chip */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-2.5 py-1 text-[10px] font-medium text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-soft-pulse" />
                  Live
                </div>
              </div>
            </article>

            {/* CATEGORY CARD */}
            <article className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary to-[oklch(0.22_0.08_295)] text-primary-foreground p-8 lg:p-10 shadow-elevated transition-all duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_85%_15%,oklch(0.7_0.22_315/0.55),transparent_55%),radial-gradient(circle_at_10%_90%,oklch(0.5_0.2_280/0.4),transparent_55%)] pointer-events-none" />
              <div className="absolute inset-0 bg-dots opacity-[0.07] pointer-events-none" />

              <div className="relative flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-primary-foreground/70">
                  <span className="h-1 w-1 rounded-full bg-primary-foreground/80" />
                  Product / Service-based
                </span>
                <span className="font-display text-sm text-primary-foreground/60">02</span>
              </div>

              <h3 className="font-display mt-5 text-3xl lg:text-[2.4rem] leading-[1.05] tracking-tight">
                Providers grouped by{" "}
                <span className="italic">what they offer</span>.
              </h3>
              <p className="mt-4 text-primary-foreground/75 leading-relaxed max-w-md">
                Browse curated categories. Compare options side by side. Make
                confident choices without leaving your context.
              </p>

              {/* Categories with icons */}
              <div className="relative mt-9 grid grid-cols-3 gap-2.5">
                {[
                  { c: "Home", n: "128", i: HomeIcon },
                  { c: "Repair", n: "64", i: Wrench },
                  { c: "Fashion", n: "212", i: Shirt },
                  { c: "Food", n: "340", i: UtensilsCrossed },
                  { c: "Tech", n: "97", i: Cpu },
                  { c: "Wellness", n: "75", i: HeartPulse },
                ].map(({ c, n, i: Icon }) => (
                  <div
                    key={c}
                    className="group/cat relative overflow-hidden rounded-xl border border-primary-foreground/10 bg-primary-foreground/[0.06] backdrop-blur-sm p-3.5 transition-all duration-300 hover:bg-primary-foreground/[0.14] hover:border-primary-foreground/30 hover:-translate-y-0.5"
                  >
                    <div className="flex items-start justify-between">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary-foreground/10 border border-primary-foreground/15 text-primary-foreground/90 transition-colors group-hover/cat:bg-primary-foreground/20">
                        <Icon className="h-4 w-4" strokeWidth={1.75} />
                      </span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-primary-foreground/40 transition-all group-hover/cat:text-primary-foreground group-hover/cat:translate-x-0.5 group-hover/cat:-translate-y-0.5" />
                    </div>
                    <div className="mt-3">
                      <span className="block text-sm font-medium">{c}</span>
                      <span className="mt-0.5 block text-[10px] uppercase tracking-wider text-primary-foreground/45">
                        {n} providers
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* decorative pin watermark */}
              <BrandPin
                size={140}
                rotate={18}
                className="absolute -right-6 -bottom-6 opacity-[0.12] pointer-events-none"
              />

              {/* live indicator */}
              <div className="relative mt-6 flex items-center gap-2 text-[11px] text-primary-foreground/60">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-foreground/70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary-foreground/90" />
                </span>
                Curated continuously
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* PROVIDERS */}
      <section id="providers" className="relative py-24 lg:py-32 bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <SectionHeader
              eyebrow="For providers"
              title={
                <>
                  Visibility for the people who{" "}
                  <span className="text-gradient-primary">make commerce real</span>.
                </>
              }
              lede="From independent makers to established storefronts, Provinear is built so good work becomes easier to find."
            />
          </div>

          <ul className="lg:col-span-7 space-y-3">
            {[
              ["Storefronts", "A clean digital home for your business."],
              ["Reach", "Be seen by the people closest to you, first."],
              ["Payments & escrow", "Trust built into every exchange."],
              ["Logistics", "Move goods through nearby partners."],
              ["Customer tools", "Manage relationships with calm clarity."],
              ["Marketing", "Reach further when you're ready to grow."],
            ].map(([t, d], i) => (
              <li
                key={t}
                className="group flex items-start gap-6 rounded-2xl border border-border/60 bg-surface-elevated p-6 hover:shadow-soft transition-shadow"
              >
                <span className="font-display text-2xl text-muted-foreground/70 w-10 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-medium text-foreground">{t}</h3>
                  <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                    {d}
                  </p>
                </div>
                <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground/60 group-hover:text-primary transition-colors" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CASUAL SELLING */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-border/70 bg-surface-elevated p-10 lg:p-16 shadow-soft">
            <div className="absolute inset-0 bg-mesh opacity-60 pointer-events-none" />
            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Eyebrow>Anyone can sell</Eyebrow>
                <h2 className="font-display mt-5 text-4xl md:text-5xl text-ink leading-[1.05]">
                  An old laptop. A bicycle. Something you no longer need.
                </h2>
                <p className="mt-5 text-muted-foreground text-lg leading-relaxed max-w-lg">
                  List items in moments. Choose how far your listing travels.
                  Reach buyers nearby, without the noise of distant marketplaces.
                </p>
              </div>

              <div className="relative">
                {/* decorative tilted pins */}
                <BrandPin size={44} rotate={-18} className="absolute -top-6 -left-2 opacity-90" float />
                <BrandPin size={26} rotate={12} className="absolute -bottom-4 left-12 opacity-70" />

                <div className="relative rounded-2xl border border-border/60 bg-background p-5 shadow-soft max-w-sm ml-auto">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>New listing</span>
                    <span className="inline-flex items-center gap-1.5">
                      <BrandPin size={12} /> 3 km radius
                    </span>
                  </div>
                  <div className="mt-4 aspect-[4/3] rounded-xl bg-gradient-primary opacity-90 relative overflow-hidden">
                    <BrandPin size={40} className="absolute right-3 bottom-3 opacity-80" />
                  </div>
                  <div className="mt-4">
                    <h4 className="font-medium text-foreground">MacBook Pro · 2021</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Lightly used · Available this week
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-display text-lg text-ink">$1,200</span>
                    <span className="text-[11px] uppercase tracking-wider text-primary">
                      Visible nearby
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section id="vision" className="relative py-28 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-hero opacity-60 pointer-events-none" />
        {/* decorative scattered pins */}
        <BrandPin size={32} rotate={-14} className="absolute left-[8%] top-24 opacity-40 hidden md:block" float />
        <BrandPin size={22} rotate={22} className="absolute right-[12%] top-40 opacity-30 hidden md:block" />
        <BrandPin size={28} rotate={-8} className="absolute left-[18%] bottom-28 opacity-25 hidden md:block" float />
        <BrandPin size={20} rotate={10} className="absolute right-[20%] bottom-20 opacity-35 hidden md:block" />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <div className="flex justify-center">
            <Wordmark size="lg" />
          </div>
          <div className="mt-6">
            <Eyebrow>The vision</Eyebrow>
          </div>
          <h2 className="font-display mt-6 text-4xl md:text-6xl leading-[1.04] text-ink">
            Infrastructure for{" "}
            <span className="text-gradient-primary">localized</span> commerce.
          </h2>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            <span className="font-display italic text-ink">Provinear</span> is an
            ecosystem in motion. Storefronts, marketplaces, payments, logistics
            and tools, woven so providers can reach further and communities can
            discover what is already around them.
          </p>

          <div className="mt-14 grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
            {[
              "Discoverable",
              "Connected",
              "Local",
            ].map((w) => (
              <div
                key={w}
                className="rounded-2xl border border-border/60 bg-surface-elevated/80 backdrop-blur px-5 py-6 font-display text-2xl text-ink"
              >
                {w}.
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="relative py-24 lg:py-28 border-t border-border/60">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
          <p className="font-display text-3xl md:text-5xl text-ink leading-[1.1]">
            Commerce is becoming more connected,
            <br className="hidden md:block" /> more local, and more discoverable.
          </p>
          <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-border/70 bg-surface-elevated/70 backdrop-blur px-5 py-2.5 text-sm text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Provinear · Coming soon
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
