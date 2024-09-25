import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';
import robotsTxt from 'astro-robots-txt';
import sanity from '@sanity/astro';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';

const env = loadEnv(process.env.NODE_ENV, process.cwd(), '');

const projectId = env.PUBLIC_SANITY_PROJECT_ID;
const dataset = env.PUBLIC_SANITY_DATASET;

// const projectId =
//     process.env.PUBLIC_SANITY_PROJECT_ID ??
//     import.meta.env.PUBLIC_SANITY_PROJECT_ID
// const dataset =
//     process.env.PUBLIC_SANITY_DATASET ??
//     import.meta.env.PUBLIC_SANITY_DATASET

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
            projectId,
            dataset,
            useCdn: false,
            apiVersion: '2024-09-14',
            studioBasePath: '/sanity-studio-admin',
            stega: {
                studioUrl: '/sanity-studio-admin',
            },
        }),
    ],
    image: {
        domains: ['cdn.sanity.io'],
    },
    prefetch: {
        prefetchAll: true,
    },
    vite: {
        resolve: {
            alias: {
                // Polyfill Node.js core modules for Vite
                path: 'path-browserify',
            },
        },
        optimizeDeps: {
            esbuildOptions: {
                // Polyfill Node.js globals like "process" and "Buffer"
                plugins: [
                    NodeGlobalsPolyfillPlugin({
                        process: true,
                        buffer: true,
                    }),
                    NodeModulesPolyfillPlugin(),
                ],
            },
        },
    },
});
