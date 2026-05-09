import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  MessageCircle,
  Search,
  Sparkles,
  Users,
  Utensils,
  Scissors,
  Wrench,
  Megaphone,
} from "lucide-react";
import { Footer } from "@/components/site/Footer";
import { Nav } from "@/components/site/Nav";

// Local Assets
import heroImage from "@/assets/images/hero_lifestyle.png";
import categoryFood from "@/assets/images/category_food.png";
import categoryFashion from "@/assets/images/category_fashion.png";

// Unsplash Images for remaining categories
const categoryRepairs =
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop";
const categoryRequests =
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Provinear | Find Trusted Nearby Vendors and Services Faster" },
      {
        name: "description",
        content:
          "Stop asking around blindly. Provinear helps you find trusted nearby vendors, artisans, and everyday services faster, all in your area.",
      },
    ],
  }),
});

const categories = [
  {
    title: "Food & Groceries",
    description:
      "Find hot meals, fresh groceries, and everyday essentials close to you.",
    image: categoryFood,
    icon: Utensils,
    color: "bg-[#8b5cf6]",
  },
  {
    title: "Fashion & Beauty",
    description: "Need a tailor, stylist, or beauty vendor nearby? Start here.",
    image: categoryFashion,
    icon: Scissors,
    color: "bg-[#e86a8a]",
  },
  {
    title: "Repairs & Help",
    description:
      "Get trusted help for repairs, installations, cleaning, and urgent fixes.",
    image: categoryRepairs,
    icon: Wrench,
    color: "bg-[#1f7a5a]",
  },
  {
    title: "Community Requests",
    description:
      "If search comes up short, post what you need and let vendors come to you.",
    image: categoryRequests,
    icon: Megaphone,
    color: "bg-[#0b1120]",
  },
];

const nearbyResults = [
  {
    title: "Pipe repair needed this morning",
    vendor: "FlowFix Services",
    distance: "0.8 km",
    eta: "8 mins away",
    badge: "Verified nearby",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=100&auto=format&fit=crop",
  },
  {
    title: "Birthday cake for tomorrow",
    vendor: "Bodija Oven Studio",
    distance: "1.4 km",
    eta: "Ready today",
    badge: "Fast response",
    image:
      "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?q=80&w=100&auto=format&fit=crop",
  },
  {
    title: "Cracked phone screen fix",
    vendor: "Swift Gadget Care",
    distance: "2.1 km",
    eta: "Same-day",
    badge: "Trusted service",
    image:
      "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?w=100&auto=format&fit=crop",
  },
];

const requestBoard = [
  {
    name: "Tunde",
    avatar:
      "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=100&auto=format&fit=crop",
    request: "Need a welder for a gate repair in Akobo this evening.",
    responses: 9,
    time: "11m ago",
  },
  {
    name: "Amara",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop",
    request: "Looking for 30 souvenir packs for a church event this weekend.",
    responses: 14,
    time: "32m ago",
  },
];

const sellerPoints = [
  "Show up when nearby buyers are actively searching for what you offer.",
  "Respond to direct local requests and win customers before they move on.",
  "Build trust faster with a visible profile, reviews, and local proof.",
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
    <div className="min-h-screen overflow-x-hidden bg-[#f8f4ec] text-[#0b1120] selection:bg-[#8b5cf6]/20 font-sans">
      <Nav />

      <main>
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/60 backdrop-blur-md px-4 py-2 text-sm font-semibold text-[#0b1120] shadow-sm">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#8b5cf6]">
                    <MapPin className="h-3 w-3 text-white" />
                  </span>
                  Nearby help, without the guesswork.
                </div>

                <h1 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight text-[#0b1120] md:text-7xl lg:text-[5.5rem]">
                  Find trusted vendors and services near you,{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#e86a8a]">
                    faster.
                  </span>
                </h1>

                <p className="mt-6 text-xl leading-relaxed text-[#5b677b]">
                  Stop jumping between WhatsApp groups, saved contacts, and
                  random search results. Provinear helps you quickly find
                  reliable local vendors, artisans, and everyday services in
                  your area.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#waitlist"
                    className="inline-flex h-14 items-center justify-center rounded-full bg-[#0b1120] px-8 text-base font-bold text-white transition-all hover:scale-105 hover:shadow-lg"
                  >
                    Join the Waitlist
                  </a>
                  <button
                    type="button"
                    onClick={() =>
                      navigate({ to: "/search", search: { q: "" } })
                    }
                    className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-base font-bold text-[#0b1120] shadow-sm transition-all hover:scale-105 border border-black/5"
                  >
                    See What You Can Find
                  </button>
                </div>
              </div>

              <div className="relative relative mx-auto w-full max-w-lg lg:max-w-none">
                <div className="absolute -inset-4 rounded-[3.5rem] bg-gradient-to-br from-[#8b5cf6]/20 to-[#1f7a5a]/20 blur-2xl"></div>
                <div className="relative overflow-hidden rounded-[3rem] shadow-2xl ring-1 ring-black/5 aspect-[4/5] lg:aspect-square">
                  <img
                    src={heroImage}
                    alt="Bustling local market"
                    className="h-full w-full object-cover"
                  />

                  {/* Floating UI Element */}
                  <div className="absolute bottom-8 left-8 right-8 rounded-[2rem] bg-white/90 p-4 backdrop-blur-xl shadow-xl border border-white/40">
                    <form
                      onSubmit={handleSearch}
                      className="flex items-center gap-3"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f8f4ec]">
                        <Search className="h-5 w-5 text-[#8b5cf6]" />
                      </div>
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="What do you need nearby?"
                        className="flex-1 bg-transparent text-base font-medium outline-none placeholder:text-[#8b95a5]"
                      />
                      <button
                        type="submit"
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0b1120] text-white transition-transform hover:scale-105"
                      >
                        <ArrowRight className="h-5 w-5" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORIES SECTION */}
        <section id="categories" className="py-20 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-black tracking-tight text-[#0b1120] md:text-5xl">
                From everyday needs to urgent fixes, start nearby.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-[#5b677b]">
                Search by what you need, not by who you already know. Provinear
                helps you discover useful local businesses and service providers
                without asking around first.
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {categories.map((cat, idx) => (
                <div
                  key={cat.title}
                  className="group relative overflow-hidden rounded-[2.5rem] bg-white aspect-[4/5] cursor-pointer"
                >
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 p-8 text-white w-full">
                    <div
                      className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full ${cat.color} text-white backdrop-blur-md`}
                    >
                      <cat.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{cat.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROOF & BOARD SECTION */}
        <section
          id="nearby"
          className="bg-white py-20 lg:py-32 rounded-[3rem] lg:rounded-[5rem] mx-4 lg:mx-10 shadow-sm border border-black/5 overflow-hidden"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              {/* Nearby Search Proof */}
              <div>
                <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                  Find nearby options you can act on quickly.
                </h2>
                <p className="mt-4 text-lg text-[#5b677b]">
                  See relevant vendors and service providers around you without
                  digging through scattered recommendations or broad online
                  listings that waste your time.
                </p>

                <div className="mt-10 flex flex-col gap-4">
                  {nearbyResults.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center gap-4 rounded-[2rem] border border-black/5 bg-[#f8f4ec]/50 p-4 transition-colors hover:bg-[#f8f4ec]"
                    >
                      <img
                        src={item.image}
                        alt={item.vendor}
                        className="h-16 w-16 rounded-full object-cover shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg font-bold truncate">
                          {item.title}
                        </h4>
                        <p className="text-sm text-[#5b677b] truncate">
                          {item.vendor}
                        </p>
                      </div>
                      <div className="hidden sm:flex flex-col items-end gap-1">
                        <span className="inline-flex items-center gap-1 text-xs font-semibold bg-white rounded-full px-3 py-1 shadow-sm">
                          {item.badge}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold bg-white rounded-full px-3 py-1 shadow-sm">
                          <MapPin className="h-3 w-3 text-[#8b5cf6]" />{" "}
                          {item.distance}
                        </span>
                        <span className="text-xs font-medium text-[#5b677b]">
                          {item.eta}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Request Board UI */}
              <div
                id="board"
                className="relative rounded-[3rem] bg-[#0b1120] p-8 lg:p-12 text-white shadow-2xl"
              >
                <div className="absolute top-0 right-0 -mr-12 -mt-12 h-64 w-64 rounded-full bg-[#8b5cf6]/20 blur-3xl"></div>

                <h3 className="relative text-2xl font-bold flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8b5cf6] text-white">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  Request Board
                </h3>
                <p className="relative mt-3 text-white/70">
                  If you do not find the right option fast enough, post your
                  need once and let nearby vendors respond instead of asking in
                  multiple places.
                </p>

                <div className="relative mt-10 space-y-6">
                  {requestBoard.map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="h-12 w-12 rounded-full object-cover shrink-0 ring-4 ring-white/10"
                      />
                      <div className="flex-1 rounded-[1.5rem] rounded-tl-none bg-white/10 p-5 backdrop-blur-md">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-bold text-sm">{item.name}</span>
                          <span className="text-xs text-white/50">
                            {item.time}
                          </span>
                        </div>
                        <p className="text-base leading-snug">{item.request}</p>
                        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#1f7a5a]/20 px-3 py-1.5 text-xs font-semibold text-[#9ce3c7]">
                          <Users className="h-3.5 w-3.5" />
                          {item.responses} offers received
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOR SELLERS */}
        <section id="sellers" className="py-20 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="rounded-[4rem] bg-[#1f7a5a] overflow-hidden relative">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

              <div className="relative p-10 lg:p-20 grid lg:grid-cols-2 gap-16 items-center">
                <div className="text-white">
                  <h2 className="text-4xl font-black tracking-tight md:text-5xl lg:text-6xl">
                    Get discovered by more nearby buyers.
                  </h2>
                  <p className="mt-6 text-xl text-white/80 leading-relaxed">
                    Provinear helps local vendors show up at the exact moment
                    someone nearby is ready to buy, book, or request help.
                  </p>

                  <div className="mt-10 space-y-4">
                    {sellerPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#b9efd8] text-[#1f7a5a]">
                          <CheckCircle2 className="h-4 w-4" />
                        </div>
                        <p className="text-lg text-white/90">{point}</p>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#waitlist"
                    className="mt-12 inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-base font-bold text-[#1f7a5a] transition-transform hover:scale-105 shadow-xl"
                  >
                    Join the Vendor Waitlist
                  </a>
                </div>

                <div className="hidden lg:block relative h-full min-h-[400px]">
                  <img
                    src="https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop"
                    alt="Happy vendor"
                    className="absolute inset-0 w-full h-full object-cover rounded-[3rem] shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WAITLIST */}
        <section id="waitlist" className="py-20 lg:pb-32">
          <div className="mx-auto max-w-3xl px-6">
            <div className="rounded-[4rem] bg-white p-10 lg:p-16 text-center shadow-xl border border-black/5">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#f8f4ec] text-[#8b5cf6] mb-8">
                <Sparkles className="h-10 w-10" />
              </div>
              <h2 className="text-4xl font-black tracking-tight text-[#0b1120] md:text-5xl">
                Be first when Provinear opens in your area.
              </h2>
              <p className="mt-6 text-lg text-[#5b677b]">
                Join the waitlist for early access and updates. When Provinear
                rolls out near you, you will be among the first to stop relying
                on scattered contacts to find trusted local help.
              </p>

              <form
                onSubmit={handleWaitlistSubmit}
                className="mx-auto mt-10 max-w-lg"
              >
                <div className="flex flex-col sm:flex-row gap-3 bg-[#f8f4ec] p-2 rounded-[2rem] sm:rounded-full">
                  <input
                    type="email"
                    value={waitlistEmail}
                    onChange={(e) => setWaitlistEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="h-14 flex-1 rounded-full bg-transparent px-6 text-base font-medium outline-none placeholder:text-[#8b95a5]"
                    required
                  />
                  <button
                    type="submit"
                    className="inline-flex h-14 items-center justify-center rounded-full bg-[#8b5cf6] px-8 text-base font-bold text-white transition-transform hover:scale-105"
                  >
                    Get Early Access
                  </button>
                </div>
                {waitlistJoined && (
                  <p className="mt-4 text-sm font-bold text-[#1f7a5a]">
                    You are on the list. We will let you know as soon as
                    Provinear is available near you.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
