// ============================================================================
// Assessment Data — Child OCD Screening & Parent Response Style
// ============================================================================

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type QuestionType = 'likert' | 'frequency' | 'yes_no' | 'duration';

export type Domain =
  | 'contamination'
  | 'checking'
  | 'symmetry'
  | 'intrusive-thoughts'
  | 'hoarding'
  | 'rituals'
  | 'avoidance'
  | 'impact';

export type ParentStyle = 'accommodator' | 'reassurer' | 'enforcer' | 'avoider' | 'coach';

export interface AssessmentOption {
  value: number;
  label: string;
}

export interface AssessmentQuestion {
  id: string;
  domain: Domain | ParentStyle;
  questionText: string;
  questionType: QuestionType;
  options: AssessmentOption[];
  weight: number;
}

export interface DomainResult {
  domain: string;
  label: string;
  score: number;
  maxScore: number;
  description: string;
}

export interface AssessmentResult {
  overallScore: number;
  severity: 'minimal' | 'mild' | 'moderate' | 'significant' | 'severe';
  domainResults: DomainResult[];
  interpretation: string;
  recommendations: string[];
}

export interface ParentStyleResult {
  dominantStyle: ParentStyle;
  styleScores: { style: ParentStyle; label: string; score: number; description: string }[];
  interpretation: string;
  suggestions: string[];
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

export const LIKERT_OPTIONS: AssessmentOption[] = [
  { value: 0, label: 'Never' },
  { value: 1, label: 'Rarely' },
  { value: 2, label: 'Sometimes' },
  { value: 3, label: 'Often' },
  { value: 4, label: 'Always' },
  { value: -1, label: "I'm not sure" },
];

export const DOMAIN_LABELS: Record<Domain, string> = {
  contamination: 'Contamination & Washing',
  checking: 'Checking & Doubting',
  symmetry: 'Symmetry & Ordering',
  'intrusive-thoughts': 'Intrusive Thoughts',
  hoarding: 'Hoarding',
  rituals: 'Rituals & Repetition',
  avoidance: 'Avoidance Behaviors',
  impact: 'Impact on Daily Life',
};

export const DOMAIN_DESCRIPTIONS: Record<Domain, string> = {
  contamination:
    'Concerns about germs, dirt, or contamination that lead to excessive washing, cleaning, or avoidance of "dirty" things.',
  checking:
    'A need to repeatedly check things — locks, homework, appliances — driven by doubt and fear that something bad will happen.',
  symmetry:
    'A strong need for things to be even, balanced, or arranged in a particular order, often accompanied by discomfort when things feel "off."',
  'intrusive-thoughts':
    'Unwanted, distressing thoughts or mental images that feel scary or wrong. Children may not always talk about these openly.',
  hoarding:
    'Difficulty discarding items, excessive collecting, or extreme distress when asked to throw things away.',
  rituals:
    'Repetitive actions or sequences that must be performed in a specific way or a certain number of times.',
  avoidance:
    'Steering clear of places, people, or activities that trigger OCD-related anxiety.',
  impact:
    'How much OCD-related behaviors are affecting school, friendships, family life, and your child\'s overall well-being.',
};

export const PARENT_STYLE_LABELS: Record<ParentStyle, string> = {
  accommodator: 'The Accommodator',
  reassurer: 'The Reassurer',
  enforcer: 'The Enforcer',
  avoider: 'The Avoider',
  coach: 'The Coach',
};

export const PARENT_STYLE_DESCRIPTIONS: Record<ParentStyle, string> = {
  accommodator:
    'You tend to change routines, do things for your child, or remove obstacles to reduce their distress. This comes from a place of deep love, but it can unintentionally reinforce OCD by teaching your child that the anxiety was truly dangerous.',
  reassurer:
    'You often provide verbal comfort and repeated answers to your child\'s OCD-driven questions. While reassurance feels kind in the moment, OCD can turn it into a ritual — and the relief never lasts long enough.',
  enforcer:
    'You tend to push your child to stop their OCD behaviors through rules, consequences, or firm direction. While structure matters, forcing a child to face fears without support can increase shame and resistance.',
  avoider:
    'You tend to steer the family away from situations that trigger your child\'s OCD. Avoidance feels protective, but it gradually shrinks your child\'s world and tells OCD it was right to be afraid.',
  coach:
    'You lean toward acknowledging your child\'s feelings while gently encouraging them to face fears at their own pace. This is the approach most aligned with ERP (Exposure and Response Prevention) — the gold standard for OCD treatment.',
};

// ---------------------------------------------------------------------------
// Child OCD Screening Questions (30 questions, 8 domains)
// ---------------------------------------------------------------------------

export const CHILD_OCD_QUESTIONS: AssessmentQuestion[] = [
  // --- Contamination (4 questions) ---
  {
    id: 'child_ocd_q1',
    domain: 'contamination',
    questionText:
      'How often does your child wash their hands more than seems necessary (e.g., washing for a long time, going back to wash again shortly after)?',
    questionType: 'likert',
    options: LIKERT_OPTIONS,
    weight: 1.0,
  },
  {
    id: 'child_ocd_q2',
    domain: 'contamination',
    questionText:
      'How often does your child avoid touching certain objects, surfaces, or people because they seem "dirty" or "contaminated"?',
    questionType: 'likert',
    options: LIKERT_OPTIONS,
    weight: 1.0,
  },
  {
    id: 'child_ocd_q3',
    domain: 'contamination',
    questionText:
      'How often does your child express worry about germs, chemicals, or getting sick in ways that seem out of proportion to the actual risk?',
    questionType: 'likert',
    options: LIKERT_OPTIONS,
    weight: 1.0,
  },
  {
    id: 'child_ocd_q4',
    domain: 'contamination',
    questionText:
      'How often does your child insist on changing clothes, showering, or cleaning themselves after everyday activities (e.g., coming home from school, touching a pet)?',
    questionType: 'likert',
    options: LIKERT_OPTIONS,
    weight: 1.0,
  },

  // --- Checking (4 questions) ---
  {
    id: 'child_ocd_q5',
    domain: 'checking',
    questionText:
      'How often does your child repeatedly check things like door locks, light switches, or appliances?',
    questionType: 'likert',
    options: LIKERT_OPTIONS,
    weight: 1.0,
  },
  {
    id: 'child_ocd_q6',
    domain: 'checking',
    questionText:
      'How often does your child re-read, re-write, or redo schoolwork because they are worried it might be wrong?',
    questionType: 'likert',
    options: LIKERT_OPTIONS,
    weight: 1.0,
  },
  {
    id: 'child_ocd_q7',
    domain: 'checking',
    questionText:
      'How often does your child ask you to confirm that something is safe, correct, or "okay" — even after you have already answered?',
    questionType: 'likert',
    options: LIKERT_OPTIONS,
    weight: 1.0,
  },
  {
    id: 'child_ocd_q8',
    domain: 'checking',
    questionText:
      'How often does your child seem plagued by doubt — for example, worrying they forgot something important even when they clearly did not?',
    questionType: 'likert',
    options: LIKERT_OPTIONS,
    weight: 1.0,
  },

  // --- Symmetry (4 questions) ---
  {
    id: 'child_ocd_q9',
    domain: 'symmetry',
    questionText:
      'How often does your child need to arrange objects in a very specific order or pattern and become upset if they are moved?',
    questionType: 'likert',
    options: LIKERT_OPTIONS,
    weight: 1.0,
  },
  {
    id: 'child_ocd_q10',
    domain: 'symmetry',
    questionText:
      'How often does your child feel the need to make things "even" — for example, tapping both sides of a doorframe or stepping equally with each foot?',
    questionType: 'likert',
    options: LIKERT_OPTIONS,
    weight: 1.0,
  },
  {
    id: 'child_ocd_q11',
    domain: 'symmetry',
    questionText:
      'How often does your child become distressed when things are not perfectly aligned, balanced, or symmetrical?',
    questionType: 'likert',
    options: LIKERT_OPTIONS,
    weight: 1.0,
  },
  {
    id: 'child_ocd_q12',
    domain: 'symmetry',
    questionText:
      'How often does your child spend a long time positioning items on their desk, shelf, or plate until they feel "just right"?',
    questionType: 'likert',
    options: LIKERT_OPTIONS,
    weight: 1.0,
  },

  // --- Intrusive Thoughts (4 questions) ---
  {
    id: 'child_ocd_q13',
    domain: 'intrusive-thoughts',
    questionText:
      'How often does your child mention having scary, upsetting, or "weird" thoughts that they cannot seem to stop?',
    questionType: 'likert',
    options: LIKERT_OPTIONS,
    weight: 1.0,
  },
  {
    id: 'child_ocd_q14',
    domain: 'intrusive-thoughts',
    questionText:
      'How often does your child seem afraid that something terrible will happen to you, another family member, or themselves — without a clear reason?',
    questionType: 'likert',
    options: LIKERT_OPTIONS,
    weight: 1.0,
  },
  {
    id: 'child_ocd_q15',
    domain: 'intrusive-thoughts',
    questionText:
      'How often does your child express guilt or worry about having "bad" thoughts, even though they have not done anything wrong?',
    questionType: 'likert',
    options: LIKERT_OPTIONS,
    weight: 1.0,
  },
  {
    id: 'child_ocd_q16',
    domain: 'intrusive-thoughts',
    questionText:
      'How often does your child believe that thinking about something bad could make it happen (for example, "If I think about a fire, our house might burn down")?',
    questionType: 'likert',
    options: LIKERT_OPTIONS,
    weight: 1.0,
  },

  // --- Hoarding (3 questions) ---
  {
    id: 'child_ocd_q17',
    domain: 'hoarding',
    questionText:
      'How often does your child have extreme difficulty throwing away items that most people would consider trash (broken toys, old papers, wrappers)?',
    questionType: 'likert',
    options: LIKERT_OPTIONS,
    weight: 1.0,
  },
  {
    id: 'child_ocd_q18',
    domain: 'hoarding',
    questionText:
      'How often does your child become very upset or anxious when asked to clean out or give away belongings?',
    questionType: 'likert',
    options: LIKERT_OPTIONS,
    weight: 1.0,
  },
  {
    id: 'child_ocd_q19',
    domain: 'hoarding',
    questionText:
      'How often does your child collect or save things excessively — well beyond what is typical for a hobby or interest?',
    questionType: 'likert',
    options: LIKERT_OPTIONS,
    weight: 1.0,
  },

  // --- Rituals (4 questions) ---
  {
    id: 'child_ocd_q20',
    domain: 'rituals',
    questionText:
      'How often does your child perform actions a specific number of times (e.g., flipping a switch three times, going through a doorway twice)?',
    questionType: 'likert',
    options: LIKERT_OPTIONS,
    weight: 1.0,
  },
  {
    id: 'child_ocd_q21',
    domain: 'rituals',
    questionText:
      'How often does your child insist on following a very rigid routine — and need to start over from the beginning if it is interrupted?',
    questionType: 'likert',
    options: LIKERT_OPTIONS,
    weight: 1.0,
  },
  {
    id: 'child_ocd_q22',
    domain: 'rituals',
    questionText:
      'How often does your child repeat certain words, phrases, or prayers silently or out loud until they feel "right"?',
    questionType: 'likert',
    options: LIKERT_OPTIONS,
    weight: 1.0,
  },
  {
    id: 'child_ocd_q23',
    domain: 'rituals',
    questionText:
      'How often does your child have bedtime routines or rituals (saying goodnight a certain way, touching objects) that take a long time to complete?',
    questionType: 'likert',
    options: LIKERT_OPTIONS,
    weight: 1.0,
  },

  // --- Avoidance (4 questions) ---
  {
    id: 'child_ocd_q24',
    domain: 'avoidance',
    questionText:
      'How often does your child refuse to go to certain places (school, restaurants, friends\' houses) because of anxiety or OCD-related fears?',
    questionType: 'likert',
    options: LIKERT_OPTIONS,
    weight: 1.0,
  },
  {
    id: 'child_ocd_q25',
    domain: 'avoidance',
    questionText:
      'How often does your child avoid specific activities, foods, or objects to prevent feeling anxious or uncomfortable?',
    questionType: 'likert',
    options: LIKERT_OPTIONS,
    weight: 1.0,
  },
  {
    id: 'child_ocd_q26',
    domain: 'avoidance',
    questionText:
      'How often does your child ask your family to change plans, routes, or routines to help them avoid something that triggers their anxiety?',
    questionType: 'likert',
    options: LIKERT_OPTIONS,
    weight: 1.0,
  },
  {
    id: 'child_ocd_q27',
    domain: 'avoidance',
    questionText:
      'How often does your child avoid watching certain TV shows, reading certain books, or hearing certain words because they trigger distress?',
    questionType: 'likert',
    options: LIKERT_OPTIONS,
    weight: 1.0,
  },

  // --- Impact (3 questions) ---
  {
    id: 'child_ocd_q28',
    domain: 'impact',
    questionText:
      'How much are these behaviors interfering with your child\'s ability to do well at school (completing homework, concentrating, attending)?',
    questionType: 'likert',
    options: LIKERT_OPTIONS,
    weight: 1.2,
  },
  {
    id: 'child_ocd_q29',
    domain: 'impact',
    questionText:
      'How much are these behaviors affecting your child\'s friendships and social life (avoiding playdates, difficulty in group settings, isolation)?',
    questionType: 'likert',
    options: LIKERT_OPTIONS,
    weight: 1.2,
  },
  {
    id: 'child_ocd_q30',
    domain: 'impact',
    questionText:
      'How much are these behaviors causing distress for your child or your family as a whole (tears, meltdowns, family conflict, daily disruption)?',
    questionType: 'likert',
    options: LIKERT_OPTIONS,
    weight: 1.2,
  },
];

// ---------------------------------------------------------------------------
// Parent Response Style Questions (18 scenario-based questions)
// ---------------------------------------------------------------------------

export const PARENT_STYLE_OPTIONS_MAP: Record<number, ParentStyle> = {
  0: 'accommodator',
  1: 'reassurer',
  2: 'enforcer',
  3: 'avoider',
  4: 'coach',
};

export const PARENT_RESPONSE_QUESTIONS: AssessmentQuestion[] = [
  {
    id: 'parent_q1',
    domain: 'accommodator', // placeholder — scoring is by option chosen
    questionText:
      'Your child is terrified of germs and refuses to touch the front door handle. You are heading out as a family. What is closest to what you would do?',
    questionType: 'likert',
    options: [
      { value: 0, label: 'Open the door for them so you can leave on time.' },
      { value: 1, label: 'Tell them the door is clean and there is nothing to worry about.' },
      { value: 2, label: 'Tell them they have to touch the door — everyone else does.' },
      { value: 3, label: 'Go out through the garage instead to skip the issue.' },
      { value: 4, label: 'Acknowledge it feels hard and encourage them to try touching it with one finger, at their own pace.' },
    ],
    weight: 1.0,
  },
  {
    id: 'parent_q2',
    domain: 'accommodator',
    questionText:
      'At bedtime your child insists you say "goodnight" in exactly the same way three times. If you get it wrong they become very upset. What do you usually do?',
    questionType: 'likert',
    options: [
      { value: 0, label: 'Say it exactly as they need — it only takes a minute.' },
      { value: 1, label: 'Say "I promise everything will be fine, you are safe" until they calm down.' },
      { value: 2, label: 'Refuse and tell them it is just bedtime and they need to stop this.' },
      { value: 3, label: 'Have your partner handle bedtime so you do not have to deal with it.' },
      { value: 4, label: 'Gently explain that OCD wants it perfect, and try saying goodnight just twice tonight to see what happens together.' },
    ],
    weight: 1.0,
  },
  {
    id: 'parent_q3',
    domain: 'accommodator',
    questionText:
      'Your child asks "Are you sure I locked my backpack?" for the fifth time this morning. How do you typically respond?',
    questionType: 'likert',
    options: [
      { value: 0, label: 'Check the backpack again for them.' },
      { value: 1, label: 'Say "Yes, I am 100% sure, I watched you do it" one more time.' },
      { value: 2, label: 'Say "I already told you — stop asking."' },
      { value: 3, label: 'Try to distract them with something else to move on.' },
      { value: 4, label: 'Say "I know OCD is making you doubt. What do you think the answer is?" and let them sit with the uncertainty.' },
    ],
    weight: 1.0,
  },
  {
    id: 'parent_q4',
    domain: 'accommodator',
    questionText:
      'Your child will not eat food that has been touched by another food on their plate. Dinner has become a battle. What do you tend to do?',
    questionType: 'likert',
    options: [
      { value: 0, label: 'Serve every food item in a separate bowl so nothing touches.' },
      { value: 1, label: 'Explain that the food is perfectly safe and there is nothing wrong with it touching.' },
      { value: 2, label: 'Tell them they eat what is served or they do not eat at all.' },
      { value: 3, label: 'Let them skip dinner — it is not worth the fight tonight.' },
      { value: 4, label: 'Serve food normally and empathize with their discomfort while encouraging them to take one small bite of the touching food.' },
    ],
    weight: 1.0,
  },
  {
    id: 'parent_q5',
    domain: 'accommodator',
    questionText:
      'Your child wants you to drive a longer route to school because the short route goes past a house that "feels wrong." What do you do?',
    questionType: 'likert',
    options: [
      { value: 0, label: 'Take the longer route — it is only a few extra minutes.' },
      { value: 1, label: 'Tell them nothing bad will happen on the short route and they do not need to worry.' },
      { value: 2, label: 'Take the short route and tell them they just need to deal with it.' },
      { value: 3, label: 'See if someone else can drive them instead.' },
      { value: 4, label: 'Validate their feeling and suggest trying the short route together, noticing what happens to the anxiety after a few minutes.' },
    ],
    weight: 1.0,
  },
  {
    id: 'parent_q6',
    domain: 'accommodator',
    questionText:
      'Your child is re-writing a homework assignment for the third time because the letters do not look "right." The assignment is already good. How do you respond?',
    questionType: 'likert',
    options: [
      { value: 0, label: 'Let them keep re-writing — at least they are doing homework.' },
      { value: 1, label: 'Point out how neat the writing already is and tell them it is perfect.' },
      { value: 2, label: 'Take the paper away and say they are turning in what they have.' },
      { value: 3, label: 'Email the teacher to ask for an extension so there is no pressure.' },
      { value: 4, label: 'Acknowledge how frustrating it must feel, then set a gentle limit: "Let us turn in this version and see that it is good enough."' },
    ],
    weight: 1.0,
  },
  {
    id: 'parent_q7',
    domain: 'accommodator',
    questionText:
      'Your child refuses to go to a birthday party because they are afraid they will have a "bad thought" while there. What is your instinct?',
    questionType: 'likert',
    options: [
      { value: 0, label: 'Call the other parent and make an excuse so your child can stay home.' },
      { value: 1, label: 'Promise your child that they will not have bad thoughts and everything will be fun.' },
      { value: 2, label: 'Insist they are going — they cannot let fear run their life.' },
      { value: 3, label: 'Suggest a different, smaller activity so they do not have to deal with the party.' },
      { value: 4, label: 'Acknowledge the fear is real, talk about how OCD tricks them, and suggest going for just 30 minutes to start.' },
    ],
    weight: 1.0,
  },
  {
    id: 'parent_q8',
    domain: 'accommodator',
    questionText:
      'Your child has been washing their hands so much that their skin is cracking and bleeding. They ask you for lotion but then want to wash again. What do you do?',
    questionType: 'likert',
    options: [
      { value: 0, label: 'Give them the lotion and let them wash again — at least the lotion helps their skin.' },
      { value: 1, label: 'Say "Your hands are totally clean, you do not need to wash them again."' },
      { value: 2, label: 'Take away the soap and tell them they are done washing for today.' },
      { value: 3, label: 'Avoid bringing up the hand issue because it always leads to a meltdown.' },
      { value: 4, label: 'Apply the lotion, name what OCD is doing, and work together on a plan to wait five minutes before the next wash.' },
    ],
    weight: 1.0,
  },
  {
    id: 'parent_q9',
    domain: 'accommodator',
    questionText:
      'Your child asks "Do you still love me?" multiple times every day, even though you have a warm, close relationship. What do you typically do?',
    questionType: 'likert',
    options: [
      { value: 0, label: 'Answer warmly every single time — you never want them to feel unloved.' },
      { value: 1, label: 'Say "Of course I love you — I will always love you no matter what" and give a hug.' },
      { value: 2, label: 'Tell them to stop asking — they should know the answer by now.' },
      { value: 3, label: 'Change the subject to something happy to redirect them.' },
      { value: 4, label: 'Say "That sounds like OCD asking. What does your heart already know?" and give a warm smile.' },
    ],
    weight: 1.0,
  },
  {
    id: 'parent_q10',
    domain: 'accommodator',
    questionText:
      'Your family is about to leave for vacation and your child is in tears, checking and re-checking that every window is locked. You are already late. What do you do?',
    questionType: 'likert',
    options: [
      { value: 0, label: 'Check all the windows yourself so they feel better and you can finally leave.' },
      { value: 1, label: 'Walk them through the house saying "See? Locked. Locked. Locked."' },
      { value: 2, label: 'Say "We are leaving NOW — the house will be fine" and walk to the car.' },
      { value: 3, label: 'Suggest canceling the trip since the stress is not worth it.' },
      { value: 4, label: 'Validate their worry, then gently say "Let us lock the front door together one time, and then practice letting the doubt be there as we go."' },
    ],
    weight: 1.0,
  },
  {
    id: 'parent_q11',
    domain: 'accommodator',
    questionText:
      'Your child insists you cannot wear a certain shirt because it gives them a "bad feeling." How do you handle it?',
    questionType: 'likert',
    options: [
      { value: 0, label: 'Change your shirt — it is easier than dealing with their distress.' },
      { value: 1, label: 'Tell them "Nothing bad will happen because of my shirt, I promise."' },
      { value: 2, label: 'Wear it anyway and tell them their feelings about your shirt are not reasonable.' },
      { value: 3, label: 'Quietly avoid wearing that shirt in the future.' },
      { value: 4, label: 'Keep the shirt on, name the OCD, and help them notice that the bad feeling fades on its own.' },
    ],
    weight: 1.0,
  },
  {
    id: 'parent_q12',
    domain: 'accommodator',
    questionText:
      'At a restaurant your child panics because the silverware "might not be clean." They refuse to eat. What do you do?',
    questionType: 'likert',
    options: [
      { value: 0, label: 'Ask the server for new, wrapped silverware or bring wipes to clean it all.' },
      { value: 1, label: 'Reassure them that restaurants clean everything and it is safe.' },
      { value: 2, label: 'Tell them they have to eat with what is there or go without.' },
      { value: 3, label: 'Get the food to go and eat at home where they are comfortable.' },
      { value: 4, label: 'Empathize, then suggest they try using just one utensil and see how they feel after a few bites.' },
    ],
    weight: 1.0,
  },
  {
    id: 'parent_q13',
    domain: 'accommodator',
    questionText:
      'Your child takes 45 minutes to get dressed each morning because clothes have to "feel right." The family is often late. What is your approach?',
    questionType: 'likert',
    options: [
      { value: 0, label: 'Lay out multiple outfit options the night before so they can find one that works.' },
      { value: 1, label: 'Tell them each outfit looks great and they look wonderful in anything.' },
      { value: 2, label: 'Set a timer and tell them to put on whatever they have when it goes off.' },
      { value: 3, label: 'Let them stay home in pajamas on the worst days.' },
      { value: 4, label: 'Set a gentle time limit together, agree on a "good enough" outfit, and praise the effort of moving forward despite discomfort.' },
    ],
    weight: 1.0,
  },
  {
    id: 'parent_q14',
    domain: 'accommodator',
    questionText:
      'A teacher reports that your child is not finishing tests because they re-read every question many times. How do you handle it?',
    questionType: 'likert',
    options: [
      { value: 0, label: 'Ask the school for extra time on tests so your child does not feel pressured.' },
      { value: 1, label: 'Tell your child they are smart and their first answer is always right.' },
      { value: 2, label: 'Tell your child they need to stop re-reading and just finish.' },
      { value: 3, label: 'Consider switching to a less demanding school.' },
      { value: 4, label: 'Work with the teacher and your child on a plan to read each question a set number of times, building tolerance gradually.' },
    ],
    weight: 1.0,
  },
  {
    id: 'parent_q15',
    domain: 'accommodator',
    questionText:
      'Your child has a ritual of touching every light switch when they enter a room. Visitors are starting to notice. What do you do?',
    questionType: 'likert',
    options: [
      { value: 0, label: 'Make sure they have a chance to do the ritual before anyone notices.' },
      { value: 1, label: 'Tell them nobody is watching and nobody cares.' },
      { value: 2, label: 'Say "Stop doing that — it is embarrassing."' },
      { value: 3, label: 'Stop inviting people over so your child is not put in that position.' },
      { value: 4, label: 'Talk privately about how OCD makes them feel they need to, and set a small goal together — like skipping one switch next time.' },
    ],
    weight: 1.0,
  },
  {
    id: 'parent_q16',
    domain: 'accommodator',
    questionText:
      'Your child tells you they had a "terrible thought" about hurting their sibling and they are sobbing with guilt. How do you respond?',
    questionType: 'likert',
    options: [
      { value: 0, label: 'Separate them from their sibling to help them feel safe.' },
      { value: 1, label: 'Say "You would never do that — you are the kindest person I know."' },
      { value: 2, label: 'Tell them everyone has weird thoughts and they need to get over it.' },
      { value: 3, label: 'Avoid discussing it because talking about it might make it worse.' },
      { value: 4, label: 'Calmly explain that having a thought does not mean they want to act on it, that OCD latches onto what we care about most, and that this is very common.' },
    ],
    weight: 1.0,
  },
  {
    id: 'parent_q17',
    domain: 'accommodator',
    questionText:
      'Your child cannot fall asleep unless you sit in their room, and this has been going on for months. You are exhausted. What do you do?',
    questionType: 'likert',
    options: [
      { value: 0, label: 'Keep sitting there — at least they eventually sleep.' },
      { value: 1, label: 'Promise nothing bad will happen and check on them every few minutes.' },
      { value: 2, label: 'Tell them they are too old for this and close the door.' },
      { value: 3, label: 'Let them sleep in your bed so everyone can just rest.' },
      { value: 4, label: 'Create a step-by-step plan together: sitting in the room tonight, by the door tomorrow, then outside the door — at a pace they can handle.' },
    ],
    weight: 1.0,
  },
  {
    id: 'parent_q18',
    domain: 'accommodator',
    questionText:
      'After learning about OCD strategies, you try not to accommodate a ritual. Your child has a major meltdown. What happens next?',
    questionType: 'likert',
    options: [
      { value: 0, label: 'Give in — the meltdown is too intense and you feel guilty.' },
      { value: 1, label: 'Offer lots of verbal reassurance to calm them down.' },
      { value: 2, label: 'Hold firm and do not engage until they stop.' },
      { value: 3, label: 'Decide this approach is not working and go back to how things were.' },
      { value: 4, label: 'Stay calm, sit nearby, say "I know this is really hard and I am right here," and hold the boundary while offering emotional support.' },
    ],
    weight: 1.0,
  },
];

// ---------------------------------------------------------------------------
// Scoring: Child OCD Assessment
// ---------------------------------------------------------------------------

const SEVERITY_THRESHOLDS: { max: number; label: AssessmentResult['severity'] }[] = [
  { max: 15, label: 'minimal' },
  { max: 35, label: 'mild' },
  { max: 55, label: 'moderate' },
  { max: 75, label: 'significant' },
  { max: 100, label: 'severe' },
];

const SEVERITY_INTERPRETATIONS: Record<AssessmentResult['severity'], string> = {
  minimal:
    'Based on your responses, your child is showing very few signs associated with OCD. This is encouraging. Continue to be observant, and know that you can revisit this screening any time things change.',
  mild:
    'Your responses suggest some mild patterns that can be associated with OCD. Many children show occasional behaviors like these. Keeping an eye on frequency and intensity is a smart next step, and the strategies in our Situation Library may be helpful.',
  moderate:
    'Your responses indicate a moderate level of OCD-related patterns. These behaviors are likely causing some disruption at home or school. We recommend exploring our guided strategies and considering a conversation with a mental health professional who specializes in OCD.',
  significant:
    'Your responses point to a significant level of OCD-related behaviors that are likely affecting your child\'s daily life in meaningful ways. We strongly recommend consulting an OCD specialist. In the meantime, our AI Coach and Situation Library can provide immediate guidance.',
  severe:
    'Your responses suggest that OCD-related behaviors are having a major impact on your child and your family. Please know this is not your fault, and effective treatment exists. We strongly encourage you to connect with an OCD-specialized therapist as soon as possible. Our Professional Directory can help you find one.',
};

const SEVERITY_RECOMMENDATIONS: Record<AssessmentResult['severity'], string[]> = {
  minimal: [
    'Continue being an observant, supportive parent — awareness is a superpower.',
    'Browse our Learning Hub for articles on understanding OCD, so you know what to watch for.',
    'Revisit this screening in a few months, or sooner if you notice changes.',
  ],
  mild: [
    'Explore our Situation Library for strategies related to the patterns you identified.',
    'Try our AI Coach to talk through specific situations you are navigating.',
    'Consider keeping a simple log using our Progress Tracker to notice trends.',
    'If behaviors increase in frequency or intensity, consult a pediatric mental health professional.',
  ],
  moderate: [
    'We recommend scheduling an evaluation with a therapist who specializes in pediatric OCD and ERP.',
    'Use our AI Coach to get practical strategies for the situations you are facing right now.',
    'Start tracking episodes with our Progress Tracker — the data will be valuable for a therapist too.',
    'Read our guide on ERP in the Learning Hub to understand the gold-standard treatment approach.',
    'Remember: you are already taking a powerful step by seeking information.',
  ],
  significant: [
    'Connecting with an OCD specialist is the most important next step. Use our Professional Directory to find one near you.',
    'While waiting for an appointment, our AI Coach can offer evidence-based coping strategies.',
    'Download our Therapist Report from the Progress Tracker to share at your first appointment.',
    'Explore our Learning Path "Just Learned My Child Has OCD" for a structured introduction.',
    'Take care of yourself too — check out our self-care resources in the Learning Hub.',
  ],
  severe: [
    'Please reach out to a pediatric OCD specialist as soon as possible. Our Professional Directory can help.',
    'If your child is in acute distress, our Emergency Resources page has immediate crisis support options.',
    'Our AI Coach is available 24/7 to help you navigate difficult moments while you arrange professional care.',
    'Consider the Learning Path on ERP so you understand what treatment will involve.',
    'This is not your fault, and OCD is highly treatable. Many families see significant improvement with the right support.',
  ],
};

export function scoreChildAssessment(
  answers: Record<string, number>,
): AssessmentResult {
  // Group questions by domain
  const domainQuestions: Record<string, AssessmentQuestion[]> = {};
  for (const q of CHILD_OCD_QUESTIONS) {
    const d = q.domain as string;
    if (!domainQuestions[d]) domainQuestions[d] = [];
    domainQuestions[d].push(q);
  }

  const domainResults: DomainResult[] = [];
  let totalWeightedScore = 0;
  let totalWeightedMax = 0;

  for (const [domain, questions] of Object.entries(domainQuestions)) {
    let domainScore = 0;
    let domainMax = 0;

    for (const q of questions) {
      const raw = answers[q.id];
      // Treat "I'm not sure" (-1) and missing answers as 0
      const value = raw != null && raw >= 0 ? raw : 0;
      domainScore += value * q.weight;
      domainMax += 4 * q.weight; // max per question is 4
    }

    const normalized = domainMax > 0 ? Math.round((domainScore / domainMax) * 100) : 0;

    domainResults.push({
      domain,
      label: DOMAIN_LABELS[domain as Domain] ?? domain,
      score: normalized,
      maxScore: 100,
      description: DOMAIN_DESCRIPTIONS[domain as Domain] ?? '',
    });

    totalWeightedScore += domainScore;
    totalWeightedMax += domainMax;
  }

  // Sort domain results descending by score
  domainResults.sort((a, b) => b.score - a.score);

  const overallScore =
    totalWeightedMax > 0
      ? Math.round((totalWeightedScore / totalWeightedMax) * 100)
      : 0;

  const severity =
    SEVERITY_THRESHOLDS.find((t) => overallScore <= t.max)?.label ?? 'severe';

  const interpretation = SEVERITY_INTERPRETATIONS[severity];
  const recommendations = SEVERITY_RECOMMENDATIONS[severity];

  return {
    overallScore,
    severity,
    domainResults,
    interpretation,
    recommendations,
  };
}

// ---------------------------------------------------------------------------
// Scoring: Parent Response Style Assessment
// ---------------------------------------------------------------------------

const PARENT_STYLE_INTERPRETATIONS: Record<ParentStyle, string> = {
  accommodator:
    'Your most common instinct is to accommodate — changing your own behavior, routines, or environment to reduce your child\'s distress. This comes from a place of deep love and a desire to protect. However, when OCD is involved, accommodation teaches your child\'s brain that the fear was real and that they cannot handle the discomfort. Over time, OCD asks for more and more accommodation. The good news: recognizing this pattern is the first step toward shifting it.',
  reassurer:
    'You tend to respond by offering verbal comfort and repeated confirmation. "It\'s fine. I promise. You are safe." Reassurance feels like the kind thing to do, and it is — in most situations. But OCD turns reassurance into a compulsion. Your child feels better for a moment, then the doubt returns stronger, and they need to hear it again. Breaking the reassurance cycle is one of the most impactful changes a parent can make.',
  enforcer:
    'Your instinct is to take charge — to set firm limits and push your child through the fear. There is strength in this: you clearly believe in your child\'s ability to overcome challenges. However, without emotional support alongside the firmness, enforcement can feel punishing and increase shame. The goal is to keep your directness while adding warmth and collaboration.',
  avoider:
    'Your tendency is to sidestep OCD triggers altogether — changing plans, avoiding topics, or shielding your child from situations that cause anxiety. Avoidance feels like protection, and it does reduce distress in the short term. But it gradually teaches your child that the feared situation truly is dangerous, and their world gets smaller over time. Slowly reintroducing avoided situations — with support — is the path forward.',
  coach:
    'You are already leaning toward the most effective approach. You acknowledge your child\'s feelings, name OCD as the problem (not your child), and encourage gradual, supported exposure to feared situations. This is closely aligned with ERP (Exposure and Response Prevention), the gold-standard treatment for OCD. Keep going — and know that even the best coaches have tough days.',
};

const PARENT_STYLE_SUGGESTIONS: Record<ParentStyle, string[]> = {
  accommodator: [
    'Start small: pick one accommodation to reduce this week, not all of them at once.',
    'Tell your child (and OCD) what is changing and why: "I am going to stop checking the lock for you — not because I do not care, but because I know you can handle this."',
    'Expect the anxiety to get louder before it gets quieter. This is called an extinction burst and it is a sign the change is working.',
    'Replace the accommodation with emotional support: "I can see this is hard. I am right here with you."',
    'Track which accommodations you are reducing using our Progress Tracker — seeing the pattern change is motivating.',
  ],
  reassurer: [
    'When your child asks for reassurance, try reflecting the question back: "What do you think?" or "What does your gut tell you?"',
    'Set a reassurance budget: agree that you will answer the question once, clearly, and then use a gentle code word when OCD asks again.',
    'Validate the feeling, not the content: "I can see you are feeling really uncertain" instead of "I promise it is fine."',
    'Our AI Coach can help you script responses that acknowledge your child\'s feelings without feeding the OCD cycle.',
    'Read our Learning Hub article on the reassurance trap — understanding why it backfires makes it easier to change.',
  ],
  enforcer: [
    'Add warmth to your firmness: "I know this feels impossible AND I believe you can do it. I am right here."',
    'Collaborate on exposure goals instead of dictating them. Children are more likely to face fears they helped choose.',
    'Avoid punishing OCD behavior — your child is not choosing to do this. The goal is teamwork, not compliance.',
    'Celebrate effort, not just outcomes. "You tried, and that is what matters" builds resilience.',
    'Learn about ERP in our Learning Hub — it gives structure to the same directness you already bring.',
  ],
  avoider: [
    'Identify one avoided situation and make a plan to gently reintroduce it this week.',
    'Use our Situation Library to find step-by-step strategies for the specific trigger you have been avoiding.',
    'Talk to your child about what you have been avoiding and why you want to try a different approach.',
    'Build an "exposure ladder" together — start with the least scary version of the avoided thing and work up gradually.',
    'Remember: short-term discomfort leads to long-term freedom. You are not being cruel — you are being brave for your child.',
  ],
  coach: [
    'Keep doing what you are doing — your approach is aligned with the best evidence we have.',
    'Consider working with a therapist trained in ERP to take your coaching to the next level.',
    'Use our Progress Tracker to document wins — on hard days, looking back at progress is powerful.',
    'Share your experience in our Community Forum. Other parents will benefit from your perspective.',
    'Make sure to take care of yourself too. Supporting a child with OCD is demanding work, even when you are good at it.',
  ],
};

export function scoreParentAssessment(
  answers: Record<string, number>,
): ParentStyleResult {
  const styleCounts: Record<ParentStyle, number> = {
    accommodator: 0,
    reassurer: 0,
    enforcer: 0,
    avoider: 0,
    coach: 0,
  };

  for (const questionId of Object.keys(answers)) {
    const chosenValue = answers[questionId];
    const style = PARENT_STYLE_OPTIONS_MAP[chosenValue];
    if (style) {
      styleCounts[style]++;
    }
  }

  const totalAnswered = Object.values(styleCounts).reduce((a, b) => a + b, 0);

  const styleScores = (Object.keys(styleCounts) as ParentStyle[]).map((style) => ({
    style,
    label: PARENT_STYLE_LABELS[style],
    score: totalAnswered > 0 ? Math.round((styleCounts[style] / totalAnswered) * 100) : 0,
    description: PARENT_STYLE_DESCRIPTIONS[style],
  }));

  // Sort descending by score
  styleScores.sort((a, b) => b.score - a.score);

  const dominantStyle = styleScores[0].style;

  return {
    dominantStyle,
    styleScores,
    interpretation: PARENT_STYLE_INTERPRETATIONS[dominantStyle],
    suggestions: PARENT_STYLE_SUGGESTIONS[dominantStyle],
  };
}
