// sanity.cli.js
import { defineCliConfig } from 'sanity/cli';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV!, process.cwd(), '');

const projectId = env.PUBLIC_SANITY_PROJECT_ID;
const dataset = env.PUBLIC_SANITY_DATASET;

// const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
// const dataset = import.meta.env.PUBLIC_SANITY_DATASET;

export default defineCliConfig({
    api: {
        projectId: projectId,
        dataset: dataset,
    },
});
