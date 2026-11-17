# TheZAODEVZapp

The ZAO DEVZ site ("ThaZao Devs"): the dev team's front page. It covers ZABAL Gamez, Vibe Code, who the team builds for, and the app store of ZAO apps.

- Live: https://the-zaodev-zapp-new.vercel.app
- Started in Lovable (Vite, React, TypeScript, shadcn/ui, Tailwind). Supabase folder included.

## Pages

Home, Apps, Build, Learn, Projects, Team, VibeCode, Work, Join, Contact.

## Run it

```
npm install
npm run dev     # local
npm test        # vitest
npm run build
```

Copy `.env.example` to `.env` for the Supabase keys.

## Status

Active but not canonical for thezao.com: the ZAO front door is being rebuilt in [bettercallzaal/zao-website](https://github.com/bettercallzaal/zao-website) (decided 21 Oct 2026). Open cleanup: the repo carries three lockfiles (package-lock.json, bun.lock, bun.lockb); pick one with a test deploy, and fill in or remove the stub pages (Contact, Join, Projects).
