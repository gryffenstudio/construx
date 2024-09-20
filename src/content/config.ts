import { z, defineCollection, reference } from 'astro:content';

export enum ServiceType {
    Residential = 'residential',
    Commercial = 'commercial',
    Industrial = 'industrial',
    Infrastructure = 'infrastructure',
}
export enum IndustryType {
    Health = 'health',
    Education = 'education',
    RealEstate = 'real estate',
}

const projectCollection = defineCollection({
    type: 'data',
    schema: ({ image }) =>
        z.object({
            projectName: z.string().max(100, {
                message: 'Project name is too long!',
            }),
            projectSummaryParagraph: z.string(),
            projectSummaryPoints: z.array(z.string()),
            clientName: z.string(),
            slug: z.string(),
            service: z.nativeEnum(ServiceType),
            industry: z.nativeEnum(IndustryType),
            location: z.string(),
            completionDate: z
                .string()
                .date()
                .nullish()
                .refine((date) => (date ? new Date(date) <= new Date() : null), {
                    message: 'Date must be before current date',
                }),
            members: z.array(reference('team')),
            featured: z.boolean(),
            cardImageMobile: z.object({
                image: image(),
                alt: z.string(),
            }),
            cardImageDesktop: z.object({
                image: image(),
                alt: z.string(),
            }),
            projectImagesMobile: z.array(
                z.object({
                    image: image(),
                    alt: z.string(),
                }),
            ),
            projectImagesDesktop: z.array(
                z.object({
                    image: image(),
                    alt: z.string(),
                }),
            ),
        }),
});

const reviewCollection = defineCollection({
    type: 'data',
    schema: ({ image }) =>
        z.object({
            reviewerName: z.string().max(100, {
                message: 'Project name is too long!',
            }),
            featured: z.boolean(),
            reviewerLocation: z.string(),
            review: z.string(),
            reviewerImage: z.object({
                image: image(),
                alt: z.string(),
            }),
        }),
});

const teamCollection = defineCollection({
    type: 'data',
    schema: ({ image }) =>
        z.object({
            name: z.string().max(100, {
                message: 'Team member name is too long!',
            }),
            role: z.string(),
            slug: z.string(),
            location: z.string(),
            phoneNumber: z.string(),
            email: z.string().email(),
            bio: z.string(),
            cardImageMobile: z.object({
                image: image(),
                alt: z.string(),
            }),
            cardImageDesktop: z.object({
                image: image(),
                alt: z.string(),
            }),
            profileImageMobile: z.object({
                image: image(),
                alt: z.string(),
            }),
            profileImageDesktop: z.object({
                image: image(),
                alt: z.string(),
            }),
        }),
});

const positionsCollection = defineCollection({
    type: 'data',
    schema: () =>
        z.object({
            positionName: z.string(),
            positionLocation: z.string(),
        }),
});

export const collections = {
    projects: projectCollection,
    reviews: reviewCollection,
    team: teamCollection,
    positions: positionsCollection,
};
