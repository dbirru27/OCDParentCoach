// =============================================================================
// Professional Directory — Types, Seed Data & Helpers
// =============================================================================

export interface Therapist {
  id: string;
  name: string;
  credentials: string;
  specializations: string[];
  ocdSubtypes: string[];
  ageRanges: string[];
  treatmentApproaches: string[];
  insuranceAccepted: string[];
  city: string;
  state: string;
  zip: string;
  telehealth: boolean;
  inPerson: boolean;
  phone: string;
  email: string;
  website: string;
  bio: string;
  iocdfMember: boolean;
}

export interface DirectoryFilters {
  location?: string;
  specialty?: string;
  telehealth?: boolean;
  ageRange?: string;
  insurance?: string;
}

// =============================================================================
// Seed Data — 20 Therapist Profiles
// =============================================================================

export const therapists: Therapist[] = [
  {
    id: "t-001",
    name: "Dr. Sarah Chen",
    credentials: "PsyD",
    specializations: ["OCD", "Anxiety", "Pediatric", "ERP"],
    ocdSubtypes: ["Contamination", "Checking", "Intrusive Thoughts"],
    ageRanges: ["4-7", "8-12", "13-18"],
    treatmentApproaches: ["ERP", "CBT", "ACT"],
    insuranceAccepted: ["Aetna", "Blue Cross Blue Shield", "Cigna", "United Healthcare"],
    city: "New York",
    state: "NY",
    zip: "10019",
    telehealth: true,
    inPerson: true,
    phone: "(212) 555-0142",
    email: "dr.chen@nyctherapy.example.com",
    website: "https://www.nyctherapy.example.com",
    bio: "Dr. Chen has over 15 years of experience treating childhood OCD using evidence-based approaches. She specializes in Exposure and Response Prevention (ERP) and works closely with families to reduce accommodation and build confidence. Her warm, structured approach helps children ages 4 through 18 face their fears at a pace that feels manageable.",
    iocdfMember: true,
  },
  {
    id: "t-002",
    name: "Dr. Marcus Rivera",
    credentials: "PhD",
    specializations: ["OCD", "Anxiety", "Tic Disorders", "ERP"],
    ocdSubtypes: ["Symmetry", "Ordering", "Contamination", "Hoarding"],
    ageRanges: ["8-12", "13-18", "Adults"],
    treatmentApproaches: ["ERP", "CBT", "HRT"],
    insuranceAccepted: ["Cigna", "Optum", "Magellan"],
    city: "Los Angeles",
    state: "CA",
    zip: "90024",
    telehealth: true,
    inPerson: true,
    phone: "(310) 555-0198",
    email: "mrivera@lacbt.example.com",
    website: "https://www.lacbt.example.com",
    bio: "Dr. Rivera runs an OCD specialty clinic in West Los Angeles focusing on older children and teens. He integrates ERP with motivational interviewing to help reluctant adolescents engage in treatment. A frequent presenter at IOCDF conferences, he is passionate about training the next generation of OCD therapists.",
    iocdfMember: true,
  },
  {
    id: "t-003",
    name: "Jessica Okonkwo",
    credentials: "LCSW",
    specializations: ["OCD", "Anxiety", "Pediatric", "Family Therapy"],
    ocdSubtypes: ["Reassurance Seeking", "Magical Thinking", "Bedtime Rituals"],
    ageRanges: ["4-7", "8-12"],
    treatmentApproaches: ["ERP", "CBT", "Parent Training"],
    insuranceAccepted: ["Blue Cross Blue Shield", "Medicaid", "Anthem"],
    city: "Chicago",
    state: "IL",
    zip: "60614",
    telehealth: true,
    inPerson: true,
    phone: "(312) 555-0276",
    email: "jessica@chicagokidstherapy.example.com",
    website: "https://www.chicagokidstherapy.example.com",
    bio: "Jessica specializes in working with young children who are just beginning to show OCD symptoms. She believes that early intervention can make a lasting difference and uses play-based ERP techniques alongside structured parent coaching. Families appreciate her gentle, down-to-earth style and her willingness to work alongside school staff.",
    iocdfMember: false,
  },
  {
    id: "t-004",
    name: "Dr. Robert Kowalski",
    credentials: "MD",
    specializations: ["OCD", "Anxiety", "Medication Management", "Pediatric Psychiatry"],
    ocdSubtypes: ["Contamination", "Intrusive Thoughts", "Checking"],
    ageRanges: ["8-12", "13-18"],
    treatmentApproaches: ["Medication Management", "CBT"],
    insuranceAccepted: ["United Healthcare", "Aetna", "Humana", "Tricare"],
    city: "Houston",
    state: "TX",
    zip: "77030",
    telehealth: true,
    inPerson: true,
    phone: "(713) 555-0331",
    email: "rkowalski@houstonpsych.example.com",
    website: "https://www.houstonpsych.example.com",
    bio: "Dr. Kowalski is a board-certified child and adolescent psychiatrist with a specialty in OCD. He takes a conservative, collaborative approach to medication, always preferring to pair SSRIs with ERP therapy when possible. He works closely with therapists to ensure families receive coordinated care.",
    iocdfMember: true,
  },
  {
    id: "t-005",
    name: "Amanda Torres",
    credentials: "LMFT",
    specializations: ["OCD", "Anxiety", "Family Systems", "Pediatric"],
    ocdSubtypes: ["Reassurance Seeking", "Checking", "Contamination"],
    ageRanges: ["4-7", "8-12", "13-18"],
    treatmentApproaches: ["ERP", "CBT", "Family Therapy"],
    insuranceAccepted: ["Cigna", "Blue Cross Blue Shield", "Kaiser Permanente"],
    city: "Phoenix",
    state: "AZ",
    zip: "85004",
    telehealth: true,
    inPerson: true,
    phone: "(602) 555-0419",
    email: "atorres@phoenixfamily.example.com",
    website: "https://www.phoenixfamily.example.com",
    bio: "Amanda works with the entire family system when a child has OCD. She helps parents understand the accommodation cycle and guides siblings through the changes that happen when a family starts challenging OCD together. Bilingual in English and Spanish, she serves a diverse community in the Phoenix metro area.",
    iocdfMember: false,
  },
  {
    id: "t-006",
    name: "Dr. Emily Larson",
    credentials: "PsyD",
    specializations: ["OCD", "Anxiety", "ERP", "Intensive Programs"],
    ocdSubtypes: ["Intrusive Thoughts", "Symmetry", "Magical Thinking", "Contamination"],
    ageRanges: ["8-12", "13-18", "Adults"],
    treatmentApproaches: ["ERP", "CBT", "Intensive Outpatient"],
    insuranceAccepted: ["Aetna", "Optum", "Out of Network"],
    city: "Philadelphia",
    state: "PA",
    zip: "19104",
    telehealth: false,
    inPerson: true,
    phone: "(215) 555-0587",
    email: "elarson@phillyanxiety.example.com",
    website: "https://www.phillyanxiety.example.com",
    bio: "Dr. Larson directs an intensive outpatient program for children and teens with moderate to severe OCD. Her program combines daily ERP sessions with parent coaching over 3-week cycles, and has shown significant symptom reduction for families who have not responded to weekly therapy alone. She is an active researcher in pediatric OCD treatment outcomes.",
    iocdfMember: true,
  },
  {
    id: "t-007",
    name: "Michael Tran",
    credentials: "LCSW",
    specializations: ["OCD", "Anxiety", "Trauma", "Pediatric"],
    ocdSubtypes: ["Contamination", "Checking", "Hoarding"],
    ageRanges: ["8-12", "13-18"],
    treatmentApproaches: ["ERP", "CBT", "ACT"],
    insuranceAccepted: ["Medicaid", "Molina", "Community Health Plan"],
    city: "San Antonio",
    state: "TX",
    zip: "78205",
    telehealth: true,
    inPerson: true,
    phone: "(210) 555-0623",
    email: "mtran@satxcounseling.example.com",
    website: "https://www.satxcounseling.example.com",
    bio: "Michael is dedicated to making OCD treatment accessible to underserved communities. He accepts Medicaid and offers a sliding scale for uninsured families. His approach combines ERP with Acceptance and Commitment Therapy to help children develop a new relationship with their anxious thoughts rather than fighting them.",
    iocdfMember: false,
  },
  {
    id: "t-008",
    name: "Dr. Priya Patel",
    credentials: "PhD",
    specializations: ["OCD", "Anxiety", "ERP", "Research"],
    ocdSubtypes: ["Intrusive Thoughts", "Symmetry", "Contamination", "Checking"],
    ageRanges: ["4-7", "8-12", "13-18", "Adults"],
    treatmentApproaches: ["ERP", "CBT", "Inhibitory Learning"],
    insuranceAccepted: ["Blue Cross Blue Shield", "Aetna", "United Healthcare"],
    city: "San Diego",
    state: "CA",
    zip: "92093",
    telehealth: true,
    inPerson: true,
    phone: "(858) 555-0754",
    email: "ppatel@sdanxiety.example.com",
    website: "https://www.sdanxiety.example.com",
    bio: "Dr. Patel combines clinical practice with cutting-edge research on inhibitory learning approaches to ERP. She treats all ages and has a particular interest in very young children showing early OCD signs. Parents value her ability to explain the neuroscience behind OCD in plain, relatable terms.",
    iocdfMember: true,
  },
  {
    id: "t-009",
    name: "Rachel Kim",
    credentials: "LCSW",
    specializations: ["OCD", "Anxiety", "Pediatric", "School Consultation"],
    ocdSubtypes: ["Checking", "Reassurance Seeking", "Perfectionism"],
    ageRanges: ["8-12", "13-18"],
    treatmentApproaches: ["ERP", "CBT", "Parent Training"],
    insuranceAccepted: ["Cigna", "Anthem", "Optum"],
    city: "Dallas",
    state: "TX",
    zip: "75201",
    telehealth: true,
    inPerson: false,
    phone: "(214) 555-0812",
    email: "rachelkim@dallascbt.example.com",
    website: "https://www.dallascbt.example.com",
    bio: "Rachel offers telehealth-only services, making OCD treatment accessible across Texas. She has extensive experience helping school-age children with perfectionism-driven OCD and works with parents on reducing reassurance while maintaining a loving connection. She also consults with schools to set up effective 504 plans for children with OCD.",
    iocdfMember: false,
  },
  {
    id: "t-010",
    name: "Dr. James Whitfield",
    credentials: "PsyD",
    specializations: ["OCD", "Anxiety", "ERP", "Adolescent"],
    ocdSubtypes: ["Intrusive Thoughts", "Contamination", "Scrupulosity"],
    ageRanges: ["13-18", "Adults"],
    treatmentApproaches: ["ERP", "CBT", "ACT"],
    insuranceAccepted: ["United Healthcare", "Blue Cross Blue Shield", "Out of Network"],
    city: "Austin",
    state: "TX",
    zip: "78701",
    telehealth: true,
    inPerson: true,
    phone: "(512) 555-0943",
    email: "jwhitfield@atxocd.example.com",
    website: "https://www.atxocd.example.com",
    bio: "Dr. Whitfield works primarily with teens and young adults navigating OCD, with a special focus on intrusive thoughts and scrupulosity. He creates a judgment-free space where adolescents feel safe discussing even their most distressing thoughts. He frequently trains school counselors on recognizing OCD in the classroom.",
    iocdfMember: true,
  },
  {
    id: "t-011",
    name: "Laura Hernandez",
    credentials: "LMFT",
    specializations: ["OCD", "Anxiety", "Pediatric", "Bilingual"],
    ocdSubtypes: ["Contamination", "Bedtime Rituals", "Magical Thinking"],
    ageRanges: ["4-7", "8-12"],
    treatmentApproaches: ["ERP", "CBT", "Play Therapy"],
    insuranceAccepted: ["Medicaid", "Blue Cross Blue Shield", "Molina"],
    city: "Denver",
    state: "CO",
    zip: "80202",
    telehealth: false,
    inPerson: true,
    phone: "(303) 555-0167",
    email: "lhernandez@denvertherapy.example.com",
    website: "https://www.denvertherapy.example.com",
    bio: "Laura brings creativity and warmth to her work with young children struggling with OCD. She uses play-based ERP techniques that make exposure exercises feel like adventures rather than scary tasks. Bilingual in English and Spanish, she serves families throughout the Denver metro area and is committed to making evidence-based treatment culturally accessible.",
    iocdfMember: false,
  },
  {
    id: "t-012",
    name: "Dr. Nathan Brooks",
    credentials: "PhD",
    specializations: ["OCD", "Anxiety", "Tic Disorders", "PANDAS/PANS"],
    ocdSubtypes: ["Symmetry", "Checking", "Contamination", "Tics"],
    ageRanges: ["4-7", "8-12", "13-18"],
    treatmentApproaches: ["ERP", "CBT", "HRT", "CBIT"],
    insuranceAccepted: ["Aetna", "Cigna", "Harvard Pilgrim", "Tufts"],
    city: "Boston",
    state: "MA",
    zip: "02114",
    telehealth: true,
    inPerson: true,
    phone: "(617) 555-0289",
    email: "nbrooks@bostonocd.example.com",
    website: "https://www.bostonocd.example.com",
    bio: "Dr. Brooks is one of the few specialists in the Boston area treating the overlap between OCD and tic disorders, including PANDAS/PANS. His comprehensive assessment process helps families understand the full picture of their child's symptoms. He collaborates closely with pediatricians and neurologists to coordinate care.",
    iocdfMember: true,
  },
  {
    id: "t-013",
    name: "Olivia Washington",
    credentials: "LCSW",
    specializations: ["OCD", "Anxiety", "Pediatric", "Group Therapy"],
    ocdSubtypes: ["Reassurance Seeking", "Checking", "Contamination"],
    ageRanges: ["8-12", "13-18"],
    treatmentApproaches: ["ERP", "CBT", "Group Therapy"],
    insuranceAccepted: ["Blue Cross Blue Shield", "United Healthcare", "Humana"],
    city: "Seattle",
    state: "WA",
    zip: "98101",
    telehealth: true,
    inPerson: true,
    phone: "(206) 555-0371",
    email: "owashington@seattlekids.example.com",
    website: "https://www.seattlekids.example.com",
    bio: "Olivia runs one of Seattle's only ERP groups for children with OCD, giving kids the chance to practice exposures alongside peers who understand what they are going through. She also offers individual therapy and parent coaching. Families often tell her that the group experience was a turning point for their child.",
    iocdfMember: true,
  },
  {
    id: "t-014",
    name: "Dr. David Nguyen",
    credentials: "MD",
    specializations: ["OCD", "Anxiety", "Medication Management", "Pediatric Psychiatry"],
    ocdSubtypes: ["All Subtypes"],
    ageRanges: ["4-7", "8-12", "13-18"],
    treatmentApproaches: ["Medication Management", "Consultation"],
    insuranceAccepted: ["Aetna", "Cigna", "United Healthcare", "Tricare"],
    city: "Miami",
    state: "FL",
    zip: "33136",
    telehealth: true,
    inPerson: true,
    phone: "(305) 555-0458",
    email: "dnguyen@miamipsych.example.com",
    website: "https://www.miamipsych.example.com",
    bio: "Dr. Nguyen is a child and adolescent psychiatrist who specializes in medication management for OCD. He takes a thoughtful, evidence-based approach to SSRIs and always works in partnership with the child's therapist. He is known for his patient, thorough consultations and his ability to put anxious parents at ease about medication decisions.",
    iocdfMember: true,
  },
  {
    id: "t-015",
    name: "Stephanie Gold",
    credentials: "LMFT",
    specializations: ["OCD", "Anxiety", "Family Therapy", "Adolescent"],
    ocdSubtypes: ["Intrusive Thoughts", "Scrupulosity", "Reassurance Seeking"],
    ageRanges: ["13-18", "Adults"],
    treatmentApproaches: ["ERP", "CBT", "Family Therapy"],
    insuranceAccepted: ["Out of Network"],
    city: "Portland",
    state: "OR",
    zip: "97204",
    telehealth: true,
    inPerson: true,
    phone: "(503) 555-0534",
    email: "sgold@pdxtherapy.example.com",
    website: "https://www.pdxtherapy.example.com",
    bio: "Stephanie focuses on the unique challenges of OCD in adolescence, including intrusive thoughts that teens find too embarrassing to discuss. She creates a safe, nonjudgmental environment and actively involves parents in treatment while respecting the teen's growing need for autonomy. She provides superbills for out-of-network reimbursement.",
    iocdfMember: false,
  },
  {
    id: "t-016",
    name: "Dr. Angela Foster",
    credentials: "PsyD",
    specializations: ["OCD", "Anxiety", "ERP", "Intensive Programs"],
    ocdSubtypes: ["Contamination", "Symmetry", "Hoarding", "Checking"],
    ageRanges: ["8-12", "13-18"],
    treatmentApproaches: ["ERP", "CBT", "Intensive Outpatient"],
    insuranceAccepted: ["Blue Cross Blue Shield", "Aetna", "Anthem", "Cigna"],
    city: "Atlanta",
    state: "GA",
    zip: "30308",
    telehealth: false,
    inPerson: true,
    phone: "(404) 555-0612",
    email: "afoster@atlantaocd.example.com",
    website: "https://www.atlantaocd.example.com",
    bio: "Dr. Foster runs an intensive outpatient program in Atlanta for children with moderate to severe OCD. The program offers 12 to 15 hours of ERP per week, allowing families to see faster progress than traditional weekly therapy. She also trains other therapists in ERP through workshops and supervision, helping expand access to quality OCD care in the Southeast.",
    iocdfMember: true,
  },
  {
    id: "t-017",
    name: "Brian Callahan",
    credentials: "LCSW",
    specializations: ["OCD", "Anxiety", "Pediatric", "Telehealth"],
    ocdSubtypes: ["Checking", "Contamination", "Reassurance Seeking", "Bedtime Rituals"],
    ageRanges: ["4-7", "8-12", "13-18"],
    treatmentApproaches: ["ERP", "CBT", "Parent Training"],
    insuranceAccepted: ["Aetna", "Cigna", "United Healthcare", "Optum"],
    city: "Minneapolis",
    state: "MN",
    zip: "55401",
    telehealth: true,
    inPerson: false,
    phone: "(612) 555-0789",
    email: "bcallahan@mnkids.example.com",
    website: "https://www.mnkids.example.com",
    bio: "Brian provides telehealth-only OCD treatment to families across Minnesota and surrounding states. He has found that telehealth allows him to coach parents in real time during the moments that matter most, like bedtime routines and morning transitions. His structured parent training approach empowers caregivers to become their child's everyday ERP coach.",
    iocdfMember: false,
  },
  {
    id: "t-018",
    name: "Dr. Lisa Chang",
    credentials: "PhD",
    specializations: ["OCD", "Anxiety", "Neuropsychology", "Assessment"],
    ocdSubtypes: ["All Subtypes"],
    ageRanges: ["4-7", "8-12", "13-18"],
    treatmentApproaches: ["ERP", "CBT", "Neuropsychological Assessment"],
    insuranceAccepted: ["Blue Cross Blue Shield", "United Healthcare", "Anthem"],
    city: "San Francisco",
    state: "CA",
    zip: "94102",
    telehealth: true,
    inPerson: true,
    phone: "(415) 555-0856",
    email: "lchang@sfmind.example.com",
    website: "https://www.sfmind.example.com",
    bio: "Dr. Chang offers comprehensive neuropsychological assessments for children with OCD, helping families and schools understand the full scope of a child's needs. She also provides ERP therapy and specializes in cases where OCD co-occurs with ADHD or learning differences. Her thorough evaluations are valued by families seeking clarity and direction.",
    iocdfMember: true,
  },
  {
    id: "t-019",
    name: "Karen Mitchell",
    credentials: "LCSW",
    specializations: ["OCD", "Anxiety", "Pediatric", "Parent Coaching"],
    ocdSubtypes: ["Magical Thinking", "Reassurance Seeking", "Contamination"],
    ageRanges: ["4-7", "8-12"],
    treatmentApproaches: ["ERP", "CBT", "SPACE"],
    insuranceAccepted: ["Cigna", "Aetna", "Out of Network"],
    city: "Nashville",
    state: "TN",
    zip: "37203",
    telehealth: true,
    inPerson: true,
    phone: "(615) 555-0934",
    email: "kmitchell@nashvilleocd.example.com",
    website: "https://www.nashvilleocd.example.com",
    bio: "Karen is trained in the SPACE (Supportive Parenting for Anxious Childhood Emotions) protocol and uses it alongside traditional ERP to help parents become the primary agents of change. This approach is especially effective for young children who are resistant to direct therapy. She empowers parents with practical tools they can use every day.",
    iocdfMember: false,
  },
  {
    id: "t-020",
    name: "Dr. Omar Hassan",
    credentials: "PsyD",
    specializations: ["OCD", "Anxiety", "ERP", "Multicultural"],
    ocdSubtypes: ["Scrupulosity", "Intrusive Thoughts", "Contamination", "Checking"],
    ageRanges: ["8-12", "13-18", "Adults"],
    treatmentApproaches: ["ERP", "CBT", "ACT"],
    insuranceAccepted: ["Blue Cross Blue Shield", "Medicaid", "Humana"],
    city: "Detroit",
    state: "MI",
    zip: "48201",
    telehealth: true,
    inPerson: true,
    phone: "(313) 555-0102",
    email: "ohassan@detroittherapy.example.com",
    website: "https://www.detroittherapy.example.com",
    bio: "Dr. Hassan brings cultural sensitivity to OCD treatment, with particular expertise in scrupulosity and religiously-themed intrusive thoughts. He helps families distinguish between sincere religious practice and OCD-driven rituals in a respectful, informed way. He accepts Medicaid and is committed to serving diverse communities in the Detroit area.",
    iocdfMember: true,
  },
];

// =============================================================================
// Helper Functions
// =============================================================================

/**
 * Normalise a string for case-insensitive, partial matching.
 */
function norm(s: string): string {
  return s.toLowerCase().trim();
}

/**
 * Check if any of the values in `haystack` partially match `needle`.
 */
function matchesAny(haystack: string[], needle: string): boolean {
  const n = norm(needle);
  return haystack.some((h) => norm(h).includes(n));
}

/**
 * Search and filter therapists.
 *
 * - `query` matches against name, bio, city, state, specializations, treatment
 *   approaches, and OCD subtypes.
 * - Each filter field narrows the results further (AND logic).
 */
export function searchTherapists(
  query: string = "",
  filters: DirectoryFilters = {}
): Therapist[] {
  let results = [...therapists];

  // --- Free-text query ---
  if (query.trim()) {
    const q = norm(query);
    results = results.filter((t) => {
      const searchable = [
        t.name,
        t.credentials,
        t.bio,
        t.city,
        t.state,
        t.zip,
        ...t.specializations,
        ...t.treatmentApproaches,
        ...t.ocdSubtypes,
      ];
      return searchable.some((s) => norm(s).includes(q));
    });
  }

  // --- Location filter (matches city, state, or zip) ---
  if (filters.location?.trim()) {
    const loc = norm(filters.location);
    results = results.filter(
      (t) =>
        norm(t.city).includes(loc) ||
        norm(t.state).includes(loc) ||
        norm(t.zip).includes(loc)
    );
  }

  // --- Specialty filter ---
  if (filters.specialty?.trim()) {
    const spec = norm(filters.specialty);
    results = results.filter(
      (t) =>
        matchesAny(t.specializations, spec) ||
        matchesAny(t.treatmentApproaches, spec) ||
        matchesAny(t.ocdSubtypes, spec)
    );
  }

  // --- Telehealth filter ---
  if (filters.telehealth === true) {
    results = results.filter((t) => t.telehealth);
  }

  // --- Age range filter ---
  if (filters.ageRange?.trim()) {
    const ar = filters.ageRange;
    results = results.filter((t) => t.ageRanges.includes(ar));
  }

  // --- Insurance filter ---
  if (filters.insurance?.trim()) {
    results = results.filter((t) => matchesAny(t.insuranceAccepted, filters.insurance!));
  }

  return results;
}

/**
 * Find a therapist by ID.
 */
export function getTherapistById(id: string): Therapist | undefined {
  return therapists.find((t) => t.id === id);
}
