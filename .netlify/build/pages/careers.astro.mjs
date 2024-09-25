import '../chunks/page-ssr_DF53xfvS.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent } from '../chunks/astro/server_7OBbTJTL.mjs';
import 'kleur/colors';
import { $ as $$Hero } from '../chunks/Hero_22znlrLk.mjs';
import { a as $$Icon, $ as $$Layout } from '../chunks/Layout_DUctyxUi.mjs';
import { h as heroImageSM, a as heroImage } from '../chunks/home-hero_CDszHqZD.mjs';
import { C as Carousel } from '../chunks/Carousel_B34kdjqf.mjs';
import { a as getImage } from '../chunks/_astro_assets_B8fPYVwK.mjs';
import { g as getCollection } from '../chunks/_astro_content_DmWL67ys.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://construx-template.netlify.app");
const $$CareerBenefits = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CareerBenefits;
  const { title, description, icon } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <div class="flex space-x-2"> ${renderComponent($$result, "Icon", $$Icon, { "icon": icon })} <h3 class="text-xl font-bold leading-[45px]">${title}</h3> </div> <p class="leading-[25px]">${description}</p> </div>`;
}, "C:/Users/wgrif/Gryffen Studio/Templates/construx/src/components/CareerBenefits.astro", void 0);

const careersBenefits = "<svg width=\"32\" height=\"33\" viewBox=\"0 0 32 33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n<rect y=\"0.358887\" width=\"32\" height=\"32\" fill=\"url(#pattern0_222_668)\"/>\n<defs>\n<pattern id=\"pattern0_222_668\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\">\n<use xlink:href=\"#image0_222_668\" transform=\"scale(0.0138889)\"/>\n</pattern>\n<image id=\"image0_222_668\" width=\"72\" height=\"72\" xlink:href=\"data:image/png;base64,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\"/>\n</defs>\n</svg>\n";

const $$Careers = createComponent(async ($$result, $$props, $$slots) => {
  const reviews = await getCollection("reviews", ({ data }) => {
    return data.featured;
  });
  const positions = await getCollection("positions");
  const filteredReviews = reviews.slice(0, 5);
  let reviewCarouselSlides = [];
  for (let i = 0; i < filteredReviews.length; i++) {
    let carouselReviewSlide = {};
    let carouselReviewImageObject = {};
    let reviewMobileImage = await getImage({
      src: filteredReviews[i].data.reviewerImage.image,
      height: 125,
      width: 130,
      format: "webp",
      quality: "high"
    });
    carouselReviewImageObject.image = reviewMobileImage;
    carouselReviewImageObject.alt = filteredReviews[0].data.reviewerImage.alt;
    carouselReviewSlide.reviewerName = filteredReviews[i].data.reviewerName;
    carouselReviewSlide.reviewerLocation = filteredReviews[i].data.reviewerLocation;
    carouselReviewSlide.reviewerImage = carouselReviewImageObject;
    carouselReviewSlide.review = filteredReviews[i].data.review;
    reviewCarouselSlides.push(carouselReviewSlide);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Careers - Construx", "description": "Join Construx" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "h1Text": "join us", "description": "Explore our career opportunities", "heroImages": [heroImageSM, heroImage] })} ${maybeRenderHead()}<main> <section class="container py-16"> <h2 class="mb-8">why you should join us</h2> <div class="grid place-items-center gap-x-10 gap-y-10 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3"> ${[...Array(6)].map(() => renderTemplate`${renderComponent($$result2, "CareerBenefits", $$CareerBenefits, { "title": "Work from Home", "description": "Value the ability to work anywhere? We too. Once a week, you choose where you from.", "icon": careersBenefits })}`)} </div> </section> <section class="bg-brand-gray py-16"> <div class="container"> <h2 class="text-brand-green-primary lg:text-start">Reviews From Our Employees</h2> <div class="mt-8"> ${renderComponent($$result2, "Carousel", Carousel, { "client:load": true, "reviewSlides": reviewCarouselSlides, "paginationClass": ".swiper-custom-pagination-reviews", "client:component-hydration": "load", "client:component-path": "C:/Users/wgrif/Gryffen Studio/Templates/construx/src/components/Carousel", "client:component-export": "default" })} </div> </div> </section> <section class="container py-16"> <h2 class="">our open positions</h2> <p class="mb-8 text-center text-xl leading-[30px]">
It doesn’t matter where you’re coming from, Lorem ipsum dolor.
</p> <div class="mx-auto mb-8 max-w-[725px] rounded-md border border-[#f3f5f4] px-3 py-5 shadow"> ${positions.map((position, index) => renderTemplate`<div> <div class="flex flex-col space-y-2 px-7 md:flex-row md:items-center md:justify-between md:space-y-0"> <div> <h3 class="-mb-2 text-xl font-semibold capitalize leading-loose"> ${position.data.positionName} </h3> <p class="font-semibold capitalize leading-loose text-brand-gray-light"> ${position.data.positionLocation} </p> </div> <a href="#"> <button class="inline-flex h-10 w-[100px] items-center justify-center rounded-lg bg-brand-green-secondary font-medium tracking-tight">
Apply
<span class="icon-[carbon--arrow-right] ml-2 h-5 w-5 place-self-center text-black"></span> </button> </a> </div> ${index !== positions.length - 1 && renderTemplate`<span class="mb-2 mt-2 block h-px w-full bg-[#9d9d9d] md:mt-4"></span>`} </div>`)} </div> <div class="flex items-center justify-center space-x-4"> <h3 class="text-xl font-bold leading-loose">Nothing for you here?</h3> <a href="#" class="mb-1 inline-flex cursor-pointer items-center justify-center font-bold text-brand-green-primary hover:opacity-50"> <span class="relative">
Self-application
<span class="icon-[carbon--arrow-right] mb-1 ml-1 inline-flex h-5 w-5 align-middle font-bold text-brand-green-primary"></span> <span class="absolute bottom-1.5 left-0 -mb-2 h-px w-[105%] transform bg-brand-green-primary"></span> </span> </a> </div> </section> </main> ` })}`;
}, "C:/Users/wgrif/Gryffen Studio/Templates/construx/src/pages/careers.astro", void 0);

const $$file = "C:/Users/wgrif/Gryffen Studio/Templates/construx/src/pages/careers.astro";
const $$url = "/careers";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Careers,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
