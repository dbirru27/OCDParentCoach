"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";

type ParentStyle = "accommodator" | "reassurer" | "enforcer" | "avoider" | "coach";
type AgeGroup = "4-7" | "8-12" | "13-18" | "18+";

interface Option {
  value: ParentStyle;
  label: string;
}

interface Question {
  id: string;
  scenario: string;
  options: Option[];
}

const ageGroupLabels: Record<AgeGroup, string> = {
  "4-7": "4\u20137 years",
  "8-12": "8\u201312 years",
  "13-18": "13\u201318 years",
  "18+": "18+ years (adult child)",
};

const ageGroupDescriptions: Record<AgeGroup, string> = {
  "4-7": "Young children in preschool through early elementary school",
  "8-12": "School-age children in upper elementary and middle school",
  "13-18": "Teenagers in middle school and high school",
  "18+": "Adult children living at home, in college, or newly independent",
};

// ─── SCENARIO SETS ────────────────────────────────────────────────

const questionsByAge: Record<AgeGroup, Question[]> = {
  // ══════════════════════════════════════════════════════════════
  // AGES 4-7
  // ══════════════════════════════════════════════════════════════
  "4-7": [
    {
      id: "p1",
      scenario:
        "Your child asks you to wash your hands before touching their schoolbag because it feels 'contaminated.' You:",
      options: [
        { value: "accommodator", label: "Wash your hands right away to keep the peace" },
        { value: "reassurer", label: "Tell them 'Your bag is perfectly clean, I promise'" },
        { value: "enforcer", label: "Say 'That's ridiculous, I'm not doing that'" },
        { value: "avoider", label: "Avoid touching the bag so the situation doesn't come up" },
        { value: "coach", label: "Acknowledge their worry and gently say you won't wash, but you're here to help them through the discomfort" },
      ],
    },
    {
      id: "p2",
      scenario:
        "Bedtime is taking over an hour because of your child's rituals. You:",
      options: [
        { value: "accommodator", label: "Participate in the rituals so bedtime can eventually happen" },
        { value: "reassurer", label: "Repeatedly tell them 'Everything is fine, nothing bad will happen'" },
        { value: "enforcer", label: "Set a firm timer and turn off the lights regardless" },
        { value: "avoider", label: "Let them stay up until they fall asleep on their own to skip the whole ordeal" },
        { value: "coach", label: "Work together to gradually shorten one part of the ritual at a time" },
      ],
    },
    {
      id: "p3",
      scenario:
        "Your child asks 'Are you sure the door is locked?' for the fifth time. You:",
      options: [
        { value: "accommodator", label: "Check the door again with them to ease their worry" },
        { value: "reassurer", label: "Say 'Yes, I'm 100% sure, I checked it myself'" },
        { value: "enforcer", label: "Snap 'I already told you five times! Stop asking!'" },
        { value: "avoider", label: "Pretend you didn't hear the question" },
        { value: "coach", label: "Say 'I can see OCD is bugging you about the door. What do you think we should do?'" },
      ],
    },
    {
      id: "p4",
      scenario:
        "Your child refuses to turn in their homework because it's 'not perfect.' You:",
      options: [
        { value: "accommodator", label: "Help them redo it to their satisfaction" },
        { value: "reassurer", label: "Say 'It looks perfect to me, I promise your teacher will love it'" },
        { value: "enforcer", label: "Take the homework and put it in their bag yourself" },
        { value: "avoider", label: "Email the teacher to explain and ask for an extension" },
        { value: "coach", label: "Validate their anxiety while encouraging them to turn it in as-is, then talk about how it went" },
      ],
    },
    {
      id: "p5",
      scenario:
        "Your child wants to change their outfit for the fourth time because it doesn't 'feel right.' You're about to be late. You:",
      options: [
        { value: "accommodator", label: "Let them keep changing until they find something acceptable" },
        { value: "reassurer", label: "Say 'You look great! That outfit is perfect, I promise'" },
        { value: "enforcer", label: "Tell them 'You're wearing that one and we're leaving now'" },
        { value: "avoider", label: "Lay out only one outfit choice so the situation doesn't happen" },
        { value: "coach", label: "Name the OCD ('It seems like OCD is making this hard') and encourage them to try leaving in the current outfit" },
      ],
    },
    {
      id: "p6",
      scenario:
        "Your child confesses a 'bad thought' and asks if they're a terrible person. You:",
      options: [
        { value: "accommodator", label: "Have a long discussion analyzing whether the thought is truly bad" },
        { value: "reassurer", label: "Immediately say 'Of course you're not bad! You're the best kid ever'" },
        { value: "enforcer", label: "Tell them 'Stop thinking like that, just focus on positive things'" },
        { value: "avoider", label: "Change the subject to something more pleasant" },
        { value: "coach", label: "Normalize the thought ('Everyone has weird thoughts') and resist the urge to provide extensive reassurance" },
      ],
    },
    {
      id: "p7",
      scenario:
        "The family wants to eat at a restaurant, but your child has contamination fears about restaurant food. You:",
      options: [
        { value: "accommodator", label: "Pack food from home for your child to eat at the restaurant" },
        { value: "reassurer", label: "Spend 20 minutes explaining how clean the kitchen is" },
        { value: "enforcer", label: "Tell them they have to eat the restaurant food or go hungry" },
        { value: "avoider", label: "Just eat at home so nobody has to deal with it" },
        { value: "coach", label: "Go to the restaurant together, offer support, and let them take a small step like ordering a drink or sharing a dish" },
      ],
    },
    {
      id: "p8",
      scenario:
        "Your child needs to say goodnight in a very specific way and makes you start over if you 'get it wrong.' You:",
      options: [
        { value: "accommodator", label: "Repeat the goodnight exactly as they need it, every time" },
        { value: "reassurer", label: "Say 'I love you no matter how I say goodnight'" },
        { value: "enforcer", label: "Refuse to say goodnight at all until they stop this behavior" },
        { value: "avoider", label: "Have the other parent handle bedtime instead" },
        { value: "coach", label: "Say goodnight warmly but imperfectly, then stay calm if they get upset and offer comfort" },
      ],
    },
    {
      id: "p9",
      scenario:
        "Your child asks you if they accidentally hurt someone at school today. You:",
      options: [
        { value: "accommodator", label: "Call the school to verify nobody was hurt" },
        { value: "reassurer", label: "Say 'I'm sure you didn't hurt anyone, you're so kind'" },
        { value: "enforcer", label: "Say 'You obviously didn't. Stop worrying about it'" },
        { value: "avoider", label: "Quickly redirect them to a video game or TV show" },
        { value: "coach", label: "Acknowledge the worry and say 'That sounds like an OCD question. What does your gut say?'" },
      ],
    },
    {
      id: "p10",
      scenario:
        "Your child insists everyone in the family follow their hand-washing rules before dinner. You:",
      options: [
        { value: "accommodator", label: "Follow the rules to avoid a meltdown at dinner" },
        { value: "reassurer", label: "Explain in detail how clean everyone's hands already are" },
        { value: "enforcer", label: "Refuse and tell them they can't control other people" },
        { value: "avoider", label: "Start serving everyone in separate rooms to reduce conflict" },
        { value: "coach", label: "Compassionately explain that you'll wash your hands normally, and sit with them through any discomfort" },
      ],
    },
    {
      id: "p11",
      scenario:
        "You notice your child's OCD is getting worse during a stressful week. You:",
      options: [
        { value: "accommodator", label: "Remove all sources of stress and increase accommodations until things settle" },
        { value: "reassurer", label: "Constantly tell them 'Everything will be fine, don't worry'" },
        { value: "enforcer", label: "Tell them 'You need to toughen up, everyone has stress'" },
        { value: "avoider", label: "Pretend you haven't noticed the increase" },
        { value: "coach", label: "Acknowledge the harder week, maintain your boundaries gently, and add extra connection time" },
      ],
    },
    {
      id: "p12",
      scenario:
        "Siblings are complaining that your child's rituals are affecting the whole family. You:",
      options: [
        { value: "accommodator", label: "Ask the siblings to be patient and go along with the rituals" },
        { value: "reassurer", label: "Tell the siblings 'It'll get better soon, just bear with it'" },
        { value: "enforcer", label: "Tell your OCD child that they're being unfair to the family" },
        { value: "avoider", label: "Separate the kids so they don't have to interact around the rituals" },
        { value: "coach", label: "Validate everyone's feelings, explain OCD to siblings age-appropriately, and work on reducing family-involved rituals" },
      ],
    },
    {
      id: "p13",
      scenario:
        "Your child's therapist suggests an exposure exercise that will clearly upset your child. You:",
      options: [
        { value: "accommodator", label: "Ask the therapist to try something less distressing first" },
        { value: "reassurer", label: "Tell your child 'It won't be that bad, I promise'" },
        { value: "enforcer", label: "Force them to do it immediately" },
        { value: "avoider", label: "Skip the therapy session entirely" },
        { value: "coach", label: "Support the therapeutic process, encourage your child, and trust the therapist's expertise" },
      ],
    },
    {
      id: "p14",
      scenario:
        "Your child has a meltdown because someone moved an item on their desk. You:",
      options: [
        { value: "accommodator", label: "Quickly put everything back exactly how it was" },
        { value: "reassurer", label: "Say 'It's okay, nothing bad will happen because something moved'" },
        { value: "enforcer", label: "Tell them 'It's just a desk, you're overreacting'" },
        { value: "avoider", label: "Put a 'Do Not Touch' sign on their desk so it never happens again" },
        { value: "coach", label: "Stay calm, acknowledge their distress, and sit with them as they adjust to the change" },
      ],
    },
    {
      id: "p15",
      scenario:
        "You catch yourself helping your child with a ritual without thinking. You:",
      options: [
        { value: "accommodator", label: "Continue \u2014 stopping now would be worse than finishing" },
        { value: "reassurer", label: "Tell yourself 'It's just this once, it'll be fine'" },
        { value: "enforcer", label: "Feel guilty and abruptly refuse to help mid-ritual" },
        { value: "avoider", label: "Try not to think about it" },
        { value: "coach", label: "Gently disengage, note it as something to work on, and give yourself grace" },
      ],
    },
    {
      id: "p16",
      scenario:
        "Your child won't leave for school because they need to check everything is 'safe' at home. You:",
      options: [
        { value: "accommodator", label: "Walk them through checking each room before leaving" },
        { value: "reassurer", label: "Promise them everything is safe and nothing will happen while they're gone" },
        { value: "enforcer", label: "Physically guide them out the door" },
        { value: "avoider", label: "Let them stay home today" },
        { value: "coach", label: "Acknowledge the worry, set a kind limit, and leave together with support even if they feel uncertain" },
      ],
    },
    {
      id: "p17",
      scenario:
        "Your child avoids hanging out with friends because of OCD-related fears. You:",
      options: [
        { value: "accommodator", label: "Invite friends over so your child doesn't have to go out" },
        { value: "reassurer", label: "Say 'Nothing bad will happen, your friends don't judge you'" },
        { value: "enforcer", label: "Make them go to a social event regardless of how they feel" },
        { value: "avoider", label: "Don't push it \u2014 they'll socialize when they're ready" },
        { value: "coach", label: "Brainstorm a small, manageable social step together and celebrate their courage" },
      ],
    },
    {
      id: "p18",
      scenario:
        "After a really hard OCD day, you're feeling exhausted and hopeless yourself. You:",
      options: [
        { value: "accommodator", label: "Push through and keep accommodating because your child needs you" },
        { value: "reassurer", label: "Tell yourself 'It'll get better tomorrow' and move on" },
        { value: "enforcer", label: "Get frustrated with yourself for not handling it better" },
        { value: "avoider", label: "Tune out and scroll on your phone" },
        { value: "coach", label: "Recognize your own needs, practice self-compassion, and reach out to your support system" },
      ],
    },
  ],

  // ══════════════════════════════════════════════════════════════
  // AGES 8-12
  // ══════════════════════════════════════════════════════════════
  "8-12": [
    {
      id: "p1",
      scenario:
        "Your child insists you use hand sanitizer before handing them their tablet or controller because it might be 'contaminated.' You:",
      options: [
        { value: "accommodator", label: "Sanitize your hands right away so they can relax" },
        { value: "reassurer", label: "Tell them 'The tablet is completely clean, nothing will happen'" },
        { value: "enforcer", label: "Say 'That's ridiculous, just take it'" },
        { value: "avoider", label: "Leave the tablet on the counter so you never have to hand it to them" },
        { value: "coach", label: "Acknowledge their worry and gently say you won't sanitize, but you'll sit with them through the discomfort" },
      ],
    },
    {
      id: "p2",
      scenario:
        "Your child's bedtime routine now includes 30 minutes of checking under the bed, in the closet, and that windows are locked. You:",
      options: [
        { value: "accommodator", label: "Help them check each spot so it goes faster" },
        { value: "reassurer", label: "Repeatedly tell them 'The house is safe, I promise nothing is there'" },
        { value: "enforcer", label: "Set a strict lights-out time and say the checking ends now" },
        { value: "avoider", label: "Let them check as long as they want so there's no conflict" },
        { value: "coach", label: "Work together to gradually reduce one checking step at a time, starting with the easiest" },
      ],
    },
    {
      id: "p3",
      scenario:
        "Your child keeps asking 'Did I turn off my desk lamp? Are you sure?' multiple times after going to bed. You:",
      options: [
        { value: "accommodator", label: "Go check the lamp and report back each time" },
        { value: "reassurer", label: "Say 'Yes, I'm positive, I saw it was off'" },
        { value: "enforcer", label: "Snap 'I already told you! Stop getting out of bed!'" },
        { value: "avoider", label: "Unscrew the lamp bulb so there's nothing to check" },
        { value: "coach", label: "Say 'I can see OCD is bugging you about the lamp. We already checked once \u2014 let's let that be enough tonight'" },
      ],
    },
    {
      id: "p4",
      scenario:
        "Your child erases and rewrites answers on their homework over and over because the handwriting isn't 'right.' You:",
      options: [
        { value: "accommodator", label: "Let them keep erasing until they're satisfied, even if it takes hours" },
        { value: "reassurer", label: "Say 'Your handwriting is great, your teacher won't mind'" },
        { value: "enforcer", label: "Take the eraser away and tell them to stop" },
        { value: "avoider", label: "Ask the teacher to accept typed homework so the issue doesn't come up" },
        { value: "coach", label: "Validate how frustrating it is, encourage them to move on to the next problem, and talk about what happened after" },
      ],
    },
    {
      id: "p5",
      scenario:
        "Your child insists their socks have to feel 'exactly right' and spends 20 minutes adjusting them every morning. You:",
      options: [
        { value: "accommodator", label: "Buy every brand of socks until they find the 'right' ones" },
        { value: "reassurer", label: "Say 'They feel fine, you won't notice once you start walking'" },
        { value: "enforcer", label: "Tell them 'Put on any socks and let's go, we're late'" },
        { value: "avoider", label: "Let them wear sandals year-round to skip the problem" },
        { value: "coach", label: "Acknowledge the uncomfortable feeling, set a time limit together, and encourage them to leave with the socks on even if it feels 'not right'" },
      ],
    },
    {
      id: "p6",
      scenario:
        "Your child confesses they keep having a thought about something bad happening to the family and asks if thinking it could make it come true. You:",
      options: [
        { value: "accommodator", label: "Go through an elaborate reassurance routine explaining why thoughts can't cause events" },
        { value: "reassurer", label: "Immediately say 'Thoughts can't make things happen, I promise we're all safe'" },
        { value: "enforcer", label: "Tell them 'That's silly, just stop thinking about it'" },
        { value: "avoider", label: "Change the subject quickly" },
        { value: "coach", label: "Normalize the experience ('Brains do weird things sometimes') and gently resist providing certainty" },
      ],
    },
    {
      id: "p7",
      scenario:
        "Your child won't eat lunch at school because they're worried about germs in the cafeteria. You:",
      options: [
        { value: "accommodator", label: "Pack a lunch with individually wrapped items and sanitizing wipes every day" },
        { value: "reassurer", label: "Explain in detail how the school cleans the cafeteria daily" },
        { value: "enforcer", label: "Tell them they have to eat in the cafeteria or go hungry" },
        { value: "avoider", label: "Arrange for them to eat lunch in the nurse's office" },
        { value: "coach", label: "Work together on a gradual plan: start with packed lunch at a cafeteria table, then small steps toward buying one item" },
      ],
    },
    {
      id: "p8",
      scenario:
        "Your child has a specific phrase they need to hear from you before they can fall asleep, and they make you repeat it if your tone isn't 'right.' You:",
      options: [
        { value: "accommodator", label: "Repeat it as many times as needed until they approve of the tone" },
        { value: "reassurer", label: "Say 'I love you the same no matter how I say it'" },
        { value: "enforcer", label: "Refuse to say it at all until they stop controlling how you speak" },
        { value: "avoider", label: "Record the phrase on your phone so they can play it themselves" },
        { value: "coach", label: "Say the phrase once with genuine warmth, then stay present and calm even if they want you to redo it" },
      ],
    },
    {
      id: "p9",
      scenario:
        "Your child comes home worried they said something that hurt a classmate's feelings and asks you to confirm they didn't. You:",
      options: [
        { value: "accommodator", label: "Message the other parent to check if the classmate is upset" },
        { value: "reassurer", label: "Say 'I'm sure you didn't hurt anyone, you're the nicest kid I know'" },
        { value: "enforcer", label: "Say 'You're overthinking this, just let it go'" },
        { value: "avoider", label: "Distract them with a snack or activity" },
        { value: "coach", label: "Acknowledge the worry and say 'That sounds like an OCD question. What do you think actually happened?'" },
      ],
    },
    {
      id: "p10",
      scenario:
        "Your child insists the family use specific cups and plates because the others feel 'wrong.' You:",
      options: [
        { value: "accommodator", label: "Use only the approved dishes to keep mealtimes calm" },
        { value: "reassurer", label: "Explain that all the dishes are equally safe and clean" },
        { value: "enforcer", label: "Refuse and tell them they need to eat from whatever dish you give them" },
        { value: "avoider", label: "Buy duplicates of the 'right' dishes so there are always enough" },
        { value: "coach", label: "Compassionately explain that you'll use regular dishes, and help them sit with the uncomfortable feeling" },
      ],
    },
    {
      id: "p11",
      scenario:
        "You notice your child's OCD is getting worse during a stressful week (tests, social drama). You:",
      options: [
        { value: "accommodator", label: "Remove all sources of stress and increase accommodations until things settle" },
        { value: "reassurer", label: "Constantly tell them 'Everything will be fine, don't worry'" },
        { value: "enforcer", label: "Tell them 'You need to toughen up, everyone has stress'" },
        { value: "avoider", label: "Pretend you haven't noticed the increase" },
        { value: "coach", label: "Acknowledge the harder week, maintain your boundaries gently, and add extra connection time" },
      ],
    },
    {
      id: "p12",
      scenario:
        "Siblings are complaining that your child's rituals are affecting the whole family. You:",
      options: [
        { value: "accommodator", label: "Ask the siblings to be patient and go along with the rituals" },
        { value: "reassurer", label: "Tell the siblings 'It'll get better soon, just bear with it'" },
        { value: "enforcer", label: "Tell your OCD child that they're being unfair to the family" },
        { value: "avoider", label: "Separate the kids so they don't have to interact around the rituals" },
        { value: "coach", label: "Validate everyone's feelings, explain OCD to siblings age-appropriately, and work on reducing family-involved rituals" },
      ],
    },
    {
      id: "p13",
      scenario:
        "Your child's therapist suggests an exposure exercise that will clearly upset your child. You:",
      options: [
        { value: "accommodator", label: "Ask the therapist to try something less distressing first" },
        { value: "reassurer", label: "Tell your child 'It won't be that bad, I promise'" },
        { value: "enforcer", label: "Force them to do it immediately" },
        { value: "avoider", label: "Skip the therapy session entirely" },
        { value: "coach", label: "Support the therapeutic process, encourage your child, and trust the therapist's expertise" },
      ],
    },
    {
      id: "p14",
      scenario:
        "Your child has a meltdown because a sibling rearranged the books on their shelf. You:",
      options: [
        { value: "accommodator", label: "Quickly put everything back exactly how it was" },
        { value: "reassurer", label: "Say 'It's okay, nothing bad will happen because the books moved'" },
        { value: "enforcer", label: "Tell them 'It's just a shelf, you're overreacting'" },
        { value: "avoider", label: "Put a lock on their room so nobody touches their things" },
        { value: "coach", label: "Stay calm, acknowledge their distress, and sit with them as they adjust to the change" },
      ],
    },
    {
      id: "p15",
      scenario:
        "You catch yourself helping your child with a ritual without thinking. You:",
      options: [
        { value: "accommodator", label: "Continue \u2014 stopping now would be worse than finishing" },
        { value: "reassurer", label: "Tell yourself 'It's just this once, it'll be fine'" },
        { value: "enforcer", label: "Feel guilty and abruptly refuse to help mid-ritual" },
        { value: "avoider", label: "Try not to think about it" },
        { value: "coach", label: "Gently disengage, note it as something to work on, and give yourself grace" },
      ],
    },
    {
      id: "p16",
      scenario:
        "Your child can't leave for school because they need to recheck that their backpack is packed 'correctly.' You:",
      options: [
        { value: "accommodator", label: "Unpack and repack the backpack with them" },
        { value: "reassurer", label: "Promise them everything they need is in there" },
        { value: "enforcer", label: "Take the backpack and march them to the car" },
        { value: "avoider", label: "Let them stay home today to avoid the fight" },
        { value: "coach", label: "Acknowledge the worry, set a kind limit, and head out together even if they feel uncertain" },
      ],
    },
    {
      id: "p17",
      scenario:
        "Your child avoids birthday parties and sleepovers because of OCD-related fears. You:",
      options: [
        { value: "accommodator", label: "Host every event at your house so your child can control the environment" },
        { value: "reassurer", label: "Say 'Nothing bad will happen, everyone will be nice'" },
        { value: "enforcer", label: "Drop them off at the party and leave regardless of how they feel" },
        { value: "avoider", label: "Stop RSVPing to invitations so it's not an issue" },
        { value: "coach", label: "Brainstorm a small, manageable step together \u2014 maybe attending for just an hour \u2014 and celebrate their courage" },
      ],
    },
    {
      id: "p18",
      scenario:
        "After a really hard OCD day, you're feeling exhausted and hopeless yourself. You:",
      options: [
        { value: "accommodator", label: "Push through and keep accommodating because your child needs you" },
        { value: "reassurer", label: "Tell yourself 'It'll get better tomorrow' and move on" },
        { value: "enforcer", label: "Get frustrated with yourself for not handling it better" },
        { value: "avoider", label: "Tune out and scroll on your phone" },
        { value: "coach", label: "Recognize your own needs, practice self-compassion, and reach out to your support system" },
      ],
    },
  ],

  // ══════════════════════════════════════════════════════════════
  // AGES 13-18 (TEENS)
  // ══════════════════════════════════════════════════════════════
  "13-18": [
    {
      id: "p1",
      scenario:
        "Your teen insists you wipe down their phone with disinfectant every time you touch it because it's now 'contaminated.' You:",
      options: [
        { value: "accommodator", label: "Wipe the phone down to avoid a fight" },
        { value: "reassurer", label: "Tell them 'Your phone is fine, there's nothing on it'" },
        { value: "enforcer", label: "Say 'I'm not doing that, that's absurd'" },
        { value: "avoider", label: "Make a mental note to never touch their phone again" },
        { value: "coach", label: "Acknowledge their discomfort and calmly say you won't wipe it, but you'll be there while they sit with the anxiety" },
      ],
    },
    {
      id: "p2",
      scenario:
        "Your teen can't go to sleep without spending 45 minutes checking that their phone is charging correctly, alarms are set, and notifications are configured in a specific order. You:",
      options: [
        { value: "accommodator", label: "Help them go through the checklist so they can get to sleep sooner" },
        { value: "reassurer", label: "Say 'Your phone is fine, the alarm will go off, I promise'" },
        { value: "enforcer", label: "Take their phone away at a set time, full stop" },
        { value: "avoider", label: "Let them stay up however late it takes" },
        { value: "coach", label: "Collaborate on gradually reducing the checking steps, starting with whichever feels easiest to drop" },
      ],
    },
    {
      id: "p3",
      scenario:
        "Your teen keeps re-reading their text messages to make sure they didn't accidentally say something offensive, then asks you to read the texts too. You:",
      options: [
        { value: "accommodator", label: "Read through their messages and confirm everything is fine" },
        { value: "reassurer", label: "Say 'I'm sure your texts are perfectly normal, don't worry'" },
        { value: "enforcer", label: "Tell them 'Stop obsessing over your texts, it's not normal'" },
        { value: "avoider", label: "Ignore the request and hope they drop it" },
        { value: "coach", label: "Say 'It sounds like OCD wants a second opinion. What do you think \u2014 can we let this one go without checking?'" },
      ],
    },
    {
      id: "p4",
      scenario:
        "Your teen won't submit their college application essay because they keep finding 'mistakes,' even though it's been proofread multiple times. The deadline is tomorrow. You:",
      options: [
        { value: "accommodator", label: "Proofread it one more time to help them feel confident enough to submit" },
        { value: "reassurer", label: "Say 'It's a great essay, they'll love it, I promise'" },
        { value: "enforcer", label: "Submit it for them without their permission" },
        { value: "avoider", label: "Ask the school counselor to get an extension" },
        { value: "coach", label: "Validate how high the stakes feel, remind them that 'good enough' is a skill, and encourage them to click submit while you're there for support" },
      ],
    },
    {
      id: "p5",
      scenario:
        "Your teen changes clothes multiple times before school, obsessing over how their body looks in each outfit and asking if they look 'weird.' You:",
      options: [
        { value: "accommodator", label: "Help them try on outfits and give detailed opinions on each one" },
        { value: "reassurer", label: "Say 'You look amazing, nobody is going to judge you'" },
        { value: "enforcer", label: "Say 'Pick something and go. You look fine'" },
        { value: "avoider", label: "Let them wear whatever for however long it takes, even if they're late" },
        { value: "coach", label: "Name what's happening ('I think OCD is making you doubt yourself right now') and encourage them to head out in the current outfit, checking in later about how it went" },
      ],
    },
    {
      id: "p6",
      scenario:
        "Your teen is terrified by intrusive violent thoughts and begs you to promise they're not 'becoming a dangerous person.' You:",
      options: [
        { value: "accommodator", label: "Have a lengthy conversation analyzing the thoughts and reassuring them repeatedly" },
        { value: "reassurer", label: "Immediately say 'You'd never hurt anyone, I know you, you're a good person'" },
        { value: "enforcer", label: "Tell them 'Everyone has weird thoughts, just ignore them'" },
        { value: "avoider", label: "Change the subject and hope it passes" },
        { value: "coach", label: "Validate how scary it must be, normalize intrusive thoughts as something most people experience, and gently resist providing the certainty OCD is demanding" },
      ],
    },
    {
      id: "p7",
      scenario:
        "Your teen won't eat at restaurants with friends because of contamination fears, and it's starting to isolate them socially. You:",
      options: [
        { value: "accommodator", label: "Send them with their own food in a container so they can still go" },
        { value: "reassurer", label: "Research restaurants' hygiene scores and show your teen the results" },
        { value: "enforcer", label: "Tell them they have to eat out or lose their phone privileges" },
        { value: "avoider", label: "Stop suggesting they go out with friends" },
        { value: "coach", label: "Acknowledge how hard the social impact is, and work together on a gradual plan \u2014 maybe ordering a drink first, then a side dish next time" },
      ],
    },
    {
      id: "p8",
      scenario:
        "Your teen has a texting ritual \u2014 they need to send you a specific sequence of goodnight messages and get upset if you respond 'wrong.' You:",
      options: [
        { value: "accommodator", label: "Follow the texting script exactly as they need" },
        { value: "reassurer", label: "Say 'My love for you doesn't depend on how I text goodnight'" },
        { value: "enforcer", label: "Stop responding to the goodnight texts altogether" },
        { value: "avoider", label: "Pretend you fell asleep so you don't have to participate" },
        { value: "coach", label: "Respond warmly but naturally, then stay available if they're upset \u2014 without redoing the text" },
      ],
    },
    {
      id: "p9",
      scenario:
        "Your teen is convinced they said something that will ruin a friendship and wants you to call the friend's parent to 'check.' You:",
      options: [
        { value: "accommodator", label: "Call the friend's parent to put your teen's mind at ease" },
        { value: "reassurer", label: "Say 'Your friends love you, I'm sure everything is fine'" },
        { value: "enforcer", label: "Say 'You're being dramatic, friendships don't work that way'" },
        { value: "avoider", label: "Distract them with plans for the weekend" },
        { value: "coach", label: "Acknowledge how scary it feels and say 'OCD is asking for a guarantee. Can we practice sitting with the uncertainty together?'" },
      ],
    },
    {
      id: "p10",
      scenario:
        "Your teen demands that family members shower before sitting on 'their' couch and refuses to use shared blankets. You:",
      options: [
        { value: "accommodator", label: "Have everyone shower before using the living room" },
        { value: "reassurer", label: "Explain in detail how recently everyone bathed" },
        { value: "enforcer", label: "Tell them 'This is a shared space, you don't get to make the rules'" },
        { value: "avoider", label: "Buy them their own separate blankets and cushions" },
        { value: "coach", label: "Compassionately say the family will use shared spaces normally, and offer to sit with them through the discomfort" },
      ],
    },
    {
      id: "p11",
      scenario:
        "Your teen's OCD spikes around exams and social events. During a particularly stressful week, rituals double. You:",
      options: [
        { value: "accommodator", label: "Remove all stressors \u2014 excuse them from tests and cancel plans" },
        { value: "reassurer", label: "Constantly say 'You'll ace it, everything will be fine'" },
        { value: "enforcer", label: "Tell them 'Everyone deals with stress, stop using OCD as an excuse'" },
        { value: "avoider", label: "Act like nothing unusual is happening" },
        { value: "coach", label: "Acknowledge the harder week, keep boundaries steady, and offer extra support and connection without increasing accommodations" },
      ],
    },
    {
      id: "p12",
      scenario:
        "Your teen spends 30+ minutes editing and deleting social media posts because they fear being judged or misunderstood. You:",
      options: [
        { value: "accommodator", label: "Preview and approve their posts before they publish" },
        { value: "reassurer", label: "Say 'Nobody cares that much about one post, it'll be fine'" },
        { value: "enforcer", label: "Take away their social media access" },
        { value: "avoider", label: "Pretend you don't know it's happening" },
        { value: "coach", label: "Acknowledge the fear of judgment, talk about OCD's role in perfectionism, and encourage posting without the extended editing ritual" },
      ],
    },
    {
      id: "p13",
      scenario:
        "Your teen refuses to get their driver's license because of intrusive thoughts about causing an accident. You:",
      options: [
        { value: "accommodator", label: "Drive them everywhere without pushing the issue" },
        { value: "reassurer", label: "Say 'You'll be a great driver, nothing bad will happen'" },
        { value: "enforcer", label: "Sign them up for driving lessons without asking" },
        { value: "avoider", label: "Don't mention driving and hope they bring it up when ready" },
        { value: "coach", label: "Validate how scary the thoughts are, explain that OCD latches onto things that matter, and collaborate on a gradual plan \u2014 maybe starting with sitting in the driver's seat" },
      ],
    },
    {
      id: "p14",
      scenario:
        "Your teen demands you never say certain 'triggering' words at home because hearing them causes intense distress. You:",
      options: [
        { value: "accommodator", label: "Memorize the list and avoid those words carefully" },
        { value: "reassurer", label: "Say 'Words can't actually cause anything bad to happen'" },
        { value: "enforcer", label: "Deliberately use the words to show them nothing happens" },
        { value: "avoider", label: "Avoid conversations where those words might come up" },
        { value: "coach", label: "Show compassion for how distressing it is, explain that avoiding words strengthens OCD, and gently continue using normal language while offering support" },
      ],
    },
    {
      id: "p15",
      scenario:
        "You catch yourself texting reassurances to your teen throughout the school day without them even asking. You:",
      options: [
        { value: "accommodator", label: "Keep doing it \u2014 it makes you both feel better" },
        { value: "reassurer", label: "Tell yourself 'A few texts don't hurt'" },
        { value: "enforcer", label: "Feel guilty and abruptly stop all daytime texting" },
        { value: "avoider", label: "Try not to think about the pattern" },
        { value: "coach", label: "Recognize the pattern, gradually reduce the reassurance texts, and give yourself credit for noticing" },
      ],
    },
    {
      id: "p16",
      scenario:
        "Your teen's grades are dropping because they re-read test answers dozens of times and can't finish exams. You:",
      options: [
        { value: "accommodator", label: "Request extended time on all tests so they can check as much as they need" },
        { value: "reassurer", label: "Say 'Your first answer is almost always right, just trust yourself'" },
        { value: "enforcer", label: "Tell them 'Just stop re-reading and move on, it's not that hard'" },
        { value: "avoider", label: "Don't bring up grades so it doesn't become a fight" },
        { value: "coach", label: "Work with them and their therapist on exposure practice for turning in 'imperfect' work, and coordinate with the school on appropriate support" },
      ],
    },
    {
      id: "p17",
      scenario:
        "Your teen avoids parties, social media interactions, and group activities because of OCD-related fears. You:",
      options: [
        { value: "accommodator", label: "Create a social life for them at home \u2014 host everything, control everything" },
        { value: "reassurer", label: "Say 'Everyone likes you, nobody is going to judge you'" },
        { value: "enforcer", label: "Force them to attend events regardless of their anxiety" },
        { value: "avoider", label: "Accept that they're 'introverted' and stop encouraging socializing" },
        { value: "coach", label: "Respect their autonomy while collaborating on one small social goal per week, and celebrate effort over outcome" },
      ],
    },
    {
      id: "p18",
      scenario:
        "After a really hard OCD day with your teen \u2014 arguments, tears, slammed doors \u2014 you're feeling exhausted and hopeless. You:",
      options: [
        { value: "accommodator", label: "Push through and keep accommodating because they need you" },
        { value: "reassurer", label: "Tell yourself 'It'll get better tomorrow' and move on" },
        { value: "enforcer", label: "Get frustrated with yourself for not handling it better" },
        { value: "avoider", label: "Tune out and pour a glass of wine" },
        { value: "coach", label: "Recognize your own needs, practice self-compassion, and reach out to your support system \u2014 parenting a teen with OCD is incredibly hard" },
      ],
    },
  ],

  // ══════════════════════════════════════════════════════════════
  // 18+ (ADULT CHILD)
  // ══════════════════════════════════════════════════════════════
  "18+": [
    {
      id: "p1",
      scenario:
        "Your adult child asks you to disinfect the car steering wheel before they'll drive it because it feels 'contaminated.' You:",
      options: [
        { value: "accommodator", label: "Wipe it down so they can get on with their day" },
        { value: "reassurer", label: "Tell them 'The car is totally clean, I just washed it'" },
        { value: "enforcer", label: "Say 'You're an adult, this is unreasonable'" },
        { value: "avoider", label: "Drive them yourself so the issue doesn't come up" },
        { value: "coach", label: "Acknowledge their discomfort, say you won't disinfect, and express confidence in their ability to drive despite the feeling" },
      ],
    },
    {
      id: "p2",
      scenario:
        "Your adult child can't fall asleep without calling you to say goodnight in a very specific way, even though they live at college. If you miss the call, they'll call back repeatedly. You:",
      options: [
        { value: "accommodator", label: "Always answer, no matter how late, and follow the script" },
        { value: "reassurer", label: "Say 'You're safe, your dorm is safe, everything is fine'" },
        { value: "enforcer", label: "Tell them 'You're 20 years old, this has to stop'" },
        { value: "avoider", label: "Turn off your phone at 10pm and not address it" },
        { value: "coach", label: "Have an honest conversation about gradually reducing the calls, starting with shortening them, while affirming your love doesn't depend on the ritual" },
      ],
    },
    {
      id: "p3",
      scenario:
        "Your adult child calls you multiple times daily from their apartment to confirm they turned off the stove, locked the door, or unplugged the iron. You:",
      options: [
        { value: "accommodator", label: "Answer every call and confirm everything is safe" },
        { value: "reassurer", label: "Say 'I'm sure you turned it off, you always do'" },
        { value: "enforcer", label: "Say 'Stop calling me about this. You're a grown adult'" },
        { value: "avoider", label: "Stop answering calls during the day" },
        { value: "coach", label: "Express that you love them, explain that answering feeds the OCD, and agree together on a plan to reduce the calls gradually" },
      ],
    },
    {
      id: "p4",
      scenario:
        "Your adult child can't finish work projects because every email and document has to be 'perfect.' They're at risk of losing their job. You:",
      options: [
        { value: "accommodator", label: "Proofread their work emails and documents for them" },
        { value: "reassurer", label: "Say 'Your work is always great, just send it'" },
        { value: "enforcer", label: "Say 'If you lose your job, that's on you'" },
        { value: "avoider", label: "Don't bring up their work situation" },
        { value: "coach", label: "Validate how stressful it is, encourage them to work with their therapist on this, and resist stepping in to do the checking for them" },
      ],
    },
    {
      id: "p5",
      scenario:
        "Your adult child spends over an hour getting ready every morning because their appearance has to look 'exactly right' before they can leave the house, and they're frequently late to work. You:",
      options: [
        { value: "accommodator", label: "Help them pick outfits and approve how they look" },
        { value: "reassurer", label: "Say 'You look great, just go, nobody will notice'" },
        { value: "enforcer", label: "Say 'If you're late again, you're paying rent starting next month'" },
        { value: "avoider", label: "Don't comment on the morning routine at all" },
        { value: "coach", label: "Express concern about the impact on their life, support their autonomy, and encourage them to practice leaving 'imperfect' with therapeutic support" },
      ],
    },
    {
      id: "p6",
      scenario:
        "Your adult child asks you to confirm they're not a bad person after reading a disturbing news article. They've asked three times today. You:",
      options: [
        { value: "accommodator", label: "Provide a detailed explanation of why they're a good person, each time" },
        { value: "reassurer", label: "Say 'Of course you're a good person, you always have been'" },
        { value: "enforcer", label: "Say 'Stop reading the news if it bothers you this much'" },
        { value: "avoider", label: "Hide newspapers and block news sites on the home network" },
        { value: "coach", label: "Acknowledge the distress, note that this is an OCD pattern you've both seen before, and gently decline to provide the reassurance while staying emotionally available" },
      ],
    },
    {
      id: "p7",
      scenario:
        "Your adult child can't prepare their own food due to contamination fears and expects you to cook all their meals, even though they're 24. You:",
      options: [
        { value: "accommodator", label: "Cook all their meals \u2014 at least they're eating" },
        { value: "reassurer", label: "Explain how clean the kitchen is and how safe the food is" },
        { value: "enforcer", label: "Tell them 'You need to cook for yourself, I'm done enabling this'" },
        { value: "avoider", label: "Just keep cooking without acknowledging why" },
        { value: "coach", label: "Have a compassionate conversation about gradually building their independence \u2014 maybe starting with preparing a snack together \u2014 and connect this to their treatment goals" },
      ],
    },
    {
      id: "p8",
      scenario:
        "Your adult child calls every night from their apartment for a 45-minute 'debrief' where they need you to confirm nothing bad happened during the day. You:",
      options: [
        { value: "accommodator", label: "Take the call every night and go through the full debrief" },
        { value: "reassurer", label: "Say 'Nothing bad happened, you're safe, everyone is fine'" },
        { value: "enforcer", label: "Tell them 'I'm not doing this anymore' and hang up" },
        { value: "avoider", label: "Screen the calls and sometimes don't pick up" },
        { value: "coach", label: "Discuss the pattern openly, agree together on a plan to shorten and reduce these calls, and express love while setting a boundary" },
      ],
    },
    {
      id: "p9",
      scenario:
        "Your adult child is terrified they might have caused harm to a coworker and asks you to help them analyze every interaction from the day. You:",
      options: [
        { value: "accommodator", label: "Go through the day's interactions in detail, helping them feel sure" },
        { value: "reassurer", label: "Say 'You've never hurt anyone, you're a wonderful person'" },
        { value: "enforcer", label: "Say 'This is ridiculous. Of course you didn't hurt anyone'" },
        { value: "avoider", label: "Change the subject immediately" },
        { value: "coach", label: "Acknowledge how distressing the uncertainty feels, name it as an OCD pattern, and lovingly decline to do the analysis together" },
      ],
    },
    {
      id: "p10",
      scenario:
        "Your adult child expects you to keep doing their laundry because they can't touch 'contaminated' clothes. You:",
      options: [
        { value: "accommodator", label: "Continue doing their laundry \u2014 it's easier than the alternative" },
        { value: "reassurer", label: "Explain how hot the washer gets and how clean the clothes come out" },
        { value: "enforcer", label: "Tell them 'You're doing your own laundry starting today, end of discussion'" },
        { value: "avoider", label: "Keep doing it without addressing the underlying issue" },
        { value: "coach", label: "Express that you want to support their independence, propose a gradual plan (maybe starting with loading the washer together), and tie it to their recovery goals" },
      ],
    },
    {
      id: "p11",
      scenario:
        "Your adult child's OCD flares during a major life transition (new job, breakup, move). Rituals that had improved are suddenly back in full force. You:",
      options: [
        { value: "accommodator", label: "Re-accommodate everything \u2014 they're going through a lot" },
        { value: "reassurer", label: "Say 'It's temporary, everything will settle down soon'" },
        { value: "enforcer", label: "Say 'You were doing so well, you can't let yourself slide'" },
        { value: "avoider", label: "Pretend you haven't noticed the regression" },
        { value: "coach", label: "Acknowledge the difficulty of transitions, hold your boundaries with extra warmth, and encourage them to reconnect with their therapist" },
      ],
    },
    {
      id: "p12",
      scenario:
        "Your adult child moved back home because they couldn't maintain their apartment due to contamination fears. You:",
      options: [
        { value: "accommodator", label: "Welcome them home and follow all their contamination rules in the house" },
        { value: "reassurer", label: "Say 'It's fine, lots of people move back home, you'll get back out there'" },
        { value: "enforcer", label: "Tell them they have 30 days to get back to their apartment" },
        { value: "avoider", label: "Let them live at home indefinitely without discussing treatment" },
        { value: "coach", label: "Welcome them with love AND set clear expectations about treatment engagement, gradual exposure goals, and a timeline for rebuilding independence" },
      ],
    },
    {
      id: "p13",
      scenario:
        "Your adult child's therapist asks you to stop participating in rituals, but your child begs you not to change. You:",
      options: [
        { value: "accommodator", label: "Side with your child \u2014 the therapist doesn't see how bad it gets" },
        { value: "reassurer", label: "Tell your child 'We'll take it slow, it'll be okay'" },
        { value: "enforcer", label: "Immediately stop all accommodations cold turkey" },
        { value: "avoider", label: "Agree with the therapist but don't actually change anything" },
        { value: "coach", label: "Trust the therapeutic process, collaborate with the therapist on a gradual plan, and reassure your adult child that you're doing this because you believe in their ability to recover" },
      ],
    },
    {
      id: "p14",
      scenario:
        "Your adult child can't hold a job because rituals make them late every day. They ask you for money instead of working. You:",
      options: [
        { value: "accommodator", label: "Give them money \u2014 at least it reduces their stress" },
        { value: "reassurer", label: "Say 'You'll find the right job eventually, don't worry about money'" },
        { value: "enforcer", label: "Cut them off financially and tell them to figure it out" },
        { value: "avoider", label: "Keep giving money without talking about the OCD pattern" },
        { value: "coach", label: "Express love and concern, tie financial support to active treatment engagement, and work together on a plan to address the rituals causing lateness" },
      ],
    },
    {
      id: "p15",
      scenario:
        "You realize you've been accommodating your adult child's OCD for years and it's become your whole life too. You:",
      options: [
        { value: "accommodator", label: "Keep going \u2014 they need you, and who would help them otherwise?" },
        { value: "reassurer", label: "Tell yourself 'It'll get better someday'" },
        { value: "enforcer", label: "Feel angry at yourself for letting it get this far" },
        { value: "avoider", label: "Try not to think about it" },
        { value: "coach", label: "Recognize this as a turning point, seek your own support (therapist, support group), and start making small changes with professional guidance" },
      ],
    },
    {
      id: "p16",
      scenario:
        "Your adult child won't go to their college classes or job because they feel responsible for keeping the family safe through rituals at home. You:",
      options: [
        { value: "accommodator", label: "Let them stay home \u2014 at least the rituals give them a sense of control" },
        { value: "reassurer", label: "Say 'The family is safe, you don't need to protect us'" },
        { value: "enforcer", label: "Say 'You're going to work/school whether you like it or not'" },
        { value: "avoider", label: "Don't bring up their attendance" },
        { value: "coach", label: "Gently name the pattern, express confidence in their ability to leave, and encourage them to work with their therapist on this specific fear" },
      ],
    },
    {
      id: "p17",
      scenario:
        "Your adult child avoids dating, workplace socializing, and friendships because of OCD-related fears. They're increasingly isolated. You:",
      options: [
        { value: "accommodator", label: "Become their primary social outlet so they're not completely alone" },
        { value: "reassurer", label: "Say 'The right people will accept you, just give it time'" },
        { value: "enforcer", label: "Set up dates or social events for them without asking" },
        { value: "avoider", label: "Accept that they're 'just not social' and stop worrying about it" },
        { value: "coach", label: "Express concern about the isolation, respect their autonomy, and encourage them to address social avoidance as a therapy goal" },
      ],
    },
    {
      id: "p18",
      scenario:
        "After another exhausting day of managing your adult child's OCD \u2014 the calls, the rituals, the guilt \u2014 you're feeling burned out and wondering if this will ever change. You:",
      options: [
        { value: "accommodator", label: "Push through \u2014 they're your child no matter how old they are" },
        { value: "reassurer", label: "Tell yourself 'Tomorrow will be better' and keep going" },
        { value: "enforcer", label: "Get angry at yourself, at them, at the situation" },
        { value: "avoider", label: "Pour a drink and zone out" },
        { value: "coach", label: "Recognize that your wellbeing matters too, reach out to a support group or therapist, and remember that setting boundaries is an act of love for both of you" },
      ],
    },
  ],
};

const styleLabels: Record<ParentStyle, string> = {
  accommodator: "The Accommodator",
  reassurer: "The Reassurer",
  enforcer: "The Enforcer",
  avoider: "The Avoider",
  coach: "The Coach",
};

const styleColors: Record<ParentStyle, string> = {
  accommodator: "bg-terracotta/10 text-terracotta border-terracotta/20",
  reassurer: "bg-gold/20 text-charcoal border-gold/30",
  enforcer: "bg-coral/10 text-coral border-coral/20",
  avoider: "bg-navy/10 text-navy border-navy/20",
  coach: "bg-sage/10 text-sage-dark border-sage/20",
};

const styleBarColors: Record<ParentStyle, string> = {
  accommodator: "bg-terracotta",
  reassurer: "bg-gold",
  enforcer: "bg-coral",
  avoider: "bg-navy",
  coach: "bg-sage",
};

const styleDescriptions: Record<ParentStyle, string> = {
  accommodator:
    "You tend to help your child complete rituals, avoid triggers, or change family routines to reduce their distress. This comes from a place of deep love, but it inadvertently tells OCD that the fear is justified and the ritual is necessary.",
  reassurer:
    "You tend to provide verbal comfort and certainty when your child is anxious. While reassurance feels helpful in the moment, it becomes its own compulsion \u2014 your child needs more and more of it, and it never truly satisfies OCD.",
  enforcer:
    "You tend to take a firm, no-nonsense approach to OCD behaviors. While boundaries are important, forcing a child to stop without support can increase shame and anxiety, making OCD worse rather than better.",
  avoider:
    "You tend to steer around OCD triggers entirely \u2014 avoiding places, situations, or conversations that might set things off. While this reduces short-term conflict, it shrinks your child's world and strengthens OCD's grip.",
  coach:
    "You tend to acknowledge your child's feelings while gently encouraging them to face their fears. This is the approach most aligned with ERP principles and gives your child the best foundation for overcoming OCD.",
};

const styleSuggestions: Record<ParentStyle, string[]> = {
  accommodator: [
    "Start small: pick ONE accommodation to gradually reduce this week. Don't try to eliminate everything at once.",
    "Give your child advance notice: 'Starting tomorrow, I'm going to stop checking the locks for you. I know this will be hard, and I'll be right here.'",
    "Read our 'Reducing Accommodation' learning path for a step-by-step approach.",
    "Remember: short-term discomfort leads to long-term freedom. You're not being cruel \u2014 you're being brave for your child.",
    "Track which accommodations you provide using the Progress Tracker to build awareness.",
  ],
  reassurer: [
    "Practice brief, caring responses that don't provide certainty: 'That sounds like an OCD question. What do you think?'",
    "Set a compassionate limit: 'I've answered that once, and I can see OCD wants me to answer again. I'm going to resist that.'",
    "Read 'Reassurance Seeking: Breaking the Cycle' in our Learning Hub.",
    "Replace reassurance with connection: a hug, sitting together quietly, or changing the subject gently.",
    "It's okay to say: 'I love you, and I'm not going to answer OCD's question. Let's ride this wave together.'",
  ],
  enforcer: [
    "Add empathy before boundaries: 'I can see this is really hard for you, AND we're going to get through this together.'",
    "Separate your child from the OCD: say 'I know this isn't what you want \u2014 it's what OCD wants' instead of criticizing the behavior.",
    "Learn about ERP in our Learning Hub \u2014 it shows how to set limits that are therapeutic, not punitive.",
    "Give your child choices within limits rather than commands: 'Would you like to try the shorter version or skip the ritual tonight?'",
    "Practice self-regulation first \u2014 when you're calm, your child can borrow your calm.",
  ],
  avoider: [
    "Start with one small trigger you've been avoiding and make a plan to gradually reintroduce it.",
    "Notice when you're rearranging life around OCD and ask: 'Is this helping my child get better, or keeping them stuck?'",
    "Connect with other parents in our Community Forum who understand the avoidance trap.",
    "Read 'The Accommodation Cycle' in our Learning Hub to understand why avoidance maintains OCD.",
    "Work with a therapist to build a gradual exposure plan \u2014 you don't have to figure this out alone.",
  ],
  coach: [
    "Keep doing what you're doing \u2014 your approach aligns beautifully with evidence-based OCD treatment.",
    "Continue learning about ERP so you can support your child's therapy at home.",
    "Share your strategies with your partner or co-parent so your child gets consistent responses.",
    "Take care of yourself \u2014 coaching through OCD is emotionally demanding, and you deserve support too.",
    "Explore our Situation Library for specific strategies you can add to your toolkit.",
  ],
};

interface StyleScore {
  style: ParentStyle;
  label: string;
  count: number;
  percentage: number;
  description: string;
}

interface Result {
  dominant: ParentStyle;
  scores: StyleScore[];
  interpretation: string;
  suggestions: string[];
}

function scoreAssessment(answers: Record<string, ParentStyle>): Result {
  const counts: Record<ParentStyle, number> = {
    accommodator: 0,
    reassurer: 0,
    enforcer: 0,
    avoider: 0,
    coach: 0,
  };

  Object.values(answers).forEach((style) => {
    counts[style]++;
  });

  const total = Object.values(answers).length;
  const styles: ParentStyle[] = ["accommodator", "reassurer", "enforcer", "avoider", "coach"];

  const scores: StyleScore[] = styles
    .map((style) => ({
      style,
      label: styleLabels[style],
      count: counts[style],
      percentage: Math.round((counts[style] / total) * 100),
      description: styleDescriptions[style],
    }))
    .sort((a, b) => b.count - a.count);

  const dominant = scores[0].style;

  let interpretation: string;
  if (dominant === "coach") {
    interpretation =
      "Great news \u2014 your dominant response style is the Coach. This means you're already approaching your child's OCD in a way that's well-aligned with evidence-based treatment. You balance empathy with gentle encouragement to face fears, which is exactly what ERP research supports.";
  } else {
    const dominantLabel = styleLabels[dominant];
    const coachScore = scores.find((s) => s.style === "coach")!;
    interpretation = `Your dominant response style is ${dominantLabel}. ${styleDescriptions[dominant]} The good news? You also showed Coach-style responses ${coachScore.percentage}% of the time \u2014 so the foundation is there. Most parents naturally fall into ${dominantLabel.toLowerCase().replace("the ", "")} patterns because they come from a place of love. With awareness and practice, you can shift more responses toward the Coach style.`;
  }

  return {
    dominant,
    scores,
    interpretation,
    suggestions: styleSuggestions[dominant],
  };
}

export default function ParentAssessmentPage() {
  const [ageGroup, setAgeGroup] = useState<AgeGroup | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, ParentStyle>>({});
  const [result, setResult] = useState<Result | null>(null);

  const questions = ageGroup ? questionsByAge[ageGroup] : [];
  const total = questions.length;
  const progress = total > 0 ? Math.round((Object.keys(answers).length / total) * 100) : 0;
  const current = questions[currentQuestion];
  const currentAnswer = current ? answers[current.id] : undefined;

  const handleAnswer = useCallback(
    (value: ParentStyle) => {
      if (current) {
        setAnswers((prev) => ({ ...prev, [current.id]: value }));
      }
    },
    [current]
  );

  const goNext = () => {
    if (currentQuestion < total - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const goPrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    setResult(scoreAssessment(answers));
  };

  const handleRetake = () => {
    setAgeGroup(null);
    setAnswers({});
    setCurrentQuestion(0);
    setResult(null);
  };

  const handleAgeSelect = (age: AgeGroup) => {
    setAgeGroup(age);
    setAnswers({});
    setCurrentQuestion(0);
    setResult(null);
  };

  const isLastQuestion = currentQuestion === total - 1;
  const allAnswered = Object.keys(answers).length === total;

  // Results view
  if (result) {
    return (
      <div className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <h1 className="font-serif text-3xl font-semibold text-navy text-center">
            Your Response Style Results
          </h1>

          {/* Dominant Style */}
          <div className="mt-10 text-center">
            <div
              className={`inline-flex flex-col items-center rounded-2xl border p-8 shadow-sm ${styleColors[result.dominant]}`}
            >
              <p className="text-sm opacity-70">Your Dominant Style</p>
              <p className="mt-2 font-serif text-3xl font-bold">
                {styleLabels[result.dominant]}
              </p>
            </div>
          </div>

          {/* Zero-judgment note */}
          <div className="mt-6 rounded-xl bg-cream border border-cream-dark p-4 text-center">
            <p className="text-sm text-charcoal/60 italic">
              There&apos;s no wrong answer here. Most parents naturally fall into patterns
              that come from love. Understanding your style is the first step to
              supporting your child more effectively.
            </p>
          </div>

          {/* Interpretation */}
          <div className="mt-8 rounded-2xl bg-white border border-cream-dark p-6">
            <p className="text-charcoal/70 leading-relaxed">
              {result.interpretation}
            </p>
          </div>

          {/* Style Breakdown */}
          <div className="mt-10">
            <h2 className="font-serif text-xl font-semibold text-charcoal">
              Your Style Breakdown
            </h2>
            <div className="mt-4 space-y-4">
              {result.scores.map((s) => (
                <div key={s.style}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-charcoal">{s.label}</span>
                    <span className="text-charcoal/50">
                      {s.count}/{total} ({s.percentage}%)
                    </span>
                  </div>
                  <div className="mt-1.5 h-3 rounded-full bg-cream-dark">
                    <div
                      className={`h-3 rounded-full transition-all ${styleBarColors[s.style]}`}
                      style={{ width: `${s.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Style Descriptions */}
          <div className="mt-10">
            <h2 className="font-serif text-xl font-semibold text-charcoal">
              Understanding Each Style
            </h2>
            <div className="mt-4 space-y-3">
              {result.scores.map((s) => (
                <details
                  key={s.style}
                  className={`rounded-xl border p-4 ${
                    s.style === result.dominant
                      ? styleColors[s.style]
                      : "border-cream-dark bg-white"
                  }`}
                >
                  <summary className="cursor-pointer text-sm font-semibold">
                    {s.label}{" "}
                    {s.style === result.dominant && (
                      <span className="text-xs font-normal opacity-70">
                        (your dominant style)
                      </span>
                    )}
                  </summary>
                  <p className="mt-2 text-sm text-charcoal/60 leading-relaxed">
                    {s.description}
                  </p>
                </details>
              ))}
            </div>
          </div>

          {/* Suggestions */}
          <div className="mt-10">
            <h2 className="font-serif text-xl font-semibold text-charcoal">
              {result.dominant === "coach"
                ? "Keep Going: Tips for Coaches"
                : "Shifting Toward the Coach Style"}
            </h2>
            <div className="mt-4 space-y-3">
              {result.suggestions.map((suggestion, i) => (
                <div
                  key={i}
                  className="flex gap-3 rounded-xl border border-cream-dark bg-white p-4"
                >
                  <span className="shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-sage/10 text-xs font-semibold text-sage-dark">
                    {i + 1}
                  </span>
                  <p className="text-sm text-charcoal/70 leading-relaxed">
                    {suggestion}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link
              href="/situations"
              className="flex-1 rounded-xl bg-sage px-6 py-3 text-center text-sm font-semibold text-white hover:bg-sage-dark transition-colors"
            >
              Browse Situation Library
            </Link>
            <Link
              href="/assessment/child"
              className="flex-1 rounded-xl border border-sage px-6 py-3 text-center text-sm font-semibold text-sage-dark hover:bg-sage/10 transition-colors"
            >
              Take Child OCD Screening
            </Link>
          </div>

          <div className="mt-4 flex justify-center">
            <button
              onClick={handleRetake}
              className="inline-flex items-center gap-1.5 text-sm text-charcoal/50 hover:text-charcoal transition-colors"
            >
              <RotateCcw className="h-4 w-4" />
              Retake Quiz
            </button>
          </div>

          {/* Disclaimer */}
          <div className="mt-10 rounded-xl bg-navy/5 p-5 text-center">
            <p className="text-xs text-charcoal/50 leading-relaxed">
              This quiz is an awareness tool, not a clinical assessment. It&apos;s
              designed to help you reflect on your response patterns and find
              areas for growth. Always consult a qualified OCD therapist for
              personalized guidance.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Age group selection screen
  if (!ageGroup) {
    return (
      <div className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-xl">
          <Link
            href="/assessment"
            className="inline-flex items-center gap-1 text-sm text-charcoal/50 hover:text-charcoal transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Assessments
          </Link>

          <h1 className="mt-6 font-serif text-3xl font-semibold text-navy">
            Parent Response Style Quiz
          </h1>
          <p className="mt-3 text-charcoal/60 leading-relaxed">
            This quiz uses age-appropriate scenarios to help you understand how
            you typically respond to your child&apos;s OCD. Select your child&apos;s age
            group so the scenarios feel relevant to your experience.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {(["4-7", "8-12", "13-18", "18+"] as AgeGroup[]).map((age) => (
              <button
                key={age}
                onClick={() => handleAgeSelect(age)}
                className="group flex flex-col items-start rounded-2xl border border-cream-dark bg-white p-6 text-left shadow-sm transition-all hover:border-terracotta/40 hover:shadow-md"
              >
                <span className="inline-flex items-center justify-center rounded-xl bg-terracotta/10 px-3 py-1.5 text-sm font-semibold text-terracotta">
                  {ageGroupLabels[age]}
                </span>
                <p className="mt-3 text-sm text-charcoal/60 leading-relaxed">
                  {ageGroupDescriptions[age]}
                </p>
                <span className="mt-4 text-xs font-medium text-terracotta opacity-0 transition-opacity group-hover:opacity-100">
                  Select this age group &rarr;
                </span>
              </button>
            ))}
          </div>

          <div className="mt-8 rounded-xl bg-cream border border-cream-dark p-4 text-center">
            <p className="text-sm text-charcoal/60 italic">
              18 scenario-based questions. Takes about 5 minutes. No wrong
              answers — this is about understanding your patterns, not judging
              them.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Quiz view
  return (
    <div className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-xl">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-sm text-charcoal/50">
            <span>
              Question {currentQuestion + 1} of {total}
            </span>
            <span>{progress}% complete</span>
          </div>
          <div className="mt-2 h-2 rounded-full bg-cream-dark">
            <div
              className="h-2 rounded-full bg-terracotta transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-xs text-charcoal/40">
              Age group: {ageGroupLabels[ageGroup]}
            </span>
            <button
              onClick={() => {
                setAgeGroup(null);
                setAnswers({});
                setCurrentQuestion(0);
              }}
              className="text-xs text-terracotta/70 hover:text-terracotta transition-colors"
            >
              Change age group
            </button>
          </div>
        </div>

        {/* Question */}
        <div className="rounded-2xl border border-cream-dark bg-white p-8 shadow-sm">
          <h2 className="font-serif text-lg font-semibold text-charcoal leading-relaxed">
            {current.scenario}
          </h2>

          <div className="mt-6 space-y-3">
            {current.options.map((option) => (
              <label
                key={option.value}
                className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors ${
                  currentAnswer === option.value
                    ? "border-terracotta bg-terracotta/5"
                    : "border-cream-dark hover:border-terracotta/30 hover:bg-terracotta/5"
                }`}
              >
                <input
                  type="radio"
                  name={current.id}
                  value={option.value}
                  checked={currentAnswer === option.value}
                  onChange={() => handleAnswer(option.value)}
                  className="mt-0.5 h-4 w-4 border-cream-dark text-terracotta focus:ring-terracotta"
                />
                <span className="text-sm text-charcoal/80 leading-relaxed">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-6 flex justify-between">
          {currentQuestion === 0 ? (
            <button
              onClick={() => {
                setAgeGroup(null);
                setAnswers({});
                setCurrentQuestion(0);
              }}
              className="inline-flex items-center gap-1 rounded-xl border border-cream-dark px-5 py-3 text-sm font-medium text-charcoal/60 hover:bg-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>
          ) : (
            <button
              onClick={goPrev}
              className="inline-flex items-center gap-1 rounded-xl border border-cream-dark px-5 py-3 text-sm font-medium text-charcoal/60 hover:bg-white transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </button>
          )}

          {isLastQuestion ? (
            <button
              onClick={handleSubmit}
              disabled={!allAnswered}
              className={`rounded-xl px-6 py-3 text-sm font-semibold text-white transition-colors ${
                allAnswered
                  ? "bg-terracotta hover:bg-terracotta-dark"
                  : "bg-charcoal/20 cursor-not-allowed"
              }`}
            >
              See Results
            </button>
          ) : (
            <button
              onClick={goNext}
              disabled={currentAnswer === undefined}
              className={`inline-flex items-center gap-1 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-colors ${
                currentAnswer !== undefined
                  ? "bg-terracotta hover:bg-terracotta-dark"
                  : "bg-charcoal/20 cursor-not-allowed"
              }`}
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>

        <p className="mt-6 text-center text-xs text-charcoal/40">
          Estimated time remaining: ~{Math.max(1, Math.ceil((total - Object.keys(answers).length) * 0.3))} minutes
        </p>
      </div>
    </div>
  );
}
