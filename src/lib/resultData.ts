export type Result = {
  title: string;
  description: string;
  image: string;
  shareText: string;
};

export const resultData: Record<string, Result> = {
  Water: {
    title: "You're the Water!",
    description: "You’re the Empath—deeply intuitive, nurturing...",
    image: "/water-farcaster-hyouka.jpg",
    shareText: "Water 🌊 I'm the Empath...",
  },
    Air: {
    title: "You're the Air!",
    description: "You’re the Visionary—innovative, free-spirited, and intellectually restless 🌬️. Psychology insight: Your openness to experience fuels creativity but may challenge routine.",
    image: "/air-farcaster-hyouka.jpg",
    shareText: "Air 🌬️ I'm the Visionary—innovative, free-spirited, and intellectually restless.",
  },
  Earth: {
    title: "You're the Earth!",
    description: "You’re the Anchor—practical, reliable, and rooted in what’s real ⛰️. Psychology insight: Your high conscientiousness provides stability but may resist spontaneity.",
    image: "/earth-farcaster-hyouka.jpg",
    shareText: "Earth ⛰️ I'm the Anchor—practical, reliable, and rooted in what’s real.",
  },
  Fire: {
    title: "You're the Fire!",
    description: "You’re the Catalyst—bold, energetic, and unstoppable 🔥. Psychology insight: Your high extraversion and dopamine-driven motivation thrive on achievement.",
    image: "/fire-farcaster-hyouka.jpg",
    shareText: "Fire 🔥 I'm the Catalyst—bold, energetic, and unstoppable.",
  },

  // Mixed combos (اكتبي الباقي بنفس الشكل أو قوليلي أكمّلهم كلهم)
  "Water+Fire": {
    title: "You’re a dynamic blend!",
    description: "🌊🔥 Water + Fire = The Passionate Healer. Strengths: Emotionally intense, fiercely protective of loved ones, driven by both compassion and ambition. Psychology Insight: High empathy (Water) paired with high energy (Fire) creates a charismatic leader in caregiving roles (e.g., activists, therapists). - Growth Edge: Balance emotional vulnerability with assertiveness—avoid burnout by setting boundaries.",
    image: "/water-fire-farcaster-hyouka.jpg",
    shareText: "🌊🔥 Water + Fire = I'm the Passionate Healer, Emotionally intense, fiercely protective of loved ones, driven by both compassion and ambition",
  },
  "Water + Air": {
    title: "You’re a dynamic blend!",
    description: "🌊🌪️ Water + Air = The Dreamer Empath. Strengths: Deeply intuitive yet intellectually curious, artistic, and drawn to existential questions. - Psychology Insight: Combines Openness to Experience (Air) with Sensitivity (Water), common in poets, counselors, or spiritual seekers. - Growth Edge: Ground daydreams in action; emotional turbulence may arise from overthinking.",
    image: "/water-air-farcaster-hyouka.jpg",
    shareText: "🌊🌪️ Water + Air = I'm the The Dreamer Empath, deeply intuitive yet intellectually curious, artistic, and drawn to existential questions",
  },
  "Water + Earth": {
    title: "You’re a dynamic blend!",
    description: "🌊⛰️ Water + Earth = The Nurturing Realist. Strengths: Practical empathy, offers both emotional support and tangible solutions (e.g., nurses, social workers). - Psychology Insight: High agreeableness (Water) meets conscientiousness (Earth), values stability but prioritizes relationships. - Growth Edge: Avoid overgiving; practice self-care to sustain your nurturing nature.",
    image: "/water-earth-farcaster-hyouka.jpg",
    shareText: "🌊⛰️ Water + Earth = I'm the Nurturing Realist, Practical empathy, offers both emotional support and tangible solutions (like nurses, social workers)",
  },
    "Air + Fire": {
    title: "You’re a dynamic blend!",
    description: "🌪️🔥 Air + Fire = The Maverick Innovator. Strengths: Charismatic, idea-driven, and rebellious—thrives in startups or artistic revolutions. - Psychology Insight: Extraversion (Fire) + Openness (Air) fuels risk-taking but may struggle with follow-through. - Growth Edge: Channel chaos into focus; temper impulsivity with planning.",
    image: "/air-fire-farcaster-hyouka.jpg",
    shareText: "🌪️🔥 Air + Fire = I'm the Maverick Innovator, Charismatic, idea-driven, and rebellious—thrives in startups or artistic revolutions",
  },
   "Air + Earth": {
    title: "You’re a dynamic blend!",
    description: "🌪️⛰️ Air + Earth = The Wise Architect. Strengths: Bridges creativity and logic, excel in design, engineering, or strategic fields. - Psychology Insight: Openness (Air) + Conscientiousness (Earth) creates structured visionaries. - Growth Edge: Overcome perfectionism; allow room for spontaneity.",
    image: "/air-earth-farcaster-hyouka.jpg",
    shareText: "🌪️⛰️ Air + Earth = I'm the Wise Architect, I bridge creativity and logic, excel in design, engineering, or strategic fields",
  },
   "Earth + Fire": {
    title: "You’re a dynamic blend!",
    description: "⛰️🔥 Earth + Fire = The Dynamic Builder. Strengths: You grounded yet ambitious—turn visions into reality (e.g., entrepreneurs, athletes). - Psychology Insight: Conscientiousness (Earth) + Extraversion (Fire) drives disciplined achievement. - Growth Edge: Avoid rigidity; embrace flexibility when plans shift.",
    image: "/earth-fire-farcaster-hyouka.jpg",
    shareText: "⛰️🔥 Earth + Fire = I'm the Dynamic Builder, I grounded yet ambitious—turn visions into reality (like entrepreneurs, athletes).",
  },
  "Water + Air + Fire": {
    title: "You're Triple Blends (Rare but Powerful)!",
    description: "🌊🌪️🔥 Water + Air + Fire = The Renaissance Soul, Philosopher-artist-activist, think Frida Kahlo or Albert Camus. Challenge: Scattered energy; need grounding rituals",
    image: "/mix-farcaster-hyouka.jpg",
    shareText: "🌊🌪️🔥 Water + Air + Fire = I'm the Renaissance Soul, Philosopher-artist-activist, think Frida Kahlo or Albert Camus",
  },
  "Water + Earth + Fire": {
    title: "You're Triple Blends (Rare but Powerful)!",
    description: "🌊⛰️🔥 Water + Earth + Fire = The Compassionate CEO, Balance heart, pragmatism, and drive (e.g., Oprah Winfrey). Challenge: May neglect personal needs for others’ demands",
    image: "/mix-farcaster-hyouka.jpg",
    shareText: "🌊⛰️🔥 Water + Earth + Fire = I'm the Compassionate CEO, Balance heart, pragmatism, and drive (e.g., Oprah Winfrey)",
  },
  Unknown: {
    title: "You're a Mystery!",
    description: "We're still trying to understand your essence 🔍",
    image: "/mix-farcaster-hyouka.jpg",
    shareText: "I broke the quiz! 😅🔍",
  },
};

export function getResultInfo(resultKey: string) {
  return resultData[resultKey] || resultData["Unknown"];
}