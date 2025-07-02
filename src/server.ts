import { Hono } from "hono";
import { quizData } from "./lib/quizData";

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    version: "vNext",
    image: "https://res.cloudinary.com/dzdas1gyp/image/upload/v1750974302/og-clean_h21k6u.jpg",
    post_url: "/submit",
    buttons: [{ label: "Start quiz", action: "post" }]
  });
});

app.post("/submit", async (c) => {
  const body = await c.req.json();
  const step = Number(body.step) || 0;
  const answer = body.answer || null;
  let score = body.score || { Water: 0, Air: 0, Earth: 0, Fire: 0 };

  if (answer) {
    score[answer] = (score[answer] || 0) + 1;
  }

  if (step >= quizData.length) {
    const top = Object.entries(score).sort((a, b) => (b[1] as number) - (a[1] as number))[0][0];
    return c.json({
      version: "vNext",
      image: `https://soul-element.vercel.app/images/${top.toLowerCase()}-farcaster-hyouka.jpg`,
      buttons: [
        {
          label: "Share result",
          action: "link",
          target: `https://farcaster.xyz/~/compose?text=I+got+${top}+in+the+Soul+Element+Quiz!+Try+it:+&embeds=https://soul-element.vercel.app`
        },
        {
          label: "Try again",
          action: "link",
          target: "https://soul-element.vercel.app"
        }
      ]
    });
  }

  return c.json({
    version: "vNext",
    title: quizData[step].question,
    post_url: "/submit",
    buttons: quizData[step].options.map((opt: any) => ({
      label: opt.label,
      action: "post",
      post_data: {
        step: step + 1,
        score,
        answer: opt.type
      }
    }))
  });
});

export default app;
