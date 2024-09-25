import '../../chunks/page-ssr_lEH_Rutg.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_7OBbTJTL.mjs';
import 'kleur/colors';
import { g as getCollection, a as getEntries } from '../../chunks/_astro_content_BARt5xy0.mjs';
import { a as getImage } from '../../chunks/_astro_assets_B8fPYVwK.mjs';
import { $ as $$Layout } from '../../chunks/Layout_DUctyxUi.mjs';
import { C as Carousel } from '../../chunks/Carousel_B34kdjqf.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://construx-template.netlify.app");
async function getStaticPaths() {
  const projects = await getCollection("projects");
  return projects.map((project) => ({
    params: {
      project: project.data.slug
    },
    props: { project }
  }));
}
const $$project = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$project;
  const { project } = Astro2.props;
  const similarProjects = await getCollection("projects", ({ data }) => {
    return data.service === project.data.service && data.projectName !== project.data.projectName;
  });
  const filteredProjects = similarProjects.slice(0, 3);
  const membersOnProject = await getEntries(project.data.members);
  let projectCarouselSlides = [];
  let similarProjectCarouselSlides = [];
  for (let i = 0; i < project.data.projectImagesMobile.length; i++) {
    let carouselProjectSlide = {};
    let carouselMobileProjectImageObject = {};
    let carouselDesktopProjectImageObject = {};
    let projectMobileImage = await getImage({
      src: project.data.projectImagesMobile[i].image,
      height: 675,
      width: 375,
      format: "webp",
      quality: "high"
    });
    carouselMobileProjectImageObject.image = projectMobileImage;
    carouselMobileProjectImageObject.alt = project.data.projectImagesMobile[i].alt;
    let projectDesktopImage = await getImage({
      src: project.data.projectImagesDesktop[i].image,
      height: 675,
      width: 1440,
      format: "webp",
      quality: "high"
    });
    carouselDesktopProjectImageObject.image = projectDesktopImage;
    carouselDesktopProjectImageObject.alt = project.data.projectImagesDesktop[i].alt;
    carouselProjectSlide.mobileImage = carouselMobileProjectImageObject;
    carouselProjectSlide.desktopImage = carouselDesktopProjectImageObject;
    projectCarouselSlides.push(carouselProjectSlide);
  }
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
    similarProjectCarouselSlides.push(carouselProjectSlide);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${project.data.projectName}`, "description": `${project.data.projectName}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="relative -mt-8 pb-8"> ${renderComponent($$result2, "Carousel", Carousel, { "client:load": true, "projectImageSlides": projectCarouselSlides, "paginationClass": ".swiper-custom-pagination-project-images", "client:component-hydration": "load", "client:component-path": "C:/Users/wgrif/Gryffen Studio/Templates/construx/src/components/Carousel", "client:component-export": "default" })} </header> <main> <section class="bg-brand-gray py-8"> <div class="container"> <h1 class="mb-8 text-3xl">${project.data.projectName}</h1> <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between"> <div class="lg:w-1/2"> <h2 class="text-left">Project Summary</h2> <p class="my-4 text-xl capitalize leading-[30px]"> ${project.data.projectSummaryParagraph} </p> <ul class="px-4"> ${project.data.projectSummaryPoints.map((p) => {
    return renderTemplate`<li class="text-xl leading-[30px]">${p}</li>`;
  })} </ul> </div> <div class="my-8 *:mb-8 lg:my-0 lg:w-1/3"> <div> <h2 class="text-left">Client</h2> <p class="my-4 text-xl capitalize leading-[30px]"> ${project.data.clientName} </p> </div> <div> <h2 class="text-left">Members</h2> <ul class="list-none"> ${membersOnProject.map((m) => {
    return renderTemplate`<a${addAttribute(`/team/${m.data.slug}`, "href")} class="cursor-pointer text-xl leading-[30px] text-brand-green-primary hover:opacity-50"> ${m.data.name} </a>`;
  })} </ul> </div> <div> <h2 class="text-left">Completion</h2> <p class="my-4 text-xl capitalize leading-[30px]"> ${project.data.completionDate} </p> </div> <div> <h2 class="text-left">Location</h2> <p class="my-4 text-xl capitalize leading-[30px]"> ${project.data.location} </p> </div> <div> <h2 class="text-left">Industry</h2> <p class="my-4 text-xl capitalize leading-[30px]"> ${project.data.industry} </p> </div> <div> <h2 class="text-left">Service</h2> <p class="my-4 text-xl capitalize leading-[30px]"> ${project.data.service} </p> </div> </div> </div> </div> </section> <section class="container -mt-8 flex flex-col py-16"> <h2 class="text-left text-xl font-normal uppercase leading-[45px]">
More Projects Like This
</h2> <div class="flex flex-col lg:hidden"> ${renderComponent($$result2, "Carousel", Carousel, { "client:load": true, "projectSlides": similarProjectCarouselSlides, "paginationClass": ".swiper-custom-pagination-similar-projects", "client:component-hydration": "load", "client:component-path": "C:/Users/wgrif/Gryffen Studio/Templates/construx/src/components/Carousel", "client:component-export": "default" })} </div> <div class="mt-8 hidden space-x-8 lg:flex"> ${similarProjectCarouselSlides.map((project2, index) => {
    return renderTemplate`<a${addAttribute(`/portfolio/${project2.href}`, "href")}${addAttribute(`Featured Project ${index} Link`, "aria-label")}> <img${addAttribute(project2.desktopImage.image.src, "src")}${addAttribute(project2.desktopImage.alt, "alt")}${addAttribute(330, "height")}${addAttribute(327, "width")} class="h-auto w-full"> </a>`;
  })} </div> <a href="/portfolio" class="mx-auto mt-8 h-fit w-fit"> <button class="mt-8 inline-flex h-12 w-fit items-center justify-center rounded-lg bg-brand-green-primary px-8 py-3 hover:opacity-50"> <span class="font-medium uppercase tracking-tighter text-white">explore more projects</span> </button> </a> </section> </main> ` })}`;
}, "C:/Users/wgrif/Gryffen Studio/Templates/construx/src/pages/portfolio/[project].astro", void 0);

const $$file = "C:/Users/wgrif/Gryffen Studio/Templates/construx/src/pages/portfolio/[project].astro";
const $$url = "/portfolio/[project]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$project,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
