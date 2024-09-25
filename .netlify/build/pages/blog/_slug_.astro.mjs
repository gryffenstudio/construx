import '../../chunks/page-ssr_lEH_Rutg.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, f as renderSlot, e as renderComponent, b as addAttribute, F as Fragment } from '../../chunks/astro/server_7OBbTJTL.mjs';
import 'kleur/colors';
import { s as siteData, $ as $$Layout } from '../../chunks/Layout_DUctyxUi.mjs';
import { u as urlFor, g as getPost, a as getRelatedPosts, b as getPosts, B as BlogPostCard } from '../../chunks/BlogPostCard_BHUqgR_l.mjs';
import { $ as $$CustomImage } from '../../chunks/CustomImage_Cb-r3vcl.mjs';
import { isPortableTextToolkitList, isPortableTextListItemBlock, isPortableTextToolkitSpan, isPortableTextBlock, isPortableTextToolkitTextNode, nestLists, LIST_NEST_MODE_HTML, buildMarksTree } from '@portabletext/toolkit';
import 'clsx';
import { C as Carousel } from '../../chunks/Carousel_B34kdjqf.mjs';
import { a as getImage } from '../../chunks/_astro_assets_B8fPYVwK.mjs';
export { renderers } from '../../renderers.mjs';

function formatDate(date, format) {
  if (format) {
    return new Date(date).toLocaleDateString("en-GB", format);
  }
  return new Date(date).toLocaleDateString("en-GB", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

function isComponent(it) {
  return typeof it === "function";
}
function mergeComponents(components, overrides) {
  const cmps = { ...components };
  for (const [key, override] of Object.entries(overrides)) {
    const current = components[key];
    const value = !current || isComponent(override) || isComponent(current) ? override : {
      ...current,
      ...override
    };
    cmps[key] = value;
  }
  return cmps;
}

const getTemplate = (prop, type) => `PortableText [components.${prop}] is missing "${type}"`;
const unknownTypeWarning = (type) => getTemplate("type", type);
const unknownMarkWarning = (markType) => getTemplate("mark", markType);
const unknownBlockWarning = (style) => getTemplate("block", style);
const unknownListWarning = (listItem) => getTemplate("list", listItem);
const unknownListItemWarning = (listStyle) => getTemplate("listItem", listStyle);
const getWarningMessage = (nodeType, type) => {
  const fncs = {
    block: unknownBlockWarning,
    list: unknownListWarning,
    listItem: unknownListItemWarning,
    mark: unknownMarkWarning,
    type: unknownTypeWarning
  };
  return fncs[nodeType](type);
};
function printWarning(message) {
  console.warn(message);
}

const key = Symbol("astro-portabletext");
function useContext(node) {
  if (!(key in globalThis)) {
    throw new Error(`PortableText "context" has not been initialised`);
  }
  return globalThis[key](node);
}

const $$Astro$8 = createAstro("https://construx-template.netlify.app");
const $$Block = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Block;
  const props = Astro2.props;
  const { node, index, isInline, ...attrs } = props;
  const styleIs = (style) => style === node.style;
  const { getUnknownComponent } = useContext(node);
  const UnknownStyle = getUnknownComponent();
  return renderTemplate`${styleIs("h1") ? renderTemplate`${maybeRenderHead()}<h1${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h1>` : styleIs("h2") ? renderTemplate`<h2${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h2>` : styleIs("h3") ? renderTemplate`<h3${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h3>` : styleIs("h4") ? renderTemplate`<h4${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h4>` : styleIs("h5") ? renderTemplate`<h5${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h5>` : styleIs("h6") ? renderTemplate`<h6${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h6>` : styleIs("blockquote") ? renderTemplate`<blockquote${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</blockquote>` : styleIs("normal") ? renderTemplate`<p${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</p>` : renderTemplate`${renderComponent($$result, "UnknownStyle", UnknownStyle, { ...props }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}`}`;
}, "C:/Users/wgrif/Gryffen Studio/Templates/construx/node_modules/astro-portabletext/components/Block.astro", void 0);

const $$HardBreak = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<br>`;
}, "C:/Users/wgrif/Gryffen Studio/Templates/construx/node_modules/astro-portabletext/components/HardBreak.astro", void 0);

const $$Astro$7 = createAstro("https://construx-template.netlify.app");
const $$List = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$List;
  const { node, index, isInline, ...attrs } = Astro2.props;
  const listItemIs = (listItem) => listItem === node.listItem;
  return renderTemplate`${listItemIs("menu") ? renderTemplate`${maybeRenderHead()}<menu${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</menu>` : listItemIs("number") ? renderTemplate`<ol${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</ol>` : renderTemplate`<ul${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</ul>`}`;
}, "C:/Users/wgrif/Gryffen Studio/Templates/construx/node_modules/astro-portabletext/components/List.astro", void 0);

const $$Astro$6 = createAstro("https://construx-template.netlify.app");
const $$ListItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ListItem;
  const { node, index, isInline, ...attrs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</li>`;
}, "C:/Users/wgrif/Gryffen Studio/Templates/construx/node_modules/astro-portabletext/components/ListItem.astro", void 0);

const $$Astro$5 = createAstro("https://construx-template.netlify.app");
const $$Mark = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Mark;
  const props = Astro2.props;
  const { node, index, isInline, ...attrs } = props;
  const markTypeIs = (markType) => markType === node.markType;
  const { getUnknownComponent } = useContext(node);
  const UnknownMarkType = getUnknownComponent();
  return renderTemplate`${markTypeIs("code") ? renderTemplate`${maybeRenderHead()}<code${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</code>` : markTypeIs("em") ? renderTemplate`<em${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</em>` : markTypeIs("link") ? renderTemplate`<a${addAttribute(node.markDef.href, "href")}${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</a>` : markTypeIs("strike-through") ? renderTemplate`<del${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</del>` : markTypeIs("strong") ? renderTemplate`<strong${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</strong>` : markTypeIs("underline") ? renderTemplate`<span style="text-decoration: underline;"${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</span>` : renderTemplate`${renderComponent($$result, "UnknownMarkType", UnknownMarkType, { ...props }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}`}`;
}, "C:/Users/wgrif/Gryffen Studio/Templates/construx/node_modules/astro-portabletext/components/Mark.astro", void 0);

const $$UnknownBlock = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<p data-portabletext-unknown="block">${renderSlot($$result, $$slots["default"])}</p>`;
}, "C:/Users/wgrif/Gryffen Studio/Templates/construx/node_modules/astro-portabletext/components/UnknownBlock.astro", void 0);

const $$UnknownList = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul data-portabletext-unknown="list">${renderSlot($$result, $$slots["default"])}</ul>`;
}, "C:/Users/wgrif/Gryffen Studio/Templates/construx/node_modules/astro-portabletext/components/UnknownList.astro", void 0);

const $$UnknownListItem = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<li data-portabletext-unknown="listitem">${renderSlot($$result, $$slots["default"])}</li>`;
}, "C:/Users/wgrif/Gryffen Studio/Templates/construx/node_modules/astro-portabletext/components/UnknownListItem.astro", void 0);

const $$UnknownMark = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span data-portabletext-unknown="mark">${renderSlot($$result, $$slots["default"])}</span>`;
}, "C:/Users/wgrif/Gryffen Studio/Templates/construx/node_modules/astro-portabletext/components/UnknownMark.astro", void 0);

const $$Astro$4 = createAstro("https://construx-template.netlify.app");
const $$UnknownType = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$UnknownType;
  const { node, isInline } = Astro2.props;
  const warning = getWarningMessage("type", node._type);
  return renderTemplate`${isInline ? renderTemplate`${maybeRenderHead()}<span style="display:none" data-portabletext-unknown="type">${warning}</span>` : renderTemplate`<div style="display:none" data-portabletext-unknown="type">${warning}</div>`}`;
}, "C:/Users/wgrif/Gryffen Studio/Templates/construx/node_modules/astro-portabletext/components/UnknownType.astro", void 0);

const $$Astro$3 = createAstro("https://construx-template.netlify.app");
const $$PortableText$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$PortableText$1;
  const {
    value,
    components: componentOverrides = {},
    listNestingMode = LIST_NEST_MODE_HTML,
    onMissingComponent = true
  } = Astro2.props;
  const components = mergeComponents(
    {
      type: {},
      unknownType: $$UnknownType,
      block: {
        h1: $$Block,
        h2: $$Block,
        h3: $$Block,
        h4: $$Block,
        h5: $$Block,
        h6: $$Block,
        blockquote: $$Block,
        normal: $$Block
      },
      unknownBlock: $$UnknownBlock,
      list: {
        bullet: $$List,
        number: $$List,
        menu: $$List
      },
      unknownList: $$UnknownList,
      listItem: {
        bullet: $$ListItem,
        number: $$ListItem,
        menu: $$ListItem
      },
      unknownListItem: $$UnknownListItem,
      mark: {
        code: $$Mark,
        em: $$Mark,
        link: $$Mark,
        "strike-through": $$Mark,
        strong: $$Mark,
        underline: $$Mark
      },
      unknownMark: $$UnknownMark,
      hardBreak: $$HardBreak
    },
    componentOverrides
  );
  const noop = () => {
  };
  const missingComponentHandler = ((handler) => {
    if (typeof handler === "function") {
      return handler;
    }
    return !handler ? noop : printWarning;
  })(onMissingComponent);
  const serializeNode = (isInline) => (node, index = 0) => asComponentProps(node, index, isInline);
  const serializeChildren = (node, isInline) => node.children.map(serializeNode(isInline));
  const serializeMarksTree = (node) => buildMarksTree(node).map(serializeNode(true));
  const asComponentProps = (node, index, isInline) => ({
    node,
    index,
    isInline
  });
  const provideComponent = (nodeType, type) => {
    const component = components[nodeType];
    return isComponent(component) ? component : component[type] ?? missingComponentHandler(getWarningMessage(nodeType, type), {
      nodeType,
      type
    });
  };
  const prepareForRender = (props) => {
    const { node } = props;
    return isPortableTextToolkitList(node) ? [
      provideComponent("list", node.listItem) ?? components.unknownList,
      serializeChildren(node, false)
    ] : isPortableTextListItemBlock(node) ? [
      provideComponent("listItem", node.listItem) ?? components.unknownListItem,
      serializeMarksTree(node).map((children) => {
        if (node.style !== "normal") {
          const { listItem, ...blockNode } = node;
          children = serializeNode(false)(blockNode, 0);
        }
        return children;
      })
    ] : isPortableTextToolkitSpan(node) ? [
      provideComponent("mark", node.markType) ?? components.unknownMark,
      serializeChildren(node, true)
    ] : isPortableTextBlock(node) ? [
      provideComponent(
        "block",
        node.style ?? (node.style = "normal")
        /* Make sure style has been set */
      ) ?? components.unknownBlock,
      serializeMarksTree(node)
    ] : isPortableTextToolkitTextNode(node) ? [
      "\n" === node.text && isComponent(components.hardBreak) ? components.hardBreak : node.text,
      []
    ] : [
      provideComponent("type", node._type) ?? components.unknownType,
      []
    ];
  };
  globalThis[key] = (node) => {
    return {
      getDefaultComponent: provideDefaultComponent.bind(null, node),
      getUnknownComponent: provideUnknownComponent.bind(null, node)
    };
  };
  const provideDefaultComponent = (node) => {
    return isPortableTextToolkitList(node) ? $$List : isPortableTextListItemBlock(node) ? $$ListItem : isPortableTextToolkitSpan(node) ? $$Mark : isPortableTextBlock(node) ? $$Block : isPortableTextToolkitTextNode(node) ? $$HardBreak : $$UnknownType;
  };
  const provideUnknownComponent = (node) => {
    return isPortableTextToolkitList(node) ? components.unknownList : isPortableTextListItemBlock(node) ? components.unknownListItem : isPortableTextToolkitSpan(node) ? components.unknownMark : isPortableTextBlock(node) ? components.unknownBlock : !isPortableTextToolkitTextNode(node) ? components.unknownType : (() => {
      throw new Error(
        `[PortableText getUnknownComponent] Unable to provide component with node type ${node._type}`
      );
    })();
  };
  const blocks = Array.isArray(value) ? value : [value];
  function* renderBlocks() {
    let index = 0;
    for (const it of nestLists(blocks, listNestingMode)) {
      yield asComponentProps(it, index++, false);
    }
  }
  return renderTemplate`${[...renderBlocks()].map(function render(props) {
    const [Cmp, children] = prepareForRender(props);
    return !isComponent(Cmp) ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${Cmp}` })}` : renderTemplate`${renderComponent($$result, "Cmp", Cmp, { ...props }, { "default": ($$result2) => renderTemplate`${children.map(render)}` })}`;
  })}`;
}, "C:/Users/wgrif/Gryffen Studio/Templates/construx/node_modules/astro-portabletext/components/PortableText.astro", void 0);

const $$Astro$2 = createAstro("https://construx-template.netlify.app");
const $$PortableTextImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PortableTextImage;
  const { asset, alt } = Astro2.props.node;
  const url = urlFor(asset)?.url();
  const webpUrl = urlFor(asset)?.format("webp").url();
  return renderTemplate`${maybeRenderHead()}<picture> <source${addAttribute(webpUrl, "srcset")} type="image/webp"> <img class="h-auto max-h-[600px] w-full max-w-[1000px]" height="800px" width="1440px"${addAttribute(url, "src")}${addAttribute(alt, "alt")} loading="lazy" decoding="async"> </picture>`;
}, "C:/Users/wgrif/Gryffen Studio/Templates/construx/src/components/PortableTextImage.astro", void 0);

const $$Astro$1 = createAstro("https://construx-template.netlify.app");
const $$PortableText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PortableText;
  const { portableText } = Astro2.props;
  const components = {
    type: {
      image: $$PortableTextImage
    }
  };
  return renderTemplate`${renderComponent($$result, "PortableTextInternal", $$PortableText$1, { "value": portableText, "components": components })}`;
}, "C:/Users/wgrif/Gryffen Studio/Templates/construx/src/components/PortableText.astro", void 0);

const $$Astro = createAstro("https://construx-template.netlify.app");
async function getStaticPaths() {
  const posts = await getPosts();
  return posts.map((post) => ({
    params: { slug: post.slug.current },
    props: { posts }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const post = await getPost(slug);
  const relatedPosts = await getRelatedPosts(post.category.title);
  let relatedPostCarouselSlides = [];
  for (let i = 0; i < relatedPosts.length; i++) {
    let carouselProjectSlide = {};
    let carouselMobileProjectImageObject = {};
    let carouselDesktopProjectImageObject = {};
    let featuredProjectMobileImage = await getImage({
      src: urlFor(relatedPosts[i].cardImageMobile)?.url(),
      height: 330,
      width: 327,
      format: "webp",
      quality: "high"
    });
    carouselMobileProjectImageObject.image = featuredProjectMobileImage;
    carouselMobileProjectImageObject.alt = `${relatedPosts[i].title} related post carousel image`;
    let featuredProjectDesktopImage = await getImage({
      src: urlFor(relatedPosts[i].cardImageDesktop)?.url(),
      height: 330,
      width: 360,
      format: "webp",
      quality: "high"
    });
    carouselDesktopProjectImageObject.image = featuredProjectDesktopImage;
    carouselMobileProjectImageObject.alt = `${relatedPosts[i].title} related post carousel image`;
    carouselProjectSlide.mobileImage = carouselMobileProjectImageObject;
    carouselProjectSlide.desktopImage = carouselDesktopProjectImageObject;
    carouselProjectSlide.href = `/blog/${relatedPosts[i].slug.current}`;
    relatedPostCarouselSlides.push(carouselProjectSlide);
  }
  const dateFormat = {
    day: "numeric",
    month: "long",
    year: "numeric",
    formatMatcher: "basic"
  };
  const structuredData = [
    {
      type: "BlogPosting",
      data: {
        url: Astro2.url,
        headline: post.title,
        description: post.pageDescription,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        author: {
          "@type": "Person",
          name: post.author.name
        },
        publisher: {
          "@id": siteData.organizationId
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": Astro2.url
        },
        image: urlFor(post.cardImageMobile)?.url() ?? ""
      }
    },
    {
      type: "Organization",
      data: {
        "@id": siteData.organizationId,
        name: siteData.organizationName,
        url: siteData.url,
        logo: siteData.logo.src
      }
    },
    {
      type: "BreadcrumbList",
      data: {
        id: `${siteData.url}/blog/${post.category.slug.current}/#breadcrumb`,
        items: [
          { name: "Home", url: siteData.url },
          { name: "Blog", url: `${siteData.url}/blog` },
          { name: post.title, url: Astro2.url }
        ]
      }
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post.title, "description": post.pageDescription, "image": { src: urlFor(post.cardImageDesktop)?.url(), alt: `${post.title} image` }, "structuredData": structuredData }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="container pb-8 pt-16 lg:px-[263px]"> <h1 class="mb-6 text-4xl capitalize leading-10 lg:text-7xl lg:leading-[80px]"> ${post.title} </h1> <div class="flex space-x-10 font-medium capitalize leading-[35px]"> <p>${formatDate(post.updatedAt, dateFormat)}</p> <p>develop</p> </div> </header> <article> <section class="pb-16"> <div class="relative h-[453px] w-full"> ${renderComponent($$result2, "CustomImage", $$CustomImage, { "mobileImgUrl": urlFor(post.heroImageMobile).format("webp").url(), "desktopImgUrl": urlFor(post.heroImageDesktop)?.format("webp").url(), "imageSizes": [
    [375, 453],
    [1440, 453]
  ], "alt": `Hero Image`, "imgClassList": "absolute inset-0 block h-full w-full object-cover object-center z-0", "loading": "eager" })} </div> <div class="mt-6 flex items-center justify-center space-x-4"> <div class="flex h-[40px] w-[40px] items-center justify-center rounded-full"> <a> <img${addAttribute(urlFor(post.author.image).format("webp").url(), "src")}${addAttribute(`${post.author.name} image`, "alt")}${addAttribute(56, "height")}${addAttribute(56, "width")} class="rounded-full"> </a> </div> <div class="flex flex-col space-y-1"> <p class="font-bold capitalize leading-snug text-brand-gray-dark"> ${post.author.name} </p> <p class="text-sm font-semibold capitalize leading-snug text-brand-gray-dark"> ${post.author.name} </p> </div> </div> </section> <main class="container pb-16 lg:px-[263px]"> ${renderComponent($$result2, "PortableText", $$PortableText, { "portableText": post.body })} </main> <div class="container"> <span class="mb-8 mt-16 block h-px bg-[#9d9d9d] lg:px-[263px]"></span> </div> <section class="container pb-16"> <h2 class="text-center lg:-mb-8">Related articles</h2> ${renderComponent($$result2, "Carousel", Carousel, { "client:load": true, "projectSlides": relatedPostCarouselSlides, "paginationClass": ".swiper-custom-pagination-related-project-images", "client:component-hydration": "load", "client:component-path": "C:/Users/wgrif/Gryffen Studio/Templates/construx/src/components/Carousel", "client:component-export": "default" })} <div class="hidden space-x-8 lg:flex"> ${relatedPosts.map((project) => renderTemplate`${renderComponent($$result2, "BlogPostCard", BlogPostCard, { "post": project })}`)} </div> </section> </article> ` })}`;
}, "C:/Users/wgrif/Gryffen Studio/Templates/construx/src/pages/blog/[slug].astro", void 0);

const $$file = "C:/Users/wgrif/Gryffen Studio/Templates/construx/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
