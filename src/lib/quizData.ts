export type Element = "Water" | "Air" | "Earth" | "Fire";

export type QuizQuestion = {
  question: string;
  options: {
    text: string;
    element: Element;
  }[];
};

export const quizData: QuizQuestion[] = [
    {
    question: "When someone’s upset, do you:",
    options: [
      { text: "Comfort them quietly", element: "Water" },
      { text: "Offer solutions", element: "Air" },
      { text: "Give them space", element: "Earth" },
      { text: "Push them to toughen up", element: "Fire" },
    ],
  },
  {
    question: "Your ideal conversation is:",
    options: [
      { text: "Deep emotional sharing", element: "Water" },
      { text: "A debate about wild ideas", element: "Air" },
      { text: "Practical life advice", element: "Earth" },
      { text: "A competitive joke battle", element: "Fire" },
    ],
  },
  {
    question: "Stress hits—you cope by:",
    options: [
      { text: "Crying it out", element: "Water" },
      { text: "Talking to friends", element: "Air" },
      { text: "Gardening/hiking", element: "Earth" },
      { text: "Intense exercise", element: "Fire" },
    ],
  },
  {
    question: "Your anger style:",
    options: [
      { text: "Silent resentment", element: "Water" },
      { text: "Sarcastic remarks", element: "Air" },
      { text: "Cold detachment", element: "Earth" },
      { text: "Explosive but fleeting", element: "Fire" },
    ],
  },
  {
    question: "At parties, you're the one:",
    options: [
      { text: "Listening to someone’s problems", element: "Water" },
      { text: "Floating between groups", element: "Air" },
      { text: "Petting the host’s dog", element: "Earth" },
      { text: "Rallying everyone for shots", element: "Fire" },
    ],
  },
{
    question: "Your friendship dealbreaker:",
    options: [
      { text: "Lack of empathy", element: "Water" },
      { text: "Boring routines", element: "Air" },
      { text: "Flakiness", element: "Earth" },
      { text: "Weak opinions", element: "Fire" },
    ],
  },
  {
    question: "Your social battery recharges by:",
    options: [
      { text: "A long bath", element: "Water" },
      { text: "Traveling solo", element: "Air" },
      { text: "Reading alone", element: "Earth" },
      { text: "Crowded concerts", element: "Fire" },
    ],
  },
  {
    question: "People describe you as:",
    options: [
      { text: '"Too sensitive"', element: "Water" },
      { text: '"A chaotic spark"', element: "Air" },
      { text: '"The grounded one"', element: "Earth" },
      { text: '"A force of nature"', element: "Fire" },
    ],
  },
  {
    question: "Your career should:",
    options: [
      { text: "Help others", element: "Water" },
      { text: "Never be boring", element: "Air" },
      { text: "Provide stability", element: "Earth" },
      { text: "Let you lead", element: "Fire" },
    ],
  },
  {
    question: "Your vacation looks like:",
    options: [
      { text: "A beach resort", element: "Water" },
      { text: "Backpacking across Asia", element: "Air" },
      { text: "A cabin in the woods", element: "Earth" },
      { text: "Skydiving in Dubai", element: "Fire" },
    ],
  },
  {
    question: "Your wallet contains:",
    options: [
      { text: "Emergency tissues", element: "Water" },
      { text: "Random foreign coins", element: "Air" },
      { text: "A plant-cutting", element: "Earth" },
      { text: "VIP club passes", element: "Fire" },
    ],
  },
  {
    question: "Your biggest fear:",
    options: [
      { text: "Being hated", element: "Water" },
      { text: "Being trapped", element: "Air" },
      { text: "Chaos", element: "Earth" },
      { text: "Irrelevance", element: "Fire" },
    ],
  },
  {
  question: "Your phone wallpaper:",
  options: [
    { text: "Ocean waves", element: "Water" },
    { text: "A meme", element: "Air" },
    { text: "A mountain or nature view", element: "Earth" },
    { text: "A motivational quote", element: "Fire" },
  ],
},
{
  question: "Secretly, you crave:",
  options: [
    { text: "Unconditional love", element: "Water" },
    { text: "A life with no regrets", element: "Air" },
    { text: "A self-sufficient homestead", element: "Earth" },
    { text: "Legendary status", element: "Fire" },
  ],
},
{
  question: "Your toxic trait:",
  options: [
    { text: "Over-apologizing", element: "Water" },
    { text: "Commitment issues", element: "Air" },
    { text: "Stubbornness", element: "Earth" },
    { text: "Impatience", element: "Fire" },
  ],
},
{
  question: "When criticized, you:",
  options: [
    { text: "Take it deeply to heart", element: "Water" },
    { text: "Rationalize it logically", element: "Air" },
    { text: "Reflect but move on", element: "Earth" },
    { text: "Fire back immediately", element: "Fire" },
  ],
},
{
  question: "Your biggest weakness in relationships is:",
  options: [
    { text: "Absorbing others’ emotions", element: "Water" },
    { text: "Detaching when things get serious", element: "Air" },
    { text: "Being overly rigid", element: "Earth" },
    { text: "Dominating arguments", element: "Fire" },
  ],
},
{
  question: "Under pressure, you default to:",
  options: [
    { text: "Emotional withdrawal", element: "Water" },
    { text: "Overthinking", element: "Air" },
    { text: "Methodical problem-solving", element: "Earth" },
    { text: "Impulsive action", element: "Fire" },
  ],
},
{
  question: "Your growth challenge is learning to:",
  options: [
    { text: "Set boundaries", element: "Water" },
    { text: "Stay present", element: "Air" },
    { text: "Embrace change", element: "Earth" },
    { text: "Listen before reacting", element: "Fire" },
  ],
},
{
  question: "Your ideal weekend involves:",
  options: [
    { text: "Crying over a movie", element: "Water" },
    { text: "Last-minute road trips", element: "Air" },
    { text: "Baking bread from scratch", element: "Earth" },
    { text: "Hosting an impromptu party", element: "Fire" },
  ],
},
{
  question: "Your planner looks like:",
  options: [
    { text: "Blank", element: "Water" },
    { text: "Filled with wild ideas, half crossed out", element: "Air" },
    { text: "Color-coded and detailed", element: "Earth" },
    { text: "“Planner? What planner?”", element: "Fire" },
  ],
},
{
  question: "Your relationship with rules:",
  options: [
    { text: "Bend them for kindness", element: "Water" },
    { text: "Rewrite them creatively", element: "Air" },
    { text: "Respect them", element: "Earth" },
    { text: "Break them dramatically", element: "Fire" },
  ],
},
{
  question: "Your life motto could be:",
  options: [
    { text: "“Feel everything.”", element: "Water" },
    { text: "“Why not?”", element: "Air" },
    { text: "“Slow and steady.”", element: "Earth" },
    { text: "“Go big or go home.”", element: "Fire" },
  ],
},
{
  question: "People misunderstand your:",
  options: [
    { text: "Sensitivity as fragility", element: "Water" },
    { text: "Curiosity as nosiness", element: "Air" },
    { text: "Caution as fear", element: "Earth" },
    { text: "Passion as aggression", element: "Fire" },
  ],
},
{
  question: "Your mind is always:",
  options: [
    { text: "Swimming in emotions", element: "Water" },
    { text: "Racing with “what ifs”", element: "Air" },
    { text: "Analyzing systems", element: "Earth" },
    { text: "Plotting the next big move", element: "Fire" },
  ],
},
{
  question: "You’re secretly proud of your:",
  options: [
    { text: "Intuition", element: "Water" },
    { text: "Wit", element: "Air" },
    { text: "Resilience", element: "Earth" },
    { text: "Boldness", element: "Fire" },
  ],
},
{
  question: "Your love language is:",
  options: [
    { text: "Deep conversations", element: "Water" },
    { text: "Surprise adventures", element: "Air" },
    { text: "Acts of service", element: "Earth" },
    { text: "Physical touch", element: "Fire" },
  ],
},
{
  question: "In 10 years, you hope to be:",
  options: [
    { text: "A healer/mentor", element: "Water" },
    { text: "A nomadic artist", element: "Air" },
    { text: "A self-sufficient homesteader", element: "Earth" },
    { text: "A CEO or industry leader", element: "Fire" },
  ],
},
{
  question: "Your dream project is:",
  options: [
    { text: "A memoir", element: "Water" },
    { text: "An invention that changes the world", element: "Air" },
    { text: "A permaculture farm", element: "Earth" },
    { text: "A global movement", element: "Fire" },
  ],
},
{
  question: "Your legacy will be:",
  options: [
    { text: "The love you gave", element: "Water" },
    { text: "The ideas you sparked", element: "Air" },
    { text: "The stability you built", element: "Earth" },
    { text: "The barriers you broke", element: "Fire" },
  ],
},
{
  question: "If you had one wish, you’d ask for:",
  options: [
    { text: "World peace", element: "Water" },
    { text: "Infinite curiosity", element: "Air" },
    { text: "Unshakable health", element: "Earth" },
    { text: "Unstoppable courage", element: "Fire" },
  ],
},
{
  question: "Your favorite art form is:",
  options: [
    { text: "Poetry or soulful music", element: "Water" },
    { text: "Avant-garde experimental films", element: "Air" },
    { text: "Handmade crafts or pottery", element: "Earth" },
    { text: "High-energy performance art", element: "Fire" },
  ],
},
{
  question: "Your personal style leans toward:",
  options: [
    { text: "Flowy, soft fabrics", element: "Water" },
    { text: "Eclectic, mismatched boldness", element: "Air" },
    { text: "Timeless, functional classics", element: "Earth" },
    { text: "Statement pieces that demand attention", element: "Fire" },
  ],
},
{
  question: "Your ideal living space feels:",
  options: [
    { text: "Cozy and emotionally warm", element: "Water" },
    { text: "Ever-changing with quirky decor", element: "Air" },
    { text: "Organized and nature-inspired", element: "Earth" },
    { text: "Luxe and vibrant", element: "Fire" },
  ],
},
{
  question: "Your creative outlet is:",
  options: [
    { text: "Journaling emotions", element: "Water" },
    { text: "Brainstorming wild ideas", element: "Air" },
    { text: "Gardening or DIY projects", element: "Earth" },
    { text: "Competitive sports or dance", element: "Fire" },
  ],
},
]