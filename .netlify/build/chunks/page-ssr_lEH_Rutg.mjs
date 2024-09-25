/* empty css                                */
import { createClient } from '@sanity/client';

const sanityClient = createClient(
            {"apiVersion":"2024-09-14","projectId":undefined,"dataset":undefined,"useCdn":false,"stega":{"studioUrl":"\u002Fsanity-studio-admin"}}
          );

globalThis.sanityClient = sanityClient;

export { sanityClient as s };
