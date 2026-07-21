import type { LucideIcon } from "lucide-react";
import {
  Code2, Music, Palette, TrendingUp, HeartHandshake,
  Trophy, Bot, Gamepad2, Boxes,
  Rocket, GraduationCap, GitBranch, Coins, Vote, Radio, Cpu,
  Wallet, ShieldCheck, Blocks, Network, Sparkles, Terminal,
} from "lucide-react";

/* ─────────────────────────────  AUDIENCES  ───────────────────────────── */
/* Everyone the ZAO caters for. The Developer lane leads — this is the Devz side. */

export interface Audience {
  key: string;
  label: string;
  icon: LucideIcon;
  tagline: string;
  blurb: string;
  gains: string[];
  steps: string[];
  ctas: { label: string; to: string; external?: boolean }[];
  grad: [string, string];
  glow: string;
  dev?: boolean;
}

export const AUDIENCES: Audience[] = [
  {
    key: "developer",
    label: "Developers",
    icon: Code2,
    tagline: "Build on the ZAO. Ship in public. Earn Respect.",
    blurb:
      "The ZAO is AI-operated and Farcaster-native, and it runs on open repos. Bring an idea, prototype it in the ZAO OS monorepo-as-lab, and graduate it to its own repo when it can stand alone. Every shipped contribution is measured on-chain.",
    gains: [
      "Real primitives: Farcaster, Neynar, Clanker, Solana, Base, Optimism",
      "A mentor in your corner during ZABAL Games",
      "On-chain Respect + a Hats Protocol credential for what you ship",
      "A monorepo-as-lab that graduates your project when it's ready",
    ],
    steps: [
      "Learn the ZAO: governance, Respect, and the lanes",
      "Join ZABAL Games and pick the Builder track",
      "Prototype inside ZAO OS, then ship a live URL + open repo",
      "Post the demo on Farcaster and earn Respect",
    ],
    ctas: [
      { label: "Start Building", to: "/build" },
      { label: "Join ZABAL Games", to: "https://zabalgamez.com/", external: true },
    ],
    grad: ["#3b82f6", "#22d3ee"],
    glow: "rgba(59,130,246,0.5)",
    dev: true,
  },
  {
    key: "artist",
    label: "Artists",
    icon: Music,
    tagline: "Profit, data, and IP rights, back in your hands.",
    blurb:
      "The ZAO exists to return the value chain to the creators who generate it. Battle head-to-head on WaveWarZ, release on-chain with SongChainn, and play the festivals, keeping the margins that a traditional label would take.",
    gains: [
      "Earn about 1% per trade on WaveWarZ, paid instantly",
      "Own your data and your intellectual property",
      "Release music on-chain through SongChainn",
      "Play ZAOstock and the ZAO festival circuit",
    ],
    steps: [
      "Enter a WaveWarZ battle and rally your fans",
      "Release a track on SongChainn",
      "Join the /zao channel on Farcaster",
    ],
    ctas: [
      { label: "Battle on WaveWarZ", to: "https://www.wavewarz.com/", external: true },
      { label: "Explore Apps", to: "/apps" },
    ],
    grad: ["#8b5cf6", "#ec4899"],
    glow: "rgba(139,92,246,0.5)",
  },
  {
    key: "creator",
    label: "Creators",
    icon: Palette,
    tagline: "Build in public. Grow with the community.",
    blurb:
      "Content is a first-class lane. Pick the Creator track at ZABAL Games, ship something real with a mentor, and let the build-in-public flywheel, led by ZOL on Farcaster, carry your work to the ecosystem.",
    gains: [
      "A ZABAL Games mentor and a public build log",
      "Distribution through ZAO channels, not rented platforms",
      "Respect for shipping, not just for showing up",
    ],
    steps: [
      "Register at ZABAL Games and pick the Creator track",
      "Ship a live demo and post it on Farcaster",
      "Earn Respect and an on-chain credential",
    ],
    ctas: [
      { label: "Join ZABAL Games", to: "https://zabalgamez.com/", external: true },
      { label: "Learn the ZAO", to: "/learn" },
    ],
    grad: ["#f97316", "#eab308"],
    glow: "rgba(249,115,22,0.5)",
  },
  {
    key: "fan",
    label: "Fans & Traders",
    icon: TrendingUp,
    tagline: "Back the artists you believe in, and earn.",
    blurb:
      "WaveWarZ turns music competitions into a live market. Buy positions on the outcome via bonding curves, earn in real time as battles settle, collect what you love, and show up IRL at the festivals.",
    gains: [
      "Trade live music battles on bonding curves",
      "Real-time settlement with transparent 2-of-3 judging",
      "Collectibles and IRL festival access",
    ],
    steps: [
      "Open WaveWarZ and follow a live battle",
      "Take a position and earn as it settles",
      "Get tickets to ZAOstock",
    ],
    ctas: [
      { label: "Trade on WaveWarZ", to: "https://www.wavewarz.com/", external: true },
      { label: "ZAO Festivals", to: "https://zaofestivals.com/", external: true },
    ],
    grad: ["#10b981", "#22d3ee"],
    glow: "rgba(16,185,129,0.5)",
  },
  {
    key: "contributor",
    label: "Contributors",
    icon: HeartHandshake,
    tagline: "Earn Respect weekly. Help steer the network.",
    blurb:
      "The ZAO is a decentralized impact network governed by contribution. Play the weekly Respect Game, hold soulbound Respect on Optimism, and use the OREC dual-window to make sure nothing irreversible ships without the community's say.",
    gains: [
      "On-chain Respect that is earned, never bought",
      "A vote through the OREC 72h + 72h window",
      "A seat in a system that has run 100+ weeks straight",
    ],
    steps: [
      "Learn how Respect and OREC work",
      "Contribute and get ranked in the weekly game",
      "Vote, veto, and shape what ships",
    ],
    ctas: [
      { label: "Learn Governance", to: "/learn" },
      { label: "Explore Apps", to: "/apps" },
    ],
    grad: ["#eab308", "#f59e0b"],
    glow: "rgba(234,179,8,0.5)",
  },
];

/* ─────────────────────────────  LEARN PILLARS  ───────────────────────── */

export interface Pillar {
  key: string;
  label: string;
  icon: LucideIcon;
  headline: string;
  body: string;
  points: string[];
}

export const PILLARS: Pillar[] = [
  {
    key: "what",
    label: "What The ZAO Is",
    icon: Sparkles,
    headline: "A decentralized impact network, not a record label",
    body:
      "ZAO stands for ZTalent Artist Organization. It exists to restore three things to artists: profit margins, data ownership, and intellectual property rights. Blockchain and AI are the enablers, not the point.",
    points: [
      "Runs without formal incorporation, under the BetterCallZaal Strategies LLC umbrella",
      "Production lanes can spin out into their own entities as they mature",
      "Primary surfaces: thezao.xyz and zaoos.com, plus /zao and /zabal on Farcaster",
      "Source lives at github.com/bettercallzaal/ZAOOS",
    ],
  },
  {
    key: "respect",
    label: "Respect",
    icon: Trophy,
    headline: "Contribution, measured on-chain and rewarded weekly",
    body:
      "Respect is the ZAO's contribution currency, issued as two tokens on Optimism: a soulbound OG ERC-20 and a ZOR ERC-1155. It is earned, not bought. The weekly Respect Game ranks contributors and distributes rewards along a Fibonacci curve.",
    points: [
      "Running continuously since July 30, 2024, 100+ weeks and counting",
      "156 unique holders across both token types (as of July 5, 2026)",
      "Rewards follow a Fibonacci curve, weighted to real contribution",
      "Soulbound: your Respect reflects what you did, not what you bought",
    ],
  },
  {
    key: "orec",
    label: "OREC Governance",
    icon: Vote,
    headline: "Autonomy with a brake",
    body:
      "Decisions execute through OREC, a dual-window model designed for reversibility. A 72-hour voting window is followed by a 72-hour veto window, so nothing irreversible ships without the community having a chance to stop it.",
    points: [
      "72-hour vote, then a 72-hour veto window",
      "Money, public posts, and on-chain actions stay human-gated",
      "Research and internal work proceed autonomously",
      "Reversibility by design, not by exception",
    ],
  },
  {
    key: "lanes",
    label: "Production Lanes",
    icon: Boxes,
    headline: "Parallel front doors into the ecosystem",
    body:
      "The ZAO ships through several lanes, each a way in. WaveWarZ is the top-of-funnel magnet; ZABAL Games onboards builders; festivals and COC Concertz bring it all IRL; ZAO OS is where new projects incubate.",
    points: [
      "WaveWarZ: live-traded music battles on Solana and Base",
      "ZABAL Games: a 3-month, Farcaster-native build-a-thon",
      "ZAO Festivals + COC Concertz: the IRL circuit",
      "ZAO OS: a monorepo-as-lab that graduates projects to their own repos",
    ],
  },
  {
    key: "ai",
    label: "AI Operators",
    icon: Bot,
    headline: "The ZAO is AI-operated, with humans on the brake",
    body:
      "An assistant layer runs through Claude Code sessions and turns strategic intent into shipped deliverables. ZOE is the always-on orchestrator; ZOL is the build-in-public music scout on Farcaster.",
    points: [
      "ZOE: morning briefs, evening reflections, and alert escalation",
      "ZOL (@zolbot): public music-scouting and build-in-public",
      "Ships to repos by pull request only, never pushes to main",
      "Drafts communications, but never sends autonomously",
    ],
  },
  {
    key: "farcaster",
    label: "Farcaster",
    icon: Radio,
    headline: "A native builder on the protocol",
    body:
      "The ZAO ships Snaps and mini apps on Farcaster and lives in its channels. Neynar acquired Farcaster from Merkle on January 21, 2026, and the ZAO builds directly on the primitives.",
    points: [
      "Channels: /zao, /zabal, /wavewarz, /cocconcertz",
      "Built on casts, channels, Snaps, mini apps, and Snapchain",
      "Uses the Neynar API and Clanker, the AI token launchpad",
      "Founder @zaal; music scout @zolbot",
    ],
  },
];

/* ─────────────────────────────  DEV STACK  ───────────────────────────── */

export interface StackItem {
  name: string;
  desc: string;
  icon: LucideIcon;
  group: string;
}

export const DEV_STACK: StackItem[] = [
  { name: "Farcaster", desc: "The social protocol: casts, channels, Snaps, and mini apps.", icon: Radio, group: "Protocol" },
  { name: "Neynar API", desc: "Farcaster infrastructure; acquired the protocol in Jan 2026.", icon: Network, group: "Protocol" },
  { name: "Clanker", desc: "The AI token launchpad the ZAO builds against.", icon: Cpu, group: "Protocol" },
  { name: "Solana", desc: "WaveWarZ's primary chain for live battle settlement.", icon: Blocks, group: "Chains" },
  { name: "Base", desc: "L2 for collectibles, credentials, and the WaveWarZ bridge.", icon: Blocks, group: "Chains" },
  { name: "Optimism", desc: "Home of Respect: the OG ERC-20 and ZOR ERC-1155.", icon: Blocks, group: "Chains" },
  { name: "Hats Protocol", desc: "On-chain credentials, like the ZABAL Games collectible.", icon: ShieldCheck, group: "Onchain" },
  { name: "ZAO OS", desc: "The monorepo-as-lab where projects incubate and graduate.", icon: Boxes, group: "Tooling" },
  { name: "Claude Code", desc: "The AI operator layer that turns intent into shipped PRs.", icon: Terminal, group: "Tooling" },
  { name: "Wallets", desc: "Bring your wallet; Respect and payouts settle on-chain.", icon: Wallet, group: "Onchain" },
];

/* ─────────────────────────────  BUILD ROADMAP  ───────────────────────── */

export interface BuildStep {
  num: number;
  title: string;
  desc: string;
  icon: LucideIcon;
  cta?: { label: string; to: string; external?: boolean };
}

export const BUILD_STEPS: BuildStep[] = [
  {
    num: 1,
    title: "Learn the ZAO",
    desc: "Get the model: Respect, OREC governance, the production lanes, and how the AI operators work. Ten minutes now saves you a week later.",
    icon: GraduationCap,
    cta: { label: "Open the Learn hub", to: "/learn" },
  },
  {
    num: 2,
    title: "Join ZABAL Games",
    desc: "Register with your wallet and GitHub repo, pick the Builder track, and get paired with a ZAO mentor for the 3-month build-a-thon.",
    icon: Gamepad2,
    cta: { label: "Register at ZABAL Games", to: "https://zabalgamez.com/", external: true },
  },
  {
    num: 3,
    title: "Prototype in ZAO OS",
    desc: "Clone the monorepo-as-lab and build your idea alongside the rest of the ecosystem. It graduates to its own repo when it can stand alone.",
    icon: GitBranch,
    cta: { label: "View ZAO OS on GitHub", to: "https://github.com/bettercallzaal/ZAOOS", external: true },
  },
  {
    num: 4,
    title: "Ship in public",
    desc: "A qualifying submission is a live URL, an open repo, a working demo, and a Farcaster post. Build in the open, the ZAO way.",
    icon: Rocket,
  },
  {
    num: 5,
    title: "Earn Respect",
    desc: "Shipping earns on-chain Respect plus an 'I shipped at ZABAL Games' Hats Protocol collectible on Base. Finalists receive tiered USDC payments.",
    icon: Coins,
  },
];

export const ZABAL_TRACKS = [
  { label: "Artist", icon: Music, desc: "Make and release, with the margins on your side." },
  { label: "Builder", icon: Code2, desc: "Ship real software on live ZAO primitives." },
  { label: "Creator", icon: Palette, desc: "Grow in public with the build-in-public flywheel." },
];

export const REPOS = [
  { name: "ZAOOS", desc: "The monorepo-as-lab and mini-app discovery.", url: "https://github.com/bettercallzaal/ZAOOS" },
  { name: "zabalgames", desc: "The ZABAL Games build-a-thon.", url: "https://github.com/bettercallzaal" },
  { name: "cowork board", desc: "The action tracker and hub of record.", url: "https://thezao.xyz" },
  { name: "zaoonparagraph", desc: "The ZAO's writing and publishing lane.", url: "https://github.com/bettercallzaal" },
  { name: "zpoidh", desc: "Proof-of-IamsDHere experiments.", url: "https://github.com/bettercallzaal" },
];

/* Global brake principle, quoted across the app. */
export const BRAKE_QUOTE =
  "Autonomy with a brake. Money, public posts, and on-chain actions stay human-gated. Research and internal work proceed autonomously.";
