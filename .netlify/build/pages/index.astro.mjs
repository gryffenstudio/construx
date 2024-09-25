import '../chunks/page-ssr_DF53xfvS.mjs';
import { a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_7OBbTJTL.mjs';
import 'kleur/colors';
import { a as $$Icon, $ as $$Layout } from '../chunks/Layout_DUctyxUi.mjs';
import { h as heroImageSM, a as heroImage } from '../chunks/home-hero_CDszHqZD.mjs';
import { $ as $$Service, r as residentialHomeSvg } from '../chunks/residential-home-service_Dx0AGzZW.mjs';
import { a as getImage, $ as $$Image } from '../chunks/_astro_assets_B8fPYVwK.mjs';
import { g as getCollection } from '../chunks/_astro_content_DmWL67ys.mjs';
import { C as Carousel } from '../chunks/Carousel_B34kdjqf.mjs';
import { $ as $$ContactForm } from '../chunks/ContactForm_C5SCeg-E.mjs';
export { renderers } from '../renderers.mjs';

const aboutUsImg1 = new Proxy({"src":"/_astro/about-us-section-image-1.DrYuVF5I.png","width":490,"height":654,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/wgrif/Gryffen Studio/Templates/construx/src/assets/images/about-us-section-image-1.png";
							}
							
							return target[name];
						}
					});

const aboutUsImg2 = new Proxy({"src":"/_astro/about-us-section-image-2.CX2BRNrn.png","width":490,"height":654,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/wgrif/Gryffen Studio/Templates/construx/src/assets/images/about-us-section-image-2.png";
							}
							
							return target[name];
						}
					});

const mobileSvgOverlay = "<svg width=\"375\" height=\"346\" viewBox=\"0 0 375 346\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M398.662 74.4976L405.389 293.248L155.388 58.5593L398.662 74.4976Z\" fill=\"white\"/>\n<path d=\"M-23.6618 74.4976L-30.3891 293.248L219.612 58.5593L-23.6618 74.4976Z\" fill=\"white\"/>\n</svg>";

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const projects = await getCollection("projects", ({ data }) => {
    return data.featured;
  });
  const filteredProjects = projects.slice(0, 3);
  const reviews = await getCollection("reviews", ({ data }) => {
    return data.featured;
  });
  const filteredReviews = reviews.slice(0, 5);
  let featuredProjectCarouselSlides = [];
  let reviewCarouselSlides = [];
  for (let i = 0; i < filteredProjects.length; i++) {
    let carouselProjectSlide = {};
    let carouselMobileProjectImageObject = {};
    let carouselDesktopProjectImageObject = {};
    let featuredProjectMobileImage = await getImage({
      src: filteredProjects[i].data.cardImageMobile.image,
      height: 330,
      width: 327,
      format: "webp",
      quality: "high"
    });
    carouselMobileProjectImageObject.image = featuredProjectMobileImage;
    carouselMobileProjectImageObject.alt = filteredProjects[i].data.cardImageMobile.alt;
    let featuredProjectDesktopImage = await getImage({
      src: filteredProjects[i].data.cardImageDesktop.image,
      height: 330,
      width: 360,
      format: "webp",
      quality: "high"
    });
    carouselDesktopProjectImageObject.image = featuredProjectDesktopImage;
    carouselDesktopProjectImageObject.alt = filteredProjects[i].data.cardImageDesktop.alt;
    carouselProjectSlide.mobileImage = carouselMobileProjectImageObject;
    carouselProjectSlide.desktopImage = carouselDesktopProjectImageObject;
    carouselProjectSlide.href = `/portfolio/${filteredProjects[i].data.slug}`;
    featuredProjectCarouselSlides.push(carouselProjectSlide);
  }
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Landing - Construx", "description": "Build with Construx" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="relative mt-[6px]"> <!-- Mobile Hero Section ---> <div class="absolute -top-[85px] z-20 *:w-screen md:hidden"> ${renderComponent($$result2, "Icon", $$Icon, { "icon": mobileSvgOverlay })} </div> <div class="relative"> ${renderComponent($$result2, "Image", $$Image, { "class": "block w-screen md:hidden", "src": heroImageSM, "alt": "Home Page Mobile Hero Image", "width": "375", "height": "812", "loading": "eager" })} <h1 class="absolute bottom-5 z-20 pl-4 pr-20 text-start leading-[60px] tracking-wide text-white md:hidden">
building your future homes
</h1> </div> <div class="absolute left-0 top-0 z-10 h-full w-full bg-black bg-opacity-40 md:hidden"></div> <!-- Desktop Hero Section ---> <div class="relative hidden md:block"> <div class="absolute -left-36 -top-[76px] bottom-0 right-0 z-20 bg-[url('../assets/svg/desktop-home-hero-mask.svg')] bg-repeat"></div> ${renderComponent($$result2, "Image", $$Image, { "class": "hidden max-h-[450px] w-screen md:block", "src": heroImage, "alt": "Home Page Desktop Hero Image", "width": "1440", "height": "450", "loading": "eager" })} </div> <div class="container hidden items-center justify-between py-20 md:flex"> <h1 class="w-2/3 text-start leading-[60px] tracking-wide text-black">
building your future homes
</h1> <button aria-label="Arrow Down Button"> <span class="icon-[carbon--arrow-down] relative h-[50px] w-[50px]"></span> </button> </div> </header> <main> <section class="bg-brand-green-primary"> <div class="container flex flex-col items-center justify-between space-y-10 py-9 text-white md:flex-row md:flex-wrap md:space-y-0"> <div class="flex flex-col items-center justify-between space-y-10 font-bold md:w-[46%] md:flex-row md:space-y-0 lg:w-[42%] xl:w-[40%]"> <div class="flex flex-col items-center justify-center space-y-1"> <span id="client-count" class="text-4xl tracking-wide" data-target-value="1050">0</span> <span class="text-sm capitalize">happy clients</span> </div> <div class="flex flex-col items-center justify-center space-y-1 text-2xl"> <span id="yoe-count" class="text-4xl tracking-wide" data-target-value="25">0</span> <span class="text-sm font-bold capitalize">years of experience</span> </div> </div> <div class="flex flex-col items-center justify-between space-y-10 font-bold md:w-[45%] md:flex-row md:space-y-0 lg:w-[42%] xl:w-[40%]"> <div class="flex flex-col items-center justify-center space-y-1 text-2xl"> <span id="projects-count" class="text-4xl tracking-wide" data-target-value="350">0</span> <span class="text-sm capitalize">projects completed</span> </div> <div class="flex flex-col items-center justify-center space-y-1 text-2xl"> <span id="awards-count" class="text-4xl tracking-wide" data-target-value="15">0</span> <span class="text-sm capitalize">global awards</span> </div> </div> </div> </section> <section id="services" class="flex flex-col bg-brand-gray py-16"> <div class="container"> <div class="flex items-center justify-center lg:justify-between"> <h2 class="text-brand-green-primary">Services We Offer</h2> <a class="hidden items-center justify-center font-bold leading-loose lg:flex" href="/services">Explore Our Services<span class="icon-[carbon--arrow-right] ml-2 h-5 w-5 place-self-center text-black"></span> </a> </div> <div class="flex w-full flex-col items-center justify-between space-y-8 py-8 lg:flex-row lg:space-x-4 lg:space-y-0"> ${renderComponent($$result2, "Service", $$Service, { "icon": residentialHomeSvg, "service": "build your home", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" })} ${renderComponent($$result2, "Service", $$Service, { "icon": residentialHomeSvg, "service": "build your home", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" })} ${renderComponent($$result2, "Service", $$Service, { "icon": residentialHomeSvg, "service": "build your home", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" })} </div> <a class="flex items-center justify-end font-bold leading-loose lg:hidden" href="/services">Explore Our Services<span class="icon-[carbon--arrow-right] ml-2 h-5 w-5 place-self-center text-black"></span> </a> </div> </section> <section class="container py-16"> <div class="flex items-center justify-center lg:justify-between"> <h2 class="text-brand-green-primary">Featured Projects</h2> <a class="hidden items-center justify-center font-bold leading-loose lg:flex" href="/portfolio">Browse Our Portfolio<span class="icon-[carbon--arrow-right] ml-2 h-5 w-5 place-self-center text-black"></span> </a> </div> <div class="mt-0 flex flex-col lg:hidden"> ${renderComponent($$result2, "Carousel", Carousel, { "client:load": true, "projectSlides": featuredProjectCarouselSlides, "paginationClass": ".swiper-custom-pagination-projects", "client:component-hydration": "load", "client:component-path": "C:/Users/wgrif/Gryffen Studio/Templates/construx/src/components/Carousel", "client:component-export": "default" })} <a class="mt-8 flex items-center justify-center place-self-end font-bold leading-loose lg:hidden" href="/portfolio">Browse Our Portfolio<span class="icon-[carbon--arrow-right] ml-2 h-5 w-5 place-self-center text-black"></span> </a> </div> <div class="mt-8 hidden space-x-8 lg:flex"> ${featuredProjectCarouselSlides.map((project, index) => {
    return renderTemplate`<a${addAttribute(`/portfolio/${project.href}`, "href")}${addAttribute(`Featured Project ${index} Link`, "aria-label")}> <img${addAttribute(project.desktopImage.image.src, "src")}${addAttribute(project.desktopImage.alt, "alt")}${addAttribute(330, "height")}${addAttribute(327, "width")} class="h-auto w-full"> </a>`;
  })} </div> </section> <section class="bg-brand-gray py-16"> <div class="container"> <h2 class="text-brand-green-primary lg:text-start">Reviews From Clients</h2> <div class="mt-8"> ${renderComponent($$result2, "Carousel", Carousel, { "client:load": true, "reviewSlides": reviewCarouselSlides, "paginationClass": ".swiper-custom-pagination-reviews", "client:component-hydration": "load", "client:component-path": "C:/Users/wgrif/Gryffen Studio/Templates/construx/src/components/Carousel", "client:component-export": "default" })} </div> </div> </section> <section class="container py-16"> <h2 class="text-brand-green-primary lg:ml-[274px]">About Us</h2> <div class="mt-4 flex md:mt-10 md:flex-col xl:flex-row"> <div class="hidden justify-center space-x-8 md:flex xl:w-2/3 xl:justify-normal"> ${renderComponent($$result2, "Image", $$Image, { "class": "relative top-[-35px]", "src": aboutUsImg1, "alt": "About Us Section Image 1", "height": 327, "width": 245 })} ${renderComponent($$result2, "Image", $$Image, { "src": aboutUsImg2, "alt": "About Us Section Image 2", "height": 327, "width": 245 })} </div> <div class="xl:w-1/2"> <h3 class="text-start text-3xl font-bold capitalize leading-loose">
we are here for you
</h3> <p class="text-start text-xl capitalize leading-[30px] text-zinc-800">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco la. enim ad minim veniam, quis nostrud
                        exercitation ullamco la.
</p> <a href="/team"> <button class="primary-btn mt-10"> <div class="font-medium leading-normal tracking-tight">
Learn more about the team
</div> </button> </a> </div> </div> </section> <section class="mb-8 bg-brand-green-primary py-8 lg:mb-16 lg:bg-white"> <div class="container"> ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} </div> </section> <section class="mb-8 mt-8 lg:hidden"> <div class="flex flex-col items-center justify-center bg-white"> <div class="flex flex-col"> <h3 class="mb-4 text-xl font-bold leading-[30px]">Contact Information</h3> <div class="mb-4 flex items-center space-x-6"> <a href="https://maps.google.com/?q=0000+Design+Drive+Denver+Colorado"${addAttribute(`flex items-center justify-center p-1.5 h-8 w-8 rounded-full bg-black hover:opacity-50`, "class")} aria-label="Construx Location Link"> <span class="icon-[ep--location] h-6 w-6 text-white"></span> </a> <div class="flex flex-col space-y-1"> <span class="font-bold leading-[30px] text-[#303136]">Cnstrx Office</span> <span class="text-sm text-[#303136]">000 Parkway Blg. 16</span> <span class="text-sm text-[#303136]">Colorado Springs, CO</span> </div> </div> <div class="mb-4 flex items-center space-x-6"> <a${addAttribute(`tel:000000000`, "href")}${addAttribute(`flex items-center justify-center h-8 w-8 p-1.5 rounded-full bg-black hover:opacity-50`, "class")} aria-label="Construx Location Link"> <span class="icon-[mage--phone] h-6 w-6 text-white"></span> </a> <div class="flex flex-col space-y-1"> <span class="font-bold leading-[30px] text-[#303136]">Call Us</span> <span class="text-sm text-[#303136]">000-000-0000</span> </div> </div> <div class="mb-4 flex items-center space-x-6"> <a href="mailto:mail@construx.construction"${addAttribute(`flex items-center justify-center p-1.5 h-8 w-8 rounded-full bg-black hover:opacity-50`, "class")} aria-label="Construx Location Link"> <span class="icon-[eva--email-outline] h-6 w-6 text-white"></span> </a> <div class="flex flex-col space-y-1"> <span class="font-bold leading-[30px] text-[#303136]">Mail Us</span> <span class="text-sm text-[#303136]">mail@construx.construction</span> </div> </div> <div class="mb-4 flex items-center space-x-6"> <a href="https://maps.google.com/?q=0000+Design+Drive+Denver+Colorado"${addAttribute(`flex items-center justify-center p-1.5 h-8 w-8 rounded-full bg-black hover:opacity-50`, "class")} aria-label="Construx Location Link"> <span class="icon-[ri--building-4-line] h-6 w-6 text-white"></span> </a> <div class="flex flex-col space-y-1"> <span class="font-bold leading-[30px] text-[#303136]">Opening Hours</span> <span class="text-sm text-[#303136]">Mon-Fri: 8AM - 5PM</span> <span class="text-sm text-[#303136]">Sat-Sun: CLOSED</span> </div> </div> </div> </div> </section> </main>   ` })}`;
}, "C:/Users/wgrif/Gryffen Studio/Templates/construx/src/pages/index.astro", void 0);

const $$file = "C:/Users/wgrif/Gryffen Studio/Templates/construx/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
