import { useState } from 'react';
import { type Post } from '../utils/sanity';
import BlogPostCard from './BlogPostCard';

const POSTS_PER_PAGE = 3;

interface BlogPostGridProps {
    posts: Post[];
    totalPosts: number;
}

function BlogPostGrid({ posts, totalPosts }: BlogPostGridProps) {
    const [displayedPosts, setDisplayedPosts] = useState<Post[]>(posts.slice(0, POSTS_PER_PAGE));
    const [page, setPage] = useState<number>(1);
    const [loadingMore, setLoadingMore] = useState<boolean>(false);

    async function fetchMorePosts() {
        setLoadingMore(true);

        // Simulate loading delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        const nextPage = page + 1;
        const newPosts = posts.slice(0, POSTS_PER_PAGE * nextPage);
        setDisplayedPosts(newPosts);
        setPage(nextPage);
        setLoadingMore(false);
    }

    function showMore() {
        fetchMorePosts();
    }

    const isMorePosts = displayedPosts.length < totalPosts;

    return (
        <div className='flex flex-col'>
            <div className='grid justify-items-center gap-y-7 md:grid-cols-2 md:gap-x-20 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-14'>
                {displayedPosts.map((post: Post, index: number) => (
                    <BlogPostCard key={`${post.title}-${index}`} post={post} />
                ))}

                {/* Show skeletons when loading more posts */}
                {loadingMore &&
                    [...Array(POSTS_PER_PAGE)].map((_, index) => (
                        <div
                            key={`loading-more-${index}`}
                            className='flex h-[350px] w-[327px] animate-pulse flex-col rounded-lg bg-brand-gray p-4 text-left lg:h-[400px] lg:w-[370px]'
                        >
                            <div className='h-[220px] w-full rounded-lg bg-gray-300 lg:h-[250px]'></div>
                            <div className='mt-3 h-6 w-3/4 rounded-lg bg-gray-300'></div>
                            <div className='mt-2 h-4 w-5/6 rounded-lg bg-gray-300'></div>
                        </div>
                    ))}
            </div>

            {/* Show More Button */}
            {isMorePosts && (
                <button
                    onClick={showMore}
                    className='mx-auto mt-8 inline-flex h-12 w-fit items-center justify-center rounded-lg bg-brand-green-primary px-8 py-3 hover:opacity-50 disabled:opacity-50'
                    disabled={loadingMore}
                >
                    <span className='font-medium uppercase tracking-tighter text-white'>
                        {loadingMore ? 'Loading More...' : 'Show More'}
                    </span>
                </button>
            )}
        </div>
    );
}

export default BlogPostGrid;
