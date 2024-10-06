import groq from 'groq';
import { loadQuery } from '../loader/loadQuery';
import type { Category, Post } from './types';

export async function getPost(slug: string): Promise<Post> {
    const query = groq`*[_type == "post" && slug.current == $slug][0]{
            ...,
            author->{
                name,
                websiteLink,
                slug,
                image
            },
            category->{
                title,
                slug
            },
        }`;
    const { data } = await loadQuery<Post>({ query, params: { slug } });
    return data;
}

export async function getPosts(numOfPosts?: number): Promise<Post[]> {
    let filter: string = '';
    if (numOfPosts) {
        filter = `[0...${numOfPosts}]`;
    }

    const query = groq`*[_type == "post" && defined(slug.current)] | order(updatedAt desc) ${filter}{
            title,
            pageDescription,
            cardDescription,
            slug,
            author->{
                _id,
                name,
            },
            category->,
            cardImageMobile,
            cardImageDesktop,
            _createdAt,
            body
        }`;

    const { data } = await loadQuery<Post[]>({ query });
    return data;
}

export async function getRelatedPosts(slug: string, category: string): Promise<Post[]> {
    const query = groq`*[_type == "post" && defined(slug.current) && category->title == $category && slug.current != $slug] | order(updatedAt desc) [0...3] {
            title,
            pageDescription,
            cardDescription,
            slug,
            author->{
                _id,
                name,
            },
            category->,
            cardImageMobile,
            cardImageDesktop,
            _createdAt,
            body,
        }`;

    const { data } = await loadQuery<Post[]>({ query, params: { category, slug } });

    return data;
}

export async function getCategories(): Promise<Category[]> {
    const query = groq`*[_type == "category" && defined(slug.current)]`;
    const { data } = await loadQuery<Category[]>({ query });
    return data;
}

export async function getCategory(slug: string): Promise<Category> {
    const query = groq`*[_type == "category" && slug.current == $slug][0]`;
    const { data } = await loadQuery<Category>({ query, params: { slug } });
    return data;
}