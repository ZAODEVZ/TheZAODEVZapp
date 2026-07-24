import type { LucideIcon } from "lucide-react";
import {
  Sparkles, Wand2, Rocket, Crown,
  MessageSquareText, MousePointerClick, Terminal, Bug,
  Puzzle, FolderGit2, GitCommitHorizontal, PaintBucket,
  Layers, Database, KeyRound, Globe2,
  Users, ShieldCheck, Gauge, Blocks,
} from "lucide-react";

export interface VibeLesson {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export interface VibeTier {
  key: string;
  level: string;
  label: string;
  tagline: string;
  blurb: string;
  icon: LucideIcon;
  grad: [string, string];
  glow: string;
  lessons: VibeLesson[];
}

/**
 * The ZAO's vibe-coding curriculum: prompting an AI pair-programmer to build
 * real software, beginner through pro. Four tiers, five lessons each.
 */
export const VIBE_TIERS: VibeTier[] = [
  {
    key: "beginner",
    level: "Tier 1",
    label: "Beginner",
    tagline: "Get your first app running",
    blurb: "No coding background required. Start here to learn how to talk to an AI coding tool and get something real on screen.",
    icon: Sparkles,
    grad: ["#22d3ee", "#3b82f6"],
    glow: "rgba(34,211,238,0.5)",
    lessons: [
      { title: "What vibe coding actually is", desc: "Describing what you want in plain language and iterating by feel instead of writing every line yourself.", icon: MessageSquareText },
      { title: "Pick your tool", desc: "A quick tour of Claude Code, Cursor, Bolt, Lovable, and v0, and when to reach for each.", icon: MousePointerClick },
      { title: "Your first prompt", desc: "Describe the outcome, not the implementation. Small, concrete asks beat vague ones.", icon: Wand2 },
      { title: "Run and preview your app", desc: "Getting a local dev server up and seeing your changes live in the browser.", icon: Terminal },
      { title: "Reading errors without panic", desc: "Errors are information. Paste them back to the AI and let it explain what broke.", icon: Bug },
    ],
  },
  {
    key: "intermediate",
    level: "Tier 2",
    label: "Intermediate",
    tagline: "Shape real features",
    blurb: "You can get an app running. Now learn to steer bigger changes without losing control of the codebase.",
    icon: Puzzle,
    grad: ["#a855f7", "#ec4899"],
    glow: "rgba(168,85,247,0.5)",
    lessons: [
      { title: "Break features into small asks", desc: "One clear change per prompt ships faster and is easier to review than one giant request.", icon: Puzzle },
      { title: "Work with an existing codebase", desc: "Giving the AI the right files and context so it edits in place instead of guessing.", icon: FolderGit2 },
      { title: "Commits as checkpoints", desc: "Basic git habits: commit before a risky change so you can always roll back.", icon: GitCommitHorizontal },
      { title: "Debug with evidence", desc: "Console logs, screenshots, and exact repro steps get a fix in one pass instead of five.", icon: Bug },
      { title: "A real polish pass", desc: "Spacing, color, and copy: the details that turn a prototype into something you'd show someone.", icon: PaintBucket },
    ],
  },
  {
    key: "advanced",
    level: "Tier 3",
    label: "Advanced",
    tagline: "Ship something real",
    blurb: "Move past single-page demos into apps with structure, data, and actual users.",
    icon: Rocket,
    grad: ["#eab308", "#f97316"],
    glow: "rgba(234,179,8,0.5)",
    lessons: [
      { title: "Structure a multi-page app", desc: "Routing, shared layouts, and organizing components so the project stays readable as it grows.", icon: Layers },
      { title: "Connect a real backend", desc: "Wiring up a database or API so your app remembers things between visits.", icon: Database },
      { title: "Auth, forms, and user data", desc: "Handling sign-in and user input safely, without inventing your own crypto.", icon: KeyRound },
      { title: "Deploy to the world", desc: "Getting your app off localhost and onto a real URL with Vercel or Netlify.", icon: Globe2 },
      { title: "Ship in public, get feedback", desc: "Sharing early, listening to real users, and turning that into your next prompt.", icon: Rocket },
    ],
  },
  {
    key: "pro",
    level: "Tier 4",
    label: "Pro",
    tagline: "Build like a team",
    blurb: "Work the way ZAO Devz teams do: delegating to agents, reviewing carefully, and building things others can build on.",
    icon: Crown,
    grad: ["#f43f5e", "#eab308"],
    glow: "rgba(244,63,94,0.5)",
    lessons: [
      { title: "Multi-agent workflows", desc: "Splitting big work across parallel AI agents instead of one long serial conversation.", icon: Blocks },
      { title: "Reviewing AI-generated code", desc: "What to actually check before you trust a change: correctness, security, and simplicity.", icon: ShieldCheck },
      { title: "Performance and edge cases", desc: "Thinking past the happy path so your app holds up under real-world use.", icon: Gauge },
      { title: "Build reusable components", desc: "Writing lessons and libraries other builders can pick up and extend.", icon: Users },
      { title: "Mentor the next builder", desc: "The fastest way to level up is teaching someone else what just clicked for you.", icon: Crown },
    ],
  },
];

export interface VibeBuild {
  name: string;
  creator: string;
  tier: string;
  description: string;
  url: string;
}

/**
 * Community builds made from the vibe-coding lessons. Empty until the first
 * submission is reviewed and approved — see the submit CTA on the page.
 */
export const VIBE_BUILDS: VibeBuild[] = [];
