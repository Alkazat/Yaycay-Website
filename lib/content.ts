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

export const footer = {
  blurb: 'A family holiday companion. One chat builds the trip, every child gets an adventure, and the family keeps the memories.',
  columns: [
    {
      heading: 'Product',
      links: [
        { label: 'How it works', href: '#how-it-works' },
        { label: 'What you get', href: '#showcase' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Connect your own AI', href: '/connect' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'Privacy', href: '/legal/privacy' },
        { label: 'Contact', href: 'mailto:hello@yaycay.ai' },
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
