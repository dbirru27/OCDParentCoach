"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";

// Age groups
type AgeGroup = "4-7" | "8-12" | "13-18" | "18+";

const ageGroupMeta: Record<AgeGroup, { label: string; subtitle: string; description: string }> = {
  "4-7": {
    label: "4\u20137 years",
    subtitle: "Early Childhood",
    description: "Questions focus on observable behaviors and parent-reported patterns typical of preschool and early elementary ages.",
  },
  "8-12": {
    label: "8\u201312 years",
    subtitle: "Middle Childhood",
    description: "Questions reference school, homework, friendships, and activities common in elementary and early middle school.",
  },
  "13-18": {
    label: "13\u201318 years",
    subtitle: "Adolescence",
    description: "Questions address social media, peer relationships, texting, and teen-specific challenges. Teens may hide behaviors more.",
  },
  "18+": {
    label: "18+ years",
    subtitle: "Adult Child",
    description: "Questions address college, work, relationships, and independent living. Tailored for parents supporting an adult child.",
  },
};

// Terminology helpers
function childTerm(age: AgeGroup): string {
  if (age === "13-18") return "your teenager";
  if (age === "18+") return "your adult child";
  return "your child";
}

function childTermCap(age: AgeGroup): string {
  if (age === "13-18") return "Your teenager";
  if (age === "18+") return "Your adult child";
  return "Your child";
}

function possessiveTerm(age: AgeGroup): string {
  if (age === "13-18") return "your teen's";
  if (age === "18+") return "your adult child's";
  return "your child's";
}

// Likert options
const likertOptions = [
  { value: 0, label: "Never" },
  { value: 1, label: "Rarely (once a week or less)" },
  { value: 2, label: "Sometimes (a few times a week)" },
  { value: 3, label: "Often (daily)" },
  { value: 4, label: "Always (multiple times daily)" },
  { value: -1, label: "I\u2019m not sure" },
];

// Question with age-variant text
interface Question {
  id: string;
  domain: string;
  questionText: Record<AgeGroup, string>;
}

const questions: Question[] = [
  // ── Contamination (4) ──
  {
    id: "c1",
    domain: "contamination",
    questionText: {
      "4-7": "How often does your child wash their hands over and over, for example after touching a pet, a toy, or playground equipment?",
      "8-12": "How often does your child wash their hands excessively, such as before and after meals, after touching shared items at school, or after using school bathrooms?",
      "13-18": "How often does your teenager wash their hands excessively, use large amounts of hand sanitizer, or use their phone or sleeve to avoid touching surfaces like doorknobs or handrails?",
      "18+": "How often does your adult child wash their hands excessively, to the point where it interferes with work, cooking, or daily tasks?",
    },
  },
  {
    id: "c2",
    domain: "contamination",
    questionText: {
      "4-7": "How often does your child avoid touching things like playground equipment, other children\u2019s toys, or art supplies because they might be \u2018dirty\u2019?",
      "8-12": "How often does your child avoid touching objects at school \u2014 like cafeteria trays, library books, or bathroom doors \u2014 because they might be \u2018contaminated\u2019?",
      "13-18": "How often does your teen avoid sharing food, drinks, or personal items with friends, or refuse to use public restrooms because of contamination fears?",
      "18+": "How often does your adult child avoid sharing a kitchen or bathroom with roommates or family, or insist on disinfecting surfaces others have touched?",
    },
  },
  {
    id: "c3",
    domain: "contamination",
    questionText: {
      "4-7": "How often does your child ask you or other family members to wash your hands before touching their things, hugging them, or preparing their food?",
      "8-12": "How often does your child insist that family members follow specific cleanliness rules, like washing hands before entering their room or not sitting on their bed in outside clothes?",
      "13-18": "How often does your teenager demand that others follow specific hygiene rituals or become upset when people don\u2019t meet their cleanliness standards?",
      "18+": "How often does your adult child ask you or others to follow cleaning routines before visiting, or refuse to come home if the house hasn\u2019t been cleaned to their standards?",
    },
  },
  {
    id: "c4",
    domain: "contamination",
    questionText: {
      "4-7": "How often does your child take very long baths or showers, needing to wash the same body parts repeatedly before they feel clean?",
      "8-12": "How often does your child spend an unusually long time in the shower or bath, using excessive soap or following a rigid washing sequence?",
      "13-18": "How often does your teen take excessively long showers, use large amounts of soap or sanitizer, or shower multiple times a day due to cleanliness concerns?",
      "18+": "How often does your adult child take excessively long showers or engage in elaborate cleaning routines that significantly eat into their day?",
    },
  },
  // ── Checking (4) ──
  {
    id: "ch1",
    domain: "checking",
    questionText: {
      "4-7": "How often does your child ask you to check that the doors are locked, the lights are off, or that \u2018everything is safe\u2019 \u2014 even after you\u2019ve already checked?",
      "8-12": "How often does your child check things repeatedly \u2014 like that their homework is in their backpack, the front door is locked, or the stove is off \u2014 even after being told they\u2019re fine?",
      "13-18": "How often does your teenager check things repeatedly, such as re-reading text messages before sending, checking social media posts for mistakes, or verifying that doors and appliances are secure?",
      "18+": "How often does your adult child engage in excessive checking \u2014 like texting you repeatedly to confirm things are safe, or being unable to leave their apartment without checking locks, appliances, and windows multiple times?",
    },
  },
  {
    id: "ch2",
    domain: "checking",
    questionText: {
      "4-7": "How often does your child erase and redo drawings, writing, or coloring because it doesn\u2019t look \u2018right\u2019?",
      "8-12": "How often does your child re-read homework, re-write assignments, or redo projects because they aren\u2019t sure it was done correctly?",
      "13-18": "How often does your teen re-read essays or messages, rewrite notes, or redo assignments out of fear they\u2019ve made a mistake, even when the work is clearly correct?",
      "18+": "How often does your adult child re-read emails or work documents dozens of times, redo tasks at work or school, or struggle to submit assignments because nothing feels \u2018right enough\u2019?",
    },
  },
  {
    id: "ch3",
    domain: "checking",
    questionText: {
      "4-7": "How often does your child need you to reassure them that something is safe, turned off, or locked \u2014 asking the same question over and over?",
      "8-12": "How often does your child ask you to double-check their homework, confirm that the house is secure, or verify that nothing bad will happen?",
      "13-18": "How often does your teen ask you to confirm things are okay \u2014 like that they didn\u2019t say something wrong, that a text sounded fine, or that nothing bad will happen?",
      "18+": "How often does your adult child call or text you repeatedly to seek confirmation that things are okay, that they made the right decision, or that something bad won\u2019t happen?",
    },
  },
  {
    id: "ch4",
    domain: "checking",
    questionText: {
      "4-7": "How often does your child check their own body \u2014 looking for scratches, bumps, or signs that something is wrong \u2014 and ask you to look too?",
      "8-12": "How often does your child check their body for signs of illness, injury, or something being \u2018wrong,\u2019 such as taking their temperature repeatedly or examining small marks?",
      "13-18": "How often does your teen check their body for signs of illness, research symptoms online, or become convinced something is physically wrong despite reassurance?",
      "18+": "How often does your adult child obsessively check their body for signs of illness, schedule unnecessary medical appointments, or research symptoms for hours?",
    },
  },
  // ── Symmetry (4) ──
  {
    id: "s1",
    domain: "symmetry",
    questionText: {
      "4-7": "How often does your child line up toys, crayons, or objects in a very specific order and get upset if anyone moves them?",
      "8-12": "How often does your child need their desk, backpack, or bedroom arranged in a very specific way, and become distressed if anything is out of place?",
      "13-18": "How often does your teen need their notes, phone apps, or personal space organized in a very particular way, becoming anxious if things aren\u2019t \u2018right\u2019?",
      "18+": "How often does your adult child struggle to function if their room, workspace, or belongings aren\u2019t arranged exactly as they need them to be?",
    },
  },
  {
    id: "s2",
    domain: "symmetry",
    questionText: {
      "4-7": "How often does your child feel they need to touch, tap, or step on things with both sides of their body to feel \u2018even\u2019 \u2014 like touching a wall with both hands?",
      "8-12": "How often does your child feel they need to do things equally on both sides of their body, such as tapping with both hands or stepping evenly with both feet?",
      "13-18": "How often does your teen feel compelled to \u2018even things up\u2019 \u2014 like touching things on both sides, rewriting text to look symmetrical, or adjusting clothing until it feels balanced?",
      "18+": "How often does your adult child need physical actions, objects, or sensations to feel \u2018even\u2019 or symmetrical, to the point where it delays or disrupts their routine?",
    },
  },
  {
    id: "s3",
    domain: "symmetry",
    questionText: {
      "4-7": "How often does your child become upset or throw a tantrum if toys, shoes, or household objects are moved from their \u2018correct\u2019 spot?",
      "8-12": "How often does your child become upset if furniture, objects on shelves, or items on their desk are moved from their usual position?",
      "13-18": "How often does your teen become anxious or frustrated if someone moves their belongings, rearranges items in a shared space, or disrupts their organizational system?",
      "18+": "How often does your adult child become distressed or angry if anyone moves or rearranges objects in their living space, even slightly?",
    },
  },
  {
    id: "s4",
    domain: "symmetry",
    questionText: {
      "4-7": "How often does your child need to do things a certain number of times \u2014 like flipping a light switch, opening and closing a door, or saying something repeatedly?",
      "8-12": "How often does your child need to perform actions a specific number of times or in a specific sequence, such as re-entering a room or rewriting a word until it \u2018feels right\u2019?",
      "13-18": "How often does your teen need to do things a specific number of times or follow a rigid sequence for daily activities, like getting dressed or organizing their phone?",
      "18+": "How often does your adult child need to repeat actions a set number of times or follow rigid sequences, to the point where it significantly slows down their daily life?",
    },
  },
  // ── Intrusive thoughts (4) ──
  {
    id: "i1",
    domain: "intrusive-thoughts",
    questionText: {
      "4-7": "How often does your child seem troubled by scary thoughts, bad dreams, or fears they can\u2019t explain \u2014 even when nothing scary has happened?",
      "8-12": "How often does your child seem bothered by unwanted or \u2018scary\u2019 thoughts that they can\u2019t stop, even when they know the thoughts don\u2019t make sense?",
      "13-18": "How often does your teenager seem distressed by intrusive thoughts they describe as disturbing, violent, inappropriate, or \u2018wrong\u2019 \u2014 thoughts about harm, morality, identity, or relationships?",
      "18+": "How often does your adult child struggle with persistent intrusive thoughts about harm, morality, relationships, or identity that cause significant distress and interfere with their ability to function?",
    },
  },
  {
    id: "i2",
    domain: "intrusive-thoughts",
    questionText: {
      "4-7": "How often does your child worry that they might accidentally hurt someone, break something, or cause something bad to happen?",
      "8-12": "How often does your child worry they might accidentally hurt someone, do something wrong, or cause a bad event \u2014 even though they would never intentionally do so?",
      "13-18": "How often does your teen worry about accidentally causing harm, doing something morally wrong, or being responsible for a terrible outcome, despite having no intention or history of such behavior?",
      "18+": "How often does your adult child express intense guilt or fear about causing harm to others, making a terrible mistake, or being a \u2018bad person\u2019 \u2014 even without evidence?",
    },
  },
  {
    id: "i3",
    domain: "intrusive-thoughts",
    questionText: {
      "4-7": "How often does your child avoid certain toys, shows, places, or activities because of fears that seem out of proportion or hard to explain?",
      "8-12": "How often does your child avoid certain objects, places, TV shows, or activities because of irrational fears or \u2018what if\u2019 worries?",
      "13-18": "How often does your teen avoid certain topics, people, media, or situations because they trigger distressing intrusive thoughts?",
      "18+": "How often does your adult child avoid relationships, job opportunities, social situations, or responsibilities because of intrusive thoughts or irrational fears?",
    },
  },
  {
    id: "i4",
    domain: "intrusive-thoughts",
    questionText: {
      "4-7": "How often does your child express guilt, cry, or seem very upset about thoughts they describe as \u2018bad\u2019 or \u2018mean,\u2019 even though they haven\u2019t done anything wrong?",
      "8-12": "How often does your child express guilt or distress about thoughts they describe as \u2018wrong,\u2019 \u2018horrible,\u2019 or \u2018evil,\u2019 even when they haven\u2019t acted on them?",
      "13-18": "How often does your teen express shame, guilt, or distress about the content of their thoughts, sometimes avoiding confiding in anyone because the thoughts feel too \u2018terrible\u2019 to share?",
      "18+": "How often does your adult child isolate themselves, avoid intimacy, or withdraw from family due to shame about their intrusive thoughts?",
    },
  },
  // ── Hoarding (3) ──
  {
    id: "h1",
    domain: "hoarding",
    questionText: {
      "4-7": "How often does your child refuse to throw away broken toys, empty wrappers, or other items that most people would consider trash?",
      "8-12": "How often does your child refuse to throw away items that most people would consider useless \u2014 like old school papers, broken items, or packaging?",
      "13-18": "How often does your teen refuse to get rid of old or useless possessions, keeping items \u2018just in case\u2019 or because discarding them feels wrong?",
      "18+": "How often does your adult child accumulate excessive possessions to the point where their living space is cluttered or difficult to use?",
    },
  },
  {
    id: "h2",
    domain: "hoarding",
    questionText: {
      "4-7": "How often does your child become very upset, cry, or have a meltdown at the idea of giving away or throwing out their things?",
      "8-12": "How often does your child become very distressed at the idea of cleaning out their room, donating old toys, or getting rid of possessions?",
      "13-18": "How often does your teen become anxious or upset at the idea of decluttering, donating old clothes, or throwing away personal items?",
      "18+": "How often does your adult child become extremely distressed or refuse to discard possessions, even when the clutter creates problems in their living situation or relationships?",
    },
  },
  {
    id: "h3",
    domain: "hoarding",
    questionText: {
      "4-7": "How often does your child collect or keep large amounts of specific items \u2014 like rocks, stickers, or wrappers \u2014 insisting they might need them someday?",
      "8-12": "How often does your child collect excessive amounts of items \u2018just in case,\u2019 such as hoarding school supplies, free items, or things from the trash?",
      "13-18": "How often does your teen save excessive digital files, screenshots, or physical items because they might need them, even when the likelihood is extremely low?",
      "18+": "How often does your adult child keep excessive items, refuse to discard belongings, or become anxious about throwing things away, to the point where it affects their daily life or living space?",
    },
  },
  // ── Rituals (4) ──
  {
    id: "r1",
    domain: "rituals",
    questionText: {
      "4-7": "How often does your child perform specific bedtime routines, goodbye rituals, or daily habits that must be done in an exact way or they get very upset?",
      "8-12": "How often does your child perform specific rituals or routines that must be done in an exact order \u2014 like a precise morning routine, bedtime sequence, or way of organizing their school materials?",
      "13-18": "How often does your teen follow rigid rituals or routines \u2014 such as specific ways of getting ready, entering/leaving a room, or using their phone \u2014 that must be done \u2018perfectly\u2019?",
      "18+": "How often does your adult child follow rigid rituals that must be done in an exact sequence, such as specific routines for leaving the house, preparing food, or starting work \u2014 becoming unable to function if disrupted?",
    },
  },
  {
    id: "r2",
    domain: "rituals",
    questionText: {
      "4-7": "How often does your child need to start over from the beginning if a routine or activity wasn\u2019t done \u2018correctly\u2019 the first time?",
      "8-12": "How often does your child need to start an activity, assignment, or routine over from the beginning if it wasn\u2019t done \u2018right\u2019 the first time?",
      "13-18": "How often does your teen redo tasks, rewrite messages, or restart routines because something didn\u2019t feel \u2018right,\u2019 even if the result was perfectly fine?",
      "18+": "How often does your adult child redo tasks at work, restart routines, or rewrite communications because they weren\u2019t done \u2018correctly\u2019 \u2014 even when others see no issue?",
    },
  },
  {
    id: "r3",
    domain: "rituals",
    questionText: {
      "4-7": "How often does your child need you or other family members to participate in their rituals \u2014 like saying specific words at bedtime, closing doors a certain way, or repeating phrases?",
      "8-12": "How often does your child involve you or other family members in their rituals, such as needing you to say or do something specific, or getting upset if you don\u2019t follow their rules?",
      "13-18": "How often does your teen involve family members in their rituals or routines, requiring you to say, do, or avoid specific things to prevent their distress?",
      "18+": "How often does your adult child involve you in their rituals \u2014 such as needing you to provide reassurance in a specific way, answer the phone on a specific ring, or follow particular rules when communicating?",
    },
  },
  {
    id: "r4",
    domain: "rituals",
    questionText: {
      "4-7": "How often does your child repeat words, phrases, songs, or prayers over and over, either out loud or in a whisper?",
      "8-12": "How often does your child repeat words, phrases, or prayers silently or out loud, sometimes needing to say them a specific number of times?",
      "13-18": "How often does your teen engage in mental rituals \u2014 like repeating phrases, counting, praying, or \u2018neutralizing\u2019 bad thoughts with good ones?",
      "18+": "How often does your adult child engage in mental rituals such as repeating words, counting, or replaying conversations in their head to neutralize anxiety?",
    },
  },
  // ── Avoidance (4) ──
  {
    id: "a1",
    domain: "avoidance",
    questionText: {
      "4-7": "How often does your child avoid specific places, activities, or situations \u2014 like birthday parties, the playground, or certain rooms \u2014 because of OCD-related fears?",
      "8-12": "How often does your child avoid specific places, activities, or situations \u2014 like school field trips, friends\u2019 houses, or after-school activities \u2014 because of OCD-related fears?",
      "13-18": "How often does your teen avoid social events, parties, dating, driving, or other age-appropriate activities because of OCD-driven anxiety?",
      "18+": "How often does your adult child avoid job interviews, social gatherings, dating, traveling, or other important life activities because of OCD-related fears?",
    },
  },
  {
    id: "a2",
    domain: "avoidance",
    questionText: {
      "4-7": "How often does your child refuse to go to preschool, school, or playdates because of anxiety or fear?",
      "8-12": "How often does your child refuse to go to school, attend events, or visit friends because of anxiety that seems connected to OCD patterns?",
      "13-18": "How often does your teen miss school, skip social events, or withdraw from extracurriculars because of anxiety tied to OCD patterns?",
      "18+": "How often does your adult child miss work, drop classes, cancel plans, or stay home for extended periods because of OCD-driven anxiety?",
    },
  },
  {
    id: "a3",
    domain: "avoidance",
    questionText: {
      "4-7": "How often does your child avoid certain words, numbers, songs, or colors because they feel \u2018unlucky,\u2019 \u2018bad,\u2019 or \u2018scary\u2019?",
      "8-12": "How often does your child avoid certain words, numbers, colors, or even people because they associate them with bad luck or danger?",
      "13-18": "How often does your teen avoid specific words, numbers, topics, social media content, or people because of superstitious or OCD-driven beliefs?",
      "18+": "How often does your adult child avoid specific words, numbers, places, or topics in daily life, and expect others to accommodate these avoidances?",
    },
  },
  {
    id: "a4",
    domain: "avoidance",
    questionText: {
      "4-7": "How often does your child limit what they eat, what clothes they\u2019ll wear, or what they\u2019re willing to do because of \u2018rules\u2019 that only they follow?",
      "8-12": "How often does your child restrict what they eat, wear, or do based on private rules that don\u2019t seem connected to normal preferences?",
      "13-18": "How often does your teen restrict their diet, clothing choices, or daily activities based on rigid internal rules that seem driven by OCD rather than personal taste?",
      "18+": "How often does your adult child severely restrict their diet, clothing, routines, or lifestyle based on rigid internal rules, making independent living difficult?",
    },
  },
  // ── Impact (3) ──
  {
    id: "im1",
    domain: "impact",
    questionText: {
      "4-7": "How much do these behaviors interfere with your child\u2019s daily life \u2014 such as getting ready, playing with friends, or enjoying family activities?",
      "8-12": "How much do these behaviors interfere with your child\u2019s daily life \u2014 including school performance, friendships, and family activities?",
      "13-18": "How much do these behaviors interfere with your teen\u2019s daily life \u2014 including academics, social relationships, extracurriculars, and family dynamics?",
      "18+": "How much do these behaviors interfere with your adult child\u2019s ability to function \u2014 including holding a job, attending college, maintaining relationships, and living independently?",
    },
  },
  {
    id: "im2",
    domain: "impact",
    questionText: {
      "4-7": "How much distress do these behaviors cause your child on a typical day? (Think about crying, tantrums, or visible frustration.)",
      "8-12": "How much distress do these behaviors cause your child on a typical day? (Consider frustration, crying, anger, or withdrawal.)",
      "13-18": "How much distress do these behaviors cause your teenager on a typical day? (Consider emotional outbursts, irritability, withdrawal, or tearfulness.)",
      "18+": "How much distress do these behaviors cause your adult child on a typical day? (Consider anxiety, depression, isolation, or inability to cope with daily demands.)",
    },
  },
  {
    id: "im3",
    domain: "impact",
    questionText: {
      "4-7": "How much time per day does your child spend on these behaviors or the worries that drive them? (Include time spent in rituals, seeking reassurance, or being stuck.)",
      "8-12": "How much time per day does your child spend on these behaviors or the anxiety that drives them? (Include rituals, reassurance-seeking, avoidance, and mental effort.)",
      "13-18": "How much time per day does your teen spend on these behaviors or the anxiety behind them? (Include visible rituals, mental rituals, avoidance, and time lost to distress.)",
      "18+": "How much time per day does your adult child spend on OCD behaviors or the anxiety driving them? (Include rituals, avoidance, reassurance-seeking, and time unable to engage in productive activities.)",
    },
  },
];

const domainLabels: Record<string, string> = {
  contamination: "Contamination & Washing",
  checking: "Checking & Doubting",
  symmetry: "Symmetry & Ordering",
  "intrusive-thoughts": "Intrusive Thoughts",
  hoarding: "Hoarding",
  rituals: "Rituals & Repetition",
  avoidance: "Avoidance",
  impact: "Daily Life Impact",
};

type Severity = "minimal" | "mild" | "moderate" | "significant" | "severe";

interface DomainResult {
  domain: string;
  label: string;
  score: number;
  maxScore: number;
}

interface Result {
  overallScore: number;
  severity: Severity;
  domainResults: DomainResult[];
  interpretation: string;
  recommendations: string[];
}

function scoreAssessment(answers: Record<string, number>, ageGroup: AgeGroup): Result {
  const domains = Object.keys(domainLabels);
  const domainResults: DomainResult[] = domains.map((domain) => {
    const domainQs = questions.filter((q) => q.domain === domain);
    const maxScore = domainQs.length * 4;
    const rawScore = domainQs.reduce((sum, q) => {
      const val = answers[q.id] ?? 0;
      return sum + Math.max(0, val);
    }, 0);
    return {
      domain,
      label: domainLabels[domain],
      score: maxScore > 0 ? Math.round((rawScore / maxScore) * 100) : 0,
      maxScore,
    };
  });

  const overallScore = Math.round(
    domainResults.reduce((s, d) => s + d.score, 0) / domainResults.length
  );

  let severity: Severity;
  if (overallScore <= 15) severity = "minimal";
  else if (overallScore <= 35) severity = "mild";
  else if (overallScore <= 55) severity = "moderate";
  else if (overallScore <= 75) severity = "significant";
  else severity = "severe";

  const topDomains = [...domainResults]
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .filter((d) => d.score > 20);

  const ct = childTerm(ageGroup);
  const poss = possessiveTerm(ageGroup);
  const ctCap = childTermCap(ageGroup);

  const interpretations: Record<Severity, string> = {
    minimal:
      `Based on your responses, ${ct} is showing minimal OCD-related behaviors. This is a great sign. Keep an eye on any changes, and remember that occasional worries or habits are a normal part of development.`,
    mild:
      `${ctCap} is showing some mild OCD-related patterns. While these behaviors may not be causing major disruption yet, it\u2019s worth monitoring them and learning strategies to prevent escalation. Our Situation Library and Learning Hub have practical guidance.`,
    moderate:
      `${ctCap} is experiencing moderate OCD-related behaviors that are likely affecting their daily life. This level of impact suggests that evidence-based strategies can make a meaningful difference. Consider consulting with an OCD specialist.`,
    significant:
      `${ctCap}\u2019s OCD behaviors appear to be significantly impacting their daily functioning. We strongly recommend consulting with a mental health professional who specializes in OCD and ERP therapy. The strategies in our Situation Library can help while you seek professional support.`,
    severe:
      `${ctCap} appears to be experiencing severe OCD symptoms that are substantially interfering with daily life. Please prioritize connecting with an OCD specialist as soon as possible. Our Professional Directory can help you find qualified therapists in your area.`,
  };

  const recommendations: string[] = [];
  if (severity === "minimal" || severity === "mild") {
    recommendations.push(`Browse our Situation Library for strategies tailored to ${poss} specific behaviors.`);
    recommendations.push(ageGroup === "18+"
      ? "Read \u2018Understanding OCD\u2019 in our Learning Hub to build your knowledge."
      : "Read \u2018Understanding OCD in Children\u2019 in our Learning Hub to build your knowledge.");
    recommendations.push("Take the Parent Response Style Quiz to learn how your reactions may affect these behaviors.");
  }
  if (severity === "moderate") {
    recommendations.push("Consider scheduling a consultation with an OCD specialist \u2014 our Directory can help.");
    recommendations.push("Start with our \u2018Reducing Accommodation\u2019 learning path for practical strategies.");
    recommendations.push("Use the Progress Tracker to monitor patterns and share data with a professional.");
    recommendations.push("Take the Parent Response Style Quiz to optimize your response approach.");
  }
  if (severity === "significant" || severity === "severe") {
    recommendations.push("Find an OCD specialist in our Professional Directory \u2014 ERP therapy is the gold standard treatment.");
    recommendations.push("Use the Progress Tracker to document episodes before your first appointment.");
    recommendations.push("Browse our Situation Library for immediate strategies while awaiting professional help.");
    recommendations.push("Read about ERP in our Learning Hub so you can support treatment at home.");
    recommendations.push(`Remember: OCD is highly treatable. Seeking help is the most important step you can take.`);
  }

  if (topDomains.length > 0) {
    const domainNames = topDomains.map((d) => d.label).join(", ");
    recommendations.push(
      `${ctCap}\u2019s strongest patterns appear in: ${domainNames}. Focus on these areas first.`
    );
  }

  return {
    overallScore,
    severity,
    domainResults,
    interpretation: interpretations[severity],
    recommendations,
  };
}

const severityColors: Record<Severity, string> = {
  minimal: "text-sage-dark bg-sage/10",
  mild: "text-sage bg-sage/10",
  moderate: "text-gold bg-gold/20",
  significant: "text-terracotta bg-terracotta/10",
  severe: "text-coral bg-coral/10",
};

const severityBarColors: Record<Severity, string> = {
  minimal: "bg-sage",
  mild: "bg-sage",
  moderate: "bg-gold",
  significant: "bg-terracotta",
  severe: "bg-coral",
};

export default function ChildAssessmentPage() {
  const [ageGroup, setAgeGroup] = useState<AgeGroup | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<Result | null>(null);

  const total = questions.length;
  const progress = Math.round(
    (Object.keys(answers).length / total) * 100
  );
  const current = questions[currentQuestion];
  const currentAnswer = answers[current?.id];

  const handleAnswer = useCallback(
    (value: number) => {
      setAnswers((prev) => ({ ...prev, [current.id]: value }));
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
    if (ageGroup) {
      setResult(scoreAssessment(answers, ageGroup));
    }
  };

  const handleRetake = () => {
    setAnswers({});
    setCurrentQuestion(0);
    setResult(null);
    setAgeGroup(null);
  };

  const isLastQuestion = currentQuestion === total - 1;
  const allAnswered = Object.keys(answers).length === total;

  // ── Age selection view ──
  if (!ageGroup) {
    return (
      <div className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <Link
            href="/assessment"
            className="inline-flex items-center gap-1 text-sm text-charcoal/50 hover:text-charcoal transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to assessments
          </Link>

          <h1 className="font-serif text-3xl font-semibold text-navy">
            Child OCD Screening
          </h1>
          <p className="mt-3 text-charcoal/60 leading-relaxed">
            To give you the most relevant questions, please select the age group that best describes your child. The questions will be tailored to behaviors and situations common at that stage of development.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {(Object.keys(ageGroupMeta) as AgeGroup[]).map((ag) => {
              const meta = ageGroupMeta[ag];
              return (
                <button
                  key={ag}
                  onClick={() => setAgeGroup(ag)}
                  className="group flex flex-col items-start rounded-2xl border border-cream-dark bg-white p-6 text-left shadow-sm transition-all hover:border-sage hover:shadow-md focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2"
                >
                  <span className="inline-block rounded-lg bg-sage/10 px-3 py-1 text-sm font-semibold text-sage-dark">
                    {meta.label}
                  </span>
                  <span className="mt-3 font-serif text-lg font-semibold text-charcoal group-hover:text-navy transition-colors">
                    {meta.subtitle}
                  </span>
                  <span className="mt-2 text-sm text-charcoal/50 leading-relaxed">
                    {meta.description}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-8 rounded-xl bg-navy/5 p-5 text-center">
            <p className="text-xs text-charcoal/50 leading-relaxed">
              <strong>Note:</strong> This screening is an awareness tool, not a clinical diagnosis.
              Results can help guide conversation with a healthcare provider.
              The assessment takes approximately 8 minutes.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ── Results view ──
  if (result) {
    const resultsLabel =
      ageGroup === "18+"
        ? "Results for Your Adult Child"
        : ageGroup === "13-18"
          ? "Results for Your Teenager"
          : `Results for Your Child (ages ${ageGroupMeta[ageGroup].label})`;

    return (
      <div className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <p className="text-center text-sm text-charcoal/50 mb-2">{resultsLabel}</p>
          <h1 className="font-serif text-3xl font-semibold text-navy text-center">
            OCD IQ Results
          </h1>

          {/* Overall Score */}
          <div className="mt-10 text-center">
            <div className="inline-flex flex-col items-center rounded-2xl border border-cream-dark bg-white p-8 shadow-sm">
              <p className="text-sm text-charcoal/50">Overall OCD IQ Score</p>
              <p className="mt-2 font-mono text-6xl font-bold text-navy">
                {result.overallScore}
              </p>
              <p className="mt-1 text-sm text-charcoal/40">out of 100</p>
              <span
                className={`mt-3 rounded-full px-4 py-1 text-sm font-semibold capitalize ${severityColors[result.severity]}`}
              >
                {result.severity}
              </span>
            </div>
          </div>

          {/* Interpretation */}
          <div className="mt-8 rounded-2xl bg-cream border border-cream-dark p-6">
            <p className="text-charcoal/70 leading-relaxed">
              {result.interpretation}
            </p>
          </div>

          {/* Domain Breakdown */}
          <div className="mt-10">
            <h2 className="font-serif text-xl font-semibold text-charcoal">
              Breakdown by Domain
            </h2>
            <div className="mt-4 space-y-4">
              {result.domainResults
                .sort((a, b) => b.score - a.score)
                .map((d) => {
                  const sev: Severity =
                    d.score <= 15
                      ? "minimal"
                      : d.score <= 35
                        ? "mild"
                        : d.score <= 55
                          ? "moderate"
                          : d.score <= 75
                            ? "significant"
                            : "severe";
                  return (
                    <div key={d.domain}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-charcoal">
                          {d.label}
                        </span>
                        <span className="text-charcoal/50">{d.score}%</span>
                      </div>
                      <div className="mt-1.5 h-3 rounded-full bg-cream-dark">
                        <div
                          className={`h-3 rounded-full transition-all ${severityBarColors[sev]}`}
                          style={{ width: `${d.score}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* Recommendations */}
          <div className="mt-10">
            <h2 className="font-serif text-xl font-semibold text-charcoal">
              Recommended Next Steps
            </h2>
            <div className="mt-4 space-y-3">
              {result.recommendations.map((rec, i) => (
                <div
                  key={i}
                  className="flex gap-3 rounded-xl border border-cream-dark bg-white p-4"
                >
                  <span className="shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-sage/10 text-xs font-semibold text-sage-dark">
                    {i + 1}
                  </span>
                  <p className="text-sm text-charcoal/70 leading-relaxed">
                    {rec}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link
              href="/coach"
              className="flex-1 rounded-xl bg-sage px-6 py-3 text-center text-sm font-semibold text-white hover:bg-sage-dark transition-colors"
            >
              Talk to AI Coach About Results
            </Link>
            <Link
              href="/directory"
              className="flex-1 rounded-xl border border-sage px-6 py-3 text-center text-sm font-semibold text-sage-dark hover:bg-sage/10 transition-colors"
            >
              Find a Specialist
            </Link>
          </div>

          <div className="mt-4 flex justify-center">
            <button
              onClick={handleRetake}
              className="inline-flex items-center gap-1.5 text-sm text-charcoal/50 hover:text-charcoal transition-colors"
            >
              <RotateCcw className="h-4 w-4" />
              Retake Assessment
            </button>
          </div>

          {/* Disclaimer */}
          <div className="mt-10 rounded-xl bg-navy/5 p-5 text-center">
            <p className="text-xs text-charcoal/50 leading-relaxed">
              <strong>Important:</strong> This is not a clinical diagnosis. It is
              an awareness tool designed to help you understand patterns and have
              more informed conversations with {ageGroup === "18+" ? "your adult child\u2019s" : ageGroup === "13-18" ? "your teen\u2019s" : "your child\u2019s"} healthcare
              provider. Always consult a qualified mental health professional for
              clinical guidance.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ── Quiz view ──
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
              className="h-2 rounded-full bg-sage transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Domain label */}
        <p className="text-xs font-medium text-charcoal/40 uppercase tracking-wide">
          {domainLabels[current.domain]}
        </p>

        {/* Question */}
        <div className="mt-2 rounded-2xl border border-cream-dark bg-white p-8 shadow-sm">
          <h2 className="font-serif text-xl font-semibold text-charcoal leading-relaxed">
            {current.questionText[ageGroup]}
          </h2>

          <div className="mt-8 space-y-3">
            {likertOptions.map((option) => (
              <label
                key={option.value}
                className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition-colors ${
                  currentAnswer === option.value
                    ? "border-sage bg-sage/5"
                    : "border-cream-dark hover:border-sage/30 hover:bg-sage/5"
                }`}
              >
                <input
                  type="radio"
                  name={current.id}
                  value={option.value}
                  checked={currentAnswer === option.value}
                  onChange={() => handleAnswer(option.value)}
                  className="h-4 w-4 border-cream-dark text-sage focus:ring-sage"
                />
                <span className="text-sm text-charcoal/80">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-6 flex justify-between">
          {currentQuestion === 0 ? (
            <button
              onClick={() => setAgeGroup(null)}
              className="inline-flex items-center gap-1 rounded-xl border border-cream-dark px-5 py-3 text-sm font-medium text-charcoal/60 hover:bg-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Change Age Group
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
                  ? "bg-sage hover:bg-sage-dark"
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
                  ? "bg-sage hover:bg-sage-dark"
                  : "bg-charcoal/20 cursor-not-allowed"
              }`}
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Estimated time */}
        <p className="mt-6 text-center text-xs text-charcoal/40">
          Estimated time remaining: ~{Math.max(1, Math.ceil((total - Object.keys(answers).length) * 0.3))} minutes
        </p>
      </div>
    </div>
  );
}
