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

// Deterministic shuffle using question id as seed
function seededShuffle<T>(array: T[], seed: string): T[] {
  const result = [...array];
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = ((hash << 5) - hash + seed.charCodeAt(i)) | 0;
  }
  for (let i = result.length - 1; i > 0; i--) {
    hash = ((hash << 5) - hash + i) | 0;
    const j = ((hash < 0 ? -hash : hash) % (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
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
        { value: "accommodator", label: "Wash your hands quickly — it's easier and stops the crying before it starts" },
        { value: "reassurer", label: "Tell them 'Your bag is perfectly clean, I checked it myself, I promise'" },
        { value: "enforcer", label: "Say 'That doesn't make sense, I'm not doing that'" },
        { value: "avoider", label: "Make a habit of not touching the bag so the whole thing never comes up" },
        { value: "coach", label: "Sit with them through the worry without washing — you'll both get through it" },
      ],
    },
    {
      id: "p2",
      scenario:
        "Bedtime is taking over an hour because of your child's rituals. You:",
      options: [
        { value: "accommodator", label: "Go along with the rituals step by step so sleep can eventually happen" },
        { value: "reassurer", label: "Keep saying 'Everything is okay, nothing bad will happen tonight'" },
        { value: "enforcer", label: "Set a hard timer and turn the lights off when it goes" },
        { value: "avoider", label: "Let them stay up until they crash on their own — at least there's no fight" },
        { value: "coach", label: "Pick one part of the routine to shorten together, starting small" },
      ],
    },
    {
      id: "p3",
      scenario:
        "Your child asks 'Are you sure the door is locked?' for the fifth time. You:",
      options: [
        { value: "accommodator", label: "Go check the door one more time with them to settle the worry" },
        { value: "reassurer", label: "Say 'Yes I'm completely sure — I double-checked it myself'" },
        { value: "enforcer", label: "Snap 'I already told you five times, enough is enough!'" },
        { value: "avoider", label: "Pretend you didn't hear and hope they move on" },
        { value: "coach", label: "Say 'The worry is bugging you again — what do you think we should do?'" },
      ],
    },
    {
      id: "p4",
      scenario:
        "Your child refuses to turn in their homework because it's 'not perfect.' You:",
      options: [
        { value: "accommodator", label: "Sit down and help them redo it until it feels right to them" },
        { value: "reassurer", label: "Say 'It looks perfect to me and your teacher will think so too, I promise'" },
        { value: "enforcer", label: "Put the homework in their bag yourself — it's going in either way" },
        { value: "avoider", label: "Email the teacher to explain the situation and ask for extra time" },
        { value: "coach", label: "Let them know it's hard, then encourage turning it in as-is" },
      ],
    },
    {
      id: "p5",
      scenario:
        "Your child wants to change their outfit for the fourth time because it doesn't 'feel right.' You're about to be late. You:",
      options: [
        { value: "accommodator", label: "Let them keep trying things on — eventually they'll land on something" },
        { value: "reassurer", label: "Say 'You look great, that outfit is totally fine, nobody will notice'" },
        { value: "enforcer", label: "Tell them 'You're wearing this one. We're leaving right now'" },
        { value: "avoider", label: "Set out only one outfit the night before so the choice never happens" },
        { value: "coach", label: "Name what's happening and encourage heading out in whatever they have on" },
      ],
    },
    {
      id: "p6",
      scenario:
        "Your child confesses a 'bad thought' and asks if they're a terrible person. You:",
      options: [
        { value: "accommodator", label: "Have a long talk going through why the thought doesn't make them bad" },
        { value: "reassurer", label: "Immediately say 'Of course you're not bad, you're the best kid ever!'" },
        { value: "enforcer", label: "Tell them 'Don't think like that — just focus on happy things instead'" },
        { value: "avoider", label: "Steer the conversation toward something lighter right away" },
        { value: "coach", label: "Say 'Everyone gets weird thoughts sometimes' and leave it there" },
      ],
    },
    {
      id: "p7",
      scenario:
        "The family wants to eat at a restaurant, but your child has contamination fears about restaurant food. You:",
      options: [
        { value: "accommodator", label: "Pack a separate meal from home so your child can still come along" },
        { value: "reassurer", label: "Spend a while explaining how clean restaurant kitchens are kept" },
        { value: "enforcer", label: "Tell them they have to eat what's on the menu or go hungry" },
        { value: "avoider", label: "Just eat at home as a family so nobody has to deal with it" },
        { value: "coach", label: "Go together and let them take a small step, like ordering a drink" },
      ],
    },
    {
      id: "p8",
      scenario:
        "Your child needs to say goodnight in a very specific way and makes you start over if you 'get it wrong.' You:",
      options: [
        { value: "accommodator", label: "Repeat the goodnight word-for-word however many times they need" },
        { value: "reassurer", label: "Say 'I love you just as much no matter how I say goodnight'" },
        { value: "enforcer", label: "Refuse to say goodnight at all until they drop the routine" },
        { value: "avoider", label: "Have the other parent handle bedtime from now on instead" },
        { value: "coach", label: "Say goodnight your own way and stay calm if they get upset about it" },
      ],
    },
    {
      id: "p9",
      scenario:
        "Your child asks you if they accidentally hurt someone at school today. You:",
      options: [
        { value: "accommodator", label: "Call the school to verify that nothing happened and nobody got hurt" },
        { value: "reassurer", label: "Say 'You're so kind, I'm sure you didn't hurt anyone today'" },
        { value: "enforcer", label: "Say 'You obviously didn't, stop worrying about this stuff'" },
        { value: "avoider", label: "Quickly get them interested in a game or show to move past it" },
        { value: "coach", label: "Say 'That worry sounds tough — what does your gut tell you?'" },
      ],
    },
    {
      id: "p10",
      scenario:
        "Your child insists everyone in the family follow their hand-washing rules before dinner. You:",
      options: [
        { value: "accommodator", label: "Follow their rules — it keeps dinner peaceful and it's not that hard" },
        { value: "reassurer", label: "Walk them through how clean everyone's hands already are in detail" },
        { value: "enforcer", label: "Refuse and tell them they can't make rules for other people" },
        { value: "avoider", label: "Start serving meals in different rooms so it doesn't come up" },
        { value: "coach", label: "Wash your hands the normal way and sit with them if they're upset" },
      ],
    },
    {
      id: "p11",
      scenario:
        "You notice your child's OCD is getting worse during a stressful week. You:",
      options: [
        { value: "accommodator", label: "Clear their schedule and go along with more rituals until the stress passes" },
        { value: "reassurer", label: "Keep telling them 'Everything will be totally fine, nothing to worry about'" },
        { value: "enforcer", label: "Tell them 'Everyone deals with stress — you need to push through it'" },
        { value: "avoider", label: "Don't mention it and hope the week passes without things getting worse" },
        { value: "coach", label: "Acknowledge it's a hard week and add more together-time without changing limits" },
      ],
    },
    {
      id: "p12",
      scenario:
        "Siblings are complaining that your child's rituals are affecting the whole family. You:",
      options: [
        { value: "accommodator", label: "Ask the siblings to be patient and follow along with the rituals for now" },
        { value: "reassurer", label: "Tell the siblings 'This is temporary and it'll get better soon, I promise'" },
        { value: "enforcer", label: "Tell your child that they're making things unfair for the rest of the family" },
        { value: "avoider", label: "Keep the kids apart so they don't bump into each other's routines" },
        { value: "coach", label: "Listen to everyone and explain things to siblings while working on the rituals" },
      ],
    },
    {
      id: "p13",
      scenario:
        "Your child's therapist suggests an exposure exercise that will clearly upset your child. You:",
      options: [
        { value: "accommodator", label: "Ask the therapist if there's a gentler version you could try first instead" },
        { value: "reassurer", label: "Tell your child 'It won't be that bad, and you'll feel great after'" },
        { value: "enforcer", label: "Make them do it right away without any discussion about it" },
        { value: "avoider", label: "Decide to skip that session — it's not worth the tears today" },
        { value: "coach", label: "Encourage your child and let the therapist take the lead on this one" },
      ],
    },
    {
      id: "p14",
      scenario:
        "Your child has a meltdown because someone moved an item on their desk. You:",
      options: [
        { value: "accommodator", label: "Put everything back exactly how it was as quickly as you can" },
        { value: "reassurer", label: "Say 'It's fine, nothing bad will happen because something got moved'" },
        { value: "enforcer", label: "Tell them 'It's a desk, this is a huge overreaction, calm down'" },
        { value: "avoider", label: "Put a sign on the desk saying not to touch it so this never happens again" },
        { value: "coach", label: "Stay nearby and let them work through the feelings without fixing it" },
      ],
    },
    {
      id: "p15",
      scenario:
        "You catch yourself helping your child with a ritual without thinking. You:",
      options: [
        { value: "accommodator", label: "Finish helping — stopping halfway would just make everything harder" },
        { value: "reassurer", label: "Tell yourself 'One time doesn't matter, it's fine, don't overthink it'" },
        { value: "enforcer", label: "Feel guilty and immediately pull back, even though you're mid-ritual" },
        { value: "avoider", label: "Try to put it out of your mind and not dwell on it" },
        { value: "coach", label: "Step back gently, make a mental note, and don't beat yourself up" },
      ],
    },
    {
      id: "p16",
      scenario:
        "Your child won't leave for school because they need to check everything is 'safe' at home. You:",
      options: [
        { value: "accommodator", label: "Walk through the house with them checking each room before you go" },
        { value: "reassurer", label: "Promise that everything is safe and absolutely nothing will happen today" },
        { value: "enforcer", label: "Take their hand and walk out the door whether they're ready or not" },
        { value: "avoider", label: "Let them stay home today — it's not worth the morning battle" },
        { value: "coach", label: "Head out together even if things feel uncertain, staying close" },
      ],
    },
    {
      id: "p17",
      scenario:
        "Your child avoids hanging out with friends because of OCD-related fears. You:",
      options: [
        { value: "accommodator", label: "Have friends come to your house so your child can stay comfortable at home" },
        { value: "reassurer", label: "Say 'Nothing bad will happen and your friends don't care about that stuff'" },
        { value: "enforcer", label: "Sign them up for an event and drop them off regardless of how they feel" },
        { value: "avoider", label: "Don't push it — they'll want to see friends again when they're ready" },
        { value: "coach", label: "Come up with a small social step together, like a short playdate" },
      ],
    },
    {
      id: "p18",
      scenario:
        "After a really hard OCD day, you're feeling exhausted and hopeless yourself. You:",
      options: [
        { value: "accommodator", label: "Push through the exhaustion and keep helping — your child needs you right now" },
        { value: "reassurer", label: "Tell yourself 'Tomorrow will definitely be a better day' and carry on" },
        { value: "enforcer", label: "Get frustrated with yourself for not managing the day better" },
        { value: "avoider", label: "Zone out on your phone for the rest of the evening" },
        { value: "coach", label: "Take some time for yourself and call someone who gets it" },
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
        { value: "accommodator", label: "Sanitize right away so they can relax and you can move on with the evening" },
        { value: "reassurer", label: "Tell them 'The tablet is perfectly clean, nothing will happen, I promise'" },
        { value: "enforcer", label: "Say 'That's not reasonable — just take it, it's fine'" },
        { value: "avoider", label: "Leave the tablet on the counter so you never hand it to them directly" },
        { value: "coach", label: "Let them know you won't sanitize but you'll hang out while they feel uncomfortable" },
      ],
    },
    {
      id: "p2",
      scenario:
        "Your child's bedtime routine now includes 30 minutes of checking under the bed, in the closet, and that windows are locked. You:",
      options: [
        { value: "accommodator", label: "Help them check each spot together so at least it goes a little faster" },
        { value: "reassurer", label: "Keep telling them 'The house is totally safe, I promise nothing is there'" },
        { value: "enforcer", label: "Announce a strict lights-out time and say the checking has to stop tonight" },
        { value: "avoider", label: "Let them check as much as they want — at least there's no argument" },
        { value: "coach", label: "Pick the easiest checking step and try dropping just that one together" },
      ],
    },
    {
      id: "p3",
      scenario:
        "Your child keeps asking 'Did I turn off my desk lamp? Are you sure?' multiple times after going to bed. You:",
      options: [
        { value: "accommodator", label: "Go check the lamp and come back to report each time they ask" },
        { value: "reassurer", label: "Say 'Yes, I looked myself, it's definitely off, you can relax now'" },
        { value: "enforcer", label: "Snap 'I already answered that question — stop getting out of bed!'" },
        { value: "avoider", label: "Remove the lamp from the room so there's nothing left to worry about" },
        { value: "coach", label: "Say 'We checked once — let's see if we can let that be enough tonight'" },
      ],
    },
    {
      id: "p4",
      scenario:
        "Your child erases and rewrites answers on their homework over and over because the handwriting isn't 'right.' You:",
      options: [
        { value: "accommodator", label: "Let them keep at it until they're happy, even if homework takes all night" },
        { value: "reassurer", label: "Say 'Your handwriting looks great, and teachers really don't mind anyway'" },
        { value: "enforcer", label: "Take the eraser away and say they need to move on right now" },
        { value: "avoider", label: "Ask the teacher to accept typed work so handwriting isn't an issue" },
        { value: "coach", label: "Say it's frustrating, then encourage moving to the next problem" },
      ],
    },
    {
      id: "p5",
      scenario:
        "Your child insists their socks have to feel 'exactly right' and spends 20 minutes adjusting them every morning. You:",
      options: [
        { value: "accommodator", label: "Order every brand of socks online until you find the ones that work" },
        { value: "reassurer", label: "Say 'They feel fine, you seriously won't even notice once you're walking'" },
        { value: "enforcer", label: "Tell them 'Grab any socks and let's go — we're already late again'" },
        { value: "avoider", label: "Let them wear sandals or go sockless so mornings aren't a struggle" },
        { value: "coach", label: "Set a time limit together and head out even if the socks feel off" },
      ],
    },
    {
      id: "p6",
      scenario:
        "Your child confesses they keep having a thought about something bad happening to the family and asks if thinking it could make it come true. You:",
      options: [
        { value: "accommodator", label: "Walk them through a detailed explanation of why thoughts can't cause events" },
        { value: "reassurer", label: "Immediately say 'Thoughts don't make things happen — we're all safe, I swear'" },
        { value: "enforcer", label: "Tell them 'That's silly, thoughts don't work like that — just stop'" },
        { value: "avoider", label: "Change the subject to something fun so they stop worrying about it" },
        { value: "coach", label: "Say 'Brains throw out weird stuff sometimes' and sit with them a minute" },
      ],
    },
    {
      id: "p7",
      scenario:
        "Your child won't eat lunch at school because they're worried about germs in the cafeteria. You:",
      options: [
        { value: "accommodator", label: "Pack everything in sealed containers with wipes and utensils from home daily" },
        { value: "reassurer", label: "Explain exactly how the school sanitizes tables and handles food safely" },
        { value: "enforcer", label: "Tell them they need to eat in the cafeteria or they'll just be hungry" },
        { value: "avoider", label: "Arrange for them to eat somewhere else at school so it's not an issue" },
        { value: "coach", label: "Start with packed lunch at a cafeteria table, then try buying one item" },
      ],
    },
    {
      id: "p8",
      scenario:
        "Your child has a specific phrase they need to hear from you before they can fall asleep, and they make you repeat it if your tone isn't 'right.' You:",
      options: [
        { value: "accommodator", label: "Say it over and over, adjusting your tone until they're satisfied with it" },
        { value: "reassurer", label: "Say 'My love for you is exactly the same no matter how my voice sounds'" },
        { value: "enforcer", label: "Refuse to say the phrase at all until they stop trying to control it" },
        { value: "avoider", label: "Record yourself saying it so they can just play it back on their own" },
        { value: "coach", label: "Say it once warmly, then stay in the room without redoing it" },
      ],
    },
    {
      id: "p9",
      scenario:
        "Your child comes home worried they said something that hurt a classmate's feelings and asks you to confirm they didn't. You:",
      options: [
        { value: "accommodator", label: "Text the other kid's parent to ask if everything is okay between them" },
        { value: "reassurer", label: "Say 'I'm totally sure you didn't hurt anyone — you're the nicest kid around'" },
        { value: "enforcer", label: "Say 'You're way overthinking this — let it go, it's not a big deal'" },
        { value: "avoider", label: "Distract them with a snack or start an activity to get their mind off it" },
        { value: "coach", label: "Ask 'What do you think actually happened?' and leave it at that" },
      ],
    },
    {
      id: "p10",
      scenario:
        "Your child insists the family use specific cups and plates because the others feel 'wrong.' You:",
      options: [
        { value: "accommodator", label: "Switch to only using the approved dishes — it keeps meals calm and easy" },
        { value: "reassurer", label: "Explain carefully that all the dishes are equally clean and perfectly safe" },
        { value: "enforcer", label: "Refuse and say they'll eat from whatever plate they're given tonight" },
        { value: "avoider", label: "Quietly buy extras of the 'right' dishes so there are always enough" },
        { value: "coach", label: "Use regular dishes and help them get through the uncomfortable feeling" },
      ],
    },
    {
      id: "p11",
      scenario:
        "You notice your child's OCD is getting worse during a stressful week (tests, social drama). You:",
      options: [
        { value: "accommodator", label: "Pull back on all expectations and go along with more rituals until things calm down" },
        { value: "reassurer", label: "Keep saying 'It's all going to be fine, this will pass, don't worry about it'" },
        { value: "enforcer", label: "Tell them 'Stress is part of life — you need to toughen up and deal with it'" },
        { value: "avoider", label: "Pretend you don't see the increase and hope the week just passes quickly" },
        { value: "coach", label: "Name that it's a harder week and spend extra time together without loosening limits" },
      ],
    },
    {
      id: "p12",
      scenario:
        "Siblings are complaining that your child's rituals are affecting the whole family. You:",
      options: [
        { value: "accommodator", label: "Ask the siblings to go along with it for now — it's easier for everyone that way" },
        { value: "reassurer", label: "Tell the siblings 'It's going to get better soon, just hang in there a bit longer'" },
        { value: "enforcer", label: "Tell your child that their behavior is making things unfair for the whole family" },
        { value: "avoider", label: "Separate the kids so they don't cross paths during the hard parts of the day" },
        { value: "coach", label: "Hear everyone out and explain what's going on while working on the rituals" },
      ],
    },
    {
      id: "p13",
      scenario:
        "Your child's therapist suggests an exposure exercise that will clearly upset your child. You:",
      options: [
        { value: "accommodator", label: "Ask the therapist to start with something easier — you know your child best" },
        { value: "reassurer", label: "Tell your child 'It won't be as bad as you think, and you'll be so proud after'" },
        { value: "enforcer", label: "Make them do the exercise immediately without any lead-up or discussion" },
        { value: "avoider", label: "Skip that therapy session entirely so your child doesn't have to face it" },
        { value: "coach", label: "Back up the therapist's plan and cheer your child on through it" },
      ],
    },
    {
      id: "p14",
      scenario:
        "Your child has a meltdown because a sibling rearranged the books on their shelf. You:",
      options: [
        { value: "accommodator", label: "Quickly put all the books back exactly the way they were before" },
        { value: "reassurer", label: "Say 'Nothing bad will happen just because the books got moved around'" },
        { value: "enforcer", label: "Tell them 'It's a bookshelf — this reaction is way out of proportion'" },
        { value: "avoider", label: "Put a lock on the door so siblings can't get into their room anymore" },
        { value: "coach", label: "Stay calm nearby and let them sit with the change without fixing it" },
      ],
    },
    {
      id: "p15",
      scenario:
        "You catch yourself helping your child with a ritual without thinking. You:",
      options: [
        { value: "accommodator", label: "Finish what you started — quitting in the middle would just make it worse" },
        { value: "reassurer", label: "Tell yourself 'It's just this one time, it really doesn't matter that much'" },
        { value: "enforcer", label: "Feel bad about it and abruptly pull back right in the middle of things" },
        { value: "avoider", label: "Push it out of your mind and try not to dwell on what happened" },
        { value: "coach", label: "Pause, step back gently, and remind yourself it's a learning process" },
      ],
    },
    {
      id: "p16",
      scenario:
        "Your child can't leave for school because they need to recheck that their backpack is packed 'correctly.' You:",
      options: [
        { value: "accommodator", label: "Dump it out and repack the whole thing together until it feels right" },
        { value: "reassurer", label: "Promise that every single thing they need is definitely in there already" },
        { value: "enforcer", label: "Grab the backpack and march them to the car without further discussion" },
        { value: "avoider", label: "Let them stay home today — the fight isn't worth it this morning" },
        { value: "coach", label: "Head out together even though it doesn't feel settled yet" },
      ],
    },
    {
      id: "p17",
      scenario:
        "Your child avoids birthday parties and sleepovers because of OCD-related fears. You:",
      options: [
        { value: "accommodator", label: "Host every party and sleepover at your house so they feel safe and in control" },
        { value: "reassurer", label: "Say 'Nothing bad will happen — everyone is going to have a great time'" },
        { value: "enforcer", label: "Drop them off at the party and drive away no matter how upset they are" },
        { value: "avoider", label: "Stop accepting invitations so neither of you has to deal with the stress" },
        { value: "coach", label: "Try just going for a little while together and see how it goes" },
      ],
    },
    {
      id: "p18",
      scenario:
        "After a really hard OCD day, you're feeling exhausted and hopeless yourself. You:",
      options: [
        { value: "accommodator", label: "Keep pushing through the exhaustion — they need you and you can rest later" },
        { value: "reassurer", label: "Tell yourself 'Tomorrow has to be better than today' and power through" },
        { value: "enforcer", label: "Get mad at yourself for not being stronger or handling it all better" },
        { value: "avoider", label: "Tune out and lose yourself in your phone for the rest of the night" },
        { value: "coach", label: "Take a break and reach out to someone who understands what this is like" },
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
        { value: "accommodator", label: "Wipe it down — it takes ten seconds and avoids a whole argument" },
        { value: "reassurer", label: "Tell them 'Your phone is totally fine, there's nothing harmful on it'" },
        { value: "enforcer", label: "Say 'Absolutely not — that's an unreasonable ask and I won't do it'" },
        { value: "avoider", label: "Make a mental note to just never touch their phone from now on" },
        { value: "coach", label: "Say you won't wipe it, and hang around while the feeling passes" },
      ],
    },
    {
      id: "p2",
      scenario:
        "Your teen can't go to sleep without spending 45 minutes checking that their phone is charging correctly, alarms are set, and notifications are configured in a specific order. You:",
      options: [
        { value: "accommodator", label: "Go through the checklist with them so they can finally get some sleep" },
        { value: "reassurer", label: "Say 'Everything is set up right, the alarm will definitely go off tomorrow'" },
        { value: "enforcer", label: "Confiscate the phone at a set time, end of discussion, every night" },
        { value: "avoider", label: "Let them stay up as late as it takes so you don't have to get involved" },
        { value: "coach", label: "Work on dropping one checking step at a time, starting with the easiest" },
      ],
    },
    {
      id: "p3",
      scenario:
        "Your teen keeps re-reading their text messages to make sure they didn't accidentally say something offensive, then asks you to read the texts too. You:",
      options: [
        { value: "accommodator", label: "Read through the messages carefully and reassure them it's all normal" },
        { value: "reassurer", label: "Say 'I'm sure your texts are totally fine — you're always thoughtful'" },
        { value: "enforcer", label: "Tell them 'Stop going through your texts over and over, this isn't healthy'" },
        { value: "avoider", label: "Ignore the request and pretend you're busy with something else" },
        { value: "coach", label: "Say 'Can we try letting this one go without a second opinion?'" },
      ],
    },
    {
      id: "p4",
      scenario:
        "Your teen won't submit their college application essay because they keep finding 'mistakes,' even though it's been proofread multiple times. The deadline is tomorrow. You:",
      options: [
        { value: "accommodator", label: "Read through it one more time together so they can feel okay hitting submit" },
        { value: "reassurer", label: "Say 'It's a great essay and admissions will love it, I guarantee you'" },
        { value: "enforcer", label: "Take the laptop and submit it yourself before the deadline passes" },
        { value: "avoider", label: "Ask the guidance counselor to get the deadline extended quietly" },
        { value: "coach", label: "Say the stakes feel huge and encourage them to hit submit while you're there" },
      ],
    },
    {
      id: "p5",
      scenario:
        "Your teen changes clothes multiple times before school, obsessing over how their body looks in each outfit and asking if they look 'weird.' You:",
      options: [
        { value: "accommodator", label: "Go through outfits with them, giving detailed feedback on every single one" },
        { value: "reassurer", label: "Say 'You look amazing — seriously, nobody at school is going to judge you'" },
        { value: "enforcer", label: "Say 'You look fine in all of them — just pick one and get to school'" },
        { value: "avoider", label: "Let them take as long as they want even if it means being late again" },
        { value: "coach", label: "Encourage heading out in whatever they're wearing and checking in later" },
      ],
    },
    {
      id: "p6",
      scenario:
        "Your teen is terrified by intrusive violent thoughts and begs you to promise they're not 'becoming a dangerous person.' You:",
      options: [
        { value: "accommodator", label: "Sit with them for a long time going through every reason they're not dangerous" },
        { value: "reassurer", label: "Immediately say 'You would never hurt anyone — I know exactly who you are'" },
        { value: "enforcer", label: "Tell them 'Everyone has random weird thoughts — just ignore them and move on'" },
        { value: "avoider", label: "Change the subject and hope they stop thinking about it on their own" },
        { value: "coach", label: "Say 'That sounds really scary — most people get thoughts like that sometimes'" },
      ],
    },
    {
      id: "p7",
      scenario:
        "Your teen won't eat at restaurants with friends because of contamination fears, and it's starting to isolate them socially. You:",
      options: [
        { value: "accommodator", label: "Send them with food from home in a container so they can at least still go" },
        { value: "reassurer", label: "Look up restaurant health scores and show your teen the inspection results" },
        { value: "enforcer", label: "Tell them they have to eat out with friends or lose their phone for the week" },
        { value: "avoider", label: "Stop suggesting they go out — if they want to stay home, that's their choice" },
        { value: "coach", label: "Start small together — maybe just ordering a drink next time they go out" },
      ],
    },
    {
      id: "p8",
      scenario:
        "Your teen has a texting ritual \u2014 they need to send you a specific sequence of goodnight messages and get upset if you respond 'wrong.' You:",
      options: [
        { value: "accommodator", label: "Follow the texting script exactly every night — it's just a few messages" },
        { value: "reassurer", label: "Say 'How I text goodnight doesn't change how much I love you at all'" },
        { value: "enforcer", label: "Stop responding to the goodnight texts completely until they drop it" },
        { value: "avoider", label: "Pretend you fell asleep early so you don't have to participate in it" },
        { value: "coach", label: "Text back naturally and stay available if they're upset about it" },
      ],
    },
    {
      id: "p9",
      scenario:
        "Your teen is convinced they said something that will ruin a friendship and wants you to call the friend's parent to 'check.' You:",
      options: [
        { value: "accommodator", label: "Call the friend's parent — at least it will put your teen's mind at ease" },
        { value: "reassurer", label: "Say 'Your friends love you and one comment isn't going to change that'" },
        { value: "enforcer", label: "Say 'You're being dramatic, friendships are more resilient than you think'" },
        { value: "avoider", label: "Distract them by making plans for the weekend or suggesting a movie" },
        { value: "coach", label: "Say 'That feels scary — can we try sitting with not knowing for tonight?'" },
      ],
    },
    {
      id: "p10",
      scenario:
        "Your teen demands that family members shower before sitting on 'their' couch and refuses to use shared blankets. You:",
      options: [
        { value: "accommodator", label: "Have everyone shower before using the living room — it keeps the peace" },
        { value: "reassurer", label: "Go through exactly when everyone last showered and how clean they are" },
        { value: "enforcer", label: "Tell them 'It's a shared space and you don't get to make rules for everyone'" },
        { value: "avoider", label: "Buy them their own separate blankets and cushions to avoid conflict" },
        { value: "coach", label: "Use the couch normally and be there for them while they're uncomfortable" },
      ],
    },
    {
      id: "p11",
      scenario:
        "Your teen's OCD spikes around exams and social events. During a particularly stressful week, rituals double. You:",
      options: [
        { value: "accommodator", label: "Pull them out of stressful events and go along with whatever they need right now" },
        { value: "reassurer", label: "Constantly say 'You're going to ace everything, it'll all work out fine'" },
        { value: "enforcer", label: "Tell them 'Everyone has stress — stop letting it run your life like this'" },
        { value: "avoider", label: "Carry on as if nothing unusual is happening and hope it blows over" },
        { value: "coach", label: "Name the tough week, hold steady on limits, and be around more" },
      ],
    },
    {
      id: "p12",
      scenario:
        "Your teen spends 30+ minutes editing and deleting social media posts because they fear being judged or misunderstood. You:",
      options: [
        { value: "accommodator", label: "Look over their posts before they publish and give a thumbs up or edits" },
        { value: "reassurer", label: "Say 'Nobody analyzes posts that carefully — it'll be fine, just post it'" },
        { value: "enforcer", label: "Take away their social media access until they can use it normally" },
        { value: "avoider", label: "Pretend you have no idea they're spending that long on every post" },
        { value: "coach", label: "Talk about what the worry is really about and encourage posting without the editing" },
      ],
    },
    {
      id: "p13",
      scenario:
        "Your teen refuses to get their driver's license because of intrusive thoughts about causing an accident. You:",
      options: [
        { value: "accommodator", label: "Drive them everywhere without bringing it up — they'll get there eventually" },
        { value: "reassurer", label: "Say 'You'll be a great driver and nothing bad is going to happen out there'" },
        { value: "enforcer", label: "Sign them up for driving school without discussing it and tell them to go" },
        { value: "avoider", label: "Don't mention driving again and wait for them to bring it up someday" },
        { value: "coach", label: "Start tiny — maybe just sitting in the driver's seat to see how it feels" },
      ],
    },
    {
      id: "p14",
      scenario:
        "Your teen demands you never say certain 'triggering' words at home because hearing them causes intense distress. You:",
      options: [
        { value: "accommodator", label: "Memorize the list and carefully avoid those words in every conversation" },
        { value: "reassurer", label: "Say 'Words are just words — they really can't cause anything to happen'" },
        { value: "enforcer", label: "Use the words on purpose to prove that nothing bad actually follows" },
        { value: "avoider", label: "Steer around topics where those words might naturally come up" },
        { value: "coach", label: "Keep talking normally and be there for them when it feels hard" },
      ],
    },
    {
      id: "p15",
      scenario:
        "You catch yourself texting reassurances to your teen throughout the school day without them even asking. You:",
      options: [
        { value: "accommodator", label: "Keep sending them — it takes two seconds and makes you both feel better" },
        { value: "reassurer", label: "Tell yourself 'A couple of encouraging texts never hurt anybody'" },
        { value: "enforcer", label: "Feel guilty and delete the whole text thread to force yourself to stop" },
        { value: "avoider", label: "Try not to think too hard about why you're doing it" },
        { value: "coach", label: "Notice the habit, start sending fewer, and be kind to yourself about it" },
      ],
    },
    {
      id: "p16",
      scenario:
        "Your teen's grades are dropping because they re-read test answers dozens of times and can't finish exams. You:",
      options: [
        { value: "accommodator", label: "Request extended time on all tests so they have room to check as much as they need" },
        { value: "reassurer", label: "Say 'Your first answer is almost always right — just trust your instincts'" },
        { value: "enforcer", label: "Tell them 'Just stop re-reading and move on, you're making this harder than it is'" },
        { value: "avoider", label: "Don't bring up grades or test scores so it doesn't become another fight" },
        { value: "coach", label: "Practice turning in 'imperfect' work at home and talk to school about support" },
      ],
    },
    {
      id: "p17",
      scenario:
        "Your teen avoids parties, social media interactions, and group activities because of OCD-related fears. You:",
      options: [
        { value: "accommodator", label: "Host everything at your house and manage all the details so they can participate" },
        { value: "reassurer", label: "Say 'Everyone likes you — nobody is going to think anything weird at all'" },
        { value: "enforcer", label: "Force them to attend events regardless of how anxious they feel about it" },
        { value: "avoider", label: "Accept that they're just not social right now and stop bringing it up" },
        { value: "coach", label: "Pick one small social thing each week together and focus on showing up" },
      ],
    },
    {
      id: "p18",
      scenario:
        "After a really hard OCD day with your teen \u2014 arguments, tears, slammed doors \u2014 you're feeling exhausted and hopeless. You:",
      options: [
        { value: "accommodator", label: "Push through the exhaustion and keep doing whatever they need from you" },
        { value: "reassurer", label: "Tell yourself 'This phase will pass, tomorrow will be a fresh start'" },
        { value: "enforcer", label: "Get frustrated with yourself for losing your cool during the hard parts" },
        { value: "avoider", label: "Pour a glass of wine and zone out for the rest of the night" },
        { value: "coach", label: "Acknowledge it was a rough day and call a friend or your own therapist" },
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
        { value: "accommodator", label: "Wipe it down so they can just get going — it's faster than arguing about it" },
        { value: "reassurer", label: "Tell them 'The car is totally clean, I washed the whole interior just recently'" },
        { value: "enforcer", label: "Say 'You're a grown adult, this is unreasonable and I'm not doing it'" },
        { value: "avoider", label: "Just drive them yourself from now on so the steering wheel thing never comes up" },
        { value: "coach", label: "Say you won't wipe it and that you know they can handle driving anyway" },
      ],
    },
    {
      id: "p2",
      scenario:
        "Your adult child can't fall asleep without calling you to say goodnight in a very specific way, even though they live at college. If you miss the call, they'll call back repeatedly. You:",
      options: [
        { value: "accommodator", label: "Always answer no matter the time and follow the exact script they need" },
        { value: "reassurer", label: "Say 'You're completely safe in your dorm, everything is locked and fine'" },
        { value: "enforcer", label: "Tell them 'You're twenty years old and this has to stop immediately'" },
        { value: "avoider", label: "Turn your phone off at ten and pretend you didn't see the missed calls" },
        { value: "coach", label: "Talk about slowly shortening the calls while making sure they know you love them" },
      ],
    },
    {
      id: "p3",
      scenario:
        "Your adult child calls you multiple times daily from their apartment to confirm they turned off the stove, locked the door, or unplugged the iron. You:",
      options: [
        { value: "accommodator", label: "Answer every single call and confirm that everything is safe every time" },
        { value: "reassurer", label: "Say 'I'm sure you turned it all off — you always do, you're very careful'" },
        { value: "enforcer", label: "Say 'Stop calling me about this — you're an adult, figure it out yourself'" },
        { value: "avoider", label: "Start letting calls go to voicemail without explaining why" },
        { value: "coach", label: "Say answering makes the worry stronger and plan together to reduce the calls" },
      ],
    },
    {
      id: "p4",
      scenario:
        "Your adult child can't finish work projects because every email and document has to be 'perfect.' They're at risk of losing their job. You:",
      options: [
        { value: "accommodator", label: "Read over their work emails for them and give the okay so they can send" },
        { value: "reassurer", label: "Say 'Your work is always excellent — just hit send, it'll be great'" },
        { value: "enforcer", label: "Say 'If you lose this job because of this, that's on you to deal with'" },
        { value: "avoider", label: "Don't ask about work and hope it sorts itself out somehow" },
        { value: "coach", label: "Say it sounds stressful and suggest bringing this up with their therapist" },
      ],
    },
    {
      id: "p5",
      scenario:
        "Your adult child spends over an hour getting ready every morning because their appearance has to look 'exactly right' before they can leave the house, and they're frequently late to work. You:",
      options: [
        { value: "accommodator", label: "Help them choose outfits and give approval on how everything looks each morning" },
        { value: "reassurer", label: "Say 'You look totally fine — go, nobody at work is going to notice or care'" },
        { value: "enforcer", label: "Say 'If you're late one more time, you're covering your own rent starting now'" },
        { value: "avoider", label: "Don't comment on the morning routine at all and stay out of it completely" },
        { value: "coach", label: "Mention you've noticed and encourage trying to leave a little less ready" },
      ],
    },
    {
      id: "p6",
      scenario:
        "Your adult child asks you to confirm they're not a bad person after reading a disturbing news article. They've asked three times today. You:",
      options: [
        { value: "accommodator", label: "Go through point by point why they're a good person, as many times as they ask" },
        { value: "reassurer", label: "Say 'Of course you're a good person, you always have been, I know you'" },
        { value: "enforcer", label: "Say 'If the news upsets you this much, just stop reading it entirely'" },
        { value: "avoider", label: "Cancel the newspaper and block news sites on the home wifi network" },
        { value: "coach", label: "Say you've noticed this pattern and you're going to skip the reassurance this time" },
      ],
    },
    {
      id: "p7",
      scenario:
        "Your adult child can't prepare their own food due to contamination fears and expects you to cook all their meals, even though they're 24. You:",
      options: [
        { value: "accommodator", label: "Keep cooking everything — at least you know they're eating real meals" },
        { value: "reassurer", label: "Explain how hot the oven gets and how clean everything is after washing" },
        { value: "enforcer", label: "Say 'You need to start cooking your own food — I'm done doing this for you'" },
        { value: "avoider", label: "Just keep cooking without ever talking about why this arrangement exists" },
        { value: "coach", label: "Suggest making a snack together as a starting point and go from there" },
      ],
    },
    {
      id: "p8",
      scenario:
        "Your adult child calls every night from their apartment for a 45-minute 'debrief' where they need you to confirm nothing bad happened during the day. You:",
      options: [
        { value: "accommodator", label: "Take the call every night and walk through the full debrief with them" },
        { value: "reassurer", label: "Say 'Nothing bad happened today, everyone is safe, everything is fine'" },
        { value: "enforcer", label: "Tell them 'I'm not doing this anymore' and hang up when the debrief starts" },
        { value: "avoider", label: "Sometimes pick up and sometimes don't, without explaining the pattern" },
        { value: "coach", label: "Talk about making the calls shorter step by step, starting this week" },
      ],
    },
    {
      id: "p9",
      scenario:
        "Your adult child is terrified they might have caused harm to a coworker and asks you to help them analyze every interaction from the day. You:",
      options: [
        { value: "accommodator", label: "Go through the whole day in detail, interaction by interaction, until they feel sure" },
        { value: "reassurer", label: "Say 'You've never hurt anyone in your life — you're a wonderful person'" },
        { value: "enforcer", label: "Say 'This is ridiculous, of course you didn't hurt a single person today'" },
        { value: "avoider", label: "Quickly change the subject to dinner or weekend plans" },
        { value: "coach", label: "Say 'I know the uncertainty is awful' and skip the play-by-play analysis" },
      ],
    },
    {
      id: "p10",
      scenario:
        "Your adult child expects you to keep doing their laundry because they can't touch 'contaminated' clothes. You:",
      options: [
        { value: "accommodator", label: "Keep doing their laundry — it's honestly easier than dealing with the alternative" },
        { value: "reassurer", label: "Explain that the washer kills all germs and the clothes come out perfectly clean" },
        { value: "enforcer", label: "Say 'Starting today you're doing your own laundry, end of discussion, period'" },
        { value: "avoider", label: "Keep washing their clothes without acknowledging that this is part of a pattern" },
        { value: "coach", label: "Start by loading the washer together and build from there over time" },
      ],
    },
    {
      id: "p11",
      scenario:
        "Your adult child's OCD flares during a major life transition (new job, breakup, move). Rituals that had improved are suddenly back in full force. You:",
      options: [
        { value: "accommodator", label: "Go back to full accommodations — they're dealing with enough already right now" },
        { value: "reassurer", label: "Say 'This is just temporary stress, everything will settle back down soon'" },
        { value: "enforcer", label: "Say 'You were doing so much better — you can't let yourself go backwards now'" },
        { value: "avoider", label: "Act like you haven't noticed that things have gotten worse again" },
        { value: "coach", label: "Hold your limits with extra warmth and suggest reconnecting with their therapist" },
      ],
    },
    {
      id: "p12",
      scenario:
        "Your adult child moved back home because they couldn't maintain their apartment due to contamination fears. You:",
      options: [
        { value: "accommodator", label: "Welcome them home and follow all their cleaning rules throughout the house" },
        { value: "reassurer", label: "Say 'Plenty of people move home — you'll get back on your feet soon enough'" },
        { value: "enforcer", label: "Give them thirty days to get back to their own place, no exceptions" },
        { value: "avoider", label: "Let them stay without ever talking about what comes next or treatment" },
        { value: "coach", label: "Welcome them and be clear about treatment expectations and next steps together" },
      ],
    },
    {
      id: "p13",
      scenario:
        "Your adult child's therapist asks you to stop participating in rituals, but your child begs you not to change. You:",
      options: [
        { value: "accommodator", label: "Side with your child — you see how bad it gets, the therapist only sees one hour" },
        { value: "reassurer", label: "Tell your child 'We'll ease into it really slowly, it'll be totally okay'" },
        { value: "enforcer", label: "Cut off all accommodations cold turkey starting right now, no gradual steps" },
        { value: "avoider", label: "Nod along with the therapist's advice but don't actually change anything at home" },
        { value: "coach", label: "Follow the therapist's lead and tell your child you believe they can do this" },
      ],
    },
    {
      id: "p14",
      scenario:
        "Your adult child can't hold a job because rituals make them late every day. They ask you for money instead of working. You:",
      options: [
        { value: "accommodator", label: "Give them money — at least it takes one source of stress off their plate" },
        { value: "reassurer", label: "Say 'The right job will come along eventually, don't stress about money now'" },
        { value: "enforcer", label: "Cut them off financially and tell them they need to figure things out on their own" },
        { value: "avoider", label: "Keep quietly handing over cash without ever connecting it to what's going on" },
        { value: "coach", label: "Tie financial help to working on the rituals that are causing the lateness" },
      ],
    },
    {
      id: "p15",
      scenario:
        "You realize you've been accommodating your adult child's OCD for years and it's become your whole life too. You:",
      options: [
        { value: "accommodator", label: "Keep going — who else would help them if you stopped doing all of this?" },
        { value: "reassurer", label: "Tell yourself 'Maybe things will turn around on their own someday'" },
        { value: "enforcer", label: "Feel angry and frustrated at yourself for letting it get this far" },
        { value: "avoider", label: "Try not to think about it too much — what's the point of dwelling on it" },
        { value: "coach", label: "See this as a turning point and look into support for yourself too" },
      ],
    },
    {
      id: "p16",
      scenario:
        "Your adult child won't go to their college classes or job because they feel responsible for keeping the family safe through rituals at home. You:",
      options: [
        { value: "accommodator", label: "Let them stay — the rituals seem to give them a sense of purpose at least" },
        { value: "reassurer", label: "Say 'The family is perfectly safe — you don't need to worry about protecting us'" },
        { value: "enforcer", label: "Say 'You're going to class tomorrow whether you feel ready or not'" },
        { value: "avoider", label: "Don't bring up their attendance and try not to think about it too much" },
        { value: "coach", label: "Name what's happening and say you believe they can leave even if it's scary" },
      ],
    },
    {
      id: "p17",
      scenario:
        "Your adult child avoids dating, workplace socializing, and friendships because of OCD-related fears. They're increasingly isolated. You:",
      options: [
        { value: "accommodator", label: "Become their main companion and social life so they're not completely alone" },
        { value: "reassurer", label: "Say 'The right people will come along when the time is right, just wait'" },
        { value: "enforcer", label: "Set up social events for them without asking if they want to go" },
        { value: "avoider", label: "Accept that they're just not a social person and stop worrying about it" },
        { value: "coach", label: "Mention your concern and suggest making social goals part of their treatment" },
      ],
    },
    {
      id: "p18",
      scenario:
        "After another exhausting day of managing your adult child's OCD \u2014 the calls, the rituals, the guilt \u2014 you're feeling burned out and wondering if this will ever change. You:",
      options: [
        { value: "accommodator", label: "Keep going — they're still your child no matter how old they are" },
        { value: "reassurer", label: "Tell yourself 'Tomorrow will be better, it always gets a little easier'" },
        { value: "enforcer", label: "Get angry — at yourself, at them, at the whole impossible situation" },
        { value: "avoider", label: "Pour a drink and try to stop thinking about any of it for a while" },
        { value: "coach", label: "Reach out to a support group or your own therapist this week" },
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
            {seededShuffle(current.options, current.id).map((option) => (
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
