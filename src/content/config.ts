import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  blog,
};
