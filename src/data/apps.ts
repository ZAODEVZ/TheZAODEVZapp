import type { LucideIcon } from "lucide-react";
import {
  Swords,
  Gamepad2,
  KanbanSquare,
  Boxes,
  Disc3,
  Trophy,
  Bot,
  Radar,
  Mic2,
  Tent,
  Code2,
} from "lucide-react";

export interface ZaoApp {
  id: number;
  name: string;
  tagline: string;
  category: string;
  description: string;
  url: string;
  launchLabel: string;
  icon: LucideIcon;
  /** [from, to] gradient stops for the icon tile */
  grad: [string, string];
  glow: string;
  rating: number;
  /** short proof-of-life stat shown on the card */
  metric: string;
  status: string;
  chains: string[];
  tags: string[];
  badge: string | null;
  featured: boolean;
  /** flagship = the top-of-funnel hero app */
  flagship?: boolean;
  /** official ZAO ecosystem property */
  verified: boolean;
}

/**
 * The full ZAO ecosystem, mapped from the July 2026 Ecosystem Brief
 * ("All About The ZAO"). Every production lane and surface is represented.
 * URLs are the real, verified launch surfaces where one exists; Farcaster
 * lanes link to their native channel.
 */
export const APPS: ZaoApp[] = [
  {
    id: 1,
    name: "WaveWarZ",
    tagline: "Live-traded music battles",
    category: "Music",
    description:
      "A prediction market where artists battle head-to-head and fans trade the outcome on bonding curves, earning in real time as each battle settles. Main events on X Spaces, YouTube and Retake; quick battles weeknights. Artists earn about 1% per trade, paid instantly.",
    url: "https://www.wavewarz.com/",
    launchLabel: "Trade",
    icon: Swords,
    grad: ["#8b5cf6", "#22d3ee"],
    glow: "rgba(139,92,246,0.55)",
    rating: 4.9,
    metric: "~1% instant artist payout",
    status: "Live",
    chains: ["Solana", "Base"],
    tags: ["Music", "Web3", "Trading", "Prediction Market"],
    badge: "Flagship",
    featured: true,
    flagship: true,
    verified: true,
  },
  {
    id: 2,
    name: "ZABAL Games",
    tagline: "3-month build-a-thon",
    category: "Gaming",
    description:
      "A free, Farcaster-native onboarding event: ship something real in public with a ZAO mentor in your corner and earn Respect plus an on-chain credential. Pick a track (Artist, Builder, or Creator); finalists receive tiered USDC payments.",
    url: "https://zabalgamez.com/",
    launchLabel: "Join",
    icon: Gamepad2,
    grad: ["#a855f7", "#ec4899"],
    glow: "rgba(168,85,247,0.55)",
    rating: 4.8,
    metric: "100+ weeks · USDC prizes",
    status: "Live",
    chains: ["Base"],
    tags: ["Gaming", "Build", "Community", "Hackathon"],
    badge: "Live Now",
    featured: true,
    verified: true,
  },
  {
    id: 3,
    name: "The ZAO Co-Works",
    tagline: "One board for every ZAO brand",
    category: "Productivity",
    description:
      "The action tracker and hub of record for the whole ecosystem. Manage tasks across every ZAO brand, filter by owner, and stay in sync with Telegram for real-time team coordination. The single deduped entry point at thezao.xyz.",
    url: "https://thezao.xyz",
    launchLabel: "Open",
    icon: KanbanSquare,
    grad: ["#3b82f6", "#0ea5e9"],
    glow: "rgba(59,130,246,0.55)",
    rating: 4.9,
    metric: "Hub of record · Telegram sync",
    status: "Live",
    chains: [],
    tags: ["Productivity", "Team", "Tools", "Coordination"],
    badge: "Official",
    featured: true,
    verified: true,
  },
  {
    id: 4,
    name: "Respect Game",
    tagline: "On-chain contribution & governance",
    category: "Governance",
    description:
      "The weekly Fractal governance ritual. Contribution is measured on-chain and rewarded along a Fibonacci curve, issued as Respect on Optimism (a soulbound OG ERC-20 and a ZOR ERC-1155). Decisions execute through OREC with a 72-hour vote and 72-hour veto window.",
    url: "https://thezao.xyz",
    launchLabel: "Enter",
    icon: Trophy,
    grad: ["#eab308", "#f59e0b"],
    glow: "rgba(234,179,8,0.5)",
    rating: 4.8,
    metric: "100+ weeks · 156 holders",
    status: "Live",
    chains: ["Optimism"],
    tags: ["Governance", "Web3", "Respect", "DAO"],
    badge: "100+ Weeks",
    featured: false,
    verified: true,
  },
  {
    id: 5,
    name: "ZAO OS",
    tagline: "Monorepo-as-lab",
    category: "Dev Tools",
    description:
      "The prototyping environment where projects incubate and graduate to their own repos when ready to stand alone. Also powers mini-app discovery across the ecosystem. Source lives at github.com/bettercallzaal/ZAOOS.",
    url: "https://zaoos.com",
    launchLabel: "Explore",
    icon: Boxes,
    grad: ["#10b981", "#22d3ee"],
    glow: "rgba(16,185,129,0.5)",
    rating: 4.7,
    metric: "Open source · mini-app discovery",
    status: "Open Source",
    chains: [],
    tags: ["Dev Tools", "Open Source", "Web3", "Incubator"],
    badge: "Open Source",
    featured: false,
    verified: true,
  },
  {
    id: 6,
    name: "SongChainn",
    tagline: "Music on the blockchain",
    category: "Music",
    description:
      "$ONGCHAINN. Music on the blockchain from the ZAO ecosystem, putting ownership and upside back in the hands of the artists who make the sound.",
    url: "https://www.songchainn.xyz",
    launchLabel: "Listen",
    icon: Disc3,
    grad: ["#3b82f6", "#8b5cf6"],
    glow: "rgba(59,130,246,0.6)",
    rating: 4.7,
    metric: "$ONGCHAINN",
    status: "New",
    chains: [],
    tags: ["Music", "Web3", "Chain"],
    badge: "New",
    featured: false,
    verified: true,
  },
  {
    id: 7,
    name: "ZOE",
    tagline: "The always-on orchestrator",
    category: "AI",
    description:
      "The AI operator at the center of the ZAO integration map. Delivers morning briefs and evening reflections, escalates critical alerts, and turns meeting recordings into recaps, with the cowork board as its hub of record. Autonomy with a brake: money and on-chain actions stay human-gated.",
    url: "https://thezao.xyz",
    launchLabel: "Meet ZOE",
    icon: Bot,
    grad: ["#2ee6a6", "#14b8a6"],
    glow: "rgba(46,230,166,0.5)",
    rating: 4.8,
    metric: "Always-on · human-gated",
    status: "AI",
    chains: [],
    tags: ["AI", "Automation", "Ops", "Orchestrator"],
    badge: "AI Operator",
    featured: false,
    verified: true,
  },
  {
    id: 8,
    name: "ZOL",
    tagline: "The music scout on Farcaster",
    category: "AI",
    description:
      "The build-in-public voice of the ZAO on Farcaster (@zolbot). Handles public music-scouting and shares what the ecosystem is shipping, in real prose, in the open.",
    url: "https://farcaster.xyz/zolbot",
    launchLabel: "Follow",
    icon: Radar,
    grad: ["#f97316", "#f59e0b"],
    glow: "rgba(249,115,22,0.5)",
    rating: 4.6,
    metric: "@zolbot on Farcaster",
    status: "AI",
    chains: [],
    tags: ["AI", "Social", "Farcaster", "Music"],
    badge: null,
    featured: false,
    verified: true,
  },
  {
    id: 9,
    name: "COC Concertz",
    tagline: "Live concert series",
    category: "Events",
    description:
      "The ZAO's live concert series, bringing the ecosystem's music off-chain and on-stage. Follow along in the /cocconcertz channel on Farcaster.",
    url: "https://farcaster.xyz/~/channel/cocconcertz",
    launchLabel: "Tune In",
    icon: Mic2,
    grad: ["#ef4444", "#f97316"],
    glow: "rgba(239,68,68,0.5)",
    rating: 4.6,
    metric: "Live concert series",
    status: "Series",
    chains: [],
    tags: ["Events", "Music", "Live", "Farcaster"],
    badge: null,
    featured: false,
    verified: true,
  },
  {
    id: 10,
    name: "ZAO Festivals",
    tagline: "IRL ecosystem festivals",
    category: "Events",
    description:
      "The ZAO's real-world gatherings: ZAOstock (Oct 3, 2026, Ellsworth, Maine), ZAOville, ZAO-PALOOZA and ZAO-CHELLA. Where the on-chain community meets in person.",
    url: "https://zaofestivals.com/",
    launchLabel: "Explore",
    icon: Tent,
    grad: ["#ec4899", "#f97316"],
    glow: "rgba(236,72,153,0.5)",
    rating: 4.7,
    metric: "ZAOstock · Oct 3, 2026",
    status: "Event",
    chains: [],
    tags: ["Events", "Festival", "IRL", "Community"],
    badge: null,
    featured: false,
    verified: true,
  },
  {
    id: 11,
    name: "BetterCallZaal",
    tagline: "The founder's hub",
    category: "Web3",
    description:
      "The personal hub of Zaal Panthaki (BetterCallZaal), the electrical engineer who founded and runs The ZAO, building relentlessly in public across The ZAO, Farcaster, and the broader Web3 ecosystem.",
    url: "https://bettercallzaal.com",
    launchLabel: "Visit",
    icon: Code2,
    grad: ["#dc2626", "#f97316"],
    glow: "rgba(220,38,38,0.5)",
    rating: 4.9,
    metric: "Founder hub",
    status: "Live",
    chains: [],
    tags: ["Web3", "Portfolio", "Builder", "Founder"],
    badge: null,
    featured: false,
    verified: true,
  },
];

export const CATEGORIES = [
  "All",
  "Music",
  "Gaming",
  "Web3",
  "Governance",
  "AI",
  "Productivity",
  "Events",
  "Dev Tools",
];

/** Ecosystem-wide stats for the App Store header (from the July 2026 brief). */
export const ECOSYSTEM_STATS = [
  { num: `${APPS.length}`, label: "Apps & Lanes" },
  { num: "100+", label: "Weeks Live" },
  { num: "156", label: "Respect Holders" },
  { num: "3", label: "Chains" },
];
