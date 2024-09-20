import { urlFor, type Post } from '../utils/sanity';
import { useMediaQuery } from '../utils/reactHooks';

function BlogPostCard({ post }: { post: Post }) {
    const isMobile = useMediaQuery('(max-width: 1024px)');

    return (
        <a
            href={`/blog/${post.slug.current}`}
            className='flex h-[350px] w-[327px] flex-col rounded-lg bg-brand-gray p-4 text-left lg:h-[400px] lg:w-[370px]'
        >
            {isMobile ? (
                <img
                    src={urlFor(post.cardImageMobile)?.format('webp').url()}
                    alt={`${post.title} blog post card image`}
                    loading='lazy'
                    decoding='async'
                    className='max-h-[220px] w-full max-w-[327px] rounded-lg'
                    height={220}
                    width={305}
                />
            ) : (
                <img
                    src={urlFor(post.cardImageDesktop)?.format('webp').url()}
                    alt={`${post.title} blog post card image`}
                    loading='lazy'
                    decoding='async'
                    className='max-h-[250px] w-full max-w-[370px] rounded-lg'
                    height={250}
                    width={350}
                />
            )}
            <h2 className='mt-3 text-left text-base font-bold capitalize leading-normal lg:text-lg'>
                {post.title}
            </h2>
            <p className='text-left text-sm leading-normal lg:text-base'>{post.cardDescription}</p>
        </a>
    );
}

export default BlogPostCard;
