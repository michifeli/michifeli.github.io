import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export const GET = async (context) => {
  const posts = (await getCollection("writing")).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

  return rss({
    title: "Mitchel Rojas Rivera",
    description:
      "Estudiante de Ingeniería Civil Telemática, GNU/Linux & Open Source Advocate. Escribo y programo cosas.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/writing/${post.id}/`,
    })),
    customData: `<language>es-cl</language>`,
  });
};