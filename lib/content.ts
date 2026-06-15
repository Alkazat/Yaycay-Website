/**
 * All marketing copy in one place so the funnel reads as one product and stays
 * consistent with the FE claims/wedge. Writing rule: no em-dashes.
 */

export const teaser = {
  eyebrow: 'Launching soon',
  title: 'Plan the trip. Skip the stress. Keep the yay.',
  subtitle:
    'Yaycay builds the whole family holiday for you. Every child gets their own age-perfect adventure, allergies are flagged at every meal, the packing is sorted, and there is a countdown the kids cannot stop checking. You hold one calm plan instead of twenty browser tabs.',
  incentive: 'Founding families get early access and launch pricing, before spring break.',
  trust: 'Built by parents who were done with holiday admin.',
  note: 'No spam. Just one email when we open.',
};

export const hero = {
  eyebrow: 'For families making memories',
  title: 'The holiday your kids will never stop talking about.',
  subtitle:
    'One chat builds your whole trip. Every child gets a personalised adventure, you get a calm day-by-day plan with allergies and real rest built in, and the family keeps a memory book.',
  ctaNote: 'Free to start. No app to install. Build one real day in under a minute.',
};

export const wedge = {
  title: 'Why families pay for Yaycay',
  intro: 'A free day shows you the magic. The holiday is where it pays off.',
  cards: [
    {
      icon: 'sparkle',
      title: 'A different adventure for each child',
      body: 'Every kid gets their own explorer mode, pitched to their age. The teen gets tougher challenges and a journal, the four year old gets read-aloud and tap games. One plan, a personal trip for each child.',
    },
    {
      icon: 'shield',
      title: 'Allergies handled, every meal',
      body: 'Dietary and allergy flags ride on every booking and venue, surfaced to you. Safe-order lists, cross-contamination warnings, even EpiPen reminders. Eat out without the dread.',
    },
    {
      icon: 'compass',
      title: 'The mental load, lifted',
      body: 'Bookings, costs, transport and a packing list for each child, all in one calm grown-ups view. The kids get the fun. You get the plan, and your evenings back.',
    },
    {
      icon: 'book',
      title: 'A keepsake they make themselves',
      body: 'Photo journals, star rewards, daily mini-games and a live countdown turn the trip into a book the family keeps long after you are home.',
    },
  ],
};

export const howItWorks = {
  title: 'One chat does the work',
  intro: 'Talk to it like a clued-up friend. It turns the mess into a plan.',
  steps: [
    {
      n: 1,
      title: 'Drop in a booking or a photo',
      body: 'Forward a confirmation or snap a ticket. It lands in the right place on the right day, no retyping.',
    },
    {
      n: 2,
      title: 'Ask it to optimise the day',
      body: 'Too much walking? A nap to protect? It reshuffles the day around your family in seconds.',
    },
    {
      n: 3,
      title: 'Balance every child',
      body: 'It weighs each kid so nobody is bored and nobody is dragged along. Then it hands the family a day they will all remember.',
    },
  ],
};

export const showcase = {
  eyebrow: 'What you get',
  title: 'A whole trip, built around your family',
  intro: 'One chat becomes a complete, kid-first companion for the entire holiday.',
  items: [
    { icon: 'compass', title: 'Day-by-day itinerary', body: 'Every day planned with the right pace, rest and travel time for your crew.' },
    { icon: 'sparkle', title: 'Per-child adventures', body: 'Age-perfect activities and modes, from teen to toddler.' },
    { icon: 'shield', title: 'Allergy-safe dining', body: 'Safe and avoid guidance on every meal and venue.' },
    { icon: 'sound', title: 'Read-aloud for little ones', body: 'The youngest get bigger text and their day read out loud.' },
    { icon: 'quiz', title: 'Challenges and quizzes', body: 'Fun, age-pitched questions and photo missions on every stop.' },
    { icon: 'star', title: 'Rewards and games', body: 'Star banks and mini-games that keep kids excited all trip.' },
    { icon: 'bag', title: 'Packing lists', body: 'A sorted, tickable list for every child and the family bag.' },
    { icon: 'map', title: 'Interactive map', body: 'Every stop pinned, one tap to see what you are doing there.' },
    { icon: 'book', title: 'Journal and keepsake', body: 'Photos, moods and notes that export into a printable book.' },
    { icon: 'clock', title: 'Live countdown', body: 'Counts down the sleeps so the whole family gets excited.' },
    { icon: 'plane', title: 'Works offline', body: 'The whole plan keeps working on the plane and off the grid.' },
    { icon: 'calendar', title: 'Grown-ups guide', body: 'Bookings, costs and transport in one calm logistics view.' },
  ],
};

export const destinations = {
  eyebrow: 'Where to next',
  title: 'Adventures for every kind of family',
  intro: 'Real warm-weather days out, picked for families. Tap a vibe and start a plan.',
  cards: [
    { id: 'sand', name: 'Sun & sand', sub: 'Beaches the whole family loves', tag: 'Popular', tone: 'sun' },
    { id: 'outdoors', name: 'Great outdoors', sub: 'Trails, lakes and big skies', tag: 'New', tone: 'meadow' },
    { id: 'city', name: 'City breaks', sub: 'Kid-friendly streets and squares', tag: 'Easy', tone: 'sky' },
    { id: 'theme', name: 'Theme parks', sub: 'Big-thrill days out', tag: 'Thrills', tone: 'aqua' },
  ],
};

export const pricing = {
  title: 'One holiday, two ways to buy',
  intro: 'Pay once per holiday. No subscription, ever.',
  tiers: [
    {
      id: 'ours',
      name: 'Done for you',
      price: 'US$129',
      tagline: 'We bring the AI and run the planning chat. Nothing to set up.',
      badge: 'Most chosen',
      featured: true,
      features: [
        'A guardrailed Yaycay chat builds your whole trip',
        'No AI subscription, no tech, nothing to install',
        'Allergy and dietary safety on every booking',
        'Per-child adventures, packing, journal and a keepsake',
      ],
    },
    {
      id: 'byo',
      name: 'Bring your own AI',
      price: 'US$59',
      tagline: 'Already use ChatGPT, Claude or Gemini? Connect Yaycay in about two minutes.',
      badge: 'Best value',
      featured: false,
      features: [
        'Use the AI you already pay for',
        'Guided two-minute setup, we walk you through every step',
        'The full planning and holidaying experience',
        'Per-child modes, safety, packing, journal and map',
      ],
      guideHref: '/connect',
      guideLabel: 'See the 2-minute setup',
    },
  ],
  footnote: 'Prices in US dollars. One-off purchase per holiday.',
};

export const proof = {
  title: 'Built by parents, loved by families',
  stats: [
    { value: '1 chat', label: 'builds the whole trip' },
    { value: 'Every child', label: 'gets their own adventure' },
    { value: 'Offline', label: 'ready when the signal drops' },
  ],
  testimonials: [
    {
      quote:
        'I planned a week in Singapore on the school run. The kids each had their own thing and I actually relaxed.',
      name: 'Priya',
      role: 'Mum of two',
    },
    {
      quote:
        'The allergy flags on every booking took a weight off. I stopped triple-checking menus and enjoyed the trip.',
      name: 'Tom',
      role: 'Dad of three',
    },
    {
      quote:
        'We came home with a memory book the kids made themselves. That is the bit they keep talking about.',
      name: 'Hannah',
      role: 'Parent and traveller',
    },
  ],
};

export const finalCta = {
  title: 'Build your free day now',
  body: 'See exactly what your family gets. One real day, built for one of your kids, in under a minute.',
};

export const explore = {
  title: 'One trip, two kinds of happy',
  intro: 'The kids get an adventure they help build. You get the calm of a plan that runs itself.',
  cards: [
    {
      href: '/for-kids',
      eyebrow: 'For the kids',
      title: 'An adventure they own',
      body: 'Their own explorer mode, games, challenges, rewards and a journal they fill in themselves.',
      cta: 'See the kids experience',
      tone: 'sun',
    },
    {
      href: '/for-parents',
      eyebrow: 'For the grown-ups',
      title: 'A weight off your shoulders',
      body: 'The whole plan, allergies handled, packing sorted, and the logistics kept quietly to one side.',
      cta: 'See what parents get',
      tone: 'sky',
    },
  ],
};

export const forKids = {
  eyebrow: 'For the kids',
  title: 'A trip they help build, and never forget',
  subtitle:
    'Yaycay turns the holiday into an adventure book each child actually owns, pitched perfectly to their age.',
  features: [
    { icon: 'sparkle', title: 'Their own explorer mode', body: 'The teen gets tougher challenges and a journal. The little one gets bigger text, read-aloud and tap games. Everyone gets a trip that feels made for them.' },
    { icon: 'quiz', title: 'Challenges and quizzes', body: 'Spot-it games, photo missions and age-pitched questions on every stop, so the learning hides inside the fun.' },
    { icon: 'star', title: 'Real rewards', body: 'Stars turn into holiday spending money. Doing the day earns the treat, and the kids stay motivated all trip.' },
    { icon: 'book', title: 'Their own journal', body: 'Photos, moods and notes the kids add themselves, that export into a printable keepsake book of the trip.' },
    { icon: 'map', title: 'An interactive map', body: 'Every stop pinned. One tap shows what you are doing there, with a kid-friendly story for each place.' },
    { icon: 'clock', title: 'A countdown to take-off', body: 'Counts down the sleeps, so the excitement builds for weeks before you even pack.' },
  ],
};

export const forParents = {
  eyebrow: 'For the grown-ups',
  title: 'You carry less. You enjoy more.',
  subtitle:
    'Yaycay takes the admin of a family holiday off your plate, so the only thing left to do is enjoy it.',
  features: [
    { icon: 'compass', title: 'The mental load, lifted', body: 'One calm plan instead of twenty browser tabs. Every child is balanced into the day, so nobody is bored and nobody is dragged along.' },
    { icon: 'shield', title: 'Allergies handled, every meal', body: 'Safe and avoid guidance on every booking and venue, cross-contamination warnings, and EpiPen reminders. Eat out without the dread.' },
    { icon: 'calendar', title: 'A grown-ups guide', body: 'Bookings to confirm, costs in your own currency, and transport with fares, all in one quiet view the kids never see.' },
    { icon: 'bag', title: 'Packing, sorted', body: 'A tickable list for every child and the family bag, so nothing essential gets left on the bench.' },
    { icon: 'plane', title: 'Works on the plane', body: 'The whole plan keeps working offline, so a dead signal never strands you mid-trip.' },
    { icon: 'sound', title: 'You actually relax', body: 'With the plan handled and the kids delighted, you finally get to be on the holiday too.' },
  ],
};

// Homepage copy, built verbatim to the work-order spec (Section 4, Homepage).
// British/Australian English, no em-dashes, USD prices. {curly} = founder fills.
export const home = {
  hero: {
    headline: 'The holiday your kids will never stop talking about',
    line: 'Tell us where. Watch the days build themselves: one for every kid, every meal checked.',
    primaryCta: { label: 'Build your free day', href: '/free-day' },
    secondaryCta: { label: 'See a real free day', href: '/sample-day' },
  },
  // The interactive hero: types a destination, shows the AI building the trip,
  // then reveals the real thing - the FE trip view itself, rebuilt as a live
  // demo. Seed data mirrors the Walkers' Singapore trip from the FE
  // (lib/contract-mock/data.ts): the Explorers/Grown-ups toggle, a profile per
  // child with their age band, a real day (Gardens by the Bay, the Satay lunch
  // allergy card, the Supertrees), and the grown-ups logistics view. Copy lives
  // here; the animation lives in components/home/HeroSim.
  heroSim: {
    placeholder: 'Where are you taking the family?',
    query: 'Singapore',
    chips: ['Family of 5', '14-18 September', '1 tree-nut allergy'],
    // The AI "building" phase (mirrors the FE GeneratingOverlay steps + orb).
    building: {
      title: "Building the Walkers' day",
      lines: [
        'Packing the explorer bags',
        'Finding the best spots',
        'Building the day, hour by hour',
        "Checking every menu for Pip's tree-nut allergy",
        'Sprinkling the yay',
      ],
    },
    // The finished plan, framed like the real FE trip view.
    trip: { destination: 'Singapore', when: 'Day 2 of 3', builtBy: 'Built by Yaycay AI' },
    views: { kid: 'Explorers', grownups: 'Grown-ups' },
    day: {
      label: 'Day 2',
      hotel: 'Village Hotel Sentosa',
      summary: 'A big day out among gardens, clouds and very tall trees.',
      didYouKnow: 'The Cloud Forest has the tallest indoor waterfall in the world.',
      weather: 'Warm and humid. High 32°C / Low 27°C',
    },
    // "Bring your own AI" trust banner; logos resolve from /brand/partners/<slug>.
    works: {
      label: 'Works with',
      partners: [
        { name: 'ChatGPT', slug: 'chatgpt' },
        { name: 'Claude', slug: 'claude' },
        { name: 'Gemini', slug: 'gemini' },
      ],
    },
    caption: "A real Yaycay day, built live: day two of the Walkers' Singapore trip.",
    // One profile per child, each with their own age band and adventure. Every
    // moment carries the same keys (null where unused) so the shape stays uniform.
    kids: [
      {
        name: 'Sam',
        age: 9,
        mode: 'Explorer',
        emoji: '🧭',
        accent: 'sky',
        allergy: false,
        moments: [
          { slot: 'Morning', place: 'Gardens by the Bay', time: '09:30', title: 'Cloud Forest mountain', desc: 'Ride to the top, then walk down through the mist and waterfalls.', wow: 'The waterfall is 35m tall, taller than ten giraffes.', challenge: { type: 'Quiz', prompt: 'Why is it so misty inside the Cloud Forest?' }, meal: null, readAloud: false },
          { slot: 'Evening', place: 'Supertree Grove', time: '19:45', title: 'Garden Rhapsody light show', desc: 'Lie back on the lawn and watch the trees sing in light.', wow: '18 Supertrees, and the tallest is 50m.', challenge: { type: 'Spot it', prompt: 'Spot three different colours in the show.' }, meal: null, readAloud: false },
        ],
      },
      {
        name: 'Pip',
        age: 6,
        mode: 'Explorer',
        emoji: '🧭',
        accent: 'sun',
        allergy: true,
        moments: [
          {
            slot: 'Lunch',
            place: 'Satay by the Bay',
            time: '12:30',
            title: 'Lunch at Satay by the Bay',
            desc: 'An open-air food garden by the water, with lots of stalls to pick from.',
            wow: null,
            challenge: null,
            readAloud: false,
            // The allergy meal card: the showpiece of the real FE renderer.
            meal: {
              venue: 'Satay by the Bay',
              allergyLabel: 'Tree-nut allergy: flagged',
              checked: [
                'Satay peanut sauce is on the menu across several stalls.',
                'Seafood and chicken-rice stalls do not list nut sauces.',
              ],
              confirm: [
                'Ask each stall before ordering. Recipes and oils change.',
                "Keep Pip's antihistamine and EpiPen on you, not in the bag.",
              ],
              stalls: [
                { name: 'Satay stalls (peanut sauce)', label: 'flagged', risk: 'flagged' },
                { name: 'Hainanese chicken rice', label: 'lower risk', risk: 'lower' },
              ],
              ask: {
                phrase: '请问这道菜里有坚果或坚果油吗?',
                english: 'Does this dish have any nuts or nut oils? My daughter has a serious tree-nut allergy.',
                language: 'Mandarin + English',
              },
            },
          },
        ],
      },
      {
        name: 'Theo',
        age: 3,
        mode: 'Little Explorer',
        emoji: '🐣',
        accent: 'meadow',
        allergy: false,
        moments: [
          { slot: 'Morning', place: 'Gardens by the Bay', time: '09:30', title: 'Water-play garden', desc: 'Splash about before the heat of the day builds.', wow: 'Free entry, so just bring swimmers.', challenge: null, meal: null, readAloud: true },
          { slot: 'Afternoon', place: 'Back at the hotel', time: '13:00', title: 'Nap, protected', desc: 'A quiet hour at the hotel, 1 to 3pm, so the afternoon stays happy.', wow: null, challenge: null, meal: null, readAloud: false },
        ],
      },
    ],
    // The Grown-ups view (PIN-locked in the real app): the day's logistics and
    // the allergy protocol, mirroring the FE GrownupsGuide + allergy banner.
    grownups: {
      lockNote: 'PIN-locked in the app',
      protocol: 'Pip: tree nuts, anaphylaxis. Carry the EpiPen at all times and confirm every dish with the kitchen.',
      logistics: [
        { icon: 'calendar', label: 'Bookings', value: 'Gardens by the Bay tickets (Cloud Forest + Flower Dome).' },
        { icon: 'compass', label: 'Transport', value: 'MRT to Bayfront, exit B. Rain backup booked for 14:15.' },
        { icon: 'star', label: 'Costs', value: 'Garden tickets about S$53 / A$58 for the whole family.' },
      ],
      allergy: 'Satay by the Bay: peanut sauce on the satay stalls. Confirm every stall before ordering.',
    },
    flags: [
      { icon: 'shield', label: "Tree-nut allergy flagged on Pip's every meal" },
      { icon: 'compass', label: 'Rain plan ready for the afternoon storm' },
    ],
  },
  // The five value props, pushed below the fold as a scannable strip (they used
  // to be a 41-word hero subhead).
  claims: [
    { icon: 'sparkle', title: 'Built around each kid', body: 'Every child gets their own day, matched to their age and what they love.' },
    { icon: 'shield', title: 'Every meal checked', body: 'Allergy flags, checks, and the words to ask, in the local language.' },
    { icon: 'compass', title: 'With you on the trip', body: 'Rain plans and good food near you, while you are actually there.' },
    { icon: 'star', title: 'Paid once', body: 'One price for one holiday. No subscription quietly renewing.' },
  ],
  recognition: {
    headline: 'You know how this usually goes.',
    body: 'Twenty browser tabs. A spreadsheet nobody else opens. Screenshots in the family chat. And on the trip itself, you are the one holding it all: the bookings, the backup plans, the "is this restaurant safe for her". Everyone else relaxes. You navigate.',
  },
  pillars: {
    headline: 'Yaycay carries the trip, so you can be on it.',
    subhead: 'The mental load, lifted. Here is what that actually means.',
    cards: [
      {
        title: 'Built around your kids',
        body: "Every child gets their own adventures, matched to their age and what makes them light up. A nine-year-old's, a six-year-old's and a three-year-old's day, woven into one family plan. They even get their own travel journal.",
      },
      {
        title: 'With you the whole way',
        body: 'Most planners stop at departure. Yaycay travels with you: what to do when it rains, where to eat near where you actually are, with allergy flags and checks on every meal suggestion so you stay in control.',
      },
      {
        title: 'Paid once, for this holiday',
        body: 'No subscription. No annual plan quietly renewing in March. One price for one holiday, because families take holidays, not subscriptions.',
      },
    ],
    cta: { label: 'How it works', href: '/how-it-works' },
  },
  proofTeaser: {
    headline: "Don't take our word for it. Read a real day.",
    subhead:
      "One full day from a family's Singapore trip: three kids, one tree-nut allergy, one rainy afternoon, all handled.",
    body: 'Per-child mornings. A lunch with the allergy reasoning shown, not hidden. A rain plan ready before the clouds. This is your free day.',
    cta: { label: 'See the full sample day', href: '/sample-day' },
  },
  steps: {
    headline: 'One chat builds the whole trip.',
    items: [
      { n: 1, title: 'Tell us about your crew', body: 'Where, when, who is coming, ages, allergies, what they love. One conversation, not a form.' },
      { n: 2, title: 'Your plan arrives', body: 'A day-by-day holiday built around each child, every meal checked against your allergies.' },
      { n: 3, title: 'Yaycay travels with you', body: 'Rain plans, what is good nearby, answers on the ground. No 9pm re-researching.' },
      { n: 4, title: 'Keep the memories', body: "The kids' journals become a keepsake book the family actually reopens." },
    ],
    cta: { label: 'See the full picture', href: '/how-it-works' },
  },
  allergyBlock: {
    headline: 'Travelling with an allergy? We take that as seriously as you do.',
    body: 'Every meal carries flags, checks and the words to ask in the local language: what we checked, what to confirm on the day. We never say "100% safe". We make sure you are never guessing.',
    cta: { label: 'How allergy checks work', href: '/allergy-safety' },
  },
  testimonials: {
    headline: 'For families making memories',
    items: [
      { quote: 'I read the plan on the plane and realised I had nothing to hold in my head. First time ever.', who: '{Name}, mum of two (7 and 10), {destination} trip' },
      { quote: 'Our daughter has a nut allergy. Having the questions to ask written out in Japanese changed the whole trip.', who: '{Name}, dad of {kids}, Japan' },
      { quote: 'The keepsake book made my eight-year-old cry happy tears. Worth it for that alone.', who: '{Name}, parent of {kids}, {destination}' },
    ],
  },
  pricingTeaser: {
    headline: 'One holiday. One price. Nothing renewing.',
    body: 'US$129 for the full done-for-you holiday, or US$59 if you bring the AI assistant you already pay for. Both start the same way: with a free day, built for your family, no card required.',
    primaryCta: { label: 'See pricing', href: '/pricing' },
    secondaryCta: { label: 'Bring your own AI', href: '/connect' },
  },
};

// The free day form (work-order C21): three trip questions, email last.
export const freeDayForm = {
  headline: 'Build your free day',
  subhead:
    'Tell us three things about your trip. We will build one full day, free, so you can judge us on the real thing. Your free day arrives in your inbox within 24 hours.',
  fields: {
    destination: 'Where are you headed (or dreaming of)?',
    when: 'When, roughly?',
    who: 'Who is coming? Ages, and any allergies or dietary needs.',
    email: 'Where should we send it?',
  },
  button: 'Build your free day',
  reassurance:
    'No card. No subscription. One email with your day in it, and that is a promise, not a drip campaign.',
};

export const freeDayRequested = {
  headline: 'Your day is being built.',
  body: 'We are on it. Your free day arrives in your inbox within 24 hours, with each kid\'s adventure, flagged meals and a backup plan inside. One email, exactly as promised. While you wait, see how a free day becomes a whole holiday.',
  cta: { label: 'How it works', href: '/how-it-works' },
};

// ---- Phase 2 pages (verbatim work-order copy) ----

export const howItWorksPage = {
  hero: {
    headline: 'Here is exactly what happens, from first chat to keepsake.',
    subhead: 'No mystery, no magic. One conversation in, one holiday out, and Yaycay alongside you the whole way.',
  },
  steps: [
    { n: 1, title: 'One chat. Tell us about your crew.', body: "You talk, Yaycay listens. Where you are going, when, who is coming, their ages, their allergies and dietary needs, what each kid is obsessed with this month, how much walking grandad's knees can take. If you already have flights or a hotel booked, forward the confirmation emails and they are in the plan. Got a screenshot of a place someone recommended? Send that too. The chat takes most families fifteen to twenty minutes, and you can come back and add things any time." },
    { n: 2, title: 'Your holiday arrives, built around each child.', body: "A day-by-day plan for the whole trip. Each child gets their own adventures inside the family's shared day, matched to their age and interests. Days are routed sensibly, so you are not crossing the city twice before lunch. Energy is balanced across the trip: big days, slow days, and rest built in on purpose. Mixed group? Toddlers, teens and grandparents get balanced too; nobody's day is an afterthought. Every meal suggestion carries allergy flags and the reasoning behind them. And every day has a weather contingency already attached.", cta: { label: 'See a real day', href: '/sample-day' } },
    { n: 3, title: 'Tweak anything. It is your holiday.', body: 'Swap a museum for a beach. Tell Yaycay the kids hated the idea of the night safari, or that you have booked a cooking class on Thursday. The plan reshapes around your changes, and everything downstream (routes, meals, energy balance) adjusts with it. You stay the decision-maker. Yaycay does the reshuffling.' },
    { n: 4, title: 'On the trip, Yaycay is in your pocket.', body: "This is where most planners go quiet. Yaycay does not. It rains: your wet-weather plan is one tap away. Everyone is hungry now: ask what is good near here, and the suggestions arrive with your family's allergy flags already applied. The three-year-old has hit the wall at 2pm: ask for a quiet hour nearby. You are never the only one holding the trip together, because the trip is being held for you." },
    { n: 5, title: 'The holiday becomes a book.', body: 'Through the trip, each child fills their own journal: stamps, drawings, one question a day. Afterwards, the journals, your days and your photos come together as a keepsake memory book. It is the bit nobody expects and nobody forgets. Holidays end. This does not.', cta: { label: 'What the kids get', href: '/for-kids' } },
  ],
  faqHead: 'The questions sceptics ask. Fair enough.',
  faq: [
    { q: 'What if a suggestion is wrong or closed?', a: 'It happens; no planner on earth is immune. Tell Yaycay during the trip and you get a replacement in moments, not a refund form. The plan is alive, not laminated.' },
    { q: 'Do you book flights and hotels?', a: 'No. Yaycay is not a booking engine. You book where you like; forward the confirmations and they fold into the plan. We plan and accompany, we do not sell you flights.' },
    { q: 'Is this just ChatGPT with a logo?', a: 'No. Generic assistants give plausible answers with no structure, no allergy checking layer, no journals, no trip companion. Yaycay is the family layer that generic chat does not have. If you already pay for an assistant, the US$59 tier puts that layer on top of it.' },
  ],
  faqCta: { label: 'More questions answered', href: '/faq' },
  closing: { headline: 'Start with the free day. Judge us on it.', subhead: 'Three questions, then one full day of your actual holiday, in your inbox within 24 hours.', secondary: { label: 'See a real free day first', href: '/sample-day' } },
};

export const sampleDay = {
  contextHeadline: 'This is a real free day.',
  contextSub: "Built for the Walker family: Singapore, four days from 14 September, with Sam (9), Pip (6) and her tree-nut allergy, and Theo (3). Nothing below has been polished for marketing. This is what arrives in your inbox.",
  artefact: {
    title: 'Day 2 in Singapore: Gardens, hawkers and one very good rain plan',
    sub: 'Tuesday. Forecast: 31°C, likely afternoon storm. Energy plan: big morning, slow middle, gentle evening.',
    blocks: [
      { time: '8.30am', title: 'Gardens by the Bay, three adventures running side by side.', body: ['For Sam (9): the Supertree Grove engineering hunt. Six questions on his journal page, including "find the tree that breathes for the building". He is looking for the exhaust vents, though he will not know that yet.', 'For Pip (6): the Hidden Creatures trail through the Cloud Forest. Seven animals to spot and stamp. The seventh is genuinely hard to find. That is deliberate.', 'For Theo (3): the water-play garden and the dragonfly bridge, at toddler pace. No agenda beyond getting happily soaked before the heat builds.'], note: 'Each child gets their own version of the same morning. Same place, same family, three different adventures.' },
      { time: '12.30pm', title: 'Lunch at Satay by the Bay.', body: ['Why this one: open-air hawker centre, five minutes\' walk, and we have flagged the stalls where satay sauce contains peanuts and cross-contact is likely. Three stalls are flagged as lower-risk for tree nuts based on their published menus, but please confirm with the stall holder on the day. Here is the question to show them, in English and Mandarin: "Does this dish contain any nuts or nut oils? My daughter has a serious tree-nut allergy."'], note: 'Every meal comes with flags, checks and reminders that help you stay in control. We show our reasoning. You make the call, and you confirm on the day.', allergy: true },
      { time: '2pm', title: 'The rain plan, already loaded.', body: ['The forecast says afternoon storm, so the afternoon is indoors by design: the Future World galleries at ArtScience Museum. Pre-book the 2.15pm entry (link in your plan). If the storm misses, swap to the Marina Barrage kite lawn. Both options are seven minutes from lunch. Either way, nobody is standing in rain googling "things to do Singapore wet weather".'], note: 'Contingencies are built in before you leave, not improvised on the day.' },
      { time: '4.30pm', title: 'Hotel pool. That is it. That is the plan.', body: ['Six-year-olds have a battery. Day 2 of a four-day trip is exactly when it runs out. The evening is deliberately empty except for one easy dinner suggestion nearby (allergy flags included).'], note: 'A good family plan includes doing less. We schedule the rest, too.' },
      { time: '9pm', title: "Pip's journal page for today.", body: ['Stamp the creatures you found. Draw the strangest plant in the Cloud Forest. One question to answer at breakfast: "If you could build a Supertree, what would yours do?"'], note: 'The journal pages become the keepsake book after the trip. This is where the holiday gets remembered.' },
    ],
  },
  maths: { headline: 'That was one day. Your holiday has more of them.', body: 'The full holiday is every day planned like this, the on-trip companion answering questions where you stand, and the keepsake book at the end. US$129, once. Or US$59 with your own AI assistant. If the free day does not convince you, it cost you nothing and you keep the day.' },
  closing: { headline: 'Now build yours.', subhead: 'Three questions about your trip. Your free day arrives in your inbox within 24 hours.', secondary: { label: 'Still comparing? See pricing', href: '/pricing' } },
};

export const allergySafety = {
  hero: { headline: 'Travelling with a food allergy means you can never just trust a menu. We built Yaycay knowing that.', subhead: 'Every meal suggestion in your plan comes with flags, checks and reminders that help you stay in control. Here is exactly how that works, and exactly where its limits are.' },
  check: { headline: 'What Yaycay checks before a meal makes it into your plan', body: "Your family's allergies and dietary needs are part of the trip from the first chat, not a filter you toggle later. For every restaurant, café or food stall we suggest, we check published menus and ingredient information against your family's needs. We flag dishes and venues where your allergen commonly appears, including the unobvious places (satay sauce, pesto, curry pastes, fried foods sharing oil). We flag cross-contact risks where the cuisine or kitchen style makes them likely. We note which venues publish allergen menus and which do not. And every suggestion carries a plain-language note: what we checked, what we could not verify, and what to confirm on the day." },
  cannot: { headline: 'What we cannot check, and will not pretend to', body: 'We cannot see inside a kitchen. We cannot know that a menu changed yesterday, that a supplier substituted an ingredient, or that a relief chef is in today. We cannot guarantee any meal, anywhere, is free of your child\'s allergen, and we will never use the words "100% safe", because nobody can honestly say them. What we can do is make sure you walk in informed: what to ask, how to ask it, and what the risks are likely to be. The final check is always yours, on the day, with the people cooking the food. Our job is to make that check easy and to make sure it never gets forgotten in the holiday blur.' },
  tools: {
    headline: 'Built into every day of your trip',
    items: [
      { title: 'Ask-the-kitchen cards', body: "The exact question to ask, written in the local language and yours, specific to your child's allergy. Show it at the counter. No mime, no hoping." },
      { title: 'Meal-time reminders', body: 'Before each planned meal, a reminder of the flags for that venue and what to confirm. Useful on day one. More useful on day six, when guards drop.' },
      { title: 'On-the-ground checks', body: "Plans change and everyone ends up hungry somewhere unplanned. Ask Yaycay what is nearby, and suggestions arrive with your family's flags already applied, plus the same confirm-on-the-day notes." },
    ],
    cta: { label: 'See these in a real day', href: '/sample-day' },
  },
  beyond: { headline: 'Not just allergies', body: 'The same flags, checks and reminders work for coeliac disease, intolerances, vegetarian and vegan kids, halal and kosher needs, and the child who is simply in a beige-food era. Tell Yaycay once, in the first chat. Every meal suggestion on the trip carries it from then on.' },
  closing: { headline: "Build a free day with your family's needs built in.", subhead: 'Tell us where you are going, who is coming, and exactly what they cannot eat. Your free day arrives with every meal flagged and the questions to ask, in your inbox within 24 hours.', secondary: { label: 'How the whole trip works', href: '/how-it-works' } },
};

// ---- Comparison pages (verbatim spec; matrices as real tables) ----
export const comparisons = {
  wanderlog: {
    name: 'Wanderlog',
    title: 'Wanderlog organises the trip. Yaycay is built for the family taking it.',
    subhead: 'An honest comparison for parents deciding between them, written by people who think Wanderlog is genuinely good at what it does.',
    heroCta: { label: 'See a Yaycay day', href: '/sample-day' },
    creditHead: 'Where Wanderlog shines',
    credit: 'Wanderlog is an excellent travel logistics tool. The itinerary and map live in one view. You can forward booking emails and they file themselves. Routes optimise, budgets split across the group, offline maps work, and over a million travellers use it. If you want a powerful free organiser for an adult trip, Wanderlog is a strong choice, and its Pro tier is about US$40 a year.',
    forkHead: 'The difference is who the trip is for.',
    fork: "Wanderlog organises the logistics of a trip, and does it well. But the itinerary is written for the adults; the kids appear in it as passengers. Yaycay starts from the other end: each child's age, interests and dietary needs shape the plan itself. Wanderlog can hold a restaurant booking; Yaycay flags whether that restaurant's menu is risky for your daughter's nut allergy and gives you the question to ask the kitchen. Wanderlog's job largely finishes when the plan is built; Yaycay travels with you (rain plans, nearby answers, live changes) and then turns the trip into the kids' keepsake book afterwards. Different jobs. Honestly, some families could use both.",
    matrix: {
      rows: [
        { label: 'Itinerary and map in one place', a: 'Yes', b: 'Yes' },
        { label: 'Forward bookings by email', a: 'Yes', b: 'Yes' },
        { label: 'Route and day optimisation', a: 'Yes', b: 'Yes' },
        { label: 'Group planning', a: 'Yes, shared editing and budgets', b: 'Yes, balanced for ages and energy, grandparents included' },
        { label: 'Built around each child', a: 'Not its focus', b: 'Yes, per-child adventures and explorer modes' },
        { label: 'Allergy and dietary flags on meals', a: 'Not its focus', b: 'Yes, flags, checks and reminders on every suggestion' },
        { label: 'During-trip companion', a: 'Offline maps and saved plans', b: 'Live answers, rain plans, mid-trip re-planning' },
        { label: "Kids' journals and keepsake book", a: 'No', b: 'Yes, included in both tiers' },
        { label: 'Price', a: 'Free, Pro about US$40/year', b: 'US$129 once, or US$59 once with your own AI' },
      ],
    },
    recHead: 'Our honest recommendation',
    rec: 'Pick Wanderlog if you want a free, capable organiser for adult or group logistics and you enjoy doing the planning yourself. Pick Yaycay if you are the parent carrying a family trip: kids of different ages, maybe an allergy in the mix, and you want the plan built around them, company during the trip, and the book at the end. If that is you, start with the free day and judge the difference yourself.',
    primaryCta: { label: 'Build your free day', href: '/free-day' },
    secondaryCta: { label: 'See pricing', href: '/pricing' },
    diagramBrief: 'Nanobanana flat diagram, locked style (2px navy lines, sand-filled rounded nodes, one blue emphasis). A two-panel fork: left "organising a trip" (a tidy map and itinerary), right "carrying a family through one" (per-child strands, an allergy flag, a rain cloud with a plan, a keepsake book). No 3D, no gradients.',
  },
  layla: {
    name: 'Layla',
    title: 'Layla gets you from chat to checkout. Yaycay stays for the holiday.',
    subhead: 'Both start with a conversation. The difference is where each one ends.',
    heroCta: { label: 'See where ours ends', href: '/sample-day' },
    creditHead: 'Where Layla shines',
    credit: 'Layla is a polished AI trip planner used by millions. The chat is quick and genuinely pleasant, it connects to booking partners like Skyscanner, Booking.com and GetYourGuide so you can go from idea to booked trip in one flow, and it has the press coverage to match. Premium is about US$49 a year. If you want fast inspiration that flows straight into bookings, Layla does that well.',
    forkHead: '"From chat to checkout" is the whole difference.',
    fork: 'Layla\'s journey is designed to end at the booking, because bookings are how a free-to-cheap planner earns its keep. That is a fair model. It is just not the part of the holiday that parents struggle with. The hard part starts after checkout: the day-by-day with two kids of different ages, the meal-by-meal allergy vigilance, the rain on Wednesday, the 2pm meltdown, and remembering any of it clearly a year later. That after-checkout stretch is the entire product at Yaycay. We do not sell bookings at all; you book wherever you like and forward the confirmations. We charge one price, once, and we work for the family rather than the transaction.',
    matrix: {
      rows: [
        { label: 'Chat-built itinerary', a: 'Yes', b: 'Yes' },
        { label: 'Flight and hotel booking', a: 'Yes, via partners', b: 'No, by design; forward your bookings instead' },
        { label: 'Built around each child', a: 'General trips, family templates available', b: 'Yes, per-child adventures, explorer modes, journals' },
        { label: 'Allergy and dietary flags on meals', a: 'Not its focus', b: 'Yes, flags, checks and reminders on every suggestion' },
        { label: 'During-trip companion', a: 'Limited after booking', b: 'Live answers, rain plans, mid-trip re-planning' },
        { label: 'Keepsake memory book', a: 'No', b: 'Yes, included' },
        { label: 'Business model', a: 'Free plus about US$49/year premium, partner bookings', b: 'US$129 once, or US$59 once with your own AI' },
      ],
    },
    recHead: 'Our honest recommendation',
    rec: 'Pick Layla if your main job is getting a trip imagined and booked quickly, and the on-the-ground part tends to take care of itself. Pick Yaycay if the on-the-ground part is exactly what never takes care of itself: kids to keep delighted, an allergy to manage at every meal, and a trip you want to remember in more than photos. The free day shows you precisely what the after-checkout product looks like.',
    primaryCta: { label: 'Build your free day', href: '/free-day' },
    secondaryCta: { label: 'How the whole trip works', href: '/how-it-works' },
    diagramBrief: 'Nanobanana flat diagram, locked style. A horizontal timeline: Layla\'s line runs "chat -> plan -> checkout" and stops at a flag marked Checkout; Yaycay\'s line continues past checkout through "during the trip -> the keepsake book". Navy lines, one blue emphasis node, sand nodes. No 3D.',
  },
  mindtrip: {
    name: 'Mindtrip',
    title: 'Mindtrip is free and starts in seconds. Here is why we ask three questions first.',
    subhead: 'A straight comparison, including the parts where Mindtrip wins.',
    heroCta: { label: 'See what the questions buy you', href: '/sample-day' },
    creditHead: 'Where Mindtrip shines',
    credit: 'Mindtrip is an impressive, mostly free AI travel platform. You can start chatting instantly with no sign-up, turn screenshots and PDFs into itinerary items, import Google Maps pins, plan with a group in one chat, and carry it all in a polished iOS app. It is backed by serious partners and press. As a general travel tool at the price of nothing, it is genuinely hard to beat.',
    forkHead: 'Free-and-general is a different product to paid-and-built-around-your-kids.',
    fork: 'Mindtrip starts instantly because it starts generally; it learns about your trip as you go, and the kid-specific, allergy-specific layer is yours to assemble through prompting. Yaycay asks three questions before anything else (where, when, and exactly who is coming, ages and allergies included) because the plan is built around the answers. Your free day takes up to 24 hours to arrive, not three seconds, because per-child adventures and checked meal suggestions are slower to make than general suggestions. And yes, we charge: US$129 once, or US$59 with your own AI, because our income is the family\'s payment rather than bookings or volume. We think the trade is worth it for one specific kind of traveller: the parent carrying a family trip. For most other travellers, honestly, Mindtrip is excellent.',
    matrix: {
      rows: [
        { label: 'Start instantly, no sign-up', a: 'Yes', b: 'No; three trip questions, free day within 24 hours' },
        { label: 'Price', a: 'Mostly free', b: 'US$129 once, or US$59 once with your own AI' },
        { label: 'Screenshots and PDFs into the plan', a: 'Yes', b: 'Yes' },
        { label: 'Group planning', a: 'Yes, shared chat', b: 'Yes, balanced for ages, energy and dietary needs' },
        { label: 'Built around each child', a: 'General; you prompt for it', b: 'The default; per-child adventures, modes, journals' },
        { label: 'Allergy and dietary flags on meals', a: 'Not its focus', b: 'Yes, flags, checks and reminders on every suggestion' },
        { label: 'During-trip companion', a: 'App with saved plans', b: 'Live answers, rain plans, mid-trip re-planning' },
        { label: 'Keepsake memory book', a: 'No', b: 'Yes, included' },
      ],
    },
    recHead: 'Our honest recommendation',
    rec: 'If you want a free, instant, general travel assistant, use Mindtrip; it is very good. If you are planning a family holiday where the kids\' experience and a dietary need are the whole game, and you would rather pay once than assemble it all yourself, that is the trip Yaycay was built for. The sample day is the fastest way to see whether the difference is worth US$129 to your family.',
    primaryCta: { label: 'See the sample day', href: '/sample-day' },
    secondaryCta: { label: 'Build your free day', href: '/free-day' },
    diagramBrief: 'Nanobanana flat diagram, locked style. Two panels: "instant and general" (a generic suggestion appearing fast) versus "considered and yours" (three question chips feeding a per-child, allergy-flagged plan). Navy lines, sand nodes, one blue emphasis. Honest, not gloating.',
  },
};

export const comparisonHub = {
  title: 'Comparing family trip planners?',
  intro: 'Honest, generous comparisons between Yaycay and the tools parents weigh it against. We concede what each does well, then show the fork.',
  cards: [
    { slug: 'wanderlog', name: 'Yaycay vs Wanderlog', line: 'The adult logistics tool, versus the family trip itself.' },
    { slug: 'layla', name: 'Yaycay vs Layla', line: 'A planner that ends at checkout, versus one that stays for the holiday.' },
    { slug: 'mindtrip', name: 'Yaycay vs Mindtrip', line: 'Free and instant, versus paid and built around your kids.' },
  ],
};

// ---- About page (verbatim spec) ----
export const aboutPage = {
  hero: {
    headline: 'Yaycay started on a holiday that nearly broke the person who planned it.',
    subhead: 'We are parents who build software. This is the tool we needed and could not find.',
  },
  founding: {
    headline: 'The trip that started it',
    body: 'In {year}, {Founder name} planned a {destination} trip for {family details: partner, kids and ages, the allergy if applicable}. The planning took {N} weeks of evenings. The trip itself was good, mostly. But somewhere around day four, standing outside a restaurant translating an ingredients list on a phone while everyone waited, came the thought every planning parent has had: I am working. I am on holiday, and I am working. The spreadsheet came home with three pages of "next time" notes. Yaycay is those notes, built properly.',
  },
  team: {
    headline: 'The people behind it',
    subhead: 'A small team. You will probably get an email from one of us.',
    members: [
      { name: '{Name}', role: 'Founder', line: '{Two kids, one shellfish allergy, one laminated itinerary she is not proud of.}' },
      { name: '{Name}', role: '{Role}', line: '{One real line: kids and ages, the allergy they manage, the destination they over-plan.}' },
      { name: '{Name}', role: '{Role}', line: '{One real line: kids and ages, the allergy they manage, the destination they over-plan.}' },
    ],
  },
  believe: {
    headline: 'How we decide things',
    items: [
      'The kids are the spine of the plan, not a setting.',
      'We would rather lose a sale than overstate what we can verify, especially about allergies.',
      'One holiday, one price; we will not invent a subscription to please a spreadsheet.',
      'The during-trip and the after matter as much as the plan, because that is where the memories actually happen.',
    ],
  },
  closing: {
    headline: 'The best introduction is a day we plan for you.',
    subhead: 'Free, built for your actual family, in your inbox within 24 hours.',
    secondary: { label: 'See how it works', href: '/how-it-works' },
  },
};

// ---- FAQ page (verbatim spec; answers self-contained for AI extraction) ----
export const faqPage = {
  header: {
    headline: 'Straight answers, including to the awkward ones.',
    subhead: 'If yours is missing, email us at hello@yaycay.ai and a person will reply.',
  },
  groups: [
    {
      name: 'Getting started',
      items: [
        { q: 'What exactly is Yaycay?', a: "Yaycay is a family holiday companion. One chat builds your whole trip: a day-by-day plan designed around each of your kids, with every meal suggestion flagged for your family's allergies and dietary needs. It then travels with you during the trip and turns the whole thing into a keepsake book afterwards. It is paid once per holiday, not a subscription." },
        { q: 'Is Yaycay a booking site?', a: 'No. Yaycay does not sell flights, hotels or tickets. You book wherever you prefer, forward the confirmation emails, and your bookings are woven into the plan. We plan and accompany; we do not take a cut of your bookings.' },
        { q: 'Which destinations does Yaycay cover?', a: 'Yaycay plans trips worldwide. Coverage is deepest where families travel most, and every plan is built fresh for your trip rather than pulled from a fixed library. If you are headed somewhere unusual, build your free day for it; that is the honest test.' },
        { q: 'How long does the chat take?', a: 'Most families finish the first chat in fifteen to twenty minutes. You can come back and add things whenever you like, including mid-trip.' },
      ],
    },
    {
      name: 'The free day',
      items: [
        { q: 'How does the free day arrive?', a: 'By email, within 24 hours of your request, as one fully built day from your actual trip: per-child adventures, flagged meal suggestions, a weather backup and a journal page. No card details are required.' },
        { q: 'Is the free day just a sales sample?', a: 'It is a real day from your real holiday. If you buy the full plan, your free day is already part of it. If you do not buy, the day is yours to keep and use.' },
        { q: 'Will you spam me after I give you my email?', a: 'No. You get your free day, one follow-up to ask how it landed, and nothing else unless you ask for it. Unsubscribe works the first time.' },
      ],
    },
    {
      name: 'Allergies and safety',
      items: [
        { q: "Can Yaycay guarantee a restaurant is safe for my child's allergy?", a: 'No, and you should distrust anyone who says yes. No service can see inside a kitchen on the day. What Yaycay provides is flags, checks and reminders that help you stay in control: which menu items and venues commonly involve your allergen, what we verified and what we could not, and exactly what to ask the kitchen in the local language. The final check is always yours, made on the day. Read how it works in full on our allergy and dietary safety page.' },
        { q: 'What dietary needs can Yaycay handle?', a: 'Food allergies, coeliac disease and intolerances, vegetarian and vegan diets, halal and kosher requirements, and plain fussy eating. You tell Yaycay once in the first chat and every meal suggestion on the trip carries it.' },
        { q: 'What if Yaycay gets something wrong?', a: 'Tell us, in the chat, at any point including mid-trip. Suggestions get corrected and replaced in moments. If something material was wrong with your plan, our refund policy applies; see pricing and refunds below.' },
      ],
    },
    {
      name: 'Pricing and refunds',
      items: [
        { q: 'How much does Yaycay cost?', a: 'US$129 once for the full done-for-you holiday, or US$59 once if you connect your own ChatGPT or Claude account. Both are one-off payments for one holiday. There is no subscription and nothing renews.' },
        { q: 'Why is Yaycay not free like some AI travel apps?', a: 'Because our model is you, not your data or your bookings. Free travel tools generally earn money from booking commissions or advertising. We charge a one-off price and work only for the family paying it.' },
        { q: 'What is your refund policy?', a: 'If your full plan arrives and does not deliver what we promised, tell us within {14} days of delivery for a refund. The free day is free regardless.' },
        { q: 'What counts as one holiday?', a: 'One trip, one destination region, up to {21} days, including stopovers. A separate later trip is a new purchase.' },
      ],
    },
    {
      name: 'Your data',
      items: [
        { q: "What do you do with my family's information?", a: "We use it to build and run your trip, and that is it. We do not sell personal data, we do not run advertising, and details like your children's ages and allergies are used only to build their plan. You can ask us to delete your data at any time at hello@yaycay.ai." },
        { q: 'If I connect my own AI account, what do you see?', a: 'Yaycay supplies the trip structure and family layer; your conversations run through your own assistant account under your provider\'s terms. We store what is needed to maintain your trip plan, journals and keepsake. Full details are in our privacy policy.' },
      ],
    },
    {
      name: 'During the trip',
      items: [
        { q: 'Does Yaycay work offline?', a: 'Your day-by-day plan, journal pages and key information like ask-the-kitchen cards are available offline. Live questions ("what is near us now?") need a connection.' },
        { q: 'What happens when plans change mid-trip?', a: 'Tell Yaycay what changed: a closure, a sick kid, a surprise invitation. The rest of the day, and the days after it, reshape around the change. This is most of what "travels with you" means.' },
        { q: 'What is the keepsake book, exactly?', a: "After your trip, each child's journal pages, your day plans and your photos are brought together into a printed memory book. It is part of both tiers, not an upsell." },
      ],
    },
  ],
};

// ---- For parents page (verbatim spec + the Grown Ups command centre) ----
export const forParentsPage = {
  hero: {
    headline: 'You plan it. You pack it. You carry it. You are also, technically, on holiday.',
    subhead: 'Yaycay exists for the parent who is the itinerary. The mental load, lifted.',
  },
  modes: {
    headline: 'One app, two modes: planning, then travelling.',
    subhead: 'Yaycay does the part before you go and the part while you are there. Most planners stop at the airport.',
    items: [
      {
        tag: 'Before you go',
        title: 'Planning',
        icon: 'sparkle',
        body: 'Plan the whole trip by chatting. Tell Yaycay your crew, your dates and your must-dos, and it builds a day-by-day holiday around each child, with every meal allergy-checked. Change your mind out loud and the plan reshapes.',
      },
      {
        tag: 'While you are there',
        title: 'Travelling',
        icon: 'compass',
        body: 'On the ground, Yaycay travels with you. Ask what is good to eat near here, pull a rain plan in one tap, reshuffle a tired afternoon. The flags and checks follow you all the way to the table.',
      },
    ],
  },
  connect: {
    eyebrow: 'Conversational, and connected',
    headline: 'You plan by talking. With the AI you already use.',
    body: "Yaycay is a conversation, not a form to fill in. And if you already pay for ChatGPT, Claude or Gemini, connect it: the whole Yaycay family layer, per-child days, allergy checks and the kids' journals, runs on top of the assistant you already know, for less.",
    points: [
      'Just chat. No forms, no menus to wrangle, no blank page.',
      'Bring your own AI: connect ChatGPT, Claude or Gemini.',
      'The family layer rides on top: per-child plans, allergy flags, the keepsake.',
    ],
    cta: { label: 'Bring your own AI', href: '/connect' },
  },
  invisible: {
    headline: 'Nobody sees the work. We will list it anyway.',
    items: [
      'Researching whether the laksa place can do dairy-free.',
      'Holding the backup plan for the backup plan.',
      'Knowing the museum shuts at four on Tuesdays.',
      'Being asked "what are we doing today?" by four people who could, in theory, also read.',
      'Re-planning Thursday at 11pm because the forecast changed.',
      'Remembering which child is currently refusing which food.',
      'Booking things in a timezone you have not adjusted to yet.',
    ],
  },
  ledger: {
    headline: 'Hand it over. Piece by piece.',
    pairs: [
      { pain: 'The twenty research tabs', held: 'One chat that already knows your family.' },
      { pain: 'The restaurant vetting', held: 'Allergy flags, checks and reminders on every meal suggestion, with the reasoning shown, so you stay in control.' },
      { pain: 'The "what if it rains"', held: 'A contingency attached to every day before you leave.' },
      { pain: 'The being-the-itinerary', held: 'Everyone can see the plan. You are no longer the app.' },
      { pain: 'The 11pm re-plan', held: 'Tell Yaycay what changed. The plan reshapes itself.' },
      { pain: 'The bored-kid emergencies', held: 'Each child has their own adventures, built for their age, before boredom gets a vote.' },
    ],
    cta: { label: 'See how it works', href: '/how-it-works' },
  },
  commandCentre: {
    eyebrow: 'The grown-ups command centre',
    headline: 'Your side of the app. Behind one PIN.',
    body: 'Yaycay has two views. The kids live in Explorers: their adventures, their journal, their rewards. You get the Grown-ups view, opened with a simple four-digit PIN the kids never see. It holds the part of the trip that is yours to carry.',
    items: [
      'The full plan: bookings, times and logistics, in one place.',
      'The safety view in full: every note shown to you, not the kid "ask a grown-up" cue.',
      'The allergy and EpiPen protocol, with the dietary flags for your crew.',
      'The grown-ups guide and checklist, packing and documents.',
      'Manage every profile: add a child, set their age band, let it grow with them.',
    ],
  },
  group: {
    headline: 'Seven people, three dietary needs, one nana who naps at two.',
    subhead: 'Big mixed groups are where family plans usually fall apart. They are where Yaycay starts.',
    body: 'Tell Yaycay everyone who is coming: the toddler, the teenager who claims to hate everything, the grandparents and what their knees can manage. The plan balances energy levels across the group, splits the day where it helps (teens to the climbing wall, nana to the gardens, everyone back together for dinner), and carries every dietary need in every meal suggestion. You stop being the diplomat. The plan does the negotiating.',
  },
  present: {
    headline: 'And on the trip itself, you get to be present.',
    body: 'That is the actual product. Not the itinerary, not the app. The version of the holiday where you are at the table, in the pool, in the photo, because the answers are handled. Parents tell us the strangest part is the quiet: nobody asking you what is next, because everyone already knows.',
  },
  closing: {
    headline: 'Start by handing over one day.',
    subhead: 'Three questions about your trip. We will plan one full day, free, allergy checks and rain plan included. In your inbox within 24 hours.',
    secondary: { label: 'Travelling with an allergy? Read this first', href: '/allergy-safety' },
  },
};

// ---- Explorer types (the four user types, promise-led) ----
// Lead with the promise to each person, then the experiences that back it up.
export const explorerTypes = {
  eyebrow: 'One holiday, every age',
  title: 'One holiday. Four ways to live it.',
  intro: 'Everyone in the family gets their own version of the same trip, pitched to exactly where they are. Here is the promise we make to each of them, and the experiences that keep it.',
  types: [
    {
      badge: '🐣',
      name: 'Little Explorer',
      age: 'Under 6',
      promise: 'The littlest one leads, before they can even read.',
      experiences: [
        'Their day, read aloud. They tap, Yaycay reads. No reading required.',
        'Gentle on purpose. Wow-facts and stickers, never puzzles or pressure.',
        'Wins they can collect. Stars and reward stickers, just for doing the day.',
      ],
      tone: 'sun',
    },
    {
      badge: '🧭',
      name: 'Explorer',
      age: '7 to 11',
      promise: 'They are excited about tomorrow before today is even over.',
      experiences: [
        'Puzzles hidden in the day. A challenge waiting at every stop.',
        'A reason to come back. Wow-facts, streaks and a growing star bank.',
        'Their own journal. They record the trip themselves, in their words.',
      ],
      tone: 'sky',
    },
    {
      badge: '🚀',
      name: 'Big Explorer',
      age: '12 to 16',
      promise: 'The one who is "too cool for this" quietly gets into it.',
      experiences: [
        'Deeper by design. Bonus quizzes and deep-dive facts, not baby stuff.',
        'Treated their age. Real challenges for the completionist who would otherwise age out.',
        'Theirs to keep. A journal and keepsake a teenager actually holds on to.',
      ],
      tone: 'coral',
    },
    {
      badge: '🛡️',
      name: 'Grown Ups',
      age: 'You',
      promise: 'You get to be on the holiday, not run it.',
      experiences: [
        'The whole plan, behind one PIN. Bookings, logistics and the grown-ups guide.',
        'The safety view in full. Allergy and EpiPen protocol the kids never need to see.',
        'You hold the plan. They hold the magic.',
      ],
      tone: 'royal',
      href: '/for-parents',
      hrefLabel: 'See the grown-ups command centre',
    },
  ],
  access: {
    title: 'Grown-ups stuff stays with the grown-ups.',
    body: 'Children live in the Explorers view: their adventures, their journal, their rewards. The logistics, the bookings and the full safety notes live in the Grown-ups view, behind a simple four-digit PIN. On a child profile, that view is not switched off, it is not there at all.',
  },
  grows: {
    title: 'One account. Every age. It grows with them.',
    body: 'Add a profile for each child and Yaycay pitches every day to them. A four-year-old, a fourteen-year-old and you, on the same trip, each getting their own version. When the little one becomes an Explorer, the trip grows up with them.',
  },
};

export const footer = {
  blurb: 'A family holiday companion. One chat builds the trip, every child gets an adventure, and the family keeps the memories.',
  legal:
    'Yaycay provides planning assistance and information, not medical or safety guarantees. Always confirm allergy and dietary requirements directly with food providers.',
  columns: [
    {
      heading: 'Product',
      links: [
        { label: 'How it works', href: '/how-it-works' },
        { label: 'Sample day', href: '/sample-day' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Connect your own AI', href: '/connect' },
        { label: 'Build your free day', href: '/free-day' },
      ],
    },
    {
      heading: 'For families',
      links: [
        { label: 'For parents', href: '/for-parents' },
        { label: 'For kids', href: '/for-kids' },
        { label: 'Allergy and dietary safety', href: '/allergy-safety' },
        { label: 'FAQ', href: '/faq' },
      ],
    },
    {
      heading: 'Learn',
      links: [
        { label: 'Destination guides', href: '/guides' },
        { label: 'Answers', href: '/answers' },
        { label: 'Compare Yaycay', href: '/vs' },
        { label: 'vs Wanderlog', href: '/vs/wanderlog' },
        { label: 'vs Layla', href: '/vs/layla' },
        { label: 'vs Mindtrip', href: '/vs/mindtrip' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Privacy', href: '/legal/privacy' },
        { label: 'Terms', href: '/terms' },
      ],
    },
  ],
};

export const connect = {
  title: 'Connect your own AI',
  intro:
    'On the Bring your own AI plan, Yaycay plugs into the assistant you already use, so it can build and run your whole trip from inside your own chat. It takes about two minutes. Pick your assistant below.',
  needs: [
    'A Yaycay account, plus your personal connection link (find it in your Yaycay dashboard under Settings, then Connect).',
    'A current ChatGPT, Claude or Gemini account on a plan that supports connectors.',
  ],
  providers: [
    {
      id: 'chatgpt',
      name: 'ChatGPT',
      tone: 'meadow',
      steps: [
        'In ChatGPT, open Settings and go to Connectors (available on Plus, Pro and Business plans).',
        'Choose Add custom connector and paste your Yaycay connection link.',
        'Sign in when prompted and approve access. This authorises Yaycay for your account only, and you can remove it any time.',
        'Start a new chat, switch on the Yaycay connector, and say "Plan our family holiday". Yaycay takes it from there.',
      ],
    },
    {
      id: 'claude',
      name: 'Claude',
      tone: 'sun',
      steps: [
        'In Claude, open Settings and go to Connectors.',
        'Choose Add custom connector and paste your Yaycay connection link.',
        'Complete the sign-in and approve the permissions Yaycay requests.',
        'Open a new chat, enable Yaycay, and ask it to start planning your trip.',
      ],
    },
    {
      id: 'gemini',
      name: 'Gemini',
      tone: 'sky',
      steps: [
        'In Gemini, open your Extensions or Apps settings.',
        'Add Yaycay with your connection link, or find Yaycay in the directory if it is listed there.',
        'Sign in and grant access when Gemini asks.',
        'Mention Yaycay in a prompt, for example "Use Yaycay to plan our trip", to begin.',
      ],
    },
  ],
  help: 'Stuck on any step? Email hello@yaycay.ai and we will get you connected.',
};

// ---- Destination guides (organic acquisition engine; T8 template) ----

export const guidesHub = {
  title: 'Family destination guides, written by people who travel with kids.',
  intro:
    'Real ages, real allergy notes, real nap-time maths. Every guide is free and none of them gate anything.',
  closing: {
    headline: 'Reading about it is step one. Want a day of it planned?',
    subhead:
      'Pick your destination in the form and we will build one real day there for your family, free.',
  },
};

/**
 * The guide template (work-order T8). Sections 1 to 5 and 7 are the repeatable
 * skeleton: summary box, why it works, age bands, allergy and food, practical
 * grid, contextual CTA. Singapore is verbatim from spec; the rest follow the
 * skeleton. {Curly-brace} items are founder-fill placeholders left as-is.
 */
export const guides = {
  'singapore-with-kids': {
    destination: 'Singapore',
    card: {
      ages: 'Best for ages 4 to 12',
      hook: 'The easiest "big trip" first step. Hawker food with allergy notes included.',
    },
    title: "Singapore with kids: the family guide we wish we'd had",
    subhead:
      'Why Singapore might be the easiest big trip you ever take with children, and the handful of things that still catch parents out.',
    summaryLabel: 'The short version',
    summary:
      'Best ages: 4 to 12. Ideal length: 4 to 6 days. Walkability: excellent, with the best public transport you will ever take a pram on. Food for fussy or allergic kids: very manageable with the right approach; hawker centres need care, detail below. The one mistake everyone makes: overpacking the schedule, because everything is so close together it feels free.',
    whyHead: 'Why it works',
    why:
      'Singapore is the destination experienced family travellers recommend to nervous ones. English is everywhere. Tap water is drinkable. The MRT is clean, cheap, air-conditioned and a genuine attraction for transport-mad kids. Distances are tiny: you are rarely more than thirty minutes from the hotel, which changes everything when a six-year-old hits the wall. And the city takes children seriously; playgrounds, splash zones and kid-aware design show up in places that would be adults-only anywhere else. The trade-offs are honest ones: it is expensive by Southeast Asian standards, the heat is real and shapes your day, and afternoon storms are close to a daily event between November and January.',
    ageHead: 'What to do, by the ages you are actually bringing',
    ageBands: [
      {
        label: 'Ages 4 to 6',
        body: "Gardens by the Bay's Far East Organization Children's Garden (a free water-play park; bring swimmers everywhere in Singapore, this will not be the only time). The Jacob Ballas Children's Garden, the world's first garden designed for kids. The zoo over the night safari at this age; the dark plus the late hour beats most little kids.",
      },
      {
        label: 'Ages 7 to 9',
        body: "The Cloud Forest at Gardens by the Bay, which lands like a real-life video game level. The Science Centre with the Mirror Maze. Sentosa's beaches plus the cable car, which at this age is an attraction in itself.",
      },
      {
        label: 'Ages 10 to 12',
        body: 'The Night Safari, now they can stay up for it. Hydrodash inflatable aqua park at Sentosa. The Southern Ridges treetop walk early in the morning before the heat. Hawker-centre food crawls become genuinely fun at this age rather than a logistics problem.',
      },
      {
        label: 'Mixed ages',
        body: 'Gardens by the Bay and Sentosa both split well: water play for the youngest, bigger thrills for the oldest, regroup for food. Plan your regroup points before you split; phone signal is good but agreed meeting spots are better.',
      },
    ],
    foodHead: 'Eating in Singapore with allergies and fussy eaters',
    food:
      'Singapore is one of the better cities in Asia for allergy-aware travel, but it asks for a method. Peanuts and tree nuts are common in hawker food: satay sauce, many noodle dishes, and kaya (the breakfast jam) which is coconut but often sits alongside nut products. Shared woks and shared oil make cross-contact likely at hawker stalls, so for serious allergies, treat stalls as higher-risk and lean on sit-down restaurants, which increasingly publish allergen menus, especially in malls and hotels. Helpful locals are the norm, but stall holders are busy; a written card in English and Mandarin stating the allergy clearly gets better answers than a shouted question across a counter. For fussy eaters: chicken rice is the universal beige food, every mall food court has plain noodles, and fruit at hawker dessert stalls rescues many evenings. None of this is a guarantee; menus and kitchens change, so always confirm with the person cooking, on the day.',
    foodCta: { label: 'How we handle allergy checks on real trips', href: '/allergy-safety' },
    practicalHead: 'The practical bits',
    practical:
      "When to go: February to April for the driest stretch; avoid the December school-holiday crush unless you are in it. Getting around: MRT for almost everything; taxis and Grab are easy and air-conditioned for the wilted end of the day. Prams: the most pram-friendly city in Asia; lifts in every station. Rain: assume a storm most afternoons in the wet season and plan one indoor anchor per day (museums, the ArtScience Museum, Changi's Jewel). Heat: do the big outdoor thing before 11am, swim or go indoors from 1 to 4, re-emerge for the evening. Budget signal: expensive for the region; hawker meals are the great equaliser at a few dollars a plate.",
    sampleHead: 'What one Yaycay day in Singapore looks like',
    sample:
      'We publish a full, unedited free day from a real family\'s Singapore trip: three kids, a tree-nut allergy, and an afternoon storm, all handled. If you want to see how everything above turns into an actual Tuesday, it is the best five-minute read on this site.',
    sampleCta: { label: 'Read the Singapore sample day', href: '/sample-day' },
    closing: {
      headline: 'Build your free Singapore day',
      subhead:
        'Tell us when you are going and who is coming, ages and any allergies included. One real day of your Singapore trip, free, in your inbox within 24 hours.',
    },
    heroBrief:
      'Documentary family-travel photo, Singapore: a parent and two school-age children at Gardens by the Bay with the Supertree Grove behind, mid-morning light, prams and water bottles visible. No identifiable minor faces (shot from behind or three-quarter). Warm, real, not stocky.',
  },

  'japan-with-kids': {
    destination: 'Japan',
    card: {
      ages: 'Best for ages 6 to 14',
      hook: 'Bullet trains, vending-machine novelty and the most orderly chaos your kids will ever love.',
    },
    title: 'Japan with kids: the family guide we wish we\'d had',
    subhead:
      'Why Japan is far easier with children than its reputation suggests, and the few things that genuinely catch families out.',
    summaryLabel: 'The short version',
    summary:
      'Best ages: 6 to 14, when kids can walk a city day and remember it. Ideal length: 7 to 10 days, two or three bases, not a city a day. Walkability: excellent, and the trains are a destination in their own right. Food for fussy or allergic kids: easy for fussy eaters, genuinely demanding for nut and other allergies because ingredients are not always obvious, detail below. The one mistake everyone makes: trying to "do" Tokyo, Kyoto and Osaka in a week and spending the trip on platforms.',
    whyHead: 'Why it works',
    why:
      'Japan rewards children with novelty at every turn: the shinkansen at 300km/h, capsule-toy machines on every corner, themed everything, and a level of public calm that makes travelling with kids feel unusually low-friction. It is exceptionally safe, spotlessly clean, and the trains run to the second, which turns logistics into something kids find thrilling rather than tedious. The trade-offs are real: the language barrier is steeper than Singapore, cash still matters in smaller places, summers are punishingly humid, and the cultural emphasis on not inconveniencing others can feel like pressure when you are travelling with a tired toddler. Spring and autumn are the kind, mild windows.',
    ageHead: 'What to do, by the ages you are actually bringing',
    ageBands: [
      {
        label: 'Ages 6 to 8',
        body: 'teamLab Planets in Tokyo, which is wading-through-water, touch-everything wonder. The shinkansen ride itself, booked with a window seat and a station bento. Nara to feed the (very bold) deer. Keep days short and snack-led.',
      },
      {
        label: 'Ages 9 to 11',
        body: 'Ghibli Park or the Ghibli Museum if you can secure tickets (book the moment they release). Universal Studios Japan in Osaka. A go-kart or cycling afternoon along the Kyoto riverbanks. This is the age the trains stop being a novelty and start being a game.',
      },
      {
        label: 'Ages 12 to 14',
        body: 'Akihabara and Pokémon or Nintendo flagship stores. A day trip to Hakone for the pirate ship, ropeway and a first onsen experience (check tattoo and bathing rules in advance). Day-hikes around Nikko or Kamakura. Older kids can navigate the metro themselves with a prepaid IC card, which they love.',
      },
      {
        label: 'Mixed ages',
        body: 'Pick a single base per region and do day trips out, so nobody is dragging a suitcase through a station. An afternoon at an aquarium (Osaka\'s Kaiyukan, Tokyo\'s Sumida) resets everyone. Agree a meeting spot at every station; crowds are large and signage is dense.',
      },
    ],
    foodHead: 'Eating in Japan with allergies and fussy eaters',
    food:
      'Japan is wonderful for fussy eaters and genuinely demanding for allergies, so go in with a method. For nut and tree-nut allergies, the difficulty is that allergens hide in places Western parents do not expect: dashi and sauces, fillings in wagashi sweets, and frying oils. Soy, wheat, egg, fish and shellfish run through the cuisine, so coeliac and serious allergy families should plan rather than wing it. Convenience stores (konbini) are a fussy eater\'s best friend: onigiri, plain rice, fruit, and packaged foods that carry Japanese allergen labelling. Many chain restaurants and department-store food halls now publish allergen charts; a clearly written allergy card in Japanese, naming the specific allergen and the cross-contact question, gets far better results than spoken English. {Founder to confirm the current best Japanese-language allergy-card wording with a native speaker before publishing.} None of this is a guarantee; ingredients and kitchens change, so always confirm with the person cooking, on the day.',
    foodCta: { label: 'How we handle allergy checks on real trips', href: '/allergy-safety' },
    practicalHead: 'The practical bits',
    practical:
      'When to go: late March to May for cherry blossom and mild days, or October to November for autumn colour; avoid the July and August humidity with young kids. Getting around: a prepaid IC card (Suica or Pasmo) for every family member beats paper tickets; weigh a Japan Rail Pass only if you are covering long distances. Prams: cities are pram-friendly but older stations have stairs; the konbini and station lifts save you. Cash: carry some; smaller shops and shrines are still cash-only. Connectivity: rent a pocket wifi or buy an eSIM at the airport, because navigation is the whole game. Budget signal: mid-to-high, but konbini meals and conveyor-belt sushi keep everyday eating affordable.',
    sampleHead: 'What one Yaycay day in Japan looks like',
    sample:
      'The clearest way to picture a Yaycay day is the one we publish in full: a real family, two kids of different ages, an allergy in the mix, and a wet afternoon handled without anyone googling on a platform. It is a five-minute read and it is the same shape your Japan day would take.',
    sampleCta: { label: 'Read a real Yaycay sample day', href: '/sample-day' },
    closing: {
      headline: 'Build your free Japan day',
      subhead:
        'Tell us when you are going and who is coming, ages and any allergies included. One real day of your Japan trip, free, in your inbox within 24 hours.',
    },
    heroBrief:
      'Documentary family-travel photo, Japan: a parent and two children boarding or beside a shinkansen at a platform, station bento and small backpacks visible, soft daylight. No identifiable minor faces. Real and warm, not stock.',
  },

  'bali-with-kids': {
    destination: 'Bali',
    card: {
      ages: 'Best for ages 3 to 12',
      hook: 'Pools, rice-terrace walks and the gentlest first taste of Asia for little ones.',
    },
    title: 'Bali with kids: the family guide we wish we\'d had',
    subhead:
      'Why Bali is one of the softest landings for a first Asian trip with young children, and the practical bits that protect the holiday.',
    summaryLabel: 'The short version',
    summary:
      'Best ages: 3 to 12, with toddlers and under-sevens especially well served. Ideal length: 7 to 10 days, one or two bases, slow pace. Walkability: low; you will use drivers and scooters, not footpaths. Food for fussy or allergic kids: easy for fussy eaters at resorts, needs care for serious allergies and for stomach safety, detail below. The one mistake everyone makes: booking a villa far from everything, then spending the trip in traffic.',
    whyHead: 'Why it works',
    why:
      'Bali is built for relaxed family time: warm, affordable, and culturally gentle with children, who are genuinely welcomed everywhere. Private villas with their own pools cost a fraction of a European hotel, which changes the whole rhythm of a trip with little kids, and a day driver for a few hours is cheap enough to skip the stress of self-driving. There is real nature (rice terraces, waterfalls, monkeys) alongside resort comfort. The trade-offs are honest: traffic between hubs is slow and tiring, footpaths are poor so it is not a pram-strolling city, "Bali belly" is a genuine risk that wants water discipline, and the most famous spots are crowded and commercialised. Pick the right base and Bali is one of the easiest trips on this list; pick the wrong one and you will see a lot of road.',
    ageHead: 'What to do, by the ages you are actually bringing',
    ageBands: [
      {
        label: 'Ages 3 to 5',
        body: 'The villa pool is the headline attraction and that is fine. Add the Bali Safari and Marine Park, gentle beach time at Sanur (calm, shallow water rather than surf), and Waterbom waterpark in Kuta for an easy big day. Keep it to one outing a day.',
      },
      {
        label: 'Ages 6 to 9',
        body: 'The Sacred Monkey Forest in Ubud (hold little hands and hide the snacks), a rice-terrace walk at Tegalalang early before the heat and crowds, and a beginner surf lesson at Kuta or Canggu with a reputable school. The Bali Zoo elephant and animal encounters land well at this age.',
      },
      {
        label: 'Ages 10 to 12',
        body: 'A sunrise-adjacent waterfall trip (Tegenungan is the easy one, Sekumpul the adventurous one), snorkelling day trips from Sanur or over on Nusa Lembongan, and a proper surf progression. This age can handle the bigger driving days that unlock the north and east.',
      },
      {
        label: 'Mixed ages',
        body: 'Base yourself in Sanur or Ubud to cut driving, and let the villa pool be the regroup point between outings. Hire a driver for full-day trips so the adults are not exhausted by the road. Build in genuine nothing-days; the heat and travel catch up with little ones fast.',
      },
    ],
    foodHead: 'Eating in Bali with allergies and fussy eaters',
    food:
      'Bali is easy for fussy eaters and asks for real care on two fronts: allergies and stomach safety. For allergies, peanuts and tree nuts are central to Indonesian cooking; satay and gado-gado are peanut-based, and nut pastes and oils appear widely, so cross-contact at smaller warungs is likely. Resort and tourist-area restaurants increasingly understand allergies and many will adapt dishes, but a clearly written allergy card in Bahasa Indonesia, naming the allergen and the cross-contact question, gets far better answers than spoken English. {Founder to confirm current Bahasa Indonesia allergy-card wording with a native speaker.} For stomach safety, stick to bottled or filtered water (including for teeth), be wary of ice and unpeeled raw produce outside trusted kitchens, and pack rehydration sachets; "Bali belly" ends more family days here than allergies do. Fussy eaters do well: rice, plain noodles, fruit, and Western menus are everywhere in tourist areas. None of this is a guarantee; ingredients and kitchens change, so always confirm with the person cooking, on the day.',
    foodCta: { label: 'How we handle allergy checks on real trips', href: '/allergy-safety' },
    practicalHead: 'The practical bits',
    practical:
      'When to go: April to October is the dry season and the safe family bet; the November to March wet season brings daily downpours and heavier humidity. Getting around: hire a private driver for day trips and use ride apps (Grab, Gojek) in the south; self-driving a scooter with kids is not worth the risk. Prams: bring a sturdy carrier instead; footpaths are poor and uneven. Health: drink bottled water only, pack rehydration salts and any regular medication, and check travel-vaccination advice well before you fly. Money: carry cash for warungs and markets; cards work in resorts and bigger restaurants. Budget signal: low to mid; villas and food are excellent value, drivers and activities are the main spend.',
    sampleHead: 'What one Yaycay day in Bali looks like',
    sample:
      'We publish one real Yaycay day in full so you can see the shape of it: two kids of different ages, an allergy handled at every meal, and a plan that bends around the weather and the nap. It is a five-minute read, and your Bali day would be built exactly the same way.',
    sampleCta: { label: 'Read a real Yaycay sample day', href: '/sample-day' },
    closing: {
      headline: 'Build your free Bali day',
      subhead:
        'Tell us when you are going and who is coming, ages and any allergies included. One real day of your Bali trip, free, in your inbox within 24 hours.',
    },
    heroBrief:
      'Documentary family-travel photo, Bali: a parent and young children at a green Tegalalang rice terrace or a calm villa pool, soft morning light, sun hats and water bottles. No identifiable minor faces. Warm and real, not stock.',
  },

  'london-with-kids': {
    destination: 'London',
    card: {
      ages: 'Best for ages 5 to 14',
      hook: 'World-class free museums, double-decker front seats and a park between every plan.',
    },
    title: 'London with kids: the family guide we wish we\'d had',
    subhead:
      'Why London is one of the best-value family city breaks in the world if you know where the free wins are, and the few things that catch families out.',
    summaryLabel: 'The short version',
    summary:
      'Best ages: 5 to 14. Ideal length: 4 to 5 days, one base, neighbourhood by neighbourhood. Walkability: good, and the public transport is excellent once you have the right cards. Food for fussy or allergic kids: easy for fussy eaters and among the best cities anywhere for allergy labelling, detail below. The one mistake everyone makes: paying for big-ticket attractions while the world-class museums next door are free.',
    whyHead: 'Why it works',
    why:
      'London is quietly one of the great family destinations because so much of the best of it is free: the British Museum, the Natural History Museum, the Science Museum, the Tate galleries and dozens more cost nothing to enter, and they are genuinely world-class. Everyone speaks the language, there are parks and playgrounds threaded through every district, and the top deck at the front of a red bus is a free attraction in itself. The trade-offs are real ones: it is expensive for food and paid attractions, the weather is unreliable in any season, the Underground is hot and step-heavy with a pram, and the scale of the place means a badly planned day is mostly spent in transit. Plan around free anchors and the city becomes remarkably affordable.',
    ageHead: 'What to do, by the ages you are actually bringing',
    ageBands: [
      {
        label: 'Ages 5 to 7',
        body: 'The Natural History Museum dinosaurs (free), the playground and Diana Memorial fountain in Kensington Gardens, and a ride on the top deck of a bus going anywhere. The London Transport Museum in Covent Garden is a sleeper hit. Keep one big thing per day, plus a park.',
      },
      {
        label: 'Ages 8 to 10',
        body: 'The Science Museum\'s hands-on Wonderlab (book ahead), a Thames riverboat from Westminster to Greenwich, and the changing of the guard if the timing is easy rather than a mission. The Warner Bros. Studio Tour (Harry Potter) is a full, pricey, brilliant day for the right kid.',
      },
      {
        label: 'Ages 11 to 14',
        body: 'The Tower of London (the ravens and Crown Jewels still land at this age), a West End matinee, the View from the Shard or the cheaper Sky Garden, and letting them navigate the Tube with a contactless card. Borough Market is a genuinely fun food adventure for older kids.',
      },
      {
        label: 'Mixed ages',
        body: 'South Kensington is the cheat code: three major free museums and a park within a few minutes of each other, so you can split by interest and regroup. Big green spaces (Hyde Park, Greenwich, Hampstead Heath) reset everyone. Agree a meeting point before anyone disappears into a gift shop.',
      },
    ],
    foodHead: 'Eating in London with allergies and fussy eaters',
    food:
      'London is one of the easiest major cities in the world for allergy-aware families, thanks to strict UK food-labelling law. Packaged foods must clearly label the 14 major allergens, restaurants are legally required to provide allergen information on request, and most chains publish detailed allergen menus online that you can check before you go. That does not remove the need for vigilance: cross-contact in busy kitchens is still real, and staff knowledge varies, so always tell the server directly and ask them to check rather than relying on the menu alone. For fussy eaters, London is effortless: every cuisine on earth, plain options everywhere, and supermarkets (Tesco, Sainsbury\'s, M&S) on every corner with clearly labelled, child-friendly food for picnic lunches that also save serious money. None of this is a guarantee; kitchens and recipes change, so always confirm with the person serving you, on the day.',
    foodCta: { label: 'How we handle allergy checks on real trips', href: '/allergy-safety' },
    practicalHead: 'The practical bits',
    practical:
      'When to go: May, June and September for the kindest weather and lighter crowds; December is cold but magic if you lean into it. Getting around: use contactless or Apple Pay to tap on and off; under-11s travel free on the Tube and buses with a paying adult, and buses are easier than the step-heavy Underground with a pram. Prams: buses over Tube where you can; many stations have no lift. Weather: pack a waterproof layer whatever the forecast and keep one indoor anchor per day. Money-saver: the free national museums are the backbone of an affordable trip; picnic from a supermarket to dodge central-London food prices. Budget signal: high for food and paid attractions, but free museums and parks bring the daily average right down.',
    sampleHead: 'What one Yaycay day in London looks like',
    sample:
      'The fastest way to see how Yaycay plans a day is the real one we publish in full: two kids of different ages, an allergy managed at every meal, and a wet afternoon already handled. It is a five-minute read, and a London day would be built to exactly the same shape.',
    sampleCta: { label: 'Read a real Yaycay sample day', href: '/sample-day' },
    closing: {
      headline: 'Build your free London day',
      subhead:
        'Tell us when you are going and who is coming, ages and any allergies included. One real day of your London trip, free, in your inbox within 24 hours.',
    },
    heroBrief:
      'Documentary family-travel photo, London: a parent and two children on the front seats of a red double-decker top deck, or outside the Natural History Museum, soft grey daylight, raincoats to hand. No identifiable minor faces. Real and warm, not stock.',
  },

  'gold-coast-with-kids': {
    destination: 'Gold Coast',
    card: {
      ages: 'Best for ages 2 to 14',
      hook: 'Theme parks, patrolled beaches and koalas, almost all within a short drive.',
    },
    title: 'Gold Coast with kids: the family guide we wish we\'d had',
    subhead:
      'Why the Gold Coast is the rare destination that genuinely suits toddlers and teenagers at once, and the few things worth planning around.',
    summaryLabel: 'The short version',
    summary:
      'Best ages: 2 to 14, one of the widest age spans on this list. Ideal length: 5 to 7 days, one base, theme parks rationed not bingeed. Walkability: low between hubs, easy within them; you will want a car. Food for fussy or allergic kids: very manageable, with strong Australian allergen labelling, detail below. The one mistake everyone makes: doing theme parks on back-to-back days until everyone is fried, instead of alternating with beach and pool.',
    whyHead: 'Why it works',
    why:
      'The Gold Coast packs an unusual amount into a small, sunny, English-speaking strip: four major theme parks, kilometres of patrolled surf beaches, calm broadwater for little ones, and rainforest and wildlife a short drive inland. It is easy in all the ways an overseas trip is not: clean tap water, familiar food, excellent healthcare, and a culture built around families and the outdoors. The trade-offs are mild but real: theme-park tickets and school-holiday crowds add up fast, the surf beaches have real rips so swim between the flags, the summer sun is fierce and wants serious sun protection, and the resort strip can feel built-up if you were hoping for wild nature. Hire a car and the region opens right up.',
    ageHead: 'What to do, by the ages you are actually bringing',
    ageBands: [
      {
        label: 'Ages 2 to 5',
        body: 'The calm, shallow water at the Broadwater Parklands and its free water-play area, the koalas and gentle animal encounters at Currumbin Wildlife Sanctuary, and an hour at a single theme park rather than a full day. Little ones do not need much more than sand, water and a nap.',
      },
      {
        label: 'Ages 6 to 9',
        body: 'Sea World for the animals and the smaller rides, Currumbin\'s lorikeet feeding, and a first proper boogie-board session on a patrolled beach. Tamborine Mountain\'s rainforest walks and the glow-worm caves make an easy, cooler inland day.',
      },
      {
        label: 'Ages 10 to 14',
        body: 'The big-ticket coasters at Dreamworld, Movie World and Warner Bros., a stand-up paddleboard or jet-ski session on the Broadwater, and a surf lesson with a proper school. This age can handle a SkyPoint climb and the longer rainforest hikes in the hinterland.',
      },
      {
        label: 'Mixed ages',
        body: 'Alternate a theme-park day with a beach-and-pool day so nobody burns out, and choose parks that span the ages (Sea World and Movie World both have gentle and thrilling sides). Base near Broadbeach or Main Beach for easy regroups, and agree a meeting point inside the parks before you split up.',
      },
    ],
    foodHead: 'Eating on the Gold Coast with allergies and fussy eaters',
    food:
      'Australia is a strong environment for allergy-aware families, with clear national food-labelling laws that require the major allergens to be declared on packaged food, and a café and restaurant culture that is generally allergy-literate. Most venues will happily tell you what is in a dish and many publish allergen information, though cross-contact in busy kitchens is still a real risk, so always tell the staff directly and ask them to check rather than trusting the menu alone. Fussy eaters are very well catered for: familiar Western food everywhere, kids\' menus as standard, and supermarkets (Coles, Woolworths) with clearly labelled food for self-catering, which also tames theme-park food prices. The theme parks themselves can usually accommodate allergies if you contact guest services ahead. None of this is a guarantee; kitchens and recipes change, so always confirm with the person serving you, on the day.',
    foodCta: { label: 'How we handle allergy checks on real trips', href: '/allergy-safety' },
    practicalHead: 'The practical bits',
    practical:
      'When to go: April, May, September and October for warm, dry, less-crowded weeks; avoid the December and January school-holiday peak for theme parks unless you book everything ahead. Getting around: hire a car; the parks, beaches and hinterland are spread out and public transport is limited. Beaches: always swim between the red-and-yellow flags, where lifesavers patrol; the surf has real rips. Sun: the UV is extreme much of the year, so hats, shirts and rehydration are not optional. Tickets: buy multi-park or multi-day passes online in advance for the best price. Budget signal: mid to high once theme-park tickets stack up; beaches, parklands and self-catering keep it grounded.',
    sampleHead: 'What one Yaycay day on the Gold Coast looks like',
    sample:
      'To see how a Yaycay day actually reads, look at the real one we publish in full: two kids of different ages, an allergy flagged at every meal, and a plan that flexes around energy and weather. It is a five-minute read, and a Gold Coast day would be built to the same shape.',
    sampleCta: { label: 'Read a real Yaycay sample day', href: '/sample-day' },
    closing: {
      headline: 'Build your free Gold Coast day',
      subhead:
        'Tell us when you are going and who is coming, ages and any allergies included. One real day of your Gold Coast trip, free, in your inbox within 24 hours.',
    },
    heroBrief:
      'Documentary family-travel photo, Gold Coast: a parent and children on a patrolled surf beach between the flags with boards, or feeding lorikeets at a wildlife sanctuary, bright Australian sun, hats and rash vests. No identifiable minor faces. Real and warm, not stock.',
  },

  'paris-with-kids': {
    destination: 'Paris',
    card: {
      ages: 'Best for ages 5 to 13',
      hook: 'A playground in every garden, and a pastry that ends every meltdown.',
    },
    title: 'Paris with kids: the family guide we wish we\'d had',
    subhead:
      'Why Paris is far more child-friendly than its grown-up reputation, and the handful of things that protect the day with kids in tow.',
    summaryLabel: 'The short version',
    summary:
      'Best ages: 5 to 13. Ideal length: 4 to 5 days, one base, one big thing a day. Walkability: excellent and beautiful, though the Metro is step-heavy with a pram. Food for fussy or allergic kids: easy for fussy eaters, and improving for allergies under EU labelling law, detail below. The one mistake everyone makes: queuing for hours at the Eiffel Tower and Louvre instead of trading them for the gardens and smaller museums kids actually prefer.',
    whyHead: 'Why it works',
    why:
      'Paris hides a brilliant children\'s city inside the romantic one: nearly every formal garden has a playground, a carousel, a puppet theatre or toy sailboats to push around a pond, and the bakeries mean a restorative pain au chocolat is never more than a block away. It is compact and walkable, the parks are everywhere, and many of the best museums for kids are small and quick rather than marathon halls. The trade-offs are honest: the headline attractions involve long queues and crowds, the older Metro stations are full of stairs and short on lifts, the city is expensive, and service can feel brisk if you arrive expecting it to revolve around your toddler. Book the big things ahead, lean on the gardens, and Paris with kids is a delight.',
    ageHead: 'What to do, by the ages you are actually bringing',
    ageBands: [
      {
        label: 'Ages 5 to 7',
        body: 'The toy sailboats and carousel in the Jardin du Luxembourg, the puppet shows (guignol) in several parks, and the Jardin d\'Acclimatation, a proper little amusement garden. The Eiffel Tower is best admired and picnicked under from the Champ de Mars rather than queued for at this age.',
      },
      {
        label: 'Ages 8 to 10',
        body: 'The Cité des Sciences at La Villette, one of Europe\'s best hands-on science museums, with a dedicated children\'s area. A Seine boat trip (Batobus lets you hop on and off), and the menagerie or the Grande Galerie de l\'Évolution at the Jardin des Plantes. A day at Disneyland Paris is a big, separate adventure if the budget allows.',
      },
      {
        label: 'Ages 11 to 13',
        body: 'A focused Louvre visit (one wing, booked ahead, treasure-hunt style), the climb up the Arc de Triomphe for the best view in the city, the Catacombs for the ghoulishly inclined, and the street art and food of Montmartre. This age can do a half-day at the Palace of Versailles and its gardens.',
      },
      {
        label: 'Mixed ages',
        body: 'Anchor each day on a big garden so the youngest has a playground while the oldest does a museum nearby, then regroup over a picnic. Trade queue-heavy icons for smaller wins, and book any paid attraction online to skip the lines. Agree a meeting spot at every Metro change; the network is dense.',
      },
    ],
    foodHead: 'Eating in Paris with allergies and fussy eaters',
    food:
      'Paris is straightforward for fussy eaters and steadily improving for allergies, helped by EU law that requires the 14 major allergens to be declared, including on restaurant menus or on request. Awareness among staff varies more than in the UK, and nuts, butter, eggs and gluten are woven deep into French baking and sauces, so cross-contact is a genuine consideration, especially in boulangeries and patisseries. A clearly written allergy card in French, naming the specific allergen and the cross-contact question, gets far better answers than spoken English and is worth preparing before you go. {Founder to confirm the current best French-language allergy-card wording with a native speaker.} Fussy eaters do well: baguettes, plain pasta, crêpes, ham and cheese, and supermarket (Monoprix, Franprix) picnics that also dodge restaurant prices and rigid lunch hours. None of this is a guarantee; recipes and kitchens change, so always confirm with the person serving you, on the day.',
    foodCta: { label: 'How we handle allergy checks on real trips', href: '/allergy-safety' },
    practicalHead: 'The practical bits',
    practical:
      'When to go: April to June and September to October for mild weather and gardens in their best form; August empties of locals and many small shops close. Getting around: walk the central districts, which are close together and lovely; use the Metro for distance but expect stairs, so buses are kinder with a pram. Prams: buses and a good carrier beat the step-heavy older Metro stations. Booking: reserve the Eiffel Tower, Louvre, Catacombs and any climb online well ahead to skip multi-hour queues. Money-saver: picnic from supermarkets and bakeries in the parks, a very Parisian thing to do, to tame food costs. Budget signal: high, but free parks, picnics and the under-18 free entry at national museums bring it down.',
    sampleHead: 'What one Yaycay day in Paris looks like',
    sample:
      'The clearest picture of a Yaycay day is the real one we publish in full: two kids of different ages, an allergy handled at every meal, and a wet afternoon already planned for. It is a five-minute read, and your Paris day would be built to exactly the same shape.',
    sampleCta: { label: 'Read a real Yaycay sample day', href: '/sample-day' },
    closing: {
      headline: 'Build your free Paris day',
      subhead:
        'Tell us when you are going and who is coming, ages and any allergies included. One real day of your Paris trip, free, in your inbox within 24 hours.',
    },
    heroBrief:
      'Documentary family-travel photo, Paris: a parent and children pushing toy sailboats at the Jardin du Luxembourg pond or picnicking on the Champ de Mars with the Eiffel Tower behind, soft afternoon light, a pastry bag in hand. No identifiable minor faces. Real and warm, not stock.',
  },
};

// ---- Answers (question-led acquisition, structured for AI citation; T9) ----

export const answersHub = {
  title: 'Family travel questions, answered properly.',
  intro:
    'The questions parents actually type at 11pm, answered by people who have lived them. No fluff, no gates.',
  themes: [
    {
      title: 'Allergies and dietary needs',
      questions: [
        { label: 'How do we eat out abroad with a nut-allergic child?', slug: 'eating-out-abroad-nut-allergy' },
        { label: 'What should an allergy translation card actually say?', slug: 'allergy-translation-card-what-to-say' },
      ],
    },
    {
      title: 'Flying with kids',
      questions: [
        { label: 'How do you keep kids entertained on a long-haul flight without infinite screens?', slug: 'long-haul-flight-kids-entertainment' },
      ],
    },
    {
      title: 'Planning and packing',
      questions: [
        { label: 'How far ahead should you plan a family holiday, honestly?', slug: 'how-far-ahead-plan-family-holiday' },
      ],
    },
    {
      title: 'On the trip',
      questions: [
        { label: 'What do you do when it rains and the day is ruined?', slug: 'what-to-do-when-it-rains' },
      ],
    },
    {
      title: 'Ages and stages',
      questions: [
        { label: 'What is the best age to take kids on their first big overseas trip?', slug: 'best-age-first-overseas-trip' },
      ],
    },
  ],
  closing: {
    headline: 'Some questions are better answered with a plan.',
    subhead:
      'Tell us about your trip and we will build one free day of it, your kids\' ages and allergies included.',
  },
};

/**
 * Answer-post template (work-order T9). Repeatable skeleton: direct-answer box,
 * method/prose/sober sections, one visually distinct product panel after the
 * full answer, related reading row. The product panel never appears before the
 * answer is complete. All allergy language follows the global liability frame.
 */
type AnswerSection =
  | { kind: 'method'; head: string; items: { lead: string; body: string }[] }
  | { kind: 'prose'; head: string; body: string }
  | { kind: 'sober'; head: string; body: string };

type AnswerImage = {
  src: string;
  alt: string;
  source: 'app-screenshot' | 'nanobanana';
  frame: 'phone' | 'browser' | 'none';
  brief: string;
  placement: 'intro' | 'product';
};

type AnswerPost = {
  theme: string;
  question: string;
  subhead: string;
  directAnswer: string;
  sections: AnswerSection[];
  product: {
    head: string;
    body: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  related: { label: string; href: string }[];
  image: AnswerImage;
};

export const answers: Record<string, AnswerPost> = {
  'eating-out-abroad-nut-allergy': {
    theme: 'Allergies and dietary needs',
    question: 'How do we eat out abroad with a nut-allergic child?',
    subhead:
      'A working method from parents who do it every trip: prepare three things before you fly, follow five steps at every meal, and know what to do if something goes wrong.',
    directAnswer:
      'The short answer: research your destination\'s cuisine for where nuts hide, carry a written allergy card in the local language, and confirm directly with the kitchen at every single meal, every time, even at familiar chains. No app, list or recommendation replaces that direct confirmation, ours included. The method below makes it routine instead of stressful.',
    sections: [
      {
        kind: 'method',
        head: 'Before you fly: three things to prepare',
        items: [
          {
            lead: 'Learn where nuts hide in the local cuisine.',
            body: "Every cuisine has its traps. Southeast Asia: satay sauces, noodle dishes, cooking oils. Italy: pesto, pastries, gianduja. Middle East and North Africa: tahini sits beside nut sauces, and baklava dust gets everywhere. Twenty minutes of reading about your destination's specific traps beats a hundred generic checklists.",
          },
          {
            lead: 'Make a written allergy card in the local language.',
            body: 'Not a translation app on the fly; a prepared card stating the allergy, its severity, and the question you need answered. Have a native speaker or a professional service check it; machine translation gets medical nuance wrong exactly when it matters. Print several, laminate one, photograph it.',
          },
          {
            lead: 'Sort medication logistics early.',
            body: "Adrenaline auto-injectors in original packaging, a doctor's letter for security and border checks, double the quantity you expect to need, split between two bags. Check your auto-injector brand's name in the destination country; brand names differ and a pharmacist may not recognise yours.",
          },
        ],
      },
      {
        kind: 'method',
        head: 'At every meal: the five-step routine',
        items: [
          {
            lead: 'Choose the venue before everyone is hungry.',
            body: 'Decision quality collapses when the family is starving on a pavement. Pick lunch at breakfast.',
          },
          {
            lead: 'Show the card, do not just say the words.',
            body: 'Spoken requests get nodded through in busy kitchens. A card gets read, and often gets walked to the chef.',
          },
          {
            lead: 'Ask the cross-contact question separately.',
            body: '"Does it contain nuts?" and "is it cooked in shared oil or on shared surfaces?" are different questions. Many kitchens will answer the first honestly and never think of the second unless asked.',
          },
          {
            lead: 'Watch for the confident yes.',
            body: 'In some food cultures, "yes it\'s fine" can be politeness rather than verification. If the answer comes back faster than anyone could have checked, ask again, differently. Trust slow answers more than fast ones.',
          },
          {
            lead: 'Re-check on repeat visits.',
            body: 'The kitchen that was careful on Tuesday may have different staff on Friday. Same card, same questions, every time. It feels excessive. It is the routine working.',
          },
        ],
      },
      {
        kind: 'sober',
        head: 'If something goes wrong anyway',
        body: 'Know the local emergency number before you land; it is rarely your home country\'s number, and looking it up mid-crisis is the worst time to learn it. Know the nearest hospital with an emergency department to where you are staying. Make sure both adults, and the child if old enough, can give the auto-injector. Rehearse the sentence "my child is having an allergic reaction, we need an ambulance" in the local language; put it on the back of the allergy card. None of this means it will happen. Preparing for it is what lets you relax at every other meal.',
      },
    ],
    product: {
      head: 'This is the method. Yaycay makes it routine.',
      body: "Everything above you can do yourself, and you should regardless of what tools you use. What Yaycay adds on a trip it plans: every meal suggestion arrives pre-flagged for your child's allergy with the reasoning shown, the ask-the-kitchen card is generated in the local language for your specific allergy, and a reminder surfaces before each meal so the routine survives day six. Flags, checks and reminders that help you stay in control. The confirming, always, stays with you.",
      primaryCta: { label: 'How allergy checks work on a Yaycay trip', href: '/allergy-safety' },
      secondaryCta: { label: 'Build your free day', href: '/free-day' },
    },
    related: [
      { label: 'What should an allergy translation card actually say?', href: '/answers/allergy-translation-card-what-to-say' },
      { label: 'Singapore with kids (with a full allergy-eating section)', href: '/guides/singapore-with-kids' },
      { label: 'How allergy checks work', href: '/allergy-safety' },
    ],
    image: {
      src: '/media/answers/flagged-meal-card.png',
      alt: 'A Yaycay meal suggestion with a tree-nut allergy flag, the reasoning shown, and a confirm-on-the-day reminder',
      source: 'app-screenshot',
      frame: 'phone',
      placement: 'product',
      brief: 'Real Yaycay app screenshot in a navy phone frame: a meal card from the Walker family Singapore demo dataset showing a clear text "Tree-nut allergy: flagged" label (text, never colour alone), the reasoning line, the ask-the-kitchen card link, and a before-meal reminder. AI-readable text labels.',
    },
  },

  'allergy-translation-card-what-to-say': {
    theme: 'Allergies and dietary needs',
    question: 'What should an allergy translation card actually say?',
    subhead:
      'The card that protects your child is specific, short, and asks a question. Here is what to put on it, what to leave off, and how to get it right in another language.',
    directAnswer:
      'The short answer: a good allergy card names the exact allergens, states the severity in plain terms, asks the kitchen to check for cross-contact, and is written in the local language by someone who actually speaks it. Keep it to a few lines, make the allergen names unmissable, and carry several copies. A card the chef can read beats a sentence the waiter half-hears, every time. As with any tool, ours included, the card supports the conversation, it does not replace your check on the day.',
    sections: [
      {
        kind: 'method',
        head: 'What every card must contain',
        items: [
          {
            lead: 'The exact allergens, named and highlighted.',
            body: 'List the specific foods, not a category. "Peanuts and all tree nuts (almond, cashew, walnut, hazelnut, pistachio)" is clearer than "nut allergy", which a kitchen may read narrowly. Put the allergen words in bold or a different colour so they survive a quick glance.',
          },
          {
            lead: 'The severity, in plain words.',
            body: 'State that the allergy is severe and can be life-threatening if that is true. "A tiny trace can cause a dangerous reaction" tells a kitchen why you are asking twice. Avoid medical jargon that does not translate.',
          },
          {
            lead: 'The cross-contact question, asked directly.',
            body: 'Add a line the kitchen can answer: "Please tell me if this dish, or the oil or surfaces used to cook it, may have touched these foods." You want a question, not just a warning, because a question gets a reply.',
          },
          {
            lead: 'A thank-you and an honest fallback.',
            body: 'A short courtesy line earns goodwill in a busy kitchen, and a closing "if you are not sure, please tell me and we will order something else" gives staff an honest way out instead of a risky guess.',
          },
        ],
      },
      {
        kind: 'prose',
        head: 'Getting the language right',
        body: 'Do not trust a live translation app for this. Machine translation mangles medical nuance exactly where precision matters, and a confident-looking wrong word is worse than no card at all. Have a native speaker, a professional translation service, or a vetted allergy-card provider produce the local-language version, and keep the English on the same card so you can both point to the same line. Print several copies, laminate one for the inevitable spill, and photograph it in case the paper goes missing. {Founder to link the specific card-translation services Yaycay recommends.}',
      },
      {
        kind: 'sober',
        head: 'One card is not the whole job',
        body: 'A card makes the conversation reliable; it does not end it. Hand it over rather than reading it aloud, watch that it actually reaches the person cooking, and still confirm before the food arrives. Recipes change, staff change, and a card from last year may name an auto-injector brand or a phrase that needs updating. Treat it as a living document you check before every trip. It is a tool that helps you stay in control, not a guarantee, and the final confirmation always stays with you.',
      },
    ],
    product: {
      head: 'Yaycay writes the card for your trip.',
      body: "Tell Yaycay your child's specific allergens once, at the first chat, and every trip it plans generates an ask-the-kitchen card in the local language of where you are going, naming those exact allergens and the cross-contact question. It arrives alongside each flagged meal, with a reminder before you sit down. You still hand it over, watch it reach the kitchen, and confirm on the day. The card is the tool; the check stays yours.",
      primaryCta: { label: 'How allergy checks work on a Yaycay trip', href: '/allergy-safety' },
      secondaryCta: { label: 'Build your free day', href: '/free-day' },
    },
    related: [
      { label: 'How do we eat out abroad with a nut-allergic child?', href: '/answers/eating-out-abroad-nut-allergy' },
      { label: 'Singapore with kids (with a full allergy-eating section)', href: '/guides/singapore-with-kids' },
      { label: 'How allergy checks work', href: '/allergy-safety' },
    ],
    image: {
      src: '/media/answers/translation-card.png',
      alt: 'A Yaycay-generated ask-the-kitchen card in the local language, with the allergens highlighted and the cross-contact question',
      source: 'app-screenshot',
      frame: 'phone',
      placement: 'product',
      brief: 'Real Yaycay app screenshot in a navy phone frame: an ask-the-kitchen translation card for the Walker family demo, allergens highlighted as bold text, the cross-contact question, and the English shown alongside the local language. Text labels, AI-readable, no colour-only meaning.',
    },
  },

  'long-haul-flight-kids-entertainment': {
    theme: 'Flying with kids',
    question: 'How do you keep kids entertained on a long-haul flight without infinite screens?',
    subhead:
      'Screens will do some of the work, and that is fine. The trick is the bits between: a bag of small surprises, a loose plan for the hours, and food and sleep timed on purpose.',
    directAnswer:
      'The short answer: pack a small, wrapped surprise for roughly every two hours of flight, mix screens with low-tech activities (sticker books, magnetic games, audio stories) so nothing gets boring, time meals and naps to the destination where you can, and lower your own expectations a notch. The goal is not a perfectly behaved child for fourteen hours; it is a manageable flight where nobody, including you, arrives in pieces.',
    sections: [
      {
        kind: 'method',
        head: 'Before you board',
        items: [
          {
            lead: 'Pack a surprise bag, rationed by the hour.',
            body: 'A handful of small, cheap, individually wrapped things (a new sticker book, a tiny puzzle, a fresh pack of felt-tips) handed out across the flight. The wrapping buys you five minutes on its own, and novelty resets a bored child faster than anything from home.',
          },
          {
            lead: 'Download everything, twice.',
            body: 'Films, audio stories, offline games and a backup of all of it, charged and loaded before you leave home. Aircraft wifi and seat-back screens fail at the worst moment. Bring child headphones and a splitter, plus a battery pack the airline allows in the cabin.',
          },
          {
            lead: 'Dress for sleep, not the gate photo.',
            body: 'Comfortable layers, a familiar comforter, and the things that signal bedtime at home. If the flight crosses a night at your destination, the plan is sleep, and the cabin gets cold.',
          },
        ],
      },
      {
        kind: 'method',
        head: 'In the air',
        items: [
          {
            lead: 'Run the day on the destination clock.',
            body: 'From boarding, nudge meals and sleep towards the time zone you are flying into. It softens the jet lag for the whole family and gives the flight a loose shape instead of fourteen formless hours.',
          },
          {
            lead: 'Alternate, do not marathon.',
            body: 'Screen, then a snack, then a walk to the galley, then a sticker book, then a story. Switching activity every hour or so keeps the well from running dry before you land.',
          },
          {
            lead: 'Lean into the boredom, briefly.',
            body: 'Some staring out of the window or drawing nothing in particular is fine and even useful; it is rest. You do not have to fill every minute, and a child who learns to sit with a little boredom travels better.',
          },
        ],
      },
      {
        kind: 'sober',
        head: 'The honest part',
        body: 'Long-haul with young kids is genuinely hard, and some of it is just endurance. Aim for manageable, not perfect. Accept more screen time than you would at home, keep snacks and water flowing, and be kind to yourself when a toddler melts down at hour ten; the people who matter understand, and you will all have forgotten it by the pool. Build a slow, plan-free first day at the other end so nobody has to perform on no sleep.',
      },
    ],
    product: {
      head: 'Yaycay plans the trip around the flight, not despite it.',
      body: 'When Yaycay builds your trip, it knows the long-haul is part of it. The first day at your destination is planned gently on purpose, with low-key, nap-friendly options while everyone resets, and the days build up from there. Each child still gets their own adventures; they just do not start the morning after a fourteen-hour flight. The flight is yours to survive; the landing is where we help.',
      primaryCta: { label: 'See how a trip is planned', href: '/how-it-works' },
      secondaryCta: { label: 'Build your free day', href: '/free-day' },
    },
    related: [
      { label: 'How far ahead should you plan a family holiday, honestly?', href: '/answers/how-far-ahead-plan-family-holiday' },
      { label: 'What is the best age to take kids on their first big overseas trip?', href: '/answers/best-age-first-overseas-trip' },
      { label: 'See a real sample day', href: '/sample-day' },
    ],
    image: {
      src: '/media/answers/flight-activities.png',
      alt: 'A flat line illustration of a plane tray-table with a sticker book, headphones and a wrapped surprise',
      source: 'nanobanana',
      frame: 'none',
      placement: 'intro',
      brief: 'Flat navy-line spot illustration, locked style (2px navy lines, sand-filled shapes, one blue emphasis): a plane tray-table from above with a sticker book, child headphones, a small wrapped parcel and a water bottle. No 3D, no gradients, no faces.',
    },
  },

  'how-far-ahead-plan-family-holiday': {
    theme: 'Planning and packing',
    question: 'How far ahead should you plan a family holiday, honestly?',
    subhead:
      'Far enough to lock the things that sell out and get expensive, not so far that you burn out before you go. Here is the honest timeline most families actually need.',
    directAnswer:
      'The short answer: book flights and accommodation around four to six months ahead for a peak-season overseas trip, lock the one or two must-do experiences that genuinely sell out as soon as dates are firm, and leave the day-to-day plan until the last few weeks. The expensive, scarce things reward early decisions; the daily itinerary rewards waiting, because young kids and weather make a rigid four-month-old schedule worthless.',
    sections: [
      {
        kind: 'method',
        head: 'What to do early, four to six months out',
        items: [
          {
            lead: 'Flights and a base to sleep in.',
            body: 'These are the things that get pricier and scarcer the longer you wait, especially across school holidays. Pin the dates, book the flights, and secure accommodation you actually like rather than what is left.',
          },
          {
            lead: 'The handful of things that truly sell out.',
            body: 'A few experiences genuinely book out months ahead (think the Ghibli Museum, certain restaurants, popular tours). If missing one would spoil the trip for a kid, lock it now. Resist booking everything else.',
          },
        ],
      },
      {
        kind: 'method',
        head: 'What to leave until later, two to four weeks out',
        items: [
          {
            lead: 'The day-by-day plan.',
            body: "Build the actual daily shape close to departure, when you know the weather, the kids' current obsessions, and how much you can realistically fit. A plan made four months out gets rewritten anyway.",
          },
          {
            lead: 'Restaurants, day trips and the small stuff.',
            body: 'Most meals and minor activities can be chosen days ahead or on the ground. Over-booking early just locks you into decisions your future, tireder self will resent.',
          },
        ],
      },
      {
        kind: 'sober',
        head: 'The trap to avoid',
        body: 'The mistake is not planning too little; it is planning the wrong things too early and the right things too late. Families pour months into elaborate hour-by-hour itineraries, then bin them on day two when it rains or a six-year-old refuses to move, while the one tour that mattered sold out in week three. Lock the scarce and the expensive early, hold the daily detail loosely, and leave real slack for the days the trip has its own ideas.',
      },
    ],
    product: {
      head: 'Yaycay does the late, detailed planning so you do not have to.',
      body: 'You handle the early, big decisions: dates, flights, where you are staying. When the trip gets close, tell Yaycay the details and it builds the day-by-day around your real kids and the actual forecast, with each child\'s adventures, flagged meals and a rain plan already in place. The planning that is tedious to do late, and pointless to do early, is exactly the part we take.',
      primaryCta: { label: 'See how a trip is planned', href: '/how-it-works' },
      secondaryCta: { label: 'Build your free day', href: '/free-day' },
    },
    related: [
      { label: 'How do you keep kids entertained on a long-haul flight without infinite screens?', href: '/answers/long-haul-flight-kids-entertainment' },
      { label: 'What do you do when it rains and the day is ruined?', href: '/answers/what-to-do-when-it-rains' },
      { label: 'See a real sample day', href: '/sample-day' },
    ],
    image: {
      src: '/media/answers/planning-timeline.png',
      alt: 'A flat line illustration of a planning timeline from six months out to departure',
      source: 'nanobanana',
      frame: 'none',
      placement: 'intro',
      brief: 'Flat navy-line spot illustration, locked style: a horizontal timeline with two marked anchors, "4 to 6 months: flights and stay" and "2 to 4 weeks: the daily plan", a few simple node icons. Navy lines, sand fills, one blue emphasis node. No 3D, no faces.',
    },
  },

  'what-to-do-when-it-rains': {
    theme: 'On the trip',
    question: 'What do you do when it rains and the day is ruined?',
    subhead:
      'A wet day only ruins the plan you had, not the day itself. With one indoor anchor and a change of pace, rain often turns into the trip\'s easiest, happiest afternoon.',
    directAnswer:
      'The short answer: have one indoor option per day already identified before you travel, so a wet morning means switching plans, not inventing one in a downpour with hungry kids. Lean into slower indoor pleasures (a museum, a pool, a long lunch, a film in the hotel), keep spare dry clothes handy, and treat the rain as permission to rest rather than a disaster. Some of the best trip memories happen on the days the weather collapses.',
    sections: [
      {
        kind: 'method',
        head: 'Before the rain, planning ahead',
        items: [
          {
            lead: 'Pick one indoor anchor for every day.',
            body: 'When you plan, note a nearby indoor option for each day: a science museum, an aquarium, a big covered market, a pool. You may never use most of them, but having the list means a wet morning costs you a decision, not the day.',
          },
          {
            lead: 'Pack for it, even in summer.',
            body: 'Lightweight rain layers, a spare set of dry clothes per child in the day bag, and quick-dry shoes. Wet, cold kids melt down; dry kids treat puddles as a feature.',
          },
        ],
      },
      {
        kind: 'method',
        head: 'When it actually rains',
        items: [
          {
            lead: 'Switch the pace, not just the venue.',
            body: 'Rain is a cue to slow down. Trade the packed sightseeing morning for a long, lazy indoor one: a single museum done properly, a board-game cafe, a swim. The trip needs rest days anyway, and the weather just chose one for you.',
          },
          {
            lead: 'Let little kids be loud somewhere it is allowed.',
            body: "Indoor play centres, soft-play, a hotel pool or a hands-on children's museum burn the energy that a rainy day traps inside. Find the place where running is encouraged and the afternoon fixes itself.",
          },
        ],
      },
      {
        kind: 'sober',
        head: 'The reframe that helps',
        body: 'A rained-off day feels like failure only if you measure the holiday by the itinerary. Measure it by the kids instead, and a slow wet afternoon (a film, a hot chocolate, an unplanned hour together) is often the bit they remember most fondly. You did not lose a day. You swapped one kind of good day for another, and you all got a rest you would not otherwise have taken.',
      },
    ],
    product: {
      head: 'Yaycay builds the rain plan before you leave.',
      body: "Every Yaycay day comes with the weather already considered: an indoor anchor sits inside the plan, near your other stops, so a wet forecast triggers a ready alternative instead of a scramble. And on the trip, if the day turns, you can ask Yaycay what is nearby and dry, and the suggestions arrive with your family's allergy flags already applied. The contingency is built in, not improvised at the window.",
      primaryCta: { label: 'See a day with the rain plan built in', href: '/sample-day' },
      secondaryCta: { label: 'Build your free day', href: '/free-day' },
    },
    related: [
      { label: 'How far ahead should you plan a family holiday, honestly?', href: '/answers/how-far-ahead-plan-family-holiday' },
      { label: 'Singapore with kids', href: '/guides/singapore-with-kids' },
      { label: 'See how a trip is planned', href: '/how-it-works' },
    ],
    image: {
      src: '/media/answers/rain-plan.png',
      alt: 'A flat line illustration of a rain cloud paired with an indoor-museum backup plan',
      source: 'nanobanana',
      frame: 'none',
      placement: 'intro',
      brief: 'Flat navy-line spot illustration, locked style: a rain cloud on the left with an arrow to a simple museum or pool building on the right, suggesting a swap to the indoor anchor. Navy lines, sand fills, one blue emphasis. No 3D, no faces.',
    },
  },

  'best-age-first-overseas-trip': {
    theme: 'Ages and stages',
    question: 'What is the best age to take kids on their first big overseas trip?',
    subhead:
      'There is no perfect age, only trade-offs. Most families find the sweet spot lands somewhere around six to ten, but the honest answer depends on the trip and the child.',
    directAnswer:
      'The short answer: for a first big overseas trip kids will actually remember and enjoy, somewhere between six and ten is the common sweet spot, old enough to walk a day, handle new food and form lasting memories, young enough to still travel cheaply and wonder at everything. But younger and older both work with the right trip: toddlers travel fine if you go slow and have no FOMO, and teenagers come alive on a trip that respects their interests. Match the destination to the age you have, not the other way round.',
    sections: [
      {
        kind: 'prose',
        head: 'Travelling with under-fives',
        body: "Little kids travel more easily than nervous first-timers expect, with two honest caveats: they will not remember it, and the trip must move at their pace. The wins are real (flights and entry are often free or cheap, and toddlers find joy in a pigeon and a puddle), but pack light on ambition. One thing a day, protected naps, and a base with a pool beat a grand tour. You are travelling for the family's experience now, not the child's memory, and that is a perfectly good reason to go.",
      },
      {
        kind: 'prose',
        head: 'The six-to-ten sweet spot',
        body: 'This is the range most experienced family travellers point to. Kids can walk a reasonable day, try unfamiliar food, follow the thread of a place, and crucially form memories that last. They are still cheap to fly, still delighted by almost everything, and not yet too cool to hold your hand at the aquarium. It is the age where a big trip lands hardest and gives the most back, which is exactly why so much of Yaycay is built around it.',
      },
      {
        kind: 'prose',
        head: 'Tweens and teenagers',
        body: 'Older kids are not too old for a family trip; they just need a different one. Give a teenager a say in the plan, a genuine interest to chase (street food, photography, history, surf), and some independence within safe limits, and they re-engage fast. The trips that fail at this age are the ones that treat a fifteen-year-old like a passenger; the ones that work hand them a role. A trip built around each child, rather than an average one, is what keeps the oldest on board.',
      },
      {
        kind: 'sober',
        head: 'The real answer',
        body: 'The best age is the one your child is now, planned for honestly. There is no window that closes, only different trips for different stages, and the family that waits for the perfect age tends to wait forever. Pick a destination that suits the kids you actually have, plan it around them rather than an idealised average child, and go. The trip you take at the age you are is always better than the perfect one you keep postponing.',
      },
    ],
    product: {
      head: 'Yaycay plans for the age your child actually is.',
      body: 'Whatever ages you are travelling with, Yaycay builds the trip around them: a toddler gets a slow, nap-shaped day while an older sibling gets a bigger adventure, and the plan holds both without averaging them into something that suits neither. Tell us who is coming and how old they are, and each child gets a day pitched to them. The right age to go is the one you are; we plan for it.',
      primaryCta: { label: 'See how each child gets their own day', href: '/for-kids' },
      secondaryCta: { label: 'Build your free day', href: '/free-day' },
    },
    related: [
      { label: 'How far ahead should you plan a family holiday, honestly?', href: '/answers/how-far-ahead-plan-family-holiday' },
      { label: 'How do you keep kids entertained on a long-haul flight without infinite screens?', href: '/answers/long-haul-flight-kids-entertainment' },
      { label: 'See a real sample day', href: '/sample-day' },
    ],
    image: {
      src: '/media/answers/ages-and-stages.png',
      alt: 'A flat line illustration of three differently sized figures, suggesting a toddler, a school-age child and a teenager',
      source: 'nanobanana',
      frame: 'none',
      placement: 'intro',
      brief: 'Flat navy-line spot illustration, locked style: three simple figures of increasing height (toddler, school-age, teen) each with a small icon of a fitting activity (a bucket, a backpack, a camera). Navy lines, sand fills, one blue emphasis. No identifiable faces, no 3D.',
    },
  },
};
