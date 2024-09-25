import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, u as unescapeHTML, F as Fragment, m as maybeRenderHead, b as addAttribute, f as renderSlot, d as renderHead } from './astro/server_7OBbTJTL.mjs';
import 'kleur/colors';
import { escape } from 'html-escaper';
/* empty css                          */

const $$Astro$3 = createAstro("https://construx-template.netlify.app");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Icon;
  const { icon } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(icon)}` })}`;
}, "C:/Users/wgrif/Gryffen Studio/Templates/construx/src/components/Icon.astro", void 0);

const logo$2 = "<svg width=\"90\" height=\"66\" viewBox=\"0 0 90 66\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M0 14.5212V12.5285C0 12.3845 0.0737158 12.2466 0.191196 12.1634C20.0228 -1.87809 30.0071 -1.87099 42.1559 2.77792C45.3287 3.99201 48.6076 4.94381 51.9667 5.45083C68.9449 8.01358 77.9275 11.625 89.822 20.6088C89.933 20.6926 90 20.8252 90 20.9643V22.7434C76.3789 12.314 66.8786 9.45795 50.3717 7.5644C48.0566 7.29883 45.766 6.84626 43.5041 6.28585C27.3621 2.28649 16.0454 4.11241 0 14.5212Z\" fill=\"black\"/>\n<path d=\"M0 19.7091V17.7164C0 17.5724 0.0737158 17.4345 0.191196 17.3513C20.0228 3.30984 30.0071 3.31694 42.1559 7.96584C45.3287 9.17994 48.6076 10.1317 51.9667 10.6388C68.9449 13.2015 77.9275 16.8129 89.822 25.7967C89.933 25.8805 90 26.0131 90 26.1522V27.9314C76.3789 17.5019 66.8786 14.6459 50.3717 12.7523C48.0566 12.4868 45.766 12.0342 43.5041 11.4738C27.3621 7.47441 16.0454 9.30034 0 19.7091Z\" fill=\"black\"/>\n<path d=\"M0 25.1192V23.1265C0 22.9825 0.0737158 22.8446 0.191196 22.7614C20.0228 8.71994 30.0071 8.72703 42.1559 13.3759C45.3287 14.59 48.6076 15.5418 51.9667 16.0489C68.9449 18.6116 77.9275 22.223 89.822 31.2068C89.933 31.2906 90 31.4232 90 31.5623V33.3415C76.3789 22.912 66.8786 20.056 50.3717 18.1624C48.0566 17.8968 45.766 17.4443 43.5041 16.8839C27.3621 12.8845 16.0454 14.7104 0 25.1192Z\" fill=\"black\"/>\n<path d=\"M0 30.3758V28.383C0 28.2391 0.0737158 28.1011 0.191196 28.018C20.0228 13.9765 30.0071 13.9836 42.1559 18.6325C45.3287 19.8466 48.6076 20.7984 51.9667 21.3054C68.9449 23.8681 77.9275 27.4795 89.822 36.4633C89.933 36.5471 90 36.6797 90 36.8188V38.598C76.3789 28.1686 66.8786 25.3125 50.3717 23.419C48.0566 23.1534 45.766 22.7008 43.5041 22.1404C27.3621 18.141 16.0454 19.967 0 30.3758Z\" fill=\"black\"/>\n<path d=\"M0 35.7091V33.7163C0 33.5724 0.0737158 33.4345 0.191196 33.3513C20.0228 19.3098 30.0071 19.3169 42.1559 23.9658C45.3287 25.1799 48.6076 26.1317 51.9667 26.6387C68.9449 29.2014 77.9275 32.8128 89.822 41.7966C89.933 41.8805 90 42.013 90 42.1521V43.9313C76.3789 33.5019 66.8786 30.6458 50.3717 28.7523C48.0566 28.4867 45.766 28.0341 43.5041 27.4737C27.3621 23.4744 16.0454 25.3003 0 35.7091Z\" fill=\"black\"/>\n<path d=\"M0 41.1192V39.1265C0 38.9825 0.0737158 38.8446 0.191196 38.7614C20.0228 24.7199 30.0071 24.727 42.1559 29.3759C45.3287 30.59 48.6076 31.5418 51.9667 32.0489C68.9449 34.6116 77.9275 38.223 89.822 47.2068C89.933 47.2906 90 47.4232 90 47.5623V49.3415C76.3789 38.912 66.8786 36.056 50.3717 34.1624C48.0566 33.8968 45.766 33.4443 43.5041 32.8839C27.3621 28.8845 16.0454 30.7104 0 41.1192Z\" fill=\"black\"/>\n<path d=\"M0 46.3758V44.383C0 44.2391 0.0737158 44.1011 0.191196 44.018C20.0228 29.9765 30.0071 29.9836 42.1559 34.6325C45.3287 35.8466 48.6076 36.7984 51.9667 37.3054C68.9449 39.8681 77.9275 43.4795 89.822 52.4633C89.933 52.5471 90 52.6797 90 52.8188V54.598C76.3789 44.1686 66.8786 41.3125 50.3717 39.419C48.0566 39.1534 45.766 38.7008 43.5041 38.1404C27.3621 34.141 16.0454 35.967 0 46.3758Z\" fill=\"black\"/>\n<path d=\"M0 51.7091V49.7163C0 49.5724 0.0737158 49.4345 0.191196 49.3513C20.0228 35.3098 30.0071 35.3169 42.1559 39.9658C45.3287 41.1799 48.6076 42.1317 51.9667 42.6387C68.9449 45.2014 77.9275 48.8128 89.822 57.7966C89.933 57.8805 90 58.013 90 58.1521V59.9313C76.3789 49.5019 66.8786 46.6458 50.3717 44.7523C48.0566 44.4867 45.766 44.0341 43.5041 43.4737C27.3621 39.4744 16.0454 41.3003 0 51.7091Z\" fill=\"black\"/>\n<path d=\"M0 65.3415V55.1265C0 54.9825 0.0737158 54.8446 0.191196 54.7614C20.0228 40.7199 30.0071 40.727 42.1559 45.3759C45.3287 46.59 48.6076 47.5418 51.9667 48.0489C68.9449 50.6116 77.9275 54.223 89.822 63.2068C89.933 63.2906 90 63.4232 90 63.5623V65.3415H47.3333H0Z\" fill=\"black\"/>\n<rect y=\"13\" width=\"1\" height=\"52\" fill=\"black\"/>\n<rect x=\"89\" y=\"21\" width=\"1\" height=\"44\" fill=\"black\"/>\n</svg>\n";

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="z-30 py-2"> <span id="menu-span" class="ease--in-out fixed bottom-10 right-6 z-50 h-16 w-16 rounded-full bg-brand-green-secondary transition-all md:hidden"></span> <button id="menu-toggle" aria-label="Menu Button" class="fixed bottom-[60px] right-11 z-50 grid h-6 w-6 cursor-pointer place-content-center md:hidden"> <div id="menu-toggle-element" class="flex h-[3px] w-7 transform items-center justify-center bg-black transition-all duration-0 before:absolute before:h-[3px] before:w-7 before:-translate-y-2 before:transform before:bg-black before:transition-all before:duration-200 before:content-[''] after:absolute after:h-[3px] after:w-7 after:translate-y-2 after:transform after:bg-black after:transition-all after:duration-200 after:content-['']"></div> </button> <div class="container flex items-center justify-between"> <a href="/" class="flex h-[50px] w-[70px] flex-col items-center text-xs font-bold uppercase lg:h-[70px] lg:w-[90px]">${renderComponent($$result, "Icon", $$Icon, { "icon": logo$2 })}Construx</a> <div class="hidden items-center justify-center space-x-8 lg:flex"> <a href="/team" class="cursor-pointer capitalize leading-relaxed text-gray-800 hover:opacity-30">team</a> <a href="/services" class="cursor-pointer capitalize leading-relaxed text-gray-800 hover:opacity-30">services</a> <a href="/portfolio" class="cursor-pointer capitalize leading-relaxed text-gray-800 hover:opacity-30">portfolio</a> <a href="/blog" class="cursor-pointer capitalize leading-relaxed text-gray-800 hover:opacity-30">blog</a> <a href="/careers" class="cursor-pointer capitalize leading-relaxed text-gray-800 hover:opacity-30">careers</a> </div> <div class="flex items-center justify-center space-x-[18px]"> <div class="flex items-center space-x-2 lg:mr-8"> <button class="icon-[iconamoon--search-light] h-7 w-7" aria-label="Search Button"></button> <span class="hidden leading-relaxed tracking-wide lg:inline-block"> Search </span> </div> <a${addAttribute(`tel:0000000000`, "href")} aria-label="Call Button" class="flex h-8 w-8 items-center justify-center rounded-[5px] bg-brand-green-secondary hover:opacity-50 lg:h-[38px] lg:w-[132px] lg:rounded-xl lg:px-6 lg:py-3"> <span class="icon-[mage--phone] h-6 w-6 lg:hidden"></span> <span class="hidden font-medium tracking-tight lg:block">Contact Us</span> </a> </div> </div> </nav> `;
}, "C:/Users/wgrif/Gryffen Studio/Templates/construx/src/components/Navbar.astro", void 0);

const logo$1 = "<svg width=\"90\" height=\"66\" viewBox=\"0 0 90 66\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M0 14.9953V13.0026C0 12.8586 0.0737158 12.7207 0.191196 12.6375C20.0228 -1.40397 30.0071 -1.39687 42.1559 3.25204C45.3287 4.46613 48.6076 5.41793 51.9667 5.92495C68.9449 8.4877 77.9275 12.0991 89.822 21.0829C89.933 21.1667 90 21.2993 90 21.4384V23.2176C76.3789 12.7881 66.8786 9.93207 50.3717 8.03852C48.0566 7.77295 45.766 7.32039 43.5041 6.75997C27.3621 2.76061 16.0454 4.58653 0 14.9953Z\" fill=\"white\"/>\n<path d=\"M0 20.1833V18.1906C0 18.0466 0.0737158 17.9087 0.191196 17.8255C20.0228 3.78402 30.0071 3.79112 42.1559 8.44003C45.3287 9.65412 48.6076 10.6059 51.9667 11.1129C68.9449 13.6757 77.9275 17.2871 89.822 26.2709C89.933 26.3547 90 26.4873 90 26.6264V28.4056C76.3789 17.9761 66.8786 15.1201 50.3717 13.2265C48.0566 12.9609 45.766 12.5084 43.5041 11.948C27.3621 7.9486 16.0454 9.77452 0 20.1833Z\" fill=\"white\"/>\n<path d=\"M0 25.5935V23.6007C0 23.4568 0.0737158 23.3188 0.191196 23.2357C20.0228 9.19418 30.0071 9.20128 42.1559 13.8502C45.3287 15.0643 48.6076 16.0161 51.9667 16.5231C68.9449 19.0858 77.9275 22.6972 89.822 31.681C89.933 31.7649 90 31.8974 90 32.0365V33.8157C76.3789 23.3863 66.8786 20.5302 50.3717 18.6367C48.0566 18.3711 45.766 17.9185 43.5041 17.3581C27.3621 13.3588 16.0454 15.1847 0 25.5935Z\" fill=\"white\"/>\n<path d=\"M0 30.8498V28.8571C0 28.7131 0.0737158 28.5752 0.191196 28.492C20.0228 14.4505 30.0071 14.4576 42.1559 19.1065C45.3287 20.3206 48.6076 21.2724 51.9667 21.7794C68.9449 24.3422 77.9275 27.9536 89.822 36.9374C89.933 37.0212 90 37.1538 90 37.2929V39.0721C76.3789 28.6426 66.8786 25.7866 50.3717 23.893C48.0566 23.6274 45.766 23.1749 43.5041 22.6145C27.3621 18.6151 16.0454 20.441 0 30.8498Z\" fill=\"white\"/>\n<path d=\"M0 36.1833V34.1906C0 34.0466 0.0737158 33.9087 0.191196 33.8255C20.0228 19.784 30.0071 19.7911 42.1559 24.44C45.3287 25.6541 48.6076 26.6059 51.9667 27.1129C68.9449 29.6757 77.9275 33.2871 89.822 42.2709C89.933 42.3547 90 42.4873 90 42.6264V44.4056C76.3789 33.9761 66.8786 31.1201 50.3717 29.2265C48.0566 28.9609 45.766 28.5084 43.5041 27.948C27.3621 23.9486 16.0454 25.7745 0 36.1833Z\" fill=\"white\"/>\n<path d=\"M0 41.5935V39.6007C0 39.4568 0.0737158 39.3188 0.191196 39.2357C20.0228 25.1942 30.0071 25.2013 42.1559 29.8502C45.3287 31.0643 48.6076 32.0161 51.9667 32.5231C68.9449 35.0858 77.9275 38.6972 89.822 47.681C89.933 47.7649 90 47.8974 90 48.0365V49.8157C76.3789 39.3863 66.8786 36.5302 50.3717 34.6367C48.0566 34.3711 45.766 33.9185 43.5041 33.3581C27.3621 29.3588 16.0454 31.1847 0 41.5935Z\" fill=\"white\"/>\n<path d=\"M0 46.8498V44.8571C0 44.7131 0.0737158 44.5752 0.191196 44.492C20.0228 30.4505 30.0071 30.4576 42.1559 35.1065C45.3287 36.3206 48.6076 37.2724 51.9667 37.7794C68.9449 40.3422 77.9275 43.9536 89.822 52.9374C89.933 53.0212 90 53.1538 90 53.2929V55.0721C76.3789 44.6426 66.8786 41.7866 50.3717 39.893C48.0566 39.6274 45.766 39.1749 43.5041 38.6145C27.3621 34.6151 16.0454 36.441 0 46.8498Z\" fill=\"white\"/>\n<path d=\"M0 52.1833V50.1906C0 50.0466 0.0737158 49.9087 0.191196 49.8255C20.0228 35.784 30.0071 35.7911 42.1559 40.44C45.3287 41.6541 48.6076 42.6059 51.9667 43.1129C68.9449 45.6757 77.9275 49.2871 89.822 58.2709C89.933 58.3547 90 58.4873 90 58.6264V60.4056C76.3789 49.9761 66.8786 47.1201 50.3717 45.2265C48.0566 44.9609 45.766 44.5084 43.5041 43.948C27.3621 39.9486 16.0454 41.7745 0 52.1833Z\" fill=\"white\"/>\n<path d=\"M0 65.8157V55.6007C0 55.4568 0.0737158 55.3188 0.191196 55.2357C20.0228 41.1942 30.0071 41.2013 42.1559 45.8502C45.3287 47.0643 48.6076 48.0161 51.9667 48.5231C68.9449 51.0858 77.9275 54.6972 89.822 63.681C89.933 63.7649 90 63.8974 90 64.0365V65.8157H47.3333H0Z\" fill=\"white\"/>\n<rect y=\"13.4741\" width=\"1\" height=\"52\" fill=\"white\"/>\n<rect x=\"89\" y=\"21.4741\" width=\"1\" height=\"44\" fill=\"white\"/>\n</svg>\n";

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="mt-auto bg-brand-green-primary py-5 text-white lg:pt-16"> <div class="container"> <div class="flex flex-col space-y-6 lg:flex-row lg:justify-between lg:space-y-0"> <div class="lg:w-full"> <a href="/" class="mb-6 flex h-[50px] w-[70px] flex-col items-center text-xs font-bold uppercase lg:h-[70px] lg:w-[90px]">${renderComponent($$result, "Icon", $$Icon, { "icon": logo$1 })}Construx</a> <p class="leading-snug">
We help specialize in your perfect home blah blah blah blah blah
</p> </div> <div class="flex lg:w-1/2 lg:justify-between"> <div class="flex flex-col space-y-4"> <a href="/team" class="cursor-pointer uppercase leading-snug hover:opacity-30">team</a> <a href="/services" class="cursor-pointer uppercase leading-snug hover:opacity-30">services</a> <a href="/portfolio" class="cursor-pointer uppercase leading-snug hover:opacity-30">portfolio</a> </div> <div class="mx-auto flex flex-col space-y-4 lg:mx-0"> <a href="/blog" class="cursor-pointer uppercase leading-snug hover:opacity-30">blog</a> <a href="/contact-us" class="cursor-pointer uppercase leading-snug hover:opacity-30">contact</a> <a href="/careers" class="cursor-pointer uppercase leading-snug hover:opacity-30">careers</a> </div> </div> </div> <div class="mt-11 flex flex-col"> <span class="text-2xl font-bold leading-snug">Follow</span> <div class="mt-7 space-x-3"> <a href="https://www.facebook.com" class="icon-[ri--facebook-fill] h-[30px] w-[30px] cursor-pointer hover:opacity-30" aria-label="Facebook Link"></a> <a href="https://www.instagram.com" class="icon-[ri--instagram-line] h-[30px] w-[30px] cursor-pointer hover:opacity-30" aria-label="Instagram Link"></a> </div> </div> <div class="mt-8 flex flex-col lg:mt-11 lg:flex-row lg:justify-between"> <div class="order-2 mt-4 flex lg:order-none lg:mt-0 lg:w-[40%] lg:justify-between"> <span class="text-sm leading-relaxed">© 2024 Construx LLC</span> <a href="/terms-and-conditions" class="ml-4 text-sm capitalize leading-relaxed">Terms & Conditions</a> </div> <div class="order-1 flex lg:order-none lg:w-[40%] lg:justify-between"> <a href="/cookie-policy" class="text-sm capitalize leading-relaxed">cookie policy</a> <a href="/privacy-policy" class="ml-4 text-sm capitalize leading-relaxed">privacy policy</a> </div> </div> </div> </footer>`;
}, "C:/Users/wgrif/Gryffen Studio/Templates/construx/src/components/Footer.astro", void 0);

const title = "Landing - Construx";
const description = "Build with Construx";
const logo = {
	src: "https://construx-template.netlify.app/Logo_Black.svg",
	alt: "Construx Logo",
	width: "43",
	height: "51"
};
const image = {
	src: "https://construx-template.netlify.app/hero-home.png",
	alt: "Construx Home Page Image",
	width: "1200",
	height: "600"
};
const twitterHandle = null;
const organizationName = "Construx";
const url = "https://construx-template.netlify.app";
const websiteId = "https://construx-template.netlify.app/#website";
const organizationId = "https://construx-template.netlify.app/#organization";
const breadcrumbId = "https://construx-template.netlify.app/#breadcrumb";
const siteData = {
	title: title,
	description: description,
	logo: logo,
	image: image,
	twitterHandle: twitterHandle,
	organizationName: organizationName,
	url: url,
	websiteId: websiteId,
	organizationId: organizationId,
	breadcrumbId: breadcrumbId
};

function jsonLoadGenerator(dataArray) {
  const graph = dataArray.map(({ type, data }) => {
    if (type === "BreadcrumbList") {
      return {
        "@type": "BreadcrumbList",
        itemListElement: data.items.map(
          (item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url
          })
        )
      };
    } else {
      return {
        "@type": type,
        ...data
      };
    }
  });
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": graph
  });
}

const createMetaTag = (attributes) => {
  const attrs = Object.entries(attributes).map(([key, value]) => `${key}="${escape(value)}"`).join(" ");
  return `<meta ${attrs}>`;
};
const createLinkTag = (attributes) => {
  const attrs = Object.entries(attributes).map(([key, value]) => `${key}="${escape(value)}"`).join(" ");
  return `<link ${attrs}>`;
};
const createOpenGraphTag = (property, content) => {
  return createMetaTag({ property: `og:${property}`, content });
};
const buildOpenGraphMediaTags = (mediaType, media) => {
  let tags = "";
  media.forEach((medium) => {
    tags += createOpenGraphTag(mediaType, medium.url) + "\n";
    if (medium.alt) {
      tags += createOpenGraphTag(`${mediaType}:alt`, medium.alt) + "\n";
    }
    if (medium.secureUrl) {
      tags += createOpenGraphTag(`${mediaType}:secure_url`, medium.secureUrl) + "\n";
    }
    if (medium.type) {
      tags += createOpenGraphTag(`${mediaType}:type`, medium.type) + "\n";
    }
    if (medium.width) {
      tags += createOpenGraphTag(`${mediaType}:width`, medium.width.toString()) + "\n";
    }
    if (medium.height) {
      tags += createOpenGraphTag(`${mediaType}:height`, medium.height.toString()) + "\n";
    }
  });
  return tags;
};
const buildTags = (config) => {
  let tagsToRender = "";
  const addTag = (tag) => {
    tagsToRender += tag + "\n";
  };
  if (config.title) {
    addTag(`<title>${escape(config.title)}</title>`);
  }
  if (config.description) {
    addTag(createMetaTag({ name: "description", content: config.description }));
  }
  let robotsContent = [];
  if (typeof config.noindex !== "undefined") {
    robotsContent.push(config.noindex ? "noindex" : "index");
  }
  if (typeof config.nofollow !== "undefined") {
    robotsContent.push(config.nofollow ? "nofollow" : "follow");
  }
  if (robotsContent.length > 0) {
    addTag(createMetaTag({ name: "robots", content: robotsContent.join(",") }));
  }
  if (config.canonical) {
    addTag(createLinkTag({ rel: "canonical", href: config.canonical }));
  }
  if (config.openGraph) {
    if (config.openGraph.title) {
      addTag(createOpenGraphTag("title", config.openGraph.title));
    }
    if (config.openGraph.description) {
      addTag(createOpenGraphTag("description", config.openGraph.description));
    }
    if (config.openGraph.url) {
      addTag(createOpenGraphTag("url", config.openGraph.url));
    }
    if (config.openGraph.type) {
      addTag(createOpenGraphTag("type", config.openGraph.type));
    }
    if (config.openGraph.type) {
      addTag(createOpenGraphTag("site_name", config.openGraph.siteName));
    }
    if (config.openGraph.images && config.openGraph.images.length) {
      addTag(buildOpenGraphMediaTags("image", config.openGraph.images));
    }
  }
  if (config.twitter) {
    if (config.twitter.title) {
      addTag(createMetaTag({ name: "twitter:title", content: config.twitter.title }));
    }
    if (config.twitter.description) {
      addTag(
        createMetaTag({ name: "twitter:description", content: config.twitter.description })
      );
    }
    if (config.twitter.card) {
      addTag(createMetaTag({ name: "twitter:card", content: config.twitter.card }));
    }
    if (config.twitter.site) {
      addTag(createMetaTag({ name: "twitter:site", content: config.twitter.site }));
    }
    if (config.twitter.handle) {
      addTag(createMetaTag({ name: "twitter:creator", content: config.twitter.handle }));
    }
    if (config.twitter.image) {
      addTag(createMetaTag({ name: "twitter:image", content: config.twitter.image }));
    }
    if (config.twitter.imageAlt) {
      addTag(createMetaTag({ name: "twitter:image:alt", content: config.twitter.imageAlt }));
    }
    if (config.twitter.url) {
      addTag(createMetaTag({ property: "twitter:url", content: config.twitter.url }));
    }
    if (config.twitter.domain) {
      addTag(createMetaTag({ property: "twitter:domain", content: config.twitter.domain }));
    }
  }
  if (config.additionalMetaTags) {
    config.additionalMetaTags.forEach((metaTag) => {
      const attributes = { content: metaTag.content };
      if (metaTag.name) attributes.name = metaTag.name;
      if (metaTag.property) attributes.property = metaTag.property;
      addTag(createMetaTag(attributes));
    });
  }
  if (config.additionalLinkTags) {
    config.additionalLinkTags.forEach((linkTag) => {
      addTag(createLinkTag({ rel: linkTag.rel, href: linkTag.href }));
    });
  }
  return tagsToRender.trim();
};

function buildDefaultStructuredData(props) {
  return [
    {
      type: "WebSite",
      data: {
        "@id": siteData.websiteId,
        name: siteData.organizationName,
        url: siteData.url,
        publisher: {
          "@id": siteData.organizationId
        }
      }
    },
    {
      type: "WebPage",
      data: {
        "@id": props.url.toString(),
        name: props.title,
        isPartOf: {
          "@id": siteData.websiteId
        }
      }
    },
    {
      type: "Organization",
      data: {
        "@id": siteData.organizationId,
        name: siteData.organizationName,
        url: siteData.url,
        logo: siteData.image.src
      }
    }
  ];
}

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$2 = createAstro("https://construx-template.netlify.app");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SEO;
  const { title, description, url = Astro2.url, structuredData, image = {}, noRobots } = Astro2.props;
  const buildDefaultStructureDataInput = {
    title,
    url: Astro2.url
  };
  const jsonLD = jsonLoadGenerator(
    structuredData ?? buildDefaultStructuredData(buildDefaultStructureDataInput)
  );
  const seoConfig = {
    title,
    description,
    noindex: noRobots,
    nofollow: noRobots,
    canonical: url.toString(),
    openGraph: {
      title,
      description,
      url: url.toString(),
      siteName: siteData.organizationName,
      type: url.toString().includes("blog") ? "article" : "website",
      images: [
        {
          url: image.src ?? siteData.image.src,
          alt: image.alt ?? siteData.image.alt,
          secureUrl: image.src ?? siteData.image.src,
          type: "image/png",
          width: 1200,
          height: 630
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      image: image.src ?? siteData.image.src,
      imageAlt: image.alt ?? siteData.image.alt,
      url: url.toString(),
      // Ensure this is a string
      domain: "construx-template.netlify.app",
      ...{},
      ...{}
    },
    additionalMetaTags: [],
    additionalLinkTags: []
  };
  const metaTags = buildTags(seoConfig);
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<!-- Head Section --><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml"', '><meta name="generator"', "><!-- Title, Meta, and Twitter Tags -->", '<!-- JSON-LD --><script type="application/ld+json">', "<\/script>"])), addAttribute(siteData.logo.src, "href"), addAttribute(Astro2.generator, "content"), renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(metaTags)}` }), unescapeHTML(jsonLD));
}, "C:/Users/wgrif/Gryffen Studio/Templates/construx/src/components/SEO.astro", void 0);

const $$Astro$1 = createAstro("https://construx-template.netlify.app");
const $$VisualEditing = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$VisualEditing;
  const { enabled, zIndex } = Astro2.props;
  return renderTemplate`${enabled ? renderTemplate`${renderComponent($$result, "VisualEditingComponent", null, { "client:only": "react", "zIndex": zIndex, "client:component-hydration": "only", "client:component-path": "C:/Users/wgrif/Gryffen Studio/Templates/construx/node_modules/@sanity/astro/dist/visual-editing/visual-editing-component", "client:component-export": "VisualEditingComponent" })}` : null}`;
}, "C:/Users/wgrif/Gryffen Studio/Templates/construx/node_modules/@sanity/astro/dist/visual-editing/visual-editing.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://construx-template.netlify.app");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  let { title, description, noRobots, image, structuredData } = Astro2.props;
  const visualEditingEnabled = undefined                                                     === "true";
  return renderTemplate(_a || (_a = __template([`<html lang="en" class="font-inter"> <head><!-- Google Tag Manager --><!-- <script type='text/partytown' is:inline>
            (function (w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
                var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s),
                    dl = l != 'dataLayer' ? '&l=' + l : '';
                j.async = true;
                j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'GTM-5KPJMQKT');
        </script> --><!-- End Google Tag Manager --><meta charset="UTF-8"><meta name="description"`, '><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/ArchytechLogo.svg"><meta name="generator"', ">", "<title>", "</title>", `</head> <body class="flex min-h-dvh flex-col"> <!-- Google Tag Manager (noscript) --> <!-- <noscript
            ><iframe
                src='https://www.googletagmanager.com/ns.html?id=GTM-5KPJMQKT'
                height='0'
                width='0'
                style='display:none;visibility:hidden'></iframe></noscript
        > --> <!-- End Google Tag Manager (noscript) --> `, " ", " ", " ", " </body></html>"])), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), renderComponent($$result, "SEO", $$SEO, { "title": title, "description": description, "url": Astro2.url, "image": image, "structuredData": structuredData, "noRobots": noRobots ?? visualEditingEnabled }), title, renderHead(), renderComponent($$result, "Navbar", $$Navbar, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "VisualEditing", $$VisualEditing, { "enabled": visualEditingEnabled, "zIndex": 1e3 }));
}, "C:/Users/wgrif/Gryffen Studio/Templates/construx/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$Icon as a, siteData as s };
