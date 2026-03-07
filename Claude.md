# OCD Parent Coach — Full Website Specification

> **Domains:** OCDParentCoach.com (primary), OCDIQ.com (redirect / assessment landing)
> **Purpose:** An interactive, AI-powered platform that helps parents of children with OCD learn evidence-based strategies, track progress, and get real-time coaching — via web, WhatsApp, and Telegram.
> **Target Users:** Parents/caregivers of children (ages 4–18) with OCD or suspected OCD behaviors.

---

## Table of Contents

1. [Design Philosophy & Brand Identity](#1-design-philosophy--brand-identity)
2. [Information Architecture & Sitemap](#2-information-architecture--sitemap)
3. [Feature Specifications](#3-feature-specifications)
   - 3.1 AI Parent Coach (Live Chat)
   - 3.2 OCD IQ Assessment
   - 3.3 Situation Library
   - 3.4 Progress Tracker
   - 3.5 Learning Hub
   - 3.6 Community Forum
   - 3.7 Professional Directory
   - 3.8 Emergency Resources
4. [Page-by-Page Wireframe Descriptions](#4-page-by-page-wireframe-descriptions)
5. [Technical Architecture](#5-technical-architecture)
6. [Data Models](#6-data-models)
7. [API Endpoints](#7-api-endpoints)
8. [AI System Prompt & Behavior Guidelines](#8-ai-system-prompt--behavior-guidelines)
9. [WhatsApp & Telegram Integration](#9-whatsapp--telegram-integration)
10. [Authentication & User Management](#10-authentication--user-management)
11. [Deployment & Infrastructure](#11-deployment--infrastructure)
12. [Phased Build Plan](#12-phased-build-plan)
13. [Legal, Ethical & Safety Considerations](#13-legal-ethical--safety-considerations)

---

## 1. Design Philosophy & Brand Identity

### Tone
- **Warm, grounded, and reassuring** — like talking to a knowledgeable friend, not a clinical manual.
- Never patronizing. Acknowledges how hard this is. Uses "we" language (we're in this together).
- Avoids medical jargon unless explained inline.

### Visual Direction
- **Aesthetic:** Soft, organic, modern — think "calm clarity." NOT clinical white/blue hospital vibes.
- **Color Palette:**
  - Primary: Warm sage green (#8FAE8B) — calm, grounded, natural
  - Secondary: Soft terracotta (#C4795B) — warmth, human connection
  - Accent: Deep navy (#2C3E6B) — trust, depth, professionalism
  - Background: Warm off-white (#FAF7F2) — gentle, not sterile
  - Text: Charcoal (#2D2D2D) — easy on eyes, not harsh black
  - Success/positive: Soft gold (#D4A853)
  - Alert/emergency: Muted coral (#D96B6B)

- **Typography:**
  - Headlines: "Fraunces" (serif, warm, slightly playful with optical sizing) — from Google Fonts
  - Body: "Source Sans 3" (clean, highly readable, friendly) — from Google Fonts
  - Monospace/data: "JetBrains Mono" for any tracker numbers/stats

- **Imagery Style:**
  - Illustrations over stock photos (custom line-art or watercolor-style illustrations)
  - Motifs: gentle waves, growing plants, puzzle pieces coming together, light through clouds
  - No photos of distressed children. Ever.

- **Layout Principles:**
  - Mobile-first, generous whitespace, max content width 720px for readability
  - Cards with soft shadows and rounded corners (border-radius: 16px)
  - Subtle entrance animations (fade-up on scroll, 200ms ease-out)
  - Sticky emergency resources bar (always accessible)

### Logo Concept
- Wordmark "OCD Parent Coach" in Fraunces with a small leaf or compass icon integrated into the "C" — symbolizing growth and guidance.

---

## 2. Information Architecture & Sitemap

```
OCDParentCoach.com
│
├── / (Landing Page / Home)
│   ├── Hero with value proposition + CTA
│   ├── "How It Works" section
│   ├── Feature highlights (cards)
│   ├── Testimonials / social proof
│   └── Newsletter signup
│
├── /coach (AI Parent Coach - Chat Interface)
│   ├── Web chat (full-page or modal)
│   ├── Conversation history sidebar
│   └── Quick-prompt suggestions
│
├── /assessment (OCD IQ Assessment)
│   ├── /assessment/child (Child OCD Screening)
│   ├── /assessment/parent (Parent Response Style Quiz)
│   └── /assessment/results/:id (Personalized Results)
│
├── /situations (Situation Library)
│   ├── Category listing (grid)
│   ├── /situations/:category (Filtered view)
│   └── /situations/:category/:slug (Individual scenario page)
│
├── /tracker (Progress Tracker) [auth required]
│   ├── Dashboard with charts
│   ├── /tracker/log (New entry form)
│   └── /tracker/history (Past entries)
│
├── /learn (Learning Hub)
│   ├── Content grid with filters (topic, age group, format)
│   ├── /learn/:slug (Individual article/video page)
│   └── /learn/paths (Guided learning paths)
│
├── /community (Community Forum) [auth required]
│   ├── Category listing
│   ├── /community/:category (Thread list)
│   ├── /community/:category/:thread (Thread view)
│   └── /community/new (New post form)
│
├── /directory (Professional Directory)
│   ├── Search + filter interface
│   └── /directory/:id (Therapist profile)
│
├── /emergency (Emergency Resources)
│   └── Always-accessible crisis information
│
├── /account [auth required]
│   ├── /account/profile
│   ├── /account/settings
│   ├── /account/chat-history
│   └── /account/children (Child profiles)
│
├── /about
├── /privacy
├── /terms
└── /disclaimer (Medical disclaimer)
```

**OCDIQ.com** redirects to `OCDParentCoach.com/assessment` with UTM tracking.

---

## 3. Feature Specifications

### 3.1 AI Parent Coach (Live Chat)

**Priority: Highest — this is the flagship feature.**

#### 3.1.1 Web Chat Widget
- **Placement:** Floating button (bottom-right) on all pages + dedicated `/coach` full-page view.
- **Floating widget:** Expandable chat bubble. Click to open a chat panel (400px wide, 600px tall on desktop; full-screen on mobile).
- **Full-page view (`/coach`):** Two-column layout — conversation history sidebar (left, collapsible) + active chat (right).
- **Input area:** Text input with send button, attachment icon (for sharing images of situations, e.g., a child's list of rituals), and microphone icon (speech-to-text via Web Speech API).
- **Message types:**
  - User text messages
  - AI text responses (with Markdown rendering — bold, lists, headers)
  - AI "action cards" — structured suggestions with title, description, and a "Try This" button that saves to the tracker
  - Quick-reply suggestion chips below the AI response (e.g., "Tell me more", "What if that doesn't work?", "Save this tip")
  - Typing indicator animation while AI processes
- **Conversation management:**
  - Auto-titled conversations (AI generates a title after 3 messages)
  - Users can rename, archive, or delete conversations
  - "New conversation" button always visible
  - Search across conversation history
- **Context awareness:**
  - AI has access to the user's child profiles (age, specific OCD subtypes, triggers)
  - AI references past conversations when relevant ("Last week you mentioned bedtime was getting easier...")
  - AI can reference content from the Situation Library and Learning Hub in responses, with links

#### 3.1.2 Key AI Behaviors
- Starts with empathy, then moves to practical strategy
- Uses ERP (Exposure and Response Prevention) and CBT principles
- Never diagnoses — always frames as "these patterns are consistent with..." and recommends professional evaluation
- Asks clarifying questions when the situation is ambiguous
- Offers a "quick mode" (direct answer) vs "coaching mode" (guided discovery through questions)
- Detects crisis language and immediately surfaces emergency resources
- Remembers and references the family's specific OCD profile across sessions

#### 3.1.3 WhatsApp Integration
- **Channel priority: #2**
- Users link their WhatsApp number in account settings
- Uses WhatsApp Business API (via provider like Twilio or 360dialog)
- Same AI model and context as web chat
- Conversations sync bidirectionally — a chat started on WhatsApp appears in web history and vice versa
- Supports text, voice messages (transcribed via Whisper API), and image messages
- Menu commands: `#new` (new conversation), `#history` (list recent), `#emergency` (crisis resources), `#help` (command list)
- Rate limit: Reasonable daily message cap for free tier, unlimited for premium

#### 3.1.4 Telegram Integration
- **Channel priority: #3**
- Telegram Bot via Bot API
- Same sync and AI behavior as WhatsApp
- Inline keyboard buttons for quick replies
- Commands: `/new`, `/history`, `/emergency`, `/help`, `/assess` (start OCD IQ assessment in-chat)

#### 3.1.5 Conversation History & Context Engine
- All messages stored with timestamps, channel (web/whatsapp/telegram), and conversation_id
- Vector embeddings generated for each conversation summary (for semantic search and AI context retrieval)
- AI receives a "context packet" before each response:
  ```
  {
    child_profiles: [...],
    recent_conversations_summary: "...",
    relevant_past_exchanges: [...],  // semantically similar to current query
    assessment_results: {...},
    tracker_recent_entries: [...],
    current_conversation_messages: [...]
  }
  ```
- Context window management: most recent 20 messages in full, older messages summarized

---

### 3.2 OCD IQ Assessment

**Accessible at `/assessment` and via OCDIQ.com redirect.**

#### 3.2.1 Child OCD Screening
- Based on established screening frameworks (CY-BOCS inspired, simplified for parents)
- **Structure:** 25–35 questions across domains:
  - Contamination / Washing
  - Checking / Doubting
  - Symmetry / Ordering
  - Intrusive Thoughts (age-appropriate framing for parents)
  - Hoarding
  - Rituals / Repetition
  - Avoidance Behaviors
  - Impact on Daily Life (school, social, family)
- **Question Format:** Mix of:
  - Likert scale (Never / Rarely / Sometimes / Often / Always)
  - Frequency selectors ("How many times per day?")
  - Yes/No with follow-up branching
  - Duration estimates ("How long do these behaviors typically last?")
- **UX:**
  - One question per screen (mobile-friendly, reduces overwhelm)
  - Progress bar at top
  - "I'm not sure" option on every question (doesn't penalize)
  - Back button to revise answers
  - Save progress (resume later if logged in)
  - Estimated time: "About 8 minutes"
- **Results page (`/assessment/results/:id`):**
  - Overall OCD IQ Score (0–100 scale with clear ranges)
  - Breakdown by domain (radar/spider chart)
  - Severity interpretation: Minimal / Mild / Moderate / Significant / Severe
  - Personalized insights: "Your child's strongest patterns appear in contamination and checking"
  - Recommended next steps (tailored to score):
    - Low: "Great news — here are some preventive strategies"
    - Moderate: "Consider these resources and monitoring tips"
    - High: "We recommend consulting a specialist" + link to directory
  - CTA: "Talk to our AI Coach about these results" (pre-loads context)
  - CTA: "Find a specialist near you" (links to directory)
  - Shareable (PDF download, printable) — useful for bringing to a therapist
  - **Bold disclaimer:** "This is not a clinical diagnosis. It is an awareness tool."

#### 3.2.2 Parent Response Style Quiz
- 15–20 questions evaluating how the parent currently responds to OCD behaviors
- Categories:
  - Accommodator (doing things to reduce child's anxiety)
  - Reassurer (providing excessive verbal reassurance)
  - Enforcer (forcing the child to stop behaviors)
  - Avoider (avoiding triggers altogether)
  - Coach (supportive, ERP-aligned responses)
- Results show the parent's dominant style with an explanation of how each style affects OCD
- Specific, actionable suggestions for shifting toward the "Coach" style
- Tone: Zero judgment. "Most parents naturally accommodate — it comes from love. Here's how to channel that love more effectively."

#### 3.2.3 Retake & Tracking
- Assessments can be retaken over time
- Results page shows historical scores with trend lines ("Your child's OCD IQ has decreased from 72 to 58 over 3 months — that's meaningful progress!")
- Integrated with Progress Tracker

---

### 3.3 Situation Library

**The practical playbook. Browse-able without an account.**

#### 3.3.1 Categories
- Contamination & Washing (handwashing, food fears, "dirty" objects)
- Checking & Doubting (door locks, homework, appliances)
- Bedtime & Sleep Rituals (exact sequences, repeated goodnights)
- School & Homework (perfectionism, re-reading, avoidance)
- Social Situations (fear of saying something wrong, avoiding friends)
- Symmetry & Ordering (arranging objects, evening-up behaviors)
- Intrusive Thoughts (age-appropriate framing: "scary thoughts")
- Reassurance Seeking ("Are you sure?", "Is this okay?", repeated questions)
- Mealtime & Food-Related (contamination, specific food rules)
- Clothing & Getting Dressed (specific items, discomfort, rituals)
- Family Routines (morning routine, leaving the house, transitions)
- Magical Thinking ("If I don't do X, something bad will happen")

#### 3.3.2 Individual Scenario Pages
Each scenario page includes:
- **Title:** "My child washes their hands until they're raw"
- **The Setup:** Brief description of the typical scenario
- **What's Happening (OCD Mechanics):** Simple explanation of the OCD cycle in this situation
- **What NOT to Do:** Common parent mistakes (with compassion — "It's natural to want to help, but...")
- **What to Try Instead:** 3–5 graded strategies from gentle to advanced
  - Each strategy has: a name, step-by-step instructions, an example script ("You might say: '...")
  - Difficulty badge: Starter / Intermediate / Advanced
- **When It Gets Tough:** What to expect (extinction bursts, increased anxiety initially)
- **When to Get Help:** Clear indicators that professional support is needed
- **Related Situations:** Links to similar scenarios
- **"Ask the Coach" button:** Opens AI chat pre-loaded with this scenario's context
- **Community link:** "See how other parents handle this" → links to tagged forum threads

#### 3.3.3 Search & Filter
- Full-text search
- Filter by: category, child age range (4–7, 8–12, 13–18), severity, strategy difficulty
- Sort by: most viewed, newest, alphabetical

---

### 3.4 Progress Tracker

**Auth required. The parent's private journal and data dashboard.**

#### 3.4.1 Logging an Entry
Fields:
- **Date & Time** (defaults to now)
- **Child** (select from child profiles — supports multiple children)
- **Trigger / Situation** (free text + suggested tags from Situation Library categories)
- **OCD Behavior Observed** (free text + tags)
- **Intensity** (1–10 slider with emoji faces)
- **Duration** (approximate: < 5 min, 5–15 min, 15–30 min, 30–60 min, > 1 hour)
- **Your Response** (free text + tag from Parent Response Styles: Accommodated, Reassured, Redirected, Used ERP, Other)
- **Outcome** (How did it resolve? Free text)
- **Mood After** (Parent's mood: emoji selector)
- **Notes** (optional free text)

Quick-log mode: Just intensity + trigger tag + response tag (for when you don't have time for a full entry). Takes 15 seconds.

#### 3.4.2 Dashboard
- **Time range selector:** Last 7 days / 30 days / 90 days / All time
- **Charts:**
  - Episode frequency over time (line chart)
  - Average intensity over time (line chart)
  - Duration distribution (bar chart)
  - Parent response style breakdown (pie/donut chart)
  - Trigger category frequency (horizontal bar chart)
  - Time-of-day heatmap (when episodes cluster)
- **Insights (AI-generated):**
  - "Episodes have decreased 23% this month compared to last month"
  - "Bedtime triggers have become less intense — your ERP approach seems to be working"
  - "You've shifted from 60% accommodation to 35% — great progress"
- **Streaks & Encouragement:**
  - "You've logged 14 days in a row — consistency helps you see the bigger picture"
  - Gentle nudge if no logs in 3+ days (optional push notification)

#### 3.4.3 Export
- Export data as CSV or PDF report
- "Share with Therapist" — generates a formatted summary PDF with charts, suitable for bringing to appointments

---

### 3.5 Learning Hub

**Structured educational content. Browsable without an account.**

#### 3.5.1 Content Types
- **Articles** (800–1500 words, reading time shown)
- **Videos** (embedded, 3–10 minutes, with transcripts)
- **Infographics** (single-image visual explainers)
- **Worksheets** (downloadable PDFs — e.g., "ERP Ladder Template")
- **Audio** (podcast-style, for listening while driving)

#### 3.5.2 Topics
- Understanding OCD (what it is, what it isn't, brain science simplified)
- ERP Explained (what it is, why it works, how to support it at home)
- Accommodation (what it is, why it backfires, how to reduce it gradually)
- Age-Specific Guides (OCD in preschoolers, elementary, tweens, teens)
- OCD Subtypes Deep Dives (one for each major subtype)
- Sibling Impact (how to support other children in the family)
- School Strategies (IEPs, 504 plans, communicating with teachers)
- Medication Overview (SSRIs for OCD in children — what to know)
- Self-Care for Parents (burnout prevention, couples impact, support groups)
- When to Seek Help (and how to find the right therapist)
- Success Stories (anonymous, with permission — showing that it gets better)

#### 3.5.3 Learning Paths
Curated sequences of content for specific journeys:
- "Just Learned My Child Has OCD" (5-part starter path)
- "Starting ERP at Home" (8-part guided path)
- "Reducing Accommodation" (6-part path)
- "Preparing for a Therapist Visit" (3-part path)
- "Supporting a Teenager with OCD" (6-part path)

Progress tracking on learning paths (checkmarks, percentage complete).

#### 3.5.4 Content Page Layout
- Clean reading experience (max-width 680px, large body text 18px)
- Table of contents sidebar (desktop) / dropdown (mobile)
- Estimated reading/watching time
- "Key Takeaways" box at top
- "Related Situations" links at bottom
- "Discuss This" link to forum
- "Ask the Coach" floating button

---

### 3.6 Community Forum

**Auth required. Anonymous participation option available.**

#### 3.6.1 Categories
- Introductions ("Tell us your story")
- Daily Wins (celebrating small victories)
- Help & Advice (asking for peer guidance)
- Specific OCD Subtypes (sub-forums for each)
- School & Education
- Therapy Experiences
- Medication Discussions
- Self-Care Corner (for parents)
- Partner/Co-Parent Support
- Teen Section (for parents of older children)
- Off-Topic (general parenting, life)

#### 3.6.2 Features
- **Anonymous mode:** Users can post anonymously (still logged in for moderation, but display name hidden)
- **Post types:** Discussion, Question (can be marked "Answered"), Poll, Victory (celebratory posts with confetti animation)
- **Reactions:** Heart, Hug, Lightbulb, "Me Too" — no downvotes
- **Threaded replies** with quote functionality
- **Bookmarks** — save helpful threads
- **Tagging:** Posts tagged with relevant OCD subtypes, child ages, topics
- **Search:** Full-text search with filters
- **Mentions:** @username notifications
- **Pinned posts:** Important resources, community guidelines
- **Weekly threads:** "Weekly Wins Wednesday", "Question Friday"

#### 3.6.3 Moderation
- AI-assisted moderation: flags potentially harmful content (dangerous advice, crisis language, spam)
- Community guidelines prominently displayed
- Report button on every post/comment
- Moderator roles (volunteer parents + admin)
- Auto-flag: Any post mentioning self-harm, suicidal ideation → immediate mod alert + auto-response with emergency resources
- No medical advice enforcement: Auto-reminder on medication discussions ("Always consult your child's doctor")

---

### 3.7 Professional Directory

**Browsable without an account. No auth required.**

#### 3.7.1 Therapist Profiles
- Name, credentials (PsyD, LCSW, etc.), photo
- Specializations (OCD subtypes, age ranges)
- Treatment approaches (ERP, CBT, ACT, medication management)
- Insurance accepted
- Location (city, state, zip) + map pin
- Telehealth availability (yes/no/hybrid)
- Website link
- Contact method (phone, email, booking link)
- Bio/description
- Optional: "Verified by IOCDF" badge (if affiliated with International OCD Foundation)

#### 3.7.2 Search & Filter
- **Search by:** Location (zip/city/state), name, keyword
- **Filter by:** Specialty, insurance, telehealth, age range treated, gender, language
- **Sort by:** Distance, rating, name
- **Map view** + list view toggle

#### 3.7.3 Data Sources
- Initial population: IOCDF therapist directory (with permission/scraping ethics considered)
- Therapists can claim and update their own profiles (free)
- User reviews (moderated, verified accounts only)
- "Suggest a Therapist" form for community submissions

---

### 3.8 Emergency Resources

**Always accessible. No auth required. Zero friction.**

#### 3.8.1 Persistent UI Element
- **Sticky bar/banner** at the top of every page (collapsible but always 1 click away)
- Text: "In crisis? Get immediate help →" with phone icon
- Clicking expands to full emergency panel

#### 3.8.2 Emergency Page (`/emergency`)
Contents:
- **988 Suicide & Crisis Lifeline:** Call or text 988 (US)
- **Crisis Text Line:** Text HOME to 741741
- **IOCDF Resources:** Link to IOCDF crisis page
- **When to go to the ER:** Clear, bullet-pointed indicators
- **What to do during a severe OCD episode:** De-escalation steps
  - Keep your voice calm and low
  - Don't try to reason with OCD in the moment
  - Be physically present without engaging with rituals
  - Wait for the wave to pass, then offer comfort
- **What NOT to do during a crisis:** Common mistakes
- **After the crisis:** Next-day steps (contact therapist, log in tracker, self-care)
- **International resources:** Expandable section with country-specific hotlines
- **"Talk to someone now":** Links to online chat services

#### 3.8.3 AI Integration
- If the AI chat detects crisis keywords (self-harm, suicidal, "can't go on", "hurting themselves"), it:
  1. Immediately pauses normal coaching
  2. Displays emergency resources inline in the chat
  3. Asks: "It sounds like things are really hard right now. Is anyone in immediate danger?"
  4. Does NOT attempt to provide therapy — redirects to human professionals
  5. Logs the interaction for safety review (with user notification)

---

## 4. Page-by-Page Wireframe Descriptions

### 4.1 Home Page (`/`)

```
┌──────────────────────────────────────────────────┐
│ [Nav: Logo | Coach | Assessment | Situations |   │
│        Learn | Community | Directory | Login]     │
│ [Emergency banner: "In crisis? Get help → 988"]  │
├──────────────────────────────────────────────────┤
│                                                  │
│   ┌──────────────────────────────────────────┐   │
│   │           HERO SECTION                   │   │
│   │                                          │   │
│   │  "You're not alone in this."             │   │
│   │                                          │   │
│   │  Subtitle: AI-powered guidance for       │   │
│   │  parents navigating childhood OCD.       │   │
│   │  Evidence-based. Compassionate. 24/7.    │   │
│   │                                          │   │
│   │  [Talk to Our AI Coach]  [Take the       │   │
│   │                           OCD IQ Test]   │   │
│   │                                          │   │
│   │  Subtle illustration: parent and child   │   │
│   │  walking together on a winding path      │   │
│   └──────────────────────────────────────────┘   │
│                                                  │
│   ── "How It Works" ──                           │
│   Three cards in a row:                          │
│   [1. Understand]     [2. Strategize]            │
│   "Learn what's       "Get personalized          │
│    driving your        guidance from our          │
│    child's OCD"        AI coach"                  │
│                                                  │
│   [3. Track & Grow]                              │
│   "Monitor progress                              │
│    and celebrate                                  │
│    small wins"                                    │
│                                                  │
│   ── Feature Highlights ──                       │
│   Grid of 6 cards with icons:                    │
│   [AI Coach] [OCD IQ Test] [Situation Library]   │
│   [Progress Tracker] [Learning Hub] [Community]  │
│                                                  │
│   ── Testimonials ──                             │
│   Carousel of anonymous parent quotes            │
│   "I finally understood why my responses          │
│    were making it worse. This changed             │
│    everything." — Parent of a 9-year-old         │
│                                                  │
│   ── Newsletter Signup ──                        │
│   "Weekly tips in your inbox"                    │
│   [Email input] [Subscribe]                      │
│                                                  │
│   ── Footer ──                                   │
│   Links | Privacy | Terms | Disclaimer |         │
│   Social icons | © 2026 OCD Parent Coach         │
└──────────────────────────────────────────────────┘
```

### 4.2 AI Coach Page (`/coach`)

```
┌──────────────────────────────────────────────────┐
│ [Nav bar]                                        │
├─────────────┬────────────────────────────────────┤
│  SIDEBAR    │  MAIN CHAT AREA                    │
│             │                                    │
│ [+ New Chat]│  ┌────────────────────────────┐    │
│             │  │ Welcome message:            │    │
│ Search...   │  │ "Hi! I'm your OCD Parent   │    │
│             │  │  Coach. I'm here to help    │    │
│ Today       │  │  you navigate your child's  │    │
│ · Bedtime   │  │  OCD with evidence-based    │    │
│   rituals   │  │  strategies. What's on      │    │
│             │  │  your mind today?"          │    │
│ Yesterday   │  └────────────────────────────┘    │
│ · School    │                                    │
│   avoidance │  Quick prompts:                    │
│ · Checking  │  [My child won't stop checking]   │
│   behaviors │  [Bedtime is a nightmare]          │
│             │  [How do I stop accommodating?]    │
│ Last Week   │  [Explain ERP to me]               │
│ · Hand      │                                    │
│   washing   │                                    │
│             │  ┌─────────────────────┬───┬───┐   │
│ [Archive]   │  │ Type a message...   │ 🎤│ ➤ │   │
│             │  └─────────────────────┴───┴───┘   │
├─────────────┴────────────────────────────────────┤
│ Emergency bar (collapsible)                      │
└──────────────────────────────────────────────────┘
```

### 4.3 Assessment Page (`/assessment`)

```
┌──────────────────────────────────────────────────┐
│ [Nav bar]                                        │
├──────────────────────────────────────────────────┤
│                                                  │
│  Choose Your Assessment                          │
│                                                  │
│  ┌─────────────────────┐ ┌─────────────────────┐│
│  │  🧩 CHILD OCD       │ │  🪞 PARENT RESPONSE ││
│  │     SCREENING       │ │     STYLE QUIZ      ││
│  │                     │ │                     ││
│  │  Understand your    │ │  Discover how your  ││
│  │  child's OCD        │ │  reactions affect   ││
│  │  patterns & severity│ │  your child's OCD   ││
│  │                     │ │                     ││
│  │  ~8 minutes         │ │  ~5 minutes         ││
│  │  25-35 questions    │ │  15-20 questions    ││
│  │                     │ │                     ││
│  │  [Start Screening]  │ │  [Start Quiz]       ││
│  └─────────────────────┘ └─────────────────────┘│
│                                                  │
│  ℹ️ These are awareness tools, not clinical      │
│     diagnoses. Results can guide conversation    │
│     with your child's healthcare provider.       │
│                                                  │
│  Previously completed? [View Past Results]       │
│                                                  │
└──────────────────────────────────────────────────┘
```

**Question Screen (during assessment):**
```
┌──────────────────────────────────────────────────┐
│ [═══════════░░░░░░░░░░░░] 35% complete           │
│                                                  │
│  Question 9 of 25                                │
│                                                  │
│  How often does your child feel compelled to     │
│  check things (e.g., locks, homework, that       │
│  appliances are off)?                            │
│                                                  │
│  ○ Never                                         │
│  ○ Rarely (once a week or less)                  │
│  ○ Sometimes (a few times a week)                │
│  ○ Often (daily)                                 │
│  ○ Always (multiple times daily)                 │
│  ○ I'm not sure                                  │
│                                                  │
│           [← Back]           [Next →]            │
│                                                  │
└──────────────────────────────────────────────────┘
```

### 4.4 Situation Library (`/situations`)

```
┌──────────────────────────────────────────────────┐
│ [Nav bar]                                        │
├──────────────────────────────────────────────────┤
│                                                  │
│  Situation Library                               │
│  "Real scenarios. Real strategies."              │
│                                                  │
│  [🔍 Search situations...]                       │
│                                                  │
│  Filters: [Age ▾] [Category ▾] [Severity ▾]     │
│                                                  │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐        │
│  │ 🧼       │ │ 🔒       │ │ 🌙       │        │
│  │Contami-  │ │Checking  │ │Bedtime   │        │
│  │nation    │ │& Doubt   │ │Rituals   │        │
│  │12 guides │ │9 guides  │ │8 guides  │        │
│  └──────────┘ └──────────┘ └──────────┘        │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐        │
│  │ 📚       │ │ 💬       │ │ 🔄       │        │
│  │School &  │ │Reassur-  │ │Symmetry  │        │
│  │Homework  │ │ance      │ │& Order   │        │
│  │10 guides │ │7 guides  │ │6 guides  │        │
│  └──────────┘ └──────────┘ └──────────┘        │
│  ... more categories ...                         │
│                                                  │
└──────────────────────────────────────────────────┘
```

### 4.5 Progress Tracker Dashboard (`/tracker`)

```
┌──────────────────────────────────────────────────┐
│ [Nav bar]                                        │
├──────────────────────────────────────────────────┤
│                                                  │
│  Progress Tracker           [+ Log Entry]        │
│  Tracking: [Child name ▾]   [7d|30d|90d|All]     │
│                                                  │
│  ┌──────────────────────────────────────────┐    │
│  │  AI INSIGHT                              │    │
│  │  "Episodes are down 18% this month.      │    │
│  │   Bedtime has improved most. Keep going!" │    │
│  └──────────────────────────────────────────┘    │
│                                                  │
│  ┌────────────────────┐ ┌────────────────────┐   │
│  │ Episodes Over Time │ │ Avg Intensity      │   │
│  │ [Line chart]       │ │ [Line chart]       │   │
│  └────────────────────┘ └────────────────────┘   │
│                                                  │
│  ┌────────────────────┐ ┌────────────────────┐   │
│  │ Your Response Style│ │ Top Triggers       │   │
│  │ [Donut chart]      │ │ [Horizontal bars]  │   │
│  └────────────────────┘ └────────────────────┘   │
│                                                  │
│  ┌──────────────────────────────────────────┐    │
│  │ Time-of-Day Heatmap                      │    │
│  │ [24hr × 7day grid with color intensity]  │    │
│  └──────────────────────────────────────────┘    │
│                                                  │
│  Recent Entries:                                 │
│  [Entry cards with date, trigger, intensity...]  │
│                                                  │
│  [Export CSV] [Generate Therapist Report PDF]    │
│                                                  │
└──────────────────────────────────────────────────┘
```

---

## 5. Technical Architecture

### 5.1 Stack Recommendation

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| **Frontend** | Next.js 14+ (App Router) | SSR for SEO, React ecosystem, great DX |
| **Styling** | Tailwind CSS + shadcn/ui | Consistent, customizable, fast |
| **State Management** | Zustand or React Context | Lightweight, sufficient for this scale |
| **Backend / API** | Next.js API Routes + tRPC (optional) | Co-located, type-safe |
| **Database** | PostgreSQL (via Supabase or Neon) | Relational data, robust, scalable |
| **Vector Store** | Supabase pgvector or Pinecone | Conversation embeddings for AI context |
| **Auth** | NextAuth.js (Auth.js v5) or Supabase Auth | Social login, email/password, magic links |
| **AI / LLM** | Anthropic Claude API (claude-sonnet-4-20250514) | High quality, safety features, long context |
| **Embeddings** | OpenAI text-embedding-3-small or Anthropic embeddings | For semantic search over conversations |
| **Real-time** | Supabase Realtime or Socket.io | Chat streaming, live forum updates |
| **File Storage** | Supabase Storage or AWS S3 | PDF exports, uploaded images |
| **WhatsApp** | Twilio WhatsApp Business API | Reliable, well-documented |
| **Telegram** | Telegram Bot API (direct) | Free, straightforward |
| **Email** | Resend or SendGrid | Transactional emails, newsletters |
| **Search** | Meilisearch or Algolia | Full-text search for situations, forum, directory |
| **Analytics** | PostHog or Plausible | Privacy-friendly analytics |
| **Hosting** | Vercel (frontend) + Railway/Fly.io (workers) | Easy deployment, edge functions |
| **CDN** | Vercel Edge / Cloudflare | Performance |

### 5.2 Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         CLIENTS                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐       │
│  │   Web    │  │  Mobile  │  │ WhatsApp │  │ Telegram │       │
│  │ Browser  │  │  Browser │  │   App    │  │   App    │       │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘       │
│       │              │             │              │              │
└───────┼──────────────┼─────────────┼──────────────┼──────────────┘
        │              │             │              │
        ▼              ▼             ▼              ▼
┌───────────────────────────┐ ┌────────────────────────────┐
│     NEXT.JS APPLICATION   │ │   MESSAGING WORKERS        │
│                           │ │                            │
│  ┌─────────────────────┐  │ │  ┌────────────────────┐    │
│  │   App Router (SSR)  │  │ │  │  WhatsApp Webhook  │    │
│  │   Pages & Layouts   │  │ │  │  Handler (Twilio)  │    │
│  └─────────────────────┘  │ │  └────────────────────┘    │
│  ┌─────────────────────┐  │ │  ┌────────────────────┐    │
│  │   API Routes        │  │ │  │  Telegram Bot       │    │
│  │   /api/chat         │  │ │  │  Handler            │    │
│  │   /api/assessment   │  │ │  └────────────────────┘    │
│  │   /api/tracker      │  │ │                            │
│  │   /api/forum        │  │ │  Both workers use the same │
│  │   /api/directory    │  │ │  AI service & DB layer     │
│  │   /api/auth         │  │ │                            │
│  └─────────────────────┘  │ └────────────┬───────────────┘
│                           │              │
└───────────┬───────────────┘              │
            │                              │
            ▼                              ▼
┌───────────────────────────────────────────────────────────┐
│                    SERVICE LAYER                           │
│                                                           │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   │
│  │  AI Service  │  │  Auth Service│  │  Search      │   │
│  │  (Claude API │  │  (NextAuth)  │  │  Service     │   │
│  │  + Context   │  │              │  │  (Meili)     │   │
│  │  Builder)    │  │              │  │              │   │
│  └──────────────┘  └──────────────┘  └──────────────┘   │
│                                                           │
└───────────────────────┬───────────────────────────────────┘
                        │
                        ▼
┌───────────────────────────────────────────────────────────┐
│                    DATA LAYER                              │
│                                                           │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   │
│  │  PostgreSQL  │  │  pgvector    │  │  File Storage│   │
│  │  (Supabase)  │  │  (Embeddings)│  │  (S3)        │   │
│  │              │  │              │  │              │   │
│  │  Users       │  │  Conversation│  │  PDFs        │   │
│  │  Messages    │  │  Vectors     │  │  Images      │   │
│  │  Assessments │  │              │  │  Exports     │   │
│  │  Tracker     │  │              │  │              │   │
│  │  Forum       │  │              │  │              │   │
│  │  Directory   │  │              │  │              │   │
│  └──────────────┘  └──────────────┘  └──────────────┘   │
│                                                           │
└───────────────────────────────────────────────────────────┘
```

---

## 6. Data Models

### 6.1 Users & Authentication

```sql
-- Users table (extends auth provider)
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  display_name VARCHAR(100),
  anonymous_name VARCHAR(100), -- auto-generated for forum anonymity
  avatar_url TEXT,
  phone VARCHAR(20),           -- for WhatsApp linking
  telegram_chat_id VARCHAR(50),-- for Telegram linking
  whatsapp_linked BOOLEAN DEFAULT FALSE,
  telegram_linked BOOLEAN DEFAULT FALSE,
  role VARCHAR(20) DEFAULT 'user', -- user, moderator, admin
  onboarding_complete BOOLEAN DEFAULT FALSE,
  notification_preferences JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Child profiles (a user can have multiple children)
CREATE TABLE child_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(100) NOT NULL,       -- first name or nickname
  age_years INTEGER,
  date_of_birth DATE,               -- optional, for auto-updating age
  gender VARCHAR(20),
  ocd_subtypes TEXT[],               -- array: ['contamination', 'checking', ...]
  known_triggers TEXT[],
  current_treatment TEXT,            -- e.g., "ERP with Dr. Smith, started Jan 2026"
  medications TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

### 6.2 AI Chat

```sql
-- Conversations
CREATE TABLE conversations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  child_id UUID REFERENCES child_profiles(id),  -- optional: which child this is about
  title VARCHAR(255),
  channel VARCHAR(20) NOT NULL DEFAULT 'web',    -- web, whatsapp, telegram
  status VARCHAR(20) DEFAULT 'active',           -- active, archived, deleted
  summary TEXT,                                  -- AI-generated conversation summary
  summary_embedding VECTOR(1536),                -- for semantic search
  message_count INTEGER DEFAULT 0,
  last_message_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Messages
CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id UUID REFERENCES conversations(id) ON DELETE CASCADE,
  role VARCHAR(20) NOT NULL,          -- user, assistant, system
  content TEXT NOT NULL,
  content_type VARCHAR(20) DEFAULT 'text', -- text, action_card, image, voice_transcript
  metadata JSONB DEFAULT '{}',        -- action card data, voice original URL, etc.
  channel VARCHAR(20) NOT NULL,       -- web, whatsapp, telegram
  tokens_used INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for fast conversation loading
CREATE INDEX idx_messages_conversation ON messages(conversation_id, created_at);
CREATE INDEX idx_conversations_user ON conversations(user_id, last_message_at DESC);
```

### 6.3 Assessments

```sql
CREATE TABLE assessments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  child_id UUID REFERENCES child_profiles(id),
  type VARCHAR(30) NOT NULL,          -- child_ocd_screening, parent_response_style
  status VARCHAR(20) DEFAULT 'in_progress', -- in_progress, completed
  answers JSONB NOT NULL DEFAULT '{}', -- {question_id: answer_value, ...}
  scores JSONB,                        -- computed after completion
  overall_score DECIMAL(5,2),
  interpretation TEXT,
  ai_insights TEXT,
  started_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Assessment questions (seeded, not user-generated)
CREATE TABLE assessment_questions (
  id VARCHAR(50) PRIMARY KEY,          -- e.g., "child_ocd_q1"
  assessment_type VARCHAR(30) NOT NULL,
  domain VARCHAR(50),                  -- e.g., "contamination", "checking"
  question_text TEXT NOT NULL,
  question_type VARCHAR(20),           -- likert, frequency, yes_no, duration
  options JSONB,                       -- [{value: 0, label: "Never"}, ...]
  order_index INTEGER,
  branching_logic JSONB,               -- optional: show if previous answer was X
  weight DECIMAL(3,2) DEFAULT 1.0
);
```

### 6.4 Progress Tracker

```sql
CREATE TABLE tracker_entries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  child_id UUID REFERENCES child_profiles(id),
  entry_date DATE NOT NULL,
  entry_time TIME,
  trigger_description TEXT,
  trigger_tags TEXT[],                 -- ['bedtime', 'contamination', ...]
  behavior_description TEXT,
  behavior_tags TEXT[],
  intensity INTEGER CHECK (intensity BETWEEN 1 AND 10),
  duration VARCHAR(20),               -- '<5min', '5-15min', '15-30min', '30-60min', '>60min'
  parent_response TEXT,
  parent_response_type VARCHAR(30),   -- accommodated, reassured, redirected, used_erp, other
  outcome TEXT,
  parent_mood VARCHAR(20),            -- great, good, okay, tough, awful
  notes TEXT,
  is_quick_log BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_tracker_user_date ON tracker_entries(user_id, child_id, entry_date DESC);
```

### 6.5 Situation Library

```sql
CREATE TABLE situation_categories (
  id VARCHAR(50) PRIMARY KEY,          -- slug: 'contamination-washing'
  name VARCHAR(100) NOT NULL,
  description TEXT,
  icon VARCHAR(10),                    -- emoji
  order_index INTEGER,
  situation_count INTEGER DEFAULT 0
);

CREATE TABLE situations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id VARCHAR(50) REFERENCES situation_categories(id),
  slug VARCHAR(200) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,         -- "My child washes hands until they're raw"
  setup TEXT NOT NULL,                 -- the scenario description
  ocd_mechanics TEXT NOT NULL,         -- what's happening explanation
  what_not_to_do TEXT NOT NULL,
  what_to_try JSONB NOT NULL,          -- [{name, steps, script, difficulty}, ...]
  when_it_gets_tough TEXT,
  when_to_get_help TEXT,
  age_ranges TEXT[],                   -- ['4-7', '8-12', '13-18']
  severity_level VARCHAR(20),          -- mild, moderate, severe
  related_situation_ids UUID[],
  view_count INTEGER DEFAULT 0,
  helpful_count INTEGER DEFAULT 0,
  published BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Full-text search index
CREATE INDEX idx_situations_search ON situations USING GIN(to_tsvector('english', title || ' ' || setup));
```

### 6.6 Learning Hub

```sql
CREATE TABLE learning_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug VARCHAR(200) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  content_type VARCHAR(20) NOT NULL,    -- article, video, infographic, worksheet, audio
  body TEXT,                            -- markdown for articles
  media_url TEXT,                       -- video/audio/image URL
  transcript TEXT,                      -- for videos/audio
  key_takeaways TEXT[],
  topics TEXT[],                        -- ['erp', 'accommodation', 'school']
  age_groups TEXT[],                    -- ['4-7', '8-12', '13-18']
  reading_time_minutes INTEGER,
  difficulty VARCHAR(20),               -- beginner, intermediate, advanced
  related_situation_ids UUID[],
  view_count INTEGER DEFAULT 0,
  published BOOLEAN DEFAULT TRUE,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE learning_paths (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug VARCHAR(200) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  content_ids UUID[] NOT NULL,          -- ordered array of learning_content IDs
  estimated_minutes INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE learning_progress (
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  content_id UUID REFERENCES learning_content(id) ON DELETE CASCADE,
  completed BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMPTZ,
  PRIMARY KEY (user_id, content_id)
);
```

### 6.7 Community Forum

```sql
CREATE TABLE forum_categories (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  icon VARCHAR(10),
  order_index INTEGER,
  thread_count INTEGER DEFAULT 0
);

CREATE TABLE forum_threads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id VARCHAR(50) REFERENCES forum_categories(id),
  user_id UUID REFERENCES users(id),
  title VARCHAR(255) NOT NULL,
  body TEXT NOT NULL,
  post_type VARCHAR(20) DEFAULT 'discussion', -- discussion, question, poll, victory
  is_anonymous BOOLEAN DEFAULT FALSE,
  is_pinned BOOLEAN DEFAULT FALSE,
  is_locked BOOLEAN DEFAULT FALSE,
  is_answered BOOLEAN DEFAULT FALSE,          -- for question type
  tags TEXT[],
  reaction_counts JSONB DEFAULT '{"heart":0,"hug":0,"lightbulb":0,"metoo":0}',
  reply_count INTEGER DEFAULT 0,
  view_count INTEGER DEFAULT 0,
  last_reply_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE forum_replies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  thread_id UUID REFERENCES forum_threads(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id),
  parent_reply_id UUID REFERENCES forum_replies(id), -- for nested replies
  body TEXT NOT NULL,
  is_anonymous BOOLEAN DEFAULT FALSE,
  is_accepted_answer BOOLEAN DEFAULT FALSE,
  reaction_counts JSONB DEFAULT '{"heart":0,"hug":0,"lightbulb":0,"metoo":0}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE forum_reactions (
  user_id UUID REFERENCES users(id),
  target_type VARCHAR(10) NOT NULL,    -- thread, reply
  target_id UUID NOT NULL,
  reaction_type VARCHAR(20) NOT NULL,  -- heart, hug, lightbulb, metoo
  created_at TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY (user_id, target_type, target_id, reaction_type)
);

CREATE TABLE forum_reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  reporter_id UUID REFERENCES users(id),
  target_type VARCHAR(10) NOT NULL,
  target_id UUID NOT NULL,
  reason TEXT NOT NULL,
  status VARCHAR(20) DEFAULT 'pending', -- pending, reviewed, resolved, dismissed
  moderator_notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### 6.8 Professional Directory

```sql
CREATE TABLE therapists (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  credentials VARCHAR(100),            -- PsyD, LCSW, MD, etc.
  photo_url TEXT,
  bio TEXT,
  specializations TEXT[],              -- ['ocd', 'anxiety', 'erp', 'cbt']
  ocd_subtypes TEXT[],                 -- specific OCD subtypes they treat
  age_ranges TEXT[],                   -- ['4-7', '8-12', '13-18', 'adults']
  treatment_approaches TEXT[],         -- ['erp', 'cbt', 'act', 'medication']
  insurance_accepted TEXT[],
  city VARCHAR(100),
  state VARCHAR(50),
  zip VARCHAR(10),
  country VARCHAR(50) DEFAULT 'US',
  latitude DECIMAL(10,7),
  longitude DECIMAL(10,7),
  telehealth BOOLEAN DEFAULT FALSE,
  in_person BOOLEAN DEFAULT TRUE,
  phone VARCHAR(20),
  email VARCHAR(255),
  website TEXT,
  booking_url TEXT,
  iocdf_verified BOOLEAN DEFAULT FALSE,
  claimed_by_user_id UUID REFERENCES users(id), -- therapist claims their profile
  average_rating DECIMAL(3,2),
  review_count INTEGER DEFAULT 0,
  published BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE therapist_reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  therapist_id UUID REFERENCES therapists(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id),
  rating INTEGER CHECK (rating BETWEEN 1 AND 5),
  review_text TEXT,
  is_verified BOOLEAN DEFAULT FALSE,  -- verified as actual patient
  status VARCHAR(20) DEFAULT 'pending', -- pending, approved, rejected
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Spatial index for location-based search
CREATE INDEX idx_therapists_location ON therapists USING GIST (
  ST_SetSRID(ST_MakePoint(longitude, latitude), 4326)
);
```

---

## 7. API Endpoints

### 7.1 Authentication
```
POST   /api/auth/register          -- email/password registration
POST   /api/auth/login             -- email/password login
POST   /api/auth/social            -- OAuth (Google, Apple)
POST   /api/auth/magic-link        -- passwordless email link
POST   /api/auth/refresh           -- refresh JWT token
DELETE /api/auth/session           -- logout
```

### 7.2 User & Profile
```
GET    /api/user/profile           -- get current user profile
PATCH  /api/user/profile           -- update profile
GET    /api/user/children          -- list child profiles
POST   /api/user/children          -- add child profile
PATCH  /api/user/children/:id      -- update child profile
DELETE /api/user/children/:id      -- delete child profile
POST   /api/user/link-whatsapp     -- initiate WhatsApp linking
POST   /api/user/link-telegram     -- initiate Telegram linking
```

### 7.3 AI Chat
```
GET    /api/chat/conversations                -- list conversations (paginated)
POST   /api/chat/conversations                -- create new conversation
GET    /api/chat/conversations/:id            -- get conversation with messages
DELETE /api/chat/conversations/:id            -- delete conversation
PATCH  /api/chat/conversations/:id            -- update title, archive, etc.
POST   /api/chat/conversations/:id/messages   -- send message (returns streamed AI response)
GET    /api/chat/search?q=                    -- search across conversations
```

### 7.4 Assessment
```
GET    /api/assessment/questions/:type        -- get questions for assessment type
POST   /api/assessment/start                  -- start new assessment
PATCH  /api/assessment/:id                    -- save progress (partial answers)
POST   /api/assessment/:id/complete           -- submit and score
GET    /api/assessment/:id/results            -- get results
GET    /api/assessment/history                -- list past assessments
GET    /api/assessment/:id/pdf                -- download results as PDF
```

### 7.5 Progress Tracker
```
GET    /api/tracker/entries?child_id=&from=&to=  -- list entries (filtered)
POST   /api/tracker/entries                      -- create entry
PATCH  /api/tracker/entries/:id                  -- update entry
DELETE /api/tracker/entries/:id                  -- delete entry
GET    /api/tracker/stats?child_id=&from=&to=    -- aggregated statistics
GET    /api/tracker/insights?child_id=           -- AI-generated insights
GET    /api/tracker/export?format=csv|pdf        -- export data
```

### 7.6 Situation Library
```
GET    /api/situations/categories              -- list categories
GET    /api/situations?category=&age=&q=       -- list/search situations
GET    /api/situations/:slug                   -- get single situation
POST   /api/situations/:id/helpful             -- mark as helpful
```

### 7.7 Learning Hub
```
GET    /api/learn?topic=&age=&type=&q=         -- list/search content
GET    /api/learn/:slug                        -- get single content item
GET    /api/learn/paths                        -- list learning paths
GET    /api/learn/paths/:slug                  -- get learning path with progress
POST   /api/learn/:id/complete                 -- mark as completed
```

### 7.8 Community Forum
```
GET    /api/forum/categories                   -- list categories
GET    /api/forum/threads?category=&tag=&q=    -- list threads (paginated)
POST   /api/forum/threads                      -- create thread
GET    /api/forum/threads/:id                  -- get thread with replies
PATCH  /api/forum/threads/:id                  -- edit thread
DELETE /api/forum/threads/:id                  -- delete thread
POST   /api/forum/threads/:id/replies          -- add reply
PATCH  /api/forum/replies/:id                  -- edit reply
DELETE /api/forum/replies/:id                  -- delete reply
POST   /api/forum/reactions                    -- add reaction
DELETE /api/forum/reactions                    -- remove reaction
POST   /api/forum/reports                      -- report content
GET    /api/forum/bookmarks                    -- list bookmarked threads
POST   /api/forum/bookmarks/:threadId          -- bookmark thread
DELETE /api/forum/bookmarks/:threadId          -- remove bookmark
```

### 7.9 Professional Directory
```
GET    /api/directory?q=&zip=&specialty=&insurance=&telehealth=  -- search therapists
GET    /api/directory/:id                      -- get therapist profile
POST   /api/directory/suggest                  -- suggest a therapist
POST   /api/directory/:id/reviews              -- submit review
POST   /api/directory/:id/claim                -- therapist claims profile
```

### 7.10 Webhooks (External)
```
POST   /api/webhooks/twilio          -- WhatsApp incoming messages
POST   /api/webhooks/telegram        -- Telegram bot updates
```

---

## 8. AI System Prompt & Behavior Guidelines

### 8.1 System Prompt (Core)

```
You are the OCD Parent Coach, an AI assistant designed to help parents and
caregivers of children with OCD. You provide evidence-based guidance rooted
in Exposure and Response Prevention (ERP) and Cognitive Behavioral Therapy
(CBT) principles.

## Your Role
- You are a knowledgeable, compassionate coach — NOT a therapist or doctor.
- You never diagnose. You help parents understand patterns and develop strategies.
- You always recommend professional help for moderate-to-severe cases.
- You speak as a warm, experienced guide who understands how hard this is.

## Your Knowledge Base
- OCD subtypes, presentations, and common patterns in children ages 4-18
- ERP principles and how parents can support ERP at home
- The accommodation cycle and how to break it gradually
- Age-appropriate strategies for different developmental stages
- When to escalate to professional help
- School accommodations (504 plans, IEPs)
- Medication basics (SSRIs for pediatric OCD) — general info only, never dosing

## Communication Style
- Lead with empathy: acknowledge the parent's feelings before jumping to advice
- Use plain language. Define clinical terms when you use them.
- Be specific and actionable. "Try this tonight..." is better than "Consider..."
- Use the child's name when provided.
- Match the parent's energy — if they're in crisis mode, be calm and direct.
  If they're curious, be exploratory and educational.
- Keep responses concise (2-4 paragraphs) unless the parent asks for more detail.
- Offer "Try This" action steps that parents can implement immediately.

## Safety Rules
- NEVER diagnose OCD or any other condition.
- NEVER recommend specific medication dosages.
- NEVER provide therapy (you support the therapeutic process, you don't replace it).
- NEVER dismiss a parent's concern, even if it seems minor.
- If you detect crisis language (self-harm, suicidal ideation, abuse, danger),
  IMMEDIATELY pause coaching, express concern, and provide emergency resources:
  - 988 Suicide & Crisis Lifeline (call/text 988)
  - Crisis Text Line (text HOME to 741741)
  - If a child is in immediate danger, advise calling 911.
- Include this disclaimer when providing substantial guidance:
  "I'm an AI coach, not a therapist. For personalized clinical guidance,
  please consult a mental health professional specializing in OCD."

## Context Awareness
You will receive context about the family including:
- Child profiles (name, age, OCD subtypes, triggers)
- Previous conversation summaries
- Relevant past exchanges
- Assessment results
- Recent tracker entries
Use this context naturally. Reference past conversations when relevant.
Don't ask questions you already have answers to.
```

### 8.2 Crisis Detection Keywords
The system should flag and trigger emergency protocol for messages containing:
- Explicit: "suicide", "kill myself", "kill themselves", "end it all", "want to die", "hurt myself", "hurt themselves", "self-harm", "cutting"
- Contextual (requires NLP analysis): "can't go on", "no way out", "everyone would be better off", "what's the point", "give up", extreme hopelessness about the child's future
- Abuse indicators: "hit my child", "locked them in", "punish", physical force descriptions

### 8.3 Response Generation Pipeline
1. Receive user message
2. Run crisis detection — if triggered, short-circuit to emergency response
3. Build context packet (child profiles, conversation history, semantic search of relevant past exchanges, tracker data)
4. Construct prompt: system prompt + context + conversation history + user message
5. Stream response from Claude API
6. Post-process: extract any "action card" structured data, generate quick-reply suggestions
7. Store message and update conversation summary

---

## 9. WhatsApp & Telegram Integration

### 9.1 WhatsApp (via Twilio)

#### Setup
1. Register a Twilio account with WhatsApp Business API access
2. Get a dedicated WhatsApp number
3. Configure webhook URL: `https://ocdparentcoach.com/api/webhooks/twilio`
4. Set up message templates (for session notifications, reminders)

#### Message Flow
```
User sends WhatsApp message
  → Twilio receives and forwards to webhook
  → Webhook handler:
    1. Identify user by phone number
    2. If unlinked phone: "Please link your account at ocdparentcoach.com/account"
    3. If linked: load user context, current conversation
    4. If voice message: transcribe via Whisper API
    5. Process through AI pipeline (same as web)
    6. Send response back via Twilio API
    7. Store messages in database (channel: 'whatsapp')
```

#### Special Commands
| Command | Action |
|---------|--------|
| `#new` | Start a new conversation |
| `#history` | List last 5 conversations with titles |
| `#switch [number]` | Switch to a different conversation |
| `#emergency` | Send emergency resources immediately |
| `#help` | List available commands |
| `#assess` | Start OCD IQ assessment (interactive Q&A) |
| `#quick` | Toggle quick mode (short, direct answers) |

#### Templates (Pre-approved by WhatsApp)
- Welcome message (after linking)
- Daily check-in reminder (opt-in)
- Weekly progress summary
- Assessment reminder

### 9.2 Telegram (via Bot API)

#### Setup
1. Create bot via @BotFather
2. Set webhook: `https://ocdparentcoach.com/api/webhooks/telegram`
3. Configure bot commands and inline keyboard

#### Bot Commands
| Command | Action |
|---------|--------|
| `/start` | Welcome + account linking instructions |
| `/new` | New conversation |
| `/history` | Recent conversations |
| `/emergency` | Crisis resources |
| `/assess` | Start assessment |
| `/help` | Command list |
| `/settings` | Notification preferences |

#### Inline Keyboards
- Quick-reply suggestions appear as inline keyboard buttons
- Assessment questions use inline keyboards for answer selection
- Conversation switching via inline keyboard

### 9.3 Cross-Channel Sync
- All channels share the same conversation store
- Starting a conversation on WhatsApp → continues on web (and vice versa)
- User sees unified history regardless of channel
- Channel field on each message allows filtering ("Show only web chats")

---

## 10. Authentication & User Management

### 10.1 Auth Methods
1. **Email + Password** — standard registration with email verification
2. **Magic Link** — passwordless email login (great for non-technical parents)
3. **Google OAuth** — one-click signup/login
4. **Apple Sign-In** — for iOS users
5. **Phone verification** — for linking WhatsApp/Telegram

### 10.2 Onboarding Flow
After first login:
1. **Welcome screen** — brief intro to what the platform offers
2. **Add a child profile** — name, age, any known OCD behaviors (optional to skip)
3. **Choose starting point:**
   - "I want to understand OCD better" → Learning Hub
   - "I need help with a specific situation" → AI Coach
   - "I want to assess my child's OCD" → Assessment
   - "Just let me explore" → Dashboard
4. **Optional:** Link WhatsApp/Telegram

### 10.3 Session Management
- JWT tokens with 7-day expiry, refresh tokens with 30-day expiry
- "Remember me" option extends to 90 days
- Active sessions visible in account settings
- Force logout from all devices option

### 10.4 Data Privacy
- Users can export all their data (GDPR-style)
- Users can delete their account and all associated data
- Chat history retention: indefinite by default, user can set auto-delete (30/90/365 days)
- Anonymized data may be used for improving AI responses (with opt-out)

---

## 11. Deployment & Infrastructure

### 11.1 Environments
| Environment | Purpose | URL |
|------------|---------|-----|
| Development | Local development | localhost:3000 |
| Staging | Pre-production testing | staging.ocdparentcoach.com |
| Production | Live site | ocdparentcoach.com |

### 11.2 Hosting
- **Frontend + API:** Vercel (auto-scaling, edge functions, preview deployments)
- **Database:** Supabase (managed Postgres, built-in auth option, pgvector, realtime)
- **Background Workers:** Railway or Fly.io (WhatsApp/Telegram webhook processing, scheduled jobs)
- **CDN:** Vercel Edge Network + Cloudflare (DNS, DDoS protection)
- **File Storage:** Supabase Storage or Cloudflare R2

### 11.3 CI/CD
- GitHub repository (monorepo)
- GitHub Actions for CI (lint, type-check, test)
- Vercel auto-deploy on push to `main` (production) and PR branches (preview)
- Database migrations via Prisma or Drizzle ORM

### 11.4 Monitoring & Alerting
- **Error tracking:** Sentry
- **Uptime:** BetterUptime or UptimeRobot
- **Analytics:** PostHog (self-hosted option for privacy)
- **Logging:** Vercel Logs + structured logging
- **AI monitoring:** Token usage tracking, response time, safety flag triggers
- **Alerts:** Discord/Slack webhook for critical errors, safety flags, high-severity forum reports

### 11.5 Performance Targets
| Metric | Target |
|--------|--------|
| LCP (Largest Contentful Paint) | < 2.5s |
| FID (First Input Delay) | < 100ms |
| CLS (Cumulative Layout Shift) | < 0.1 |
| AI response start (streaming) | < 1.5s |
| Page load (cached) | < 1s |
| Lighthouse score | > 90 (all categories) |

---

## 12. Phased Build Plan

### Phase 1: Foundation (Weeks 1–3)
- [ ] Project setup: Next.js, Tailwind, shadcn/ui, TypeScript
- [ ] Database setup: Supabase + Prisma/Drizzle schema
- [ ] Authentication: NextAuth with email + Google OAuth
- [ ] User profiles & child profiles CRUD
- [ ] Onboarding flow
- [ ] Landing page
- [ ] Basic layout: nav, footer, emergency banner
- [ ] Responsive design system (colors, typography, components)
- [ ] Deploy to Vercel (staging)

### Phase 2: AI Coach — Web (Weeks 3–5)
- [ ] Chat UI: full-page view + floating widget
- [ ] Claude API integration with streaming
- [ ] System prompt implementation
- [ ] Conversation CRUD (create, list, archive, delete)
- [ ] Message history and context loading
- [ ] Quick-reply suggestion chips
- [ ] Crisis detection and emergency response
- [ ] Context engine: child profiles injected into AI context
- [ ] Speech-to-text input (Web Speech API)

### Phase 3: OCD IQ Assessment (Weeks 5–6)
- [ ] Assessment question bank (seed data)
- [ ] Step-by-step assessment UI (one question per screen)
- [ ] Scoring algorithm
- [ ] Results page with charts (radar chart)
- [ ] Parent Response Style quiz
- [ ] Results PDF download
- [ ] Historical assessment comparison
- [ ] OCDIQ.com redirect setup

### Phase 4: Situation Library & Learning Hub (Weeks 6–8)
- [ ] Situation categories and content (seed 30–50 scenarios)
- [ ] Situation page template with strategies
- [ ] Search and filter functionality
- [ ] Learning Hub content structure
- [ ] Learning paths with progress tracking
- [ ] Content management (admin interface or markdown files)
- [ ] Cross-linking: situations ↔ learning content ↔ AI chat

### Phase 5: Progress Tracker (Weeks 8–9)
- [ ] Entry logging form (full + quick mode)
- [ ] Dashboard with charts (Recharts)
- [ ] AI-generated insights
- [ ] Time-of-day heatmap
- [ ] Export to CSV and PDF
- [ ] Therapist report generation
- [ ] Tracker data feeding into AI context

### Phase 6: Community Forum (Weeks 9–11)
- [ ] Forum categories and thread listing
- [ ] Thread creation and reply system
- [ ] Anonymous posting mode
- [ ] Reactions system
- [ ] Bookmarks and search
- [ ] Moderation tools (AI-assisted flagging, report queue)
- [ ] Auto-flag crisis content
- [ ] Weekly auto-threads

### Phase 7: Professional Directory (Weeks 11–12)
- [ ] Therapist data model and seed data
- [ ] Search with location-based filtering (PostGIS)
- [ ] Map view (Mapbox or Google Maps)
- [ ] Therapist profiles
- [ ] Review system
- [ ] Profile claiming flow
- [ ] "Suggest a Therapist" form

### Phase 8: Messaging Integrations (Weeks 12–14)
- [ ] WhatsApp Business API setup (Twilio)
- [ ] WhatsApp webhook handler
- [ ] WhatsApp account linking flow
- [ ] WhatsApp command system
- [ ] Voice message transcription
- [ ] Telegram bot setup
- [ ] Telegram webhook handler
- [ ] Telegram account linking
- [ ] Telegram inline keyboards
- [ ] Cross-channel conversation sync

### Phase 9: Vector Search & Advanced AI (Weeks 14–15)
- [ ] pgvector setup for conversation embeddings
- [ ] Conversation summarization pipeline
- [ ] Semantic search across chat history
- [ ] Enhanced context retrieval for AI (relevant past conversations)
- [ ] AI insights in tracker dashboard
- [ ] AI moderation in forum

### Phase 10: Polish & Launch (Weeks 15–16)
- [ ] Performance optimization (image optimization, code splitting, caching)
- [ ] SEO (meta tags, Open Graph, structured data, sitemap)
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Security audit (OWASP top 10 check)
- [ ] Legal pages (privacy policy, terms, medical disclaimer)
- [ ] Email templates (welcome, verification, newsletter)
- [ ] Analytics setup
- [ ] Error monitoring setup
- [ ] Final QA across devices and browsers
- [ ] Production deployment and DNS configuration
- [ ] Launch

---

## 13. Legal, Ethical & Safety Considerations

### 13.1 Medical Disclaimer
Prominently displayed on every page (footer), assessment pages, and AI chat:
> "OCD Parent Coach provides educational information and AI-assisted coaching. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of a qualified mental health provider with any questions you may have regarding your child's condition."

### 13.2 Privacy & Data
- Privacy policy detailing: what data is collected, how it's used, who has access, retention periods
- COPPA considerations: the platform is for parents, not children. No child accounts. Child data is stored in parent's profile.
- No selling or sharing of personal data with third parties
- Encryption at rest (database) and in transit (TLS)
- Regular security audits
- Data breach notification plan

### 13.3 AI Safety
- AI never claims to be human
- AI responses are clearly labeled as AI-generated
- Crisis detection system with human review pipeline
- Regular review of AI responses for accuracy and safety
- Feedback mechanism on every AI response (thumbs up/down + text feedback)
- AI does not store or repeat personal information in contexts where other users could see it

### 13.4 Forum Safety
- Community guidelines prohibiting: medical advice (vs peer support), harassment, misinformation, commercial spam
- Mandatory age verification (18+ to participate)
- Crisis content auto-detection and response
- Moderator training documentation
- Clear escalation path for concerning content

### 13.5 Content Accuracy
- All Situation Library and Learning Hub content reviewed by OCD-specialized clinicians before publication
- Content marked with "Last reviewed: [date]"
- Clear sourcing and references
- Regular content audits (quarterly)

---

## Appendix A: Environment Variables

```env
# App
NEXT_PUBLIC_APP_URL=https://ocdparentcoach.com
NEXT_PUBLIC_APP_NAME="OCD Parent Coach"

# Database
DATABASE_URL=postgresql://...
DIRECT_URL=postgresql://...

# Auth
NEXTAUTH_SECRET=...
NEXTAUTH_URL=https://ocdparentcoach.com
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
APPLE_CLIENT_ID=...
APPLE_CLIENT_SECRET=...

# AI
ANTHROPIC_API_KEY=...
OPENAI_API_KEY=...        # for embeddings (optional)

# Messaging
TWILIO_ACCOUNT_SID=...
TWILIO_AUTH_TOKEN=...
TWILIO_WHATSAPP_NUMBER=...
TELEGRAM_BOT_TOKEN=...

# Storage
SUPABASE_URL=...
SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...

# Search
MEILISEARCH_HOST=...
MEILISEARCH_API_KEY=...

# Email
RESEND_API_KEY=...

# Monitoring
SENTRY_DSN=...
POSTHOG_API_KEY=...
```

---

## Appendix B: Seed Content Required Before Launch

| Content Type | Minimum Count | Notes |
|-------------|--------------|-------|
| Situation Library scenarios | 40 | At least 3 per category |
| Learning Hub articles | 20 | Cover all major topics |
| Learning Hub videos | 5 | Key concepts: OCD 101, ERP, Accommodation |
| Learning paths | 3 | Starter, ERP at Home, Reducing Accommodation |
| Assessment questions (Child) | 30 | Clinician-reviewed |
| Assessment questions (Parent) | 18 | Clinician-reviewed |
| Forum categories | 11 | As specified in 3.6.1 |
| Therapist directory entries | 100+ | Seed from IOCDF directory |
| Community guidelines | 1 | Detailed document |
| FAQ page | 1 | 15-20 common questions |

---

*This spec was generated for the OCD Parent Coach project. It is intended to be used as a comprehensive build guide for Claude Code or any development team.*
