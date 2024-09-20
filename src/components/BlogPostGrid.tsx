import { useEffect, useState } from 'react';
import { getPostCount, getPosts, type Post } from '../utils/sanity';
import BlogPostCard from './BlogPostCard';

const POSTS_PER_PAGE = 3;

function BlogPostGrid() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [page, setPage] = useState<number>(1);
    const [loadingInitial, setLoadingInitial] = useState<boolean>(true);
    const [loadingMore, setLoadingMore] = useState<boolean>(false);
    const [totalPosts, setTotalPosts] = useState<number>(0);

    async function fetchMorePosts() {
        setLoadingMore(true);
        const nextPage = page + 1;
        const newPosts: Post[] = await getPosts(POSTS_PER_PAGE * nextPage);
        setPosts(newPosts); // Append new posts
        setPage(nextPage);
        setLoadingMore(false);
    }

    useEffect(() => {
        async function initialize() {
            const [total, initialPosts] = await Promise.all([
                getPostCount(),
                getPosts(POSTS_PER_PAGE),
            ]);
            setTotalPosts(total);
            setPosts(initialPosts);
            setLoadingInitial(false);
        }
        initialize();
    }, []);

    function showMore() {
        fetchMorePosts();
    }

    const isMorePosts = posts.length < totalPosts;

    return (
        <div className='flex flex-col'>
            <div className='grid justify-items-center gap-y-7 md:grid-cols-2 md:gap-x-20 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-14'>
                {/* Render posts or skeletons if loadingInitial is true */}
                {loadingInitial
                    ? [...Array(POSTS_PER_PAGE)].map((_, index) => (
                          <div
                              key={`loading-${index}`}
                              className='// Mobile size // Desktop size at lg breakpoint h-[350px] w-[327px] animate-pulse rounded-lg bg-gray-200 lg:h-[400px] lg:w-[370px]'
                          >
                              <div className='h-[220px] w-full rounded-lg bg-gray-300 lg:h-[250px]'></div>
                              <div className='mt-3 h-6 w-3/4 rounded-lg bg-gray-300'></div>
                              <div className='mt-2 h-4 w-5/6 rounded-lg bg-gray-300'></div>
                          </div>
                      ))
                    : posts.map((post: Post, index: number) => (
                          <BlogPostCard key={`${post.title}-${index}`} post={post} />
                      ))}

                {/* Show skeletons when loading more posts */}
                {loadingMore &&
                    [...Array(POSTS_PER_PAGE)].map((_, index) => (
                        <div
                            key={`loading-more-${index}`}
                            className='// Mobile size // Desktop size at lg breakpoint h-[350px] w-[327px] animate-pulse rounded-lg bg-gray-200 lg:h-[400px] lg:w-[370px]'
                        >
                            <div className='h-[220px] w-full rounded-lg bg-gray-300 lg:h-[250px]'></div>
                            <div className='mt-3 h-6 w-3/4 rounded-lg bg-gray-300'></div>
                            <div className='mt-2 h-4 w-5/6 rounded-lg bg-gray-300'></div>
                        </div>
                    ))}
            </div>

            {/* Show More Button */}
            {!loadingInitial && isMorePosts && (
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
