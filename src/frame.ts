import { Context } from "hono";

export const frame = (c: Context) => {
  return c.json({
    version: "vNext",
    image: "https://res.cloudinary.com/dzdas1gyp/image/upload/v1750974302/og-clean_h21k6u.jpg",
    post_url: "/submit",
    buttons: [
      {
        label: "See yours",
        action: "post",
        post_data: { step: 1, score: {} }
      }
    ]
  });
};
