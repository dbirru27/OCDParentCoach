// =============================================================================
// Situation Library — Types, Categories, Data & Helpers
// =============================================================================

export type AgeRange = '4-7' | '8-12' | '13-18' | '18+';
export type Severity = 'mild' | 'moderate' | 'severe';
export type Difficulty = 'starter' | 'intermediate' | 'advanced';

export interface MistakeItem {
  mistake: string;
  explanation: string;
}

export interface Strategy {
  name: string;
  difficulty: Difficulty;
  steps: string[];
  exampleScript: string;
}

export interface AgeSpecificExample {
  ageRange: AgeRange;
  description: string;
  parentScript: string;
}

export interface Situation {
  slug: string;
  title: string;
  categorySlug: string;
  ageRanges: AgeRange[];
  severity: Severity;
  setup: string;
  ocdMechanics: string;
  whatNotToDo: MistakeItem[];
  strategies: Strategy[];
  whenItGetsTough: string;
  whenToGetHelp: string[];
  ageSpecificExamples: AgeSpecificExample[];
  relatedSituationSlugs: string[];
}

export interface SituationCategory {
  slug: string;
  name: string;
  description: string;
  icon: string;
  order: number;
}

// =============================================================================
// Categories
// =============================================================================

export const situationCategories: SituationCategory[] = [
  { slug: "contamination-washing", icon: "\u{1F9FC}", name: "Contamination & Washing", description: "Excessive handwashing, fear of germs, avoiding 'dirty' objects or places.", order: 1 },
  { slug: "checking-doubting", icon: "\u{1F512}", name: "Checking & Doubting", description: "Repeatedly checking locks, homework, or appliances due to persistent doubt.", order: 2 },
  { slug: "bedtime-rituals", icon: "\u{1F319}", name: "Bedtime & Sleep Rituals", description: "Rigid bedtime sequences, repeated goodnights, or routines that must be 'just right.'", order: 3 },
  { slug: "school-homework", icon: "\u{1F4DA}", name: "School & Homework", description: "Perfectionism, re-reading, erasing and rewriting, or avoiding schoolwork entirely.", order: 4 },
  { slug: "reassurance-seeking", icon: "\u{1F4AC}", name: "Reassurance Seeking", description: "Asking the same questions over and over \u2014 'Are you sure?' 'Is this okay?' \u2014 to relieve anxiety.", order: 5 },
  { slug: "symmetry-ordering", icon: "\u{1F504}", name: "Symmetry & Ordering", description: "Needing objects arranged 'perfectly,' evening things up, or distress when things feel unbalanced.", order: 6 },
  { slug: "social-situations", icon: "\u{1F465}", name: "Social Situations", description: "Fear of saying something wrong, avoiding friends, or replaying social interactions.", order: 7 },
  { slug: "intrusive-thoughts", icon: "\u{1F4AD}", name: "Intrusive Thoughts", description: "Unwanted, distressing thoughts or images that feel impossible to control \u2014 sometimes called 'scary thoughts.'", order: 8 },
  { slug: "mealtime-food", icon: "\u{1F37D}\uFE0F", name: "Mealtime & Food-Related", description: "Contamination fears around food, rigid food rules, or rituals during meals.", order: 9 },
  { slug: "clothing-dressing", icon: "\u{1F455}", name: "Clothing & Getting Dressed", description: "Insisting on specific clothing, discomfort that requires re-dressing, or getting-dressed rituals.", order: 10 },
  { slug: "family-routines", icon: "\u{1F3E0}", name: "Family Routines", description: "Rigid morning routines, difficulty leaving the house, or distress during transitions.", order: 11 },
  { slug: "magical-thinking", icon: "\u2728", name: "Magical Thinking", description: "Believing 'If I don't do X, something bad will happen' \u2014 connecting unrelated actions to feared outcomes.", order: 12 },
];

// =============================================================================
// Situations
// =============================================================================

export const situations: Situation[] = [
  // ---------------------------------------------------------------------------
  // CONTAMINATION & WASHING
  // ---------------------------------------------------------------------------
  {
    slug: "hands-raw",
    title: "My child washes their hands until they're raw",
    categorySlug: "contamination-washing",
    ageRanges: ["4-7", "8-12", "13-18"],
    severity: "severe",
    setup:
      "Your child washes their hands so frequently and intensely that their skin is cracked, red, and sometimes bleeding. They may wash for several minutes at a time, use scalding hot water, or go through soap at an alarming rate. You can see they're in pain, but they can't seem to stop.",
    ocdMechanics:
      "When your child touches something their OCD has labeled as \"contaminated,\" they experience a sudden spike of anxiety or disgust that feels unbearable. The OCD tells them that something terrible will happen — they'll get sick, spread germs to the family, or simply won't feel \"right\" — unless they wash thoroughly enough. Washing provides immediate but temporary relief, and that relief is what keeps the cycle spinning.\n\nThe problem is that OCD keeps moving the goalposts. What started as a quick wash after using the bathroom becomes a rigid ritual: a specific number of times, a certain water temperature, scrubbing until it \"feels clean enough.\" Over time the threshold for \"enough\" keeps rising, so the washing gets longer and more intense. The raw, cracked skin is actually a sign that OCD has hijacked your child's natural hygiene instincts and turned them into a compulsion.\n\nCritically, every time your child washes to relieve the anxiety, their brain learns that the anxiety was justified and that washing was the solution. This strengthens the obsession-compulsion loop rather than weakening it. The temporary relief never lasts, and the next wave of anxiety often arrives sooner and hits harder than the last.",
    whatNotToDo: [
      {
        mistake: "Locking away the soap or physically stopping them from washing",
        explanation:
          "Forcibly preventing the compulsion without teaching coping skills can cause panic, erode trust, and lead your child to find other ways to wash (using hand sanitizer, cleaning products, or even bleach). The goal is to help them choose to resist, not to force compliance.",
      },
      {
        mistake: "Reassuring them that their hands are clean enough",
        explanation:
          "It feels natural to say \"Your hands are fine, you just washed them.\" But reassurance becomes another compulsion — your child will need to hear it more and more often, and it never truly satisfies the OCD. You become part of the ritual.",
      },
      {
        mistake: "Ignoring the raw skin or hoping they'll grow out of it",
        explanation:
          "Severe hand-washing that causes tissue damage rarely resolves on its own. The physical harm is a clear signal that professional support is needed alongside your at-home strategies. Waiting can allow the OCD to expand into new areas.",
      },
      {
        mistake: "Showing frustration or disgust at their damaged hands",
        explanation:
          "Your child almost certainly already feels shame about their hands. Reacting with visible frustration confirms their fear that something is wrong with them, rather than understanding that something is wrong with the OCD. Keep your emotional response separate from your practical response.",
      },
    ],
    strategies: [
      {
        name: "Name the OCD bully together",
        difficulty: "starter",
        steps: [
          "Choose a calm, connected moment — not during or right after a washing episode — to talk about what's happening.",
          "Help your child give OCD a name or character (e.g., \"The Worry Monster,\" \"Bossy Brain,\" or whatever feels right to them). This externalizes the problem: it's not your child, it's the OCD.",
          "Practice phrases together: \"That's not me wanting to wash — that's the Worry Monster trying to boss me around.\"",
          "When you notice them heading to wash, gently reference the character: \"Is that you or is that the Worry Monster talking right now?\"",
          "Praise any moment of recognition, even if they still wash afterward. Awareness is the first real step.",
        ],
        exampleScript:
          "\"I've noticed your hands are really sore, and I can see that washing doesn't actually make you feel better for very long. I think there might be a Worry Monster that keeps telling you to wash more and more. It's not your fault — this Worry Monster is really tricky. Want to figure out how to boss it back together?\"",
      },
      {
        name: "Gradual delay and reduction",
        difficulty: "intermediate",
        steps: [
          "Together with your child, agree on a small, specific goal — for example, waiting 2 minutes before washing after a trigger, or reducing each wash by 30 seconds.",
          "Use a visual timer so the delay is concrete and external rather than a battle of wills.",
          "During the delay, offer a competing activity: squeezing a stress ball, doing 10 jumping jacks, telling you about their day. The goal is to ride the anxiety wave, not to distract from it entirely.",
          "After the delay period, they can wash if they still feel they need to — the point is building tolerance, not white-knuckling.",
          "Track successes on a simple chart. Gradually extend the delay or shorten the wash time as they build confidence.",
        ],
        exampleScript:
          "\"I know the OCD is screaming at you to wash right now. Let's try something brave — we'll set the timer for two minutes and you and I will do something together while we wait. If you still need to wash after the timer goes off, that's okay. But let's see if the Worry Monster gets a little quieter on its own.\"",
      },
      {
        name: "Competing response and skin care routine",
        difficulty: "intermediate",
        steps: [
          "Introduce a therapeutic hand cream or moisturizer as a replacement ritual. When the urge to wash hits, your child applies cream instead.",
          "Frame it as \"healing hands\" time — they're actively undoing the damage the OCD caused, which gives them a sense of agency.",
          "Pair the cream application with a brief mindfulness moment: \"Feel the cool cream. Notice what it feels like on each finger.\"",
          "This works because it acknowledges the urge, provides a physical action (so they're not just sitting with the discomfort), but doesn't reinforce the OCD cycle.",
          "Over time, the cream application can also become a cue that \"I'm choosing to take care of my hands, not obey the OCD.\"",
        ],
        exampleScript:
          "\"Your hands have been working so hard. Let's give them some kindness right now instead of more soap. Can you squeeze some of this cream out and really rub it in? Tell me how it feels — is it cold? Smooth? The OCD wants you to wash, but we're going to heal instead.\"",
      },
      {
        name: "Structured ERP exposures",
        difficulty: "advanced",
        steps: [
          "Work with your child (and ideally a therapist) to build an \"exposure ladder\" — a ranked list of contamination triggers from least scary to most scary.",
          "Start at the bottom of the ladder. For example: touching the kitchen counter and waiting 5 minutes before washing.",
          "Stay with your child during the exposure. Validate that the anxiety is real and uncomfortable, but express confidence that they can handle it.",
          "After the agreed waiting period, check in: \"Where's your anxiety now on a scale of 1 to 10?\" Usually it will have dropped, which teaches their brain that anxiety passes without washing.",
          "Move up the ladder only when the current step feels manageable. Celebrate each rung — this is genuinely hard, brave work.",
        ],
        exampleScript:
          "\"Today's challenge is touching the bathroom doorknob and then waiting ten minutes before washing. I know that sounds really hard — that's because it is. The OCD is going to yell at you, and your anxiety might go up to a 7 or 8. But I'm going to sit right here with you, and we're going to watch that number come down on its own. You're stronger than the Worry Monster thinks.\"",
      },
    ],
    whenItGetsTough:
      "When your child starts resisting the urge to wash, things often get worse before they get better. This is called an extinction burst, and it's actually a sign that the OCD is losing its grip. Your child may cry, beg, bargain, or get angry. They may say things like \"You don't care about me\" or \"I'll get sick and it'll be your fault.\" This is the OCD talking, not your child. Stay calm, stay warm, and stay the course. The anxiety will peak and then fall — every single time. Each time they ride that wave without washing, they're rewiring their brain to understand that the anxiety is uncomfortable but not dangerous. It is completely normal to feel like you're being cruel in these moments. You're not. You're being the bravest kind of loving parent there is.",
    whenToGetHelp: [
      "Their hands are cracked, bleeding, or showing signs of infection",
      "Hand-washing is taking more than 30 minutes total per day or is increasing in frequency",
      "They are avoiding activities, school, or social events because of contamination fears",
      "The washing rituals are spreading — now including arms, face, or full-body washing",
      "Your child is expressing hopelessness, saying things like \"I can't stop\" or \"I hate my brain\"",
    ],
        ageSpecificExamples: [
      {
        ageRange: "4-7",
        description:
          "Your preschooler or early-elementary child insists on washing hands after touching pets, playground equipment, or other children. They may cry or tantrum if you try to limit washing. Their small hands are visibly red and chapped, and they may resist holding your hand because theirs hurt.",
        parentScript:
          "I can see the Worry Monster is telling you your hands are dirty. Let's tell the Worry Monster we're only going to wash for the time it takes to sing 'Happy Birthday' once. I'll sing it with you.",
      },
      {
        ageRange: "8-12",
        description:
          "Your child washes hands between every class change at school, refuses to use school bathrooms that aren't 'clean enough,' and may be coming home with cracked, bleeding knuckles. Friends have started to notice and ask questions. They may resist hand cream because it feels 'contaminated.' Homework gets delayed because they wash before and after touching each school supply.",
        parentScript:
          "I notice your hands are really hurting. OCD is being a bully about this. What if we tried using soap just twice -- once before eating and once after the bathroom -- and see what happens? I know that sounds scary, but I think you're tougher than OCD thinks.",
      },
      {
        ageRange: "13-18",
        description:
          "Your teen uses hand sanitizer obsessively, keeps antibacterial wipes in their backpack, and may be washing hands in the school bathroom between every class. They might hide the damage with long sleeves or gloves. Their showers may take 45+ minutes. They avoid holding hands with a boyfriend or girlfriend, and may skip lunch to avoid touching cafeteria surfaces.",
        parentScript:
          "I've noticed you're going through a lot of sanitizer and your hands look painful. I'm not judging -- I know OCD makes this feel necessary. Can we talk about what your therapist might suggest as a first step? I want to help, but only in ways that actually help you get better.",
      },
    ],
    relatedSituationSlugs: [
      "wont-touch-surfaces",
      "hour-long-showers",
      "refuse-food-others-touched",
    ],
  },
  {
    slug: "wont-touch-surfaces",
    title: "They won't touch doorknobs, light switches, or public surfaces",
    categorySlug: "contamination-washing",
    ageRanges: ["4-7", "8-12", "13-18"],
    severity: "moderate",
    setup:
      "Your child uses their sleeve, elbow, or asks you to open every door. They avoid light switches, stair railings, shopping carts, and anything in public that other people have touched. What used to be a small quirk is now making everyday activities slow and stressful.",
    ocdMechanics:
      "Your child's OCD has created a mental map of the world divided into \"safe\" and \"contaminated\" zones. Public surfaces sit firmly in the contaminated category because other people — whose cleanliness is unknown — have touched them. The obsessive thought is usually some version of \"If I touch that, I'll pick up germs and get sick, or I'll contaminate everything else I touch afterward.\"\n\nThe compulsion here is avoidance rather than washing (though the two often travel together). By using sleeves, elbows, or getting someone else to touch the surface for them, your child gets short-term relief. But every time they avoid, OCD gets confirmation: \"See? That surface really was dangerous. Good thing you didn't touch it.\" The world of safe surfaces quietly shrinks.\n\nOver time the rules tend to expand. It may start with public restroom doors and grow to include any door someone else has used, then furniture at school, then items at home that a guest has touched. The avoidance requires more and more mental energy and planning, until your child's day is organized around what they can't touch rather than what they want to do.",
    whatNotToDo: [
      {
        mistake: "Opening doors and touching surfaces for them",
        explanation:
          "When you become your child's \"safe hands,\" you're accommodating the OCD. It feels helpful in the moment, but it teaches their brain that the surfaces truly are dangerous and that they can't cope on their own. You become a necessary part of the ritual.",
      },
      {
        mistake: "Carrying hand sanitizer everywhere as a compromise",
        explanation:
          "While this seems like a reasonable middle ground, it actually enables the contamination belief. It says: \"Yes, those surfaces are dirty, but we have a solution.\" The sanitizer becomes a safety behavior that prevents your child from learning that nothing bad happens without it.",
      },
      {
        mistake: "Lecturing them about how germs are everywhere and they can't avoid them all",
        explanation:
          "Logical arguments don't work against OCD because OCD isn't logical. Your child likely already knows, intellectually, that most surfaces are safe. The problem is that knowing and feeling are two different things. Lectures often increase shame without reducing compulsions.",
      },
      {
        mistake: "Forcing them to touch things without preparation or agreement",
        explanation:
          "Surprise exposures (\"Just touch it!\") damage trust and can make the fear worse. Effective exposure work is planned, gradual, and done with your child's understanding and buy-in. They need to feel like a partner in this, not a victim of it.",
      },
    ],
    strategies: [
      {
        name: "Build a \"touch hierarchy\" together",
        difficulty: "starter",
        steps: [
          "Sit down with your child during a calm moment and list out surfaces they avoid, from least scary to most scary.",
          "Rate each one on a 0–10 fear scale. A light switch at home might be a 3; a public restroom door handle might be a 9.",
          "Identify the easiest item on the list — something that's only a 2 or 3 — as a starting point.",
          "Just creating the list is therapeutic. It helps your child see that not all surfaces are equally scary, and it gives them a roadmap for getting braver.",
        ],
        exampleScript:
          "\"Let's be detectives and figure out the OCD's rules. Can you help me make a list of all the things the OCD says you can't touch? Then we'll rate how scary each one is. We're not going to do anything with the list today — we're just mapping out the Worry Monster's territory so we know where to start taking it back.\"",
      },
      {
        name: "Five-second finger touch challenges",
        difficulty: "intermediate",
        steps: [
          "Starting with a low-fear surface from the hierarchy, challenge your child to touch it with one fingertip for five seconds.",
          "Stay with them. Count out loud together. Keep your tone light and encouraging — this is a brave adventure, not a punishment.",
          "After the touch, don't let them wash or sanitize immediately. Set a 5-minute timer and do something together to let the anxiety naturally decrease.",
          "Ask them to rate their anxiety right after touching (maybe a 5) and then again after 5 minutes (maybe a 2). This teaches them that anxiety falls on its own.",
          "Repeat with the same surface until it feels boring, then move to the next item on the ladder.",
        ],
        exampleScript:
          "\"Okay, brave challenge time! The mission today is to touch the kitchen light switch with one finger for five seconds. I'll count with you. Ready? One... two... three... four... five! You did it! Now, how loud is the Worry Monster right now? A 5? Okay, let's play a quick card game and check back in.\"",
      },
      {
        name: "Model and narrate your own touching",
        difficulty: "starter",
        steps: [
          "Throughout the day, casually narrate when you touch surfaces: \"I'm grabbing this doorknob — no big deal.\" Don't direct it at your child; just let them observe.",
          "Occasionally, name a mild discomfort and move through it: \"That railing felt a little sticky. Oh well, I'll wash my hands when I get a chance.\" This models tolerating uncertainty.",
          "If your child notices and comments, keep it light: \"Yeah, I don't love touching sticky things, but my brain doesn't make a huge deal about it.\"",
          "Over time, this normalizes casual contact with surfaces and shows that tolerating small discomfort is something everyone does.",
        ],
        exampleScript:
          "\"Oh, hold on — let me grab this door for us. *touches doorknob* There we go. You know, I don't know who touched this last, but my brain just kind of shrugs about it. When the OCD is quieter for you, your brain will shrug about it too. It's something we can work on together.\"",
      },
      {
        name: "Contamination spreading exposure",
        difficulty: "advanced",
        steps: [
          "With your child's agreement, touch a \"contaminated\" surface together, then deliberately touch other items without washing — a book, a snack, your face.",
          "This is called \"contamination spreading\" and it directly challenges the OCD rule that contamination transfers infinitely.",
          "Stay with the discomfort together. Talk about what the OCD is predicting will happen and then observe what actually happens (nothing).",
          "Check back in an hour, the next morning, the next day: \"The OCD said we'd get sick. Did we?\" Building a track record of evidence is powerful.",
          "Only attempt this when your child is ready and has built some confidence from easier exposures. Never spring it on them.",
        ],
        exampleScript:
          "\"Here's today's boss-level challenge: we're both going to touch this door handle, and then — without washing — we're going to eat our afternoon snack. I know the OCD is going to scream about that. Let's see if what it predicts actually comes true. I'll do it with you. We're a team.\"",
      },
    ],
    whenItGetsTough:
      "As you start reducing accommodations — maybe you stop opening doors for them or stop carrying hand sanitizer — your child's anxiety will likely spike. They may become upset, accusatory, or even panicky. This is an extinction burst: the OCD is pushing back because its power is being threatened. It's like a toddler tantrum that gets louder right before the child gives up. The key is to be warm and steady. Acknowledge the fear (\"I can see this is really hard\"), express confidence in them (\"I know you can handle this\"), and hold the boundary with love. The spike is temporary. Each time they get through it, the next one is a little smaller.",
    whenToGetHelp: [
      "The avoidance is expanding to include surfaces at home that were previously fine",
      "They can no longer attend school, playdates, or activities because of surface fears",
      "They are requiring you or family members to follow decontamination rituals before interacting with them",
      "The avoidance is paired with increasing hand-washing, showering, or other cleaning compulsions",
      "They express feeling trapped or say things like \"I wish I were normal\"",
    ],
        ageSpecificExamples: [
      {
        ageRange: "4-7",
        description:
          "Your young child refuses to touch playground equipment, asks you to push elevator buttons, and won't pick up toys that other children have played with at daycare. They may use their shirt to open doors or cry if their bare skin touches a public surface. Going to the store means they cling to you rather than touch the cart.",
        parentScript:
          "I know the Worry Monster says that door is yucky. But look -- I'm touching it with my whole hand! The Worry Monster tells fibs. Want to try touching it with just one finger? I'll hold your other hand while you do it.",
      },
      {
        ageRange: "8-12",
        description:
          "Your child uses their sleeve to open every door at school, avoids the gym because of shared equipment, and won't touch library books other kids have handled. They may be falling behind in science class because they refuse to share lab supplies. Friends have started teasing them about being 'germaphobic,' and birthday parties are stressful because of all the shared surfaces.",
        parentScript:
          "I see you using your sleeve on that door again. That's OCD making the rules, not you. What if we practiced touching three doorknobs today with our bare hands and kept track of whether anything bad actually happened? We can make it a science experiment.",
      },
      {
        ageRange: "13-18",
        description:
          "Your teen has mapped out which surfaces at school are 'safe' and which are 'contaminated.' They may take longer routes between classes to avoid high-traffic doors, refuse to use school computers, and skip social events at restaurants or malls. They're embarrassed about the behavior and try to hide it, but you notice the avoidance patterns growing. They may have stopped driving because they can't touch the steering wheel without wiping it down first.",
        parentScript:
          "I notice you've been avoiding a lot of things lately. I'm not going to force anything, but I want you to know that I see how much energy this is taking from you. OCD is shrinking your world, and you deserve better. Would you be open to working on one small thing this week?",
      },
    ],
    relatedSituationSlugs: [
      "hands-raw",
      "changing-clothes-contamination",
      "wont-go-school-contamination",
    ],
  },
  {
    slug: "changing-clothes-contamination",
    title:
      "They insist on changing clothes after being near someone 'contaminated'",
    categorySlug: "contamination-washing",
    ageRanges: ["8-12", "13-18", "18+"],
    severity: "moderate",
    setup:
      "Your child changes their clothes — sometimes multiple times a day — after being near someone they consider \"dirty\" or \"contaminated.\" This might be after school, after a visitor leaves, or even after passing a stranger on the sidewalk. The laundry is overwhelming and the rules keep expanding.",
    ocdMechanics:
      "In your child's OCD logic, contamination doesn't just live on surfaces — it lives on people. Certain individuals (sometimes strangers, sometimes specific classmates, sometimes anyone who appears unwell) are categorized as sources of contamination. The OCD tells your child that being near these people transfers invisible \"dirtiness\" onto their clothing, which then threatens to spread to their body, their room, their safe spaces.\n\nChanging clothes becomes the compulsion that neutralizes this threat. The fresh clothes feel \"clean\" and \"safe,\" and the anxiety drops — but only until the next exposure. Over time, the definition of \"contaminated person\" tends to widen. What started as changing after sitting next to one specific classmate may expand to changing after any social contact, after being in any public space, or even after a family member comes home from outside.\n\nThe clothing change may also come with rules: the contaminated clothes must go directly in the wash (or a special hamper), the child may need to shower between changes, and they may designate certain clothes as \"indoor only\" or \"safe.\" These layers of rules are the OCD building a fortress, and each new rule makes the fortress harder to dismantle.",
    whatNotToDo: [
      {
        mistake: "Doing extra laundry to accommodate the clothing changes",
        explanation:
          "Running multiple loads a day to keep up with your child's need for clean clothes signals that you agree with OCD's contamination rules. You become the laundry service for the OCD. Gradually reducing accommodation (for example, doing laundry on your normal schedule only) is an important part of recovery.",
      },
      {
        mistake: "Agreeing to label certain people as 'safe' or 'not safe'",
        explanation:
          "If your child asks \"Is that person clean?\" or \"Was anyone sick at school today?\", answering enters you into the OCD's classification system. Any reassurance you give about a person's cleanliness feeds the obsession rather than resolving it.",
      },
      {
        mistake: "Allowing separate 'clean' and 'dirty' zones in the house",
        explanation:
          "If your child has designated their bedroom as a \"clean zone\" where only fresh clothes are allowed, maintaining this boundary reinforces OCD's contamination map. While it may feel like it keeps the peace, it gives OCD more territory to control.",
      },
      {
        mistake: "Shaming them for the behavior or the laundry volume",
        explanation:
          "Comments like \"That's ridiculous, you just put that on\" or complaints about the laundry feel like criticism of your child rather than the OCD. They already know it doesn't make logical sense. Shame drives the behavior underground rather than resolving it.",
      },
    ],
    strategies: [
      {
        name: "Map the contamination rules",
        difficulty: "starter",
        steps: [
          "During a calm conversation, help your child articulate the OCD's rules: Who counts as contaminated? What kind of contact triggers a change? Where do the contaminated clothes go?",
          "Write these rules down together as \"OCD's rules\" — not your child's rules. This externalization is important.",
          "Look at the list together and ask: \"Do you think these rules are making your life bigger or smaller?\" Most kids will recognize, even if reluctantly, that the rules are shrinking their world.",
          "Identify one rule that your child is willing to challenge first — the one that feels least terrifying to break.",
        ],
        exampleScript:
          "\"I want to understand the OCD's clothing rules so we can start pushing back on them together. Can you help me write them down? Not your rules — the OCD's rules. Let's see how many rules it's made... wow, that's a lot of rules for one brain to follow. Which one do you think we could bend first?\"",
      },
      {
        name: "Delay the clothing change",
        difficulty: "intermediate",
        steps: [
          "When your child wants to change after an exposure, agree to let them — but after a set delay. Start with 10 minutes.",
          "During the delay, do something engaging together: a game, a show, a walk. The goal is to let the anxiety peak and begin to fall naturally.",
          "After the timer goes off, check in: \"The OCD wanted you to change right away. How does it feel now?\" Often the urgency has decreased.",
          "If they still want to change, let them — but celebrate the delay. Each minute of tolerance is progress.",
          "Gradually increase the delay. Twenty minutes, then thirty, then an hour. Many children find that after an hour, they've forgotten about it.",
        ],
        exampleScript:
          "\"I know the OCD is saying you need to change right now because you were near someone at school. Let's try something: we'll set a timer for fifteen minutes, and you and I will play a round of that game you like. When the timer goes off, you can change if you still need to. But let's see what the OCD does when it doesn't get its way right away.\"",
      },
      {
        name: "Reduce laundry accommodation gradually",
        difficulty: "intermediate",
        steps: [
          "Explain to your child that you're going to do laundry on a normal schedule — say, every two days — rather than daily or multiple times daily.",
          "This means they'll need to wear some of the \"contaminated\" clothes again or run out of \"safe\" clothes. This is intentional but should be framed compassionately.",
          "Let them sit with the discomfort. You're not punishing them — you're helping them prove to their brain that wearing yesterday's clothes doesn't lead to anything bad.",
          "Be prepared for resistance. Acknowledge that it's hard: \"I know this feels really uncomfortable. I also know you can handle uncomfortable.\"",
        ],
        exampleScript:
          "\"Starting this week, I'm going to do laundry on Tuesdays and Fridays, just like I used to. I know the OCD wants clean clothes every day, but I'm not going to help the OCD anymore — I'm going to help you instead. That might feel hard at first, and that's okay. We'll get through the hard part together.\"",
      },
      {
        name: "Intentional contamination exposure",
        difficulty: "advanced",
        steps: [
          "With your child's agreement, plan an exposure where they stay in the same clothes after a triggering event for the entire day — no changing.",
          "Before the exposure, predict together what the OCD says will happen. Write it down.",
          "After the day, review: \"Did any of those predictions come true?\" Build the evidence file that OCD is a liar.",
          "Increase the challenge over time: wearing the same clothes two days in a row, sitting on the bed in \"outside\" clothes, mixing \"clean\" and \"contaminated\" laundry.",
          "This is advanced work and is most effective with therapist guidance, but empowered parents can support it at home.",
        ],
        exampleScript:
          "\"Today's experiment: you're going to come home from school and not change. Same clothes, all evening. The OCD is going to have a lot of opinions about that. Let's write down what it predicts — 'You'll get sick,' 'Your room will be contaminated.' And tomorrow morning, we'll check: did any of that actually happen?\"",
      },
    ],
    whenItGetsTough:
      "When you start limiting laundry or delaying clothing changes, expect the OCD to escalate. Your child might become frantic, tearful, or angry. They might try to do laundry themselves, hide dirty clothes, or refuse to sit on furniture in their \"contaminated\" outfit. This escalation is an extinction burst — the OCD is fighting harder because it's losing control. Remind yourself that your child's distress, while real and painful to watch, is temporary. The anxiety will peak and come down. Each time they stay in the clothes and nothing bad happens, their brain gets a small but crucial piece of evidence that the OCD was wrong. Be their steady anchor through the storm.",
    whenToGetHelp: [
      "They are changing clothes more than three times per day",
      "The contamination rules have expanded to include family members or close friends",
      "They are refusing to leave the house because they can't guarantee clean clothes upon return",
      "They are becoming aggressive or having meltdowns when clothing changes are delayed",
      "The behavior is impacting their ability to attend school or participate in activities",
    ],
        ageSpecificExamples: [
      {
        ageRange: "8-12",
        description:
          "Your child changes immediately after school, refuses to sit on furniture in their 'school clothes,' and insists that anything they wore outside goes directly into the washing machine. They may have separate 'indoor' and 'outdoor' clothing systems and get visibly anxious if a sibling sits on their bed after being outside. The laundry has tripled.",
        parentScript:
          "I can see the OCD wants you to change right now. Let's try something different today -- what if you stayed in your school clothes for 20 minutes while we have a snack? OCD says something bad will happen, but I don't think it will. Want to test it together?",
      },
      {
        ageRange: "13-18",
        description:
          "Your teen has an elaborate system of 'clean' and 'contaminated' clothing. They may shower and change completely after any social interaction, refuse to let friends into their room, and spend significant money on new clothes to have enough 'clean' options. They hide the behavior from peers but you see the overflowing hamper and the anxiety when someone sits on their bed. Dating feels impossible because physical proximity triggers a clothing change.",
        parentScript:
          "I know this system feels like it's keeping you safe, but I can see it's also keeping you stuck. I'm not going to run extra laundry loads anymore -- not to be mean, but because I love you too much to help OCD get stronger. Let's figure out a plan together.",
      },
      {
        ageRange: "18+",
        description:
          "Your adult child has taken clothing contamination rules to their apartment or dorm. They may have separate 'clean' and 'dirty' sections of their closet, require guests to change into provided clothing, or avoid going to classes because they can't guarantee a clothing change after. They may be spending significant money on laundry or new clothes, and roommate relationships are strained by the demands.",
        parentScript:
          "I love you, and I can hear how stressful this is. But when you ask me whether your clothes are contaminated, I'm not going to answer that anymore -- because my answer never actually makes it better, does it? What does your therapist say about building your tolerance for this?",
      },
    ],
    relatedSituationSlugs: [
      "wont-touch-surfaces",
      "only-safe-clothes",
      "hands-raw",
    ],
  },
  {
    slug: "refuse-food-others-touched",
    title: "They refuse to eat food others have touched or prepared",
    categorySlug: "contamination-washing",
    ageRanges: ["4-7", "8-12", "13-18", "18+"],
    severity: "moderate",
    setup:
      "Your child won't eat meals you've cooked, snacks a sibling has touched, or food served at restaurants or friends' homes. They may insist on preparing their own food, eating only packaged items, or watching you wash your hands before cooking. Mealtimes have become a battleground.",
    ocdMechanics:
      "Food is one of the most intimate forms of contact — it goes inside the body. For a child whose OCD centers on contamination, eating something that another person has handled can feel like voluntarily ingesting poison. The obsessive thought might be \"Their germs are on this food and will make me sick\" or a vaguer sense that the food is \"wrong\" or \"dirty\" in a way they can't fully articulate.\n\nThe compulsion is avoidance: refusing the food, insisting on sealed packages, requiring visible proof that hands were washed, or preparing food themselves. Some children develop elaborate inspection rituals — checking for stray hairs, examining every surface of a piece of fruit, sniffing food repeatedly. The temporary relief of eating only \"safe\" food is powerful, but the cost is enormous: nutritional restriction, social isolation (no eating at friends' houses, birthday parties become nightmares), and family tension at every meal.\n\nWhat makes food-related contamination OCD especially tricky is that our culture already has a lot of messaging around food safety, hygiene, and \"clean eating.\" The OCD latches onto these legitimate concepts and distorts them beyond recognition. Your child isn't being picky — their brain has turned normal food safety awareness into a prison.",
    whatNotToDo: [
      {
        mistake: "Preparing food exactly to their OCD's specifications",
        explanation:
          "Washing your hands three times while they watch, using only new utensils, letting them inspect every step — these accommodations feel like they're keeping the peace, but they confirm to your child's brain that the precautions are necessary. You end up cooking for the OCD, not for your family.",
      },
      {
        mistake: "Making separate meals to avoid conflict",
        explanation:
          "Preparing a separate \"safe\" meal alongside the family dinner seems kind, but it creates a two-tier system that entrenches the OCD. The child learns that family food is indeed contaminated and that they need special accommodation to survive.",
      },
      {
        mistake: "Sneaking 'contaminated' ingredients into their food",
        explanation:
          "If your child discovers you've tricked them into eating something they consider unsafe, the trust violation can set recovery back significantly. They may become even more vigilant and refuse to eat anything they haven't personally prepared.",
      },
      {
        mistake: "Getting into arguments about whether the food is clean",
        explanation:
          "Debating the cleanliness of the food engages with OCD on its own terms. The issue isn't whether the food is objectively clean — it's that OCD demands certainty about cleanliness that can never be fully achieved. Arguments exhaust everyone and resolve nothing.",
      },
    ],
    strategies: [
      {
        name: "Introduce 'OCD food rules' awareness",
        difficulty: "starter",
        steps: [
          "Help your child list all of OCD's food rules: who can prepare food, what needs to be sealed, how hands must be washed, what foods are off-limits.",
          "Externalize these as the OCD's rules. Ask: \"If the OCD went on vacation, what would you eat?\" This helps separate your child's true preferences from OCD-imposed restrictions.",
          "Identify which rules cause the least anxiety to break. Maybe eating a chip that a trusted family member handed them is a 3 out of 10, while eating at a restaurant is a 9.",
          "Use this as a roadmap for gradual exposure, starting with the lowest-anxiety food situations.",
        ],
        exampleScript:
          "\"I want to make a list of all the rules the OCD has about food. Not your rules — the OCD's rules. Like, does it have rules about who can cook? What about food at Grandma's house? Let's write them all down so we can see what we're dealing with. And then I'm curious — if the OCD magically disappeared for one day, what would you eat?\"",
      },
      {
        name: "Shared snack challenges",
        difficulty: "intermediate",
        steps: [
          "Start with low-stakes food — a bowl of popcorn, a bag of chips — that you and your child eat from together.",
          "Sit together and take turns reaching into the same bowl. Narrate casually: \"Mmm, this is good. Your turn.\"",
          "If your child hesitates, don't push. Just keep eating from the bowl yourself, modeling that it's safe.",
          "When they do eat from the shared bowl, don't make a big deal — treat it as completely normal. Over-praising can make it feel like they did something dangerous.",
          "Gradually increase the sharing: passing a sandwich, eating from the same plate, trying a bite of what you're having.",
        ],
        exampleScript:
          "\"Want to share this popcorn with me while we watch the movie? I'll grab some, you grab some — movie theater style. No rules, just popcorn.\"",
      },
      {
        name: "Gradual return to family meals",
        difficulty: "intermediate",
        steps: [
          "Set a clear, compassionate boundary: the family eats one meal together, the same food, prepared the normal way. Start with the meal that carries the least anxiety.",
          "Your child doesn't have to eat everything, but the same food is served to everyone. No separate preparation.",
          "Sit together. Keep the atmosphere light — talk about anything other than food or OCD.",
          "If they only eat a small amount, that's okay for now. The goal is participation, not plate-cleaning.",
          "Over time, expand to more meals. The consistency of a normal family meal routine itself becomes therapeutic.",
        ],
        exampleScript:
          "\"Tonight we're all having the same dinner. I made it the way I usually do. I know the OCD might have some opinions about that, and you don't have to eat everything. But this is our family meal and you're part of the family. Let's sit together and you eat whatever you're comfortable with tonight.\"",
      },
      {
        name: "Restaurant and social eating exposures",
        difficulty: "advanced",
        steps: [
          "Once home meals are going better, plan an exposure at a restaurant. Choose a familiar, low-pressure spot.",
          "Before going, acknowledge the challenge: \"This is going to be hard. The OCD doesn't know who made the food or how. That uncertainty is exactly what we're practicing tolerating.\"",
          "Order normally. Your child picks from the menu (not a pre-packaged option if possible).",
          "After the meal, do the prediction check: \"What did the OCD say would happen? Did it?\" Build that evidence file.",
          "Progress to eating at friends' houses, school cafeteria food, and birthday party food — the social situations where food avoidance causes the most isolation.",
        ],
        exampleScript:
          "\"This Saturday, we're going to go out for pizza together. I know the OCD is going to say we don't know who made it or how clean the kitchen is. And that's true — we don't know. But millions of people eat there and they're fine. Let's see if we can sit with that uncertainty and enjoy the pizza anyway. What does the OCD predict will happen? Let's write it down and check later.\"",
      },
    ],
    whenItGetsTough:
      "When you stop accommodating food-related OCD — no more separate meals, no more visible hand-washing rituals before cooking — your child may refuse to eat, become distressed, or accuse you of trying to make them sick. This is gut-wrenching for any parent. Remember that short-term hunger will not harm a healthy child, and the OCD is using your parental feeding instincts against you. Most children, when the accommodation is calmly and consistently withdrawn, will eventually eat. The anxiety around the food spikes and then falls, just like every other OCD anxiety. If food refusal persists for more than a day or you're concerned about nutrition, consult your child's therapist or pediatrician for guidance on managing this specific transition safely.",
    whenToGetHelp: [
      "Your child has lost weight or is showing signs of nutritional deficiency",
      "They are eating fewer than five different foods due to contamination fears",
      "Mealtimes consistently involve intense distress lasting more than 30 minutes",
      "They are unable to eat at school, parties, or any social setting",
      "The food rules are expanding to include new categories or new people",
    ],
        ageSpecificExamples: [
      {
        ageRange: "4-7",
        description:
          "Your young child pushes away food you've served, insisting on eating only items they've opened themselves -- crackers from sealed packages, fruit they've peeled. They refuse meals at grandparents' houses and birthday parties are distressing because they won't eat the cake. They may watch your hands anxiously while you prepare food and ask you to wash them again and again.",
        parentScript:
          "I know the Worry Monster is saying this food isn't safe, but Mommy/Daddy made it with clean hands and lots of love. Let's be brave together -- can you try one tiny bite? The Worry Monster is going to say it's yucky, but we know that's just a fib.",
      },
      {
        ageRange: "8-12",
        description:
          "Your child refuses school lunch entirely, won't eat food from the cafeteria or brought by classmates for celebrations. At home, they may stand in the kitchen watching you cook, asking if you washed your hands, if the counter was clean, if anyone else touched the ingredients. Playdates are difficult because they can't eat snacks at a friend's house. They're losing weight or becoming nutritionally restricted.",
        parentScript:
          "I know OCD is making eating really hard right now. The food I'm making is safe -- but I'm not going to prove it by washing my hands five times or letting you watch me cook step by step. OCD will never be satisfied, so let's focus on taking back your power instead. What's one food you'd be willing to try today?",
      },
      {
        ageRange: "13-18",
        description:
          "Your teen skips lunch at school, avoids eating out with friends, and may be preparing all their own meals at home using specific 'safe' utensils and dishes. They might refuse to share food with a dating partner or feel sick if they learn someone else touched their food after the fact. The social isolation is significant -- they can't do dinner with friends, skip pizza after games, and dread family gatherings with shared dishes.",
        parentScript:
          "I see how much this is limiting your life -- not being able to eat with friends, stressing about every meal. I'm not going to accommodate the food rules anymore because I can see they're making things worse, not better. I know that's scary. Can we talk about what a realistic first step would look like?",
      },
      {
        ageRange: "18+",
        description:
          "Your adult child may refuse to eat at restaurants, in the college dining hall, or at holiday gatherings. They might only eat food they've personally prepared in their own kitchen with their own utensils. Romantic relationships are strained because they can't share meals. They may be spending excessive money on groceries to maintain complete control over food preparation. You notice they've become increasingly isolated around mealtimes.",
        parentScript:
          "I love having you home for dinner, and I'm not going to change how I cook to match the OCD's rules. I know that's hard. The food is safe, and I'm going to serve it the way I always have. If you choose not to eat it, that's your call -- but I'm not going to help OCD control our family meals.",
      },
    ],
    relatedSituationSlugs: [
      "hands-raw",
      "inspects-every-bite",
      "food-prepared-specific-way",
    ],
  },
  {
    slug: "hour-long-showers",
    title: "They shower for over an hour and we can't get them to stop",
    categorySlug: "contamination-washing",
    ageRanges: ["8-12", "13-18", "18+"],
    severity: "severe",
    setup:
      "Your child disappears into the bathroom for an hour or more each time they shower. You can hear the water running continuously. They may emerge with red, irritated skin, and they become extremely distressed if you try to set a time limit. The water bill is climbing and the rest of the family's routine is held hostage.",
    ocdMechanics:
      "For your child, the shower has become a decontamination chamber. What should be a simple hygiene routine has been hijacked by OCD into an elaborate ritual with invisible rules: wash each body part a specific number of times, in a specific order, until it \"feels right.\" If they lose count or the feeling isn't right, they start over. The hot water and the scrubbing provide a brief sense of \"clean\" that the OCD immediately undermines: \"Are you sure you got everywhere? Better do it again.\"\n\nThe length of the shower isn't laziness or enjoyment — it's a trap. Your child is often miserable in there, stuck in a loop of washing and re-washing that they can't break. The OCD has set an impossible standard of cleanliness that can never truly be achieved, so the shower stretches on and on. Some children develop specific rituals within the shower: a certain number of shampoo applications, washing hands between body parts, specific scrubbing patterns.\n\nThe shower also becomes a protected space — it's private, and no one can see the rituals happening. This makes it one of the OCD compulsions that parents notice last (you see the long showers, but not the specific rituals inside). By the time the shower length becomes alarming, the rituals may be deeply entrenched.",
    whatNotToDo: [
      {
        mistake: "Turning off the hot water or cutting the water supply",
        explanation:
          "Abruptly ending the shower while your child is mid-ritual can cause extreme distress and panic. They may feel \"incomplete\" and desperately need to restart, leading to an even longer shower next time or a shift to other washing behaviors. This is a power play, not a therapeutic intervention.",
      },
      {
        mistake: "Yelling through the bathroom door to hurry up",
        explanation:
          "Your frustration is completely understandable, but yelling adds shame and urgency to an already anxious experience. Your child is not choosing to take long showers — they're trapped in a ritual they can't easily stop. External pressure often makes the OCD grip tighter.",
      },
      {
        mistake: "Ignoring it because 'at least they're getting clean'",
        explanation:
          "Hour-long showers are not thorough hygiene — they're a compulsion causing physical harm (skin damage, possible scalding) and consuming an enormous amount of your child's time and energy. This will not resolve on its own and typically worsens without intervention.",
      },
      {
        mistake: "Installing a timer that automatically shuts off the water",
        explanation:
          "While structured time limits can be part of a plan (see strategies below), an impersonal automatic shutoff feels punitive and removes your child's agency. Effective strategies involve your child choosing to step out, not being forced out by a mechanism.",
      },
    ],
    strategies: [
      {
        name: "Understand the shower ritual",
        difficulty: "starter",
        steps: [
          "At a neutral time (not before or after a shower), ask your child what happens in the shower. Not accusingly — with genuine curiosity.",
          "Many children feel relief when someone finally asks. They may describe the specific steps, the counting, the \"not right\" feeling that forces them to restart.",
          "Write down the ritual together. Name it as the OCD's shower routine, not your child's.",
          "Ask: \"If you could take a normal shower — in and out in ten minutes — would you want to?\" Almost every child says yes. This confirms their motivation and your shared goal.",
        ],
        exampleScript:
          "\"I've noticed your showers take a long time, and I want to understand what's happening in there — not to judge, just to help. Is the OCD making you do things in a certain order, or a certain number of times? A lot of kids with OCD have shower rules, and I bet it's exhausting to follow them all. Can you tell me about it?\"",
      },
      {
        name: "Collaborative time reduction",
        difficulty: "intermediate",
        steps: [
          "Together, decide on a target shower time. Don't jump from 90 minutes to 10 — start by cutting 10–15 minutes off the current time.",
          "Use a visible timer that your child controls (a waterproof timer in the bathroom, or a playlist that's the target length).",
          "The goal is for them to finish when the timer or music ends. If they go over slightly, note it without punishment.",
          "Each week, reduce by another 5–10 minutes as they build confidence.",
          "Celebrate progress: \"Last month your showers were 90 minutes. This week you're at 55. That's 35 minutes of your life you took back from the OCD.\"",
        ],
        exampleScript:
          "\"Right now your showers are about an hour and a half. What if we tried to get them down to an hour and fifteen minutes this week? I'll put together a playlist that's exactly that long — when the music stops, that's your cue to start wrapping up. No pressure to be perfect about it. We're just chipping away at the OCD's control, one song at a time.\"",
      },
      {
        name: "Simplify the ritual",
        difficulty: "intermediate",
        steps: [
          "Once you understand the ritual steps, work with your child to identify which steps are hygiene and which are OCD.",
          "Create a \"normal shower\" checklist together: shampoo once, soap body once, rinse, done. Write it on a waterproof card for the shower.",
          "Challenge them to follow only the checklist and resist the OCD's add-ons. The checklist gives them something concrete to follow instead of OCD's rules.",
          "If they find themselves doing extra steps, they practice noticing it (\"That was the OCD, not the checklist\") without going back to fix anything.",
        ],
        exampleScript:
          "\"Let's figure out what a regular shower looks like — no OCD rules, just getting clean. Shampoo once, soap up, rinse off. Done. I'll write it on this card so you can stick it in the shower. When the OCD says 'do it again,' you can look at the card and say 'Nope, I followed the real plan. I'm done.' It's going to feel really uncomfortable at first. That's how you know it's working.\"",
      },
      {
        name: "Cold-finish exposure",
        difficulty: "advanced",
        steps: [
          "This technique uses a brief switch to cold water at the end of the shower as a \"ritual breaker\" — it interrupts the OCD loop with a strong physical sensation.",
          "With your child's agreement, they switch to cold water for the last 15–30 seconds of the shower. This makes it very unappealing to continue the ritual past the planned endpoint.",
          "The cold water also serves as a clear physical boundary: warm water = shower time, cold water = done.",
          "This is not a punishment — frame it as a tool: \"The OCD makes it hard to stop. The cold water gives your brain a clear signal that the shower is over.\"",
          "Combine with the time reduction strategy for maximum effectiveness.",
        ],
        exampleScript:
          "\"I have an idea that might sound weird, but hear me out. When the timer goes off, you turn the water to cold for 30 seconds. Not to punish yourself — but to snap your brain out of the OCD loop. Cold water is like a reset button. It's hard for the OCD to make you scrub your arm for the fifth time when the water's freezing. Want to try it?\"",
      },
    ],
    whenItGetsTough:
      "Reducing shower time means your child will step out feeling \"unfinished\" or \"not clean enough.\" The anxiety after a shortened shower can be intense — they may feel contaminated, agitated, or desperate to get back in. This is the OCD throwing a tantrum because its ritual was interrupted. The feeling of being \"not clean\" is not a fact — it's an OCD sensation that will fade if your child can sit with it for 20–30 minutes. Stay close, be warm, and resist the urge to let them jump back in \"just this once.\" Every shortened shower, even an imperfect one, teaches their brain that incomplete rituals don't lead to catastrophe. The discomfort is temporary. The freedom is permanent.",
    whenToGetHelp: [
      "Showers consistently exceed one hour despite your efforts to reduce them",
      "Your child's skin is damaged — cracked, bleeding, or showing signs of infection from excessive scrubbing",
      "They are showering multiple times per day",
      "The shower rituals are expanding (needing to wash clothes, towels, or the bathroom after showering)",
      "Your child is missing school, meals, or sleep because of shower length",
    ],
        ageSpecificExamples: [
      {
        ageRange: "8-12",
        description:
          "Your child's showers have stretched from 10 minutes to 45 minutes or longer. They follow a rigid sequence -- washing each body part a specific number of times, in a specific order. If interrupted or if they lose count, they restart. You can hear the water running and running while they repeat their routine. The water bill has spiked and they're sometimes late for school because the shower took too long.",
        parentScript:
          "I'm going to set a timer for 15 minutes. That's enough time for a good shower. When the timer goes off, I'll knock on the door -- that's your signal to finish up. I know OCD wants more time, but we're not going to let it be the boss of shower time anymore.",
      },
      {
        ageRange: "13-18",
        description:
          "Your teen disappears into the bathroom for an hour or more. They may use an entire bottle of body wash in a week, follow elaborate washing sequences that they restart if anything feels 'off,' and emerge with red, irritated skin. They're secretive about what happens in the shower and may become explosive if you try to set time limits. Mornings are derailed, hot water runs out for other family members, and their skin is showing signs of damage.",
        parentScript:
          "I'm not going to pretend I don't notice the hour-long showers. I care about you too much for that. Here's what I'm thinking: we set a 20-minute shower limit. I know that sounds impossible right now, and OCD is probably screaming about it. But the long showers aren't making you feel cleaner -- they're making OCD stronger. What do you think a realistic first step would be?",
      },
      {
        ageRange: "18+",
        description:
          "Your adult child's shower rituals may be consuming 1-2 hours daily, causing them to miss classes, be late for work, or avoid leaving home altogether. Roommates complain about the bathroom monopoly and water costs. Their skin is dry, cracked, or raw from excessive washing. They may schedule their entire day around shower rituals, declining invitations because they 'haven't showered yet' even though they showered that morning.",
        parentScript:
          "I can see how much time the shower rituals are stealing from your life. I'm not going to enable longer showers when you visit -- the hot water goes off after 20 minutes and that's a household boundary, not a punishment. Let's talk about what tools your therapist has given you for managing this.",
      },
    ],
    relatedSituationSlugs: [
      "hands-raw",
      "wash-hands-before-touching",
      "morning-routine-hostage",
    ],
  },
  {
    slug: "wash-hands-before-touching",
    title:
      "They ask me to wash my hands before I can touch them or their things",
    categorySlug: "contamination-washing",
    ageRanges: ["4-7", "8-12", "13-18"],
    severity: "moderate",
    setup:
      "Your child insists that you (and possibly other family members) wash your hands before you can hug them, touch their belongings, enter their room, or hand them anything. If you forget or refuse, they become extremely distressed. You feel like a visitor in your own home following decontamination protocols.",
    ocdMechanics:
      "This pattern is a form of accommodation-seeking — your child's OCD has extended its contamination rules beyond their own behavior to include yours. The obsessive thought is: \"Other people carry contamination that could transfer to me or my safe spaces.\" By controlling when and how others wash their hands, the child is attempting to maintain a bubble of safety that the OCD demands.\n\nThis is one of the most relationally damaging OCD patterns because it directly involves you in the compulsion. Every time you wash your hands on command, you're performing a ritual on your child's behalf. You become an extension of their OCD — and your compliance is required for them to feel safe. The child isn't being controlling or bossy; they're terrified, and they've learned that getting you to wash provides the same temporary relief as washing themselves.\n\nWhat makes this especially painful is that the request often comes at moments of connection — before a hug, before handing them a snack, before sitting on their bed to say goodnight. The OCD inserts itself into the most tender moments of your relationship and adds a decontamination step. Over time, you may find yourself pre-emptively washing to avoid the conflict, which means the OCD is now running your behavior, too.",
    whatNotToDo: [
      {
        mistake: "Washing your hands every time they ask without question",
        explanation:
          "Full compliance with hand-washing demands makes you an active participant in the OCD cycle. Your child's anxiety drops when you wash, which reinforces the belief that your unwashed hands were genuinely dangerous. The requests will escalate — more frequent washing, specific soaps, specific duration.",
      },
      {
        mistake: "Flatly refusing and saying 'That's ridiculous'",
        explanation:
          "A hard refusal without empathy or explanation feels like rejection to your child. They're not asking you to wash because they think you're dirty as a person — they're in the grip of a fear they can't control. Dismissiveness damages the relationship without addressing the OCD.",
      },
      {
        mistake: "Washing in secret to avoid the conversation",
        explanation:
          "If you pre-emptively wash so your child never has to ask, you've been fully absorbed into the ritual. The OCD wins silently. Your child may even develop a heightened ability to detect whether you've washed (smelling your hands, checking for dampness), expanding the ritual further.",
      },
      {
        mistake: "Making your child feel guilty for asking",
        explanation:
          "Saying things like \"Do you know how that makes me feel?\" or \"You're hurting Daddy's feelings\" uses emotional pressure to suppress a symptom. The child feels guilty on top of anxious, which makes everything worse. The goal is to address the OCD, not to make your child responsible for your emotions about it.",
      },
    ],
    strategies: [
      {
        name: "Validate, then hold the boundary",
        difficulty: "starter",
        steps: [
          "When your child asks you to wash your hands, respond with empathy first: \"I can see the OCD is really bothering you right now.\"",
          "Then state your boundary clearly: \"I'm not going to wash my hands because they're already clean enough, and I don't want to help the OCD get stronger.\"",
          "Follow immediately with connection: \"But I'm right here and I love you. Let's sit together until the worry passes.\"",
          "This formula — empathy, boundary, connection — keeps your child from feeling rejected while refusing to accommodate the OCD.",
          "Be prepared to repeat this many times. Consistency is what teaches the brain the new rule.",
        ],
        exampleScript:
          "\"I hear you, sweetheart. The OCD is telling you that my hands aren't safe, and I know that feels really scary. But I washed them after the bathroom and they're clean enough. I'm not going to wash again because that would be helping the OCD, and the OCD isn't a good boss. I love you and my hands love you and they're going to stay just like this. Want to sit with me for a minute until the worry gets quieter?\"",
      },
      {
        name: "Collaborative accommodation reduction plan",
        difficulty: "intermediate",
        steps: [
          "Sit down with your child and list all the times they ask you to wash. Rate each situation by anxiety level (0–10).",
          "Together, agree to drop the hand-washing requirement for the lowest-anxiety situations first. For example, maybe you stop washing before handing them a book (anxiety 3) but still wash before making their food (anxiety 8) for now.",
          "Each week, drop one more situation from the list.",
          "Keep a visual chart so your child can see the situations they've \"conquered.\"",
          "The collaborative approach gives them ownership and prevents the reduction from feeling like something imposed on them.",
        ],
        exampleScript:
          "\"Let's make a deal with the OCD. We're going to pick the three easiest situations where I currently wash my hands, and starting this week, I'm going to stop washing for those. The OCD won't like it, but you and I are going to handle it together. Then next week, we'll pick three more. Eventually, we're going to take all that time back. Which three should we start with?\"",
      },
      {
        name: "The '30-second sit' after refusing",
        difficulty: "intermediate",
        steps: [
          "After you decline to wash and your child's anxiety spikes, commit to sitting quietly with them for 30 seconds.",
          "Don't try to fix, reassure, or talk them through it. Just be present. Breathe calmly. Model that anxiety is tolerable.",
          "After 30 seconds, ask: \"What's your anxiety number now?\" It's usually lower than the peak.",
          "This brief practice teaches them that anxiety after a refused accommodation is temporary — and that you're still there, still safe, still loving, even with unwashed hands.",
        ],
        exampleScript:
          "\"I'm not going to wash, but I am going to sit right here with you. Let's both take a breath. I'm here. Nothing bad is happening. Let's count to thirty together and then check — how loud is the OCD?\"",
      },
      {
        name: "Deliberate 'contamination' with connection",
        difficulty: "advanced",
        steps: [
          "With your child's advance agreement, plan moments where you touch them or their things with explicitly unwashed hands — and then do something enjoyable together.",
          "For example: come home from outside, don't wash, and then play a card game together. The goal is to pair \"contaminated\" contact with a positive experience.",
          "Before the exposure, predict what the OCD will say. After, check what actually happened.",
          "Start small (touching the same deck of cards) and build to more intimate contact (a hug, fixing their hair, holding hands).",
          "The joy of the connection becomes evidence that unwashed hands don't ruin anything.",
        ],
        exampleScript:
          "\"Here's tonight's challenge, if you're up for it: I just got home from the store and I'm not washing my hands. And then you and I are going to build that Lego set together — same pieces, same hands. The OCD is going to say that's dangerous. But I think what's actually going to happen is that we're going to have a great time and build something awesome. Ready to prove the OCD wrong?\"",
      },
    ],
    whenItGetsTough:
      "When you stop washing on command, your child may cry, scream, beg, or refuse physical contact. They may say \"You don't love me\" or \"You're going to make me sick.\" This is the OCD speaking through your child, and it is designed to hit you exactly where it hurts. Your parental instinct to protect and comfort will scream at you to just go wash your hands — it takes 30 seconds, what's the harm? The harm is that each compliance makes the next refusal harder, and the OCD's demands will only grow. Stay warm, stay present, and stay firm. Your child will be angry now and grateful later. The discomfort they feel when you refuse is the exact discomfort that leads to healing. You are not being cruel — you are being brave for both of you.",
    whenToGetHelp: [
      "The hand-washing demands have extended to all family members and visitors",
      "Your child becomes physically aggressive or self-harms when you refuse to wash",
      "They are avoiding physical contact with you entirely because they can't trust that you're clean",
      "The demands are escalating to include additional decontamination steps beyond hand-washing (changing clothes, showering, sanitizing objects)",
      "Your own behavior has significantly changed — you find yourself constantly washing, avoiding touching your child's things, or feeling anxious about your own cleanliness",
    ],
        ageSpecificExamples: [
      {
        ageRange: "4-7",
        description:
          "Your young child demands that everyone -- parents, siblings, grandparents -- wash their hands before touching them, their toys, or their food. They may scream or pull away if someone reaches for them without washing first. Playgrounds are difficult because other children haven't washed. They may refuse hugs from relatives who just arrived.",
        parentScript:
          "I know the Worry Monster wants everyone to wash their hands first. But Grandma's hands are safe, and she really wants to give you a hug. The Worry Monster is being too bossy right now. Can we tell it to be quiet just for one hug?",
      },
      {
        ageRange: "8-12",
        description:
          "Your child has created strict handwashing rules for the household. They track whether family members washed after coming inside, using the bathroom, or touching the trash. They may refuse to touch shared items like TV remotes or game controllers. At school, they avoid partner work because they can't guarantee classmates' hands are clean. They become the 'hygiene police' and family members are walking on eggshells.",
        parentScript:
          "I understand OCD is telling you that everyone needs to wash before touching things. But here's the truth: I'm not going to follow OCD's rules anymore, because following them makes OCD stronger. I washed my hands a normal amount today, and that's enough. I know this is hard, and I'm here to help you get through the uncomfortable feelings.",
      },
      {
        ageRange: "13-18",
        description:
          "Your teen has elaborate decontamination requirements for anyone entering their space. They may require family members to shower before sitting in the living room, refuse to eat at the table unless everyone has freshly washed hands, and keep hand sanitizer at their bedroom door for anyone entering. Friends have stopped coming over. Dating feels impossible because they can't tolerate physical contact without prior washing. They know the rules are excessive but feel powerless to stop enforcing them.",
        parentScript:
          "I respect that this feels really important to you right now. But I'm not going to wash my hands before entering the living room -- that's OCD asking me to play by its rules. I know my saying no makes you anxious, and I'm sorry about that. I'm doing this because I want you to see that the anxiety goes down on its own, even without the washing.",
      },
    ],
    relatedSituationSlugs: [
      "hands-raw",
      "hour-long-showers",
      "asks-same-question-over",
    ],
  },
  // ---------------------------------------------------------------------------
  // CHECKING & DOUBTING
  // ---------------------------------------------------------------------------
// ============================================================
// CATEGORY 1: Checking & Doubting
// ============================================================

{
  slug: "checking-door-locks",
  title: "My child checks the door locks over and over before bed",
  categorySlug: "checking-doubting",
  ageRanges: ["8-12", "13-18"],
  severity: "moderate",
  setup: "Every night, your child gets out of bed multiple times to check that the front door, back door, and windows are locked. What used to be a single check has grown into a ritual that can take 20 to 45 minutes, and they become visibly distressed if you try to stop them or reassure them that everything is secure.",
  ocdMechanics: "Checking OCD revolves around an intolerance of uncertainty. Your child's brain sends a false alarm — \"What if the door isn't really locked? What if someone breaks in?\" — and the only way to quiet that alarm feels like checking again. The problem is that each check provides only a few seconds of relief before the doubt rushes back, often louder than before.\n\nThis is the obsession-compulsion-relief-repeat cycle in action. The obsession is the intrusive doubt (\"Is it locked?\"), the compulsion is the checking, the relief is momentary, and then the doubt returns. Each time your child checks and feels brief relief, the brain learns that checking is \"necessary,\" which strengthens the cycle.\n\nOver time, the number of checks tends to increase because the brain's threshold for \"enough\" keeps shifting. Your child isn't being difficult or irrational — their alarm system is misfiring, and they're doing the only thing that seems to help, even though it's actually making things worse.",
  whatNotToDo: [
    {
      mistake: "Checking the locks for them or with them to speed things up",
      explanation: "When you check alongside your child or do it on their behalf, you become part of the ritual. This teaches their brain that the anxiety was indeed dangerous and that checking was warranted. It feels helpful in the moment, but it feeds the cycle and makes it harder for them to stop on their own."
    },
    {
      mistake: "Offering repeated verbal reassurance like \"I promise it's locked\"",
      explanation: "Reassurance functions the same way as a physical check — it provides a brief hit of relief that the brain quickly discounts. Your child may even start needing you to say it in a specific way or a specific number of times, turning your reassurance into its own ritual."
    },
    {
      mistake: "Getting frustrated and saying \"You already checked, just stop it\"",
      explanation: "Your child knows they already checked. The problem is that knowing and feeling sure are two different things when OCD is involved. Expressing frustration adds shame on top of anxiety, which can actually intensify the urge to check because stress fuels OCD."
    },
    {
      mistake: "Removing all locks or leaving doors intentionally unlocked to prove nothing bad happens",
      explanation: "Jumping to the hardest possible exposure without preparation can be overwhelming and backfire. Effective ERP is gradual and collaborative — your child needs to be part of the plan, not ambushed by it."
    }
  ],
  strategies: [
    {
      name: "Name the OCD Out Loud",
      difficulty: "starter",
      steps: [
        "Help your child give their OCD a name — something external like \"the Doubt Monster\" or \"the Lock Bully.\"",
        "When the urge to check arises, narrate what's happening: \"It sounds like the Doubt Monster is showing up again.\"",
        "Ask your child, \"What is the Doubt Monster telling you right now?\" to help them separate the OCD thought from their own judgment.",
        "Validate that the feeling is real and uncomfortable, even though the danger is not: \"I know it feels scary. That's the OCD talking, not the truth.\""
      ],
      exampleScript: "\"Hey, I think the Doubt Monster is bugging you about the locks again. It's really good at making things feel unsafe even when they're not. You don't have to listen to it, and I'm right here with you while it yells.\""
    },
    {
      name: "One Check with Commentary",
      difficulty: "intermediate",
      steps: [
        "Agree together on a plan: your child gets one check of each lock per night.",
        "During the single check, have them narrate out loud: \"I am turning the deadbolt. I can see it is in the locked position. I am done.\"",
        "After the check, they walk away — no going back, even if the doubt spikes.",
        "Acknowledge the discomfort: \"I know your brain wants you to go back. Let's sit with that feeling for a few minutes and see what happens to it.\"",
        "Track how long the anxiety lasts after they resist rechecking — most children are surprised that it fades within 10 to 20 minutes."
      ],
      exampleScript: "\"Tonight we're going to try something new. You get one real, solid check of each lock. Say out loud what you see so your brain gets the information clearly. After that, we're done — even if the Doubt Monster tries to drag you back. I'll hang out with you while the uncomfortable feeling fades.\""
    },
    {
      name: "Gradual Check Reduction Ladder",
      difficulty: "advanced",
      steps: [
        "Write out the current routine — how many checks, which doors and windows, in what order.",
        "Build an exposure ladder together, cutting one check at a time over days or weeks.",
        "For example: Week 1, skip the window checks. Week 2, reduce door checks from five to three. Week 3, reduce to one.",
        "Celebrate each rung of the ladder, not just the final goal.",
        "If your child is working with a therapist, share the ladder so it aligns with their treatment plan."
      ],
      exampleScript: "\"Let's make a plan together. Right now you're checking everything about six times. What if this week, we skip the windows? I know that's going to feel hard, and the Doubt Monster will probably get louder for a few days. But I think you're strong enough to handle it, and I'll be right here. What do you think — want to try?\""
    }
  ],
  whenItGetsTough: "When your child starts resisting the urge to check, expect things to get harder before they get easier. This is called an extinction burst — the OCD essentially \"turns up the volume\" because the strategy that used to work (checking) isn't being used anymore. Your child may cry, beg, become angry, or try to negotiate (\"just one more check, please\"). This is not a sign that you're doing something wrong. It's actually a sign that the OCD is losing its grip and is fighting back. Stay calm, stay compassionate, and stay consistent. The burst is temporary. Most families see it peak within three to five days and then begin to subside. If you give in during the burst, the OCD learns that escalating works, which makes the next attempt harder.",
  whenToGetHelp: [
    "The checking ritual consistently takes more than 30 minutes and is getting longer despite your efforts",
    "Your child is losing significant sleep because of the checking, affecting their school performance or mood during the day",
    "They have begun involving other family members in the checking or becoming aggressive when prevented from checking",
    "Your child expresses beliefs that something truly catastrophic will happen if they don't check, and these beliefs feel unshakeable",
    "You notice the checking spreading to new areas — not just locks but appliances, water faucets, or homework"
  ],
      ageSpecificExamples: [
      {
        ageRange: "8-12",
        description:
          "Your child gets out of bed multiple times to check that the front door is locked. They may also check windows, the garage door, and the back door. They ask you to confirm the doors are locked, and your confirmation only holds for a few minutes before the doubt returns. Bedtime stretches later and later as the checking ritual grows. They may start a mental list of all the entry points and feel compelled to verify each one.",
        parentScript:
          "I can see OCD is telling you the door might be unlocked. We checked it together once, and it was locked. I'm not going to check again because checking over and over is feeding OCD. The door is locked, and you are safe. I know the worried feeling is loud, but it will get quieter if we don't listen to it.",
      },
      {
        ageRange: "13-18",
        description:
          "Your teen can't leave the house without checking every lock multiple times. They may take photos of locked doors on their phone to reassure themselves later, but then doubt the photos are current. They're chronically late to school because the checking routine eats into their morning. At night, they may get up 5-10 times to recheck, losing sleep and becoming exhausted. They feel embarrassed and may try to hide the behavior, doing quick checks when they think no one is watching.",
        parentScript:
          "I notice you've been checking the locks a lot. I'm not going to confirm they're locked for you because that keeps the cycle going. I know that feels really uncomfortable. What if we tried locking the door once together, and then you sit with the doubt for 10 minutes? I'll sit with you. The doubt is loud, but it's not true.",
      },
    ],
    relatedSituationSlugs: ["confirm-stove-off", "bedtime-rigid-rituals", "bad-will-happen-no-ritual"]
},

{
  slug: "rewrite-homework-perfect",
  title: "They re-read and re-write homework until it's 'perfect'",
  categorySlug: "checking-doubting",
  ageRanges: ["8-12", "13-18"],
  severity: "moderate",
  setup: "Your child spends hours on assignments that should take 20 minutes. They erase and rewrite answers, re-read paragraphs over and over, and tear up pages that don't look \"right.\" The perfectionism has turned homework time into a nightly battle that leaves everyone exhausted and frustrated.",
  ocdMechanics: "Perfectionism-driven OCD is a form of checking and doubting where the \"lock\" being checked is the quality of their own work. The obsessive thought is something like \"What if this isn't good enough?\" or \"What if I made a mistake and something terrible happens?\" The compulsion is rewriting, re-reading, and erasing until it \"feels right\" — a feeling that never fully arrives.\n\nThe relief cycle works the same way as any other OCD compulsion. Your child rewrites a sentence, feels a moment of \"okay, that's better,\" and then the doubt floods back: \"But is it really right?\" Each rewrite reinforces the idea that their first attempt wasn't acceptable, training the brain to distrust its own output.\n\nThis is not the same as a child who simply wants to do well in school. The key difference is distress and rigidity. A motivated student can accept \"good enough.\" A child with perfectionism OCD cannot — the anxiety won't let them, and the rewriting feels compulsory, not optional.",
  whatNotToDo: [
    {
      mistake: "Proofreading their work and confirming it's perfect",
      explanation: "When you review their homework and declare it acceptable, you become the reassurance mechanism. Your child will start needing your approval before they can stop, and eventually your approval won't be enough either — they'll doubt whether you checked carefully enough."
    },
    {
      mistake: "Letting them stay up as long as they need to \"finish\"",
      explanation: "Allowing unlimited time accommodates the OCD by removing any natural boundary. It also communicates that the perfectionism is reasonable enough to warrant sacrificing sleep, which reinforces the idea that imperfect work truly is dangerous."
    },
    {
      mistake: "Telling them \"it doesn't matter, it's just homework\"",
      explanation: "Minimizing their feelings invalidates the very real distress they're experiencing. They know intellectually that it's \"just homework\" — but OCD doesn't respond to logic. Dismissing their struggle can make them feel misunderstood and less likely to accept your help."
    },
    {
      mistake: "Doing portions of the homework for them to reduce the stress",
      explanation: "This teaches the OCD that the anxiety is too big for your child to handle, which shrinks their confidence. It also doesn't address the underlying cycle — they'll still feel the compulsion on the portions they do complete."
    }
  ],
  strategies: [
    {
      name: "Set a Timer Boundary",
      difficulty: "starter",
      steps: [
        "Together, agree on a reasonable time limit for homework — use the teacher's estimate as a guide.",
        "Set a visible timer. When the timer goes off, homework is done — whatever state it's in.",
        "Submit the work as-is. Let your child experience that imperfect work does not lead to catastrophe.",
        "After the first few times, talk about what actually happened: \"You turned it in with that erasure mark. What grade did you get? Did anything bad happen?\""
      ],
      exampleScript: "\"Your teacher says this assignment should take about 30 minutes. We're going to set a timer for 35 minutes to give you a little cushion. When the timer goes off, we put the pencil down and put it in your backpack — done. I know that's going to feel really uncomfortable, and the OCD is going to scream that it's not ready. But we're going to find out together what actually happens when we turn in work that isn't 'perfect.'\""
    },
    {
      name: "Intentional Mistake Practice",
      difficulty: "intermediate",
      steps: [
        "Explain the concept: \"We're going to practice being imperfect on purpose to show the OCD it's not the boss.\"",
        "Start with low-stakes work — a practice sheet, a draft, or a note to a family member.",
        "Have your child intentionally include a small imperfection: a slightly messy letter, an uncorrected minor error.",
        "Leave the imperfection in place. Do not fix it. Sit with the discomfort together.",
        "Gradually move this practice to actual homework as your child's tolerance builds."
      ],
      exampleScript: "\"I want you to write one sentence on this scrap paper and make one letter a little messy on purpose. I know that sounds terrible right now — that's the OCD reacting. You're not going to turn this in or anything. We're just practicing showing the OCD that imperfect doesn't equal dangerous. Ready? I'll do one too — look how wobbly my 'g' is.\""
    },
    {
      name: "The \"First Draft Is Final\" Rule",
      difficulty: "advanced",
      steps: [
        "Agree on a new rule: the first draft of an assignment is the version that gets turned in. No rewrites.",
        "Your child can still plan and think before writing, but once pen hits paper (or fingers hit keyboard), that version is the version.",
        "Expect significant distress initially. Stay nearby, stay calm, validate feelings without validating the OCD.",
        "After two to three weeks, review what actually happened to grades and teacher feedback — the reality check is powerful."
      ],
      exampleScript: "\"Starting this week, we're going to try something bold. Whatever you write the first time is what goes in. No rewriting, no erasing, no starting over. This is going to be really hard — probably the hardest thing we've tried so far. The OCD is going to tell you it's not good enough. But I believe your first effort is always better than the OCD gives you credit for. And I'll be right here while it feels awful.\""
    }
  ],
  whenItGetsTough: "The first time your child submits work they consider imperfect, you may see a major anxiety spike — tears, anger, pleading to let them redo it, or even refusal to go to school the next day. This is the extinction burst, and it's a sign that you're disrupting the OCD cycle. Your child's brain is used to getting relief through rewriting, and now that relief is being withheld. The discomfort is real, but it is temporary. Most children begin to habituate within one to two weeks if the boundary holds consistently. If you allow \"just one rewrite\" during the burst, the OCD learns that enough distress earns a compulsion, and the burst will be bigger next time. Hold the line with compassion, not rigidity — acknowledge how hard it is while staying firm on the plan.",
  whenToGetHelp: [
    "Homework that should take 30 minutes is consistently taking two or more hours",
    "Your child is refusing to attend school because of anxiety about imperfect work",
    "The perfectionism is spreading beyond homework to other areas like appearance, social interactions, or eating",
    "Your child is experiencing physical symptoms from the stress — stomachaches, headaches, or difficulty sleeping",
    "They express hopelessness or self-critical statements like \"I'm stupid\" or \"I can't do anything right\" that persist outside homework time"
  ],
      ageSpecificExamples: [
      {
        ageRange: "8-12",
        description:
          "Your child erases answers and rewrites them until the paper is thin or torn. They spend three hours on 20 minutes of homework, not because they don't understand the material, but because the letters don't look 'right.' They may go through multiple sheets of paper for a single assignment. They become frustrated and tearful, but can't stop trying to make it perfect. Grades may actually drop because assignments are turned in late or not at all.",
        parentScript:
          "I can see you're working really hard on that, and I can also see that OCD is making you rewrite things that are already correct. What if we tried a rule: one draft, no erasing? I know it feels wrong, but your teacher cares about your ideas, not whether the letters are perfect. Let's try it for one assignment and see what happens.",
      },
      {
        ageRange: "13-18",
        description:
          "Your teen types and deletes essays repeatedly, spending entire evenings on a single paragraph. They may have multiple drafts saved on their computer, none of which feel 'good enough.' They're staying up until 2 AM trying to perfect assignments, missing deadlines, and their grades are suffering despite being a capable student. They may have started avoiding certain classes because the written work triggers such intense perfectionism that it feels paralyzing.",
        parentScript:
          "I see you've been at that essay for four hours and I know you're not stuck on the content -- you're stuck on the OCD. What if you set a timer for 30 minutes, wrote whatever comes out, and submitted it? I know that sounds terrifying. But perfection isn't the goal -- learning is. And OCD is stealing your learning time.",
      },
    ],
    relatedSituationSlugs: ["erases-rewrites-paper-tears", "refuses-turn-in-work", "rereads-paragraph-dozens"]
},

{
  slug: "confirm-stove-off",
  title: "They ask me to confirm the stove is off dozens of times",
  categorySlug: "checking-doubting",
  ageRanges: ["8-12", "13-18", "18+"],
  severity: "moderate",
  setup: "Your child asks you repeatedly whether the stove is off, the curling iron is unplugged, or an appliance is turned off — even if they watched you check it or never used the appliance themselves. The questions come in waves, often before leaving the house or at bedtime, and no amount of reassurance seems to be enough.",
  ocdMechanics: "This is reassurance-seeking compulsion driven by an inflated sense of responsibility. Your child's OCD generates the thought: \"What if the stove is on and the house burns down and it's my fault?\" The anxiety is unbearable, and asking you becomes the compulsion — your answer is the \"check\" that temporarily quiets the alarm.\n\nThe cruel twist of reassurance-seeking OCD is that the reassurance itself becomes unreliable in your child's mind. They hear you say \"Yes, it's off,\" feel brief relief, and then the doubt returns: \"But what if they didn't really look?\" or \"What if it turned back on somehow?\" So they ask again. And again. Each answer you give carries less weight than the one before, because the OCD has taught their brain to doubt the reassurance too.\n\nThis pattern often pulls parents into an exhausting role as the designated \"safety checker.\" Over time, your child may not just ask about the stove — the questioning can expand to any potential source of harm, because the underlying mechanism (intolerance of uncertainty, reassurance as compulsion) is the same regardless of the specific worry.",
  whatNotToDo: [
    {
      mistake: "Answering the same question every time they ask",
      explanation: "Each time you confirm the stove is off, you provide a micro-dose of relief that reinforces the asking cycle. Your child isn't being annoying — they're trapped in a loop, and your answers, though well-intentioned, are the fuel that keeps it spinning."
    },
    {
      mistake: "Taking them to the stove to show them it's off",
      explanation: "Visual confirmation becomes another form of checking. Soon they may need to see it, touch the knobs, hold their hand over the burner — the compulsion escalates because the underlying doubt is never truly resolved by evidence."
    },
    {
      mistake: "Snapping or saying \"I already told you ten times!\"",
      explanation: "Your child is painfully aware of how many times they've asked. The repetition is as frustrating for them as it is for you, if not more so. Exasperation adds guilt and shame, which increase anxiety, which increases the urge to seek reassurance."
    }
  ],
  strategies: [
    {
      name: "The Supportive Refusal Script",
      difficulty: "starter",
      steps: [
        "Explain to your child (outside of an anxious moment) that you're going to stop answering repeated stove questions — not because you don't care, but because answering is making the OCD stronger.",
        "Agree on a script you'll both use. You answer the question once, clearly. After that, the script kicks in.",
        "When they ask again, use the script warmly and consistently: acknowledge the OCD, decline to reassure, express confidence in them.",
        "Stay physically present and calm. Don't leave the room or act annoyed."
      ],
      exampleScript: "\"I can hear that the OCD is really pushing you to ask again. I already answered once, and I'm going to trust that answer. I know this feels really hard right now. The OCD wants me to keep answering, but we both know that doesn't actually help — it just makes the OCD come back louder. You can handle this uncomfortable feeling, and I'm right here with you.\""
    },
    {
      name: "Transfer Ownership of the Check",
      difficulty: "intermediate",
      steps: [
        "Instead of you confirming the stove is off, make it your child's single check to perform.",
        "They check the stove once, say out loud what they observe (\"All four knobs are in the off position\"), and walk away.",
        "When they come to you afterward to ask, redirect: \"You already did your check. What did you see?\"",
        "Do not supplement their check with your own. Their one check is the only check.",
        "If they insist their check \"didn't count,\" respond with: \"The OCD says it didn't count. But we agreed — one check is enough.\""
      ],
      exampleScript: "\"From now on, the stove check is your job — but just once. Go look at the knobs, say what you see out loud, and then you're done. If the OCD tries to make you ask me afterward, I'm going to remind you that you already have the information. You saw it yourself. The OCD just doesn't want you to trust what you saw.\""
    },
    {
      name: "Scheduled Uncertainty Practice",
      difficulty: "advanced",
      steps: [
        "Set aside a daily five-minute \"uncertainty practice\" where your child deliberately sits with the thought \"I don't know for sure if the stove is off\" without checking or asking.",
        "Start with a time when the stove hasn't been used recently (lower actual doubt).",
        "Have them rate their anxiety on a 1–10 scale at the start and every minute. They'll typically see it drop without any reassurance.",
        "Gradually increase the difficulty: practice right after cooking, then before leaving the house.",
        "Track the anxiety ratings over weeks to show the habituation pattern."
      ],
      exampleScript: "\"We're going to try something that sounds a little wild. For five minutes, I want you to sit here with me and think: 'I don't know for sure if the stove is off.' Don't check. Don't ask me. Just let the thought be there. Tell me how anxious you feel right now on a scale of 1 to 10. Okay, a 7. Let's check in every minute and see what your brain does with this when we don't give it a compulsion to work with.\""
    }
  ],
  whenItGetsTough: "When you stop providing reassurance, your child's anxiety will spike — and they will likely try harder to get you to answer. They may rephrase the question (\"I'm not asking if the stove is off, I just want to know if you cooked tonight\"), escalate emotionally (crying, panicking, becoming angry), or try to recruit other family members to answer. This escalation is the extinction burst, and it's a predictable, temporary phase. It typically peaks within the first three to seven days. Every family member in the household needs to be on the same page — if one person gives in, the OCD learns to target that person. Stay united, stay compassionate, and keep reminding your child (and yourself) that this hard phase is the doorway to freedom from the cycle.",
  whenToGetHelp: [
    "The reassurance-seeking consumes more than 30 minutes of the day or is escalating in frequency",
    "Your child has begun refusing to leave the house unless you perform extensive checking rituals",
    "The worry has expanded from the stove to many other appliances, faucets, or potential hazards",
    "Family conflict around the reassurance-seeking is significant — arguments, resentment, or siblings being affected",
    "Your child shows signs of depression or hopelessness alongside the OCD, such as withdrawing from activities they used to enjoy"
  ],
      ageSpecificExamples: [
      {
        ageRange: "8-12",
        description:
          "Your child asks you repeatedly whether you turned the stove off after cooking dinner. They may follow you to the kitchen to watch you check, ask you to check again 10 minutes later, and still not be satisfied. They might lie awake worrying that the house will catch fire. The questions escalate around bedtime, when anxiety naturally peaks. They may also start checking other appliances -- the toaster, the iron, the space heater.",
        parentScript:
          "The stove is off. I checked it once, and once is enough. I know OCD is telling you it might not be off, but answering the same question over and over doesn't make OCD stop -- it makes it ask louder next time. Let's try sitting with the uncomfortable feeling and seeing what happens.",
      },
      {
        ageRange: "13-18",
        description:
          "Your teen checks the stove and other appliances themselves before leaving the house and before bed. They may take photos as evidence, but then doubt the photos. They ask family members to confirm appliances are off and become irritable when you refuse to keep checking. They may be late to school because the checking routine takes 15-20 minutes each morning. They feel ridiculous but can't stop.",
        parentScript:
          "I'm not going to send you a photo of the stove being off. I know that feels like I don't care, but it's actually the opposite -- I care too much to feed this cycle. The stove is off. Your brain is going to tell you it might not be, and that's OCD. What does your therapist say about sitting with the doubt?",
      },
      {
        ageRange: "18+",
        description:
          "Your adult child calls you from their apartment or dorm to ask if you're sure the stove was off when they last visited. They may check their own appliances for 30 minutes before leaving for work or class. They've started unplugging every appliance when they leave home. Roommates are frustrated by the checking rituals. They may avoid cooking altogether to eliminate the trigger.",
        parentScript:
          "I'm not going to check the stove for you over the phone. We've been through this before, and my checking never actually resolves the worry -- it just pauses it for a few minutes. I believe in your ability to handle this uncertainty. What's one coping strategy you could try right now instead of calling me?",
      },
    ],
    relatedSituationSlugs: ["checking-door-locks", "asks-same-question-over", "bad-will-happen-no-ritual"]
},

{
  slug: "checking-body-illness",
  title: "They check their body constantly for signs of illness",
  categorySlug: "checking-doubting",
  ageRanges: ["8-12", "13-18", "18+"],
  severity: "moderate",
  setup: "Your child frequently examines their body — checking their throat, feeling for lumps, monitoring their heartbeat, inspecting moles, or Googling symptoms. They ask you repeatedly if they look sick, if a freckle has changed, or if a normal sensation means something is seriously wrong. Doctor visits provide only temporary relief before the worry returns.",
  ocdMechanics: "Health-focused OCD, sometimes called somatic OCD, hijacks the body's normal sensations and reinterprets them as evidence of serious illness. Everyone experiences occasional aches, heart palpitations, or skin changes — but your child's OCD takes these normal signals and attaches catastrophic meaning: \"What if this headache is a brain tumor?\" or \"What if this heartbeat skip means I'm dying?\"\n\nThe compulsion cycle has multiple layers. Checking the body provides brief relief (\"Okay, the mole looks the same\"), but the act of checking also increases body awareness, which means they notice more sensations, which gives the OCD more ammunition. It's a feedback loop: check → notice more → worry more → check again. Googling symptoms creates the same loop — every search reassures briefly and then introduces three new terrifying possibilities.\n\nParents often get pulled into this cycle as medical reassurers. Your child may need you to look at a spot, feel their forehead, or agree they look healthy. Like all reassurance, your confirmation works for minutes or hours before the doubt returns. Meanwhile, repeated doctor visits can reinforce the idea that the symptoms are worth investigating, even when tests come back normal.",
  whatNotToDo: [
    {
      mistake: "Examining the body part they're worried about and telling them it looks fine",
      explanation: "Your visual check becomes a compulsion performed by proxy. It teaches the OCD that these worries warrant investigation, which validates the anxious thought rather than letting it pass. Your child will need you to look again — and again."
    },
    {
      mistake: "Scheduling frequent doctor visits for reassurance",
      explanation: "While it's important to rule out genuine medical issues (one thorough evaluation is appropriate), repeated doctor visits for the same unfounded concern feed the cycle. Each normal result provides brief relief followed by \"but what if the doctor missed something?\" Your pediatrician can be an ally in setting appropriate visit boundaries."
    },
    {
      mistake: "Allowing unrestricted health-related Googling",
      explanation: "Health-related internet searches are a compulsion disguised as research. The information your child finds is rarely reassuring for long, and medical websites are designed to encourage people to consider worst-case scenarios. Each search deepens the cycle."
    },
    {
      mistake: "Dismissing their fears with \"You're fine, stop worrying about it\"",
      explanation: "The sensations they're feeling are real — the OCD is in the interpretation, not the sensation itself. Telling them to \"just stop\" invalidates the genuine distress they're experiencing and makes them less likely to come to you when they need real support."
    }
  ],
  strategies: [
    {
      name: "Label It, Don't Investigate It",
      difficulty: "starter",
      steps: [
        "When your child reports a symptom or asks you to check, acknowledge the worry without investigating the symptom.",
        "Help them label what's happening: \"It sounds like the health OCD is showing up right now.\"",
        "Reflect the feeling, not the content: \"You're feeling scared, and I get it. Bodies do weird things sometimes.\"",
        "Redirect away from the body check: suggest a brief activity — a walk, a game, a song — to let the urge pass naturally."
      ],
      exampleScript: "\"I can see you're worried about that spot on your arm. That sounds like the health OCD talking. I'm not going to look at it — not because I don't care, but because we both know that looking helps for about three minutes and then the worry comes right back. Your body is doing normal body things. Let's go take the dog out and see how you feel in 15 minutes.\""
    },
    {
      name: "Body Check Delay and Reduction",
      difficulty: "intermediate",
      steps: [
        "Track how often your child checks a specific body area. Count the checks together — awareness is the first step.",
        "Introduce a delay: when they feel the urge to check, they wait five minutes first. Use a timer.",
        "After the delay, they can choose to check once — but only once, with a deliberate \"I'm done\" statement.",
        "Gradually increase the delay: five minutes, then ten, then twenty. Many children find that the urge subsides during the delay.",
        "Celebrate each time the urge passes without a check — that's their brain learning a new pattern."
      ],
      exampleScript: "\"I know you want to check that mole right now. Let's try waiting five minutes first. Set a timer on your phone. When it goes off, if you still feel like you need to look, you can look once. But let's see what happens to the worry while you wait. Sometimes the OCD gives up and moves on if we don't jump when it says jump.\""
    },
    {
      name: "Uncertainty Scripting",
      difficulty: "advanced",
      steps: [
        "Work with your child to create a brief script they repeat when the health worry arises: \"Maybe I'm sick, maybe I'm not. I'm choosing not to check right now.\"",
        "The script deliberately does NOT reassure. It practices tolerating not knowing — the core skill that defeats OCD.",
        "Have them say the script out loud, then engage in another activity without checking.",
        "Practice the script during calm times first so it becomes automatic during anxious moments.",
        "Over time, the script can become internal — a quick mental note rather than something spoken aloud."
      ],
      exampleScript: "\"Here's what I want you to try. When the worry pops up about your heart or a bump or whatever it is today, say this out loud: 'Maybe something is wrong, maybe nothing is wrong. I'm choosing not to check right now.' I know that sounds scary — it's supposed to. We're teaching your brain that you can handle uncertainty. You don't need a guarantee to be okay.\""
    }
  ],
  whenItGetsTough: "When your child stops checking, the anxiety doesn't just disappear — it often gets louder and more creative. They may develop new physical symptoms driven by the hyperawareness (anxiety itself causes real sensations like racing heart, tingling, nausea). They may beg for \"just one doctor visit\" or become angry that you won't look at the spot they're worried about. This extinction burst is the OCD's last stand. It typically lasts a few days to two weeks, depending on how entrenched the checking has become. During this time, maintain compassion and consistency. Validate their fear without validating the OCD's solution. If new, genuinely concerning symptoms appear, use your parental judgment — one evaluation to rule out a real issue is fine. The goal is eliminating repetitive checking, not ignoring legitimate health needs.",
  whenToGetHelp: [
    "Body checking is consuming more than an hour of your child's day or significantly interfering with school and social activities",
    "Your child is restricting activities due to health fears — refusing to exercise, eat certain foods, or go to places where they might \"catch something\"",
    "They are experiencing panic attacks triggered by body sensations",
    "The health anxiety has led to doctor-shopping, excessive emergency room visits, or conflict with medical providers",
    "Your child expresses a persistent, unshakeable belief that they are seriously ill despite multiple normal medical evaluations"
  ],
      ageSpecificExamples: [
      {
        ageRange: "8-12",
        description:
          "Your child frequently asks if a freckle is cancer, if a headache means a brain tumor, or if a stomachache means something serious. They may check their pulse, examine their skin in the mirror, or ask you to feel their forehead multiple times a day. They've started avoiding physical activities because they're afraid of noticing body sensations that feel 'wrong.' School nurse visits have increased dramatically.",
        parentScript:
          "I know your tummy feels weird and OCD is saying it's something bad. Bodies have lots of feelings all day long -- gurgles, aches, itches. That's just what bodies do. I'm not going to keep checking for you because checking makes the worry bigger, not smaller. You're healthy, and I trust your body.",
      },
      {
        ageRange: "13-18",
        description:
          "Your teen Googles symptoms obsessively, checks their body for lumps or marks, and may ask to see a doctor frequently despite normal test results. They monitor their heart rate on a smartwatch and panic if it seems 'off.' They may avoid exercise, certain foods, or anything they associate with illness triggers. They know they're probably fine but can't stop the checking -- and each Google search makes the anxiety worse.",
        parentScript:
          "I'm going to ask you to put your phone down and stop searching symptoms. I know that feels impossible right now. But every time you Google, you're feeding OCD, and it will always find one more scary result. If you're truly concerned about a symptom, we'll bring it up at your next regular checkup. I'm not going to give you reassurance about it tonight.",
      },
      {
        ageRange: "18+",
        description:
          "Your adult child calls you describing symptoms and asking if they should go to the ER. They may have seen multiple specialists, all of whom found nothing wrong. They spend hours on health forums and medical websites, always finding a new condition that fits their symptoms. They may have stopped exercising, changed their diet dramatically, or become hyperaware of normal body sensations like their heartbeat or breathing. Medical anxiety is consuming their daily life.",
        parentScript:
          "I hear you, and I know the anxiety feels very real. But we've been here before -- you've had these scares many times, and every time the doctors say you're fine. I'm not going to help you analyze your symptoms over the phone because that's what OCD wants. If something feels truly urgent, go to urgent care. Otherwise, write it down for your next therapy session.",
      },
    ],
    relatedSituationSlugs: ["asks-same-question-over", "scary-thoughts-cant-stop", "hands-raw"]
},

{
  slug: "adult-texts-confirm-safe",
  title: "My adult child texts me repeatedly to confirm things are safe at home",
  categorySlug: "checking-doubting",
  ageRanges: ["18+"],
  severity: "moderate",
  setup: "Your adult child, who may be living on their own or away at college, texts or calls you multiple times a day to confirm that the doors are locked, the stove is off, no one has broken in, or that you are safe. If you don't respond quickly, they become panicked. You want to support them but can feel yourself becoming their round-the-clock reassurance system.",
  ocdMechanics: "When checking OCD extends across physical distance, the compulsion shifts from personally verifying safety to recruiting someone else — usually a parent — as a proxy checker. Your adult child's obsessive thought might be: \"What if the house burned down and my parents are hurt and I could have prevented it?\" Since they can't check in person, texting you becomes the compulsion. Your reply — \"Everything is fine\" — is the momentary relief.\n\nThis pattern often intensifies with distance. When your child lived at home, they could check the stove themselves. Now that they're away, the uncertainty is greater because they can't see the evidence directly, so the OCD demands more frequent reassurance to compensate. The texting can escalate from a few times a day to dozens of messages, sometimes accompanied by demands for photos of locked doors or turned-off appliances.\n\nAs a parent, you face a unique challenge with an adult child: you want to respect their autonomy while also recognizing that complying with the OCD's demands isn't actually helping them. The dynamic can strain your relationship and leave you feeling like an unpaid safety hotline, while your child feels guilty for burdening you but unable to stop.",
  whatNotToDo: [
    {
      mistake: "Answering every text immediately with detailed reassurance",
      explanation: "Instant, thorough replies train the OCD that your availability is essential for your child's safety — which means any delay in your response will feel catastrophic. You're teaching their brain that they cannot tolerate even brief uncertainty, and you're building a system that requires your constant participation."
    },
    {
      mistake: "Sending photos of locked doors or appliances to prove everything is safe",
      explanation: "Photo evidence is an escalation of the reassurance compulsion. It may satisfy the OCD briefly, but it raises the bar: soon one photo isn't enough, or they need photos at specific times, or they need video. You're building an increasingly elaborate ritual together."
    },
    {
      mistake: "Ignoring their messages entirely without explanation",
      explanation: "Going cold turkey without a plan can feel like abandonment to your child and can spike their anxiety to unmanageable levels. The goal is a planned, collaborative reduction — not a sudden cutoff that leaves them in crisis."
    }
  ],
  strategies: [
    {
      name: "Collaborative Response Agreement",
      difficulty: "starter",
      steps: [
        "Have an honest, compassionate conversation during a calm moment: \"I love you, and I can see the OCD is making this really hard. I want to help in a way that actually helps.\"",
        "Together, agree on a response plan: you will reply to one safety check per day — no more.",
        "Choose a time for the check-in (for example, 8 PM) so your child knows when to expect the response.",
        "For any additional texts, send a brief, pre-agreed script: \"This is the OCD. We agreed on our 8 PM check-in. You've got this.\""
      ],
      exampleScript: "\"I can see that the checking texts are getting harder for both of us. I know you don't want to send them — the OCD is making you. Here's what I'd like to try: every night at 8, I'll text you that everything is good at home. That's our check-in. If you text me other times asking, I'm going to send you our signal — the thumbs-up emoji — which means 'I see you, I love you, and this is the OCD.' Is that something you're willing to try with me?\""
    },
    {
      name: "Delayed Response Protocol",
      difficulty: "intermediate",
      steps: [
        "Instead of responding immediately to safety-check texts, introduce a deliberate delay.",
        "Start with a 15-minute delay and gradually extend to 30 minutes, then an hour, then two hours.",
        "When you do respond, keep it brief and don't address the specific fear: \"Love you! All good here.\"",
        "Track the anxiety your child reports during the delay — most find it peaks and then begins to drop on its own.",
        "The goal is for your child to experience that the anxiety passes without your reassurance, building their tolerance for uncertainty."
      ],
      exampleScript: "\"I'm going to start waiting a bit before I respond to the checking texts. Not because I don't care — exactly the opposite. I want your brain to have the chance to learn that it can handle not knowing for a little while. You might notice the anxiety spikes and then starts to come down on its own. That's your brain's natural calming system kicking in, and right now the constant texting isn't letting it do its job.\""
    },
    {
      name: "Transfer to Self-Soothing Toolkit",
      difficulty: "advanced",
      steps: [
        "Help your child build a \"first response\" toolkit for when the urge to text you arises.",
        "The toolkit includes: an uncertainty script (\"Maybe everything is fine, maybe it's not. I can handle not knowing.\"), a grounding exercise (five senses), and a brief physical activity (walk around the block, stretch).",
        "The agreement: they use the toolkit first. If anxiety is still above a 7 out of 10 after 20 minutes, they can text you once.",
        "Over time, increase the threshold: use the toolkit first, wait 30 minutes, then 45, then an hour.",
        "Celebrate every instance where they ride out the urge without texting — these are victories that build real resilience."
      ],
      exampleScript: "\"I know you have the skills to handle this — we've talked about the scripts and the grounding exercises. Here's the new plan: when the OCD tells you to text me, use your toolkit first. Set a timer for 20 minutes. If you're still at a 7 or above after that, send me one text. But I think you'll surprise yourself. I've watched you get through hard things your whole life, and this is one more hard thing you can get through.\""
    }
  ],
  whenItGetsTough: "Reducing reassurance with an adult child introduces unique challenges because you can't control their environment the way you could when they were younger. They may call instead of text, contact other family members for reassurance, or become upset that you're \"not there for them.\" This is the extinction burst, and it may also trigger guilt in you as a parent — you might wonder if you're being cruel or unsupportive. You're not. You're refusing to participate in a pattern that is keeping your child trapped. The burst may be more emotionally complex with an adult child because the relationship dynamics are more nuanced, but the principle is the same: temporary escalation followed by genuine improvement. If your child is in therapy, coordinate with their therapist so everyone is aligned.",
  whenToGetHelp: [
    "Your adult child is sending more than 10 safety-check messages per day and the frequency is increasing",
    "They are unable to function at work or school because of the time spent seeking reassurance",
    "The checking has led to significant relationship strain — between you and your child, or in their romantic or social relationships",
    "They are making major life decisions based on OCD (refusing to live alone, dropping out of school, quitting jobs to be closer to home for checking purposes)",
    "Your child acknowledges the behavior is irrational but feels completely unable to stop, and expresses despair about it"
  ],
      ageSpecificExamples: [
      {
        ageRange: "18+",
        description:
          "Your adult child texts you multiple times a day asking if the doors are locked at their childhood home, if you turned off the stove, if the dog is okay, or if their old room is untouched. They may need you to confirm the same thing they asked an hour ago. If you don't respond quickly, their anxiety escalates and the texts become more urgent. They may call repeatedly if you don't text back. This pattern intensifies during exam periods or other stressful times.",
        parentScript:
          "I love you, and I know it's hard when the worry is this loud. But I'm going to respond to one safety text per day, and my answer is going to be the same: everything at home is fine. Answering every text isn't helping you -- it's just giving OCD another hit. You have the tools to sit with this. I believe in you.",
      },
    ],
    relatedSituationSlugs: ["adult-calls-confirm-no-harm", "confirm-stove-off", "checking-door-locks"]
},

// ============================================================
// CATEGORY 2: Bedtime & Sleep Rituals
// ============================================================

{
  slug: "bedtime-rigid-rituals",
  title: "Bedtime takes over an hour because of rigid rituals",
  categorySlug: "bedtime-rituals",
  ageRanges: ["4-7", "8-12", "13-18"],
  severity: "moderate",
  setup: "What used to be a 20-minute bedtime routine has ballooned into an exhausting production. Your child must complete a specific sequence of actions — arranging pillows, touching certain objects, walking a specific path to bed, saying certain phrases — and if anything is disrupted or feels \"wrong,\" they start the entire sequence over. You're spending an hour or more on bedtime while the rest of the family waits.",
  ocdMechanics: "Bedtime rituals are driven by a need for things to feel \"just right\" — a sensation that OCD researchers call the \"not just right experience\" (NJRE). Unlike checking OCD, where there's a specific feared outcome (\"the house will burn down\"), ritual-based OCD is often driven by a vague, uncomfortable sense that something is off. Your child can't always tell you what bad thing will happen if the ritual isn't completed — they just know it has to be done or the discomfort is unbearable.\n\nThe bedtime context is especially powerful because nighttime naturally increases vulnerability and anxiety. The transition from wakefulness to sleep requires letting go of control, which is exactly what OCD resists. The rituals serve as a bridge — a way to \"earn\" the safety of sleep by performing specific actions. But the bridge keeps getting longer, because each time the ritual is completed successfully, the brain files it as \"necessary\" and adds more steps over time.\n\nThe restart phenomenon — going back to the beginning if something feels wrong — is a hallmark of this type of OCD. The restart provides the illusion of a \"clean\" attempt, but it also dramatically lengthens the process and increases frustration for everyone. Your child isn't choosing to restart; the OCD makes the incomplete ritual feel so distressing that starting over seems like the only option.",
  whatNotToDo: [
    {
      mistake: "Participating in the ritual to speed it up (handing them objects, saying specific phrases back)",
      explanation: "When you become part of the ritual, you're no longer just a bystander — you're a required component. This means the OCD now controls both of you. If you're unavailable one night, your child's anxiety will be even worse because a critical piece of the ritual is missing."
    },
    {
      mistake: "Allowing unlimited time to complete the ritual",
      explanation: "Open-ended time for the ritual communicates that completing it is more important than sleep, more important than the family's schedule, and more important than your child's wellbeing. OCD thrives when there are no boundaries — it will expand to fill whatever time is available."
    },
    {
      mistake: "Abruptly eliminating the entire routine in one night",
      explanation: "Going from a 60-minute ritual to zero overnight is likely to create overwhelming anxiety, a massive meltdown, and potentially a complete refusal to go to bed at all. Effective ERP is gradual — you shrink the ritual step by step, building your child's confidence along the way."
    },
    {
      mistake: "Reasoning with them during the ritual by explaining it's unnecessary",
      explanation: "In the middle of a ritual, your child is in an anxiety-driven state where logic has limited reach. Rational explanations can feel dismissive and may increase frustration. Save conversations about the plan for calm, daytime moments."
    }
  ],
  strategies: [
    {
      name: "Map and Understand the Ritual",
      difficulty: "starter",
      steps: [
        "During a calm daytime moment, sit with your child and write out every step of their bedtime ritual together.",
        "Ask them to rate each step from 1 to 10: how anxious would they feel if they skipped it?",
        "Express curiosity, not judgment: \"I didn't realize the pillow flip was so important to the OCD. Tell me more about that one.\"",
        "This step is about understanding and connection — no changes yet. Your child needs to feel you're on their team before you start challenging the OCD together."
      ],
      exampleScript: "\"I want to understand your bedtime routine better — not to change it yet, just to understand it. Can we write down all the steps together? I'm curious which ones feel the most important and which ones the OCD makes you do even though you don't really want to. Think of it like making a map of what the OCD is asking for.\""
    },
    {
      name: "Shave the Ritual Gradually",
      difficulty: "intermediate",
      steps: [
        "Using the ritual map, identify the step your child rated as least anxiety-provoking (lowest on the 1–10 scale).",
        "Together, agree to drop that one step for one week. Everything else stays the same.",
        "After a successful week, drop the next-lowest-rated step.",
        "Continue shaving one step per week (or per two weeks, depending on your child's pace).",
        "Track the total bedtime routine time — watching it shrink from 60 minutes to 45 to 30 is motivating for both of you."
      ],
      exampleScript: "\"Looking at our ritual map, you said touching the doorframe is only a 3 out of 10 on the anxiety scale. What if we skip that one step this week? Everything else stays exactly the same. The OCD might be a little louder about it for a couple of nights, but I think you can handle a 3. And next week, we'll pick the next easiest one. We're going to shrink this routine together, one piece at a time.\""
    },
    {
      name: "The \"No Restart\" Rule",
      difficulty: "advanced",
      steps: [
        "Explain to your child that restarts are the OCD's most powerful tool for keeping the ritual going. Without restarts, the ritual has a natural endpoint.",
        "Together, establish a \"no restart\" rule: if something feels \"off\" during the routine, they keep going forward. No going back to the beginning.",
        "Acknowledge that this will create significant discomfort: \"It's going to feel wrong. That feeling is the OCD, and it will pass.\"",
        "Be present during the first few no-restart nights. Your calm presence is the scaffold while they build this new skill.",
        "If they accidentally restart out of habit, gently redirect: \"I noticed you went back. Let's pick up where you left off instead of starting over.\""
      ],
      exampleScript: "\"Tonight we're going to try something important. If the routine feels 'off' partway through, we keep going. No starting over. I know that sounds really hard, and honestly, the first night is going to be the worst. The OCD is going to scream that you have to go back. But here's the thing — you've gone forward with an imperfect routine before and nothing bad happened. I'll be right outside your door. You can do this.\""
    }
  ],
  whenItGetsTough: "When you start shrinking the ritual, expect the remaining steps to intensify temporarily. Your child may spend longer on the steps that remain, try to add new micro-steps, or have emotional meltdowns at bedtime. This is the extinction burst — the OCD is compensating for lost territory. You may also see increased anxiety at other times of day as the OCD \"leaks\" into other moments. This is normal and temporary. The key is to hold the line on the steps you've already eliminated while being patient with the process. Most families see meaningful improvement within two to four weeks of consistent gradual reduction. The hardest part is often the first removed step — each one after that tends to be a little easier because your child is building evidence that they can survive the discomfort.",
  whenToGetHelp: [
    "The bedtime ritual consistently exceeds 45 minutes and is getting longer despite your reduction efforts",
    "Your child is losing significant sleep — less than the recommended hours for their age — and it's affecting their daytime functioning",
    "The rituals have expanded beyond bedtime into other transitions: leaving the house, arriving at school, starting meals",
    "Your child becomes physically aggressive or self-injurious when the ritual is interrupted",
    "The rest of the family is being significantly impacted — siblings' bedtimes are disrupted, parental relationship is strained, or family activities are being canceled to accommodate the ritual"
  ],
      ageSpecificExamples: [
      {
        ageRange: "4-7",
        description:
          "Your young child has a bedtime routine that has ballooned to an hour or more. They need their stuffed animals in an exact arrangement, the blanket tucked in a specific way, three sips of water (not two, not four), and a particular goodnight script. If any step is 'wrong,' the entire routine restarts from the beginning. They become hysterical if you try to shorten or skip any step.",
        parentScript:
          "I know the Worry Monster wants us to do bedtime in a very specific way. But the Worry Monster's bedtime rules are making bedtime take so long that you're losing sleep time! Tonight, we're going to skip one step. I know that feels scary, but I'll stay right here with you. The Worry Monster will be grumpy, but it will get tired and go to sleep too.",
      },
      {
        ageRange: "8-12",
        description:
          "Your child's bedtime ritual includes checking that devices are charged to specific percentages, arranging school supplies for the next day in a precise order, reviewing the next day's schedule a set number of times, and performing a sequence of movements before getting into bed. They may set alarms to begin the routine early enough to complete it all. If a step is disrupted -- a sibling walks through, a noise happens -- they restart. Bedtime now takes 60-90 minutes, and they're exhausted the next day.",
        parentScript:
          "Bedtime has gotten really long because OCD keeps adding rules. Let's make a list of all the steps OCD requires and then pick one to drop this week. You choose which one. I know the anxiety will go up at first, but each night it will be a little less. You're the boss, not OCD.",
      },
      {
        ageRange: "13-18",
        description:
          "Your teen's bedtime ritual is elaborate and private -- they may not even tell you all the steps. You can hear them getting in and out of bed, moving around their room, and the lights going on and off. They're staying up until midnight or later completing rituals, then struggling to wake up for school. They're irritable and sleep-deprived, and may have started napping after school to compensate, which further disrupts their sleep cycle. They feel ashamed about needing these rituals at their age.",
        parentScript:
          "I can tell bedtime is really stressful for you, and I think OCD has added a lot of rules that are stealing your sleep. I'm not going to demand you tell me every detail, but I want you to know I'm here to help if you want to push back against some of those rules. What if we just started with one small change?",
      },
    ],
    relatedSituationSlugs: ["goodnight-exact-sequence", "objects-right-place-sleep", "specific-order-restarts"]
},

{
  slug: "goodnight-exact-sequence",
  title: "They need to say goodnight in an exact sequence or start over",
  categorySlug: "bedtime-rituals",
  ageRanges: ["4-7", "8-12"],
  severity: "moderate",
  setup: "Your child has developed a precise goodnight script — specific words in a specific order, sometimes with specific physical actions (two kisses, a hug that lasts a certain count, a particular phrase you must say back). If anything deviates — you say the wrong word, a sibling interrupts, or it doesn't \"feel right\" — they insist on starting the entire sequence over. Some nights this happens five or more times.",
  ocdMechanics: "Goodnight rituals are a common presentation of \"just right\" OCD in younger children, often intertwined with magical thinking. The child may believe (consciously or unconsciously) that the goodnight sequence keeps the family safe overnight. The obsessive thought might be: \"If I don't say it right, something bad could happen while I'm asleep\" or simply a wordless sense that things aren't \"settled\" enough to let go and sleep.\n\nThe compulsion is the sequence itself, and the restart is what locks the cycle in place. Each restart is driven by the feeling that the previous attempt was \"contaminated\" by an error or interruption. The child isn't being defiant — they genuinely feel that an imperfect goodnight is as wrong as wearing a shoe on the wrong foot. The discomfort is real and intense, even if the fear behind it seems irrational from the outside.\n\nFor young children especially, this ritual often involves parents as essential participants. You become a co-performer in the ritual, and the OCD begins to police your behavior too — how you say \"goodnight,\" where you stand, whether you smiled. This is accommodation at its most intimate, and it can feel nearly impossible to disrupt because it's wrapped in the genuine love and tenderness of saying goodnight to your child.",
  whatNotToDo: [
    {
      mistake: "Perfecting your performance of the goodnight script to avoid restarts",
      explanation: "The more precisely you perform the ritual, the more the OCD tightens its requirements. Today it's the exact words; tomorrow it will be the exact tone of voice, the exact position of your hand, the exact pause between phrases. Your perfection feeds the OCD's perfectionism."
    },
    {
      mistake: "Allowing unlimited restarts until it feels \"right\"",
      explanation: "Unlimited restarts teach the OCD that every attempt must feel perfect, which is an impossible standard. The \"right\" feeling becomes harder to achieve over time, leading to more restarts, longer bedtimes, and growing frustration for everyone."
    },
    {
      mistake: "Involving siblings or the other parent as substitutes when you can't get it \"right\"",
      explanation: "Expanding the cast of the ritual expands the OCD's control. Now multiple family members are hostage to the sequence, and the OCD gains new variables to police and new reasons to demand restarts."
    }
  ],
  strategies: [
    {
      name: "Name the Goodnight OCD",
      difficulty: "starter",
      steps: [
        "During a calm moment, talk about how the goodnight routine has grown. Use externalizing language appropriate for their age.",
        "For younger children: \"There's a bossy bug called the Goodnight Bully who keeps telling us we have to say it over and over. But we know one goodnight is plenty.\"",
        "For older children: \"The OCD is turning our goodnight into a performance. Real goodnights don't need a script.\"",
        "Begin noticing together: when the urge to restart arises, label it. \"Is that you wanting to start over, or is that the Goodnight Bully?\""
      ],
      exampleScript: "\"You know how sometimes we have to say goodnight five or six times? I've been thinking about why that happens. I think there's a Goodnight Bully in your brain that keeps saying 'That one didn't count! Do it again!' But here's the thing — every single one of those goodnights counted. I meant it every time, and you felt it every time. The Bully is just trying to trick us.\""
    },
    {
      name: "The \"One Goodnight\" Challenge",
      difficulty: "intermediate",
      steps: [
        "Together, agree on a new plan: one goodnight per night. Whatever it looks and sounds like, that's the one.",
        "Make it deliberately imperfect on purpose. Say goodnight in a silly voice, or from the doorway instead of beside the bed.",
        "After the single goodnight, leave the room. Your child will feel the urge to call you back — this is expected.",
        "You can offer comfort from outside the room: \"I'm right here. The goodnight counted. I love you even though the Bully says we need to try again.\"",
        "If your child comes out of their room, gently walk them back without restarting the goodnight."
      ],
      exampleScript: "\"Tonight, we're going to say goodnight one time. Just once. And I'm going to say it in a funny way — maybe in a robot voice or a whisper or while standing on one foot. It's going to feel weird and the OCD is going to say it doesn't count. But guess what? A silly goodnight is still a real goodnight. I still love you just as much whether I say it perfectly or imperfectly.\""
    },
    {
      name: "Graduated Imperfection Exposure",
      difficulty: "advanced",
      steps: [
        "Build an exposure ladder with your child, ranking different types of goodnight \"imperfections\" by anxiety level.",
        "Easiest might be: saying goodnight from the doorway instead of beside the bed. Hardest might be: saying only \"night\" instead of the full phrase.",
        "Work through one rung of the ladder per few nights, staying at each level until the anxiety drops.",
        "Track the anxiety ratings — your child will see concrete evidence that the discomfort decreases with practice.",
        "The ultimate goal: flexible, spontaneous goodnights that don't follow any fixed script."
      ],
      exampleScript: "\"Let's make a ladder of goodnight challenges. At the bottom, the easy one: I say goodnight from the door instead of your bedside. At the top, the hardest: I just blow you a kiss and leave. We'll start at the bottom and work our way up, and you'll rate how tough it feels each night. I bet by the time we get to the top, it won't feel nearly as scary as you think it does right now.\""
    }
  ],
  whenItGetsTough: "When you reduce the goodnight ritual, your child may cry, call out repeatedly, come out of their room, or become genuinely distressed at bedtime. For younger children especially, this can feel heart-wrenching — they may say things like \"You don't love me\" or \"Something bad will happen.\" This is the OCD speaking through your child, and it is not a reflection of your parenting or your relationship. The extinction burst for goodnight rituals often includes sleep disruption — your child may have trouble falling asleep for several nights as they adjust to the new, shorter routine. This is temporary. Most children adjust within five to ten nights. The key is warmth without compliance: be present, be loving, be reassuring about your love — but do not restart the goodnight.",
  whenToGetHelp: [
    "The goodnight ritual consistently takes more than 20 minutes and is escalating in complexity",
    "Your child becomes extremely distressed — screaming, hyperventilating, or unable to calm down — when the ritual is disrupted",
    "Sleep onset is delayed by more than an hour most nights, affecting daytime behavior and school performance",
    "The ritual has begun to include other family members involuntarily, causing significant household conflict",
    "Your child expresses specific magical thinking beliefs (\"If I don't say it right, Mommy will die\") that they cannot be redirected from"
  ],
      ageSpecificExamples: [
      {
        ageRange: "4-7",
        description:
          "Your young child needs you to say goodnight in a very specific way -- \"Goodnight, sleep tight, I love you, see you in the morning\" -- and if you miss a word or say it in the wrong tone, they dissolve into tears and insist you start over. This can repeat 5-10 times. They may also need to hug you a specific number of times or kiss each cheek in a particular order. Older siblings are frustrated; you're exhausted.",
        parentScript:
          "I love you so much, and I'm going to say goodnight one time tonight. If the Worry Monster says it wasn't right, that's okay -- the Worry Monster is wrong. My goodnight counts every time, even if it doesn't feel perfect. I'll stay nearby while you fall asleep.",
      },
      {
        ageRange: "8-12",
        description:
          "Your child has a specific goodnight phrase that must be said in the right order, with the right intonation, and they may need to respond with their own specific phrase. If you cough, hesitate, or someone interrupts, the sequence restarts. They may also require goodnight from every family member in a particular order. The whole process can take 20-30 minutes, and other family members are growing resentful of the nightly ritual.",
        parentScript:
          "I know OCD says the goodnight has to be perfect or something bad will happen. But here's what I know is true: my love for you doesn't change based on whether I say the words in the exact right order. Tonight I'm going to say goodnight once, my way. The love is the same. Let's see what happens when we don't let OCD script our goodnights.",
      },
    ],
    relatedSituationSlugs: ["bedtime-rigid-rituals", "say-i-love-you-specific-way", "counts-repeats-prevent-bad"]
},

{
  slug: "objects-right-place-sleep",
  title: "They can't sleep unless every object in the room is in the 'right' place",
  categorySlug: "bedtime-rituals",
  ageRanges: ["8-12", "13-18"],
  severity: "moderate",
  setup: "Your child arranges their stuffed animals, books, water bottle, alarm clock, and other objects in precise positions before they can fall asleep. If something gets bumped or looks slightly off, they get up to fix it — sometimes multiple times. Sleepovers are avoided because the environment can't be controlled, and travel is stressful because familiar objects aren't in their usual spots.",
  ocdMechanics: "This is symmetry and ordering OCD applied to the sleep environment. Your child's brain has linked the spatial arrangement of objects with a sense of safety and \"rightness\" that feels necessary for the vulnerable act of falling asleep. The obsession isn't always a specific feared outcome — it's more of a pervasive discomfort, a feeling that something is wrong or incomplete if the water bottle is two inches to the left of its usual spot.\n\nThe compulsion — arranging and rearranging — provides temporary relief from this \"not just right\" feeling. But the standard for \"right\" tends to become more precise over time. What started as having three stuffed animals on the bed evolves into having them in a specific order, facing specific directions, at specific distances from each other. The ritual grows because the OCD's definition of acceptable keeps narrowing.\n\nThe avoidance component is equally important to address. When your child avoids sleepovers, camps, or family trips because they can't control the environment, the OCD is shrinking their world. Each avoided experience confirms the OCD's message that they can only be safe in their precisely arranged room, which makes the next invitation even harder to accept.",
  whatNotToDo: [
    {
      mistake: "Helping arrange the objects to get bedtime moving faster",
      explanation: "When you participate in the arranging, you validate the OCD's requirement and become a necessary part of the ritual. Your child needs to know that you don't believe the arrangement is important — not that you're willing to do it to keep the peace."
    },
    {
      mistake: "Buying more of the \"required\" objects for travel so they can replicate the arrangement",
      explanation: "Duplicating the ritual environment for travel is accommodation — you're reshaping the world to fit the OCD instead of helping your child adapt to the world. This expands the ritual's territory and makes it harder to challenge later."
    },
    {
      mistake: "Agreeing to skip sleepovers and trips to avoid meltdowns",
      explanation: "Avoidance is the fuel that keeps OCD powerful. Every skipped sleepover teaches your child's brain that the feared situation truly is unmanageable. The discomfort of attending would have been temporary; the missed experiences and social connections are harder to get back."
    },
    {
      mistake: "Secretly rearranging objects to see if they notice",
      explanation: "Testing your child by covertly disrupting the arrangement feels deceptive and can damage trust. Exposure needs to be collaborative and planned — your child should be an active participant in challenging the OCD, not a victim of surprise disruptions."
    }
  ],
  strategies: [
    {
      name: "Awareness Without Action",
      difficulty: "starter",
      steps: [
        "Help your child notice the urge to arrange without acting on it right away.",
        "When they start adjusting objects, gently narrate: \"I see the OCD is asking you to fix the water bottle. What would happen if you left it there?\"",
        "Encourage them to sit with the discomfort for just two minutes before arranging. Use a timer.",
        "After the two minutes, they can choose to arrange or not. The goal at this stage is simply building awareness of the urge-action cycle."
      ],
      exampleScript: "\"I noticed you're adjusting your books again. I'm not going to stop you — but before you do, let's try something. Leave them for two minutes and just notice how it feels. Is it a 4? A 6? An 8? Let's watch the number together. Sometimes just noticing the feeling takes some of its power away.\""
    },
    {
      name: "One Object Out of Place",
      difficulty: "intermediate",
      steps: [
        "Together, choose one object in the room to place in a slightly \"wrong\" position at bedtime.",
        "Start with the object your child cares least about — the one that generates the least anxiety when moved.",
        "The object stays in its new position all night. No fixing it after lights out.",
        "Each week (or every few days, depending on progress), choose a new object to leave out of place, or move the same object further from its \"correct\" position.",
        "Celebrate each morning: \"You slept the whole night with the clock turned sideways. Nothing bad happened. How do you feel about that?\""
      ],
      exampleScript: "\"We're going to play a little game with the OCD tonight. We're going to move your alarm clock about three inches to the left — just slightly off from where it usually goes. The OCD is going to hate it. But you and I are going to find out that you can sleep with the clock in a slightly wrong spot. Tomorrow morning, I want to hear how it went. I think you might surprise yourself.\""
    },
    {
      name: "The Messy Room Challenge",
      difficulty: "advanced",
      steps: [
        "Plan a structured exposure: deliberately make the room moderately messy before bed. Not chaotic — just imperfect.",
        "A few books out of order, a stuffed animal on the floor, the water bottle on the wrong side of the bed.",
        "Your child gets into bed with the room in this state. They do not fix anything.",
        "Stay nearby for support. Validate the discomfort without fixing it: \"I know this feels awful. The feeling will pass.\"",
        "Over multiple sessions, increase the \"messiness\" level. The long-term goal is a child who can sleep in any reasonable environment — a hotel room, a friend's house, a camp cabin."
      ],
      exampleScript: "\"Tonight is going to be our biggest challenge yet. We're going to leave your room a little messy on purpose — not disgusting, just imperfect. A few things out of place. I know everything in you is going to want to jump up and fix it. And I'm going to be right here, in the hallway, reminding you that the uncomfortable feeling is temporary and that you are safe in a slightly messy room. This is how we teach the OCD that it doesn't get to control where you can sleep.\""
    }
  ],
  whenItGetsTough: "The first night with an object out of place may result in significant anxiety — your child may lie awake, get up repeatedly to \"just check\" the object, or be unable to fall asleep for an extended period. They may also become emotional or angry at you for suggesting the change. This is expected and temporary. The OCD has conditioned their brain to believe that spatial order equals safety, and you're challenging that equation. The anxiety typically peaks on nights one through three and then begins to decline. If your child gets up to fix the object in the middle of the night during the first attempt, don't treat it as a failure — have a compassionate conversation the next day and try again. Progress in exposure therapy is rarely linear. What matters is the overall trend, not any single night.",
  whenToGetHelp: [
    "The arranging ritual takes more than 30 minutes each night and is not responding to graduated exposure attempts",
    "Your child is completely unable to sleep in any environment other than their precisely arranged room",
    "They have missed significant social experiences — multiple sleepovers, family trips, or camp — due to the arranging requirement",
    "The ordering has expanded beyond bedtime into other areas of life: desk at school, locker, backpack, meal placement",
    "Your child expresses significant distress about the behavior itself — they know it's irrational but feel powerless to stop, and this is affecting their self-esteem"
  ],
      ageSpecificExamples: [
      {
        ageRange: "8-12",
        description:
          "Your child can't fall asleep unless every item in their room is in a precise position -- books perfectly aligned on the shelf, stuffed animals in a specific order, shoes pointed a certain direction, pencils exactly parallel on their desk. If a sibling moves something or if something shifts during the day, they spend 30+ minutes rearranging before they can even try to sleep. They may get up multiple times after lights out to adjust items.",
        parentScript:
          "I see you rearranging everything again. OCD is telling you that you can't sleep unless everything is perfect, but that's not true -- OCD is the thing keeping you awake, not the position of your books. What if we left one thing out of place tonight and you practiced sleeping with that tiny bit of 'wrong'? I'll be right down the hall.",
      },
      {
        ageRange: "13-18",
        description:
          "Your teen's room arrangement ritual has become increasingly specific and time-consuming. They may photograph the room layout on their phone to verify nothing has changed, set up items in patterns invisible to others but critical in their mind, and become furious if anyone enters their room and moves anything. Sleepovers are impossible because they can't replicate the setup. They may be losing an hour or more of sleep to arrangement rituals, and school performance is suffering from exhaustion.",
        parentScript:
          "I respect your space, and I'm not going to deliberately mess things up. But I am going to walk into your room normally, and if something shifts, I'm not going to fix it. I know that triggers anxiety. OCD is telling you that the position of these objects controls whether you're safe, and that's just not true. Let's work on proving that together.",
      },
    ],
    relatedSituationSlugs: ["arranges-objects-desk", "bedtime-rigid-rituals", "doorways-certain-number"]
},

{
  slug: "check-under-bed-closets",
  title: "They make me check under the bed and in closets a specific number of times",
  categorySlug: "bedtime-rituals",
  ageRanges: ["4-7", "8-12"],
  severity: "mild",
  setup: "Every night, your child asks you to check under the bed, inside the closet, and behind the curtains — and not just once, but a specific number of times (often three or five). If you lose count or they're not sure you checked \"properly,\" you have to start over. What seems like a normal childhood fear has turned into a rigid ritual that must be performed exactly right.",
  ocdMechanics: "Many children go through a developmental phase of wanting a parent to check for monsters under the bed. What separates normal childhood fear from OCD is the rigidity and the compulsive nature of the checking. A typically anxious child is satisfied by a single check and some reassurance. A child with OCD is not — the checking must be repeated a specific number of times, performed in a specific way, and any disruption requires a restart.\n\nThe OCD is hijacking a normal fear response and adding its signature features: repetition, exactness, and the involvement of the parent as a ritual performer. Your child's obsessive thought may be about intruders, monsters, or a vague sense of danger. The compulsion is having you check, and the \"magic number\" of checks creates an illusion of control — as if checking exactly three times provides protection that checking twice does not.\n\nBecause you are the one performing the check, this ritual is a form of accommodation from the very first instance. Your child is outsourcing their compulsion to you, and your willing participation — though born entirely from love — teaches the OCD that the danger is real enough to warrant investigation and that your child cannot handle the anxiety on their own.",
  whatNotToDo: [
    {
      mistake: "Checking the exact number of times they request without question",
      explanation: "Perfect compliance with the OCD's demands makes you a reliable ritual partner. The OCD will maintain or increase its requirements because it has learned that you will always comply. Your child's anxiety may feel managed in the short term, but the ritual is strengthening, not weakening."
    },
    {
      mistake: "Adding your own reassurances on top of the check (\"See? Nothing there! I promise you're safe!\")",
      explanation: "Verbal reassurance stacked on top of physical checking is a double dose of accommodation. Your words become part of the required ritual — soon your child will need you to say specific reassuring phrases in a specific order after each check."
    },
    {
      mistake: "Installing nightlights, cameras, or locks to \"prove\" the room is safe",
      explanation: "Technological solutions are accommodation with better hardware. They may work briefly, but the OCD will find a way around them: \"What if the camera isn't pointing the right way?\" or \"What if the lock didn't really catch?\" You end up in an arms race with the OCD's creativity."
    }
  ],
  strategies: [
    {
      name: "Reduce the Check Count Gradually",
      difficulty: "starter",
      steps: [
        "Note how many checks your child currently requires. Let's say it's five.",
        "Explain to your child (during the day, not at bedtime): \"We're going to teach the OCD that five checks aren't needed. This week, I'm going to do four checks instead of five.\"",
        "Drop one check per week: five to four, four to three, three to two, two to one.",
        "Each time you reduce, acknowledge the discomfort: \"I know four feels like it's not enough. The OCD is saying you need one more. But you made it through last night with four, and everything was okay.\""
      ],
      exampleScript: "\"I've been checking under the bed five times every night, and I'm happy to do things to help you feel safe. But I've noticed that the checking isn't actually making the scared feeling go away — it keeps coming back. So this week, I'm going to check four times instead of five. I know that might feel scary at first, but I think you're brave enough to try. And I'll be right down the hall all night.\""
    },
    {
      name: "Transfer the Check to Your Child",
      difficulty: "intermediate",
      steps: [
        "Instead of you performing the check, your child does their own single check with a flashlight.",
        "Hand them the flashlight like a tool of empowerment: \"You're the room inspector tonight.\"",
        "They check under the bed and in the closet once, announce their findings (\"All clear!\"), and get into bed.",
        "No additional checks from you. If they ask you to recheck, redirect: \"You already inspected. The inspector's report is final.\"",
        "This shifts them from passive reassurance-seeker to active agent — a powerful psychological shift."
      ],
      exampleScript: "\"Tonight, I'm promoting you to Official Room Inspector. Here's your flashlight. Your job is to check under the bed and in the closet — one time each — and give me your report. If the Room Inspector says all clear, that's the final answer. I trust the Inspector. The OCD might try to tell you the inspection wasn't good enough, but we both know you're thorough.\""
    },
    {
      name: "Skip the Check Entirely",
      difficulty: "advanced",
      steps: [
        "After successfully reducing to one check (either yours or theirs), propose the ultimate challenge: no checks at all.",
        "Frame it as an experiment, not a permanent change: \"Let's try one night with no checking and see what happens.\"",
        "Your child gets into bed, and you say goodnight normally. No checking, no reassurance about the room.",
        "If they become anxious, you can offer emotional support from outside the room without performing a check: \"I'm here. You're safe. No check needed.\"",
        "After the first successful no-check night, celebrate meaningfully. Build on the success."
      ],
      exampleScript: "\"You've been doing amazing with the room inspections. You went from needing me to check five times to doing one quick check yourself. Tonight, I want to try the ultimate experiment: no check at all. Just walk in, get into bed, and trust that your room is fine. I know the OCD is going to lose its mind over this — and that's actually a good sign. It means we're winning. One night. Just to see. What do you say?\""
    }
  ],
  whenItGetsTough: "When you reduce or eliminate the bedtime checks, your child may initially have more difficulty falling asleep, may call out to you more frequently, or may develop temporary substitute behaviors (like checking the room with their eyes from bed, or asking you to confirm the house is locked instead). This is the OCD looking for a new outlet, and it's a normal part of the extinction burst. For younger children, the distress may manifest as tears, clinginess, or regression in other areas (wanting to sleep in your bed, needing extra comfort during the day). Stay consistent and compassionate. The burst typically peaks within three to five nights and then begins to ease. If your child is under seven, you may need to move more slowly through the steps — one reduction every two weeks instead of every week — and that's perfectly fine.",
  whenToGetHelp: [
    "The checking ritual has expanded beyond the bedroom to other rooms in the house or to checking routines before other activities",
    "Your child is unable to fall asleep without the complete checking ritual, even after weeks of gradual reduction attempts",
    "The required number of checks is increasing rather than decreasing over time",
    "Your child has begun expressing specific fears that are unusually intense or detailed for their age (graphic descriptions of what might happen)",
    "Bedtime anxiety is spilling into daytime: your child is anxious about nighttime hours before bed, or is avoiding being alone in any room"
  ],
      ageSpecificExamples: [
      {
        ageRange: "4-7",
        description:
          "Your young child needs you to check under the bed, in the closet, and behind the curtains a specific number of times before they can even attempt to sleep. One check isn't enough -- it might be three times under the bed, twice in the closet, and once behind each curtain. If you lose count or they feel uncertain, the whole sequence restarts. They genuinely believe something is hiding there, and your checks are the only thing keeping them safe.",
        parentScript:
          "I'm going to check one time, and that one check is going to count. The Worry Monster wants me to check again and again, but checking lots of times actually makes the Worry Monster louder, not quieter. I checked, nothing is there, and you are safe. I'm going to sit right outside your door while you fall asleep.",
      },
      {
        ageRange: "8-12",
        description:
          "Your child knows rationally that nothing is under the bed but can't shake the feeling that something bad will happen if you don't check. The checking ritual has expanded -- now they need you to check every room on the floor, verify windows are locked, and confirm the alarm is set. They may get out of bed to re-check areas themselves after you've left. The ritual takes 20-30 minutes and is getting longer. They feel babyish and embarrassed but can't stop.",
        parentScript:
          "I know you know nothing is under the bed. The problem isn't the bed -- it's OCD making you feel uncertain even when you know the truth. Tonight I'm going to check once, and then I'm done. The uncomfortable feeling is going to come, and it's going to pass. You're getting better at handling this every night.",
      },
    ],
    relatedSituationSlugs: ["bedtime-rigid-rituals", "asks-same-question-over", "bad-will-happen-no-ritual"]
},
  // ---------------------------------------------------------------------------
  // SCHOOL & HOMEWORK + REASSURANCE SEEKING
  // ---------------------------------------------------------------------------
// ============================================================
// CATEGORY 1: School & Homework
// ============================================================

{
  slug: "erases-rewrites-paper-tears",
  title: "My child erases and rewrites letters until the paper tears",
  categorySlug: "school-homework",
  ageRanges: ["4-7", "8-12"],
  severity: "moderate",
  setup: "Your child spends an agonizing amount of time on what should be simple writing tasks. They erase letters over and over, pressing harder each time, until the paper rips or they dissolve into tears. A single worksheet can take an hour or more, and the frustration is heartbreaking to watch.",
  ocdMechanics: "What looks like perfectionism is actually OCD hijacking your child's handwriting. The OCD is telling them that the letters don't look 'right' or don't 'feel right,' and it creates intense discomfort — almost like an itch they can't scratch — until the letter matches an impossible internal standard. This is the obsession: a feeling of wrongness that demands correction.\n\nThe compulsion is the erasing and rewriting. Each time your child erases, they get a brief flash of relief — 'Maybe this time it'll be right.' But OCD moves the goalposts. The relief never lasts, and the standard gets even harder to meet. So they erase again, and again, and again.\n\nOver time, this cycle strengthens itself. The more your child erases to chase that 'just right' feeling, the more OCD learns that this feeling is dangerous and must be resolved. The paper tearing isn't carelessness — it's the physical evidence of how hard your child is fighting against a bully in their brain.",
  whatNotToDo: [
    {
      mistake: "Telling them to 'just stop erasing' or 'it looks fine'",
      explanation: "Your child genuinely cannot see what you see. To them, the letter feels deeply wrong. Dismissing their experience makes them feel broken or misunderstood, and it doesn't address the OCD cycle driving the behavior."
    },
    {
      mistake: "Buying special erasers, pens, or paper to make erasing easier",
      explanation: "This is a form of accommodation — you're making the compulsion more comfortable rather than helping them resist it. Better tools just let OCD run more efficiently."
    },
    {
      mistake: "Doing the writing for them to end the meltdown",
      explanation: "It's completely understandable to want to end the suffering, but writing for them teaches OCD that the distress is too big to handle. It also reinforces the idea that the writing truly must be perfect — so perfect that someone else needs to do it."
    },
    {
      mistake: "Setting a timer and punishing them if they don't finish",
      explanation: "Punishment adds shame on top of an already distressing experience. Your child isn't choosing to be slow — they're trapped in a cycle. Punitive approaches increase anxiety, which actually feeds OCD."
    }
  ],
  strategies: [
    {
      name: "The 'One and Done' Rule",
      difficulty: "starter",
      steps: [
        "Choose a low-stakes writing task (not graded homework — maybe a grocery list or a note to a pet).",
        "Explain the rule together: 'We're going to practice writing each letter just one time. No erasing allowed. The letter gets to be however it comes out.'",
        "Use a pen instead of a pencil so erasing isn't physically possible.",
        "After each letter, say something like 'That letter is done! It did its job. On to the next one.'",
        "Celebrate completing the task, not the quality of the writing. 'You wrote the whole list! How does it feel to be finished?'"
      ],
      exampleScript: "I know OCD is telling you that letter doesn't look right. That's OCD's trick — it wants you to keep erasing forever. We're going to be brave and let that letter be exactly how it is. It's a rebel letter! Can we let it stay and move to the next one?"
    },
    {
      name: "Purposeful Imperfection Practice",
      difficulty: "intermediate",
      steps: [
        "Sit down with your child and explain that you're going to do a 'messy writing challenge' together.",
        "Both of you write the same sentence — but the goal is to make it messy on purpose. Wobbly letters, different sizes, letters touching the lines.",
        "Rate each other's messy writing: 'Ooh, that one is beautifully messy! 10 out of 10!'",
        "Gradually increase the stakes: messy writing on a practice worksheet, then a real (but low-importance) assignment.",
        "Help your child sit with the discomfort by naming it: 'I can see the uncomfortable feeling is showing up. That's OCD. Let's let it be there and keep going.'"
      ],
      exampleScript: "Okay, messy challenge time! I'm going to write my name as wobbly as I can. You try too. Ready? Look at mine — that 'M' looks like a mountain during an earthquake! Your turn. I know it feels weird, and that's actually the point. We're showing OCD that weird is okay."
    },
    {
      name: "Graduated Eraser Limits",
      difficulty: "advanced",
      steps: [
        "Work with your child to set a specific erasing budget for each assignment — for example, 'You can erase 5 times total for this whole page.'",
        "Give them 5 small tokens (coins, buttons, paperclips). Each erase costs one token.",
        "When the tokens are gone, the rule is: the letters stay as they are, even if OCD doesn't like them.",
        "Over several weeks, gradually reduce the token count: 5 → 4 → 3 → 2 → 1 → 0.",
        "Process the experience afterward: 'That was hard. What did you notice? Did the bad feeling get smaller after a while?'"
      ],
      exampleScript: "Here are your five erase tokens for tonight's worksheet. You get to decide which letters are worth spending a token on. When they're gone, we let the rest of the letters be however they are. I know OCD will push back hard — that's actually a sign we're doing something important. I'm right here with you."
    }
  ],
  whenItGetsTough: "When you start limiting erasing, things will almost certainly get worse before they get better. This is called an extinction burst, and it's actually a sign that the approach is working — OCD is losing its grip and fighting back hard. Your child may cry more intensely, have bigger meltdowns, beg you to let them erase 'just one more time,' or refuse to write at all. This is the hardest part for parents, because every instinct tells you to make the pain stop. Hold steady with compassion. You might say: 'I can see how hard this is. I'm not going to let OCD win this one, because I love you too much. I'm right here.' The burst typically peaks within a few days to a week and then begins to subside as your child's brain learns that the 'not right' feeling is uncomfortable but not dangerous.",
  whenToGetHelp: [
    "Writing tasks consistently take more than three times longer than expected for their age, even with strategies in place.",
    "Your child is refusing to do any writing at all — at home or at school — and it's affecting their grades or participation.",
    "The erasing and rewriting has spread to other areas: drawing, coloring, typing, or arranging objects on their desk.",
    "Your child is experiencing significant emotional distress — frequent sobbing, expressions of self-hatred ('I'm so stupid'), or physical symptoms like stomachaches before homework.",
    "You've been consistently applying strategies for 3-4 weeks without any improvement, or the behavior is escalating despite your efforts."
  ],
      ageSpecificExamples: [
      {
        ageRange: "4-7",
        description:
          "Your young child erases their letters and numbers over and over at the kitchen table, pressing harder each time. The paper tears and they melt down, needing to start the whole page over on a fresh sheet. A simple name-writing practice or coloring activity turns into 45 minutes of frustration and tears. They may also erase and redo drawings that look fine to everyone else. You go through erasers faster than pencils.",
        parentScript:
          "I can see you're working so hard on your letters. The Worry Monster wants them to be perfect, but guess what? Your teacher loves letters that look like a kid wrote them -- that means they're doing it right! Let's try something: no erasing for this whole page. Whatever comes out is wonderful. I'll do it with you -- look, my letters are wobbly too!",
      },
      {
        ageRange: "8-12",
        description:
          "Your child erases answers on worksheets until the paper is thin and tears. They may go through entire notebooks in a week, tearing out pages that aren't 'right.' They spend hours on homework that should take 20 minutes, not because they don't understand the material, but because the handwriting or formatting isn't meeting OCD's impossible standards. They're falling behind because assignments aren't submitted, and they get upset if you suggest typing instead because it feels like 'giving in.' Teachers may interpret the messy, erased papers as carelessness when it's actually the opposite.",
        parentScript:
          "Your answers are right -- the OCD just doesn't like how they look. But here's the thing: your teacher is grading your ideas, not your handwriting. What if we tried a rule? Write each answer once. If OCD says it's not good enough, we say 'too bad' and move on. It's going to feel wrong, and that's okay. I'll sit here with you while we practice.",
      },
    ],
    relatedSituationSlugs: ["rewrite-homework-perfect", "refuses-turn-in-work", "adjusts-socks-shoes-even"]
},

{
  slug: "refuses-turn-in-work",
  title: "They refuse to turn in work because it's not 'perfect'",
  categorySlug: "school-homework",
  ageRanges: ["8-12", "13-18"],
  severity: "moderate",
  setup: "Your child finishes their homework — sometimes it's genuinely good work — but then refuses to hand it in. They'll say it's 'not ready,' redo it multiple times, or shove it to the bottom of their backpack. Their grades are suffering not because they can't do the work, but because the work never feels good enough to submit.",
  ocdMechanics: "This pattern is driven by a 'just right' obsession combined with an overwhelming fear of judgment or imperfection. The OCD tells your child that if they turn in work that isn't perfect, something terrible will happen — maybe the teacher will think they're stupid, maybe they'll get a bad grade that ruins everything, or maybe it just feels intolerably 'wrong' to release something imperfect into the world.\n\nThe compulsion is the withholding. By not turning in the work, your child avoids the unbearable anxiety of being judged. Ironically, the consequence (a zero or a missing assignment) is objectively worse than whatever grade they would have received — but OCD doesn't operate on logic. It operates on feeling, and the feeling of submitting imperfect work is more intolerable to OCD than a zero.\n\nEach time your child avoids submitting, the cycle deepens. Their brain learns: 'Submitting is dangerous. Withholding is safe.' The threshold for 'good enough' keeps rising until no piece of work can possibly meet it, and the avoidance becomes the default.",
  whatNotToDo: [
    {
      mistake: "Telling them their work is perfect or showering it with excessive praise",
      explanation: "This becomes another form of reassurance that OCD learns to demand. Your child will start needing you to review and approve every assignment before they can submit it, creating a new compulsion loop."
    },
    {
      mistake: "Reviewing and editing their work to help them feel confident enough to submit",
      explanation: "You become a checkpoint in the OCD cycle. Now they can't turn anything in without your approval, which reinforces the belief that work must be vetted before it's safe to submit."
    },
    {
      mistake: "Punishing them for missing assignments or taking away privileges",
      explanation: "Your child is already suffering. They want to turn in the work — OCD won't let them. Punishment adds shame and increases anxiety, which makes OCD louder, not quieter."
    },
    {
      mistake: "Letting them redo assignments as many times as they want 'so at least they turn something in'",
      explanation: "Unlimited redoing is the compulsion. Allowing it teaches OCD that the work truly must be perfected before submission. You're accommodating the cycle, even though it looks productive on the surface."
    }
  ],
  strategies: [
    {
      name: "The 'First Draft is the Final Draft' Challenge",
      difficulty: "starter",
      steps: [
        "Choose one low-stakes assignment per week (something worth few points or that they find easier).",
        "Set the rule together: 'For this assignment, whatever you write first is what gets turned in. No redoing.'",
        "Have them put their name on it and immediately place it in their backpack or submission folder.",
        "Process the anxiety together: 'On a scale of 1-10, how uncomfortable does this feel right now? Let's check again in 20 minutes.'",
        "Track what actually happens — the grade they receive is almost always better than OCD predicted."
      ],
      exampleScript: "I know this feels really scary. OCD is screaming that this isn't good enough. Here's what I want you to notice: you did the work, you know the material, and your teacher wants to see what you know — not perfection. Let's put it in the folder right now, together. We can sit with the uncomfortable feeling. It won't last forever, I promise."
    },
    {
      name: "Intentional 'Good Enough' Submissions",
      difficulty: "intermediate",
      steps: [
        "Talk with your child about the concept of 'good enough' versus 'perfect.' Draw a line — 'good enough' is at 80%, 'perfect' is at 100% but takes infinite time and causes suffering.",
        "For each assignment, have them identify one thing they would normally redo or improve — and deliberately leave it.",
        "Write 'good enough' at the top of the paper (they can erase it before submitting if they want, but the act of writing it is the exposure).",
        "After submitting, help them rate their anxiety over time: immediately after, one hour later, the next day.",
        "Build evidence: keep a log of 'good enough' submissions and the grades received."
      ],
      exampleScript: "What's one thing OCD wants you to fix on this essay? The conclusion? Okay — that's exactly the part we're going to leave as is. Not because it's bad, but because we're showing OCD that you can handle turning in something that isn't OCD-approved. What do you think the actual grade will be? Let's write down OCD's prediction and your prediction and see who's right."
    },
    {
      name: "Teacher Collaboration and Submission Contracts",
      difficulty: "advanced",
      steps: [
        "With your child's permission, have a conversation with their teacher about what's happening. Frame it as OCD, not laziness or defiance.",
        "Work together to create a 'submission contract': the student will submit all work by the deadline, and the teacher will provide brief, factual feedback (not just praise).",
        "Establish a rule: assignments must be submitted within 5 minutes of completion. No review period.",
        "If your child has a therapist, ask them to help create an ERP hierarchy for submission — starting with easy, low-value assignments and building to major ones.",
        "Consider whether digital submission (uploading and clicking 'submit') is easier or harder than handing in paper — use the easier method first, then work toward the harder one."
      ],
      exampleScript: "I talked to your teacher, and here's what they said: they would rather have your work as it is than not have it at all. They said a B assignment that's turned in helps your grade way more than an A+ assignment that sits in your backpack. I know that's logical and OCD doesn't care about logic — but we're going to practice submitting anyway, because the feeling you're afraid of? It actually gets smaller every time you face it."
    }
  ],
  whenItGetsTough: "When you start requiring submission, your child may escalate significantly. They might refuse to do homework at all (since they can't control the submission part), have panic attacks before class, hide completed work, or become deeply distressed and angry at you for 'not understanding.' This is the extinction burst — OCD is fighting to maintain its control over the submission process. Stay compassionate but firm. Avoid the trap of 'just this once, you can redo it' — each accommodation resets the clock. You might see 1-2 weeks of intensified distress before it begins to ease. Remind yourself and your child: the anxiety is temporary, but the pattern of avoidance, if left unchallenged, is not.",
  whenToGetHelp: [
    "Your child's grades have dropped significantly due to missing or incomplete assignments, and school staff are expressing concern.",
    "The perfectionism has spread beyond homework to tests, class participation, or social interactions — they're withdrawing from activities because nothing feels 'good enough.'",
    "Your child is expressing hopelessness about their academic future or saying things like 'I'm never going to be able to do this.'",
    "They are spending more than double the expected time on assignments due to rewriting and perfectionism, most nights of the week.",
    "School refusal is emerging — they'd rather not go to school than face the possibility of submitting imperfect work."
  ],
      ageSpecificExamples: [
      {
        ageRange: "8-12",
        description:
          "Your child completes their homework but hides it in their backpack rather than turning it in. They say it's 'not ready' or 'not good enough' even after spending hours on it. Teachers report missing assignments while you watch your child do the work every night. They may ask you to review their work repeatedly, and your reassurance that it's fine doesn't help. They'd rather get a zero than turn in something imperfect. Report card comments mention 'missing work' and you're at a loss.",
        parentScript:
          "I know OCD is saying this isn't good enough to turn in. But getting a zero for not turning in great work is worse than getting a B on something that isn't perfect. What if we made a deal: you put it in the teacher's pile without re-reading it one more time? I'll email your teacher to let them know you're working on being braver about this.",
      },
      {
        ageRange: "13-18",
        description:
          "Your teen has multiple assignments they've completed but can't submit. They may sit with their finger over the 'submit' button on the school portal for 20 minutes, or email the teacher asking for extensions to 'polish' work that's already excellent. They're developing a reputation as irresponsible when they're actually paralyzed by perfectionism. College applications feel impossible because nothing they write is ever 'good enough' to represent them. They know the pattern is self-destructive but can't break it alone.",
        parentScript:
          "I can see you've finished that essay and you're sitting on it. OCD wants one more revision, and then one more after that. Let's submit it right now, together. I'll count to three and you hit send. The anxiety is going to spike, and then it's going to come down. You've done this before. Ready?",
      },
    ],
    relatedSituationSlugs: ["erases-rewrites-paper-tears", "rewrite-homework-perfect", "feels-bad-person-thoughts"]
},

{
  slug: "rereads-paragraph-dozens",
  title: "They re-read the same paragraph dozens of times and can't move on",
  categorySlug: "school-homework",
  ageRanges: ["8-12", "13-18", "18+"],
  severity: "moderate",
  setup: "You notice your child has been on the same page of their book or textbook for an impossibly long time. When you ask about it, they admit they keep re-reading the same paragraph because it doesn't 'go in' or doesn't feel 'right.' Reading assignments that should take 20 minutes take two hours, and your child is exhausted and demoralized.",
  ocdMechanics: "This is a compulsion sometimes called 'reading OCD' or 'just right' reading. The obsession is a nagging doubt: 'Did I really understand that? Did I read every word? What if I missed something important?' There's a feeling of incompleteness — like the information didn't fully land — that creates intense discomfort. Your child isn't struggling with reading comprehension; they're struggling with OCD's demand for certainty that they've read 'correctly.'\n\nThe compulsion is the re-reading. Each time they go back to the paragraph, they're trying to get the 'click' — that feeling of 'okay, now I've got it.' But OCD keeps snatching the click away. Even when they understand the content perfectly, the feeling of understanding doesn't arrive, so they read it again. And again.\n\nThis cycle is especially cruel because it makes your child feel stupid when they're not. They start to believe something is wrong with their brain — 'Why can't I just read like everyone else?' — when the real problem is OCD creating artificial doubt. The more they re-read to resolve the doubt, the stronger the doubt becomes.",
  whatNotToDo: [
    {
      mistake: "Quizzing them on the content to prove they understood it",
      explanation: "This becomes a reassurance ritual. Your child will start depending on you to confirm comprehension after every section, and OCD will eventually decide that even your confirmation isn't enough."
    },
    {
      mistake: "Reading the material aloud to them so they 'don't have to worry about missing anything'",
      explanation: "This is accommodation — you're doing the reading work for them. It also doesn't solve the problem, because OCD will likely shift to doubting whether they heard you correctly."
    },
    {
      mistake: "Telling them to 'just move on' without acknowledging how hard it is",
      explanation: "They would love to 'just move on.' The inability to do so is exactly what makes this OCD. Dismissive responses make them feel alone in their struggle."
    },
    {
      mistake: "Allowing unlimited time for reading assignments to avoid conflict",
      explanation: "Unlimited time lets the compulsion expand to fill all available space. Two hours becomes three, then four. The accommodation removes any motivation for OCD to loosen its grip."
    }
  ],
  strategies: [
    {
      name: "The 'One Read' Rule with a Pointer",
      difficulty: "starter",
      steps: [
        "Give your child a physical pointer — a bookmark, index card, or even their finger — to place under each line as they read.",
        "Set the rule: the pointer only moves forward. Once you pass a line, it's done. No going back.",
        "Start with low-stakes reading: a fun article, a comic, or a chapter of a book they've already read before.",
        "If they feel the urge to re-read, have them say 'OCD wants me to go back' and keep the pointer moving forward.",
        "After finishing, ask: 'What do you remember?' — they'll be surprised how much they retained."
      ],
      exampleScript: "Here's the deal: OCD is never going to give you that 'click' feeling, no matter how many times you re-read. It's a trick. So we're going to use this bookmark as our 'forward-only' tool. When OCD says 'go back,' we're going to say 'nope' and keep going. It's going to feel wrong — that's okay. Wrong feelings aren't facts."
    },
    {
      name: "Timed Reading with Intentional Uncertainty",
      difficulty: "intermediate",
      steps: [
        "Set a realistic time limit for the reading assignment based on the expected pace for their age (not the OCD pace).",
        "Use a visible timer. When the timer ends, reading stops — regardless of where they are or how it feels.",
        "After the timer, have them write a brief 2-3 sentence summary of what they read without looking back.",
        "Compare the summary to the actual content. Show them the evidence that they understood more than OCD told them they did.",
        "Gradually reduce the time limit as they build confidence that one read is sufficient."
      ],
      exampleScript: "We're going to set a timer for 15 minutes. When it goes off, you close the book, no matter what. Then you tell me what the section was about. I bet OCD is saying 'you'll have no idea what you read.' Let's test that theory. I think you're going to surprise yourself."
    },
    {
      name: "Exposure Hierarchy for Reading",
      difficulty: "advanced",
      steps: [
        "Create a ranked list of reading situations from least to most anxiety-provoking (e.g., casual reading → assigned reading → test prep → reading in class).",
        "Start with the easiest level. Apply the 'one read' rule and track anxiety ratings before, during, and after.",
        "Once anxiety at that level drops below a 3 out of 10, move to the next level.",
        "For higher levels, add challenges: read slightly faster than comfortable, deliberately skip a sentence and keep going, or read in a distracting environment.",
        "Work with their therapist if available to structure this hierarchy and process the experiences."
      ],
      exampleScript: "We've been doing great with the fun reading. Now let's try it with tonight's history chapter. Same rules — pointer goes forward only, one read through. I know this one feels bigger because it's for school. That's exactly why it's our next step. OCD gets smaller every time you prove you can handle the uncertainty."
    }
  ],
  whenItGetsTough: "When you first implement forward-only reading rules, your child's anxiety will spike. They may become tearful, insist they 'didn't understand any of it,' or freeze entirely and refuse to read at all. They might try to sneak re-reads when you're not watching, or develop new compulsions like mouthing the words silently or re-reading in their head. This is OCD scrambling for a workaround. The extinction burst for reading OCD can feel particularly intense because your child genuinely believes they're going to fail academically. Reassure them that this feeling is temporary and that the evidence will show they understand far more than OCD claims. Most families see meaningful improvement within 2-4 weeks of consistent practice.",
  whenToGetHelp: [
    "Your child is unable to complete any reading assignments within a reasonable timeframe, and it's affecting multiple subjects.",
    "The re-reading compulsion has expanded to other areas — re-reading text messages, signs, instructions, or emails.",
    "Your child is developing avoidance strategies: refusing to read, getting others to read for them, or pretending to have read when they haven't.",
    "They are experiencing significant distress — crying during reading, expressing self-hatred ('I'm so dumb'), or having physical anxiety symptoms.",
    "The pattern has persisted for more than a month despite consistent efforts to implement strategies."
  ],
      ageSpecificExamples: [
      {
        ageRange: "8-12",
        description:
          "Your child reads the same passage over and over, convinced they missed something or didn't understand it 'well enough.' A 20-minute reading assignment takes two hours. They may move their finger along every word, mouth each sentence silently, and go back to the beginning of the page if their concentration wavers for even a second. They love stories but dread reading homework because it's become a trap.",
        parentScript:
          "I can see you keep going back to the same paragraph. OCD is saying you didn't really get it, but you did -- you told me what happened in the story just fine. Let's try reading the next paragraph just once and moving on. If OCD says you missed something, we'll just say 'maybe' and keep going.",
      },
      {
        ageRange: "13-18",
        description:
          "Your teen highlights, annotates, and re-reads textbook passages until they feel they've absorbed every word. Study sessions for tests take six or seven hours for material that should take two. They may re-read text messages and emails before sending them, taking 20 minutes to compose a simple reply. They avoid reading-heavy courses and have stopped reading for pleasure entirely because it's become so exhausting and ritualized.",
        parentScript:
          "I notice you've been reading the same chapter for three hours. OCD is going to tell you that you need to read it one more time, and then one more after that. But the truth is, you understood it after the first read. What if you closed the book right now and told me what you remember? I bet it's more than OCD says.",
      },
      {
        ageRange: "18+",
        description:
          "Your adult child is failing courses or falling behind at work because reading has become a compulsion. They re-read emails before sending, re-read textbooks until they can mentally recite every sentence, and re-read forms and contracts so many times they miss deadlines. They may have switched to audio content to avoid reading, but then replay audio segments repeatedly. Professional documents take them four times longer than peers to process.",
        parentScript:
          "I hear you saying you can't keep up with the reading for your classes. I know re-reading feels necessary, but it's OCD, not your comprehension. Have you talked to your therapist about building a 'read once and move on' practice? What support do you need to try that this week?",
      },
    ],
    relatedSituationSlugs: ["rewrite-homework-perfect", "refuses-turn-in-work", "adult-cant-start-assignments"]
},

{
  slug: "wont-go-school-contamination",
  title: "They won't go to school because of contamination fears",
  categorySlug: "school-homework",
  ageRanges: ["4-7", "8-12", "13-18"],
  severity: "severe",
  setup: "Your child is terrified of germs, dirt, or 'contamination' at school. They might refuse to touch doorknobs, sit in their chair, use the bathroom, or eat lunch there. The morning routine has become a battle — tears, pleading, sometimes physical resistance. Some days they simply won't go, and you're watching their world get smaller.",
  ocdMechanics: "Contamination OCD at school is particularly devastating because school is unavoidable, making the anxiety feel inescapable. The obsession is a belief that school surfaces, bathrooms, other children, or the environment itself is contaminated in a way that will cause illness, harm, or an intolerable feeling of 'dirtiness.' This isn't garden-variety germophobia — it's an all-consuming dread that feels as real as a physical threat.\n\nThe compulsions may be visible (excessive hand washing, using sleeves to open doors, refusing to sit down) or invisible (mentally 'decontaminating,' holding their breath, freezing in place). The biggest compulsion of all is avoidance — staying home. Every day your child stays home, the OCD gets a massive reward: 'See? You stayed away from the danger and nothing bad happened. School is definitely dangerous.'\n\nThis creates a vicious cycle of shrinkage. First they avoid the bathroom, then the cafeteria, then certain classrooms, then the whole building. Each avoidance makes the next exposure feel more impossible. The longer the pattern continues, the harder it becomes to reverse — not because your child is weak, but because OCD has been building its case, day by day, that school is not safe.",
  whatNotToDo: [
    {
      mistake: "Allowing them to stay home 'until they feel ready'",
      explanation: "They will never feel ready — that's the nature of OCD. Each day at home teaches their brain that school is truly dangerous and avoidance is the only option. The readiness has to come from action, not from the anxiety disappearing first."
    },
    {
      mistake: "Providing excessive cleaning supplies, wipes, or hand sanitizer as a compromise",
      explanation: "Safety objects become compulsions. Your child will become dependent on the wipes, and OCD will escalate: now the wipes aren't enough, now they need to wipe three times, now they need a specific brand. You've added fuel to the fire."
    },
    {
      mistake: "Extensively reassuring them that school is clean and safe",
      explanation: "Reassurance is a compulsion in disguise. Your child feels better for about 30 seconds, then the doubt returns even stronger. 'But what if you're wrong? What if there's a germ you don't know about?' You cannot out-logic OCD."
    },
    {
      mistake: "Getting angry or frustrated during morning meltdowns",
      explanation: "Your child is not being defiant — they are terrified. Anger adds shame and emotional flooding to an already overwhelming situation. It damages trust and makes them less likely to turn to you for support in facing the fear."
    }
  ],
  strategies: [
    {
      name: "Graduated School Re-entry Plan",
      difficulty: "starter",
      steps: [
        "Work with the school to create a step-by-step re-entry plan. Don't aim for full days immediately.",
        "Start where your child can succeed: maybe that's sitting in the parking lot for 10 minutes, walking to the front door, or attending one class period.",
        "Each step should feel challenging but not impossible — about a 4-6 on a 0-10 anxiety scale.",
        "Stay at each step until the anxiety drops noticeably (usually 3-5 exposures at that level), then move to the next.",
        "Celebrate every single step. Sitting in the parking lot IS progress. Walking through the door IS brave."
      ],
      exampleScript: "I know school feels really scary right now, and I'm not going to pretend it doesn't. But I also know that staying home is making it scarier, not safer. So here's what we're going to do: tomorrow, we're just going to drive to school and sit in the car for 10 minutes. That's it. You don't even have to go inside. We're going to show OCD that you can be near school and be okay."
    },
    {
      name: "Contamination Hierarchy with Response Prevention",
      difficulty: "intermediate",
      steps: [
        "Make a list of all the school-related contamination fears, ranked from least to most scary.",
        "Start with the least scary item. If touching a school book at home is a 3/10, start there.",
        "The key: after the exposure, your child does NOT wash hands, use sanitizer, or perform any decontamination ritual for a set period (start with 15 minutes, build to longer).",
        "Track the anxiety: rate it every few minutes. Show them that it goes down on its own without the ritual (this is called habituation).",
        "Move up the hierarchy as each item becomes manageable. This should ideally be guided by an ERP-trained therapist."
      ],
      exampleScript: "Okay, you touched the textbook. OCD is probably screaming right now — what's the number? An 8? That's really high, and I'm proud of you for doing this. We're going to sit here together and wait. Let's check again in 5 minutes. ... What's it at now? A 6? See that? It came down without washing. Your brain is learning something new."
    },
    {
      name: "Building a School Support Team",
      difficulty: "advanced",
      steps: [
        "Schedule a meeting with the school counselor, teacher, and principal. Share that your child has OCD (not just anxiety or school refusal).",
        "Request a 504 plan or accommodations: a safe person to check in with, permission to arrive late during the re-entry phase, a modified schedule if needed.",
        "Identify one trusted adult at school who your child can go to when anxiety spikes — not for reassurance, but for encouragement to stay.",
        "Coordinate with your child's therapist (if they have one) so the school team understands ERP principles and doesn't accidentally accommodate OCD.",
        "Establish a communication plan: brief daily check-ins between you and the school contact, focused on attendance and coping, not on eliminating anxiety."
      ],
      exampleScript: "I've talked to your school, and they want to help. Mrs. Rodriguez in the counselor's office knows about OCD, and she's going to be your person. If it gets really hard, you can go see her for five minutes — not to go home, but to take a breath and get back to class. You're not doing this alone. We have a whole team."
    }
  ],
  whenItGetsTough: "School re-entry with contamination OCD is one of the hardest things a family can face. When you start pushing attendance, expect the mornings to get dramatically worse before they improve. Your child may scream, cry, cling to you, say they hate you, or have full panic attacks. They may develop physical symptoms — stomachaches, headaches, nausea — that are very real manifestations of anxiety. This is the extinction burst at its most intense. Some parents describe the first week as the hardest thing they've ever done. Hold on to this: research consistently shows that consistent, gradual exposure leads to significant improvement in the majority of children. The anxiety your child feels walking into school today will not be the anxiety they feel in four weeks if you stay the course. Get support for yourself during this time — a therapist, a friend, this community. You cannot pour from an empty cup.",
  whenToGetHelp: [
    "Your child has missed more than two weeks of school due to contamination fears and your strategies aren't reversing the pattern.",
    "They are experiencing panic attacks with physical symptoms (hyperventilating, vomiting, fainting feelings) at the thought of school.",
    "The contamination fears have generalized to home environments — they're now refusing to touch things, eat certain foods, or leave their room.",
    "Your child is expressing hopelessness or despair: 'I'll never be able to go back,' 'What's wrong with me,' or any language suggesting self-harm.",
    "The family system is in crisis: siblings are being significantly affected, you or your partner are missing work regularly, or the daily battles are causing relationship breakdowns."
  ],
      ageSpecificExamples: [
      {
        ageRange: "4-7",
        description:
          "Your young child clings to you at drop-off, crying that school is 'dirty' or that other kids are 'germy.' They may refuse to sit on the classroom rug, share toys, or use the communal art supplies. The teacher reports they're isolated and anxious, spending time washing hands instead of playing. Morning school prep involves tears and negotiations, and you're receiving calls to pick them up because they're too upset to stay.",
        parentScript:
          "I know the Worry Monster is saying school is too germy. But school is where all your friends are, and your teacher keeps the classroom clean. The Worry Monster is just trying to keep you home because that's what Worry Monsters do. Let's be brave together -- I'll walk you to the door and give you a brave high-five.",
      },
      {
        ageRange: "8-12",
        description:
          "Your child complains of stomachaches every school morning -- and the aches are real, caused by anxiety. They worry about shared desks, bathroom germs, the cafeteria, and being near kids who are coughing. They may have started doing homework in isolation to avoid touching shared classroom materials. Their attendance is dropping, friendships are suffering, and they're falling behind academically. They may negotiate to attend only certain 'clean' classes.",
        parentScript:
          "I know your stomach hurts, and I know that's because OCD is making you anxious about school. Staying home feels better right now, but it makes tomorrow even harder. We're going to get you to school today. I've already talked to your teacher about what makes you anxious, and we'll work on it together. You can do hard things.",
      },
      {
        ageRange: "13-18",
        description:
          "Your teen avoids specific classrooms, takes roundabout routes through the school to avoid 'contaminated' areas, and may be skipping classes. They sanitize their desk before sitting down and wipe down their phone after setting it on any school surface. They've stopped eating lunch at school and may be avoiding extracurriculars. Their grades are dropping due to avoidance, and they're becoming increasingly isolated. They may ask to switch to online school.",
        parentScript:
          "I know school feels overwhelming right now because of the contamination worries. I hear you when you say it's hard. But switching to online school would mean giving OCD exactly what it wants -- your whole social life and your independence. Let's find a therapist who specializes in OCD and figure out how to make school manageable again. What feels like the hardest part right now?",
      },
    ],
    relatedSituationSlugs: ["wont-touch-surfaces", "hands-raw", "leaving-house-forever"]
},

{
  slug: "adult-cant-start-assignments",
  title: "My adult child can't start college assignments because nothing feels 'right'",
  categorySlug: "school-homework",
  ageRanges: ["18+"],
  severity: "moderate",
  setup: "Your college-age child calls you in distress, unable to start papers or assignments. They describe sitting in front of their laptop for hours, writing an opening sentence, deleting it, writing another, deleting that. Or they can't begin at all because the conditions don't feel 'right' — wrong time, wrong place, wrong mental state. Deadlines pass, incomplete grades pile up, and they're drowning in shame.",
  ocdMechanics: "The 'just right' obsession in academic work is one of the most paralyzing forms of OCD for young adults. The obsession isn't about content knowledge — your child may be brilliant and fully capable. It's about a feeling: OCD demands that the experience of starting, writing, or completing work must feel 'right,' 'ready,' or 'certain' before they can proceed. Since OCD ensures that feeling never arrives, they're stuck in an infinite waiting room.\n\nThe compulsions take several forms: rewriting opening lines, excessive researching without writing (to feel 'ready enough'), waiting for the 'right' mental state, performing pre-work rituals (cleaning the desk, organizing files, checking things), or simply avoiding the task entirely. Avoidance is the most dangerous compulsion because it provides immediate, powerful relief while causing the most long-term damage.\n\nAs a parent of an adult child, your role shifts. You can't sit next to them during homework anymore. You may feel helpless listening to their distress from a distance. It's important to understand that your support still matters enormously — it just looks different now. The goal is to be a coach and cheerleader without becoming an accommodation partner (doing research for them, proofreading to provide reassurance, calling professors on their behalf).",
  whatNotToDo: [
    {
      mistake: "Doing parts of the assignment for them — researching, outlining, or proofreading to 'just get them started'",
      explanation: "This is accommodation, even when your adult child is in genuine distress. It teaches OCD that they truly can't handle the work alone, and it creates dependency that makes the next assignment even harder."
    },
    {
      mistake: "Calling their professors or the disability office on their behalf without their active involvement",
      explanation: "While disability accommodations may be very appropriate, your adult child needs to be the one advocating for themselves. Doing it for them reinforces OCD's message that they can't handle things. Support them in making the call rather than making it for them."
    },
    {
      mistake: "Providing endless reassurance over the phone that the assignment 'will be fine' or 'doesn't matter that much'",
      explanation: "Those late-night calls where they need you to tell them it's okay — that's a reassurance compulsion. Each time you provide it, you reinforce the cycle. Your love is not the problem; the pattern of seeking and providing reassurance is."
    },
    {
      mistake: "Suggesting they take a semester off 'until the OCD is under control'",
      explanation: "Unless a treatment team recommends this, taking time off usually allows OCD to expand further. The avoidance generalizes, and returning feels even more impossible. Staying engaged — even imperfectly — is usually better than full retreat."
    }
  ],
  strategies: [
    {
      name: "The '5-Minute Ugly Draft' Pact",
      difficulty: "starter",
      steps: [
        "Suggest this framework during your next call: they set a timer for 5 minutes and write absolutely anything related to the assignment. Stream of consciousness. It can be terrible.",
        "The rule: nothing gets deleted during the 5 minutes. Every word stays on the page.",
        "After 5 minutes, they stop. They don't read it back. They save it and walk away for at least 30 minutes.",
        "The next session, they open it and build from whatever is there — no starting over from scratch.",
        "Your role: ask them to text you when they've done their 5-minute draft. Respond with encouragement about the process, not the product."
      ],
      exampleScript: "I hear you saying nothing feels right. OCD is never going to give you permission to start — that's its whole game. So we're not waiting for permission. Five minutes of ugly writing. The worst first draft in the history of your university. Can you try that tonight and text me when it's done? I don't need to see it. I just want to know you started."
    },
    {
      name: "Scheduled Imperfect Submissions",
      difficulty: "intermediate",
      steps: [
        "Help your child set a submission rule: whatever exists at 2 hours before the deadline is what gets submitted. No exceptions.",
        "They can set an alarm. When it goes off, they submit what they have, regardless of completion or quality.",
        "Process the anxiety together after submission — validate that it feels terrible AND that they did something brave.",
        "Track the actual outcomes. What grade did they get on the 'imperfect' submission? Was it as catastrophic as OCD predicted?",
        "Gradually tighten the window: 2 hours before → 4 hours before → a full day before the deadline."
      ],
      exampleScript: "What would happen if you submitted what you have right now? I know OCD says it would be a disaster. But let's think about it: a submitted 70% paper gets a better grade than an unsubmitted 100% paper. Every time. What if 'done' became more important than 'perfect'? That's not lowering your standards — it's choosing to live your life."
    },
    {
      name: "Supporting Professional Treatment from a Distance",
      difficulty: "advanced",
      steps: [
        "Strongly encourage your child to connect with their university counseling center. Many now have OCD-specific resources or can refer to ERP-trained therapists.",
        "Help them research therapists who specialize in OCD and offer telehealth — availability shouldn't be a barrier.",
        "If they're open to it, attend a family session (virtually) to learn how to support without accommodating.",
        "Discuss disability accommodations together: extended deadlines, reduced course loads, or testing accommodations. Help them draft the email to the disability office, but let them send it.",
        "Set healthy boundaries around reassurance-seeking calls: 'I love you and I'm here for you. I'm not going to tell you the paper is good enough, because that's OCD talking, not you. What I will tell you is that I believe in your ability to handle this.'"
      ],
      exampleScript: "I know this is really hard, and I wish I could fix it from here. What I can do is help you find someone who specializes in exactly this — OCD that gets in the way of school. A lot of people deal with this. You're not broken, and this is treatable. Can we look at therapists together this weekend? I'll help you figure out the logistics."
    }
  ],
  whenItGetsTough: "Supporting an adult child through OCD is uniquely painful because you have less control and more distance. When you stop providing reassurance or doing accommodation tasks, your child may call more frequently, become angry or accusatory ('you don't care about me'), or spiral into deeper distress. This is the extinction burst playing out over phone lines and text messages. You may feel cruel, and that guilt is one of the hardest parts of this journey. Remind yourself that accommodation feels like love but functions like fuel for OCD. True support means tolerating your own discomfort of not rescuing them so that they can discover they're capable of rescuing themselves. Get your own support — a therapist, a support group for parents of adults with OCD, or a trusted friend who understands what you're going through.",
  whenToGetHelp: [
    "Your child is at risk of academic dismissal due to missing assignments, incomplete grades, or failed courses directly related to OCD symptoms.",
    "They are isolating significantly — not attending classes, not socializing, spending most of their time in their room engaged in compulsions or avoidance.",
    "They are expressing hopelessness about their future, questioning whether they should drop out, or making statements suggesting they feel fundamentally broken.",
    "The reassurance-seeking calls have become so frequent that they're significantly impacting your own mental health, work, or relationships.",
    "They are using alcohol, substances, or other harmful coping mechanisms to manage the anxiety that OCD creates around academic work."
  ],
      ageSpecificExamples: [
      {
        ageRange: "18+",
        description:
          "Your adult child calls or texts in distress because they can't begin a paper, project, or exam. They spend hours organizing their desk, re-reading the assignment prompt, or researching how to write the perfect opening sentence. By the time they feel 'ready,' the deadline has passed. They may have incomplete grades piling up and are considering dropping out. They know the work isn't actually difficult -- it's the starting that's impossible because nothing feels 'right enough' to begin.",
        parentScript:
          "I know you're stuck, and I know it's not because you can't do the work -- you absolutely can. OCD is demanding that the conditions be perfect before you start. They never will be. What if you set a timer for five minutes and just wrote badly on purpose? Not forever, just to break the ice. Your therapist calls it 'starting ugly.' Can you try that right now while we're on the phone?",
      },
    ],
    relatedSituationSlugs: ["rereads-paragraph-dozens", "rewrite-homework-perfect", "refuses-turn-in-work"]
},

// ============================================================
// CATEGORY 2: Reassurance Seeking
// ============================================================

{
  slug: "asks-same-question-over",
  title: "My child asks the same question over and over and my answers are never enough",
  categorySlug: "reassurance-seeking",
  ageRanges: ["4-7", "8-12", "13-18"],
  severity: "moderate",
  setup: "Your child asks the same question repeatedly — 'Are you sure it's safe?' 'Is this okay?' 'Will I be alright?' — and no matter how many times you answer, it's never enough. You can see the brief flash of relief in their eyes, followed almost immediately by the doubt creeping back. You've answered the same question 30 times in an hour and you're exhausted.",
  ocdMechanics: "Reassurance seeking is one of the most common and most misunderstood OCD compulsions. From the outside, it looks like your child just needs a little extra comfort. From the inside, they are desperately trying to extinguish an unbearable feeling of doubt. The obsession is uncertainty itself — 'What if something bad happens? What if I'm not safe? What if I did something wrong?' The doubt feels physically painful, like a fire alarm that won't stop ringing.\n\nYour answer is the compulsion. When you say 'Yes, you're safe,' your child's brain gets a tiny hit of relief — the alarm turns off for a moment. But OCD learns: 'The alarm worked! The question brought safety! Let's ring it again.' So the doubt comes back, often within seconds, and the question returns. Over time, OCD raises the bar. A simple 'yes' isn't enough anymore — they need you to say it a specific way, a certain number of times, with the right tone of voice.\n\nHere's the hardest part for parents to hear: every time you provide reassurance, you are inadvertently strengthening the OCD cycle. This is not your fault — reassuring your frightened child is one of the most natural parenting instincts in the world. But in the context of OCD, reassurance functions as a compulsion, and compulsions make OCD grow.",
  whatNotToDo: [
    {
      mistake: "Answering the question every single time, hoping 'this time it will be enough'",
      explanation: "It will never be enough. OCD has an infinite capacity for doubt. Each answer feeds the cycle and teaches your child that the only way to manage uncertainty is to seek external confirmation — a strategy that will fail them throughout their life."
    },
    {
      mistake: "Getting frustrated and snapping 'I already told you!'",
      explanation: "Your frustration is completely valid, but expressing it as anger makes your child feel ashamed for something they can't control. They don't want to keep asking any more than you want to keep answering. Anger doesn't stop the compulsion — it just adds suffering."
    },
    {
      mistake: "Giving longer, more detailed answers thinking more information will satisfy the doubt",
      explanation: "OCD loves extra information — it just creates more material to doubt. A five-minute explanation gives OCD five minutes of content to pick apart. Longer answers paradoxically increase doubt."
    },
    {
      mistake: "Having another family member answer when you've reached your limit",
      explanation: "This just shifts the reassurance source. OCD will happily accept reassurance from dad, grandma, a sibling, or eventually a teacher or friend. You're expanding the compulsion rather than addressing it."
    }
  ],
  strategies: [
    {
      name: "Name It and Externalize It",
      difficulty: "starter",
      steps: [
        "Give OCD a name with your child — something that makes it feel separate from them (e.g., 'The Worry Bully,' 'Mr. Doubt,' or even just 'OCD').",
        "When the repeated question comes, help them notice: 'Is this you asking, or is this OCD asking?'",
        "Help them answer their own question: 'What did I say the first time you asked? Do you remember the answer?' They almost always do.",
        "Validate the feeling while not feeding the compulsion: 'I can see OCD is being really loud right now. That must be so annoying.'",
        "This is a foundation step — it doesn't stop the reassurance seeking, but it builds awareness that makes the next strategies possible."
      ],
      exampleScript: "Oh, I hear OCD asking that question again. OCD is really pushy today, huh? Here's the thing — you already know the answer. You knew it the first time I said it. OCD just doesn't want you to trust yourself. What do you think the answer is?"
    },
    {
      name: "The Supportive Redirect",
      difficulty: "intermediate",
      steps: [
        "Have a conversation with your child (not during a reassurance-seeking moment) about what you're going to do differently and why. 'I love you, and I've realized that my answers are actually making OCD stronger. So I'm going to change how I respond.'",
        "Choose a standard response for when the repeated question comes. Something warm but firm: 'That sounds like an OCD question. I'm not going to answer OCD, but I'm right here with you.'",
        "Expect them to escalate — more urgent asking, tears, frustration. Stay calm and repeat your standard response.",
        "Offer connection without reassurance: 'Do you want to sit with me? We could do something together while you wait for the feeling to pass.'",
        "After the urge subsides, acknowledge their courage: 'You sat with that doubt for 10 whole minutes. That was really brave.'"
      ],
      exampleScript: "I know you really want me to answer that, and I can hear how upset you are. But we talked about this — when OCD asks the same question over and over, my answer only makes it louder. So I'm going to say: 'That's OCD talking.' I'm not going anywhere. I'm right here. Do you want to come help me make dinner while the feeling passes?"
    },
    {
      name: "Formal Reassurance Reduction Plan",
      difficulty: "advanced",
      steps: [
        "Track the reassurance seeking for a few days: How many times per day? What are the most common questions? When does it peak?",
        "Set a reassurance budget together. If they currently ask 30 times a day, start with 15 allowed reassurances. They get 15 tokens, and each question costs one.",
        "When the tokens are gone, the standard redirect response kicks in for the rest of the day.",
        "Reduce the budget weekly: 15 → 12 → 9 → 6 → 3 → 1 → 0.",
        "Pair this with a reward system: at the end of each day, if they stayed within budget, they earn a small reward. The reward is for tolerating uncertainty, not for not feeling anxious."
      ],
      exampleScript: "Okay, here's today's plan. You have 10 reassurance tokens. Every time you ask me a question that OCD is driving, it costs one token. You get to decide which questions are worth spending a token on. When they're gone, I'll say our phrase: 'I trust you to handle the uncertainty.' At the end of the day, if you have tokens left over, you get to choose what we do after dinner. Sound fair?"
    }
  ],
  whenItGetsTough: "Reducing reassurance is one of the most difficult things you will do as a parent. Your child will likely escalate dramatically when you first change your response. They may cry harder, ask more urgently, become angry, say 'you don't love me,' or physically cling to you begging for an answer. This is the extinction burst, and it can feel absolutely gut-wrenching. Every fiber of your being will want to give in — one more answer won't hurt, right? But it will. Each time you give in during an escalation, you teach OCD that escalation works, and the next burst will be even more intense. Hold your ground with as much warmth as you can muster. The burst typically peaks within 3-7 days and then begins a gradual decline. Your child is learning, in real time, that uncertainty is survivable — and that is one of the most important lessons you can teach them.",
  whenToGetHelp: [
    "The reassurance seeking is consuming more than 30 minutes per day total, or occurring more than 20 times per day.",
    "Your child has begun seeking reassurance from people outside the family — teachers, friends, strangers — or searching online compulsively for answers.",
    "You've attempted to reduce reassurance consistently for 2-3 weeks and the frequency has not decreased or has worsened significantly.",
    "The reassurance seeking is preventing normal daily activities: they can't go to school, eat meals, or fall asleep without extensive reassurance.",
    "Your child is becoming aggressive, self-harming, or expressing hopelessness when reassurance is not provided."
  ],
      ageSpecificExamples: [
      {
        ageRange: "4-7",
        description:
          "Your young child asks \"Are you sure the door is locked?\" or \"Is this food safe?\" or \"Am I going to be okay?\" dozens of times. Your answer never sticks -- they'll nod, seem satisfied for 30 seconds, and then ask again with increasing urgency. The questions may center around safety, health, or whether you're mad at them. You find yourself rephrasing the same answer over and over, growing frustrated, and then feeling guilty for being frustrated.",
        parentScript:
          "I already answered that question, and my answer is the same as before. The Worry Monster wants me to say it again and again, but that doesn't help the Worry Monster go away -- it makes it come back faster. I love you, and I'm going to give you my answer one time. Then we're going to do something fun together.",
      },
      {
        ageRange: "8-12",
        description:
          "Your child asks you to confirm facts, safety, or your feelings multiple times per hour. \"Are you sure you're not mad at me?\" \"Do you promise I won't get sick?\" \"Is the homework right?\" They may also ask their teacher the same questions at school. They recognize the pattern and feel embarrassed, but the anxiety doesn't resolve until they hear the answer -- and even then, the relief lasts only minutes. They may start texting the questions when you're in another room.",
        parentScript:
          "I can see OCD is making you need to hear that answer again. But you already know what I'm going to say, don't you? Tell me -- what do you think my answer is? Right. You knew it. That's you being smart. The hard part is trusting yourself when OCD says you can't. I'm going to help you practice trusting yourself by not answering next time.",
      },
      {
        ageRange: "13-18",
        description:
          "Your teen disguises reassurance-seeking as casual conversation -- \"So the car is making a weird noise, do you think it's safe to drive?\" or \"I texted my friend that joke, it wasn't offensive, right?\" You've learned to recognize the pattern, but they get upset when you point it out. They may text friends the same questions they've asked you, cycling through people until someone gives a 'good enough' answer. The reassurance-seeking extends to social media -- re-reading comments to make sure they weren't misinterpreted.",
        parentScript:
          "I think you're asking me for reassurance right now, and I know you might disagree. I'm going to trust you to figure this one out yourself -- not because I don't care, but because your judgment is good and OCD is the only thing telling you it isn't. What do YOU think the answer is?",
      },
    ],
    relatedSituationSlugs: ["say-i-love-you-specific-way", "confesses-bad-thoughts", "confirm-stove-off"]
},

{
  slug: "say-i-love-you-specific-way",
  title: "They need me to say 'I love you' or 'it's okay' in a specific way",
  categorySlug: "reassurance-seeking",
  ageRanges: ["4-7", "8-12"],
  severity: "mild",
  setup: "Your child needs you to say certain phrases in exactly the right way. 'I love you' has to be said with the right tone, the right words, sometimes the right number of times. If you get it wrong, they get distressed and make you say it again. What used to be a sweet bedtime exchange now feels like a rigid script that you're terrified of messing up.",
  ocdMechanics: "This is a 'just right' compulsion wrapped in the language of love, which makes it especially confusing and painful for parents. The obsession is a feeling of wrongness or incompleteness — when you say 'I love you' and it doesn't feel 'right,' your child experiences genuine distress, as if the love itself didn't count or something bad might happen because it wasn't said correctly.\n\nThe compulsion is requiring you to repeat the phrase until the 'right' feeling arrives. Your child isn't doubting your love — they're trapped by OCD's demand that the experience of hearing it must feel a specific way. It's like trying to scratch an itch that keeps moving. They might need you to say it three times, or with a particular emphasis, or while making eye contact, or in a certain order with other phrases.\n\nWhat starts as a small request gradually becomes an elaborate ritual. The 'just right' threshold keeps shifting, the rules become more complex, and the distress when the rules are broken intensifies. Parents often feel held hostage by these rituals — caught between not wanting to play along and not wanting to upset their child or make them feel unloved.",
  whatNotToDo: [
    {
      mistake: "Complying with every specific demand to keep the peace",
      explanation: "Each compliance makes the ritual more rigid and more necessary. What started as 'say it three times' becomes 'say it three times while holding my hand facing the window.' Full accommodation ensures the ritual will only grow."
    },
    {
      mistake: "Refusing to say 'I love you' at all to avoid triggering the ritual",
      explanation: "Your child needs to hear your love — that's not the problem. The problem is OCD's rules around how it's delivered. Withdrawing affection entirely punishes your child for OCD's demands and can be deeply hurtful."
    },
    {
      mistake: "Getting impatient and saying it in an obviously annoyed tone to 'just get through it'",
      explanation: "An annoyed tone will definitely feel 'wrong' to OCD, triggering more repetitions. It also makes your child feel that their need for love is a burden, which adds shame to an already distressing experience."
    }
  ],
  strategies: [
    {
      name: "One Loving 'I Love You'",
      difficulty: "starter",
      steps: [
        "Talk with your child during a calm moment about what you're going to practice. 'I'm always going to tell you I love you. But I'm going to say it one time, my way, with all my heart.'",
        "At the usual ritual time (bedtime, leaving for school), say 'I love you' once, warmly and genuinely.",
        "If they ask you to repeat it or say it differently, respond with: 'I said it, and I meant it with my whole heart. OCD wants me to say it again, but one real I-love-you is worth a hundred OCD ones.'",
        "Offer physical affection instead of verbal repetition — a hug, a forehead kiss, a squeeze of the hand.",
        "Be prepared for distress. Stay warm, stay present, and don't repeat the phrase."
      ],
      exampleScript: "I love you so much. That was my real, big, true I-love-you for tonight. I know OCD is saying it didn't count or it wasn't right. But my love for you doesn't have rules. It's always there, even when OCD tries to make it feel uncertain. Can I give you a hug instead of saying it again?"
    },
    {
      name: "Breaking the Script Gradually",
      difficulty: "intermediate",
      steps: [
        "Identify all the 'rules' OCD has created around the phrase (specific words, tone, repetitions, timing, body position).",
        "Rank them from least to most important to OCD.",
        "Start breaking the least important rule. If OCD says you must be facing them, say it while looking slightly to the side.",
        "Once that change is tolerated (a few days to a week), break the next rule.",
        "The goal is to dismantle the ritual piece by piece until 'I love you' can be said freely again in any form."
      ],
      exampleScript: "Tonight I'm going to say I love you a little differently. I might say it while I'm tucking in your blanket instead of looking right at you. OCD might not like that, and that's okay. We're teaching OCD that my love doesn't follow rules. It just is."
    },
    {
      name: "Replacing the Ritual with Genuine Connection",
      difficulty: "advanced",
      steps: [
        "Together with your child, brainstorm non-verbal ways to show love: a special handshake, a drawing, a code word, a note under their pillow.",
        "Begin replacing some ritual repetitions with these alternatives. Instead of saying 'I love you' three times, say it once and do the special handshake.",
        "Gradually shift the bedtime or departure routine toward genuine connection (a story, a conversation about their day, a silly moment) rather than scripted phrases.",
        "If OCD demands the old ritual, acknowledge it and redirect: 'OCD wants the old script. Let's do our handshake instead.'",
        "Over time, the new rituals of connection — which aren't OCD-driven — will naturally replace the rigid script."
      ],
      exampleScript: "You know what I was thinking? Instead of saying the same words over and over — which OCD kind of took over and made stressful — what if we invented our own secret love signal? Something that's just ours, not OCD's? I was thinking we could do a special three-squeeze hand hold. Squeeze, squeeze, squeeze — that means I love you. Want to try it?"
    }
  ],
  whenItGetsTough: "When you first refuse to repeat the phrase or comply with the ritual rules, your child may become very distressed. Younger children may cry and say things like 'You don't love me!' or 'You're being mean!' This cuts straight to the heart and is designed (by OCD, not by your child) to get you to comply. Remember: your child is not manipulating you. They genuinely feel unsafe when the ritual is disrupted, because OCD has tied the ritual to feeling loved and secure. The distress is real but temporary. Stay physically close, offer non-verbal affection, and ride the wave. Most children begin to accept the new pattern within 1-2 weeks when parents are consistent. The bedtime that used to take 45 minutes of scripted phrases may shrink back to a warm, genuine 5-minute exchange.",
  whenToGetHelp: [
    "The 'I love you' ritual has extended bedtime or morning routines by more than 20 minutes regularly.",
    "Your child is extending these 'just right' requirements to other phrases, other people, or other daily interactions.",
    "They become inconsolable or have meltdowns lasting more than 15-20 minutes when the ritual is disrupted.",
    "The ritual is affecting their relationships — friends or other family members are confused or distressed by the demands.",
    "You find yourself walking on eggshells, afraid to speak naturally around your child for fear of triggering a ritual cycle."
  ],
      ageSpecificExamples: [
      {
        ageRange: "4-7",
        description:
          "Your young child needs you to say \"I love you to the moon and back\" every night, in that exact phrasing. If you say \"I love you so much\" instead, they get distressed and insist you say it 'the right way.' They may also need you to hug in a specific way, kiss a specific cheek, and repeat the phrase a certain number of times. Drop-off at school requires the exact same goodbye phrase or they melt down.",
        parentScript:
          "I love you in every way a person can say it. If I say it a little different, it means exactly the same thing. I know the Worry Monster says it has to be perfect, but my love works no matter what words I use. Tonight I'm going to say it my way, and all that love is going to reach you just the same.",
      },
      {
        ageRange: "8-12",
        description:
          "Your child has a specific \"I love you\" script that has to be performed exactly right, including tone of voice, number of repetitions, and accompanying physical gestures. If you sneeze during it, if a sibling interrupts, or if your inflection sounds different, the sequence restarts. Other family members are frustrated by the nightly ritual. Your child knows it's \"weird\" but feels terrible dread that something bad will happen to you overnight if the script isn't perfect.",
        parentScript:
          "I want you to hear this: my love for you has nothing to do with whether I say specific words in a specific way. I love you when I say it wrong, when I forget to say it, and when I'm grumpy. OCD is trying to turn my love into a formula, and love doesn't work like that. Tonight, I'm going to say goodnight my way. The love is just as real.",
      },
    ],
    relatedSituationSlugs: ["asks-same-question-over", "goodnight-exact-sequence", "counts-repeats-prevent-bad"]
},

{
  slug: "confesses-bad-thoughts",
  title: "They confess every tiny 'bad' thought and need me to tell them they're not a bad person",
  categorySlug: "reassurance-seeking",
  ageRanges: ["8-12", "13-18"],
  severity: "moderate",
  setup: "Your child comes to you multiple times a day to confess thoughts they've had — 'I thought something mean about my friend,' 'I had a bad word in my head,' 'I wished something bad would happen.' They're visibly distressed and won't calm down until you tell them they're a good person. The confessions are getting more frequent and more trivial, and your reassurance lasts shorter and shorter each time.",
  ocdMechanics: "Confessing is a compulsion driven by a type of OCD sometimes called 'scrupulosity' or 'moral OCD.' The obsession is the intrusive thought itself — an unwanted, disturbing thought that pops into your child's mind uninvited. Everyone has these thoughts. The difference is that OCD grabs onto them and says: 'You had that thought. That means you're a bad person. A good person would never think that.'\n\nYour child feels contaminated by their own thoughts. The confession is an attempt to 'clean' themselves — to transfer the weight of the thought to you and receive absolution. When you say 'You're a good person,' OCD lets go for a moment. But then it whispers: 'But what about the thought you had five minutes ago? You didn't confess that one. What kind of person doesn't confess everything?' And the cycle starts again.\n\nThe cruel irony is that your child is confessing precisely because they are moral, sensitive, and caring. A truly 'bad' person wouldn't be tormented by these thoughts. But OCD convinces them that having the thought is the same as acting on it or wanting it — a cognitive distortion called 'thought-action fusion.' Every confession reinforces the false belief that thoughts are dangerous and must be reported.",
  whatNotToDo: [
    {
      mistake: "Telling them 'Everyone has bad thoughts, you're fine' every time they confess",
      explanation: "While true, this functions as reassurance. Your child will need to hear it again in five minutes, and eventually 'you're fine' won't be enough — they'll need more elaborate absolution."
    },
    {
      mistake: "Asking them to tell you the thought in detail so you can evaluate whether it's really 'bad'",
      explanation: "This turns you into a judge of their thoughts — a role OCD desperately wants to assign you. It also gives OCD more content to obsess over and can accidentally validate the idea that some thoughts are indeed dangerous."
    },
    {
      mistake: "Dismissing the thoughts as 'silly' or 'nothing to worry about'",
      explanation: "The distress your child feels is very real, even if the content seems trivial to you. Dismissing it makes them feel misunderstood and may drive the confessing underground — they'll still obsess but stop telling you, which is worse."
    },
    {
      mistake: "Encouraging them to pray, do a good deed, or 'make up for it' after each confession",
      explanation: "These become compulsions themselves — rituals that OCD requires before the child can feel 'clean' again. You're adding steps to the cycle instead of breaking it."
    }
  ],
  strategies: [
    {
      name: "The 'Thought vs. Person' Lesson",
      difficulty: "starter",
      steps: [
        "During a calm moment, have a conversation about how brains work. Explain that brains produce thousands of random thoughts a day — weird ones, silly ones, scary ones.",
        "Use a metaphor: 'Your brain is like a TV with 500 channels. Sometimes it flips to a channel you don't like. That doesn't mean you chose that channel.'",
        "Share some of your own weird, random thoughts (age-appropriate): 'Sometimes my brain randomly thinks about throwing my phone in the toilet. Does that mean I'm going to? No! It's just a brain burp.'",
        "When they come to confess, gently redirect: 'Sounds like your brain changed to a weird channel. That's normal. You don't need to report every channel flip to me.'",
        "Validate the feeling, not the content: 'I can see that thought made you feel icky. Icky feelings pass.'"
      ],
      exampleScript: "Thank you for trusting me with that. I want you to know something: having a thought doesn't make it true, and it definitely doesn't make you bad. Your brain is like a popcorn machine — thoughts just pop, and you can't control which ones pop next. The fact that this thought bothers you so much tells me something important: you care deeply about being good. OCD is picking on your best quality."
    },
    {
      name: "Scheduled Confession Time",
      difficulty: "intermediate",
      steps: [
        "Together, designate one 'worry time' per day — a specific 10-minute window for confessions (e.g., 4:00 PM).",
        "Outside of worry time, when your child comes to confess, say: 'I hear you. Write it down or save it for worry time. We'll talk about it then.'",
        "During worry time, listen to the confessions but resist reassuring. Instead, ask: 'What do you think? Is this an OCD thought or a real concern?'",
        "Most of the time, by worry time, the urgency of the confession has faded — which is the lesson. Thoughts that feel unbearable in the moment become forgettable by 4 PM.",
        "Gradually shorten worry time from 10 minutes to 5, then to 2, as the confession volume decreases."
      ],
      exampleScript: "I love that you feel safe telling me things. But right now, OCD is making you confess every little thought, and it's making you feel worse, not better. So here's our new plan: from now on, confession time is at 4 o'clock. If a thought pops up before then, write it on this notepad. At 4, we'll look at them together. I bet by 4, most of them won't even feel important anymore."
    },
    {
      name: "Sitting with the 'Bad Person' Feeling",
      difficulty: "advanced",
      steps: [
        "When your child confesses and asks 'Am I a bad person?', respond with: 'What if we don't answer that question right now? What if we just sit with the not-knowing?'",
        "Help them rate the distress: 'How bad does the uncertainty feel right now, 1 to 10?'",
        "Sit with them through the discomfort without providing the answer they're seeking. Stay warm, stay present.",
        "Check the rating every few minutes. Let them see the number go down on its own without reassurance.",
        "After the feeling subsides, process: 'You sat with that feeling for 15 minutes and it went from an 8 to a 3 without me telling you anything. What does that tell you?'"
      ],
      exampleScript: "I know you want me to tell you you're not a bad person. But here's what I've noticed: when I tell you that, it helps for about a minute, and then OCD comes back louder. So today, we're going to try something different. We're going to let that uncomfortable feeling be here and not chase it away. I'm going to sit right next to you. You are safe, and this feeling will pass. What's the number right now?"
    }
  ],
  whenItGetsTough: "When you first stop providing absolution after confessions, your child may become desperate. The confessions may get more intense — they'll share 'worse' thoughts to try to compel your response, or they may cry and say things like 'If you loved me, you'd tell me I'm not bad.' Some children escalate to confessing to other people — teachers, siblings, friends — if you stop being the reassurance source. This is the extinction burst. OCD is panicking because its primary coping tool is being taken away. The escalation can last several days to two weeks. During this time, differentiate between OCD confessions (repetitive, seeking reassurance about thoughts) and genuine emotional sharing (they actually need to talk about something real). You can say: 'I'm always here if something real is bothering you. I'm just not going to be OCD's answering machine anymore.' This distinction helps your child feel supported without the compulsion being fed.",
  whenToGetHelp: [
    "Your child is confessing more than 10 times per day, or the confessions are consuming more than 30 minutes of daily interaction.",
    "The content of the intrusive thoughts is becoming increasingly distressing to your child — themes of harm, sexuality, or blasphemy that are causing significant shame.",
    "Your child is beginning to avoid situations where they might have 'bad' thoughts: refusing to be around certain people, avoiding media, or isolating.",
    "They are developing secondary compulsions around the confessing: needing to confess in a specific order, repeating confessions until they feel 'right,' or performing mental rituals before or after confessing.",
    "Your child has expressed feeling fundamentally broken, evil, or unlovable because of the thoughts they can't control."
  ],
      ageSpecificExamples: [
      {
        ageRange: "8-12",
        description:
          "Your child comes to you, visibly distressed, and confesses things like \"I had a mean thought about my sister\" or \"I accidentally thought a bad word during class\" or \"I wished something bad would happen and now I'm scared it will.\" They need you to tell them they're not a bad person, but your reassurance only lasts minutes before they're back with another confession. The confessions are getting more frequent and more desperate.",
        parentScript:
          "I can see you're really upset about that thought. Here's something important: everybody has weird, uncomfortable thoughts sometimes -- kids, adults, even me. Having a thought doesn't make you bad. OCD is making you feel like you need to confess to feel better, but the confessing actually makes it worse. You are a good person. You don't need to prove it to me by telling me every thought.",
      },
      {
        ageRange: "13-18",
        description:
          "Your teen confesses intrusive thoughts that are increasingly distressing -- they might include violent, sexual, or blasphemous content that horrifies them. They may spend hours analyzing whether having the thought means they're a terrible person. They seek reassurance through long, emotional conversations that leave both of you drained. They might also confess things from years ago -- a time they cheated on a test in third grade, a lie they told a friend in fifth grade. They live in constant moral anxiety.",
        parentScript:
          "I know these thoughts feel really scary, and I can see how much they're bothering you. But the fact that these thoughts upset you so much is actually proof that they don't represent who you are. Bad people don't agonize over having bad thoughts. I'm not going to go through each thought with you tonight -- not because I don't care, but because the analysis is part of the OCD cycle. You are a good person. Period.",
      },
    ],
    relatedSituationSlugs: ["scary-thoughts-cant-stop", "feels-bad-person-thoughts", "asks-same-question-over"]
},

{
  slug: "adult-calls-confirm-no-harm",
  title: "My adult child calls me multiple times a day to confirm they didn't cause harm",
  categorySlug: "reassurance-seeking",
  ageRanges: ["18+"],
  severity: "moderate",
  setup: "Your adult child calls or texts you repeatedly, sometimes dozens of times a day, needing you to confirm that they didn't accidentally hurt someone, cause an accident, or do something terrible. They might ask you to verify they turned off the stove, to confirm that a bump they felt while driving wasn't a person, or to reassure them that a comment they made at work didn't destroy someone's life. Your phone has become a lifeline — and a prison — for both of you.",
  ocdMechanics: "This is harm-focused OCD combined with checking and reassurance-seeking compulsions. Your adult child's obsessions center on the possibility that they have caused or will cause harm to others. OCD generates vivid, convincing scenarios: 'What if I hit someone with my car and didn't notice?' 'What if I left the stove on and the building burns down?' 'What if my email accidentally contained something offensive?' These doubts feel absolutely real — as compelling as a memory.\n\nThe compulsion is calling you. You are their external certainty system — the human fact-checker that OCD demands. When you say 'No, you didn't hit anyone,' the relief is immediate but devastatingly brief. Within minutes or hours, OCD generates a new doubt, or revisits the old one from a different angle: 'But what if Mom didn't see clearly? What if it happened after she looked away?' And they call again.\n\nAs a parent of an adult, this pattern puts you in an impossible position. You want to help your child. Your answer takes 10 seconds and ends their suffering (briefly). But every answer strengthens OCD's hold. You are caught between your child's immediate pain and their long-term recovery, and there is no choice that feels good.",
  whatNotToDo: [
    {
      mistake: "Answering every call and providing detailed reassurance to 'just get them through this moment'",
      explanation: "Each answered call teaches OCD that calling is necessary and effective. The calls will increase in frequency and urgency. You are not helping — you are becoming a component of the OCD cycle."
    },
    {
      mistake: "Checking things on their behalf — driving back to verify they didn't hit someone, going to their apartment to check the stove",
      explanation: "This is accommodation at a high level. You're now performing their compulsions for them. OCD will expand its demands: more checks, more locations, more scenarios."
    },
    {
      mistake: "Ignoring their calls entirely without explanation",
      explanation: "Suddenly going silent can trigger panic and escalate the crisis. Your adult child may interpret it as confirmation that something terrible did happen. The change needs to be discussed, planned, and implemented gradually."
    },
    {
      mistake: "Telling them they're being 'ridiculous' or 'irrational'",
      explanation: "They know it's irrational. That's part of what makes OCD so torturous — you know the fear doesn't make sense, but you can't stop feeling it. Dismissiveness damages the relationship and drives the behavior underground."
    }
  ],
  strategies: [
    {
      name: "The Collaborative Conversation",
      difficulty: "starter",
      steps: [
        "Have an honest, compassionate conversation with your adult child about what you've both noticed: the calls are increasing, the reassurance is lasting less time, and the pattern is taking over both your lives.",
        "Frame it as a team effort against OCD, not you versus them: 'I want to help you fight OCD, and I've realized that answering these calls is actually helping OCD win.'",
        "Together, agree on a new response. When they call for reassurance, you'll say something like: 'I love you. This sounds like OCD. I'm not going to answer that question because I don't want to feed it.'",
        "Ask them to rate their anxiety. Encourage them to sit with it. Offer to stay on the phone silently if needed, but without providing the answer.",
        "End calls with connection, not reassurance: 'I believe in you. Talk soon.'"
      ],
      exampleScript: "I've been thinking about these calls, and I need to be honest with you. I think me answering your questions is making things worse, not better. I know that's hard to hear. I love you — that's why I'm saying it. From now on, when you call and it's an OCD question, I'm going to say: 'That's OCD. I'm not going to answer, but I'm here.' I know this will be hard for both of us."
    },
    {
      name: "Structured Call Reduction",
      difficulty: "intermediate",
      steps: [
        "Track the current call frequency for a few days to establish a baseline (e.g., 15 calls per day).",
        "Set a daily call limit together. Start at about 50-60% of the baseline (e.g., 8 calls per day).",
        "Your adult child must choose which calls to 'spend' — this builds awareness of which fears feel most urgent.",
        "For calls beyond the limit, send a pre-agreed text response: 'Love you. OCD question — sitting this one out with you. You've got this.'",
        "Reduce the limit weekly. Track their anxiety — they'll notice that unanswered questions stop mattering within hours."
      ],
      exampleScript: "Here's what I'm proposing: 8 calls a day for this week. You pick which ones. For the rest, I'll send our text. I know 8 still feels like a lot, and it is — but it's less than 15, and that's progress. Next week we'll try 6. I'm not abandoning you. I'm refusing to abandon you to OCD."
    },
    {
      name: "Supporting Their Professional Treatment",
      difficulty: "advanced",
      steps: [
        "If your adult child is not in treatment with an OCD specialist, this is the most important step. Help them find an ERP-trained therapist — offer to help research, but let them make the call.",
        "Ask their therapist (with your child's permission) for specific guidance on how to respond to reassurance-seeking calls. Follow the therapist's protocol.",
        "If they're in treatment, ask about participating in a family session focused on reassurance reduction.",
        "Set your own boundaries around the calls — it's okay to say: 'I'm available for regular check-ins at 7 PM. OCD calls I won't answer, but our evening call is sacred.'",
        "Get your own support. Parenting an adult with OCD is emotionally exhausting. A therapist, support group, or even the IOCDF's family resources can help you maintain your own wellbeing."
      ],
      exampleScript: "I want to support you, and I also want to be honest: this is affecting my life too. I worry about you constantly, and I can feel myself dreading the phone ringing. That tells me we both need more support than just each other. Would you be open to finding a therapist who specializes in OCD? I'll help you look. And I think I might talk to someone too — about how to be the best support for you without burning myself out."
    }
  ],
  whenItGetsTough: "When you start limiting reassurance calls, expect your adult child's anxiety to spike significantly. They may call more frequently (testing the boundary), leave voicemails with urgent pleas, text repeatedly, or become angry and accusatory. They might say things like 'What if something really did happen and you didn't help me?' or 'If something goes wrong, it's your fault.' This is OCD weaponizing your love and your parental instinct. It is excruciatingly difficult. You may lie awake at night wondering if you're doing the right thing. You may feel like a terrible parent. Hold onto this: the research is clear that reassurance maintains and worsens OCD. By setting boundaries, you are doing one of the most loving things a parent can do — even though it feels like the opposite. The escalation typically peaks within 1-3 weeks and then begins to subside, especially if your child is also engaged in professional treatment.",
  whenToGetHelp: [
    "The reassurance-seeking calls exceed 20 per day or are occurring during work hours, at night, or at other disruptive times for both of you.",
    "Your adult child is unable to drive, go to work, or perform daily activities without calling you first for confirmation of safety.",
    "They have begun involving other people — friends, coworkers, strangers — in their reassurance-seeking or checking compulsions.",
    "The harm fears have escalated to the point where your child is avoiding driving, cooking, being around children, or other normal activities due to fear of causing harm.",
    "You are experiencing significant impacts on your own mental health — anxiety, depression, resentment, or burnout — from the constant demands of the reassurance cycle."
  ],
      ageSpecificExamples: [
      {
        ageRange: "18+",
        description:
          "Your adult child calls you multiple times a day to confess interactions and ask if they could have caused harm. \"Did I say something rude to that cashier?\" \"I drove over a bump -- could I have hit someone?\" \"I shook someone's hand too hard -- did I hurt them?\" They may also confess past events from weeks, months, or years ago, needing you to reassure them it was fine. The calls disrupt your workday, and your reassurance never lasts more than a few hours before the next call comes.",
        parentScript:
          "I love you, and I know it's hard when the worry is this loud. But answering that question for the fifth time isn't helping either of us. You didn't hurt anyone. I've told you that, and you know it's true somewhere underneath the OCD noise. Let's talk about what your therapist suggested instead. I'm going to limit our check-in calls to once in the evening -- not because I don't want to talk to you, but because the frequent calls are part of the problem.",
      },
    ],
    relatedSituationSlugs: ["adult-texts-confirm-safe", "asks-same-question-over", "terrified-might-hurt-someone"]
},
  // ---------------------------------------------------------------------------
  // SYMMETRY & ORDERING + SOCIAL SITUATIONS
  // ---------------------------------------------------------------------------
  // ============================================
  // CATEGORY 1: Symmetry & Ordering
  // ============================================

  {
    slug: "adjusts-socks-shoes-even",
    title: "My child adjusts socks and shoes endlessly until they feel 'even'",
    categorySlug: "symmetry-ordering",
    ageRanges: ["4-7", "8-12", "13-18"],
    severity: "moderate",
    setup: "Every morning, your child pulls their socks up and down, re-ties their shoes, and shifts them on their feet over and over. They say it doesn't feel 'right' or 'even,' and they can't leave until it does. What used to take thirty seconds now eats up twenty minutes or more, and the frustration — theirs and yours — is mounting.",
    ocdMechanics: "When your child says their socks or shoes don't feel 'even,' they're experiencing a sensory-driven obsession rooted in symmetry. OCD is sending a signal that something is 'off' — not quite balanced, not quite right — and it demands that they fix it before they can move on. The discomfort is real, even though there's nothing objectively wrong with how the socks are sitting.\n\nThe compulsion is the repeated adjusting: pulling, tugging, re-tying, re-positioning. Each adjustment brings a brief flash of relief — maybe a second or two where it feels 'okay' — but then OCD moves the goalposts. 'Still not right. Try again.' The child gets trapped in a loop: adjust, brief relief, doubt, adjust again.\n\nOver time, the brain learns that the only way to handle the 'not right' feeling is to keep adjusting until OCD is satisfied. The threshold for 'even enough' keeps rising, and mornings get longer and more distressing. The child isn't being difficult — they're stuck in a cycle that feels impossible to break without help.",
    whatNotToDo: [
      {
        mistake: "Helping them adjust until it feels right",
        explanation: "When you kneel down and help pull their socks 'just so,' you're teaching OCD that the feeling must be resolved before life can continue. You become part of the ritual, and your child's brain learns that the 'not right' feeling is genuinely dangerous and must be fixed."
      },
      {
        mistake: "Buying special socks or shoes to eliminate the problem",
        explanation: "It's tempting to find seamless socks or different shoes, but OCD adapts. The 'not right' feeling will eventually attach to the new items too, and now you've reinforced the idea that comfort must be perfect before your child can function."
      },
      {
        mistake: "Rushing them or expressing visible frustration",
        explanation: "Saying 'Just leave them, they're fine!' or sighing loudly adds shame on top of anxiety. Your child already knows this doesn't make sense — they feel trapped, not stubborn. Pressure often increases the anxiety and makes the ritual take longer."
      },
      {
        mistake: "Letting them stay home when it takes too long",
        explanation: "If OCD learns that enough adjusting means avoiding school, the ritual becomes even more entrenched. Avoidance is OCD's favorite reward, and it will push harder the next morning."
      }
    ],
    strategies: [
      {
        name: "Name the OCD and Set a Kind Boundary",
        difficulty: "starter",
        steps: [
          "Help your child externalize the feeling by giving OCD a name — 'The Even Monster,' 'Bossy Brain,' or whatever resonates with them.",
          "Acknowledge the discomfort out loud: 'I know the OCD is telling you your socks aren't even. That feeling is really uncomfortable.'",
          "Set a gentle, clear boundary: 'We're going to leave in two minutes, even if the feeling is still there.'",
          "Follow through calmly. Walk toward the door together. Let them know you believe they can handle the discomfort.",
          "Praise the bravery afterward, not the socks: 'You left even though OCD was being loud. That took real courage.'"
        ],
        exampleScript: "\"I can see the Even Monster is bugging you about your socks again. That 'not right' feeling is so annoying, isn't it? Here's the thing — the more we listen to it, the louder it gets. So we're going to be brave and walk out the door in two minutes, even if your socks feel weird. I'll be right next to you. You can handle this.\""
      },
      {
        name: "Introduce Purposeful Imperfection",
        difficulty: "intermediate",
        steps: [
          "When anxiety is low (not during a morning rush), talk with your child about 'practicing being uneven on purpose' as a way to boss back OCD.",
          "Start small: have them put on socks and intentionally make one slightly higher than the other. Stay with the discomfort for 30 seconds.",
          "Gradually increase the time they sit with the 'uneven' feeling — one minute, then five, then wearing them that way on a short errand.",
          "Track their anxiety level together (0–10) and notice how it drops naturally without adjusting. This teaches the brain the feeling passes on its own."
        ],
        exampleScript: "\"What if we played a trick on OCD today? Instead of making everything even, we make it uneven on purpose and see what happens. I bet OCD is going to yell at first, but I also bet the feeling fades if we just wait. Want to try? We'll do it together — I'll make my socks uneven too.\""
      },
      {
        name: "Build a Morning Exposure Ladder",
        difficulty: "advanced",
        steps: [
          "Together with your child, list sock-and-shoe-related challenges from easiest to hardest (e.g., wearing socks that are slightly 'off' at home → wearing them to school → putting shoes on without any adjusting).",
          "Start at the easiest step and practice it daily until the anxiety it produces drops by about half.",
          "Move to the next step. Expect some resistance — this is where your calm presence matters most.",
          "Set a consistent 'one adjustment maximum' rule for mornings, then work toward zero adjustments.",
          "Celebrate each step. Consider a small reward system for completing morning routines within a set time frame."
        ],
        exampleScript: "\"We're going to build a bravery ladder for mornings. At the bottom is something a little hard, and at the top is the boss level — putting on socks and shoes once and walking out the door. You get to pick where we start. Every time you climb a step, we'll mark it on your chart. What do you think the first step should be?\""
      }
    ],
    whenItGetsTough: "When you start setting limits on adjusting, expect things to get harder before they get easier. This is called an extinction burst — OCD fights back when it senses it's losing control. Your child may cry, get angry, insist they absolutely cannot leave with their socks like that, or even try to negotiate ('just one more time'). This is not a sign that you're doing it wrong. It's a sign that you're disrupting a pattern OCD depends on. Stay calm, stay warm, and hold the boundary. The intensity usually peaks within the first few days and then starts to come down. If you give in during the burst, OCD learns that escalating works, and the next burst will be bigger. You don't have to be perfect — just consistent enough that your child's brain starts learning a new pattern: the 'not right' feeling is uncomfortable, but it passes.",
    whenToGetHelp: [
      "The morning routine consistently takes more than 30 minutes due to adjusting rituals",
      "Your child is frequently late to school or missing school because of sock and shoe struggles",
      "They are becoming distressed to the point of crying, screaming, or meltdowns during the ritual",
      "The 'evening up' behavior is spreading to other areas — clothing, backpack straps, how they sit in a chair",
      "Your child expresses hopelessness or frustration like 'I hate my brain' or 'I can't stop'"
    ],
        ageSpecificExamples: [
      {
        ageRange: "4-7",
        description:
          "Your young child pulls at their socks, adjusts them over and over, and can't leave the house until both socks feel \"exactly the same.\" Shoes get laced and unlaced, velcroed and un-velcroed. Getting ready in the morning takes an extra 20 minutes because of the sock-and-shoe ritual. They may cry at school when the feeling shifts during the day. The preschool teacher has mentioned they spend recess adjusting footwear.",
        parentScript:
          "I know your socks don't feel right. The Worry Monster is being really picky about socks today. We're going to put them on one time and then go. The Worry Monster is going to say they're not even, but our feet are going to be just fine. Let's count to ten and see if the feeling gets smaller.",
      },
      {
        ageRange: "8-12",
        description:
          "Your child spends 15-20 minutes adjusting socks and shoes each morning, pulling them up, folding them down, re-tying laces until the pressure feels 'even' on both feet. They may take off their shoes at school to readjust and miss class time. Gym class is stressful because changing shoes doubles the ritual. They've started refusing certain types of socks and shoes, narrowing the options to whatever triggers the least discomfort.",
        parentScript:
          "OCD is telling you the socks have to feel perfectly even, but here's a secret: nobody's socks feel perfectly even. We're going to put them on once and walk away. Your feet might feel 'off' for a few minutes, and then your brain will stop paying attention. I promise. Let's test it.",
      },
      {
        ageRange: "13-18",
        description:
          "Your teen spends significant time each morning on footwear rituals but tries to hide it. They may wake up early to build in time for the adjustments, avoid activities that require changing shoes (like gym or bowling), and have very specific requirements about sock thickness, shoe lace tension, and how high the sock sits. They feel ridiculous about it but the \"not right\" feeling is overwhelming. They may have switched to slip-on shoes to reduce the variables.",
        parentScript:
          "I notice you've been spending a lot of time on your shoes in the morning. I'm not going to make a big deal about it, but I want you to know that's OCD, not your feet. What if we tried putting shoes on once tomorrow and leaving within two minutes? The discomfort will fade faster than you think. I used to think it wouldn't too.",
      },
    ],
    relatedSituationSlugs: ["touches-both-hands-even", "dressing-touching-adjusting", "morning-routine-hostage"]
  },

  {
    slug: "touches-both-hands-even",
    title: "They touch things with both hands to make it 'even'",
    categorySlug: "symmetry-ordering",
    ageRanges: ["4-7", "8-12", "13-18"],
    severity: "mild",
    setup: "You've noticed your child touching the railing with their left hand and then going back to touch it with their right. They tap objects, brush against walls, or stroke surfaces with both hands, and they seem uneasy until both sides 'match.' It's slowing things down and drawing attention from other kids.",
    ocdMechanics: "This is one of the most common symmetry compulsions in children. OCD creates a rule: if one side of your body does something, the other side must do the exact same thing, or something will feel incomplete, wrong, or even dangerous. For some children, it's purely a sensory 'not right' experience. For others, a magical thinking layer is added — 'if I don't even it out, something bad might happen.'\n\nThe compulsion — touching with both hands — is the child's attempt to neutralize that uncomfortable, unfinished feeling. The relief is immediate but short-lived. Sometimes OCD demands the second touch be exactly the same pressure, speed, and duration as the first, leading to multiple attempts to get it 'right.'\n\nBecause this compulsion is relatively quick and quiet, it can fly under the radar for a long time. But left unaddressed, the rules tend to multiply. What starts as touching railings can expand to tapping doorframes, evening out steps, or balancing how they chew food. Early, gentle intervention gives your child the best chance of learning to override these signals.",
    whatNotToDo: [
      {
        mistake: "Waiting for them to finish the ritual so you can move on",
        explanation: "Patiently standing by while they touch everything twice may seem kind, but it accommodates OCD. Your child's brain registers: 'This ritual is important enough that even Mom/Dad waits for it.' That deepens the groove."
      },
      {
        mistake: "Telling them it's 'no big deal' or 'just stop doing that'",
        explanation: "Minimizing the experience invalidates what feels very real to your child. They can't 'just stop' any more than you could ignore an itch. Dismissal pushes the behavior underground rather than resolving it."
      },
      {
        mistake: "Pointing it out in front of others",
        explanation: "Drawing attention to the behavior in social settings — 'See, they're doing it again' — adds embarrassment without helping. Your child is likely already self-conscious about it. Address it privately and collaboratively."
      }
    ],
    strategies: [
      {
        name: "Label It and Validate",
        difficulty: "starter",
        steps: [
          "In a calm moment (not when the ritual is happening), bring it up gently: 'I've noticed you sometimes touch things with both hands. Can you tell me about that?'",
          "Listen without judgment. Let them describe the feeling in their own words.",
          "Introduce the concept of OCD as a 'brain glitch' that sends false alarms: 'Your brain is telling you something bad will happen if you don't even it out, but that's OCD talking — not the truth.'",
          "Agree on a name for the urge together — 'The Evener,' 'Matchy Brain,' etc."
        ],
        exampleScript: "\"I've noticed that sometimes when you touch something with one hand, you feel like you have to go back and touch it with the other hand too. Does it feel like something is 'off' until you do? That's OCD playing a trick — it makes you feel like you have to even things out, but you actually don't. It just feels that way. Want to start noticing when it happens together?\""
      },
      {
        name: "The 'One Hand' Challenge",
        difficulty: "intermediate",
        steps: [
          "Choose a low-stakes moment — walking down a hallway at home, touching a light switch.",
          "Challenge your child to touch the object with only one hand and then keep walking. No going back.",
          "Have them rate their discomfort (0–10) right after, then again after one minute. Show them the number drops.",
          "Practice this several times in comfortable settings before trying it in public."
        ],
        exampleScript: "\"Let's play a game. When we walk past the railing, you're going to touch it with just your right hand — and then we keep walking. OCD is going to say 'Go back! Go back!' but we're going to keep going. I bet that weird feeling drops from maybe a 6 to a 2 in about a minute. Want to test it?\""
      },
      {
        name: "Opposite Action Practice",
        difficulty: "advanced",
        steps: [
          "Once your child is comfortable resisting the second touch, introduce intentional asymmetry — touching things only with their non-dominant hand.",
          "Practice in sessions of 10–15 minutes, gradually increasing the situations where they resist.",
          "Have them keep a simple tally of how many times they 'bossed back' OCD each day.",
          "Set a weekly goal together and celebrate when they hit it."
        ],
        exampleScript: "\"You've gotten really good at the one-hand challenge. Ready for the boss level? This time, when OCD says 'touch it with both hands,' you're only going to touch it with your left hand — the opposite of what OCD wants. It's like telling OCD, 'You're not in charge.' How many times do you think you can do that today?\""
      }
    ],
    whenItGetsTough: "The first few times your child resists the second touch, the 'not right' feeling will scream louder. They might describe it as an itch they can't scratch, a pressure in their body, or a sense that something terrible is about to happen. This is OCD's alarm system going off, and it's supposed to be uncomfortable — that's how exposures work. Your job is to be calm and confident that the feeling will pass. Don't reassure them that 'nothing bad will happen' (that becomes its own compulsion). Instead, say, 'The feeling is uncomfortable, and it will pass. You're doing something really brave.' Most children find that the urge drops significantly within a few minutes. If you stay the course, these practice rounds teach the brain that the alarm is false.",
    whenToGetHelp: [
      "The touching ritual is expanding to include more objects, surfaces, or body parts",
      "Your child becomes distressed or panicky when they can't complete the ritual",
      "It's adding noticeable time to daily routines — getting through a hallway, entering rooms, transitions at school",
      "Your child avoids touching things altogether to prevent triggering the need to even out",
      "Teachers or peers are commenting on the behavior"
    ],
        ageSpecificExamples: [
      {
        ageRange: "4-7",
        description:
          "Your young child touches everything with both hands to make it 'even.' If they accidentally brush a wall with their left hand, they must go back and touch it with their right. They may tap things in pairs, touch their face symmetrically, and become distressed when walking if one foot steps on a crack and the other doesn't. Walks to the park take twice as long because of the doubling-back to 'even things up.' They can't explain why they need to do this, just that it feels wrong if they don't.",
        parentScript:
          "I see you going back to touch that with your other hand. The Worry Monster is making you do that because it says things have to be even. But what if they don't? Let's try walking past without going back. It might feel weird for a minute, but I bet the weird feeling goes away before we get to the park.",
      },
      {
        ageRange: "8-12",
        description:
          "Your child's evening-up behavior extends to school and activities. They touch both sides of their desk, tap both feet equally on stairs, and adjust their body until both sides feel symmetrical. They're becoming self-conscious as classmates notice the rituals. Writing is slow because they press the pencil equally on both sides of each stroke. Sports are complicated because natural asymmetric movements feel 'wrong.'",
        parentScript:
          "I know the evening-up feels like something you have to do, but it's OCD making that rule. What if you tried letting one thing be 'uneven' today? Just one thing. Pick something small. I think you'll find that the uncomfortable feeling fades faster than OCD says it will. And every time it fades, you're proving OCD wrong.",
      },
      {
        ageRange: "13-18",
        description:
          "Your teen has developed sophisticated evening-up rituals that are hard to detect -- mental counting, subtle body movements, or internal balancing that happens invisibly. But the rituals slow them down significantly. They may avoid holding hands with a partner because they'll need to hold the other person's hand with the other hand to 'even out.' Test-taking is affected because they tap the pen an even number of times before each answer. They're exhausted by the constant balancing act.",
        parentScript:
          "I want to check in about the evening-up stuff. I know you don't always want to talk about it, and that's okay. But if OCD is taking up a lot of mental energy, that's worth addressing. No pressure. I just want you to know that I see it, I understand it, and I'm here whenever you're ready to push back against it.",
      },
    ],
    relatedSituationSlugs: ["adjusts-socks-shoes-even", "doorways-certain-number", "arranges-objects-desk"]
  },

  {
    slug: "arranges-objects-desk",
    title: "They arrange objects on their desk and get upset if anything is moved",
    categorySlug: "symmetry-ordering",
    ageRanges: ["8-12", "13-18", "18+"],
    severity: "moderate",
    setup: "Your child's desk, shelf, or nightstand has to be arranged in a very specific way. Every pencil, every book, every item has its exact place. If a sibling moves something, or if you tidy up, they become extremely distressed and must put everything back before they can do anything else. It's gone beyond neatness — it feels rigid and anxious.",
    ocdMechanics: "There's an important difference between a child who likes things tidy and a child whose arranging is driven by OCD. The key question is: what happens if the arrangement is disrupted? A neat child might be mildly annoyed. A child with OCD-driven arranging experiences genuine distress — anxiety, a sense of dread, or a deep feeling that things are 'wrong' and must be corrected immediately.\n\nOCD attaches meaning to the arrangement. For some children, it's a vague 'not right' feeling that won't go away until everything is back in place. For others, there's a specific fear: 'If my things aren't arranged correctly, something bad will happen to someone I love.' The compulsion — the careful, precise arranging — temporarily quiets the anxiety, but it also teaches the brain that the arrangement is what's keeping bad things at bay.\n\nOver time, the rules become more elaborate. The pencils must be in size order. The books must be arranged by color. The gap between items must be exactly even. What started as a manageable preference becomes a time-consuming, distress-driven ritual that interferes with homework, sleep, and family dynamics — especially when siblings or parents accidentally disturb the arrangement.",
    whatNotToDo: [
      {
        mistake: "Promising never to touch their things",
        explanation: "While it seems respectful, this accommodates OCD by creating a 'safe zone' that the child becomes dependent on. The protected arrangement becomes more rigid over time, and the anxiety about it being disturbed actually increases."
      },
      {
        mistake: "Deliberately messing things up to prove nothing bad happens",
        explanation: "Surprise disruptions without your child's buy-in feel like an ambush and destroy trust. Effective exposures are collaborative — your child needs to be a willing participant, not a victim of your experiment."
      },
      {
        mistake: "Dismissing it as being 'too picky' or 'controlling'",
        explanation: "Labels like 'control freak' or 'so OCD about your desk' make your child feel broken. The behavior isn't about control — it's about managing overwhelming anxiety. They'd stop if they could."
      },
      {
        mistake: "Letting them skip homework or delay bedtime to finish arranging",
        explanation: "When arranging takes priority over essential activities, OCD gains more territory. It learns that the ritual is more important than life tasks, and the arranging time will only grow."
      }
    ],
    strategies: [
      {
        name: "Collaborative Understanding",
        difficulty: "starter",
        steps: [
          "Ask your child to explain the rules of their arrangement — what goes where and why. Listen carefully and without judgment.",
          "Gently explore what they think would happen if something were out of place. 'What does OCD say will happen?'",
          "Help them see the difference between preference ('I like it neat') and compulsion ('I can't function until it's right').",
          "Introduce the idea of gradually loosening OCD's rules together — as a team, not as something being done to them."
        ],
        exampleScript: "\"I can see your desk arrangement is really important to you, and I want to understand it. Can you walk me through it? ... It sounds like when something is out of place, you get a really uncomfortable feeling that won't go away. That's OCD making rules. The arrangement isn't really keeping anyone safe — OCD just makes it feel that way. What do you think about testing that together?\""
      },
      {
        name: "Gradual Displacement",
        difficulty: "intermediate",
        steps: [
          "With your child's knowledge and agreement, choose one low-importance item on the desk.",
          "Move it slightly — an inch to the left, rotated a few degrees. Something noticeable but small.",
          "Your child's job is to leave it that way for a set period: 10 minutes, then 30, then an hour, then overnight.",
          "Track their anxiety at the start and end of each period. The gap between those numbers is proof their brain can recalibrate.",
          "Gradually increase the challenge: more items displaced, larger movements, longer periods."
        ],
        exampleScript: "\"Here's the plan: we're going to pick one thing on your desk — maybe the stapler — and move it just a little bit. Then we leave it. OCD is going to be noisy about it, and that's okay. We're going to wait and see what your anxiety does after 10 minutes. I think you'll be surprised. You're in control of this — we go at your pace.\""
      },
      {
        name: "Structured Disorder Practice",
        difficulty: "advanced",
        steps: [
          "Designate a short daily 'messy practice' time — 5 minutes where the desk is intentionally disarranged.",
          "Your child arranges things 'wrong' on purpose: books backward, pencils in a random pile, items at odd angles.",
          "They sit with the discomfort for the full 5 minutes without fixing anything.",
          "After the timer, they can choose to rearrange if they want — but many children find the urgency has faded.",
          "Gradually extend the practice time and reduce the post-practice fixing."
        ],
        exampleScript: "\"We're going to do something that feels really weird: messy desk practice. For five minutes, your desk gets to be a disaster — on purpose. Pencils wherever, books at weird angles, the whole thing. Your only job is to sit with it and not fix it. The feeling is going to be loud at first, but we're proving to your brain that messy doesn't mean dangerous. Ready to set the timer?\""
      }
    ],
    whenItGetsTough: "When your child starts resisting the urge to rearrange, expect a surge of anxiety and possibly anger or tears. They may say things like 'You don't understand,' 'I HAVE to fix it,' or 'Something bad will happen.' This is OCD fighting to maintain its rules. The anxiety is real, but the danger isn't. Your child needs you to be their anchor — steady, warm, and unshaken by the storm. Don't argue with OCD logic or try to reason away the fear. Simply acknowledge it: 'I know this feels awful right now. I'm right here. The feeling will pass.' Some children experience physical discomfort — tight chest, stomachache, restlessness. These are anxiety symptoms, and while unpleasant, they are not harmful. They peak and subside. Each time your child rides out the wave without fixing the arrangement, their brain gets a little better at recognizing the false alarm.",
    whenToGetHelp: [
      "Arranging rituals take up more than 30 minutes per day or are increasing in duration",
      "Your child cannot start homework, eat, or sleep until the arrangement is 'perfect'",
      "The rules are expanding — from their desk to their entire room, their backpack, the kitchen table",
      "Sibling conflict has escalated because of touching or moving arranged items",
      "Your child becomes aggressive or has meltdowns when the arrangement is disrupted"
    ],
        ageSpecificExamples: [
      {
        ageRange: "8-12",
        description:
          "Your child's desk at home and at school must be arranged with military precision. Pencils parallel, books stacked by size, papers aligned to the corner. If a classmate bumps their desk or a parent moves a pencil, they stop everything to restore order. They may spend the first 10 minutes of each class arranging their desk instead of listening. At home, homework can't start until the desk arrangement is 'right,' which can take 20 minutes.",
        parentScript:
          "I see you spending a lot of time getting your desk perfect before you can start homework. OCD is the one who needs it perfect -- you don't. What if we tried starting homework with one thing out of place? Just one pencil at an angle. The discomfort is going to come, and then it's going to pass. Let's prove OCD wrong together.",
      },
      {
        ageRange: "13-18",
        description:
          "Your teen's desk, backpack, and locker are meticulously organized, and any disruption causes significant distress. They may re-organize their backpack between every class, spend study time arranging rather than studying, and become upset if someone borrows a pen and returns it to the wrong spot. What looks like tidiness to outsiders is actually rigid OCD-driven control. They're spending more time arranging than learning.",
        parentScript:
          "I know your desk organization feels necessary, but I want to point something out: you're spending 30 minutes arranging and 20 minutes actually studying. OCD is stealing your study time by disguising itself as productivity. What if you set a 2-minute timer for organizing and then started working, no matter what the desk looks like?",
      },
      {
        ageRange: "18+",
        description:
          "Your adult child's living space is controlled by arrangement rituals. Their apartment looks immaculate, but the maintenance consumes hours daily. They may be late to work or class because they can't leave until everything is in position. Roommates are subject to strict placement rules for shared items. They may photograph their desk or room before leaving so they can verify nothing moved when they return. Dating is stressful because they dread someone disrupting their carefully maintained spaces.",
        parentScript:
          "I love visiting you, and I'm not going to rearrange your things. But I'm also not going to tiptoe around your apartment afraid to move a cup. That's OCD making rules for both of us. If I move something, I trust you to handle the discomfort. That's not me being careless -- it's me believing you're stronger than OCD.",
      },
    ],
    relatedSituationSlugs: ["objects-right-place-sleep", "touches-both-hands-even", "specific-order-restarts"]
  },

  {
    slug: "doorways-certain-number",
    title: "They need to step through doorways a certain number of times",
    categorySlug: "symmetry-ordering",
    ageRanges: ["4-7", "8-12", "13-18"],
    severity: "moderate",
    setup: "Your child walks through a doorway, then backs up and walks through again. And again. Sometimes it's a specific number — three times, four times, until it feels 'right.' It happens at home, at school, at the store. Other people stare. Your child looks distressed. Getting from one room to another has become an ordeal.",
    ocdMechanics: "Doorway rituals sit at the intersection of symmetry, counting, and magical thinking. For some children, the compulsion is driven by a 'not right' feeling — the act of passing through the doorway didn't register correctly in their brain, so they need to repeat it until it does. For others, OCD has attached a counting rule: the doorway must be crossed a specific number of times (often an 'even' or 'safe' number) to prevent something bad from happening.\n\nThe doorway itself isn't the problem — it's a trigger point. Thresholds, transitions, and boundary spaces are common OCD hotspots because they represent moving from one state to another. OCD exploits that transition moment and inserts a rule: 'You didn't do it right. Go back. Do it again.'\n\nEach repetition reinforces the neural pathway. The child gets momentary relief ('Okay, that time felt right'), which teaches the brain that repeating works. But the bar keeps moving — three times becomes four, four becomes six, and the 'right' feeling gets harder to achieve. Meanwhile, the child is stuck in doorways while life moves around them, and the embarrassment and frustration compound the anxiety.",
    whatNotToDo: [
      {
        mistake: "Standing in the doorway and blocking them from repeating",
        explanation: "Physical prevention without your child's agreement creates a power struggle, not a therapeutic experience. They need to learn to resist the compulsion internally, not have resistance imposed on them externally."
      },
      {
        mistake: "Counting with them or helping them get to the 'right' number",
        explanation: "Joining the ritual — 'Okay, that was three, one more' — makes you a co-participant in OCD. Your involvement makes the ritual feel more legitimate and harder to give up later."
      },
      {
        mistake: "Avoiding places with doorways",
        explanation: "Rearranging your life around doorways (using open-plan spaces, leaving doors wide open as if they're not there) is accommodation. OCD will just find a new threshold — stairs, hallways, room boundaries — to attach the rule to."
      },
      {
        mistake: "Making them feel rushed or embarrassed in public",
        explanation: "Hissing 'People are watching, hurry up' makes the child feel ashamed without giving them any tools. The shame adds to the anxiety, often making the ritual take longer, not shorter."
      }
    ],
    strategies: [
      {
        name: "Doorway Detective",
        difficulty: "starter",
        steps: [
          "At home, in a calm moment, have your child identify which doorways are hardest and easiest. Make a list together.",
          "Help them notice what OCD says at each doorway: 'Is it a number thing? A feeling thing? A worry about something bad happening?'",
          "Start labeling it in the moment with a light touch: 'OCD's at the doorway again, huh?' This begins externalizing the behavior.",
          "Don't try to change the behavior yet — just build awareness. The goal is for your child to catch OCD in the act."
        ],
        exampleScript: "\"I've noticed doorways have been tricky lately. OCD seems to have a lot of rules about walking through them. Can you tell me — is it about a number, or does it need to feel a certain way? I'm not going to make you stop. I just want to understand what OCD is telling you so we can figure out how to boss it back together.\""
      },
      {
        name: "Walk-Through Practice",
        difficulty: "intermediate",
        steps: [
          "Choose the easiest doorway on the list — probably one inside the house that doesn't trigger much anxiety.",
          "Have your child walk through once, then keep moving. No going back. Rate the anxiety (0–10).",
          "Wait two minutes and rate again. Point out the drop — 'See? It went from a 5 to a 2 without repeating.'",
          "Practice this doorway multiple times throughout the day until the initial anxiety drops to a 2 or below.",
          "Move to the next doorway on the list. Take your time with each one."
        ],
        exampleScript: "\"Okay, we're going to practice the kitchen doorway. You walk through once — just once — and then we keep going to the living room together. OCD is going to say 'Go back!' and we're going to say 'Nope, we're good.' Tell me your number right after you walk through, and I'll ask again in two minutes. I bet that number comes way down.\""
      },
      {
        name: "Rule Breaking Exposures",
        difficulty: "advanced",
        steps: [
          "Once your child can walk through easier doorways without repeating, introduce rule-breaking: walk through the 'wrong' number of times on purpose (if OCD demands even numbers, do it once or three times).",
          "Practice crossing thresholds in intentionally 'wrong' ways — skip through, walk backward, hop on one foot.",
          "Add higher-stakes doorways: the front door, the school entrance, a store entrance.",
          "Work toward a day where every doorway is crossed exactly once, with no do-overs.",
          "Keep a 'doorway victories' tally for motivation."
        ],
        exampleScript: "\"Ready for some OCD rule-breaking? Your brain says you need to go through four times. Today, we're going through once — and on top of that, you're going to do it on one foot. OCD hates this kind of stuff because it proves the rules are fake. The more ridiculous we make it, the more your brain learns that nothing bad happens. How silly can we make this one?\""
      }
    ],
    whenItGetsTough: "Doorway rituals are highly visible, which adds a layer of social anxiety on top of the OCD. When your child starts resisting the repetition, the 'not right' feeling may feel overwhelming — they may freeze in the doorway, cry, or try to bargain ('Just let me do it one more time'). One more time is never one more time with OCD. Hold steady. The anxiety will spike, sometimes dramatically, but if your child walks through and keeps going, the spike will begin to drop within minutes. Some children describe the feeling as 'an itch inside their brain' or 'something is unfinished.' Reassure them that the feeling is uncomfortable but not dangerous, and it always — always — fades. The first few days are the hardest. By the end of a week of consistent practice, most children start to notice that the urge has less power.",
    whenToGetHelp: [
      "The doorway ritual is taking more than a minute per doorway and happening at most transitions",
      "Your child is late to class or avoiding rooms because of doorway anxiety",
      "The ritual is spreading to other thresholds — stairs, getting in and out of cars, crossing lines on the floor",
      "Your child has added counting rituals or magical thinking rules to the doorway behavior",
      "They express extreme distress, saying things like 'Something terrible will happen if I don't do it right'"
    ],
        ageSpecificExamples: [
      {
        ageRange: "4-7",
        description:
          "Your young child walks through doorways and then backs up to walk through again -- sometimes three, four, or five times before they can move on. They may do it at home, at preschool, at the grocery store. They can't explain why, just that it doesn't feel 'right' until they've done it enough times. Transitions between rooms take five times longer than they should, and other children stare.",
        parentScript:
          "I see the Worry Monster is making you go through the door again. Let's try walking through just one time and holding my hand. The Worry Monster is going to say it wasn't right, but it was! You went through the door and you're on the other side. That's all a door needs.",
      },
      {
        ageRange: "8-12",
        description:
          "Your child walks through doorways a set number of times, and the number may change depending on the doorway or their anxiety level. They're late to class because of doorway rituals in the school hallway. Other kids have noticed and asked questions, which humiliates them. They may try to disguise the behavior by pretending they forgot something, walking back to \"get\" it, then walking through again. Some doorways are worse than others, and they may avoid certain rooms entirely to skip the ritual.",
        parentScript:
          "I notice the doorway thing is getting harder. Let's try something: just for this one door, walk through once and stop. I know it feels wrong. The 'not right' feeling is OCD, and it passes. I'm going to stand on the other side and wait for you. You can do this.",
      },
      {
        ageRange: "13-18",
        description:
          "Your teen has internalized the doorway ritual to make it less visible -- they may pause briefly, mentally count, or do a subtle shuffle that most people wouldn't notice. But it's still consuming mental energy with every transition. They may avoid leaving their room to reduce the number of doorway encounters, or feel exhausted by the end of the school day from performing the ritual at every classroom door. They dread fire drills and assemblies because of the multiple doorway transitions.",
        parentScript:
          "I want you to know that I notice the doorway thing even though you've gotten really good at hiding it. I'm not bringing it up to embarrass you -- I'm bringing it up because I think it's costing you more energy than you let on. If you want to work on it, I'm here. If not, I'll be here whenever you're ready.",
      },
    ],
    relatedSituationSlugs: ["touches-both-hands-even", "counts-repeats-prevent-bad", "leaving-house-forever"]
  },

  // ============================================
  // CATEGORY 2: Social Situations
  // ============================================

  {
    slug: "replays-conversations",
    title: "My child replays conversations in their head and asks if they said something wrong",
    categorySlug: "social-situations",
    ageRanges: ["8-12", "13-18", "18+"],
    severity: "moderate",
    setup: "After any social interaction — talking to a friend, answering a question in class, even a casual exchange at a store — your child mentally replays what they said over and over. They come to you for reassurance: 'Did that sound mean?' 'Do you think they're mad at me?' 'Was that a weird thing to say?' The questions can go on for hours, and no amount of reassurance seems to stick.",
    ocdMechanics: "This is a form of OCD that targets social interactions and is sometimes called 'social-focused OCD' or 'responsibility OCD.' The obsession is a fear of having said something offensive, hurtful, or embarrassing — even when there's no evidence that anything went wrong. After a conversation, OCD replays the interaction like a mental recording, searching for proof of a mistake. 'Did I sound rude? Was my tone off? What did they mean by that look?'\n\nThe compulsion takes two forms. Internally, your child mentally reviews the conversation over and over, analyzing every word, every pause, every facial expression they can remember. Externally, they seek reassurance from you: 'Was I mean? Are they mad? Should I apologize?' Each piece of reassurance you provide — 'No, you were fine' — brings seconds of relief before OCD asks, 'But what if Mom is just being nice? What if she didn't hear the bad part?'\n\nThis cycle is exhausting for both parent and child. Your child isn't fishing for attention — they're drowning in doubt. And the more reassurance they receive, the more their brain relies on external validation rather than developing its own ability to tolerate uncertainty. The OCD grows, not shrinks, with each reassurance cycle.",
    whatNotToDo: [
      {
        mistake: "Providing endless reassurance that they didn't say anything wrong",
        explanation: "Reassurance is the fuel this type of OCD runs on. Every time you say 'No, you were fine,' you provide a brief hit of relief that immediately generates more doubt. OCD always finds a way to discount the reassurance and ask again."
      },
      {
        mistake: "Reviewing the conversation with them in detail",
        explanation: "Going through the interaction word by word — 'Well, first you said X, and then they said Y, and that seemed fine...' — is joining the mental review compulsion. You're now performing the ritual together, which strengthens it."
      },
      {
        mistake: "Telling them they're 'overthinking it'",
        explanation: "They know they're overthinking it. That's part of the torture — they can see the behavior is irrational but they can't stop. Being told to 'just stop overthinking' is like being told to 'just stop sneezing.' It invalidates a real struggle."
      },
      {
        mistake: "Contacting the other person to verify everything was fine",
        explanation: "Texting the friend's parent to ask if everything was okay, or checking with a teacher, performs the compulsion on your child's behalf. It teaches OCD that uncertainty must be resolved through investigation."
      }
    ],
    strategies: [
      {
        name: "The Reassurance Redirect",
        difficulty: "starter",
        steps: [
          "Have a conversation (when calm) about why reassurance doesn't work. Use a metaphor: 'It's like scratching a mosquito bite — feels good for a second but makes the itch worse.'",
          "Agree together on a standard response you'll use when they ask for reassurance: 'That sounds like OCD asking. What do you think?' or simply, 'I've already answered that one.'",
          "The first few times, acknowledge how hard it is: 'I know you really want me to say it's fine. OCD is making this so hard. But I'm not going to feed it.'",
          "Be consistent. The power of this strategy comes from repetition — your child's brain needs to learn that the reassurance channel is closed."
        ],
        exampleScript: "\"I've noticed that when you come home from a friend's house, OCD starts asking 'Did I say something wrong?' and you ask me over and over. I know it feels like my answer will fix it, but have you noticed it never really does? The worry comes right back. So we're going to try something: when OCD asks me to reassure you, I'm going to say, 'That's OCD talking. You've got this.' It might feel really hard at first, but I'm doing it because I love you and I don't want to feed the worry monster.\""
      },
      {
        name: "Uncertainty Tolerance Practice",
        difficulty: "intermediate",
        steps: [
          "Help your child practice sitting with the thought 'Maybe I did say something weird — and that's okay.'",
          "Start with low-stakes interactions: a brief exchange with a cashier, a comment to a neighbor. After the interaction, acknowledge the uncertainty: 'Maybe that came out a little odd. Oh well.'",
          "Model this yourself — after your own conversations, casually say, 'I might have said something kind of awkward back there. Whatever, it happens.'",
          "When your child brings up an interaction for review, help them label the uncertainty without resolving it: 'You're not sure if that was okay. That's an uncomfortable feeling, and you can handle it.'"
        ],
        exampleScript: "\"Here's the thing OCD doesn't want you to know: everyone says awkward things sometimes. Even if you did say something a little weird — and I'm not saying you did — it would be totally fine. People forget casual conversations within minutes. So when OCD says 'But what if you were rude?' you can say, 'Maybe I was, maybe I wasn't. Either way, I'm okay.' That drives OCD crazy because it can't argue with 'maybe.'\""
      },
      {
        name: "Scheduled Worry Time with Scripting",
        difficulty: "advanced",
        steps: [
          "Set a specific 10-minute 'worry time' each day — same time, same place.",
          "During worry time, your child writes down or voice-records the conversation they're obsessing over and the feared outcome: 'I said X and now they probably think I'm mean and they'll stop being my friend.'",
          "They read it back or listen to it on repeat for the full 10 minutes. No arguing with it, no reassuring themselves — just sitting with the worst-case thought.",
          "Outside of worry time, when the urge to replay arises, they note it and postpone: 'I'll think about that during worry time.'",
          "Over time, most children find worry time becomes boring. The thought loses its emotional charge."
        ],
        exampleScript: "\"We're going to give OCD its own appointment — 10 minutes, every day at 4 PM. During that time, you can replay conversations as much as you want. Write down the worst-case version: 'I said something terrible and everyone hates me.' Then read it over and over for 10 minutes. Outside that window, when OCD pops up, you tell it: 'Not now. I'll deal with you at 4.' I know it sounds strange, but this is how we teach your brain that these thoughts are boring, not dangerous.\""
      }
    ],
    whenItGetsTough: "When you stop providing reassurance, your child may escalate. They might ask more urgently, rephrase the question ('But just tell me THIS one thing'), get angry ('You don't care about me'), or cry. This is OCD's tantrum — it's losing its favorite coping tool and it's not going down quietly. Stay compassionate but firm. You can acknowledge their pain without answering the question: 'I can see you're really struggling right now. I love you, and I'm not going to answer because the answer won't help — OCD will just ask again.' Some children will try to get reassurance from other sources — the other parent, a sibling, Google. Talk to your whole household about the plan so everyone is consistent. The first week is the hardest. By week two, most children begin developing their own tolerance for the uncertainty.",
    whenToGetHelp: [
      "Your child is spending more than an hour a day mentally reviewing conversations or seeking reassurance",
      "They are avoiding social interactions altogether to prevent the replaying cycle",
      "Academic performance is suffering because they can't concentrate — the mental replay takes over during class",
      "They're becoming isolated, declining invitations, or withdrawing from friendships",
      "They express distress like 'I'm a terrible person' or 'Nobody actually likes me' with genuine conviction"
    ],
        ageSpecificExamples: [
      {
        ageRange: "8-12",
        description:
          "Your child comes home from school replaying conversations from the day. \"Did I sound mean when I said that?\" \"My friend made a face -- did I offend her?\" They may ask you to evaluate whether something they said was okay, and no amount of reassurance settles the worry. They replay interactions from weeks or months ago, suddenly needing to confirm that a comment they made in September wasn't hurtful. Friendships are strained because they're so focused on analyzing past interactions that they can't be present in current ones.",
        parentScript:
          "I can tell you're stuck on that conversation. OCD is playing it on repeat and pointing out everything that might have been wrong. But here's what I know: you're a kind person, and one comment that might have sounded a tiny bit off doesn't change that. I'm not going to analyze the conversation with you because that keeps the replay going. What would you like to do right now instead?",
      },
      {
        ageRange: "13-18",
        description:
          "Your teen spends hours mentally reviewing social interactions, analyzing texts, and rereading their own social media comments. They may screenshot conversations to review later, ask friends \"did you think that was weird?\" and withdraw from social situations to reduce the material they need to analyze. They're exhausted from the constant mental replay and may be developing social anxiety on top of the OCD. Dating is particularly triggering because every text exchange gets reviewed dozens of times.",
        parentScript:
          "I see you on your phone going through those texts again. I'm not going to tell you whether what you said was fine -- because you know it was, and OCD is the one who disagrees. What if you put the phone in another room for 30 minutes and saw what happens to the worry? I think it'll get quieter. Want to try?",
      },
      {
        ageRange: "18+",
        description:
          "Your adult child calls you to dissect conversations with coworkers, professors, or partners. They may replay a meeting for days, asking you if their comment about the project was inappropriate or if they offended their boss. Work performance suffers because they're so focused on past interactions that they can't engage in current ones. They may avoid speaking up in meetings entirely or draft emails for hours, rereading every word for potential offense.",
        parentScript:
          "I know you're worried about what you said in that meeting. I'm not going to go through it line by line with you because we've done that before and it never actually resolves the worry -- it just keeps the conversation alive in your mind. Your colleagues aren't replaying it the way you are. Can you try letting this one go and talking about it with your therapist instead?",
      },
    ],
    relatedSituationSlugs: ["avoids-friends-afraid", "asks-same-question-over", "confesses-bad-thoughts"]
  },

  {
    slug: "avoids-friends-afraid",
    title: "They avoid friends because they're afraid of saying something 'bad'",
    categorySlug: "social-situations",
    ageRanges: ["8-12", "13-18"],
    severity: "moderate",
    setup: "Your child used to love being with friends, but now they're turning down playdates, avoiding lunch groups at school, and spending more time alone. When you ask why, they say things like 'What if I say something mean?' or 'I might accidentally hurt someone's feelings.' They're not being bullied — they're afraid of being the one who causes harm.",
    ocdMechanics: "This presentation is driven by an exaggerated sense of responsibility — OCD tells your child that they are uniquely capable of causing harm with their words, and the only way to prevent that harm is to avoid social situations entirely. The obsession is the fear: 'I might say something offensive, hurtful, or wrong.' The compulsion is avoidance — staying away from friends so the feared scenario can never happen.\n\nUnlike social anxiety, where the core fear is 'people will judge me,' OCD-driven social avoidance centers on 'I might hurt other people.' Your child may also have intrusive thoughts about saying something inappropriate or cruel — thoughts that horrify them precisely because they conflict with who they are. OCD latches onto these thoughts and says, 'The fact that you had this thought means you might actually do it.'\n\nAvoidance works in the short term — if you never talk to anyone, you can't say anything wrong. But OCD's territory expands. First it's playdates, then it's group projects, then it's answering questions in class, then it's family conversations. The world gets smaller. And because avoidance prevents your child from learning that social interactions are almost always fine, their anxiety about re-entering social life grows with each day they stay away.",
    whatNotToDo: [
      {
        mistake: "Letting them stay home from social events without addressing why",
        explanation: "Every avoided playdate, party, or gathering teaches OCD that avoidance is the correct response. The longer the avoidance continues, the scarier social re-entry becomes. Gently, gradually pushing back on avoidance is essential."
      },
      {
        mistake: "Over-preparing them with scripts for every social interaction",
        explanation: "Rehearsing exactly what to say feeds the belief that spontaneous conversation is dangerous. It also creates a new compulsion — they'll feel they can only speak if they've pre-planned every word."
      },
      {
        mistake: "Reassuring them that they've never said anything bad",
        explanation: "While true and well-meaning, this reassurance becomes a compulsion. OCD will counter with 'But what about NEXT time?' No amount of evidence about the past settles anxiety about the future."
      },
      {
        mistake: "Forcing them into large social situations suddenly",
        explanation: "Throwing them into a birthday party with 15 kids when they've been avoiding one-on-one hangs is like skipping to the top of the exposure ladder. Start small. Overwhelming them can backfire and increase avoidance."
      }
    ],
    strategies: [
      {
        name: "Start with Safe Social Steps",
        difficulty: "starter",
        steps: [
          "Together, make a list of social situations from least scary to most scary (e.g., texting a friend → phone call → one-on-one hangout → small group).",
          "Start at the bottom. This week's goal might simply be: send one text to a friend.",
          "After the interaction, resist the urge to debrief or check if it went 'okay.' Just note that they did it.",
          "Gradually move up the list, spending several days or a week at each level."
        ],
        exampleScript: "\"I know being around friends feels really scary right now because OCD keeps saying you might say something bad. But here's what I've noticed — the more you stay away, the scarier it gets. So we're going to take tiny steps back in. This week, all you have to do is text one friend. That's it. We don't need to talk about what you said or whether it was okay. You just send it. Deal?\""
      },
      {
        name: "The 'Maybe' Technique",
        difficulty: "intermediate",
        steps: [
          "Teach your child to respond to OCD's 'What if you say something bad?' with 'Maybe I will. I'll handle it if it happens.'",
          "Practice this response in calm moments — have them say it out loud. It should feel uncomfortable at first, which means it's working.",
          "Before a social interaction, instead of preparing what to say, have them state their uncertainty mantra: 'Maybe I'll say something weird. Life goes on.'",
          "After the interaction, when OCD starts the replay, use the same response: 'Maybe that was awkward. Oh well.'"
        ],
        exampleScript: "\"OCD keeps asking 'What if you say something bad?' and it wants a guarantee that you won't. But nobody can guarantee that — not even people without OCD say perfect things every time. So here's your secret weapon: 'Maybe I will.' That's it. 'Maybe I'll say something weird. Maybe they'll think it's odd. And life will go on.' OCD hates 'maybe' because it can't fight it. Want to practice saying it?\""
      },
      {
        name: "Social Exposure with Intentional Imperfection",
        difficulty: "advanced",
        steps: [
          "Once your child is managing brief social interactions, introduce deliberate 'imperfect' social behavior — saying something slightly awkward on purpose.",
          "Examples: giving an unusual compliment, telling a joke that doesn't land, pausing mid-sentence and saying 'I lost my train of thought.'",
          "The goal is to prove that social imperfection is survivable and normal — people don't catalogue every odd comment.",
          "Debrief briefly (not reassuringly): 'You said something a little goofy. Did the world end? Are they still your friend? Yep.'",
          "Increase the social challenge gradually — more people, less familiar settings."
        ],
        exampleScript: "\"Here's your advanced challenge: next time you're with a friend, say something a little random on purpose. Maybe compliment something weird — 'I like how you hold your pencil.' It's going to feel uncomfortable, and OCD is going to scream. But watch what actually happens. Your friend will probably laugh, or say thanks, or just move on. That's what you need your brain to see — that imperfect conversations don't end friendships.\""
      }
    ],
    whenItGetsTough: "As your child re-enters social situations, expect OCD to get louder, not quieter — at first. They may come home from a brief interaction and immediately want to review everything they said. They might try to cancel future plans, say they feel sick before a hangout, or insist they don't even want friends anymore ('I'm fine being alone'). These are OCD's defense mechanisms. The avoidance felt safe, and your child's brain is panicking about losing that safety. Stay gently persistent. You're not forcing them into pain — you're walking beside them as they reclaim their social life. Some days will feel like setbacks. Your child might avoid something they'd previously managed. That's normal. Progress isn't linear. One step back after three steps forward is still two steps forward.",
    whenToGetHelp: [
      "Your child has been avoiding most or all social interactions for more than two weeks",
      "They are eating alone at school, not participating in class, or refusing to attend school",
      "They express beliefs like 'I'm toxic' or 'Everyone is better off without me'",
      "The social avoidance is accompanied by other OCD symptoms — checking, confessing, mental rituals",
      "Their mood has noticeably declined — increased sadness, loss of interest in previously enjoyed activities, changes in sleep or appetite"
    ],
        ageSpecificExamples: [
      {
        ageRange: "8-12",
        description:
          "Your child has stopped accepting playdates, makes excuses to skip birthday parties, and eats lunch alone to avoid conversations. They're terrified of accidentally saying something mean, weird, or wrong. They rehearse conversations in advance and feel drained by the effort of monitoring every word. They used to be social and have close friends, but the OCD-driven withdrawal is making them increasingly isolated. Other parents are asking why your child doesn't come around anymore.",
        parentScript:
          "I know it feels safer to avoid friends right now, and I understand why. But OCD is stealing your friendships, and you deserve to have fun with kids your age. What if we invited just one friend over for something easy -- a movie, where you don't have to talk as much? We can start small. I'll be nearby if you need me.",
      },
      {
        ageRange: "13-18",
        description:
          "Your teen has pulled away from their friend group, turning down invitations and spending most of their time alone in their room. They may still have group chats but rarely contribute, fearing they'll say something that will be screenshotted or judged. They dread class presentations and group projects. They may say they \"don't like\" their friends anymore as a cover for the social anxiety that OCD is fueling. You notice they seem lonely and sad but insist they're fine.",
        parentScript:
          "I've noticed you've been spending a lot of time alone, and I miss seeing your friends around. I'm not going to force you to be social, but I want to name what I think is happening: OCD is making you afraid of saying the wrong thing, so you're avoiding everyone to stay safe. The problem is that 'safe' is turning into 'lonely.' When you're ready, I'll help you figure out a small step back toward the people who care about you.",
      },
    ],
    relatedSituationSlugs: ["replays-conversations", "teen-wont-text-post", "feels-bad-person-thoughts"]
  },

  {
    slug: "teen-wont-text-post",
    title: "My teenager won't text or post online because they fear being misunderstood",
    categorySlug: "social-situations",
    ageRanges: ["13-18", "18+"],
    severity: "moderate",
    setup: "Your teenager types a text message, reads it ten times, deletes it, rewrites it, and often gives up without sending anything. Social media is off-limits because 'what if someone takes it the wrong way?' They stare at their phone anxiously, write and erase, and sometimes ask you to read their messages before they send them. For a generation that lives online, your teen is digitally paralyzed.",
    ocdMechanics: "Written communication — texts, social media posts, emails — is uniquely torturous for this type of OCD because the words are permanent and visible. Unlike spoken conversation, which fades from memory (even if OCD tries to replay it), a text sits there. OCD says: 'Everyone can read it. Everyone can screenshot it. Everyone can misinterpret it.' The obsession is fear of being misunderstood, causing offense, or revealing something embarrassing.\n\nThe compulsions are numerous: re-reading before sending, excessive editing, deleting and rewriting, seeking approval from a parent or sibling before hitting send, avoiding posting entirely, or sending a follow-up message to clarify something that didn't need clarifying. Some teens develop mental review compulsions — re-reading sent messages dozens of times after the fact, analyzing emoji choices, parsing the other person's response for signs of anger or confusion.\n\nThe digital avoidance may look like a healthy choice to limit screen time, but for a teenager, it's social isolation in disguise. Their peer relationships depend heavily on digital communication. When they can't text, they can't make plans, can't stay in group chats, can't participate in the social fabric of adolescence. OCD isn't protecting them from embarrassment — it's cutting them off from connection.",
    whatNotToDo: [
      {
        mistake: "Pre-reading and approving their texts before they send them",
        explanation: "When you become their editor, you become a compulsion. They'll become unable to send anything without your approval, and the approval-seeking will expand to every message, every email, every comment. You're outsourcing their confidence to your judgment."
      },
      {
        mistake: "Celebrating their avoidance of social media as healthy",
        explanation: "While screen time limits can be healthy, this isn't a mindful digital detox — it's fear-based avoidance. Framing it as positive reinforces OCD's narrative that digital communication is dangerous and should be avoided."
      },
      {
        mistake: "Reading their sent messages and reassuring them it was fine",
        explanation: "Scrolling through their texts to confirm nothing was offensive becomes a shared ritual. It also invades their privacy in a way that undermines the developing independence teenagers need."
      },
      {
        mistake: "Minimizing it by saying 'It's just a text, just send it'",
        explanation: "To your teen, it's not 'just' anything — it feels like defusing a bomb. Dismissing the anxiety pushes them away from confiding in you, which is the opposite of what you need."
      }
    ],
    strategies: [
      {
        name: "The Send-and-Lock Challenge",
        difficulty: "starter",
        steps: [
          "Agree on a 'send-and-lock' rule: your teen types the message, reads it once, sends it, then puts the phone face-down or in another room for 10 minutes.",
          "No re-reading the sent message during those 10 minutes. No checking for a response. Just send and separate.",
          "Start with low-stakes messages — a simple reply to a family member, a 'hey' to a close friend.",
          "After 10 minutes, they can check their phone. Note: the world did not end."
        ],
        exampleScript: "\"I have an idea for texting practice. You type the message, read it once — just once — and hit send. Then your phone goes face-down on the counter for 10 minutes. No re-reading, no checking for a reply. I know OCD is going to scream during those 10 minutes. That's the point — we're teaching it that you can send a message and survive without triple-checking. Start with something easy, like replying to Grandma.\""
      },
      {
        name: "Imperfect Messaging Practice",
        difficulty: "intermediate",
        steps: [
          "Have your teen intentionally send 'imperfect' texts — with a typo, an awkward phrasing, or a slightly ambiguous emoji.",
          "Start by sending these to you, then to a trusted friend, then in a group chat.",
          "The goal is to build tolerance for imperfect communication. Nobody crafts perfect texts, and most people don't analyze incoming messages the way OCD analyzes outgoing ones.",
          "Track how many 'imperfect' messages they send per week and celebrate the count."
        ],
        exampleScript: "\"Here's a challenge that's going to make OCD really mad: I want you to send a text with a typo in it. On purpose. Don't correct it. Just let it sit there. OCD is going to tell you the other person is going to think you're stupid or careless. But watch what actually happens — they'll either not notice, or they'll know exactly what you meant. Nobody cares about typos except OCD.\""
      },
      {
        name: "Graduated Digital Re-entry",
        difficulty: "advanced",
        steps: [
          "Build an exposure ladder for digital communication: responding to a text → initiating a text → commenting on a friend's post → posting a story → posting something public.",
          "Work through the ladder at your teen's pace, spending at least several days at each level.",
          "Set specific goals: 'This week, initiate two text conversations.' No editing beyond one read-through.",
          "For social media, start with ephemeral content (stories that disappear in 24 hours) before permanent posts.",
          "Establish a 'no-delete' rule: once something is posted, it stays up. Deleting is a compulsion."
        ],
        exampleScript: "\"We're going to build your way back into texting and posting step by step. You don't have to do it all at once. This week, the goal is to start two text conversations — just a 'hey, what's up' to someone you haven't talked to in a while. Read it once, send it, done. Next week, we'll try something a little bigger. You set the pace, but we keep moving forward. No going backward.\""
      }
    ],
    whenItGetsTough: "Digital avoidance is one of the trickiest OCD patterns to address in teenagers because it often flies under the radar — parents may not notice their teen isn't texting, or they may interpret it as typical teenage moodiness. When your teen starts sending messages without obsessive pre-checking, expect a sharp spike in anxiety. They may check their phone compulsively for responses, interpret a delayed reply as proof they said something wrong, or ask you to read the thread. These are the compulsions shifting form, not disappearing. Stay the course. Remind them: 'You sent it. That was the brave part. Checking for problems is OCD's new trick.' Some teens find it helpful to have their phone physically away from them after sending a message — in another room, in their backpack. The physical separation breaks the checking loop. Progress may be slow, but every sent message without a review ritual is a victory.",
    whenToGetHelp: [
      "Your teen has essentially stopped all digital communication with peers and is becoming socially isolated",
      "They are spending more than 30 minutes composing a single text message",
      "The anxiety about communication has spread to in-person interactions — they're also avoiding speaking in class, at meals, or with family",
      "They express hopelessness about their social life: 'I'll never be normal' or 'I can't talk to anyone'",
      "You notice signs of depression alongside the OCD — withdrawal, persistent sadness, changes in sleep or eating, loss of interest in everything"
    ],
        ageSpecificExamples: [
      {
        ageRange: "13-18",
        description:
          "Your teen types and deletes text messages repeatedly, spending 20 minutes on a simple reply. They've stopped posting on social media entirely, deleted old posts in case they were offensive, and may review conversations from months ago looking for anything problematic. They ask you to read their texts before sending and get upset when you refuse to edit them. They feel disconnected from friends because they can't participate in the constant digital conversation that teenagerhood requires.",
        parentScript:
          "I'm not going to proofread your texts because that keeps OCD in charge of your friendships. Your friends aren't analyzing your messages the way you are -- they're just happy to hear from you. What if you sent the next text within 30 seconds of typing it, no editing? The anxiety will spike and then it will come down. You've done harder things than this.",
      },
      {
        ageRange: "18+",
        description:
          "Your adult child agonizes over every email, text, and social media interaction. They may take hours to respond to a simple work email, delete and rewrite messages to friends, and avoid digital communication altogether when the anxiety is too high. They've missed networking opportunities, relationship conversations, and professional deadlines because composing written communication has become an exhausting OCD ritual. They may call you to read a draft text to a friend before sending it.",
        parentScript:
          "I'm not going to review that email for you. I know it feels risky to send it without checking, but every time you get someone else to review your words, OCD learns that your judgment can't be trusted. It can. Hit send, feel the anxiety, and let it pass. If you need support, call your therapist, but I'm stepping out of the proofreading role because it's not helping you get better.",
      },
    ],
    relatedSituationSlugs: ["replays-conversations", "avoids-friends-afraid", "rewrite-homework-perfect"]
  },
  // ---------------------------------------------------------------------------
  // INTRUSIVE THOUGHTS + MEALTIME & FOOD
  // ---------------------------------------------------------------------------
// ============================================
// CATEGORY 1: Intrusive Thoughts
// ============================================

{
  slug: "scary-thoughts-cant-stop",
  title: "My child told me they have 'scary thoughts' they can't stop",
  categorySlug: "intrusive-thoughts",
  ageRanges: ["4-7", "8-12", "13-18"],
  severity: "moderate",
  setup:
    "Your child has come to you — maybe at bedtime, maybe out of nowhere — and told you they have thoughts that scare them. They might not be able to explain them clearly, or they might be crying and saying things like 'my brain won't stop' or 'I keep thinking something bad.' They seem genuinely distressed and possibly ashamed.",
  ocdMechanics:
    "Intrusive thoughts are one of the most misunderstood aspects of OCD. Every human brain produces random, unwanted thoughts — about danger, harm, taboo subjects, or things that feel 'wrong.' Most people's brains let these thoughts float by without attaching meaning. But in OCD, the brain's threat-detection system is overactive. It grabs onto a thought and screams: 'This is important! This is dangerous! You need to do something about this!'\n\nThe child then experiences intense distress — anxiety, guilt, shame, fear — and naturally tries to make the thought go away. They might seek reassurance ('Am I a bad person?'), try to suppress the thought (which paradoxically makes it come back stronger), perform mental rituals (replacing the 'bad' thought with a 'good' one, counting, praying in a specific way), or avoid situations that trigger the thought. These compulsions bring temporary relief, which teaches the brain that the thought really was dangerous, and the cycle repeats.\n\nHere is what is crucial to understand: the fact that your child is horrified by these thoughts is actually evidence of their strong moral character. OCD targets the things people care about most. A kind child gets thoughts about hurting others. A loving child gets thoughts about something happening to their family. The thoughts feel unbearable precisely because they go against everything the child values.",
  whatNotToDo: [
    {
      mistake: "Reacting with visible shock or alarm",
      explanation:
        "It took enormous courage for your child to share these thoughts. If you react with wide eyes, a gasp, or 'What kind of thoughts?!' in a panicked tone, they will conclude that the thoughts really are as dangerous as OCD is telling them — and they may never open up to you again. Your calm response is one of the most powerful therapeutic tools you have.",
    },
    {
      mistake: "Providing excessive reassurance that the thoughts 'don't mean anything'",
      explanation:
        "It's so natural to want to say 'Don't worry, those thoughts aren't real, you're fine!' And the first time, it helps. But reassurance becomes its own compulsion — your child will need to hear it again and again, and it will work less each time. You become part of the OCD cycle without realizing it. The goal is to help them tolerate the uncertainty, not to eliminate the discomfort.",
    },
    {
      mistake: "Asking them to describe the thoughts in detail",
      explanation:
        "Pressing for specifics ('What exactly are you thinking about?') can feel like an interrogation and increase shame. It can also accidentally reinforce the idea that the content of the thoughts matters. Let your child share at their own pace. What matters is that they're stuck, not the specific content of the thought.",
    },
    {
      mistake: "Telling them to 'just stop thinking about it'",
      explanation:
        "This is like telling someone not to think about a purple elephant — the brain immediately produces the very thing you're trying to suppress. Thought suppression research consistently shows it backfires, leading to a rebound effect where the intrusive thought comes back even more intensely. Your child has already been trying desperately not to think these thoughts. They need a different approach entirely.",
    },
  ],
  strategies: [
    {
      name: "The Calm Acknowledgment",
      difficulty: "starter",
      steps: [
        "When your child tells you about scary thoughts, take a slow breath and keep your body language open and relaxed.",
        "Validate their experience without validating OCD's message. Say something that names what they're going through without rushing to fix it.",
        "Gently introduce the idea that brains sometimes produce junk thoughts — like a radio picking up static. The thought is not a message.",
        "Thank them for telling you. Reinforce that you are always a safe person to talk to about anything their brain does.",
      ],
      exampleScript:
        "You might say: 'Thank you for telling me something so hard to talk about. That takes real bravery. I want you to know that lots of people — kids and adults — get weird, scary thoughts that just pop in uninvited. It's like your brain is channel-surfing and sometimes lands on a really awful channel. Having the thought doesn't mean anything about who you are. I can see it's really bothering you, and we're going to figure this out together.'",
    },
    {
      name: "Name the Bully — Externalizing OCD",
      difficulty: "starter",
      steps: [
        "Help your child understand that the scary thoughts are coming from OCD, not from them. OCD is like a bully in the brain that picks on the things they care about most.",
        "Invite your child to give OCD a name — something that takes away its power. Some kids pick silly names (Mr. Worry Brain, The Thought Monster, Brainbug), older kids might prefer something more neutral.",
        "Practice talking about OCD in the third person: 'It sounds like [OCD name] is being really loud today' instead of 'You're having bad thoughts again.'",
        "Over time, help them notice when OCD is talking versus when their own brain is talking. 'Is that you talking, or is that [OCD name]?'",
      ],
      exampleScript:
        "You might say: 'You know what? I think there's a bully living in your brain, and it has a megaphone. Let's give it a name so we can call it out. What should we call it? ... Okay, so when Brainbug sends you one of those scary thoughts, that's Brainbug being a jerk. It's not YOU. Brainbug picks on you because you're such a caring person — it knows exactly what will upset you the most. That's its whole trick.'",
    },
    {
      name: "Thought Defusion — Changing Your Relationship with Thoughts",
      difficulty: "intermediate",
      steps: [
        "Explain that fighting the thought gives it more power. Instead, the goal is to let the thought be there without treating it as important. This is hard and takes practice.",
        "Teach the 'floating leaf' technique: imagine placing the thought on a leaf and watching it float down a stream. You don't push it away. You don't grab it. You just watch it pass.",
        "For younger kids, try the 'silly voice' approach: say the scary thought in a cartoon character's voice. This doesn't dismiss the distress — it changes the brain's relationship with the thought.",
        "Practice during calm moments first, not during a spike. Say: 'Let's practice what we'd do if Brainbug shows up later.'",
        "Praise the effort of letting the thought be there, not the absence of the thought. 'I noticed you had a Brainbug moment and you didn't ask me for reassurance. That's really hard and you did it.'",
      ],
      exampleScript:
        "You might say: 'Here's the tricky thing about Brainbug — the more you fight it, the louder it gets. It's like quicksand. So instead of fighting, we're going to try something weird. When the thought shows up, I want you to just say to yourself: Oh, there's that thought again. Hi, thought. And then just... let it sit there. You don't have to like it. You don't have to believe it. You just let it be there like background noise. It will feel really uncomfortable at first, and that's okay. The discomfort is not dangerous.'",
    },
    {
      name: "Structured Reassurance Reduction",
      difficulty: "advanced",
      steps: [
        "If your child currently asks for reassurance about their thoughts multiple times a day, work together to gradually reduce this. Do not go cold turkey — that's too much, too fast.",
        "Create an agreed-upon response for when they seek reassurance: a brief acknowledgment that redirects. Something like: 'Sounds like OCD is being noisy. I know you can handle this.'",
        "Set a reassurance budget together — for example, you'll answer the reassurance question fully once per day, and after that you'll use the agreed phrase.",
        "Track their reassurance-seeking in the progress tracker to notice patterns and celebrate reductions.",
        "As they build tolerance, gradually reduce the budget. This should be collaborative, not imposed.",
      ],
      exampleScript:
        "You might say: 'I've noticed that when you ask me if you're a bad person, my answer helps for a little while but then Brainbug makes you need to ask again. That's because reassurance is like junk food for OCD — it tastes good for a second but makes OCD hungrier. So here's what I'd like to try, and I want your input. Once a day, I'll answer fully. After that, when you ask, I'm going to say: I hear Brainbug talking. You know what I think of you. And that's going to be our signal that we're not feeding Brainbug right now. Does that feel doable?'",
    },
  ],
  whenItGetsTough:
    "When you start reducing reassurance or encouraging your child to let intrusive thoughts exist without performing compulsions, things will likely get harder before they get easier. This is called an extinction burst — OCD ramps up its efforts because its usual strategies are no longer working. Your child may cry more, ask for reassurance more urgently, get angry at you, or say things like 'You don't care about me!' This is OCD fighting to survive, not your child's true feelings. Stay the course with warmth and firmness. Think of it like a tantrum from a toddler who has been told they can't have candy at checkout — the intensity is not evidence that you're doing the wrong thing. Hold your boundary with compassion: 'I know this is really hard. I'm right here with you. We're not going to let Brainbug win this one.' If you give in during the extinction burst, OCD learns that it just needs to push harder next time. The burst typically peaks within a few days and then begins to subside. Keep logging in the tracker so you can see the trend even when individual moments feel impossible.",
  whenToGetHelp: [
    "Your child's intrusive thoughts are causing them to avoid significant parts of daily life — school, friends, activities they used to enjoy, or being alone.",
    "They are spending more than 30-60 minutes per day visibly distressed by thoughts, performing mental rituals, or seeking reassurance.",
    "Your child expresses hopelessness or says things like 'I wish my brain would just stop' or 'I can't live like this' — these statements deserve professional attention even if you don't believe they're suicidal.",
    "You notice your child has begun avoiding specific people (a sibling, a friend) because of the content of their intrusive thoughts.",
    "Your own strategies and the approaches here are not making a noticeable difference after 3-4 weeks of consistent effort, or the situation is escalating.",
  ],
      ageSpecificExamples: [
      {
        ageRange: "4-7",
        description:
          "Your young child tells you they have 'bad pictures' in their head or 'scary thoughts' that won't go away. They may not be able to describe the content clearly but are visibly distressed. They might ask for repeated reassurance that they're a good person or that nothing bad will happen. They may develop avoidance behaviors -- not wanting to be near a baby sibling because they had a scary thought about the baby, or avoiding certain rooms where a bad thought occurred.",
        parentScript:
          "Thank you for telling me about the scary thoughts. That was very brave. Everybody has weird or scary thoughts sometimes -- even mommies and daddies. Those thoughts don't mean anything is going to happen. They're like clouds going across the sky -- they float by and disappear. You're not bad for having them. Let's give those thoughts a silly name so they feel less scary.",
      },
      {
        ageRange: "8-12",
        description:
          "Your child may describe intrusive thoughts about harming someone, something bad happening to the family, or disturbing images that pop into their head uninvited. They try to push the thoughts away, which makes them come back stronger. They may develop rituals to \"cancel out\" the bad thoughts -- counting, tapping, repeating phrases. They're terrified the thoughts mean something about who they are. They may avoid knives, busy roads, or being alone because they fear what their thoughts might \"make\" them do.",
        parentScript:
          "I'm really glad you told me about these thoughts. I know they feel really scary and I know you think they mean something about you. But here's the truth: the fact that these thoughts upset you so much is proof that they're not who you are. OCD sends the scariest thoughts it can find because it knows those are the ones you'll pay attention to. The thoughts are noise. They're not instructions. You are safe.",
      },
      {
        ageRange: "13-18",
        description:
          "Your teen may be experiencing intrusive thoughts with violent, sexual, or blasphemous content that horrifies them. They may spend hours trying to figure out if the thoughts \"mean something\" about them, compulsively researching OCD online to reassure themselves, and avoiding triggers that bring the thoughts on. They might withdraw from activities, relationships, or religious practices. They feel profound shame and may resist telling you the specific content of the thoughts, saying only that they have \"horrible\" thoughts they can't stop.",
        parentScript:
          "You don't have to tell me what the thoughts are if you're not ready. What I need you to know is this: intrusive thoughts are a known part of OCD, and they do not reflect who you are as a person. The worst, most disturbing thoughts OCD can generate are the ones it throws at the kindest, most conscientious people. I'm not scared of your thoughts, and you don't need to be either. Let's talk about getting you the right kind of help -- someone who specializes in OCD and won't be shocked by anything you share.",
      },
    ],
    relatedSituationSlugs: [
    "terrified-might-hurt-someone",
    "feels-bad-person-thoughts",
    "confesses-bad-thoughts",
  ],
},

{
  slug: "terrified-might-hurt-someone",
  title:
    "They're terrified they might hurt someone even though they never would",
  categorySlug: "intrusive-thoughts",
  ageRanges: ["8-12", "13-18", "18+"],
  severity: "severe",
  setup:
    "Your child has confided — possibly in tears, possibly in a whisper — that they're afraid they might hurt someone. Maybe a sibling, a friend, a pet, or even you. They might be avoiding being alone with certain people, refusing to hold a pencil near someone, or asking you to 'keep them away' from others. They are terrified and may believe they're dangerous.",
  ocdMechanics:
    "Harm OCD is one of the most distressing subtypes, and also one of the most common — and most misunderstood. The intrusive thought typically takes the form of 'What if I hurt someone?' or an unwanted mental image of causing harm. The child is not having violent urges. They are having the opposite experience: the thought is so horrifying to them that their brain cannot let it go. The alarm system is screaming precisely because hurting someone is the last thing they would ever want to do.\n\nOCD then does what it always does — it demands certainty. 'But how do you KNOW you won't do it? You had the thought, so maybe you want to. What if you lose control?' The child cannot prove a negative (no one can prove they will never do something), so they get trapped in an endless loop of doubt. The compulsions follow: avoiding being near people, avoiding sharp objects, mentally reviewing their actions to make sure they didn't hurt anyone, seeking reassurance ('I would never hurt anyone, right?'), and sometimes 'testing' themselves to see if they feel any urge (which, of course, spikes anxiety and makes the thought worse).\n\nThis is absolutely critical to understand: research consistently shows that people with harm-related intrusive thoughts are among the LEAST likely to act on them. The distress they feel is itself the evidence. Someone who genuinely wanted to harm others would not be sobbing to their parent about it. Your child's pain is the clearest possible signal of their good character. OCD has found their deepest value — being safe and kind — and is using it against them.",
  whatNotToDo: [
    {
      mistake: "Treating them as if they might actually be dangerous",
      explanation:
        "If you start hiding knives, keeping them away from their sibling, or watching them closely when they're around others, you are confirming OCD's lie. Your behavior tells them: 'You might be right — you could be dangerous.' This is devastating and will dramatically worsen the OCD. As terrifying as it sounds, the therapeutic response is to not treat the thought as a real threat.",
    },
    {
      mistake: "Providing repeated reassurance that they would 'never do that'",
      explanation:
        "The reassurance feels necessary in the moment, and the first time you may need to say something validating. But if you become the daily source of 'You're not a bad person, you'd never hurt anyone,' you have become a compulsion. Your child will need to hear it more often, with more conviction, and it will stop working. OCD will counter every reassurance with 'But what if Mom is wrong?'",
    },
    {
      mistake: "Exploring whether they 'really want to' hurt someone",
      explanation:
        "Asking questions like 'Do you actually want to hurt your sister?' or 'Have you ever felt angry enough to do something?' — even with good intentions — can send your child into a spiral. They will begin analyzing their past for any evidence that they might be dangerous, which is exactly what OCD wants them to do. The content of the thought does not need to be investigated. It needs to be recognized as OCD.",
    },
    {
      mistake: "Minimizing or dismissing their distress",
      explanation:
        "Saying 'That's silly, of course you won't hurt anyone' may seem reassuring, but it dismisses the very real suffering your child is experiencing. They don't feel silly — they feel terrified. If it were as simple as logic, they would have reasoned their way out already. Acknowledge the pain without engaging with OCD's content.",
    },
  ],
  strategies: [
    {
      name: "Psychoeducation — Normalizing Harm Thoughts",
      difficulty: "starter",
      steps: [
        "Share with your child that intrusive thoughts about harm are extremely common — studies show that over 90% of people experience unwanted thoughts about harm at some point. They are not alone, and they are not abnormal.",
        "Explain the difference between a thought and an intention. Having a thought about jumping off a bridge doesn't mean you want to jump — it's a random misfire. Having a thought about harm doesn't mean you want to harm.",
        "Use an analogy that fits their age. For younger kids: 'Your brain is like a TV with a broken remote — sometimes it flips to a scary channel and gets stuck. The channel isn't real.' For teens: 'Intrusive thoughts are like pop-up ads on the internet. They show up uninvited, they're often disturbing, and clicking on them (analyzing them) just generates more.'",
        "Emphasize the key insight: 'The reason this thought bothers you so much is because hurting someone is the OPPOSITE of who you are. OCD only attacks things you care about.'",
      ],
      exampleScript:
        "You might say: 'I want to tell you something really important, and I want you to hear me. The fact that this thought scares you so much? That tells me everything I need to know about your heart. People who actually want to hurt others don't sit here crying about it. They don't feel sick about it. OCD has found the thing you care about most — being a good, safe person — and it's poking at it. That's what OCD does. It's a bully, and it fights dirty. But having a thought is not the same as wanting to do it or being about to do it. Not even close.'",
    },
    {
      name: "Reducing Avoidance Gradually",
      difficulty: "intermediate",
      steps: [
        "Make a list together of things your child has started avoiding because of the harm thoughts. Be specific: avoiding the kitchen, refusing to sit next to their sibling, not holding scissors, staying away from pets.",
        "Rank the items from least anxiety-provoking to most. This is their exposure hierarchy (you don't need to use that term with younger kids — 'bravery ladder' works well).",
        "Start with the easiest item. The goal is for your child to do the avoided activity while allowing the intrusive thought to be present, without performing any compulsion (no mental reviewing, no asking for reassurance, no checking).",
        "Stay nearby and coach calmly. Expect anxiety to rise and then — this is key — to naturally come down on its own. This teaches the brain that the thought is not a real threat.",
        "Celebrate each step. Move up the ladder only when the current step feels manageable. There is no rush.",
      ],
      exampleScript:
        "You might say: 'I know you've been avoiding sitting next to your brother at dinner because of what OCD tells you. And I get it — OCD made that feel really scary. But here's what I want us to try: tonight, would you be willing to sit in your normal seat? OCD is going to get loud. It's going to say scary things. And we're just going to let it talk. You don't have to argue with it. You don't have to prove anything. Just sit there and let OCD throw its tantrum. I'll be right there. And after dinner, we'll talk about how it went.'",
    },
    {
      name: "Scripting with Agreement — Leaning Into Uncertainty",
      difficulty: "advanced",
      steps: [
        "This is a core ERP technique for intrusive thoughts and should ideally be guided by a therapist initially. The concept: instead of fighting or analyzing the thought, your child practices agreeing with the uncertainty.",
        "When OCD says 'What if you hurt someone?', the practiced response is: 'Maybe I will, maybe I won't. I'm going to live my life anyway.' This sounds counterintuitive and even cruel — but it removes the fuel OCD needs.",
        "Start by writing the script together. Your child does not have to believe it. They just need to be willing to say it. The goal is to take away OCD's power by refusing to engage in the certainty-seeking game.",
        "Practice the script in calm moments first. Then use it during actual OCD spikes.",
        "Over time, the thought loses its charge because the brain learns there is no emergency to respond to.",
      ],
      exampleScript:
        "You might say: 'This next strategy might sound really weird, and I want to explain why it works before we try it. Right now, OCD asks you a question — What if you hurt someone? — and you spend hours trying to prove the answer is no. But you can never prove it enough, right? OCD always comes back. So instead of trying to win the argument, we're going to stop playing. When OCD says What if you hurt someone?, you're going to practice saying: Maybe. I don't know. And I'm going to go play with my brother anyway. This doesn't mean you believe it. It means you're refusing to let OCD control your life with a question nobody can answer.'",
    },
  ],
  whenItGetsTough:
    "Harm OCD is one of the subtypes that can get significantly worse during exposure work before it gets better. When your child begins sitting next to people again or holding objects they've been avoiding, OCD will escalate aggressively. The thoughts may get louder, more graphic, more specific. Your child may have moments of genuine panic where they beg you to keep them away from others. This is the extinction burst — OCD is losing its grip and it is fighting back with everything it has. Your steady, calm presence is the anchor. Do not accommodate by reintroducing avoidance, even temporarily. You can say: 'I hear OCD screaming right now. I know how hard this is. I am not worried about you hurting anyone, and I'm going to stay right here while this wave passes.' If the distress is so severe that your child is unable to function, it is time to involve a professional who specializes in ERP — this level of intensity benefits from expert guidance. But know that the intensity of the burst is often proportional to how close you are to a breakthrough.",
  whenToGetHelp: [
    "Your child is significantly restricting their life — refusing to be near family members, not going to school, isolating in their room — because of harm-related fears.",
    "The avoidance is escalating despite your efforts, or your child has developed new avoidance behaviors (for example, they now avoid pets after previously only avoiding siblings).",
    "Your child is performing extensive mental rituals — spending hours mentally reviewing events to make sure they didn't hurt anyone, or 'testing' themselves by trying to feel whether they have violent urges.",
    "Your child has expressed hopelessness about ever getting better, or has said they feel like a monster, a psychopath, or that they should be locked away.",
    "You as a parent feel out of your depth, scared, or unsure whether the thoughts are 'just OCD' — a qualified OCD specialist can do a proper assessment and provide clarity and relief for the whole family.",
  ],
      ageSpecificExamples: [
      {
        ageRange: "8-12",
        description:
          "Your child has become afraid they might hurt someone -- a sibling, a friend, even you. They may avoid holding scissors, keep distance from younger children, or refuse to play contact sports. They ask repeatedly: \"What if I lose control? What if I hurt someone by accident?\" They may have stopped hugging because they're afraid of squeezing too hard. They look tortured, and you can see they're the last person in the world who would hurt anyone.",
        parentScript:
          "I know these thoughts are really scary. But I want you to notice something: people who are actually dangerous don't worry about being dangerous. The fact that this terrifies you is proof that you are safe. OCD picks the thing you care about most -- keeping people safe -- and turns it into your biggest fear. You are not your thoughts. Do you want to talk about this more, or would you like to do something together to take a break from the worry?",
      },
      {
        ageRange: "13-18",
        description:
          "Your teen avoids being alone with younger siblings or children, keeps distance from pets, and may refuse to learn to drive because they're terrified of hitting someone. They research \"signs of being a psychopath\" online, then agonize over whether they fit the criteria. They may have confessed to a friend who didn't understand, making them feel even more isolated and ashamed. They know intellectually that they're not dangerous, but the doubt is overwhelming.",
        parentScript:
          "I trust you completely around other people, including your little brother. I need you to hear that. OCD is telling you that having a thought about hurting someone means you're going to do it, and that is absolutely false. These kinds of intrusive thoughts are one of the most common forms of OCD, and they happen to the gentlest people. You are not a threat. Would you be open to seeing a therapist who specializes in this specific kind of OCD?",
      },
      {
        ageRange: "18+",
        description:
          "Your adult child has confided that they're terrified of being a dangerous person. They may avoid cooking (knives), driving (hitting someone), or being around children or animals. They research violent crimes to confirm they're \"not like that,\" then spiral into doubt. They may have confessed to friends or partners who reacted with alarm, further confirming their worst fears. They're considering quitting their job because they work with vulnerable people and the thoughts feel unbearable.",
        parentScript:
          "I hear you, and I am not afraid of you. Not even a little bit. These thoughts are OCD at its cruelest, targeting the thing you care about most. You are a compassionate person who is suffering because of intrusive thoughts -- you are not a danger to anyone. I'm not going to go through the evidence with you because that's a compulsion. But I am going to help you find a specialist in OCD who handles exactly this. You don't have to live like this.",
      },
    ],
    relatedSituationSlugs: [
    "scary-thoughts-cant-stop",
    "avoids-sharp-objects",
    "feels-bad-person-thoughts",
  ],
},

{
  slug: "feels-bad-person-thoughts",
  title:
    "They feel they're a 'bad person' because of thoughts they can't control",
  categorySlug: "intrusive-thoughts",
  ageRanges: ["8-12", "13-18", "18+"],
  severity: "moderate",
  setup:
    "Your child seems weighed down by guilt and shame that you can't quite explain. They may say things like 'I'm a terrible person,' 'You wouldn't love me if you knew what I think,' or 'I don't deserve good things.' They might withdraw, seem depressed, or confess random minor 'wrongs' throughout the day. Underneath it all, OCD has convinced them that their intrusive thoughts define who they are.",
  ocdMechanics:
    "This presentation sits at the intersection of intrusive thoughts and what clinicians sometimes call 'scrupulosity' or moral OCD. The obsession is not just the thought itself — it's the meaning OCD assigns to the thought. Where another brain might have a strange thought and shrug it off, the OCD brain says: 'You had that thought. That means you wanted it. That means you're evil, disgusting, dangerous, or fundamentally broken.' The child fuses their identity with their thought content.\n\nThe compulsions are often invisible to parents. Your child may be doing extensive mental review — scanning their memory for evidence that they're bad, replaying interactions to check whether they did something wrong, comparing themselves to others ('Would a normal person think this?'). They may confess constantly — not just the intrusive thoughts, but trivial things ('I accidentally stepped on an ant,' 'I didn't smile at someone in the hallway'). They may perform 'good' actions compulsively to 'balance out' the bad thoughts. They may seek reassurance endlessly: 'Am I a good person? Do you still love me?'\n\nThe tragedy is that OCD is torturing your child with their own goodness. A child who didn't care about being good would not spend hours agonizing over it. The sensitivity, the empathy, the moral awareness that makes them vulnerable to this OCD subtype — those are qualities to be cherished. OCD has hijacked them and turned them into weapons.",
  whatNotToDo: [
    {
      mistake: "Becoming their reassurance dispenser",
      explanation:
        "When your child asks 'Am I a bad person?' for the twentieth time today, it's heartbreaking, and every parental instinct says to comfort them. But if you've noticed that your reassurance works for shorter and shorter periods, and they need it more and more urgently, you're seeing the reassurance compulsion cycle in action. Your words are being consumed by OCD, not by your child. They need a different kind of support.",
    },
    {
      mistake: "Engaging in logical debate about whether they're 'good'",
      explanation:
        "Listing evidence of their goodness ('But you're so kind to your friends! You rescued that bird last summer!') feels like it should work. But OCD is not a logical opponent. For every piece of evidence you offer, OCD will counter: 'But what about that time you...' or 'You're just pretending to be good.' You cannot out-argue OCD. It has infinite rebuttals.",
    },
    {
      mistake: "Accepting and processing every 'confession'",
      explanation:
        "If your child has started confessing every minor thought or action, treating each confession as meaningful — listening carefully, discussing it, absolving them — inadvertently reinforces the idea that these things needed confessing in the first place. A child who confesses that they 'looked at someone funny' does not need forgiveness. They need help recognizing that OCD is demanding confession as a compulsion.",
    },
    {
      mistake: "Ignoring the pattern because the child seems 'just sad'",
      explanation:
        "This OCD presentation can look a lot like depression — withdrawal, low self-esteem, loss of interest in activities. And depression can certainly co-occur. But if the sadness is driven by specific thought content and accompanied by reassurance-seeking, confessing, or mental reviewing, the engine is OCD, and it needs to be treated as OCD. Treating only the depression while missing the OCD underneath will not resolve the cycle.",
    },
  ],
  strategies: [
    {
      name: "The 'Thought ≠ Me' Foundation",
      difficulty: "starter",
      steps: [
        "Have a conversation during a calm moment (not during a guilt spiral) about the difference between what we think and who we are.",
        "Use concrete examples: 'Has your brain ever randomly played a song you hate? Did that mean you like the song? Your brain does the same thing with thoughts — it plays ones you didn't choose and don't want.'",
        "Introduce the concept directly: 'OCD wants you to believe that having a thought is the same as choosing it, wanting it, or being it. But thoughts are not choices. They're brain weather — some days it's sunny, some days your brain rains garbage. The weather is not who you are.'",
        "Make this a phrase you can return to: 'Is that a fact, or is that OCD talking?' Help them practice asking themselves this question.",
      ],
      exampleScript:
        "You might say: 'I've noticed you've been really hard on yourself lately, and I think OCD has been telling you a big lie. The lie goes like this: You had a bad thought, therefore you are a bad person. But here's what OCD doesn't want you to know — every person on this planet has weird, scary, gross, or random thoughts every single day. Every. Single. Person. The difference is that most brains just let them go. Your brain grabs on and says THIS MEANS SOMETHING. But it doesn't. A thought is just a thought. It's not a wish, it's not a plan, and it's not who you are.'",
    },
    {
      name: "Confession Reduction Protocol",
      difficulty: "intermediate",
      steps: [
        "Talk with your child about the confessing pattern. Help them see it as a compulsion: 'Have you noticed that after you tell me about something, you feel better for a little while, but then you need to tell me something else? That's OCD making you confess.'",
        "Together, agree on a response you'll use when they begin confessing minor things: something warm but firm. This should not feel like rejection — it should feel like you're on their team against OCD.",
        "When they come to confess, use the agreed response. Expect distress. Stay present and compassionate but do not process the confession.",
        "Help them sit with the discomfort of not confessing. This is the exposure. 'I know it feels like you HAVE to tell me. That's OCD pushing. Let's see what happens if we don't give in right now.'",
        "Track the frequency of confessions in the progress tracker. As the compulsion loses power, confessions will naturally decrease.",
      ],
      exampleScript:
        "You might say: 'I love that you trust me enough to come to me. And I've noticed something that I think is OCD at work. You've been telling me about little things — things that aren't wrong at all — and you feel like you HAVE to tell me or something bad will happen, or you'll feel awful. That pressure to confess? That's a compulsion. So here's what we're going to try: when you feel that urge to confess, I want you to come sit with me. I'll say: I see OCD pushing you to confess right now. I'm here, and you don't need to tell me. We'll sit together until the wave passes.'",
    },
    {
      name: "Values-Based Identity Work",
      difficulty: "advanced",
      steps: [
        "Help your child build a sense of identity that is based on their actions and values, not on their thought content. This is a longer-term project that complements ERP.",
        "Create a 'Who I Actually Am' journal or page together. Fill it with evidence from their ACTIONS: kind things they've done, times they helped someone, things they love, people they care about.",
        "When OCD attacks ('You're a bad person'), they can reference this as a grounding tool — not as reassurance, but as a reality anchor. The key difference: reassurance says 'OCD is wrong,' while values work says 'I know who I am regardless of what OCD says.'",
        "Practice holding both things as true: 'I have a scary thought AND I am a kind person. Both exist. The thought doesn't cancel out who I am.'",
        "For teens, explore the concept that OCD targets values. Ask: 'What does it tell you that OCD attacks your sense of being a good person? What does that say about how much being good matters to you?'",
      ],
      exampleScript:
        "You might say: 'I want to try something with you. Let's make a list — not of thoughts, but of things you've actually done. Real things in the real world. How about Tuesday, when you helped your friend with their homework even though you were tired? Or last weekend when you spent an hour playing with the dog at the shelter? OCD can shout all day about what kind of person you are. But your actions are the actual evidence. And the evidence is pretty clear to me. I want you to keep this list somewhere you can see it. Not to argue with OCD — because OCD doesn't fight fair — but to remind yourself of what's real.'",
    },
  ],
  whenItGetsTough:
    "When your child begins resisting the urge to confess or stops seeking reassurance about being 'good,' the guilt and shame can temporarily intensify. OCD will escalate its attacks: 'See? You're not even sorry. A truly good person would feel terrible. You must really be bad if you can just sit with this.' Your child may break down and beg to confess, or may become angry and accusatory ('You don't even care that I feel awful!'). This is the extinction burst. OCD is testing whether the new boundaries will hold. Your response matters enormously here: be warm, be present, be unshakeable. 'I know OCD is being so loud right now. I know it's telling you terrible things about yourself. I'm not going anywhere, and we're not going to let it win today.' The wave will peak and pass. Each time it passes without the compulsion, OCD loses a little more power. Some days will feel like major setbacks. That's normal. Look at the weekly trend, not the daily fluctuation.",
  whenToGetHelp: [
    "Your child's self-image has deteriorated to the point where they regularly express self-hatred, worthlessness, or the belief that they are fundamentally broken or evil.",
    "The confessing or reassurance-seeking is consuming significant time — more than 30 minutes daily — or is disrupting your family's ability to function normally.",
    "Your child is showing signs of depression alongside the OCD — persistent low mood, loss of interest in activities, changes in sleep or appetite, withdrawal from friends.",
    "They have begun avoiding situations, people, or activities because they feel they 'don't deserve' them or because they fear their own thoughts.",
    "You have noticed any self-punishing behavior — denying themselves food, sleep, comfort, or enjoyment as 'punishment' for their thoughts.",
  ],
      ageSpecificExamples: [
      {
        ageRange: "8-12",
        description:
          "Your child believes they're a terrible person because of their thoughts. They confess 'sins' constantly -- \"I thought something mean about my teacher\" or \"I wished my sister would go away.\" They may punish themselves by giving away toys, refusing treats, or doing excessive good deeds to \"make up\" for the thoughts. They ask you multiple times a day if they're a good person and dissolve into tears when the reassurance doesn't stick. They may become hyperreligious or develop moral scrupulosity.",
        parentScript:
          "You are a good person. I know that with my whole heart. And good people sometimes have thoughts that feel bad -- that's just what brains do. Having a grumpy thought about your sister doesn't make you a bad person any more than having a dream about flying makes you a bird. OCD is the one calling you bad. I'm not going to keep proving to OCD that you're good, because OCD will never be satisfied. But I will tell you this: I know who you are, and you are wonderful.",
      },
      {
        ageRange: "13-18",
        description:
          "Your teen is in moral anguish over their thoughts and may be developing scrupulosity -- an OCD subtype focused on being morally or religiously pure. They confess extensively, analyze every past action for wrongdoing, and may have become rigidly moralistic in ways that isolate them from peers. They research philosophical and religious concepts about good and evil, trying to prove to themselves that they're not bad. They may have panic attacks triggered by a thought they judge as immoral.",
        parentScript:
          "I see how much pain you're in, and I want you to know that questioning whether you're a good person this intensely is itself a form of OCD called scrupulosity. Truly bad people don't lose sleep over whether they're bad. I'm not going to analyze specific thoughts with you because that keeps the cycle going. But I am here. And I think it's time to find someone who specializes in this -- because you deserve to feel the peace that everyone else can see you've earned.",
      },
      {
        ageRange: "18+",
        description:
          "Your adult child may be consumed by moral scrupulosity, confessing past actions from childhood, agonizing over whether a joke they made was offensive, or doing excessive volunteering or donating to \"prove\" they're good. They may call you seeking reassurance about something they said years ago. Religious scrupulosity may manifest as excessive prayer, confession, or religious practice that has gone beyond devotion into compulsion. Relationships suffer because they feel unworthy of love.",
        parentScript:
          "I love you, and I can see how much this is consuming you. When you call me to confess something you said ten years ago, I know that's OCD, not genuine moral concern. I'm not going to absolve you for things that don't need absolution -- because doing so just teaches OCD to bring up the next thing. You are a good person who is struggling with a very treatable condition. Let's focus on that.",
      },
    ],
    relatedSituationSlugs: [
    "scary-thoughts-cant-stop",
    "confesses-bad-thoughts",
    "terrified-might-hurt-someone",
  ],
},

{
  slug: "avoids-sharp-objects",
  title:
    "My child avoids knives, scissors, or sharp objects because of intrusive thoughts",
  categorySlug: "intrusive-thoughts",
  ageRanges: ["8-12", "13-18", "18+"],
  severity: "severe",
  setup:
    "You've noticed your child refusing to set the table if it involves knives, leaving the room when you're cooking, avoiding scissors during craft projects, or becoming visibly anxious around any sharp objects. They may have told you why — or they may be hiding the reason out of deep shame. The underlying fear is that they might use the object to hurt someone, and the avoidance feels like the only way to keep everyone safe.",
  ocdMechanics:
    "This is a specific and common behavioral manifestation of harm OCD. The intrusive thought says something like: 'What if you grabbed that knife and stabbed someone?' or produces a vivid, unwanted mental image of doing so. The child's nervous system responds as if this were a real danger — adrenaline surges, heart pounds, stomach drops. The child's logical brain may know the thought is irrational, but the body is in full threat mode. The fastest way to reduce this overwhelming feeling is to remove the perceived threat: get away from the sharp object.\n\nEvery time the child avoids a knife and the anxiety drops, the brain records: 'Knives are dangerous. Avoidance keeps people safe.' Over time, the avoidance generalizes. It might start with kitchen knives and expand to scissors, then pencils, then forks, then any pointed object. Each new avoidance shrinks the child's world a little more. They may stop eating with the family, stop participating in school activities, or refuse to leave their room if they know sharp objects are accessible elsewhere in the house.\n\nThe cruel irony is that avoidance is the exact opposite of what the brain needs. It needs the experience of being near sharp objects and NOT hurting anyone — hundreds of times — to recalibrate its threat detector. Every avoided exposure is a missed opportunity for the brain to learn that the thought is noise, not signal. The child is essentially imprisoned by their own compassion — their deep care about others' safety has been weaponized by OCD into a phobia of themselves.",
  whatNotToDo: [
    {
      mistake: "Removing all sharp objects from the home",
      explanation:
        "This is the most common and most damaging accommodation for this OCD presentation. When you child-proof your home against your child's fear, you send an unmistakable message: 'You might actually be dangerous. We need to protect people from you.' This confirms OCD's narrative and dramatically increases the child's terror. It also makes eventual exposure work much harder because the avoidance has been reinforced by the entire family system.",
    },
    {
      mistake: "Supervising them around sharp objects in an obvious way",
      explanation:
        "Hovering when they're near the kitchen, watching them carefully during meals, or insisting you handle anything sharp — these are accommodations that feed the OCD cycle. Your child will notice the supervision and interpret it as confirmation that they need to be watched. Even well-intentioned 'I'll cut that for you, sweetie' reinforces that there's a reason they shouldn't hold the knife.",
    },
    {
      mistake: "Asking them to promise they won't hurt anyone",
      explanation:
        "Requesting promises feeds directly into OCD's demand for certainty. The child may make the promise and feel temporary relief, but OCD will immediately counter: 'But what if you break the promise? What if you can't control yourself?' The promise becomes another compulsion, and a particularly painful one because failing to feel certain after promising feels like proof of danger.",
    },
    {
      mistake: "Treating this as a phase that will pass on its own",
      explanation:
        "Untreated avoidance of this nature tends to expand, not contract. What starts with knives can generalize to other objects, then to being near certain people, then to leaving the house. If your child is already significantly restricting their behavior around sharp objects, this warrants active intervention — ideally with a therapist experienced in harm OCD and ERP.",
    },
  ],
  strategies: [
    {
      name: "Understanding and Framing the Fear",
      difficulty: "starter",
      steps: [
        "If your child hasn't told you why they avoid sharp objects, create a safe opening. Choose a calm, quiet moment and gently name what you've observed: 'I've noticed you've been uncomfortable around knives lately.'",
        "If they share the intrusive thoughts, respond with calm and compassion — not surprise. Your reaction sets the tone for everything that follows.",
        "Frame the avoidance as OCD's strategy, not their choice: 'OCD told you that avoiding knives would keep everyone safe. And it felt true because your anxiety went down when you left the room. But OCD tricked you — it's the avoidance itself that's keeping the fear alive.'",
        "Introduce the idea that the goal is not to get rid of the thought, but to prove to their brain that the thought is powerless: 'We're going to show OCD that you can be near a knife and nothing bad happens. Over and over, until your brain believes it.'",
      ],
      exampleScript:
        "You might say: 'I want to talk about something I've noticed, and I promise this is a safe conversation. I've seen that you leave the room when I'm cooking, and you stopped wanting to set the table. I have a guess about why, and if I'm right, I want you to know that it's something a lot of people deal with and there's nothing wrong with you. Sometimes OCD gives people thoughts about sharp things that are really scary. Is that what's been happening? ... Thank you for telling me. I know how hard that was. Here's what I want you to know: the fact that this thought terrifies you means you are the opposite of dangerous. OCD picked this fear because you care so much about not hurting anyone. We're going to work on this together.'",
    },
    {
      name: "Graduated Exposure — Building the Hierarchy",
      difficulty: "intermediate",
      steps: [
        "Together with your child, build a list of sharp-object-related situations ranked by anxiety level (0-10). Start from the least scary. Examples: seeing a butter knife on the table (3/10), sitting at dinner with a steak knife present (5/10), holding scissors to cut paper (6/10), chopping vegetables with a knife while a parent is nearby (8/10).",
        "Begin with the lowest-ranked item. Your child's job is to stay in the situation and allow the anxiety to be there without avoiding, without seeking reassurance, and without doing mental rituals.",
        "Stay with the exposure until anxiety naturally decreases — this usually takes 20-45 minutes for the first few times, then gets shorter. Do not end the exposure while anxiety is at its peak.",
        "Repeat the same exposure several times until the anxiety it generates is minimal (2/10 or less), then move to the next item on the list.",
        "Keep a record of each exposure: situation, starting anxiety, peak anxiety, ending anxiety. Over time, this data becomes powerful evidence that the brain is recalibrating.",
      ],
      exampleScript:
        "You might say: 'Okay, we're going to start small. Tonight, I'm going to set the table with all the regular silverware, including a butter knife at your spot. I want you to sit in your normal seat and just eat dinner. OCD is going to say all kinds of things. Let it talk. You don't have to argue, you don't have to prove anything. Just eat your dinner and let the thought be there. On a scale of 0-10, how scary does that feel right now? ... A 4? Good. That's a great place to start. I'll be right here the whole time. After dinner, we'll talk about what happened. And I bet you'll notice that nothing bad happened — because it never was going to.'",
    },
    {
      name: "Imaginal Exposure with Response Prevention",
      difficulty: "advanced",
      steps: [
        "This technique is best introduced with professional guidance, but understanding it helps. For thoughts that are too distressing to trigger through real-life exposure alone, imaginal exposure involves deliberately bringing the intrusive thought to mind and sitting with the discomfort.",
        "Write a brief script (3-5 sentences) describing the feared scenario in the first person. Example: 'I am standing in the kitchen. There is a knife on the counter. I pick it up. I have the thought that I might hurt someone.' The script does NOT include acting on the thought — it includes having the thought.",
        "Your child reads or listens to the script repeatedly (10-20 minutes) while resisting any compulsions — no mental arguing, no reassurance, no neutralizing thoughts.",
        "The anxiety will spike initially, then gradually habituate with repeated exposure. The brain learns: 'I can have this thought and nothing happens.'",
        "This should be paired with real-life exposures for maximum effectiveness. Imaginal exposure addresses the thought; in-vivo exposure addresses the avoidance.",
      ],
      exampleScript:
        "You might say: 'There's a technique that therapists use for exactly this kind of OCD, and I want to explain it to you because I think it could really help — especially alongside the real-life practice we're doing. The idea is that instead of running from the scary thought, you practice inviting it in on purpose. I know that sounds terrible. But here's why it works: right now, the thought has all the power because you're terrified of it. When you practice having the thought deliberately and nothing bad happens, the thought starts to lose its charge. It goes from a scream to a whisper. This is something we might want to do with a therapist who knows ERP really well. What do you think about that?'",
    },
  ],
  whenItGetsTough:
    "Sharp-object avoidance is one of the OCD presentations where the extinction burst can be especially intense. When your child first sits at the table with a knife present after weeks or months of avoidance, OCD will pull out every weapon in its arsenal. The thoughts may become more vivid, more graphic, more disturbing than before. Your child may shake, cry, feel nauseous, or beg to leave. They may say things like 'What if I actually do it this time?' or 'I can't do this, I'm going to hurt someone.' In that moment, your calm is everything. You know — and eventually they will know — that the intensity of the fear is not proportional to the actual risk. They have never hurt anyone. They are not going to start now. The fear is OCD's last stand. If they can stay in the situation while the anxiety peaks and then falls, they will have an experience that no amount of avoidance could ever provide: proof that they are safe. If at any point the distress becomes truly unmanageable, or if your child is having panic attacks or dissociative symptoms, please seek professional ERP support. There is no shame in needing a guide for the hardest parts of this climb.",
  whenToGetHelp: [
    "The avoidance has expanded beyond knives to include a widening range of objects, situations, or people.",
    "Your child is unable to eat with the family, participate in school activities involving any pointed objects, or engage in basic daily activities without significant distress.",
    "They have begun asking you to remove objects from the home, lock things away, or restructure family routines around their fear.",
    "Your child has expressed that they are 'dangerous' and should be kept away from others, or has asked to be 'locked in' their room for others' safety.",
    "You are unsure whether the thoughts represent OCD or something else — a professional assessment can provide clarity and is always worthwhile for harm-related presentations.",
  ],
      ageSpecificExamples: [
      {
        ageRange: "8-12",
        description:
          "Your child avoids the kitchen when knives are out, won't use scissors at school, and may flinch away from pencils or forks. They're terrified that they might \"snap\" and hurt someone or themselves with a sharp object. They may ask you to lock up all the knives or refuse to set the table. They feel deeply ashamed of this fear because they know they don't want to hurt anyone -- but OCD tells them they can't be sure.",
        parentScript:
          "I know you're scared of the knives, and I understand why. But OCD is telling you a lie: it's saying that having a scary thought about a knife means you'll use it. That's not how thoughts work. I'm going to keep the knives where they normally are, and I'm going to stay calm about it, because I know you're safe. You're not dangerous. OCD is just loud.",
      },
      {
        ageRange: "13-18",
        description:
          "Your teen avoids cooking, refuses to use sharp tools in shop class or art class, and may avoid friends' homes where knives are visible. They might hide knives or scissors when friends come over, afraid of what might happen. They've likely researched violent acts online and now fear they could be capable of the same thing. They feel deeply isolated by these thoughts and may be reluctant to tell anyone, fearing they'll be treated as dangerous. They need you to know this isn't about wanting to hurt anyone -- it's about being terrified that they could.",
        parentScript:
          "I want to talk about the knife avoidance, because I know OCD is making it feel really dangerous. Here's what I believe and what the evidence shows: you are not going to hurt anyone. The thought that you might is OCD, not reality. I'm not going to remove the knives because that tells your brain the danger is real. But I will sit with you in the kitchen and help you get used to being around them safely. We'll go at your pace.",
      },
      {
        ageRange: "18+",
        description:
          "Your adult child may have eliminated all sharp objects from their living space, avoids cooking, and feels panicked in kitchens or workshops. They may have confided in a friend or partner who didn't understand OCD and reacted with fear, reinforcing the belief that they're dangerous. They may avoid visiting your home because of the knives in the kitchen. They've possibly been misdiagnosed with anger issues or violent tendencies by providers unfamiliar with harm OCD.",
        parentScript:
          "I'm not going to put the knives away when you visit. I know that sounds harsh, but it's actually the loving thing to do because hiding the knives confirms OCD's lie that you're dangerous. You're not. You're someone with a specific type of OCD that makes you afraid of things you'd never do. Have you found a therapist who understands harm OCD specifically? That distinction matters a lot.",
      },
    ],
    relatedSituationSlugs: [
    "terrified-might-hurt-someone",
    "scary-thoughts-cant-stop",
    "feels-bad-person-thoughts",
  ],
},

// ============================================
// CATEGORY 2: Mealtime & Food-Related
// ============================================

{
  slug: "food-prepared-specific-way",
  title: "My child won't eat unless the food is prepared in a specific way",
  categorySlug: "mealtime-food",
  ageRanges: ["4-7", "8-12", "13-18"],
  severity: "moderate",
  setup:
    "Meals have become a minefield. Your child insists that their sandwich be cut in a certain shape, their food can't touch on the plate, vegetables must be arranged in a specific pattern, or the same brand of ingredient must be used every time. If anything is 'wrong,' they refuse to eat, melt down, or insist you remake it. What started as a small preference has grown into an elaborate set of rules that dominate mealtimes.",
  ocdMechanics:
    "When a child requires food to be prepared in a precise way, the driving force is usually a need for things to feel 'just right' — a sensation that clinicians sometimes call the 'not just right experience.' OCD creates an intense internal discomfort when the rules aren't followed, and the child learns that having food prepared 'correctly' relieves that discomfort. Unlike a simple preference ('I like my sandwich cut in triangles'), OCD-driven food rules are accompanied by distress when violated, rigid rather than flexible, and escalating over time.\n\nThe compulsion is the specific preparation ritual. The obsession may be harder to identify because it's often not a clear thought like 'Something bad will happen' — it's more of a felt sense that things are wrong, contaminated, unsafe, or incomplete. Some children do have specific fears attached: 'If the food touches, it's contaminated,' or 'If it's not the right brand, it might make me sick.' Others simply feel an overwhelming wrongness that they can't articulate.\n\nAccommodation is almost inevitable here because the alternative — a child who won't eat — is terrifying for any parent. But each time you remake the food, buy the specific brand, or rearrange the plate, OCD's rules become more entrenched. The rules tend to expand: first the sandwich must be cut right, then the plate must be a certain color, then the table must be set a specific way, then you must wash your hands a certain number of times before preparing their food. The child isn't being difficult. They're suffering under an increasingly demanding set of rules that they didn't choose and can't easily break.",
  whatNotToDo: [
    {
      mistake: "Perfectly accommodating every food rule",
      explanation:
        "This comes from love — you want your child to eat, and following the rules makes mealtime peaceful. But each accommodation teaches OCD that its rules are valid and necessary. The rules will expand, and you'll find yourself spending enormous energy on meal preparation while the list of requirements grows longer. The short-term peace comes at the cost of long-term entrenchment.",
    },
    {
      mistake: "Suddenly refusing to follow any of the rules",
      explanation:
        "Going cold turkey — 'From now on, you eat what you get' — is overwhelming and rarely works. It can trigger massive meltdowns, food refusal, and a rupture in your child's trust. The distress they feel when the rules are broken is real, even if the rules themselves are OCD-driven. Changes need to be gradual and collaborative.",
    },
    {
      mistake: "Making it about control or behavior",
      explanation:
        "Framing this as 'picky eating,' 'being difficult,' or a power struggle misses what's actually happening. Consequences, rewards for eating 'normally,' or comments like 'Just eat it, it's fine' don't address the underlying anxiety. Your child is not choosing to be rigid — OCD is imposing rigidity on them, and they need help loosening its grip, not punishment for being controlled by it.",
    },
    {
      mistake: "Hiding changes to avoid a reaction",
      explanation:
        "Secretly using a different brand or cutting the sandwich differently and hoping they won't notice may seem clever, but it undermines trust. If they discover the change, anxiety will spike and they may become even more vigilant and controlling around food. Changes should be transparent and collaborative.",
    },
  ],
  strategies: [
    {
      name: "Map the Rules Together",
      difficulty: "starter",
      steps: [
        "Sit down with your child during a calm, non-mealtime moment and make a list of all the food rules together. Approach this with curiosity, not judgment: 'Let's figure out all the things OCD says about food.'",
        "For each rule, ask how anxious they'd feel (0-10) if the rule were broken. This helps you both see which rules have less power and which are deeply entrenched.",
        "Name OCD as the rule-maker: 'So OCD says the sandwich has to be cut in triangles. What would happen if it were rectangles? ... That anxious feeling? That's OCD, not the sandwich.'",
        "This exercise itself is therapeutic — it creates distance between your child and the rules. They start to see the rules as something imposed on them, not something they truly need.",
      ],
      exampleScript:
        "You might say: 'I've been thinking about mealtimes and I want us to work on this together — as a team, against OCD. Can we make a list of all the rules OCD has about food? I won't judge any of them. I just want to understand what OCD is demanding. ... Okay, so we've got: sandwich must be triangles, food can't touch, has to be the blue plate, carrots must be on the left side. That's a lot of rules! Now, if we broke each one, how upset would you be from 0 to 10? ... The blue plate is only a 3? Interesting. The food touching is an 8? Okay. This helps us know where to start.'",
    },
    {
      name: "Small, Planned Rule-Breaks",
      difficulty: "intermediate",
      steps: [
        "Starting with the lowest-anxiety rule from your map, plan a deliberate 'rule break' together. Your child should know it's coming — surprise rule breaks feel like ambushes.",
        "Frame it as a team challenge against OCD: 'Today, we're going to show OCD that you can eat off a different plate and nothing bad happens.'",
        "Make the change and then eat the meal. Your child's job is to notice the anxiety, allow it to be there, and eat anyway. They don't have to enjoy it. They just have to do it.",
        "After the meal, debrief: 'How was that? What did OCD say? And what actually happened?' Help them see the gap between OCD's prediction and reality.",
        "Repeat the same rule break for several days until the anxiety is minimal, then move to the next rule on the list.",
      ],
      exampleScript:
        "You might say: 'We looked at our list and the blue plate rule was a 3 — the least scary one. So here's what I'd like to try tonight: I'm going to put your food on the green plate instead. OCD is going to notice immediately. It might make your stomach feel funny or make you feel like something is wrong. And we're going to sit with that. You're going to eat your dinner on the green plate and we're going to see what OCD does. I bet the food tastes exactly the same. After dinner, we'll talk about it. Sound like a plan? We're taking back one rule at a time.'",
    },
    {
      name: "Gradual Flexibility Building",
      difficulty: "advanced",
      steps: [
        "Once your child has successfully broken several lower-level rules, begin introducing controlled randomness into meals. This builds the tolerance for uncertainty that OCD tries to eliminate.",
        "Start a 'surprise element' at one meal per day: one thing will be slightly different, and your child won't know what it is until the food arrives. Begin with very small changes.",
        "As tolerance builds, increase the variability. Some days the surprise is which plate. Then which side the food is on. Then how the food is cut. Eventually, you're cooking meals without following any of the old rules.",
        "Celebrate flexibility as strength: 'OCD had 12 rules about dinner last month. Tonight you ate with zero rules. That's incredible.'",
        "If your child begins creating new rules to replace broken ones (which OCD sometimes does), name this pattern: 'I notice OCD is trying to make a new rule to replace the old one. Let's not let it.'",
      ],
      exampleScript:
        "You might say: 'You've been doing so well breaking OCD's rules one by one. I'm really proud of you. Now I want to try something new. At dinner tonight, one thing is going to be different. I'm not going to tell you what. It might be small — maybe the plate, maybe where I put the vegetables. Your job is to just roll with it. OCD is going to want to scan everything and figure out what's wrong. Instead of scanning, I want you to just start eating. Think of it as an adventure: what did I change tonight? You can tell me after dinner if you figured it out. But you have to eat first.'",
    },
  ],
  whenItGetsTough:
    "Food-related OCD rule-breaking often produces dramatic reactions because meals happen multiple times a day and hunger adds urgency. When you break a rule your child has relied on, they may refuse to eat entirely, have a significant meltdown, or make the meal miserable for the whole family. It is important to distinguish between 'won't eat this meal' (uncomfortable but not dangerous for an otherwise healthy child) and genuine food restriction that threatens nutrition. A healthy child who skips one dinner because the plate was the wrong color will not be harmed — though it will feel terrible for everyone. OCD is betting that the meltdown will make you cave. If you hold the boundary with compassion ('I know this is hard. The food is here when you're ready. I'm not remaking it, and that's because I love you too much to keep feeding OCD'), the meltdowns will peak and then begin to diminish. If your child has a history of significant food restriction, low weight, or any eating disorder concerns, please work with a professional before modifying food rules — the intersection of OCD and eating requires specialized care.",
  whenToGetHelp: [
    "The food rules have expanded to the point where your child is eating a very limited diet, losing weight, or not getting adequate nutrition.",
    "Mealtimes are consistently taking more than 45-60 minutes due to rituals, rule-checking, or preparation requirements.",
    "The rules have extended beyond the home — your child cannot eat at restaurants, at friends' houses, or at school without significant distress or refusal.",
    "Your child has developed rituals around food that go beyond preparation (repeated handwashing before eating, needing to say certain words before meals, chewing a specific number of times).",
    "You suspect your child may be developing an eating disorder alongside or overlapping with OCD — professional assessment can differentiate and treat both.",
  ],
      ageSpecificExamples: [
      {
        ageRange: "4-7",
        description:
          "Your young child needs sandwiches cut diagonally (never horizontally), food that doesn't touch other food on the plate, and meals served on a specific plate with a specific cup. If the apple slices are the wrong thickness or the toast is too dark, they refuse to eat. Mealtimes are a minefield of rigid rules that escalate into meltdowns if broken. What started as normal toddler preferences has intensified into inflexible demands that disrupt the whole family.",
        parentScript:
          "I know you want your sandwich cut a special way, and the Worry Monster says it has to be that way or it's not okay. But this sandwich has the same yummy stuff inside no matter how it's cut. Today I'm going to cut it a different way, and I bet it tastes exactly the same. If the Worry Monster gets grumpy, we'll just let it be grumpy.",
      },
      {
        ageRange: "8-12",
        description:
          "Your child has detailed rules about food preparation: specific brands, specific cooking methods, specific serving temperatures. They may refuse to eat at restaurants because they can't control how the food is made. School lunch is out of the question. They inspect their meals at home and interrogate you about preparation steps. If a rule is violated, they can't eat the food, even if they're hungry. The rules are expanding, and the list of acceptable meals is shrinking.",
        parentScript:
          "I hear you that the food doesn't feel right. OCD is making a lot of rules about how food needs to be prepared, and I'm not going to follow all of them anymore. Not because I don't care, but because following those rules is making OCD stronger and your world smaller. Tonight's dinner is dinner. You can eat it or not, and I won't be upset either way. But I'm cooking it the regular way.",
      },
      {
        ageRange: "13-18",
        description:
          "Your teen may insist on preparing all their own meals to ensure the 'right' process is followed. They spend 45 minutes making a simple meal because every step must be done in order. Eating out with friends is impossible, and they've started turning down social invitations that involve food. They may photograph their food preparation to review later and confirm it was done correctly. They recognize the behavior is excessive but feel they can't eat safely otherwise.",
        parentScript:
          "I see you spending a lot of time on meal prep, and I know it's not because you love cooking -- it's because OCD has made eating feel unsafe unless you control every variable. That's not sustainable, and it's isolating you from the people you care about. What would it look like to eat one meal this week that you didn't prepare? We can start with something easy.",
      },
    ],
    relatedSituationSlugs: [
    "inspects-every-bite",
    "eat-specific-order-bites",
    "refuse-food-others-touched",
  ],
},

{
  slug: "inspects-every-bite",
  title: "They inspect every bite of food for contamination before eating",
  categorySlug: "mealtime-food",
  ageRanges: ["8-12", "13-18", "18+"],
  severity: "moderate",
  setup:
    "Your child has turned eating into an investigation. They examine every piece of food closely — turning it over, sniffing it, looking for spots, hairs, discoloration, or anything 'off.' They may ask you repeatedly if the food is safe, demand to know exactly what's in it, or refuse to eat anything they didn't watch being prepared. Meals that should take 15 minutes stretch into an hour. They might spit food out mid-chew if something feels 'wrong.'",
  ocdMechanics:
    "Contamination OCD applied to food follows the classic obsession-compulsion cycle with particular intensity because the feared consequence — ingesting something harmful — feels immediate and physical. The obsessive thought might be: 'What if there's something in this food that will make me sick?' or 'What if this food is contaminated with chemicals, germs, or something disgusting?' The thought produces intense anxiety and often a physical sensation of disgust or nausea that feels like evidence that the food really is unsafe.\n\nThe compulsions — inspecting, sniffing, asking questions, watching food being prepared — provide temporary relief. 'I checked and it looks okay. It's probably safe.' But OCD is never satisfied. It raises the bar: 'But did you check the underside? What about the inside? What if you missed something? What if your eyes aren't good enough to see it?' The inspection becomes longer and more detailed. The questions become more specific and repetitive. Eventually, the child may decide that no amount of checking is sufficient and begin refusing certain foods or food sources entirely.\n\nThis presentation can be especially confusing because a certain amount of food inspection is normal and healthy — nobody wants to eat spoiled food. The line between reasonable caution and OCD is crossed when the checking is excessive relative to actual risk, when it causes significant distress, and when the child cannot stop even when they want to. A child who glances at their food before eating is practicing normal hygiene. A child who spends five minutes examining each bite while their stomach growls is in the grip of OCD.",
  whatNotToDo: [
    {
      mistake: "Answering every question about food safety in detail",
      explanation:
        "When your child asks 'Is this chicken fully cooked? Did you wash the vegetables? When was this opened? Is this expired?' for the tenth time during one meal, answering thoroughly each time becomes a reassurance compulsion. You are becoming the checking mechanism OCD demands. Each detailed answer provides brief relief and guarantees the next question is coming.",
    },
    {
      mistake: "Letting them watch or supervise all food preparation",
      explanation:
        "Allowing your child to stand in the kitchen monitoring every step of cooking feels like a reasonable compromise, but it's a compulsion. They're not learning to cook — they're performing surveillance. And OCD will expand the requirements: they'll need to see the ingredients come out of the package, confirm expiration dates, verify cooking temperatures. The 'safe' zone will shrink with each new requirement.",
    },
    {
      mistake: "Preparing 'safe' alternatives when they refuse inspected food",
      explanation:
        "Making a separate meal of only foods they feel comfortable with (typically highly processed, packaged foods they can verify) seems like a way to ensure they eat. But you're building a smaller and smaller menu that OCD controls. Today it's five safe foods. In a month, it might be two.",
    },
    {
      mistake: "Dismissing the fear as silly or irrational",
      explanation:
        "Comments like 'The food is fine, stop being ridiculous' or eye-rolling at the inspection process invalidate the very real distress your child is experiencing. They know, on some level, that the behavior is excessive. Being told it's silly doesn't help them stop — it just adds shame on top of anxiety.",
    },
  ],
  strategies: [
    {
      name: "Limit the Inspection Window",
      difficulty: "starter",
      steps: [
        "Rather than trying to eliminate food inspection immediately, set a time boundary around it. This is a harm-reduction approach that begins to restrict the compulsion.",
        "Together, agree on a reasonable inspection time — for example, 10 seconds per item of food. Use a timer if helpful. When the time is up, the inspection is done and eating begins.",
        "Frame this as a team effort: 'We're going to give OCD a time limit. It can have 10 seconds. After that, we eat.'",
        "If your child protests that 10 seconds isn't enough, acknowledge the anxiety: 'I know OCD says you need more time. And the anxious feeling says the food isn't safe. But we're going to find out what happens when we eat at 10 seconds.'",
        "Gradually reduce the inspection window over days or weeks: 10 seconds, then 5, then a glance, then none.",
      ],
      exampleScript:
        "You might say: 'I've noticed that checking your food has been taking longer and longer, and I don't think it's making you feel safer — it's just making dinner take forever and OCD more demanding. So here's what I'd like to try: we're going to give OCD a timer. You get 10 seconds to look at your food. That's a real look — you can glance at everything on your plate. When the timer beeps, we eat. OCD will say it's not enough. We're going to eat anyway and see what happens. I'll do it with you — we'll both start eating when the timer goes.'",
    },
    {
      name: "Question Quota — Reducing Reassurance Seeking",
      difficulty: "intermediate",
      steps: [
        "Count how many food-safety questions your child currently asks per meal. Don't judge — just count for a few days to get a baseline. Share the number with them: 'Did you know you asked 14 questions about dinner last night?'",
        "Together, set a quota that's lower than the baseline but not zero. If they currently ask 14 questions, start with 7.",
        "Your child gets to choose which questions to 'spend' from their quota. This gives them agency and forces them to prioritize — which helps them see that most of the questions aren't actually necessary.",
        "When the quota is used up, your response to additional questions is a warm, consistent redirect: 'That's an OCD question, and we've used our questions for tonight. Time to eat.'",
        "Reduce the quota gradually. The eventual goal is zero questions — but get there incrementally.",
      ],
      exampleScript:
        "You might say: 'I counted something interesting — over the last few dinners, you asked between 12 and 18 questions about whether the food was safe. That's a lot of questions, and OCD is never satisfied with the answers anyway, right? So here's the deal: tonight, you get 5 questions. That's it. You pick which 5 matter most to you. I'll answer those honestly. After that, no more food questions — just eating. This is going to feel uncomfortable. And that's actually the point — we're practicing being a little uncertain about food and eating anyway. Because that's what life without OCD looks like.'",
    },
    {
      name: "Deliberate 'Imperfect' Eating Exposures",
      difficulty: "advanced",
      steps: [
        "Once your child has been practicing time limits and question quotas, introduce exposures that directly challenge the contamination fear. These should be planned, collaborative, and graduated.",
        "Create a hierarchy of 'imperfect eating' scenarios ranked by anxiety: eating food they didn't see prepared (3/10), eating food that touched another food on the plate (5/10), eating a bite without any inspection (6/10), eating food prepared by someone outside the family (7/10), eating food from a buffet or shared dish (8/10).",
        "Start at the lowest level and practice. The exposure is the eating. The response prevention is not inspecting, not asking, not spitting out.",
        "Expect that the first bite will be the hardest. Once they've eaten one 'unchecked' bite and nothing bad happens, the subsequent bites are easier. The brain needs this experience of 'I didn't check and I was fine' over and over.",
        "Build toward real-world generalization: eating at a restaurant, eating food a friend made, eating school cafeteria food.",
      ],
      exampleScript:
        "You might say: 'You've been doing really well with the timer and the question limit. I think you're ready for the next step, and I want to do it together. Tonight, I'm going to put dinner on the table and I want you to take your first bite without looking at the food closely at all. Just pick up your fork and eat. OCD is going to scream. It's going to say the food might be bad, you need to check, something might be wrong. And you're going to eat that bite anyway. Just one bite to start. After that, you can eat normally. But that first bite? That's the brave one. That's the one that tells OCD: I'm done letting you run my meals.'",
    },
  ],
  whenItGetsTough:
    "Food inspection reduction can trigger intense anxiety spikes during meals, which can feel impossible to navigate when your whole family is sitting at the table. Your child may push food around, cry, gag, or refuse to eat. Siblings may become frustrated or confused. You may feel like a terrible parent for 'forcing' your child to eat food they're afraid of. Remember: you're not forcing anything. You're offering normal, safe food and declining to participate in OCD's rituals. There's a big difference. The anxiety your child feels is real, but the danger is not. If they skip a meal during the hardest exposures, that is okay for an otherwise healthy child. OCD is counting on the fact that you're more afraid of them missing a meal than they are of the food. Stay steady, stay warm, and keep the long view in mind: a few hard meals now versus years of expanding food rules. If your child is underweight, has medical conditions that require consistent nutrition, or if food restriction becomes significant, please involve their pediatrician and a therapist who specializes in OCD.",
  whenToGetHelp: [
    "Your child's diet has narrowed significantly — they are eating fewer than 10-15 foods or have eliminated entire food groups due to contamination fears.",
    "They are losing weight, showing signs of nutritional deficiency, or their pediatrician has expressed concern about their eating.",
    "The inspection rituals have expanded beyond visual checking — they now include elaborate sniffing, touching, asking about preparation methods, or requiring you to eat the food first to 'prove' it's safe.",
    "Food-related anxiety has generalized to non-food contamination (doorknobs, surfaces, objects) suggesting broader contamination OCD that requires professional ERP treatment.",
    "Mealtimes have become so distressing that they are damaging family relationships, causing significant conflict, or leading to your child eating alone to avoid the anxiety.",
  ],
      ageSpecificExamples: [
      {
        ageRange: "8-12",
        description:
          "Your child examines every piece of food before putting it in their mouth -- turning it over, looking for discoloration, sniffing it, sometimes pulling it apart. A meal that should take 15 minutes takes 45. They may spit food out if something looks or feels 'off,' even mid-chew. Eating in the school cafeteria is impossible because they can't inspect the food carefully enough in the time allotted. They're losing weight or becoming nutritionally limited.",
        parentScript:
          "I can see you're checking your food really carefully. OCD is telling you something might be wrong with it, but this food is safe -- I made it, and I know exactly what's in it. What if you tried eating the next three bites without inspecting them? I know that's scary. Let's do it together -- I'll take a bite without looking too, and we'll see that we're both totally fine.",
      },
      {
        ageRange: "13-18",
        description:
          "Your teen picks apart meals, uses the flashlight on their phone to inspect food at restaurants, and has an ever-growing list of foods they won't eat because they once found something 'wrong' with them. They may eat only processed, packaged foods because they feel more predictable. Dining with friends or on dates is excruciating. They know the behavior is noticeable and feel ashamed, but the anxiety of eating something uninspected feels worse than the social cost.",
        parentScript:
          "I notice you're inspecting your food again, and I know OCD is running the show right now. I'm not going to tell you the food is safe because that's reassurance and it doesn't stick. What I will say is this: you've eaten thousands of meals and nothing bad has happened. Your track record is perfect. What would it take for you to trust that track record more than OCD's warnings?",
      },
      {
        ageRange: "18+",
        description:
          "Your adult child may refuse to eat at your house, avoid restaurants entirely, or bring their own food to family gatherings. They spend significant time inspecting groceries at the store, returning items that don't look 'right,' and examining meals under bright light before eating. They're nutritionally restricted and possibly underweight. The food inspection ritual may have expanded into checking drinks, medication, and supplements with the same intensity.",
        parentScript:
          "I made this dinner for the family, and I'm not going to change the recipe or preparation to match OCD's rules. The food is safe. I know you may not be able to eat it tonight, and that's okay -- but I'm not going to enable the inspection ritual by helping you check. That's something to work on with your therapist. I love you and I want you to be able to enjoy a meal again.",
      },
    ],
    relatedSituationSlugs: [
    "food-prepared-specific-way",
    "refuse-food-others-touched",
    "hands-raw",
  ],
},

{
  slug: "eat-specific-order-bites",
  title:
    "They need to eat foods in a specific order or the 'right' number of bites",
  categorySlug: "mealtime-food",
  ageRanges: ["4-7", "8-12", "13-18"],
  severity: "mild",
  setup:
    "Your child has developed rules about the sequence of eating: they must eat their vegetables first, then the protein, then the starch — or some other specific order. They might need to take exactly three bites of one thing before switching to another, or chew each bite a certain number of times. If interrupted or if they lose count, they may need to start over from the beginning. What looked like a quirky habit has become a rigid requirement.",
  ocdMechanics:
    "Ordering and counting compulsions around food are driven by OCD's need for symmetry, completeness, and the 'just right' feeling. Unlike contamination-based food OCD, the obsession here isn't about the food being unsafe — it's about eating it 'correctly.' The child experiences a nagging, uncomfortable sensation when the order is violated, which can feel like something terrible will happen (magical thinking) or simply that things are unbearably 'wrong' (the 'not just right' experience).\n\nFor some children, there is a magical thinking component: 'If I don't eat in the right order, something bad will happen to Mom' or 'If I don't chew the right number of times, I'll get sick.' For others, the compulsion has no clear thought behind it — it's purely a sensory-driven need for things to feel complete and correct. Both presentations are OCD, and both respond to the same treatment approach.\n\nThe rituals tend to become more elaborate over time. What starts as eating foods in a certain order may evolve to include specific utensils, a specific number of bites per food, chewing counts, swallowing rituals, or needing to start the meal over if any rule is broken. The meal becomes an increasingly complex performance that leaves little room for actually enjoying food. The child may eat very slowly, become anxious when eating with others (who might disrupt the ritual), or avoid meals altogether if they don't feel they can perform the ritual properly.",
  whatNotToDo: [
    {
      mistake: "Plating food in the 'required' order to make things easier",
      explanation:
        "Arranging food on the plate in the sequence your child needs to eat it may seem like a simple kindness, but it's accommodation. You're doing the compulsion's setup work. The goal is for your child to be able to eat food in any arrangement without distress — not for the environment to be perfectly configured around OCD's rules.",
    },
    {
      mistake: "Allowing unlimited time for meals",
      explanation:
        "If your child's eating rituals are extending meals to 45 minutes or more, allowing this without limit lets OCD set the pace of your family's life. A reasonable meal duration for a child is 20-30 minutes. Setting a gentle time boundary is not cruel — it's a framework that limits how much space the ritual can occupy.",
    },
    {
      mistake: "Shushing siblings or controlling the mealtime environment",
      explanation:
        "If you find yourself telling other family members to be quiet, not talk to the child while they eat, or not interrupt their counting, you've built a family-wide accommodation system. Other children's needs matter too, and a silent, controlled mealtime environment reinforces the idea that the ritual must not be disturbed.",
    },
    {
      mistake: "Allowing restarts when the sequence is 'broken'",
      explanation:
        "If your child insists on starting the meal over because they ate foods in the wrong order or lost count of their bites, each restart reinforces the rule. The moment the sequence breaks is actually a therapeutic opportunity — it's a naturally occurring exposure to 'wrong order' eating.",
    },
  ],
  strategies: [
    {
      name: "Name the Pattern and Externalize It",
      difficulty: "starter",
      steps: [
        "Help your child recognize the eating rules as OCD, not as genuine needs. Young children might not realize that other kids don't eat this way.",
        "Use age-appropriate language: 'OCD has made up a bunch of rules about how you eat. Rules like: you have to eat the peas first. You have to chew 5 times. But these are OCD's rules, not real rules. Nothing actually happens if you eat the chicken first.'",
        "Ask your child what they think would happen if they broke a rule. If there's a magical thinking component ('Something bad will happen to Dad'), name it gently: 'That's OCD trying to scare you with a threat. Eating chicken before peas cannot affect Dad. OCD just wants you to believe it can.'",
        "For younger children, use a playful tone: 'Let's catch OCD making food rules! Every time we notice one, we'll say: Nice try, OCD!'",
      ],
      exampleScript:
        "You might say: 'I've been watching how OCD bosses you around at dinner, and honestly, it's got a LOT of rules, doesn't it? First the green things, then the white things, then the brown things, and exactly four bites each? OCD is being a total control freak about your dinner! I want to ask you something: what do you think would actually happen if you ate a bite of chicken right now, before the peas? ... OCD says something bad? Okay. Let's test that. I think OCD is bluffing. I think you can eat chicken first and the world keeps spinning. Want to find out together?'",
    },
    {
      name: "Rule-Scramble Challenges",
      difficulty: "intermediate",
      steps: [
        "Turn rule-breaking into a structured game or challenge. This works especially well with younger children but can be adapted for any age.",
        "Before dinner, announce: 'Tonight is Scramble Night! We're going to eat our foods in a totally random order. Everyone at the table does it — not just you.'",
        "Make it fun and participatory: let a sibling or parent draw food items out of a hat to determine the eating order. Or roll a die — each number corresponds to a food on the plate.",
        "The whole family participates, which normalizes eating without rules and removes the child's sense of being singled out.",
        "Start with one Scramble Night per week and gradually increase. The goal is for flexible, ruleless eating to become normal.",
      ],
      exampleScript:
        "You might say: 'Okay everyone, tonight is Scramble Night! Here's how it works: I wrote down everything that's on our plates on these little slips of paper. We're each going to draw one and that's our first bite. Then we draw again. Total random order. Everyone plays — Mom, Dad, everyone. The point is to show OCD that food order doesn't matter. It's going to feel weird for you, and that's okay. That weird feeling is just OCD grumbling because it lost control. Ready? Let's draw!'",
    },
    {
      name: "Counting and Chewing Response Prevention",
      difficulty: "advanced",
      steps: [
        "If your child counts bites or chews, the exposure is eating without counting. This is harder than it sounds because counting may have become automatic.",
        "Start by introducing a distraction during meals that makes counting difficult: conversation, music, or an audiobook. The goal is to interrupt the counting ritual naturally.",
        "Gradually shift from distraction to deliberate non-counting: 'Tonight, try to eat three bites without counting the chews. Just chew until the food is ready to swallow and then swallow.'",
        "Address the restart compulsion directly: if they lose count and want to start over, agree in advance that restarts are not allowed. 'If you lose count, we keep going. That's the rule — our rule, not OCD's.'",
        "Track progress: how many meals per week are eaten without counting? Celebrate the trend even if individual meals are still hard.",
      ],
      exampleScript:
        "You might say: 'I know the counting thing feels really automatic at this point — like you almost can't eat without counting to 7 on each bite. But I want us to practice eating without counting, because counting is one of OCD's favorite tricks to keep control of mealtimes. Here's what we'll do tonight: I'm going to put on that podcast you like while we eat. The talking is going to make it really hard to count, and that's the point. Just focus on the podcast and eat. If you catch yourself counting, just notice it — Oh, there I go again — and let it go. You don't need to start over. You don't need to fix it. Just keep eating. The food will digest perfectly fine whether you counted or not.'",
    },
  ],
  whenItGetsTough:
    "Ordering and counting rituals often feel less 'serious' than other OCD presentations, which can lead parents to underestimate how difficult it is for the child to break them. When you scramble the eating order or prevent restarts, your child may experience genuine distress — the 'wrongness' feeling is powerful even though the fear may seem irrational. Young children in particular may not be able to articulate why they need to eat this way; they just know it feels terrible when they don't. Be patient. Some meals will go well and some will be awful. Your child might eat very little on nights when the ritual is disrupted, and that's okay. They're building a tolerance for imperfection at the table, and that's a skill that serves them far beyond mealtimes. If the rituals are connected to magical thinking ('If I don't eat right, Mom will get sick'), expect extra resistance — because now OCD has tied the ritual to someone they love. Stay compassionate and firm: 'I know OCD says eating out of order will hurt me. I'm right here, I'm perfectly safe, and I'll be safe tomorrow too.'",
  whenToGetHelp: [
    "The eating rituals are taking so long that your child is regularly not finishing meals or is eating significantly less than they should for their age and activity level.",
    "The rituals have expanded beyond ordering and counting to include other behaviors — specific utensils, plate arrangements, pre-meal rituals, or food that must be restarted if any rule is broken.",
    "Your child is becoming anxious about eating outside the home (restaurants, school, friends' houses) because they cannot perform their rituals without being noticed.",
    "The counting or ordering has spread to other areas of life — arranging objects, counting steps, needing to do things in a specific sequence throughout the day — suggesting broader OCD that extends beyond meals.",
    "Your child is becoming distressed, tearful, or angry at every meal, and the family's quality of life around food has significantly deteriorated.",
  ],
      ageSpecificExamples: [
      {
        ageRange: "4-7",
        description:
          "Your young child eats foods in a rigid sequence -- all the chicken first, then all the rice, then all the vegetables, always clockwise on the plate. If foods touch or the order is disrupted, they may refuse to eat, cry, or push the plate away. They count bites or chew a specific number of times. Mealtimes are tense and slow, and they get upset if anyone comments on their eating pattern. You worry they're not getting enough nutrition because some meals end in tears before they finish.",
        parentScript:
          "I see you're eating in your special order. The Worry Monster has rules about food, doesn't it? What if today we tried mixing it up -- just one bite of vegetable between bites of chicken? The Worry Monster won't like it, but our tummy doesn't mind at all. I'll try it too -- watch me eat a silly order!",
      },
      {
        ageRange: "8-12",
        description:
          "Your child's eating rituals have become elaborate: specific numbers of bites per food, chewing each bite a set number of times, pausing between foods, and becoming distressed if the sequence is interrupted by conversation or a sibling's behavior. Lunch at school is rushed because the rituals take so long, and they often come home hungry. Birthday parties and holiday meals are stressful because they can't follow their pattern with unfamiliar foods served in unpredictable ways.",
        parentScript:
          "I know the eating rules feel important, but I want you to notice something: the rules have gotten bigger and taken over mealtime. OCD keeps adding more steps. What if we picked one meal today where we break one rule? You choose which rule. I'm not trying to make eating harder -- I'm trying to help you take mealtime back from OCD.",
      },
      {
        ageRange: "13-18",
        description:
          "Your teen eats in a rigid, ritualized pattern that they try to hide from peers. They may eat alone, avoid lunch in the cafeteria, and turn down dinner invitations. If someone notices and comments, they're mortified. The ritual may include internal counting, specific chewing patterns, and \"forbidden\" food combinations. Eating has become a joyless, anxiety-laden chore rather than a social and nourishing activity. They dread holiday meals and family gatherings where their eating will be observed.",
        parentScript:
          "I've noticed that eating has become really stressful for you, and I think OCD has a lot of rules about how it has to happen. I'm not going to point out the rituals at the dinner table -- that's between you and your therapist. But I am going to create a calm, pressure-free environment where you can practice breaking the rules when you're ready. No one at this table is judging you.",
      },
    ],
    relatedSituationSlugs: [
    "food-prepared-specific-way",
    "specific-order-restarts",
    "counts-repeats-prevent-bad",
  ],
},
  // ---------------------------------------------------------------------------
  // CLOTHING & DRESSING + FAMILY ROUTINES + MAGICAL THINKING
  // ---------------------------------------------------------------------------
  // ============================================
  // CATEGORY 1: Clothing & Getting Dressed
  // ============================================

  {
    slug: "changes-outfits-repeatedly",
    title: "My child changes outfits repeatedly because nothing feels 'right'",
    categorySlug: "clothing-dressing",
    ageRanges: ["4-7", "8-12", "13-18"],
    severity: "moderate",
    setup: "Your child stands in front of their closet, pulling on one outfit after another, growing more distressed with each change. They say things like \"this doesn't feel right\" or \"something is off\" but can't explain what's wrong. What should take five minutes stretches into thirty or more, and the pile of rejected clothes on the floor keeps growing.",
    ocdMechanics: "When your child says clothes don't feel \"right,\" they're experiencing a phenomenon called \"not just right\" experiences (NJREs), which are extremely common in OCD. The OCD creates an intense internal sense of wrongness — not about how the clothes look, but about an intangible feeling that something is incomplete or off. Your child isn't being picky or vain; they're chasing a feeling of \"just right\" that OCD keeps moving out of reach.\n\nThe cycle works like this: your child puts on an outfit and OCD immediately signals that something is wrong (the obsession). The discomfort is so intense that they feel compelled to change (the compulsion). When they put on something new, there might be a brief flash of relief — but OCD quickly finds something wrong with the new outfit too. Each change reinforces the idea that the \"right\" feeling exists and can be found if they just keep trying.\n\nOver time, this cycle tends to escalate. The window of what feels acceptable shrinks. Your child may start refusing entire categories of clothing, needing your reassurance that an outfit is \"okay,\" or becoming inconsolable when the right feeling never arrives. The more they chase the feeling, the more power OCD gains over their morning.",
    whatNotToDo: [
      {
        mistake: "Helping them find the 'right' outfit by suggesting option after option",
        explanation: "It's completely natural to want to help your child feel comfortable. But when you cycle through outfits with them, you're joining OCD's search party. You're both now operating under OCD's rule that the 'right' feeling must be found before they can move on. This teaches your child that the uncomfortable feeling is intolerable and must be resolved."
      },
      {
        mistake: "Saying 'you look fine' or 'that outfit is perfect' repeatedly",
        explanation: "Reassurance feels like the kind thing to do, but it becomes its own compulsion. Your child isn't actually asking about appearance — they're asking you to make the 'not right' feeling go away. When reassurance doesn't stick (and it won't, because OCD always needs more), both of you end up more frustrated."
      },
      {
        mistake: "Getting frustrated and saying 'just pick something and let's go'",
        explanation: "Your frustration is valid — this is genuinely hard to watch. But your child isn't choosing to be difficult. They're trapped in a cycle that feels as urgent to them as a fire alarm. Anger or impatience can add shame on top of the anxiety, making the whole experience even more distressing without reducing the OCD behavior."
      },
      {
        mistake: "Letting them stay home to avoid the dressing struggle",
        explanation: "Avoidance is OCD's favorite strategy. When your child stays home because getting dressed was too hard, OCD learns that it can control the whole family's schedule. Over time, the avoidance expands — and the world gets smaller."
      }
    ],
    strategies: [
      {
        name: "The Two-Outfit Choice",
        difficulty: "starter",
        steps: [
          "The night before, have your child set out exactly two outfits — no more.",
          "In the morning, explain the rule: 'You'll pick one of these two. Whichever you put on first is the one you wear today.'",
          "When they put on the first outfit and say it doesn't feel right, validate briefly: 'I hear you. OCD is saying it's not right. You're going to wear it anyway.'",
          "Redirect to the next activity — breakfast, brushing teeth — without further discussion of the outfit.",
          "Praise their bravery: 'You wore it even though OCD was loud. That takes guts.'"
        ],
        exampleScript: "I know OCD is giving you that 'not right' feeling. That feeling is uncomfortable, but it's not dangerous. We're going to do something brave today — we're going to keep this outfit on and let that feeling be there. I bet it'll quiet down once we get going. I'm proud of you for being willing to try."
      },
      {
        name: "The 'Not Just Right' Boss Back",
        difficulty: "intermediate",
        steps: [
          "Help your child externalize the feeling by naming it: 'That's the Not-Just-Right feeling. OCD is the one sending that signal.'",
          "Teach them to talk back to it: 'Maybe it's right, maybe it's not. I'm wearing it anyway.'",
          "Set a timer for two minutes after they put on the outfit. Their only job is to keep it on for two minutes without changing.",
          "After two minutes, check in: 'How loud is the not-right feeling now, on a scale of 1–10?' (It usually drops.)",
          "Gradually extend the timer — then eventually drop it altogether."
        ],
        exampleScript: "There's that Not-Just-Right bully again. It wants you to believe that you can't handle wearing this shirt. But here's the secret — if you keep the shirt on, the feeling gets bored and wanders off. Let's see what happens if we wait it out together."
      },
      {
        name: "Purposeful 'Wrong' Outfit Exposures",
        difficulty: "advanced",
        steps: [
          "With your child's agreement, plan a deliberate exposure: they'll wear something that triggers a mild 'not right' feeling on purpose.",
          "Start with low-stakes situations — wearing it around the house for an hour, then to a quick errand.",
          "Before the exposure, predict together what OCD will say and rate the expected anxiety (1–10).",
          "During the exposure, don't discuss the clothing. Focus on whatever activity you're doing.",
          "Afterward, debrief: 'What did OCD predict? What actually happened? What was your anxiety at the end versus the beginning?'"
        ],
        exampleScript: "Today we're going to play a trick on OCD. We're going to wear something OCD says is 'wrong' and prove that nothing bad happens. You get to pick which 'wrong' outfit — something that feels maybe a 4 or 5 out of 10 uncomfortable, not a 10. We're being brave on purpose. What do you think OCD will say when we do this?"
      }
    ],
    whenItGetsTough: "When you first start limiting outfit changes, your child's distress will likely increase before it decreases. This is called an extinction burst, and it's actually a sign that the approach is working — OCD is losing a tool it relied on and it's fighting back hard. Your child may cry, refuse to leave their room, or insist that today is \"different\" and they really need to change. This is heartbreaking to witness, and every parenting instinct will tell you to give in. Hold steady if you can. The spike is temporary. Most families see the intensity begin to drop within one to two weeks of consistent limit-setting. If you give in during the burst, OCD learns that escalation works, and next time it will push even harder. You don't have to be perfect — just aim for more consistent than not.",
    whenToGetHelp: [
      "The dressing ritual consistently takes more than 30 minutes and is getting worse despite your efforts",
      "Your child is missing school or important activities because they can't get dressed",
      "They're developing skin irritation or sores from repeatedly pulling clothes on and off",
      "The distress has spread to other areas — they now need other things to feel 'right' too (food, homework, walking through doors)",
      "Your child is expressing hopelessness, saying things like 'I'll never be normal' or 'I hate my brain'"
    ],
        ageSpecificExamples: [
      {
        ageRange: "4-7",
        description:
          "Your young child changes clothes three, four, five times each morning, crying that nothing feels 'right.' They may say shirts are 'too scratchy,' pants are 'too tight,' or socks feel 'bumpy' -- but even after switching to alternatives, the discomfort remains. Getting dressed takes 30-40 minutes, making you late for school and work. They may strip off clothing during the day if the 'wrong' feeling suddenly returns.",
        parentScript:
          "I know your shirt doesn't feel right, and the Worry Monster is saying you need to change again. But we're going to wear this shirt today. Sometimes clothes feel a little funny and then our body stops noticing. Let's put the shirt on and play with your toys -- I bet in a few minutes you won't even think about it.",
      },
      {
        ageRange: "8-12",
        description:
          "Your child has a specific set of 'acceptable' clothes that shrinks over time. They change outfits multiple times, leaving rejected clothing piled on the floor. Morning battles about clothing make everyone late and frustrated. They may refuse to wear school uniforms because they can't find one that feels right. Clothing shopping is a nightmare because they reject everything in the store. They feel frustrated with themselves but can't explain what's 'wrong' with each outfit.",
        parentScript:
          "I know getting dressed feels really hard right now. OCD is being picky about how clothes feel, and it's never satisfied. Here's what we're going to try: you pick one outfit and that's it for the day. If OCD says it's wrong, we're going to say 'too bad, this is what we're wearing.' The 'wrong' feeling will fade. I promise. And if it helps, I'll pick an outfit I'm not thrilled about too, and we'll be a little uncomfortable together.",
      },
      {
        ageRange: "13-18",
        description:
          "Your teen changes multiple times before school, before going out with friends, and before any event where they'll be seen. They're not worried about fashion -- they're fighting an OCD-driven sense that something is 'off' that they can't resolve. They may be late to school regularly, avoid social events because they can't settle on an outfit, and spend excessive money on new clothes hoping to find the 'right' thing. The floor of their room is covered in rejected outfits.",
        parentScript:
          "I'm not going to tell you which outfit looks best because this isn't about how you look -- it's about OCD telling you nothing feels right. The truth is, you look great in all of those. What if you set a five-minute timer, chose something, and walked out the door? The discomfort is going to be there no matter how many times you change. Let's practice walking through it.",
      },
    ],
    relatedSituationSlugs: ["only-safe-clothes", "dressing-touching-adjusting", "adjusts-socks-shoes-even"]
  },

  {
    slug: "only-safe-clothes",
    title: "They can only wear certain 'safe' clothes and refuse everything else",
    categorySlug: "clothing-dressing",
    ageRanges: ["4-7", "8-12", "13-18"],
    severity: "moderate",
    setup: "Your child has a tiny rotation of \"acceptable\" clothing — maybe two or three shirts and one pair of pants — and absolutely refuses to wear anything else. You're doing laundry constantly to keep these items available, and you dread the day one of them wears out or gets lost. Buying new clothes feels impossible because everything gets rejected.",
    ocdMechanics: "Your child's attachment to specific clothing isn't about preference or fashion — it's about anxiety reduction. At some point, OCD tagged certain items as \"safe\" and everything else as potentially threatening. The safe clothes have become like a security blanket, except OCD is the one deciding what qualifies. Your child genuinely believes, on a gut level, that wearing other clothes will lead to something bad — intense discomfort, contamination, a terrible feeling they can't shake, or some vague catastrophe.\n\nThe OCD cycle here is sneaky because the compulsion (wearing only safe clothes) is also an avoidance behavior. Your child never has to face the anxiety of wearing \"unsafe\" clothes because they simply don't wear them. Without ever testing the fear, they never learn that the anxiety would pass on its own. Each day they successfully avoid other clothes, OCD's rule gets reinforced and feels more true.\n\nAccommodation plays a major role in this pattern. When the family adjusts — doing extra laundry, buying multiples of the same item, not pushing back on the restriction — OCD's world gets more comfortable. The list of safe items often shrinks over time rather than growing, because OCD keeps finding new reasons to reject things. What starts as \"I can only wear soft fabrics\" can become \"I can only wear this exact shirt.\"",
    whatNotToDo: [
      {
        mistake: "Buying five identical versions of the 'safe' shirt",
        explanation: "This feels like a practical solution, and it comes from a loving place — you just want your child to feel okay. But stocking up on safe items tells OCD that its rules are valid and must be obeyed. You're building infrastructure around the anxiety instead of addressing it."
      },
      {
        mistake: "Throwing away the safe clothes to force the issue",
        explanation: "Going cold turkey by removing safe items without preparation can be genuinely traumatic for your child. Effective exposure is gradual, planned, and done with your child's understanding. Forcing the issue without a framework can damage trust and increase anxiety dramatically."
      },
      {
        mistake: "Arguing about whether the other clothes are 'fine'",
        explanation: "Logic doesn't work on OCD. Your child knows intellectually that a blue shirt won't hurt them. The problem isn't rational — it's a misfiring anxiety alarm. Debating the safety of clothing puts you in an argument you can't win because you're arguing with OCD, not with your child."
      },
      {
        mistake: "Allowing them to skip events because they don't have 'safe' clothes clean",
        explanation: "When OCD's clothing rules start dictating whether your family goes to school, birthday parties, or the grocery store, OCD has become the decision-maker in your household. Each avoided event makes the next one harder to attend."
      }
    ],
    strategies: [
      {
        name: "The Clothing Ladder",
        difficulty: "starter",
        steps: [
          "With your child, make a list of all the clothes they currently won't wear, ranked from least scary to most scary (1–10).",
          "Pick the item rated lowest — maybe a 2 or 3 — as the first target.",
          "Start with brief, low-pressure exposures: wearing the item around the house for 15 minutes while doing something fun.",
          "Gradually increase duration and context: wearing it to a quick errand, then to a friend's house, then to school.",
          "Once that item feels manageable (anxiety drops to a 1 or 2), move to the next item on the ladder."
        ],
        exampleScript: "We're going to build a bravery ladder for clothes. At the bottom are things that are just a little uncomfortable, and at the top are the hardest ones. We're only going to start at the bottom — nobody's asking you to jump to the top. Which shirt do you think would be the easiest brave challenge to try first?"
      },
      {
        name: "Safe Clothes Rotation Expansion",
        difficulty: "intermediate",
        steps: [
          "Identify one new clothing item that's similar to a safe item (same color, same brand, similar fabric).",
          "Introduce it casually — leave it in their drawer without making a big deal about it.",
          "Suggest wearing it for a short, defined period: 'How about wearing this just for breakfast?'",
          "If they tolerate it, celebrate the win without overdoing it: 'You did it. How was that?'",
          "Gradually reduce reliance on safe items by alternating: safe item one day, new item the next."
        ],
        exampleScript: "I found this shirt that's actually really similar to your favorite one — same kind of fabric, similar color. OCD might say it's not the same, and that's true — it's not exactly the same. But I wonder what would happen if you wore it just while we eat breakfast. Twenty minutes. Then you can switch if you want. What do you think?"
      },
      {
        name: "The Safe Clothes Aren't Available Challenge",
        difficulty: "advanced",
        steps: [
          "Plan this with your child in advance — no surprises. Choose a day when the safe clothes will be 'in the wash.'",
          "Together, pick what they'll wear instead. Let them choose from the non-safe options.",
          "Predict together: 'What will OCD say? How anxious will you feel at first? What do you think will happen by lunchtime?'",
          "Follow through with the full day. Check in at planned intervals to rate anxiety.",
          "At the end of the day, review: 'Your prediction was an 8 anxiety. What was it actually? Did the bad thing OCD predicted happen?'"
        ],
        exampleScript: "Tomorrow we're going to try one of our biggest brave challenges yet. Your favorite shirt is going to be in the wash, and you're going to pick something else to wear for the whole day. I know that sounds really hard. Let's plan it out right now — what would you be willing to wear? What does OCD say will happen? Let's write down OCD's prediction so we can check it tomorrow night."
      }
    ],
    whenItGetsTough: "The first time your child wears a non-safe item for an extended period, they may experience significant anxiety — clinging, crying, asking repeatedly if they can change, or insisting that something bad is about to happen. This is the extinction burst, and it's OCD throwing everything it has at maintaining its rules. Your job in this moment is to be a calm, steady presence. You don't need to fix the feeling. You don't need to make the anxiety go away. You just need to be there and gently hold the boundary. Say things like \"I'm right here. The feeling is big right now, but it will come down.\" Most children report that the anxiety peaks and begins to subside within 20–45 minutes. Each successful exposure makes the next one easier — but the first few are genuinely the hardest for both of you.",
    whenToGetHelp: [
      "The number of 'safe' items is shrinking rather than growing, despite your efforts",
      "Your child has physical reactions to non-safe clothing — gagging, skin picking, or panic attacks",
      "Getting dressed has become a daily source of conflict that's affecting your relationship with your child",
      "They're missing school regularly because of clothing-related distress",
      "Your child has started applying 'safe' and 'unsafe' rules to other categories beyond clothing (foods, rooms, people)"
    ],
        ageSpecificExamples: [
      {
        ageRange: "4-7",
        description:
          "Your young child will only wear one or two specific outfits, melting down if those items are in the laundry. They may insist on the same shirt for a week straight, refuse to wear anything for special occasions, and scream if you try to put them in something new. The safe clothes may be soft, tagless, or a certain color. You're doing laundry every night to have the 'safe' outfit ready for morning.",
        parentScript:
          "I know you love your blue shirt, and it's in the washing machine right now getting all clean for tomorrow. Today we're going to try the green shirt. The Worry Monster might say it's not right, but your body is going to be just fine in the green shirt. I'll be with you the whole time.",
      },
      {
        ageRange: "8-12",
        description:
          "Your child has a small rotation of 'safe' clothing and refuses everything else. The safe clothes may be worn out, stained, or seasonally inappropriate, but they won't budge. They refuse hand-me-downs, new clothes for school, and anything purchased without their direct approval. School events requiring specific attire (picture day, field trips, performances) cause intense anxiety. They may wear the same outfit to the point of social commenting from classmates.",
        parentScript:
          "I understand these are the clothes that feel safe, and I know trying new ones feels really scary. But OCD is making your wardrobe smaller and smaller, and pretty soon you won't have any options left. What if we went shopping and you picked one new item -- just one -- and tried wearing it for one hour at home? We don't even have to leave the house. We're just testing.",
      },
      {
        ageRange: "13-18",
        description:
          "Your teen wears the same few items in rotation, avoids situations that require specific clothing (dances, sports, job interviews), and panics if a 'safe' item is damaged or lost. They may have missed opportunities because they couldn't find acceptable clothing. They're embarrassed about wearing the same things and try to play it off as a style choice, but you can see the anxiety underlying the rigidity. Growing out of safe clothes is a crisis because finding replacements is agonizing.",
        parentScript:
          "I know these are the clothes that feel okay, and I'm not going to throw them out. But I also notice that OCD is limiting your options more and more. What if we ordered something online, low stakes, and you tried it on in your room with no pressure to keep it? If it works, great. If not, we send it back. I just want to help you have more choices, not fewer.",
      },
    ],
    relatedSituationSlugs: ["changes-outfits-repeatedly", "changing-clothes-contamination", "morning-routine-hostage"]
  },

  {
    slug: "dressing-touching-adjusting",
    title: "Getting dressed takes 30+ minutes because of touching and adjusting rituals",
    categorySlug: "clothing-dressing",
    ageRanges: ["4-7", "8-12", "13-18"],
    severity: "moderate",
    setup: "Your child pulls their shirt on, then takes it off and puts it on again. They adjust their socks over and over, tug at their waistband, retie their shoes multiple times, or touch each piece of clothing in a specific sequence. What used to be a simple task now takes half an hour or more, and they become increasingly upset if interrupted or rushed.",
    ocdMechanics: "Touching and adjusting rituals during dressing are driven by the OCD need for things to feel \"complete\" or \"even\" or \"just right.\" Your child isn't fussing with their clothes because they're uncomfortable in the ordinary sense — they're performing compulsions to neutralize an internal feeling of wrongness. The ritual might involve putting clothing on in a specific order, touching fabric a certain number of times, or adjusting until both sides of the body feel symmetrical.\n\nThe brain's error detection system is misfiring. Normally, when you put on a shirt, your brain registers \"shirt is on\" and moves on. In OCD, the brain keeps sending the signal that something isn't finished — like a door alarm that won't stop beeping even though the door is closed. Your child repeats the action trying to get the \"complete\" signal, but OCD keeps raising the bar.\n\nThese rituals are self-reinforcing. Each time your child adjusts until it feels right, they teach their brain that the adjusting was necessary. The relief they feel after completing the ritual is real, but it's temporary — and it guarantees the ritual will be needed again tomorrow. Over time, the rituals often become more elaborate and time-consuming as OCD demands more precision.",
    whatNotToDo: [
      {
        mistake: "Helping them adjust their clothes to 'get it right' faster",
        explanation: "When you step in to help straighten a collar or re-tie a shoe to OCD's specifications, you become part of the ritual. Your help may speed things up today but reinforces the idea that the adjusting is necessary and that the 'right' feeling must be achieved."
      },
      {
        mistake: "Setting a timer and punishing them if they're not done",
        explanation: "Timers can be useful tools in ERP, but using them as a threat adds punishment to an already distressing situation. Your child isn't choosing to be slow — they're trapped in a loop. Punitive consequences increase shame without giving them tools to manage the compulsion."
      },
      {
        mistake: "Telling them 'it looks fine, stop fussing'",
        explanation: "From the outside, it absolutely looks like fussing. But from the inside, your child is experiencing a powerful neurological signal that something is incomplete. Dismissing their experience, even with good intentions, can make them feel misunderstood and alone in their struggle."
      },
      {
        mistake: "Letting them take as long as they need every morning to avoid conflict",
        explanation: "Unlimited time for rituals is unlimited accommodation. It removes any motivation for the OCD cycle to change and often leads to the rituals expanding to fill whatever time is available. Compassionate limits are part of recovery."
      }
    ],
    strategies: [
      {
        name: "The Good-Enough Get Dressed",
        difficulty: "starter",
        steps: [
          "Explain the concept: 'We're going to practice getting dressed the good-enough way. Not the OCD-perfect way — just good enough.'",
          "Define good enough together: each item goes on once. One adjustment per item is allowed. Then we move on.",
          "Stand nearby offering calm encouragement, not helping with adjustments.",
          "When they reach for a second adjustment, gently redirect: 'That one's done. What goes on next?'",
          "Celebrate finishing, not perfection: 'You got dressed the good-enough way! How was that?'"
        ],
        exampleScript: "We're going to try something new this morning. Instead of getting dressed the OCD way — where everything has to feel perfect — we're doing the good-enough way. Each piece of clothing goes on once, one little adjustment if you need it, and then we move to the next thing. OCD will say it's not right. That's okay. We're practicing being okay with 'not right.'"
      },
      {
        name: "Ritual Reduction by Numbers",
        difficulty: "intermediate",
        steps: [
          "Count how many adjustments your child typically makes for each clothing item. Don't judge — just observe and note the number.",
          "Set a target: reduce by one or two adjustments per item this week.",
          "Create a simple chart: 'Shirt: usually 8 adjustments → this week, aim for 6.'",
          "Each week, reduce the target by one or two more, working toward one or zero adjustments per item.",
          "Track progress together on the chart — let them see the numbers going down."
        ],
        exampleScript: "I noticed that when you put on your socks, you adjust them about ten times. That's OCD asking for extra checking. This week, let's try getting it down to eight times. I know that's only two less, but that's two times you're telling OCD 'no.' Next week we'll try six. We're going to shrink OCD's power a little bit at a time."
      },
      {
        name: "Reverse the Ritual",
        difficulty: "advanced",
        steps: [
          "With your child's agreement, deliberately do part of the dressing routine 'wrong' — put the shirt on backward first, then fix it. Put the left sock on first if they always start with the right.",
          "The goal is to disrupt the rigid sequence and prove that the 'wrong' way doesn't lead to a bad outcome.",
          "Start with the least distressing disruption and work up.",
          "After the disrupted routine, go about the day normally. Note what OCD predicted versus what actually happened.",
          "Over time, vary the routine regularly so that no fixed sequence takes hold."
        ],
        exampleScript: "Today we're going to scramble the getting-dressed routine on purpose. Instead of your usual order, we're going to start with pants first, then shirt, then socks — or whatever order you pick. OCD has a very specific sequence it likes, and we're going to mess with it. It's going to feel weird. That's the point. Weird isn't dangerous — it's just unfamiliar."
      }
    ],
    whenItGetsTough: "When you start limiting adjustments or disrupting the ritual sequence, your child may initially become more distressed, not less. They might cry, freeze, or insist they absolutely cannot leave the house until the ritual is complete. This escalation — the extinction burst — happens because OCD's reliable coping mechanism is being challenged, and the brain is sounding every alarm it has. Your child isn't being defiant; they're genuinely scared. Stay calm, stay close, and hold the limit gently. You might say, \"I know this is so hard. I'm right here. We're going to get through this morning together.\" The first three to five days are typically the hardest. After that, most families notice the intensity starting to decrease. Consistency is more important than perfection — if you hold the limit most mornings, progress will come.",
    whenToGetHelp: [
      "The dressing rituals are taking longer over time despite your intervention efforts",
      "Your child is developing new rituals in addition to the dressing ones (touching doorframes, repeating phrases while dressing)",
      "They're experiencing physical pain — raw skin from adjusting, sore fingers from retying shoes",
      "The morning distress is so intense that your child is regularly late for or absent from school",
      "You notice your child is becoming withdrawn, anxious about other daily activities, or expressing feelings of being 'broken'"
    ],
        ageSpecificExamples: [
      {
        ageRange: "4-7",
        description:
          "Your young child pulls at their clothes, adjusts seams, retucks shirts, and fusses with waistbands endlessly. They touch and re-touch fabric, straighten sleeves, and smooth down collars over and over. Getting dressed takes 30+ minutes not because they can't pick an outfit, but because they can't stop adjusting the one they're wearing. They arrive at preschool already distressed and spend the first hour tugging at their clothes instead of participating.",
        parentScript:
          "I can see you're adjusting your shirt again and again. The Worry Monster wants it to feel just perfect, but clothes don't need to feel perfect -- they just need to be on your body. We're going to stop adjusting and go play. The funny feeling might last a few minutes, and then your body will forget about it. I promise.",
      },
      {
        ageRange: "8-12",
        description:
          "Your child's dressing ritual involves specific sequences of adjustments: tuck the shirt, adjust the collar, pull the sleeves, straighten the waistband, check in the mirror, and repeat. If any step doesn't feel right, the whole sequence restarts. They may change clothes just to restart the dressing ritual. At school, they excuse themselves to the bathroom to re-adjust their clothing. Teachers have noticed the frequent bathroom trips. They're missing class time and falling behind.",
        parentScript:
          "Getting dressed has become an OCD ritual, and I can see it's exhausting you. Let's try something new: set a timer for 3 minutes. You get dressed in that time -- one pass, no adjustments, no mirror check. I know it's going to feel 'wrong.' That 'wrong' feeling is OCD, not your clothes. Every time you sit with that feeling and it fades, you're getting stronger.",
      },
      {
        ageRange: "13-18",
        description:
          "Your teen's dressing ritual has become private and time-consuming. They lock the bathroom door and spend 30-45 minutes adjusting clothing, often emerging looking exactly the same as when they went in. They may be late for school every day, cancel plans because they can't get dressed in time, and become irritable when rushed. The adjusting may continue throughout the day in subtle ways -- tugging, smoothing, straightening -- that take mental energy away from everything else.",
        parentScript:
          "I'm not going to rush you because I know that makes it worse. But I do want to acknowledge that the dressing routine is taking a big chunk of your day and your energy. What would it look like to cut the routine in half? Not eliminate it -- just reduce it. You're the expert on what feels possible. I'm just here to support whatever step feels right.",
      },
    ],
    relatedSituationSlugs: ["adjusts-socks-shoes-even", "changes-outfits-repeatedly", "morning-routine-hostage"]
  },

  // ============================================
  // CATEGORY 2: Family Routines
  // ============================================

  {
    slug: "morning-routine-hostage",
    title: "Our morning routine is held hostage by rigid OCD sequences",
    categorySlug: "family-routines",
    ageRanges: ["4-7", "8-12", "13-18"],
    severity: "moderate",
    setup: "Every morning follows an exact script that your child controls — specific order of brushing teeth, eating breakfast, getting dressed, packing their bag. If anything happens out of order, or if someone accidentally interrupts the sequence, the whole routine restarts from the beginning. The rest of the family walks on eggshells trying not to \"break\" the routine.",
    ocdMechanics: "Rigid morning sequences are OCD's way of creating a sense of control and safety in a world that feels unpredictable. Your child's brain has linked a specific order of events with \"things will be okay today.\" Deviating from the sequence triggers intense anxiety — a feeling that something terrible will happen if the routine isn't followed perfectly. The specifics of the order aren't logical; they're driven by OCD's internal rules.\n\nThe restart behavior is particularly telling. When the sequence is broken and your child insists on starting over, they're performing a compulsion — undoing the \"contaminated\" or \"wrong\" version and replacing it with the \"correct\" one. Each successful restart brings temporary relief, which powerfully reinforces the need for the sequence. OCD essentially teaches the brain: \"See? You restarted and everything was fine. You must always restart when the order is wrong.\"\n\nFamily accommodation is a critical piece of this pattern. When everyone in the house adjusts their behavior to protect the routine — being extra quiet, avoiding the bathroom at certain times, not speaking during certain steps — OCD has effectively recruited the entire family into its service. The accommodation feels like keeping the peace, but it's actually building a more elaborate prison.",
    whatNotToDo: [
      {
        mistake: "Reorganizing the entire family's morning around your child's sequence",
        explanation: "When siblings eat breakfast at a different time, parents avoid certain rooms, or everyone follows a script to avoid triggering a restart — you've built the family's life around OCD's demands. This level of accommodation makes the OCD stronger and creates resentment in other family members who deserve their own normal morning."
      },
      {
        mistake: "Allowing unlimited restarts to avoid a meltdown",
        explanation: "Each restart feels like it prevents a crisis, but it actually guarantees the next one. Your child learns that the restart is essential, and OCD raises the stakes higher each time. The meltdown you're avoiding today becomes worse tomorrow because the pattern is more entrenched."
      },
      {
        mistake: "Sneaking in disruptions hoping they won't notice",
        explanation: "Trying to subtly change the routine without your child's awareness can backfire. When they discover the change, trust is damaged, anxiety spikes, and OCD may respond by making the rules even more rigid. Effective changes are transparent and collaborative."
      },
      {
        mistake: "Reasoning about why the order doesn't matter",
        explanation: "You know that brushing teeth before or after breakfast makes no real difference. Your child knows that too — intellectually. But OCD isn't operating on logic. Arguing about whether the order matters puts you in a debate with OCD, which is endlessly creative at generating reasons why it does."
      }
    ],
    strategies: [
      {
        name: "The No-Restart Rule",
        difficulty: "starter",
        steps: [
          "Have a calm conversation (not during the morning rush) about the new rule: 'From now on, we don't restart. If the order gets mixed up, we keep going from where we are.'",
          "Acknowledge that this will be hard: 'OCD is going to be really unhappy about this rule. That's how we know we're doing the right thing.'",
          "When a disruption happens and your child wants to restart, stay calm and firm: 'No restarts. We keep going forward.'",
          "Offer empathy without giving in: 'I know it feels wrong. That feeling will pass. What's the next step from here?'",
          "After the morning, acknowledge their courage — regardless of how messy it was."
        ],
        exampleScript: "We have a new morning rule, and I want to tell you about it now while we're relaxed, not in the middle of the morning. The rule is: no restarts. If something happens out of order — the dog barks, your brother walks in, whatever — we keep going from where we are. OCD is going to say the whole morning is ruined. It's not. The morning keeps going. I'll be right there with you."
      },
      {
        name: "Planned Sequence Shuffling",
        difficulty: "intermediate",
        steps: [
          "Create a set of cards with each morning task written on them (brush teeth, get dressed, eat breakfast, pack bag, etc.).",
          "Each night, your child shuffles the cards and draws the order for tomorrow's routine.",
          "Whatever order comes up is tomorrow's order — no swapping, no redrawing.",
          "Frame it as a game against OCD: 'OCD wants one rigid order. We're proving that any order works.'",
          "Track how many different orders you've completed successfully — aim for a streak."
        ],
        exampleScript: "We're going to play a new game with OCD. Each night, you shuffle these cards and whatever order comes up is how we do the morning. OCD only knows one order. We're going to prove we can do them all. Let's shuffle — oh look, breakfast first and then getting dressed! OCD won't like that. But we can handle it."
      },
      {
        name: "Deliberate Interruption Exposures",
        difficulty: "advanced",
        steps: [
          "Plan specific, agreed-upon interruptions to the morning routine. Your child knows they're coming but not exactly when.",
          "Start small: a brief comment during a usually-silent step, or walking through the room during a specific task.",
          "Your child's job is to continue the routine without restarting, despite the interruption.",
          "Rate anxiety before and after: 'What did OCD predict would happen? What actually happened?'",
          "Gradually increase the intensity of interruptions as your child builds confidence."
        ],
        exampleScript: "This week, we're going to practice interruptions on purpose. At some point during the morning routine, something will happen that breaks the sequence — maybe I'll say something, or your sister will walk through. Your job is to keep going. Don't restart. Just keep going from where you are. Let's predict right now: what will OCD say when that happens? And what do you think will really happen?"
      }
    ],
    whenItGetsTough: "Removing restarts and disrupting rigid sequences will almost certainly produce a period of increased distress. Your child may cry, scream, refuse to continue getting ready, or try to restart secretly. They may say things like \"you're ruining everything\" or \"the whole day is going to be terrible now.\" This is the extinction burst — OCD's alarm system going into overdrive because its safety mechanism is being removed. This phase is exhausting for everyone, and it's okay to feel worn down by it. Hold the limit as consistently as you can, knowing that inconsistency extends the extinction burst. Most families see significant improvement within one to three weeks. The mornings won't become perfect overnight, but the intensity of the reactions will decrease noticeably. On particularly hard mornings, give yourself grace too — one slip doesn't erase all your progress.",
    whenToGetHelp: [
      "The morning routine is consistently taking over an hour and your child is frequently late for school",
      "Restarts have become violent — your child is hitting, throwing things, or hurting themselves when the sequence is disrupted",
      "Other family members are showing signs of stress, anxiety, or resentment related to the morning routine",
      "The rigid sequencing has spread to other times of day — after-school routines, bedtime, or weekend activities",
      "Your child is waking up extremely early to give themselves more time for rituals, or losing sleep from anxiety about the morning"
    ],
        ageSpecificExamples: [
      {
        ageRange: "4-7",
        description:
          "Your young child's morning routine must follow an exact sequence: specific order for getting out of bed, using the bathroom, brushing teeth, getting dressed, eating breakfast. If any step is out of order or feels 'wrong,' the entire routine restarts from the beginning. A disruption at breakfast means going back to bed and starting over. The family is late to school and work daily, and siblings are growing resentful of the chaos.",
        parentScript:
          "I know the Worry Monster wants us to start the morning over, but we're going to keep going forward. We already brushed teeth, so that's done -- we don't need to do it again. The Worry Monster is going to be grumpy, and that's okay. Sometimes we just let the Worry Monster be grumpy while we eat our breakfast.",
      },
      {
        ageRange: "8-12",
        description:
          "Your child has an elaborate morning checklist that takes 90+ minutes. Each step must be performed in the correct order, with the correct number of repetitions. They may set their alarm an hour early to build in time for the routine, and still be late. If a sibling disrupts the sequence or the routine is interrupted by a phone call, they insist on restarting. You've tried creating alternative routines, but OCD simply colonizes any new structure with its own rules.",
        parentScript:
          "Mornings have gotten really long because OCD keeps adding steps. Let's make a list of OCD's morning rules and a list of what actually needs to happen before school. I think you'll see that OCD's list is a lot longer than the real list. Which OCD rule could we drop first? You pick, and we'll practice it tomorrow. I'll be there to help you through the discomfort.",
      },
      {
        ageRange: "13-18",
        description:
          "Your teen's morning ritual is rigid and secretive. They may shower, dress, and prepare in a specific order, becoming explosive if interrupted. They're chronically late to school, have lost jobs because they couldn't get out the door on time, and avoid sleepovers or overnight trips because they can't replicate the routine. Morning is the most stressful time of day for the entire household, and the tension follows everyone out the door.",
        parentScript:
          "I know mornings are hard, and I know the routine feels non-negotiable right now. But here's what I see: the routine is getting longer, not shorter, and it's costing you things you care about. I'm not going to police your morning, but I am going to leave for work at 7:30 whether or not you're ready. That's a household boundary, not a punishment. Let's talk about what support you need to make mornings workable.",
      },
    ],
    relatedSituationSlugs: ["specific-order-restarts", "leaving-house-forever", "dressing-touching-adjusting"]
  },

  {
    slug: "leaving-house-forever",
    title: "Leaving the house takes forever because they need to check and re-check everything",
    categorySlug: "family-routines",
    ageRanges: ["8-12", "13-18", "18+"],
    severity: "moderate",
    setup: "When it's time to leave the house, your child needs to check that doors are locked, windows are closed, appliances are off, lights are out, or that certain items are in their bag — again and again. They may walk back inside multiple times after you're already in the car. What should be a simple departure becomes a 15-to-30-minute ordeal that makes the whole family consistently late.",
    ocdMechanics: "Checking before leaving the house is one of the most common OCD compulsions, and it's rooted in an inflated sense of responsibility. Your child's brain is telling them that if they don't check thoroughly enough, something catastrophic will happen — a fire, a break-in, a flood — and it will be their fault. The thought isn't \"I should check the stove.\" The thought is \"If I don't check the stove and the house burns down, I am responsible for my family's safety.\"\n\nThe problem with checking is that it doesn't satisfy OCD. Your child checks the lock, feels brief relief, and then OCD whispers: \"But did you really check it? Are you sure? Maybe you should check one more time just to be certain.\" Each check actually feeds the doubt rather than resolving it. The memory of checking becomes unreliable — not because your child's memory is poor, but because OCD specifically targets the confidence in their own perception. They checked the stove, but OCD makes the memory feel uncertain.\n\nOver time, the checking often escalates: more items to check, more repetitions per item, specific ways the checking must be done (touching the lock three times, looking at the stove from a specific angle). The ritual grows to accommodate OCD's expanding demands, and leaving the house becomes an increasingly complex and time-consuming production.",
    whatNotToDo: [
      {
        mistake: "Checking things for them or with them to speed up the process",
        explanation: "When you check alongside your child or report back that 'yes, the stove is off,' you become a human checking tool. Your reassurance works for about thirty seconds before OCD needs another round. You've also taught your child that the checking is necessary — the only question is who does it."
      },
      {
        mistake: "Taking photos of locked doors and off switches for them to review",
        explanation: "This one is surprisingly common and feels very practical. But photos become another compulsion — your child will start needing photos of every checked item, reviewing them multiple times, and eventually doubting whether the photo is current. Technology-assisted compulsions escalate just like any other."
      },
      {
        mistake: "Yelling 'we're going to be late!' from the car",
        explanation: "Time pressure increases anxiety, and increased anxiety increases the need to check. Yelling from the car adds stress without giving your child any tools to manage the compulsion. They already know they're making everyone late, and they feel terrible about it."
      },
      {
        mistake: "Letting them go back inside 'one more time'",
        explanation: "There is no 'one more time' with checking OCD. One more becomes two more becomes five more. Each time you allow a return trip, you validate OCD's claim that the previous check wasn't good enough."
      }
    ],
    strategies: [
      {
        name: "The One-Check Rule",
        difficulty: "starter",
        steps: [
          "Establish the rule during a calm moment: 'From now on, everything gets checked once. One look, one touch, and we move on.'",
          "Create a short checklist of the items your child feels they need to check — keep it to five or fewer.",
          "Walk through the checklist together: one check per item, out loud. 'Stove: checked. Lock: checked. Bag: checked.'",
          "Once the list is done, leave immediately. No going back.",
          "When OCD says 'but are you sure about the stove?' — respond together: 'We checked it. OCD wants more checks. We're done.'"
        ],
        exampleScript: "Let's make a leaving-the-house checklist together. You tell me the five things you feel like you need to check, and we'll check each one exactly once. Out loud, so your brain hears it: 'Stove is off — checked.' Then we walk out the door. OCD is going to push for more checks. That's OCD's job. Our job is to leave after one round."
      },
      {
        name: "Leaving Without Checking",
        difficulty: "intermediate",
        steps: [
          "Start by eliminating one item from the checking list each week.",
          "Choose the least anxiety-provoking item first — maybe checking that a light is off.",
          "On departure, skip that item entirely. Walk past it without looking.",
          "In the car, predict with your child: 'OCD says the light will cause a fire. What do we think will actually happen?'",
          "When you arrive home and everything is fine, note it: 'We didn't check the light and nothing happened. What does that tell us about OCD's predictions?'"
        ],
        exampleScript: "This week we're going to leave without checking the bathroom light. I know OCD will have a lot to say about that. Here's what we're going to do: walk right past the bathroom, out the door, into the car. Then we'll sit with the uncomfortable feeling together. When we come home tonight and the house is fine, we'll know OCD was bluffing."
      },
      {
        name: "The Uncertainty Challenge",
        difficulty: "advanced",
        steps: [
          "Have your child practice saying out loud: 'Maybe the stove is on. Maybe the door is unlocked. I'm leaving anyway.'",
          "This feels counterintuitive — you're not reassuring them that everything is fine. You're helping them tolerate uncertainty.",
          "Leave the house without checking anything. Not one item.",
          "In the car, sit with the anxiety. Rate it every five minutes. Watch it rise and then fall on its own.",
          "Repeat daily. Track how the peak anxiety level decreases over consecutive days."
        ],
        exampleScript: "Today we're going to do something that sounds scary but is actually really powerful. We're going to leave without checking anything. And instead of me telling you everything is fine, you're going to say: 'Maybe it's fine, maybe it's not. I'm leaving anyway.' That's called tolerating uncertainty, and it's OCD's kryptonite. I'll say it with you. Ready?"
      }
    ],
    whenItGetsTough: "The first time your child leaves the house without their full checking ritual, expect significant anxiety — potentially the highest they've felt around this issue. They may beg to go back, insist they \"just have a feeling\" that something is wrong, or become very quiet and tense. Some children try to check from the car window or mentally review their checks over and over (a mental compulsion). This is all expected. The anxiety typically peaks within the first 10–15 minutes after leaving and then begins to subside. By the time you reach your destination, it's often much more manageable. The key is getting through that initial spike repeatedly. Each successful departure without checking teaches the brain a powerful lesson: nothing bad happened. That lesson gets louder each time, while OCD's alarm gets quieter. Expect the hardest days to be the first three to five. After two weeks of consistency, most families report that leaving has become dramatically easier.",
    whenToGetHelp: [
      "Your child needs to check more than five items or makes more than three rounds of checking despite your intervention",
      "They've started adding new items to check that weren't previously on the list",
      "The checking has expanded beyond leaving the house — they check at school, at friends' houses, or before bed",
      "Your child is experiencing intrusive images of catastrophic events (house fires, break-ins) that feel vivid and real",
      "They're asking you to check things or confirm safety excessively throughout the day, not just at departure time"
    ],
        ageSpecificExamples: [
      {
        ageRange: "8-12",
        description:
          "Your child can't leave the house without a lengthy checking ritual: are the lights off, are the faucets shut, is the stove off, are the windows closed, is the door locked? They may circle back inside multiple times, check the same things in a specific order, and need you to verify their checks. The family misses the beginning of movies, arrives late to school, and can't do spontaneous outings because leaving requires 20-30 minutes of preparation.",
        parentScript:
          "I know OCD wants you to check everything before we leave. We're going to check the door lock once, together, and then we're going. I'm not going to check anything else. I know the worried feeling is going to come, and I also know it's going to fade once we're in the car and doing something fun. You've done this before. Ready?",
      },
      {
        ageRange: "13-18",
        description:
          "Your teen can't leave their room, the house, or any space without extensive checking. They may photograph the stove, the locks, and the windows to review later. They circle the house multiple times, checking and rechecking. They're late to school, late meeting friends, and have started canceling plans because the leaving ritual is too exhausting. They may call home from school to ask if everything is okay, unable to focus until they receive confirmation.",
        parentScript:
          "I see you going back to check the door again. I checked it once, and that's enough. I'm going to the car now, and I'd love for you to come with me. The anxiety about whether the door is locked is going to ride in the car with us for a few minutes, and then it's going to get bored and quiet down. That's how this works. Trust the process.",
      },
      {
        ageRange: "18+",
        description:
          "Your adult child has a leaving-the-house ritual that takes 30-60 minutes. They may circle their apartment checking every appliance, every outlet, every lock. They've been late to work, missed flights, and cancelled plans because of the ritual. They may call you after leaving to ask if they left the stove on during a visit. Roommates are bewildered by the checking and re-checking. They've started working from home or avoiding going out to escape the exit ritual.",
        parentScript:
          "I'm not going to confirm that the stove was off when you left. I know that's hard. Here's what I believe: you are a capable adult who can check your home once before leaving, and that one check is enough. The doubt you feel after leaving is OCD, not reality. What tools has your therapist given you for handling the post-leaving anxiety? Let's talk about those instead.",
      },
    ],
    relatedSituationSlugs: ["morning-routine-hostage", "checking-door-locks", "doorways-certain-number"]
  },

  {
    slug: "specific-order-restarts",
    title: "They need to do things in a specific order or the whole routine restarts",
    categorySlug: "family-routines",
    ageRanges: ["4-7", "8-12", "13-18"],
    severity: "moderate",
    setup: "Your child has a fixed sequence for daily activities — brushing teeth, getting into bed, saying goodnight, or doing homework. If any step happens out of order or is done \"wrong,\" they insist on going back to the very beginning and starting the entire sequence over. Some nights, bedtime takes over an hour because of multiple restarts.",
    ocdMechanics: "Sequence-dependent rituals are OCD's version of a superstitious belief system, but with neurological teeth. Your child's brain has created an arbitrary set of rules about the \"correct\" order for activities, and then assigned enormous importance to following that order perfectly. The underlying obsession is typically a vague sense that something bad will happen if the sequence is broken, or an intense \"not right\" feeling that can only be resolved by starting over.\n\nThe restart compulsion is especially powerful because it creates a moving target. Each restart is supposed to produce the \"perfect\" run-through, but OCD often finds a flaw partway through the new attempt, triggering yet another restart. What your child is really doing is trying to complete an impossible task: performing a sequence so perfectly that OCD has no objections. Since OCD always has objections, the restarts can go on indefinitely.\n\nThis pattern is particularly draining for families because it often involves other people. If the goodnight routine requires a parent to say specific words in a specific order, and the parent stumbles or paraphrases, the child may insist the entire routine starts over — including the parent's parts. OCD effectively scripts the entire family, and any deviation from the script triggers distress and resets.",
    whatNotToDo: [
      {
        mistake: "Learning and perfectly following your child's script to avoid restarts",
        explanation: "When you memorize the exact sequence and perform your role flawlessly, you've become a co-performer in OCD's production. This feels like harmony, but it's actually the family bending entirely around the disorder. And OCD will change the script — it always does — leaving everyone scrambling to learn new rules."
      },
      {
        mistake: "Allowing restarts 'just this once' to get through the evening",
        explanation: "Every restart that's allowed reinforces the OCD rule that the sequence must be perfect. 'Just this once' is OCD's favorite phrase, because there's always a reason why this time is special. Consistency in not restarting is more important than any individual evening going smoothly."
      },
      {
        mistake: "Threatening to take away privileges if they don't stop restarting",
        explanation: "Punishment-based approaches assume your child is choosing to restart. They're not — they're responding to overwhelming anxiety. Taking away screen time or dessert doesn't reduce OCD's power; it adds a layer of shame and fear of punishment on top of the anxiety they're already drowning in."
      }
    ],
    strategies: [
      {
        name: "The Forward-Only Rule",
        difficulty: "starter",
        steps: [
          "Introduce the rule calmly and clearly: 'In our family, routines only go forward. We don't go back to the beginning.'",
          "When your child makes a mistake or feels the sequence is wrong, acknowledge it: 'I hear you — that step felt off. We're going to keep going anyway.'",
          "If they freeze, gently prompt the next step: 'What comes next? Let's do that one.'",
          "Don't engage with debates about why this time really needs a restart. Simply repeat: 'Forward only.'",
          "After the routine is complete, notice their bravery: 'You finished even though OCD wanted a restart. That was really brave.'"
        ],
        exampleScript: "We're going to start a new rule tonight, and I want you to know about it before we begin. The rule is: forward only. If something feels wrong or happens out of order, we keep going to the next step. No restarts. OCD is going to say the whole routine is ruined. It's not. The routine is done when we reach the end, not when it's perfect."
      },
      {
        name: "Shrink the Sequence",
        difficulty: "intermediate",
        steps: [
          "Write out every step in your child's current sequence — you'll likely find there are more steps than you realized.",
          "Together, identify which steps are \"OCD steps\" (things that wouldn't be in the routine if OCD weren't involved) versus \"real steps\" (brushing teeth, putting on pajamas).",
          "Remove one OCD step per week. Don't replace it — just skip it.",
          "When the removed step's absence triggers anxiety, sit with it: 'We skipped that step. OCD is upset. Let's see what happens.'",
          "Continue until the routine contains only genuine, necessary steps."
        ],
        exampleScript: "Let's write down every single step in your bedtime routine — even the tiny ones OCD added. Okay, I count fifteen steps. Now let's sort them: which ones are real bedtime steps that any kid would do, and which ones did OCD sneak in? This week, we're going to take out one OCD step. Which one feels the easiest to let go of?"
      },
      {
        name: "The Imperfect Routine on Purpose",
        difficulty: "advanced",
        steps: [
          "Plan a routine where things deliberately go 'wrong' — steps happen out of order, words are said differently, elements are skipped.",
          "Frame it as a team effort against OCD: 'We're going to do the routine wrong on purpose and prove nothing bad happens.'",
          "Have your child predict what OCD says will happen. Write it down.",
          "Do the imperfect routine. Sit with the anxiety without fixing it.",
          "The next morning, review OCD's predictions: 'Did any of those things come true?'"
        ],
        exampleScript: "Tonight we're going to do the messiest, most out-of-order bedtime routine we've ever done. On purpose. We'll brush teeth last instead of first. We'll say goodnight before putting on pajamas. OCD is going to hate this. Let's write down right now what OCD predicts will happen if we do the routine wrong. Then tomorrow morning, we'll check — did any of it come true?"
      }
    ],
    whenItGetsTough: "The first few nights (or mornings, or homework sessions) without restarts will likely be the hardest your family has faced with this issue. Your child may become extremely distressed — crying, yelling, pleading for just one restart. They may refuse to continue the routine at all, or they may try to restart secretly (going back to the bathroom to re-brush teeth, for example). This escalation is the extinction burst, and it's a sign that OCD's grip is being challenged. Stay as calm as you can. You don't need to fix the feelings — just be present and hold the boundary. It's okay to say, \"I know this is really hard. I'm right here. We're not going back, but I'm not going anywhere either.\" Most families see the intensity of the resistance peak around days two through four and begin to decrease noticeably by the end of the second week. The routine won't look perfect for a while — and that's actually the point.",
    whenToGetHelp: [
      "Restarts are happening more than three times per routine session despite consistent boundary-setting",
      "The number of steps in the sequence is growing, not shrinking",
      "Your child becomes physically aggressive (hitting, kicking, throwing objects) when restarts are prevented",
      "The restart behavior has spread to school — teachers report similar patterns with classroom routines or work completion",
      "Your child expresses intense guilt or fear about what will happen if the routine isn't perfect, including fears about family members getting hurt"
    ],
        ageSpecificExamples: [
      {
        ageRange: "4-7",
        description:
          "Your young child needs to do things in a rigid order -- brush teeth, then wash face, then walk out of the bathroom with the right foot first. If any step is out of sequence or doesn't feel right, they insist on starting the entire routine over from the beginning. Bedtime, morning, and mealtimes all have specific sequences. A single disruption can add 30 minutes to a routine. They can't articulate why the order matters, just that it has to be that way.",
        parentScript:
          "I know you want to start over, but we're going to keep going from here. We already brushed teeth -- that counts! The Worry Monster says it doesn't count, but it does. Our teeth are clean. Let's keep moving to the next step. You're going to feel a little uncomfortable, and that's okay. That's just the Worry Monster getting quieter.",
      },
      {
        ageRange: "8-12",
        description:
          "Your child has routines that must proceed in an exact order, and any interruption -- a sibling talking, a door closing, a noise -- requires a complete restart. What should take 10 minutes takes 40. They become frustrated and tearful when they have to restart again and again. The routines are expanding to include more steps. They know it's \"ridiculous\" but feel genuine distress if they try to skip the restart. Family members have learned to tiptoe during routines, which accommodates the OCD.",
        parentScript:
          "I can see that OCD is making you restart, and I know it feels impossible to keep going without doing that. But every time you restart, OCD gets stronger. What if we tried continuing from where you are, even though it feels wrong? The wrong feeling is temporary. I'll sit with you through it. You don't have to do this perfectly to do it well.",
      },
      {
        ageRange: "13-18",
        description:
          "Your teen's restart rituals dominate daily life. They may restart homework sessions if they don't begin at the 'right' moment, restart showers if the water temperature changes, or restart getting dressed if they put the left sock on before the right. They're exhausted by the constant restarting and may avoid starting activities altogether because they know the restart cycle is waiting. Time management has collapsed because no activity takes a predictable amount of time.",
        parentScript:
          "I know the restarting is exhausting -- I can see how frustrated you are. OCD is the one insisting things have to start over, not you. What if we made a rule together: no restarts today, just once through? I know it's going to feel wrong. That feeling is data -- it tells us OCD is uncomfortable, and that means we're on the right track. I'm here for all of it.",
      },
    ],
    relatedSituationSlugs: ["morning-routine-hostage", "bedtime-rigid-rituals", "goodnight-exact-sequence"]
  },

  {
    slug: "family-meals-disrupted",
    title: "Family meals and outings are disrupted by rituals everyone has to follow",
    categorySlug: "family-routines",
    ageRanges: ["4-7", "8-12", "13-18", "18+"],
    severity: "moderate",
    setup: "Mealtimes have become a minefield of rules — specific seats, specific plates, food arranged a certain way, no one can start eating until a ritual is complete, or certain words can't be said at the table. Family outings are similarly controlled: the car ride has rules, the restaurant has rules, and everyone is expected to follow them or your child becomes extremely distressed.",
    ocdMechanics: "When OCD extends its rules to include other people, it has crossed an important boundary — from private compulsions to what clinicians call \"family accommodation demands.\" Your child isn't being controlling in the way that word usually implies. They genuinely believe that if family members don't follow the rules, something bad will happen or an unbearable feeling will persist. The rituals have expanded from \"things I do\" to \"things everyone must do,\" which is OCD's way of building a larger safety system.\n\nThe mechanics are straightforward: your child experiences an obsessive thought (\"if Dad sits in the wrong chair, something terrible will happen\"), and the compulsion is ensuring Dad sits in the right chair. The relief comes when everyone is in position and the ritual is satisfied. But because the relief is temporary and OCD keeps adding rules, the meal becomes an increasingly complex choreography that the entire family must perform.\n\nThis pattern is particularly damaging because it reshapes family dynamics. Siblings become resentful of the special rules. Parents feel like they're walking on eggshells. Family meals, which should be a source of connection, become a source of tension. The child with OCD often senses this tension and feels guilty, which increases their anxiety, which increases the rituals — a vicious cycle that erodes the family's quality of life.",
    whatNotToDo: [
      {
        mistake: "Following all the rules to keep the peace during family time",
        explanation: "Full accommodation during meals and outings teaches everyone — including your child — that OCD's rules are valid and necessary. The peace you're keeping is OCD's peace, not your family's. Every rule followed makes the next meal slightly more complicated as OCD expands its demands."
      },
      {
        mistake: "Excluding your child from family meals or outings to avoid the disruption",
        explanation: "Isolation is never the answer. Removing your child from family activities reinforces the idea that their OCD makes them a burden and sends the message that normal life isn't possible for them. Both of these beliefs are untrue and harmful."
      },
      {
        mistake: "Having siblings enforce or follow OCD rules to 'help' their brother or sister",
        explanation: "When siblings become part of the ritual system, you've expanded OCD's workforce. Siblings deserve to eat their meals normally. They also shouldn't be responsible for managing their sibling's disorder — that's too much weight for a child to carry."
      },
      {
        mistake: "Blaming your child for ruining family time",
        explanation: "Your frustration is completely valid — family meals and outings are supposed to be enjoyable, and OCD has stolen that. But your child is suffering too. They don't want to control everyone's behavior; they're terrified of what happens if they don't. Blame the OCD, not the child."
      }
    ],
    strategies: [
      {
        name: "Family Rules vs. OCD Rules",
        difficulty: "starter",
        steps: [
          "Hold a family meeting (calm, structured, empathetic). Explain: 'There are family rules (be kind, take turns talking) and OCD rules (specific seats, no certain words). We're going to start separating them.'",
          "Together, list the OCD rules that currently govern mealtimes. Name them as OCD's rules, not your child's rules.",
          "Choose one OCD rule to drop this week — the least distressing one.",
          "At mealtimes, gently hold the boundary: 'That's an OCD rule. We're not following that one anymore. I know it's hard.'",
          "Acknowledge the whole family's effort: 'We all did something brave at dinner tonight.'"
        ],
        exampleScript: "I want to have a family meeting about dinnertime. I've noticed that OCD has added a lot of rules to our meals — where everyone sits, how the food has to be arranged, what we can say. These aren't our family's rules. They're OCD's rules. We're going to start taking back our dinner, one rule at a time. [To your child:] This isn't about being mad at you. It's about being mad at OCD. We're on your team."
      },
      {
        name: "The 'OCD Doesn't Get a Seat' Approach",
        difficulty: "intermediate",
        steps: [
          "Externalize OCD as an unwanted guest at the table: 'OCD doesn't get a chair at our dinner table tonight.'",
          "Before the meal, identify which OCD rules might come up and plan together how to respond when they do.",
          "During the meal, when a ritual urge arises, name it out loud: 'OCD is trying to join dinner. We're not setting a place for it.'",
          "Keep conversation going — redirect attention to normal dinner topics rather than dwelling on the OCD urge.",
          "After dinner, rate how it went: 'How loud was OCD tonight? How loud was it by dessert?'"
        ],
        exampleScript: "Tonight, OCD doesn't get a chair at our table. If it tries to tell us where to sit or how to eat, we're going to notice it and keep eating. You might feel uncomfortable — that's OCD knocking on the door, trying to get in. We don't have to open it. Let's just eat together and see what happens."
      },
      {
        name: "Gradual Family Outing Exposures",
        difficulty: "advanced",
        steps: [
          "Plan a family outing where OCD rules will be deliberately broken — eating at a new restaurant, sitting in different car seats, going without a ritual.",
          "Prepare your child ahead of time: discuss what OCD will say, predict the anxiety level, plan coping strategies.",
          "During the outing, family members behave naturally — no accommodation of OCD rules.",
          "Check in with your child periodically but don't make the outing about OCD. Focus on having fun.",
          "Afterward, compare predictions to reality: 'OCD said this would be terrible. How was it actually?'"
        ],
        exampleScript: "This Saturday, we're going out to eat at that new restaurant. There won't be 'our usual table' because we've never been there. Everyone will sit wherever there's a seat. We won't do the food-arranging thing. I know that sounds like a lot all at once, and I want to plan with you: what's OCD going to say? How anxious do you think you'll be on a 1-to-10? What can we do together when the anxiety shows up? This is a big brave challenge for our whole family."
      }
    ],
    whenItGetsTough: "When family rituals are disrupted, the distress often feels more public and more intense because it happens in front of siblings, in restaurants, or during family gatherings. Your child may cry at the table, refuse to eat, or try to enforce the rules more loudly when they sense them slipping. Siblings may react — either with frustration or by trying to follow the old rules out of sympathy. This is the extinction burst playing out in a family context, and it can feel chaotic. Stay unified as parents: agree beforehand on which rules you're dropping and present a consistent front. Brief the siblings separately so they understand what's happening and why. The adjustment period for family-wide rituals often takes two to four weeks because multiple people are changing their behavior simultaneously. There will be awkward, uncomfortable meals. That's okay. Awkward meals where OCD doesn't get its way are better than smooth meals where OCD runs the show.",
    whenToGetHelp: [
      "Your child refuses to eat entirely when mealtime OCD rules aren't followed, leading to significant weight loss or nutritional concerns",
      "Family outings have stopped almost completely because the rituals make them unmanageable",
      "Siblings are developing anxiety symptoms of their own or are expressing significant distress about the family dynamics",
      "Your child becomes aggressive or self-harming when family members don't follow OCD rules",
      "You and your co-parent are in significant conflict about how to handle the rituals, and it's affecting your relationship"
    ],
        ageSpecificExamples: [
      {
        ageRange: "4-7",
        description:
          "Your young child insists that everyone at the dinner table follow specific rules: sit in certain seats, use certain utensils, eat in a certain order. If someone coughs, or a sibling reaches across the table, the meal may be 'ruined' and your child melts down. Family dinners have become stressful performances where everyone walks on eggshells. Siblings are angry that one child's OCD is controlling the entire family.",
        parentScript:
          "I love eating dinner with you, and I know the Worry Monster has a lot of rules about dinner. But Daddy is going to sit wherever he wants tonight, and sissy can use whatever fork she likes. The Worry Monster might get upset about that, and we're going to let it be upset while we eat our yummy food. Our family dinner is about being together, not about rules.",
      },
      {
        ageRange: "8-12",
        description:
          "Your child has imposed a set of mealtime rituals on the entire family: specific seating, specific prayer or pre-meal routine, no one can start until they say so, and certain topics can't be discussed at the table. Violations cause visible distress and sometimes tearful outbursts. Siblings resent the control, and you've been accommodating to keep the peace. Family outings to restaurants are dreaded because the rituals can't be maintained in public.",
        parentScript:
          "I hear OCD when it tries to make rules for the whole family at dinner. And I love you too much to follow those rules because following them makes OCD bigger. Tonight, dinner is going to be normal: people sit where they want, eat how they want, and talk about whatever they want. I know that's going to be uncomfortable for you. I'm right here, and the discomfort will pass.",
      },
      {
        ageRange: "13-18",
        description:
          "Your teen's rituals have expanded to control family outings, holiday celebrations, and everyday meals. They may insist on veto power over restaurant choices, require specific seating at family events, and become angry or withdrawn when their rituals aren't accommodated. The family has been organizing around the OCD to avoid conflict, but resentment is building. Siblings avoid family meals, and your partner may disagree about how to handle the situation.",
        parentScript:
          "I know you have specific needs at mealtimes right now, and I want to be supportive without feeding OCD. So here's what I can offer: a calm environment, no judgment, and the same meal everyone else is having. What I can't offer is changing how the whole family eats to match OCD's rules. That's not helping you -- it's making your world smaller. Let's find the line between supporting you and supporting OCD.",
      },
      {
        ageRange: "18+",
        description:
          "Your adult child's mealtime rituals disrupt family gatherings when they visit. They may insist on specific seating, separate utensils, or refuse to eat if the meal wasn't prepared to their specifications. Holiday dinners are tense, with other family members frustrated by the demands. Your adult child may avoid family meals altogether, choosing to eat alone when they visit, which makes everyone sad.",
        parentScript:
          "When you come home for dinner, I'm going to cook the way I always have. I'm not going to change the seating arrangement or use separate utensils. I love you, and these boundaries are an act of love. If you need to eat separately, that's your choice, and I'll understand -- but I'm not going to reshape family dinner around OCD anymore. I'd rather have you at the table, uncomfortable, than eating alone in your room.",
      },
    ],
    relatedSituationSlugs: ["food-prepared-specific-way", "specific-order-restarts", "wash-hands-before-touching"]
  },

  // ============================================
  // CATEGORY 3: Magical Thinking
  // ============================================

  {
    slug: "bad-will-happen-no-ritual",
    title: "My child believes something bad will happen if they don't do their ritual",
    categorySlug: "magical-thinking",
    ageRanges: ["4-7", "8-12", "13-18"],
    severity: "moderate",
    setup: "Your child has rituals they believe are keeping bad things from happening — tapping the wall a specific number of times, stepping over cracks, repeating a phrase, or arranging objects in a certain way. If they can't complete the ritual, they become extremely anxious and insist something terrible will happen to them or someone they love.",
    ocdMechanics: "Magical thinking in OCD is the belief that one's thoughts, words, or actions can directly cause or prevent real-world events — even when there's no logical connection between them. Your child isn't being superstitious in the casual \"don't walk under a ladder\" sense. Their brain has created a powerful, emotionally charged link between a ritual and safety. The thought \"if I don't tap the wall three times, Mom will get in a car accident\" feels as urgent and real to them as a genuine warning.\n\nThe OCD cycle here is particularly cruel. The obsession is an intrusive thought about something bad happening (a family member getting hurt, a natural disaster, illness). The compulsion is the ritual that \"prevents\" the bad thing. When the ritual is completed and nothing bad happens, OCD takes credit: \"See? You tapped the wall and Mom is safe. Better do it again tomorrow.\" The child never gets to learn that Mom would have been safe regardless, because the ritual always intervenes.\n\nThis creates a tremendous burden of responsibility on your child's shoulders. They genuinely feel that their family's safety depends on their rituals. Imagine carrying that weight — believing that if you forget to do something or do it wrong, someone you love could be hurt. The anxiety isn't about the ritual itself; it's about the catastrophic consequences your child believes will follow if the ritual isn't performed.",
    whatNotToDo: [
      {
        mistake: "Reassuring them that nothing bad will happen",
        explanation: "Saying \"nothing bad will happen\" feels like the obvious response. But OCD twists reassurance into another compulsion. Your child asks \"are you sure?\" and you reassure, and they feel better for a moment — then OCD asks \"but are they really sure?\" and the cycle starts over. Reassurance feeds the same machine the ritual does."
      },
      {
        mistake: "Waiting for them to finish the ritual before moving on",
        explanation: "Giving your child space to complete the ritual is accommodation. It sends the message that the ritual is necessary and that completing it is the path to feeling better. The ritual does provide temporary relief, but that relief is exactly what makes OCD stronger."
      },
      {
        mistake: "Dismissing their fear as silly or irrational",
        explanation: "Telling your child that tapping the wall obviously can't prevent car accidents is both true and unhelpful. They know it doesn't make logical sense — they're often embarrassed by that. The problem isn't a knowledge gap; it's an anxiety circuit that bypasses logic. Dismissing the fear makes them feel stupid on top of scared."
      },
      {
        mistake: "Testing the belief by deliberately preventing the ritual and saying 'see, nothing happened'",
        explanation: "Forced exposure without your child's collaboration can be traumatic rather than therapeutic. If you physically prevent the ritual, your child may believe that something bad almost happened, or that the bad thing is still coming. Effective exposure is always planned, gradual, and agreed upon."
      }
    ],
    strategies: [
      {
        name: "Name the OCD Story",
        difficulty: "starter",
        steps: [
          "Help your child identify OCD's specific story: 'OCD says that if you don't tap the wall, something bad will happen. Let's call that OCD's story.'",
          "Practice noticing when the story activates: 'I'm having the OCD story again right now.'",
          "Separate the story from reality: 'The story feels true. But feeling true and being true are different things.'",
          "Don't argue whether the story is true — just label it as OCD's story every time it comes up.",
          "Over time, the labeling creates distance between your child and the thought, reducing its power."
        ],
        exampleScript: "OCD is telling you a story right now. The story is: 'If you don't tap the wall, Mom will get hurt.' That's OCD's story. It feels very real and very scary. But here's what I want you to notice — OCD tells the same story every day, and every day I'm fine. OCD is a broken alarm that keeps going off when there's no fire. We don't have to obey a broken alarm."
      },
      {
        name: "The Prediction Test",
        difficulty: "intermediate",
        steps: [
          "Get a notebook — this becomes the 'OCD Prediction Log.'",
          "When OCD makes a prediction ('if you don't do the ritual, X bad thing will happen'), write it down with the date.",
          "Your child then delays the ritual — by five minutes at first, then ten, then longer.",
          "After the delay, check the prediction: 'OCD said X would happen. Did it?'",
          "Over time, the log fills up with failed predictions, building evidence against OCD's credibility."
        ],
        exampleScript: "Let's start keeping track of OCD's predictions. Every time OCD says something bad will happen, we'll write it down. Then we'll wait — just a few minutes at first — and see if the prediction comes true. It's like a science experiment. We're testing whether OCD is actually a good predictor. My guess? OCD has a terrible track record."
      },
      {
        name: "Ritual Resistance: Doing the Opposite",
        difficulty: "advanced",
        steps: [
          "With your child's agreement, plan an exposure where they deliberately don't do the ritual — and say out loud what OCD predicts will happen.",
          "Go further: do the 'wrong' thing on purpose (step on a crack, say the 'unlucky' word, leave the objects unarranged).",
          "Sit with the anxiety without neutralizing it. Rate it every few minutes on a 1–10 scale.",
          "Continue with normal activities while the anxiety is present — it doesn't need to be gone before you move on.",
          "The next day, review: 'We broke OCD's rule. What happened? Nothing. What does that teach us?'"
        ],
        exampleScript: "Today we're going to break one of OCD's rules on purpose. I know that sounds terrifying. Here's what I want you to do: don't tap the wall tonight. And then say out loud: 'OCD says something bad will happen to Mom. Let's see.' I'm going to be right here, perfectly safe, the whole time. Tomorrow morning, I'll still be here. And we'll both know that OCD lied."
      }
    ],
    whenItGetsTough: "When your child first resists a magical thinking ritual, the anxiety can be intense and deeply emotional. They may cry, beg, bargain, or say things like \"you don't care if something bad happens to our family.\" They're not being manipulative — in that moment, they genuinely believe they're protecting people they love, and you're asking them to stop. This is the extinction burst, and it's especially hard with magical thinking because the stakes feel so high to your child. You might feel doubt yourself: \"What if not doing the ritual this one time is too much too soon?\" Trust the process. The anxiety will peak and begin to decline, usually within 20–40 minutes. Each time your child resists the ritual and nothing bad happens, OCD's story loses a little bit of credibility. The first few exposures are the hardest. By the second week, many children start to see for themselves that OCD's predictions don't come true — and that realization is more powerful than anything you can tell them.",
    whenToGetHelp: [
      "The rituals are taking more than an hour per day in total",
      "Your child is creating new rituals faster than you can address the existing ones",
      "They express genuine terror — not just anxiety — about what will happen if rituals aren't performed, including vivid intrusive images of harm coming to family members",
      "Your child is losing sleep because rituals must be completed before bed, or they wake up to perform rituals during the night",
      "They've started asking other family members to perform rituals on their behalf (\"Mom, you need to say this phrase or something bad will happen\")"
    ],
        ageSpecificExamples: [
      {
        ageRange: "4-7",
        description:
          "Your young child believes with absolute certainty that if they don't perform their ritual -- tapping the door three times, saying a special word, stepping over cracks -- something terrible will happen to you, to them, or to the family. They can't explain the logic because there isn't any; the connection is purely emotional. They become hysterical if prevented from completing the ritual, genuinely terrified that their failure will cause harm.",
        parentScript:
          "I know you're scared that something bad will happen if you don't tap the door. The Worry Monster made up that rule, and it's not real. Nothing bad is going to happen. We're going to walk through the door without tapping, and I'm going to hold your hand. Tomorrow morning, we'll see that everyone is still safe, and the Worry Monster was wrong again.",
      },
      {
        ageRange: "8-12",
        description:
          "Your child has developed a belief system connecting specific rituals to preventing harm: tapping, counting, repeating words or phrases. They may need to perform the ritual a specific number of times, and if they lose count, they start over. They understand intellectually that tapping a desk doesn't prevent car accidents, but the emotional conviction is overpowering. They spend increasing amounts of time on the rituals, and the consequences they fear are becoming more extreme (\"Mom will die if I don't do this\").",
        parentScript:
          "I know OCD is telling you that your ritual keeps the family safe. I understand how real that feels. But I want you to think about this: have there ever been times you forgot to do the ritual and everyone was still okay? OCD can't give you credit for those times because it would prove OCD wrong. The ritual doesn't have any power. You are safe without it. We are safe without it. Let's prove it together.",
      },
      {
        ageRange: "13-18",
        description:
          "Your teen may be performing extensive mental rituals -- counting, praying, repeating phrases -- to prevent catastrophic outcomes. They may not tell you about the content because the fears feel irrational and embarrassing (\"If I don't count to 47 before the light changes, Mom will get cancer\"). The rituals are consuming significant mental bandwidth, making it hard to concentrate on schoolwork or be present in conversations. They may appear distracted, zoned out, or not listening when they're actually performing internal rituals.",
        parentScript:
          "I can tell something is taking up a lot of space in your head. You don't have to tell me what it is if you're not ready, but I want you to know: no thought or ritual you perform has the power to make something bad happen or prevent something bad from happening. That's magical thinking, and it's a known part of OCD. You're not responsible for keeping everyone safe through rituals. That's not how the world works. Can we talk about what kind of help might make this lighter?",
      },
    ],
    relatedSituationSlugs: ["counts-repeats-prevent-bad", "responsible-keeping-family-safe", "bedtime-rigid-rituals"]
  },

  {
    slug: "counts-repeats-prevent-bad",
    title: "They count or repeat words silently to 'prevent' bad things",
    categorySlug: "magical-thinking",
    ageRanges: ["8-12", "13-18", "18+"],
    severity: "moderate",
    setup: "You've noticed your child's lips moving silently, or they seem to freeze mid-activity while something happens internally. They may count to specific numbers, repeat phrases or prayers in their head, or mentally \"undo\" a bad thought by replacing it with a good one. These mental rituals are invisible to others but consume enormous amounts of your child's time and energy.",
    ocdMechanics: "Mental rituals — counting, repeating words, praying, or mentally \"canceling\" thoughts — are among the most hidden and exhausting forms of OCD. Unlike physical rituals that others can observe, mental compulsions happen entirely inside your child's head. Your child may look like they're daydreaming or not paying attention when they're actually working intensely to complete an internal ritual. This invisibility makes the compulsions harder to identify and treat, and it often means the OCD has been building for a long time before anyone notices.\n\nThe cycle follows the same pattern as physical rituals: an intrusive thought occurs (\"something bad will happen to Dad\"), followed by a mental compulsion to neutralize it (counting to a safe number, repeating a protective phrase, mentally replaying the thought \"the right way\"). The brief relief after completing the mental ritual reinforces the behavior. But mental rituals have a particular trap: because they happen internally, they can be performed anywhere, anytime, without anyone knowing. There's no natural barrier — no one can see and intervene.\n\nMental counting and repeating also tend to escalate in complexity. What starts as counting to four may become counting to four in multiples, then counting to four while visualizing specific images, then restarting the entire count if a \"bad\" thought intrudes during the counting. The ritual becomes a full-time internal job, and your child's attention, concentration, and school performance often suffer dramatically — not because they can't focus, but because their mental bandwidth is consumed by compulsions.",
    whatNotToDo: [
      {
        mistake: "Not recognizing it as OCD because there's no visible behavior",
        explanation: "Mental rituals are real compulsions. They're not quirks, habits, or daydreaming. If your child says they need to count or repeat words in their head to prevent bad things, that's OCD — it just happens to live where you can't see it. Taking it seriously is the first step."
      },
      {
        mistake: "Asking them to 'just stop thinking about it'",
        explanation: "Telling someone with OCD to stop thinking a thought is like telling someone to not think about a pink elephant. The effort of suppressing the thought actually makes it more frequent and more distressing. Thought suppression is the opposite of what works."
      },
      {
        mistake: "Giving them time to 'finish the count' before expecting them to engage",
        explanation: "Waiting for the mental ritual to complete is accommodation, even though you can't see what you're waiting for. Pausing life until the counting is done tells your child that the counting is necessary and the world should accommodate it."
      },
      {
        mistake: "Asking them to count out loud so you can help them stop",
        explanation: "Making the mental ritual external can feel like progress, but it often just adds a layer of shame without reducing the compulsion. The goal isn't to see the ritual — it's to reduce it. And some children will simply do the ritual silently and perform a fake version out loud."
      }
    ],
    strategies: [
      {
        name: "Ritual Awareness Building",
        difficulty: "starter",
        steps: [
          "Help your child become a detective of their own mental rituals. When are they most likely to happen? What triggers them?",
          "Create a simple tracking system: a tally mark on a card each time they notice a mental ritual happening.",
          "The goal at this stage is just awareness, not stopping. 'Notice it and name it: I'm counting again.'",
          "Discuss what you've learned together at the end of each day: 'When was OCD loudest today?'",
          "Awareness alone often reduces frequency because the ritual loses its automatic, unconscious quality."
        ],
        exampleScript: "I want to learn more about what OCD does inside your head, because I can't see it and I want to understand. Can you tell me: when you're counting in your head, what does that feel like? When does it happen most? Let's keep track this week — just noticing, not trying to stop. Every time you catch yourself counting, make a little mark on this card. We're just gathering information right now."
      },
      {
        name: "Delay and Shorten",
        difficulty: "intermediate",
        steps: [
          "When your child notices a mental ritual starting, have them delay it by a set amount of time — 30 seconds to start.",
          "During the delay, they do something else that requires attention: talk to you, solve a quick math problem, describe what they see around them.",
          "After the delay, if the urge is still strong, allow the ritual — but with a modification: only half the count, or the phrase only once instead of three times.",
          "Gradually extend the delay and reduce the permitted ritual: longer waits, fewer repetitions.",
          "Track the pattern: 'When you delayed 30 seconds, how strong was the urge after the delay compared to before?'"
        ],
        exampleScript: "Next time you feel the counting start, I want you to try something: wait 30 seconds before you count. During those 30 seconds, tell me about anything — what you see out the window, what you want for dinner, anything. After 30 seconds, check: how strong is the urge now? If you still need to count, that's okay — but try doing half the count you usually do. We're teaching OCD that it doesn't get to be in charge of the timeline."
      },
      {
        name: "Contaminating the Ritual",
        difficulty: "advanced",
        steps: [
          "Identify the 'safe' number or phrase your child uses in their mental ritual.",
          "Have your child deliberately introduce the 'wrong' number or an imperfect version of the phrase into the ritual.",
          "For example: if they count to 4 for safety, count to 3 or 5 on purpose. If they repeat a protective phrase, change one word.",
          "The goal is to prove that the specific number or exact wording has no actual power — OCD assigned it power arbitrarily.",
          "Sit with the anxiety that follows. Don't neutralize it with the 'correct' version."
        ],
        exampleScript: "OCD says the number 4 is safe and the number 3 is dangerous. But here's the thing — OCD made that up. There's nothing actually special about 4. So today, if you feel the urge to count to 4, I want you to count to 3 on purpose. Or count to 5. Mess up OCD's system. It's going to feel wrong and scary. That's OCD losing its grip. The scary feeling isn't a sign of danger — it's a sign you're fighting back."
      }
    ],
    whenItGetsTough: "Mental rituals are particularly challenging to resist because the urge to complete them can feel overwhelming and there's no external barrier — no one can physically prevent a thought. When your child first starts delaying or contaminating mental rituals, they may report intense anxiety, difficulty concentrating, headaches, or a pervasive feeling that something terrible is imminent. They may seem distracted, irritable, or emotionally fragile. This is the extinction burst happening internally. The hardest part for parents is that you can't see the battle — you can only see the aftermath on your child's face. Trust them when they tell you how hard it is. The typical timeline for improvement with mental rituals is slightly longer than physical ones — expect three to four weeks of consistent practice before the urges begin to diminish noticeably. Progress often feels nonlinear: a good day followed by a harder day, then two good days. The trend matters more than any individual day.",
    whenToGetHelp: [
      "Mental rituals are consuming more than an hour of your child's day and interfering with their ability to focus at school",
      "Your child reports that the rituals are becoming more complex — needing to count higher, repeat more times, or follow more elaborate internal rules",
      "They're experiencing significant distress even when successfully completing the rituals (the rituals have stopped providing relief)",
      "Your child is avoiding activities, places, or people because they trigger the mental rituals",
      "They express shame, hopelessness, or frustration about not being able to control their thoughts — saying things like 'my brain is broken' or 'I'm going crazy'"
    ],
        ageSpecificExamples: [
      {
        ageRange: "8-12",
        description:
          "Your child counts silently during daily activities: steps on the sidewalk, bites of food, times they blink. They repeat words or phrases under their breath to 'prevent' bad things from happening. They may need to rewrite words until they've written them a 'safe' number of times. The counting is invisible to most people, but you notice their lips moving, their distracted expression, and the time everything takes. They're exhausted by the mental effort.",
        parentScript:
          "I notice you're counting again, and I know it feels important. But here's the thing about OCD's counting rules: they never end. First it's 3, then it's 7, then it's 13. OCD will keep raising the number because counting doesn't actually prevent anything. What if you tried letting the count be 'wrong' one time today? I'll be right here. Nothing bad will happen.",
      },
      {
        ageRange: "13-18",
        description:
          "Your teen has sophisticated mental counting and repeating rituals that are nearly invisible. They may count syllables in conversations, repeat phrases in their head a certain number of times, or need to start tasks at a 'right' time on the clock. Schoolwork is affected because they count while reading and lose comprehension. They feel trapped by the rituals but terrified to stop because OCD has convinced them the counting keeps bad things at bay.",
        parentScript:
          "I know you have mental rituals that you don't always want to talk about. I respect that. But I also want you to consider this: the counting is OCD's way of keeping you busy so you don't realize it has no power. Every time you count to prevent something bad, OCD gets stronger. If you ever want to try stopping, even for one hour, I'll be here to sit with whatever comes up. No judgment.",
      },
      {
        ageRange: "18+",
        description:
          "Your adult child's counting and repeating rituals interfere with work, school, and relationships. They may need to read emails a 'safe' number of times, count steps between rooms, or repeat phrases before speaking in meetings. They're functionally impaired but hiding it well from everyone except you. They may call you to repeat a phrase back to them or ask you to count something with them. The rituals have expanded over years and feel cemented.",
        parentScript:
          "When you call me to repeat a phrase, I know that's OCD asking me to participate in a ritual. I love you, and I'm not going to do it anymore. Not because I don't care, but because participating is making it worse. You are capable of sitting with the discomfort. Your therapist can help you with structured response prevention. I'm here for everything else -- just not the rituals.",
      },
    ],
    relatedSituationSlugs: ["bad-will-happen-no-ritual", "avoids-unlucky-numbers", "doorways-certain-number"]
  },

  {
    slug: "avoids-unlucky-numbers",
    title: "They avoid certain numbers, colors, or words they think are 'unlucky'",
    categorySlug: "magical-thinking",
    ageRanges: ["4-7", "8-12", "13-18"],
    severity: "mild",
    setup: "Your child refuses to sit in seat 13, won't wear red because it's a \"bad color,\" avoids saying certain words, or insists on only even (or odd) numbers. These avoidances have started to affect daily life — they won't eat four chicken nuggets, won't write certain numbers in math class, or become upset when an \"unlucky\" thing appears unexpectedly.",
    ocdMechanics: "Avoidance of specific numbers, colors, or words is a form of magical thinking where OCD has tagged certain symbols as dangerous. Your child's brain has created an association — often arbitrary — between a number, color, or word and something bad happening. The number 13 doesn't carry actual danger, but OCD has labeled it as threatening, and the anxiety that arises when your child encounters it feels identical to the anxiety of a real threat.\n\nThe compulsion in this case is avoidance itself. By steering clear of the \"unlucky\" thing, your child never experiences the feared consequence (which wouldn't happen anyway) and never learns that the association is false. Every successful avoidance reinforces OCD's claim: \"You avoided the number 4, and nothing bad happened. Good thing you avoided it!\" The avoidance feels protective but is actually maintaining the fear.\n\nThis pattern often starts small — one number, one color — and expands. OCD is creative: once it establishes that some things are unlucky, it begins finding more things to tag. A child who starts by avoiding the number 7 may eventually also avoid 17, 27, 70, and any sum that equals 7. Colors, words, names, and even places can be drawn into the web. The world shrinks as the list of \"dangerous\" things grows.",
    whatNotToDo: [
      {
        mistake: "Avoiding the triggers alongside your child",
        explanation: "When you skip aisle 13 at the grocery store or serve five nuggets instead of four, you're validating OCD's rules. It feels like accommodation — and it is. The more the family avoids the 'unlucky' things, the more real they become in everyone's mind."
      },
      {
        mistake: "Telling them superstitions are silly or childish",
        explanation: "Your child doesn't fully believe in the superstition the way they believe the sky is blue. They know it doesn't make rational sense. The problem is that the anxiety is real even though the belief is irrational. Calling it silly invalidates a feeling they can't control and makes them less likely to talk to you about it."
      },
      {
        mistake: "Overexplaining why numbers and colors can't hurt them",
        explanation: "Logical explanations are reassurance in disguise. Your child's rational brain already knows that the number 4 isn't dangerous. The anxious part of their brain doesn't care about logic — it cares about the feeling. Explaining doesn't reach the part of the brain where the problem lives."
      }
    ],
    strategies: [
      {
        name: "Unlucky Thing Exposure — Start Small",
        difficulty: "starter",
        steps: [
          "Make a list of all the avoided numbers, colors, or words, ranked by how much anxiety each one causes (1–10).",
          "Pick the least distressing one to start with — maybe a mildly unlucky color or a number that's only avoided in certain contexts.",
          "Introduce small, brief exposures: write the number, say the word, wear something in the color for 10 minutes.",
          "Don't add reassurance: don't say 'see, nothing happened.' Just move on to normal activities.",
          "Repeat daily until the anxiety around that trigger drops to a 1 or 2, then move to the next item."
        ],
        exampleScript: "Let's make a list of all the things OCD says are unlucky. We'll rank them from 'a little uncomfortable' to 'really scary.' We're going to start with the easiest one. OCD says the number 9 is bad? Okay — let's write the number 9 right here on this paper. Look at that: we wrote it. OCD is probably not happy. Let's leave it there and go make a snack."
      },
      {
        name: "Lucky vs. Unlucky Experiment",
        difficulty: "intermediate",
        steps: [
          "Frame this as a science experiment: 'We're going to test whether lucky and unlucky things actually make a difference.'",
          "On one day, have your child do everything the 'lucky' way — use safe numbers, avoid bad colors, say only good words.",
          "On the next day, deliberately include one or two 'unlucky' things.",
          "At the end of each day, compare: 'How was your day? Did anything actually bad happen on the unlucky day versus the lucky day?'",
          "Repeat over several weeks, building a data set that shows no correlation between the superstitions and actual events."
        ],
        exampleScript: "We're going to be scientists this week. Monday and Wednesday, we'll do things OCD's way — all safe numbers and colors. Tuesday and Thursday, we'll include some 'unlucky' things on purpose. At the end of each day, we'll rate how the day actually went. My prediction is that the lucky days and unlucky days will be about the same. Let's find out if I'm right."
      },
      {
        name: "Flooding the Unlucky Thing",
        difficulty: "advanced",
        steps: [
          "Choose one 'unlucky' number, color, or word — preferably one that's been causing moderate distress.",
          "Surround your child with it for a planned period: write it on their hand, put the color everywhere, say the word repeatedly.",
          "The goal is saturation — making the stimulus so ever-present that the anxiety response can't sustain itself.",
          "Stay with your child during the exposure. Don't minimize, don't reassure. Just be present.",
          "Continue until the anxiety noticeably drops (this may take 30–60 minutes the first time, and gets shorter with repetition)."
        ],
        exampleScript: "Today we're going to take the number 4 — which OCD says is unlucky — and put it everywhere. We're going to write it on your hand, put sticky notes with 4 on your mirror, eat four crackers, do four jumping jacks. We're going to fill the day with 4s. OCD is going to freak out at first. That's okay. We're going to prove that the number 4 is just a number. By tonight, I think OCD will be bored of trying to scare you with it."
      }
    ],
    whenItGetsTough: "When your child deliberately encounters an \"unlucky\" number, color, or word, the anxiety can spike quickly and feel disproportionate to the situation. They may become tearful, clingy, or irritable. They might try to secretly \"undo\" the exposure through a mental ritual — counting to a safe number in their head, or mentally repeating a protective phrase. This is normal and expected. The extinction burst with avoidance-based OCD often includes an increase in other rituals as OCD tries to compensate for the one being challenged. Don't chase every new ritual — stay focused on the current exposure target. Most children with avoidance-type magical thinking respond well to exposure within one to two weeks per trigger, especially at the milder end of the severity spectrum. As they build evidence that the unlucky things don't cause bad outcomes, their confidence grows and subsequent exposures become easier.",
    whenToGetHelp: [
      "The list of 'unlucky' things is growing and beginning to significantly limit what your child can do (refusing certain school subjects, avoiding entire locations)",
      "Your child is developing elaborate mental rituals to counteract accidental exposure to unlucky things",
      "The avoidance is causing social problems — refusing to attend parties, play sports with certain jersey numbers, or eat at restaurants",
      "Your child is becoming increasingly rigid and distressed, even when you're actively working on exposures together",
      "They've started attributing real-life negative events (a bad grade, a friend being sick) to having encountered an 'unlucky' thing, reinforcing the magical connection"
    ],
        ageSpecificExamples: [
      {
        ageRange: "4-7",
        description:
          "Your young child has designated certain numbers as 'bad' or 'scary.' They refuse to use that many of something (won't eat 4 crackers, won't use the 4th crayon), freak out if they notice the number on a sign or clock, and may avoid pages in books. They also may have 'lucky' colors and 'unlucky' colors, refusing to wear certain colors or use certain toys. The rules seem arbitrary but are absolutely rigid.",
        parentScript:
          "I know you don't like the number 4 right now because the Worry Monster said it's unlucky. But numbers are just numbers -- they can't be lucky or unlucky. Look, I'm going to give you 4 crackers and we're both going to be totally fine. The Worry Monster might say otherwise, but we've caught the Worry Monster fibbing before, haven't we?",
      },
      {
        ageRange: "8-12",
        description:
          "Your child has an elaborate system of lucky and unlucky numbers, colors, and words. They avoid certain channels, won't sit in specific seats, and may refuse to answer question number 13 on a test. They cross out 'unlucky' words in books, choose clothes based on 'lucky' colors, and organize their day to avoid 'bad' numbers. The system is expanding and consuming more mental energy. They feel controlled by it but can't explain the logic to others.",
        parentScript:
          "I know OCD has a list of numbers and colors that feel dangerous. I want to try something with you: let's use the 'unlucky' number on purpose today. We'll set the volume to 13, or eat 6 carrot sticks, or whatever the OCD says is bad. Then we'll check: did anything bad happen? I'm going to do it with you. We're building evidence that numbers don't have magical power.",
      },
      {
        ageRange: "13-18",
        description:
          "Your teen's number and color avoidance has become internalized and sophisticated. They adjust volume levels to 'safe' numbers, set alarms at specific times, and organize their social media to avoid bad numbers. They may avoid certain friends whose phone numbers contain unlucky digits. They know it's irrational and feel deeply embarrassed, but the anxiety of violating the rules feels worse than the inconvenience of following them.",
        parentScript:
          "I want to talk about the number thing because I can see it's getting bigger. OCD has convinced you that certain numbers are dangerous, and every time you avoid them, OCD gets stronger. What if we picked the least scary 'unlucky' number and you used it on purpose this week? Set your alarm for that number, eat that many bites of something. Let's collect data on what actually happens versus what OCD says will happen.",
      },
    ],
    relatedSituationSlugs: ["bad-will-happen-no-ritual", "counts-repeats-prevent-bad", "eat-specific-order-bites"]
  },

  {
    slug: "responsible-keeping-family-safe",
    title: "They feel responsible for keeping the family safe through rituals",
    categorySlug: "magical-thinking",
    ageRanges: ["8-12", "13-18", "18+"],
    severity: "severe",
    setup: "Your child has taken on the role of the family's protector — but through OCD rituals, not real safety measures. They check locks repeatedly, pray or count in specific patterns to \"protect\" family members, ask for constant confirmation that everyone is safe, or insist on controlling where family members go and what they do. The weight of this self-imposed responsibility is visibly crushing them.",
    ocdMechanics: "Hyper-responsibility is one of OCD's most burdensome presentations. Your child's brain has assigned them the role of guardian — the one person standing between their family and catastrophe. The obsessive thoughts are vivid and terrifying: images of family members being hurt, sick, or killed. These aren't passing worries; they're intrusive, graphic, and persistent. The compulsions — checking, praying, counting, controlling, seeking reassurance — are your child's desperate attempt to prevent the catastrophic outcomes OCD insists are imminent.\n\nWhat makes hyper-responsibility particularly damaging is the emotional toll. Your child isn't performing rituals out of habit or preference — they're doing them out of love and terror. They believe, at a core level, that their family's safety depends on their vigilance. Missing a ritual doesn't just cause anxiety; it causes guilt. \"If something happens to Mom and I didn't do my checking, it's my fault.\" This guilt is OCD's most powerful weapon, because it transforms every moment of resistance into a perceived act of negligence toward the people they love most.\n\nThe scope of this pattern often expands aggressively. It may start with checking the front door lock and grow to include checking every window, monitoring the stove, tracking family members' locations, needing to know exactly when parents will be home, and performing elaborate mental rituals whenever a family member leaves the house. Your child is essentially working a full-time, unpaid, unasked-for security job — and they can never clock out because OCD never gives the all-clear.",
    whatNotToDo: [
      {
        mistake: "Providing constant updates on your whereabouts and safety to ease their worry",
        explanation: "Texting when you arrive, calling when you're leaving, confirming you're safe at every turn — this feels like basic reassurance, but it feeds the OCD cycle. Your child becomes dependent on the updates, and any delay triggers catastrophic thinking. You're also inadvertently agreeing with OCD's premise: that your safety is uncertain enough to require constant monitoring."
      },
      {
        mistake: "Letting them check locks, appliances, and windows as much as they want because 'safety matters'",
        explanation: "There's a crucial difference between reasonable safety (checking the stove once before bed) and OCD-driven checking (checking the stove seven times, then worrying you didn't check properly). When you frame compulsive checking as \"just being safe,\" you normalize OCD behavior and make it harder for your child to recognize where safety ends and OCD begins."
      },
      {
        mistake: "Telling them it's not their job to keep the family safe",
        explanation: "While this is true, simply stating it doesn't change the feeling. Your child cognitively knows it's not their job. But OCD has convinced their emotional brain otherwise. Telling them to stop feeling responsible is like telling someone to stop being afraid of heights by explaining that the railing is strong. The feeling persists regardless of the facts."
      },
      {
        mistake: "Changing family plans to match their safety requirements",
        explanation: "When you cancel a trip because your child is too anxious about something happening while you're away, or when you avoid driving at night because it makes them panic, OCD has started controlling the family's freedom. This accommodation expands OCD's territory rapidly."
      }
    ],
    strategies: [
      {
        name: "Responsibility Pie",
        difficulty: "starter",
        steps: [
          "Draw a circle (pie chart) on paper with your child.",
          "Ask: 'Who and what is responsible for keeping our family safe?' and list all factors: the door lock itself, the police, other drivers, seatbelts, smoke detectors, adults in the family, chance, etc.",
          "Assign each factor a realistic slice of the pie.",
          "Ask: 'How big is your slice?' Most children with hyper-responsibility will initially claim a huge portion.",
          "Gently adjust: 'Actually, your slice is very small — because you're a kid. The locks, the smoke detectors, the adult family members, and all these other things carry most of the responsibility. OCD has given you a slice that's way too big.'"
        ],
        exampleScript: "Let's draw a pie chart of who keeps our family safe. There's the lock on the door — that's a slice. There's the smoke detector. There's me and Dad being careful adults. There's seatbelts. There's the police. There's luck and chance. Now — how big is your slice? OCD says it's the whole pie. But look at all these other slices. Your real slice is tiny. Because you're twelve. It's not your job to protect us. You've been carrying a weight that doesn't belong to you."
      },
      {
        name: "Checking Reduction Protocol",
        difficulty: "intermediate",
        steps: [
          "Count how many checks your child currently does before bed or before the family leaves (locks, windows, stove, etc.).",
          "Reduce by one check per item per week. If they check the lock five times, this week aim for four.",
          "After the allowed checks, leave the area. No going back.",
          "When anxiety rises after the reduced checking, acknowledge it: 'OCD wants more checks. We've done our amount. The feeling will pass.'",
          "Continue reducing until each item is checked once — and eventually, work toward not all items needing to be checked at all."
        ],
        exampleScript: "Right now, you check the front door lock about six times every night. This week, we're going to check it five times. I know that sounds like barely a change, but it means one time where you tell OCD 'no.' Next week, four times. The week after, three. We're going to take back your evenings one check at a time. After the five checks, we leave the hallway and we don't go back. I'll sit with you if the anxiety is big."
      },
      {
        name: "Leaving Safety to Chance",
        difficulty: "advanced",
        steps: [
          "Plan an exposure where your child deliberately does not perform their safety rituals for a full evening or outing.",
          "Before the exposure, write down OCD's specific predictions: 'What exactly does OCD say will happen if you don't check?'",
          "Go through the evening without the rituals. Don't check locks. Don't confirm everyone's whereabouts. Don't count or pray for protection.",
          "Sit with the anxiety. Rate it every 15 minutes. Notice the arc — how it rises, peaks, and falls without any ritual.",
          "The next morning, review: 'Everyone is safe. OCD's prediction was wrong. What does that tell us about OCD's reliability?'"
        ],
        exampleScript: "Tonight, we're going to do something really brave. We're going to go to bed without checking anything. No locks, no stove, no windows. OCD is going to scream. I want you to write down right now, exactly what OCD says will happen. We'll put it in an envelope and open it tomorrow morning. When everyone wakes up safe — and they will — we'll compare OCD's predictions to reality. This is how we prove to your brain that you don't have to carry this weight."
      }
    ],
    whenItGetsTough: "Hyper-responsibility OCD runs deep because it's intertwined with your child's love for their family. When you start reducing checking and reassurance, your child isn't just facing anxiety — they're facing guilt. They may say, \"If something happens tonight and I didn't check, it's my fault and your fault for making me stop.\" This is OCD talking, but it cuts to the heart. You may feel guilty yourself for pushing them to resist rituals that are motivated by love. This is the extinction burst at its most emotionally complex. Your child needs to hear, clearly and repeatedly: \"It was never your job. You've been doing work that belongs to the smoke detectors, the locks, and the adults. You can put it down.\" The intensity of the resistance phase with hyper-responsibility can be significant — expect two to four weeks of heightened anxiety, tears, and bargaining before you see consistent improvement. This is one presentation where professional support is especially valuable; you don't have to navigate this alone.",
    whenToGetHelp: [
      "Your child is losing sleep because they can't stop checking or performing safety rituals before bed — they're up for hours",
      "They're calling or texting family members multiple times a day to confirm safety, and become panicked if they don't receive an immediate response",
      "The sense of responsibility has become overwhelming enough that your child expresses wanting to give up, feeling exhausted, or being unable to enjoy anything because they're always on alert",
      "They've started involving siblings, classmates, or friends in their safety rituals (asking others to check things, reporting back on family members' safety)",
      "Your child has expressed that they would rather not be alive than carry this burden — any expression of this kind requires immediate professional intervention"
    ],
        ageSpecificExamples: [
      {
        ageRange: "8-12",
        description:
          "Your child has taken on the role of family protector. They check that everyone's seatbelt is fastened (multiple times), ask repeatedly if you locked the door, and lie awake worrying about burglars, fires, or car accidents. They may try to control the family's schedule to minimize 'risks' -- no driving in rain, no leaving the house after dark. They feel personally responsible for preventing any harm to the family, and the weight of that imagined responsibility is crushing them.",
        parentScript:
          "I can see you're trying to keep everyone safe, and that shows what a caring person you are. But keeping the family safe isn't your job -- it's mine. When OCD tells you that you have to check the locks or the seatbelts or the stove, it's putting an adult burden on a kid's shoulders. You get to be a kid. I've got the safety stuff covered. Can you trust me with that?",
      },
      {
        ageRange: "13-18",
        description:
          "Your teen feels an outsized sense of responsibility for the family's safety and wellbeing. They may monitor the news for threats, insist on knowing everyone's location at all times, and perform elaborate checking rituals before anyone leaves the house. They may feel responsible for a parent's health, a sibling's safety, or the family's financial security. The responsibility feels real and urgent, and they're unable to relax or enjoy activities because the vigilance never turns off.",
        parentScript:
          "I see how much pressure you're putting on yourself to keep everyone safe. That's OCD giving you a job that isn't yours. I'm the parent. I handle the safety and the worrying. Your job is to be a teenager. I know handing that worry over to me feels risky, and I know OCD is going to resist it. But I need you to hear this: you are not responsible for preventing bad things from happening to this family. None of us are. We just live our lives and handle what comes.",
      },
      {
        ageRange: "18+",
        description:
          "Your adult child may call daily to confirm family members' safety, monitor location-sharing apps obsessively, and experience panic when family members don't respond to texts immediately. They may have trouble functioning at college or work because they're consumed with worry about the family back home. They may feel they can't go on vacation, move away, or live their own life because something bad might happen to the family in their absence. This hyper-responsibility is paralyzing their ability to launch into independent adulthood.",
        parentScript:
          "I know you worry about us, and it comes from love. But the daily check-in calls aren't just checking in -- they're rituals. I'm going to call you once a week, and I'm going to be fine between calls. You don't need to monitor our safety to keep us safe -- that's not how it works. You deserve to build your own life without feeling like you're responsible for ours. Let's talk about what your therapist says about this.",
      },
    ],
    relatedSituationSlugs: ["bad-will-happen-no-ritual", "counts-repeats-prevent-bad", "confirm-stove-off"]
  },
];

// =============================================================================
// Helper Functions
// =============================================================================

export function getCategoryBySlug(slug: string): SituationCategory | undefined {
  return situationCategories.find((c) => c.slug === slug);
}

export function getSituationsByCategory(categorySlug: string): Situation[] {
  return situations.filter((s) => s.categorySlug === categorySlug);
}

export function getSituationBySlug(slug: string): Situation | undefined {
  return situations.find((s) => s.slug === slug);
}

export function getRelatedSituations(situation: Situation): Situation[] {
  return situation.relatedSituationSlugs
    .map((slug) => situations.find((s) => s.slug === slug))
    .filter((s): s is Situation => s !== undefined);
}

export function filterSituations(options: {
  search?: string;
  category?: string;
  ageRange?: AgeRange;
  severity?: Severity;
}): Situation[] {
  let results = situations;

  if (options.category) {
    results = results.filter((s) => s.categorySlug === options.category);
  }

  if (options.ageRange) {
    results = results.filter((s) => s.ageRanges.includes(options.ageRange!));
  }

  if (options.severity) {
    results = results.filter((s) => s.severity === options.severity);
  }

  if (options.search) {
    const q = options.search.toLowerCase();
    results = results.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.setup.toLowerCase().includes(q) ||
        s.ocdMechanics.toLowerCase().includes(q)
    );
  }

  return results;
}
