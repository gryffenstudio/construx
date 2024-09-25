import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { presentationTool } from 'sanity/presentation';

import { schemaTypes } from './schema';
import { resolve } from './src/utils/sanity';
export default defineConfig({
    name: 'default',
    title: 'construx',
    projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
    dataset: import.meta.env.PUBLIC_SANITY_DATASET,
    plugins: [
        structureTool(),
        visionTool(),
        presentationTool({
            previewUrl: location.origin,
            resolve,
        }),
    ],
    schema: {
        types: schemaTypes,
    },
});
