import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { presentationTool } from 'sanity/presentation';
import { schemaTypes } from './sanity/schemas';
import { projectId, dataset } from './sanity/lib/api';
import { resolve } from './sanity/plugins/resolve';

export default defineConfig({
    name: 'default',
    title: 'construx',
    projectId,
    dataset,
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
