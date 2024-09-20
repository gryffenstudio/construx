import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';
import robotsTxt from 'astro-robots-txt';
import sanity from '@sanity/astro';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
    site: 'https://construx-template.netlify.app',
    adapter: netlify(),
    output: 'hybrid',
    devToolbar: {
        enabled: false,
    },
    integrations: [
        react(),
        tailwind(),
        partytown({
            config: {
                forward: ['dataLayer.push'],
            },
        }),
        robotsTxt(),
        sitemap(),
        sanity({
            projectId: 'bpernsxq',
            dataset: 'production',
            useCdn: false,
            apiVersion: '2024-05-14',
            studioBasePath: '/sanity-studio-admin',
        }),
    ],
    image: {
        domains: ['cdn.sanity.io'],
    },
    prefetch: {
        prefetchAll: true,
    },
});
