import rss, {pagesGlobToRssItems} from '@astrojs/rss';
import type {AstroGlobal} from "astro";

export async function GET(context: AstroGlobal) {
    return rss({
        title: 'Astro Learner | Blog',
        description: 'My journey learning Astro',
        site: context.site as URL,
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>en-us</language>`,
    });
}