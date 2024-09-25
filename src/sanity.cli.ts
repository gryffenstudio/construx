// sanity.cli.js
import { defineCliConfig } from 'sanity/cli';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV!, process.cwd(), '');

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID || env.PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.PUBLIC_SANITY_DATASET || env.PUBLIC_SANITY_DATASET;

export default defineCliConfig({
    api: {
        projectId: projectId,
        dataset: dataset,
    },
});
