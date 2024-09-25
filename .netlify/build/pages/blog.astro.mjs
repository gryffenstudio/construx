import '../chunks/page-ssr_lEH_Rutg.mjs';
import { a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_7OBbTJTL.mjs';
import 'kleur/colors';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { B as BlogPostCard, b as getPosts } from '../chunks/BlogPostCard_BHUqgR_l.mjs';
import { $ as $$Layout } from '../chunks/Layout_DUctyxUi.mjs';
export { renderers } from '../renderers.mjs';

const POSTS_PER_PAGE = 3;
function BlogPostGrid({ posts, totalPosts }) {
  const [displayedPosts, setDisplayedPosts] = useState(posts.slice(0, POSTS_PER_PAGE));
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  async function fetchMorePosts() {
    setLoadingMore(true);
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
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid justify-items-center gap-y-7 md:grid-cols-2 md:gap-x-20 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-14", children: [
      displayedPosts.map((post, index) => /* @__PURE__ */ jsx(BlogPostCard, { post }, `${post.title}-${index}`)),
      loadingMore && [...Array(POSTS_PER_PAGE)].map((_, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex h-[350px] w-[327px] animate-pulse flex-col rounded-lg bg-brand-gray p-4 text-left lg:h-[400px] lg:w-[370px]",
          children: [
            /* @__PURE__ */ jsx("div", { className: "h-[220px] w-full rounded-lg bg-gray-300 lg:h-[250px]" }),
            /* @__PURE__ */ jsx("div", { className: "mt-3 h-6 w-3/4 rounded-lg bg-gray-300" }),
            /* @__PURE__ */ jsx("div", { className: "mt-2 h-4 w-5/6 rounded-lg bg-gray-300" })
          ]
        },
        `loading-more-${index}`
      ))
    ] }),
    isMorePosts && /* @__PURE__ */ jsx(
      "button",
      {
        onClick: showMore,
        className: "mx-auto mt-8 inline-flex h-12 w-fit items-center justify-center rounded-lg bg-brand-green-primary px-8 py-3 hover:opacity-50 disabled:opacity-50",
        disabled: loadingMore,
        children: /* @__PURE__ */ jsx("span", { className: "font-medium uppercase tracking-tighter text-white", children: loadingMore ? "Loading More..." : "Show More" })
      }
    )
  ] });
}

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getPosts();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog - Construx", "description": "Build with Construx" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="container flex flex-col items-center justify-center py-16"> <h1 class="capitalize leading-[60px]">latest news</h1> <p class="mt-4 text-center lg:w-[35%]">
Fill out the form below to get in touch with our experienced team of contractors,
            painters, architects and more.
</p> </header> <main> <section class="container pb-16"> ${renderComponent($$result2, "BlogPostGrid", BlogPostGrid, { "posts": posts, "totalPosts": posts.length, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/wgrif/Gryffen Studio/Templates/construx/src/components/BlogPostGrid", "client:component-export": "default" })} </section> </main> ` })}`;
}, "C:/Users/wgrif/Gryffen Studio/Templates/construx/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/wgrif/Gryffen Studio/Templates/construx/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
