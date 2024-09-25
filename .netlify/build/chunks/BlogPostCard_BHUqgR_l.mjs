import { jsxs, jsx } from 'react/jsx-runtime';
import { s as sanityClient } from './page-ssr_lEH_Rutg.mjs';
import imageUrlBuilder from '@sanity/image-url';
import groq from 'groq';
import { defineLocations } from 'sanity/presentation';
import { u as useMediaQuery } from './reactHooks_C-SsB55_.mjs';

const visualEditingEnabled = undefined                                                     === "true";
const imageBuilder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return imageBuilder.image(source);
}
({
  locations: {
    // Add more locations for other post types
    post: defineLocations({
      select: {
        title: "title",
        slug: "slug.current"
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || "Untitled",
            href: `/blog/${doc?.slug}`
          },
          { title: "Construx Template", href: location.origin }
        ]
      })
    })
  }
});
async function loadQuery({
  query,
  params
}) {
  const perspective = "published";
  const { result, resultSourceMap } = await sanityClient.fetch(
    query,
    params ?? {},
    {
      filterResponse: false,
      perspective,
      resultSourceMap: false,
      stega: visualEditingEnabled,
      ...{}
    }
  );
  return {
    data: result,
    sourceMap: resultSourceMap,
    perspective
  };
}
async function getPosts(numOfPosts) {
  let filter = "";
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
  const { data } = await loadQuery({ query });
  return data;
}
async function getPost(slug) {
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
  const { data } = await loadQuery({ query, params: { slug } });
  return data;
}
async function getRelatedPosts(category) {
  const query = groq`*[_type == "post" && defined(slug.current) && category->title == $category] | order(updatedAt desc) [0...3] {
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
  const { data } = await loadQuery({ query, params: { category } });
  return data;
}

function BlogPostCard({ post }) {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href: `/blog/${post.slug.current}`,
      className: "flex h-[350px] w-[327px] flex-col rounded-lg bg-brand-gray p-4 text-left lg:h-[400px] lg:w-[370px]",
      children: [
        isMobile ? /* @__PURE__ */ jsx(
          "img",
          {
            src: urlFor(post.cardImageMobile)?.format("webp").url(),
            alt: `${post.title} blog post card image`,
            loading: "lazy",
            decoding: "async",
            className: "max-h-[220px] w-full max-w-[327px] rounded-lg",
            height: 220,
            width: 305
          }
        ) : /* @__PURE__ */ jsx(
          "img",
          {
            src: urlFor(post.cardImageDesktop)?.format("webp").url(),
            alt: `${post.title} blog post card image`,
            loading: "lazy",
            decoding: "async",
            className: "max-h-[250px] w-full max-w-[370px] rounded-lg",
            height: 250,
            width: 350
          }
        ),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 text-left text-base font-bold capitalize leading-normal lg:text-lg", children: post.title }),
        /* @__PURE__ */ jsx("p", { className: "text-left text-sm leading-normal lg:text-base", children: post.cardDescription })
      ]
    }
  );
}

export { BlogPostCard as B, getRelatedPosts as a, getPosts as b, getPost as g, urlFor as u };
