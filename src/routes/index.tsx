import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  MapPin,
  MessageCircle,
  Search,
  ShieldCheck,
  Sparkles,
  Store,
  Users,
} from "lucide-react";
import { Footer } from "@/components/site/Footer";
import { Nav } from "@/components/site/Nav";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Provinear | Find nearby products and services faster." },
      {
        name: "description",
        content:
          "Provinear helps you discover trusted products and service providers around you, or post a request when you cannot find what you need nearby.",
      },
    ],
  }),
});

const useCases = [
  {
    title: "Repairs and home help",
    description:
      "Find plumbers, electricians, technicians, and cleaners close to you without asking around.",
  },
  {
    title: "Food and groceries",
    description:
      "Discover nearby bakers, stores, and food vendors for quick daily needs.",
  },
  {
    title: "Fashion and beauty",
    description:
      "Browse local tailors, stylists, makeup artists, and beauty suppliers in your area.",
  },
  {
    title: "Special requests",
    description:
      "Need something uncommon? Post a request and let nearby vendors respond.",
  },
];

const nearbyResults = [
  {
    title: "Emergency plumber",
    vendor: "FlowFix Services",
    distance: "0.8 km away",
    eta: "Replies in 8 mins",
    badge: "Top rated",
  },
  {
    title: "Birthday cake for 20",
    vendor: "Bodija Oven Studio",
    distance: "1.4 km away",
    eta: "Pickup today",
    badge: "Popular nearby",
  },
  {
    title: "Phone screen repair",
    vendor: "Swift Gadget Care",
    distance: "2.1 km away",
    eta: "Same-day service",
    badge: "Verified vendor",
  },
  {
    title: "Fresh groceries bundle",
    vendor: "Corner Market Hub",
    distance: "1.1 km away",
    eta: "Ready in 25 mins",
    badge: "Fast moving",
  },
];

const requestBoard = [
  {
    name: "Tunde",
    request: "Need a welder for a gate repair in Akobo this evening.",
    responses: "9 offers",
    time: "11 minutes ago",
  },
  {
    name: "Amara",
    request: "Looking for 30 souvenir packs for a church event this weekend.",
    responses: "14 offers",
    time: "32 minutes ago",
  },
  {
    name: "Sade",
    request:
      "Who can supply a small generator around Mokola by tomorrow morning?",
    responses: "6 offers",
    time: "1 hour ago",
  },
];

const sellerPoints = [
  "Set up your shop profile and contact details quickly.",
  "Get discovered by buyers searching within your area.",
  "Respond to direct requests when buyers cannot find what they need.",
  "Build trust with ratings, escrow, and visible response history.",
];

function Index() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [waitlistJoined, setWaitlistJoined] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({ to: "/search", search: { q: searchQuery.trim() } });
  };

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistEmail.trim()) return;
    setWaitlistJoined(true);
    setWaitlistEmail("");
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f8f4ec] text-foreground selection:bg-[#f28b34]/20">
      <Nav />

      <main>
        <section className="relative overflow-hidden border-b border-black/5 bg-[#f8f4ec] pt-28 pb-18 lg:pt-36 lg:pb-24">
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(11,17,32,0.04),transparent)]"
          />
          <div
            aria-hidden
            className="absolute top-10 right-[-8rem] h-72 w-72 rounded-full bg-[#f28b34]/12 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute bottom-0 left-[-6rem] h-64 w-64 rounded-full bg-[#1f7a5a]/10 blur-3xl"
          />

          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#0b1120]/10 bg-white px-4 py-2 text-xs font-semibold text-[#0b1120] shadow-[0_10px_30px_rgba(11,17,32,0.06)]">
                <Sparkles className="h-3.5 w-3.5 text-[#f28b34]" />
                Local search, vendor trust, and requests in one place
              </div>

              <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.04em] text-[#0b1120] md:text-7xl lg:text-[5.25rem]">
                Find what you need nearby without chasing referrals.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#445065] md:text-xl">
                Provinear helps you discover trusted products and service
                providers around you, compare options quickly, and post a
                request when nothing close shows up.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#waitlist"
                  className="inline-flex h-14 items-center justify-center rounded-full bg-[#0b1120] px-8 text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  Join waitlist
                </a>
                <button
                  type="button"
                  onClick={() => navigate({ to: "/search", search: { q: "" } })}
                  className="inline-flex h-14 items-center justify-center rounded-full border border-[#0b1120]/12 bg-white px-8 text-base font-semibold text-[#0b1120] shadow-[0_10px_30px_rgba(11,17,32,0.06)] transition-transform hover:-translate-y-0.5"
                >
                  Explore nearby
                </button>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  "Search by need and location",
                  "See trusted nearby vendors",
                  "Post requests when supply is missing",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#0b1120]/8 bg-white px-4 py-4 text-sm font-medium text-[#445065] shadow-[0_10px_30px_rgba(11,17,32,0.04)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-[#0b1120]/8 bg-white p-4 shadow-[0_24px_80px_rgba(11,17,32,0.1)] lg:p-6">
                <div className="rounded-[1.5rem] bg-[#0b1120] p-5 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/55">
                        Nearby right now
                      </p>
                      <h2 className="mt-2 text-2xl font-bold">
                        Search your area faster
                      </h2>
                    </div>
                    <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
                      Ibadan
                    </div>
                  </div>

                  <form
                    onSubmit={handleSearch}
                    className="mt-5 rounded-[1.25rem] bg-white p-2 text-[#0b1120]"
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                      <div className="flex min-w-0 flex-1 items-center gap-3 px-4">
                        <Search className="h-5 w-5 text-[#f28b34]" />
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search plumbers, bakers, tailors, groceries..."
                          className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-[#708096]"
                        />
                      </div>
                      <button
                        type="submit"
                        className="inline-flex h-12 items-center justify-center rounded-full bg-[#f28b34] px-5 text-sm font-semibold text-[#0b1120]"
                      >
                        Search
                      </button>
                    </div>
                  </form>

                  <div className="mt-5 grid gap-3">
                    {nearbyResults.slice(0, 3).map((item) => (
                      <div
                        key={item.title}
                        className="rounded-[1.25rem] border border-white/10 bg-white/6 p-4"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-sm font-semibold text-white">
                              {item.title}
                            </p>
                            <p className="mt-1 text-sm text-white/65">
                              {item.vendor}
                            </p>
                          </div>
                          <span className="rounded-full bg-[#1f7a5a]/18 px-3 py-1 text-[11px] font-semibold text-[#9ce3c7]">
                            {item.badge}
                          </span>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/65">
                          <span className="rounded-full bg-white/8 px-3 py-1">
                            {item.distance}
                          </span>
                          <span className="rounded-full bg-white/8 px-3 py-1">
                            {item.eta}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-[#0b1120]/8 bg-[#fff7ef] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9b5f1f]">
                      Buyer confidence
                    </p>
                    <p className="mt-2 text-lg font-semibold text-[#0b1120]">
                      Escrow and ratings help buyers compare safer options.
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-[#0b1120]/8 bg-[#eef8f3] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1f7a5a]">
                      Vendor reach
                    </p>
                    <p className="mt-2 text-lg font-semibold text-[#0b1120]">
                      Local sellers become discoverable beyond word of mouth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="border-b border-black/5 bg-white py-16"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f28b34]">
                  How it works
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-[#0b1120] md:text-5xl">
                  Start in three quick steps.
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-[#5b677b]">
                The landing page should explain the product in seconds. This
                section makes the flow obvious for first-time buyers.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Search nearby",
                  description:
                    "Type what you need and start with vendors and services close to your area.",
                  icon: Search,
                },
                {
                  step: "02",
                  title: "Compare trusted options",
                  description:
                    "Review ratings, location, and response speed before you decide who to contact.",
                  icon: ShieldCheck,
                },
                {
                  step: "03",
                  title: "Post a request if needed",
                  description:
                    "When you cannot find a match, let nearby vendors come to you with offers.",
                  icon: MessageCircle,
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-[2rem] border border-[#0b1120]/8 bg-[#f8f4ec] p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-black tracking-[-0.05em] text-[#0b1120]">
                      {item.step}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#f28b34] shadow-[0_10px_30px_rgba(11,17,32,0.08)]">
                      <item.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="mt-8 text-2xl font-bold tracking-[-0.02em] text-[#0b1120]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#5b677b]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="categories" className="bg-[#f8f4ec] py-18 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f28b34]">
                  Everyday needs
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-[#0b1120] md:text-5xl">
                  Built for the things people search for most.
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-7 text-[#5b677b]">
                Instead of showcasing abstract categories, the page should make
                real local use cases feel immediate, practical, and worth
                trying.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {useCases.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-[#0b1120]/8 bg-white p-6 shadow-[0_12px_40px_rgba(11,17,32,0.05)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b1120] text-white">
                    <Store className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold tracking-[-0.02em] text-[#0b1120]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#5b677b]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="nearby"
          className="border-y border-black/5 bg-white py-18 lg:py-24"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f28b34]">
                  Nearby proof
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-[#0b1120] md:text-5xl">
                  Show buyers what local discovery actually looks like.
                </h2>
              </div>
              <div className="rounded-[1.5rem] border border-[#0b1120]/8 bg-[#f8f4ec] px-5 py-4 text-sm font-medium text-[#445065]">
                Search results should feel close, trusted, and immediately
                useful.
              </div>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {nearbyResults.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-[#0b1120]/8 bg-[#f8f4ec] p-6"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold tracking-[-0.02em] text-[#0b1120]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-base text-[#445065]">
                        {item.vendor}
                      </p>
                    </div>
                    <span className="rounded-full bg-[#0b1120] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                      {item.badge}
                    </span>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium text-[#445065]">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2">
                      <MapPin className="h-4 w-4 text-[#f28b34]" />
                      {item.distance}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2">
                      <Clock3 className="h-4 w-4 text-[#1f7a5a]" />
                      {item.eta}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="board" className="bg-[#0b1120] py-18 text-white lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-[#f6b77d]">
                  <Users className="h-4 w-4" />
                  Request board
                </p>
                <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white md:text-6xl">
                  When nearby search fails, demand takes over.
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-white/68">
                  This is Provinear&apos;s strongest differentiator. Buyers do
                  not stop at dead ends. They post what they need and local
                  vendors reply with offers.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#waitlist"
                    className="inline-flex h-14 items-center justify-center rounded-full bg-[#f28b34] px-8 text-base font-semibold text-[#0b1120]"
                  >
                    Join waitlist
                  </a>
                  <button
                    type="button"
                    onClick={() =>
                      navigate({ to: "/search", search: { q: "" } })
                    }
                    className="inline-flex h-14 items-center justify-center rounded-full border border-white/12 px-8 text-base font-semibold text-white"
                  >
                    Browse search
                  </button>
                </div>
              </div>

              <div className="grid gap-4">
                {requestBoard.map((item) => (
                  <div
                    key={item.request}
                    className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-lg font-semibold">{item.name}</p>
                      <span className="rounded-full bg-[#1f7a5a]/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-[#9ce3c7]">
                        {item.responses}
                      </span>
                    </div>
                    <p className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.02em] text-white">
                      {item.request}
                    </p>
                    <div className="mt-5 flex items-center justify-between gap-4 text-sm text-white/60">
                      <span>{item.time}</span>
                      <span className="inline-flex items-center gap-2 font-semibold text-[#f6b77d]">
                        Vendors can respond
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="sellers" className="bg-[#eef8f3] py-18 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div className="rounded-[2.5rem] bg-[#1f7a5a] p-8 text-white shadow-[0_24px_80px_rgba(31,122,90,0.24)] lg:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b9efd8]">
                  For sellers
                </p>
                <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-5xl">
                  Help local buyers find your business faster.
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/78">
                  Provinear is not only for discovery. It also gives providers a
                  clearer route to visibility, trust, and repeat local demand.
                </p>
              </div>

              <div>
                <div className="grid gap-4">
                  {sellerPoints.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-4 rounded-[1.5rem] border border-[#0b1120]/8 bg-white p-5"
                    >
                      <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#0b1120] text-white">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <p className="text-base leading-7 text-[#445065]">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
                <a
                  href="#waitlist"
                  className="mt-7 inline-flex h-14 items-center justify-center rounded-full bg-[#0b1120] px-8 text-base font-semibold text-white"
                >
                  Join as a vendor
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="waitlist" className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <div className="rounded-[2.5rem] border border-[#0b1120]/8 bg-[#f8f4ec] p-8 text-center shadow-[0_24px_80px_rgba(11,17,32,0.08)] lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f28b34]">
                Join the waitlist
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-[#0b1120] md:text-6xl">
                Be first to try Provinear in your area.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#5b677b]">
                Sign up to hear when buyer access opens, when vendor onboarding
                expands, and when new neighborhoods go live.
              </p>

              <form
                onSubmit={handleWaitlistSubmit}
                className="mx-auto mt-8 max-w-2xl"
              >
                <div className="flex flex-col gap-3 rounded-[2rem] border border-[#0b1120]/8 bg-white p-3 shadow-[0_12px_40px_rgba(11,17,32,0.05)] sm:flex-row">
                  <input
                    type="email"
                    value={waitlistEmail}
                    onChange={(e) => setWaitlistEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="h-14 flex-1 rounded-[1.25rem] border border-transparent px-5 text-base text-[#0b1120] outline-none placeholder:text-[#7b8798] focus:border-[#f28b34]/30"
                    required
                  />
                  <button
                    type="submit"
                    className="inline-flex h-14 items-center justify-center rounded-full bg-[#f28b34] px-7 text-base font-semibold text-[#0b1120]"
                  >
                    Join waitlist
                  </button>
                </div>
              </form>

              <div className="mt-5 min-h-6 text-sm font-medium text-[#1f7a5a]">
                {waitlistJoined
                  ? "Thanks. Your interest has been noted for the launch list."
                  : "Primary CTA now leads to an in-page waitlist form while product access matures."}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
