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
    subhead:
      'One chat builds the whole trip. Yaycay plans around your kids, checks every meal against their allergies, travels with you, and turns it all into a keepsake. Paid once, for this holiday only.',
    primaryCta: { label: 'Build your free day', href: '/free-day' },
    secondaryCta: { label: 'See a real free day first', href: '/sample-day' },
  },
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
        body: "Every child gets their own adventures, matched to their age and what makes them light up. A nine-year-old's day and a six-year-old's day, woven into one family plan. They even get their own travel journal.",
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
      "Here is one full day from a family's Singapore trip: two kids, one tree-nut allergy, one rainy afternoon, fully handled.",
    body: 'Morning adventures for each child. Lunch chosen with the allergy reasoning shown, not hidden. A rain plan that was ready before the clouds were. This is exactly what your free day looks like.',
    cta: { label: 'See the full sample day', href: '/sample-day' },
  },
  steps: {
    headline: 'One chat builds the whole trip.',
    items: [
      { n: 1, title: 'Tell us about your crew', body: 'Where you are going, when, who is coming, ages, allergies, what they love. One conversation, not a form marathon.' },
      { n: 2, title: 'Your plan arrives', body: "A day-by-day holiday built around each child, with every meal suggestion checked against your family's dietary needs." },
      { n: 3, title: 'Yaycay travels with you', body: 'Answers on the ground, rain plans, "what is near us right now", without you re-researching at 9pm in the hotel.' },
      { n: 4, title: 'Keep the memories', body: "After the trip, the kids' journals and your days become a keepsake book the family will actually look at again." },
    ],
    cta: { label: 'See the full picture', href: '/how-it-works' },
  },
  allergyBlock: {
    headline: 'Travelling with an allergy? We take that as seriously as you do.',
    body: 'Every meal suggestion comes with flags, checks and reminders that help you stay in control: what we have checked, what you should confirm on the day, and how to ask in the local language. We will never tell you a restaurant is "100% safe", because no one honestly can. We will make sure you are never guessing.',
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
    { n: 4, title: 'On the trip, Yaycay is in your pocket.', body: "This is where most planners go quiet. Yaycay does not. It rains: your wet-weather plan is one tap away. Everyone is hungry now: ask what is good near here, and the suggestions arrive with your family's allergy flags already applied. The six-year-old has hit the wall at 2pm: ask for a quiet hour nearby. You are never the only one holding the trip together, because the trip is being held for you." },
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
  contextSub: "Built for the Walker family: Singapore, four days, Sam (9), Pip (6), and Pip's tree-nut allergy. Nothing below has been polished for marketing. This is what arrives in your inbox.",
  artefact: {
    title: 'Day 2 in Singapore: Gardens, hawkers and one very good rain plan',
    sub: 'Tuesday. Forecast: 31°C, likely afternoon storm. Energy plan: big morning, slow middle, gentle evening.',
    blocks: [
      { time: '8.30am', title: 'Gardens by the Bay, two adventures running side by side.', body: ['For Sam (9): the Supertree Grove engineering hunt. Six questions on his journal page, including "find the tree that breathes for the building". He is looking for the exhaust vents, though he will not know that yet.', 'For Pip (6): the Hidden Creatures trail through the Cloud Forest. Seven animals to spot and stamp. The seventh is genuinely hard to find. That is deliberate.'], note: 'Each child gets their own version of the same morning. Same place, same family, two different adventures.' },
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
