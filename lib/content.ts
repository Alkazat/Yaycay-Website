/**
 * All marketing copy in one place so the funnel reads as one product and stays
 * consistent with the FE claims/wedge. Writing rule: no em-dashes.
 */

export const hero = {
  eyebrow: 'For families making memories',
  title: 'The holiday your kids will never stop talking about.',
  subtitle:
    'One chat builds your whole trip. Every child gets a personalised adventure, the grown-ups get a calm plan, and the family keeps a memory book.',
  ctaNote: 'Free to start. No app to install. Build one real day in under a minute.',
};

export const wedge = {
  title: 'Why families pay for Yaycay',
  intro: 'A free day shows you the magic. The holiday is where it pays off.',
  cards: [
    {
      icon: 'sparkle',
      title: 'Per-child magic',
      body: 'Every child gets their own explorer mode, quizzes pitched to their age, and a journal that is theirs to fill. One plan, a different adventure for each kid.',
    },
    {
      icon: 'compass',
      title: 'A live companion',
      body: 'During the trip the app keeps pace with the day. Maps, the next thing to do, photo capture, and offline access when the signal drops.',
    },
    {
      icon: 'shield',
      title: 'Safe and kid-paced',
      body: 'Allergy and dietary flags ride along with every booking, surfaced to grown-ups. The day is built around real rest, not a forced march.',
    },
    {
      icon: 'book',
      title: 'A keepsake to keep',
      body: 'Ratings, notes and print-grade photos become a memory book the family keeps long after you are home.',
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

export const pricing = {
  title: 'One holiday, two ways to buy',
  intro: 'Pay once. No subscription on the holiday itself.',
  tiers: [
    {
      id: 'byo',
      name: 'Bring your own AI',
      price: 'US$59',
      tagline: 'Use the ChatGPT, Claude or Gemini you already pay for.',
      badge: 'Accessible entry',
      featured: false,
      features: [
        'Connect your own AI with a secure connector',
        'The full planning and holidaying experience',
        'Per-child modes, quizzes and journal',
        'Live during-trip companion, offline ready',
      ],
    },
    {
      id: 'ours',
      name: 'Use our AI',
      price: 'US$129',
      tagline: 'We run the chat for you. No AI subscription needed.',
      badge: 'Most chosen',
      featured: true,
      features: [
        'A guardrailed Yaycay chat builds your trip',
        'Everything in Bring your own AI',
        'Allergy and dietary safety on every booking',
        'A memory book to keep when you are home',
      ],
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
        { label: 'Pricing', href: '#pricing' },
        { label: 'Build your free day', href: '#signup' },
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
