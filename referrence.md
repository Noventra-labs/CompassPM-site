Here's the complete, detailed prompt you can paste directly into Cursor, v0, Claude, or any code assistant:

***

Build the complete marketing website for **CompassPM by Noventra** (noventra.org.in). This is a B2B SaaS product — an AI-native product and project management workspace ("Cursor for PMs"). The site must feel **minimal, modern, premium, and purposeful** — no stock photos, no heavy illustrations, no video backgrounds. Let motion, typography, glassmorphism, and one Three.js scene do all the visual work.

***

## GLOBAL DESIGN SYSTEM

```
Background:     #09090B  (zinc-950, near-black)
Surface:        #18181B  (zinc-900)
Surface-2:      #27272A  (zinc-800)
Border:         rgba(255,255,255,0.06)
Accent:         #6366F1  (indigo-500)
Accent-glow:    rgba(99,102,241,0.15)
Accent-dark:    #4F46E5  (indigo-600)
Text-primary:   #FAFAFA
Text-muted:     #71717A  (zinc-500)
Text-secondary: #A1A1AA  (zinc-400)
Error/Problem:  rgba(239,68,68,0.15)  (rose tint)
Success:        rgba(34,197,94,0.15)  (green tint)

Font:           Inter (body, 400/500)
                Geist Sans or Cal Sans (headings, 600/700)
Border-radius:  12px (cards), 8px (buttons), 999px (pills/badges)
Spacing:        8px base grid
Shadow:         0 0 24px rgba(99,102,241,0.15) for glow
Transition:     all 0.2s ease for micro-interactions
                all 0.4s cubic-bezier(0.16,1,0.3,1) for entrances
```

**Stack**: Next.js 15 + TypeScript + Tailwind CSS (App Router), Framer Motion (animations), React Three Fiber + Three.js (3D), Lucide React (icons). No external UI libraries (Shadcn primitives only if needed).

***

## SECTION 1 — NAVBAR

**Visual**
- Fixed top, full-width, height 64px, z-index 50.
- Background: `rgba(9,9,11,0.55)` + `backdrop-filter: blur(20px)`.
- Bottom border: `1px solid rgba(255,255,255,0.06)`.
- Left: `Noventra` wordmark in white semi-bold (18px) + small `CompassPM` indigo pill badge (10px, `#6366F1` bg, white text, rounded-full, px-2 py-0.5).
- Center (desktop): nav links — Product · Agents · How it works · Roadmap · FAQ.
  - Link style: zinc-400, hover white, 14px, tracking-wide.
  - Active section: small 4px indigo dot below link.
- Right: `Login` ghost button (zinc-400 border, white text) + `Get early access` filled indigo button.
  - CTA button: `bg-indigo-500 hover:bg-indigo-600`, subtle `box-shadow: 0 0 16px rgba(99,102,241,0.35)` on hover.
- Mobile: hamburger icon, drawer slides in from right.

**Animations**
- Mount: entire navbar fades in + slides down from y:-8 over 0.3s.
- Scroll past 80px: background opacity transitions from 0.55 → 0.92 over 0.2s.
- CTA button: `scale(1.03)` on hover, glow pulse keyframe (subtle, 2s loop).
- Mobile drawer: `x: 320 → 0` slide-in with Framer Motion.

***

## SECTION 2 — HERO

**Layout**
- Full viewport height (100vh), two columns on desktop (60% text / 40% canvas), stacked on mobile.
- No background image — just `#09090B` with one soft radial gradient bloom:
  `radial-gradient(ellipse 60% 50% at 70% 50%, rgba(99,102,241,0.08), transparent)`

**Text content (left column)**
```
[pill badge]     "Private beta · Now open →"   (indigo border, indigo text, animated arrow)
[h1 line 1]      Find every gap.
[h1 line 2]      Fix everything
[h1 line 3]      in one command.
[subheadline]    CompassPM by Noventra connects to Jira, Notion,
                 Confluence and Slack — scans your workspace for
                 mismatches, then proposes precise multi-file fixes
                 with diff previews and full source citations.
[CTAs]           [Get early access]   [▶ Watch demo]
[trust strip]    "No migrations  ·  Free early access  ·  Works with your stack"
```

**Typography**
- h1: 72px desktop / 44px mobile, font-weight 700, line-height 1.1, letter-spacing -0.02em.
- Subheadline: 18px, zinc-400, line-height 1.6, max-width 480px.
- Trust strip: 13px, zinc-500, spaced with · dividers.

**Three.js scene (right column)**
- Canvas: full column height, transparent background.
- Scene: 7 floating nodes representing — Jira, Notion, Feedback, Ideas, Roadmap, PRDs, Slack.
- Node style: icosahedron geometry (radius 0.18), material: `MeshPhysicalMaterial` with:
  - `color: #6366F1`, `metalness: 0.2`, `roughness: 0.1`, `transmission: 0.6`, `transparent: true`, `opacity: 0.85`.
  - Soft point light above (white, intensity 1.2) + ambient light (indigo tint, intensity 0.4).
- Node labels: HTML overlays (`<Html>` from @react-three/drei) — small white text, 11px, zinc-400.
- Connections: `THREE.Line` between nodes, `LineBasicMaterial` white at opacity 0.12.
- Particles on lines: 3–5 small `THREE.Points` per line traveling from node to node (lerp animation).
- Motion:
  - Each node bobs vertically: `y += Math.sin(time * 0.8 + phaseOffset) * 0.004` per frame.
  - Entire scene rotates slowly: `scene.rotation.y += 0.001` per frame.
  - Mouse parallax: scene shifts `±0.15` on x/y based on normalized cursor position (smooth lerp).
- Hover on node: scale up to 1.3 + color shifts to white + connected lines pulse to opacity 0.5.
- Performance: no shadows, no post-processing, max 500 vertices total. Use `frameloop="demand"` in Canvas.

**Animations**
- Badge: `x: -12 → 0, opacity: 0 → 1`, 0.3s, delay 0.1s.
- h1 words: each word wraps in a `<span>`, staggered `y: 24 → 0, opacity: 0 → 1`, 0.05s stagger, starts at 0.2s.
- Subheadline: `y: 16 → 0, opacity: 0 → 1`, 0.4s, delay 0.5s.
- CTAs: `y: 12 → 0, opacity: 0 → 1`, 0.3s, delay 0.7s.
- Trust strip: fade-in only, delay 0.9s.
- Three.js canvas: `opacity: 0 → 1` over 0.8s after mount.
- Scroll chevron at bottom center: bouncing `y: 0 → 6 → 0` loop, 1.5s infinite.

***

## SECTION 3 — PROBLEM → SOLUTION

**Layout**
- 2-column side-by-side cards, full section width, zinc-900 section background.
- Section title above: "Your stack is powerful — but full of blind spots" (h2, centered, zinc-100).
- Left card (Problems): `border: 1px solid rgba(239,68,68,0.2)`, `background: rgba(239,68,68,0.04)`.
- Right card (Solutions): `border: 1px solid rgba(99,102,241,0.2)`, `background: rgba(99,102,241,0.04)`.
- Both cards: `backdrop-blur-sm`, `border-radius: 16px`, `padding: 32px`.

**Content**
```
Left card "The reality":          Right card "With CompassPM":
❌ PRDs conflict with calls        ✅ Unified context via RAG
❌ Jira Done, roadmap says Planned ✅ Gap Detective finds drift
❌ Feedback lost in Slack/tickets  ✅ Triage agent clusters themes
❌ AI that only generates text     ✅ Composer with diffs + citations
```

**Animations**
- Both cards: `x: -48 → 0` (left) and `x: 48 → 0` (right), `opacity: 0 → 1`, triggered by scroll enter (Framer Motion `whileInView`), `viewport: { once: true, amount: 0.3 }`.
- Each bullet: stagger `y: 8 → 0, opacity: 0 → 1`, 0.06s per item, starts after card enters.
- Hover on problem bullet: `text-decoration: line-through`, subtle rose glow on ❌.
- Hover on solution bullet: indigo glow on ✅ icon, slight `x: 4` shift on text.

***

## SECTION 4 — CORE VALUE PILLARS

**Layout**
- 3 equal-width cards in a row (stacked on mobile).
- Section background: `#09090B` (back to base).
- Section label above cards: small zinc-500 uppercase tracking-widest text "WHY COMPASSPM".
- Section title: "From 'we think' to 'we know'" (h2, white, centered).

**Card spec**
- Background: `#18181B`, border-radius: 16px, padding: 32px.
- Top accent bar: 3px × 48px indigo rectangle at top-left of card (not full width, just a small accent line).
- Icon: 40px square, minimal Lucide icon (Search / GitBranch / Plug2), indigo color.
- Heading: 18px, white, font-weight 600.
- Body: 15px, zinc-400, 3 lines max.
- No images, no screenshots.

**Content**
```
Card 1: Search icon    "Find the gaps"
         Gap Detective and Integrity Checker continuously
         scan Jira, Notion, and feedback for contradictions
         and missed opportunities.

Card 2: GitBranch icon "Fix everything safely"
         Composer Mode generates minimal unified diffs across
         PRDs, tickets, and roadmap items. Review, approve,
         and sync back with full audit trail.

Card 3: Plug2 icon     "Works on your stack"
         CompassPM plugs into Jira, Linear, Notion, Confluence,
         and Slack without replacing them. Zero migration.
```

**Animations**
- Cards: stagger `y: 32 → 0, opacity: 0 → 1`, 0.1s each, `whileInView`.
- Hover: `translateY(-6px)`, `box-shadow: 0 12px 40px rgba(99,102,241,0.18)`, 0.2s ease.
- Icon: `scale(1.1)` on card hover.

***

## SECTION 5 — AGENTS (7 CARDS)

**Layout**
- Section background: `#18181B`.
- Section label: "THE TEAM INSIDE COMPASSPM" (zinc-500, uppercase).
- Section title: "Seven AI agents that actually do the work" (h2, white, centered).
- Grid: 3 columns on desktop, 2 on tablet, 1 on mobile. Last card (7th) centered in its row.

**Card spec**
- Background: `#09090B`, border: `1px solid rgba(255,255,255,0.07)`, border-radius: 14px, padding: 24px.
- Top-right: small `Agent` pill badge (zinc-700 bg, zinc-400 text, 10px).
- Left: large emoji-style icon (36px) with unique accent color.
- Agent name: 16px, font-weight 600, white.
- Description: 13px, zinc-400, 2 lines max.
- Bottom: small colored accent line matching agent color (full card width, 2px, border-radius 0 0 14px 14px).

**Agent colors + icons**
```
Composer:          #6366F1 indigo    ✦ GitDiff icon
Gap Detective:     #F59E0B amber     🔍 Search icon
Sync Orchestrator: #06B6D4 cyan      ⚙ RefreshCw icon
Feedback Triage:   #EC4899 pink      📊 MessageSquare icon
Roadmap Planner:   #8B5CF6 violet    📈 Map icon
Integrity Checker: #22C55E green     🛡 ShieldCheck icon
Sprint Groomer:    #F97316 orange    ⚡ Zap icon
```

**Background detail**
- Behind the grid: one large soft CSS blob shape (absolute, no pointer-events):
  `background: radial-gradient(ellipse 80% 60% at 50% 50%, rgba(99,102,241,0.04), transparent)`
  animated with `@keyframes blob { 0%,100% { transform: scale(1) translate(0,0) } 50% { transform: scale(1.05) translate(12px,-8px) } }` — 12s ease infinite.

**Animations**
- Cards: stagger `y: 24 → 0, opacity: 0 → 1`, 0.06s each, `whileInView`.
- Hover: border color shifts to agent's accent at 40% opacity + `box-shadow: 0 0 20px [agent-color-at-15%]`.
- Click: card scales to `1.02`, shows one extra line of detail (Framer Motion `AnimatePresence` height expand), then collapses on click-away.

***

## SECTION 6 — HOW IT WORKS

**Layout**
- Section background: `#09090B`.
- Vertical timeline on desktop: centered SVG line with 4 step nodes.
- Each step: step number badge (left) + content block (right), connected by horizontal connector to the vertical line.
- Step number badge: 48px circle, `border: 2px solid #6366F1`, white text, indigo inner glow.
- Content block: zinc-900 card, no outer border, padding 24px, icon + heading + 2-line description.

**Steps**
```
1. Plug icon        "Connect your tools"
                    Securely connect Jira, Linear, Notion,
                    Confluence, and Slack via OAuth.

2. Database icon    "Index your workspace"
                    CompassPM builds a unified map linking
                    feedback to ideas, ideas to roadmap, roadmap to delivery.

3. Search icon      "Agents scan for gaps"
                    Gap Detective, Integrity Checker, and Feedback
                    Triage run on schedule to find drift and missed themes.

4. GitMerge icon    "Review diffs and apply"
                    Composer Mode proposes minimal changes.
                    Review, approve, and sync back with full citations.