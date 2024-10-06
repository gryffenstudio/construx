import { type PresentationPluginOptions, defineLocations } from "sanity/presentation";

export const resolve: PresentationPluginOptions['resolve'] = {
    locations: {
        // Add more locations for other post types
        post: defineLocations({
            select: {
                title: 'title',
                slug: 'slug.current',
            },
            resolve: (doc) => ({
                locations: [
                    {
                        title: doc?.title || 'Untitled',
                        href: `/blog/${doc?.slug}`,
                    },
                    { title: 'Construx Template', href: location.origin },
                ],
            }),
        }),
    },
};
