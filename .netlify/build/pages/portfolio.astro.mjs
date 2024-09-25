import '../chunks/page-ssr_lEH_Rutg.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderComponent } from '../chunks/astro/server_7OBbTJTL.mjs';
import 'kleur/colors';
import { $ as $$Hero } from '../chunks/Hero_22znlrLk.mjs';
import { h as heroImageSM, a as heroImage } from '../chunks/home-hero_CDszHqZD.mjs';
import { $ as $$Layout } from '../chunks/Layout_DUctyxUi.mjs';
import { d as defineCollection, r as reference, g as getCollection } from '../chunks/_astro_content_B4nPlBal.mjs';
import { $ as $$CustomImage } from '../chunks/CustomImage_Cb-r3vcl.mjs';
import * as z from 'zod';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://construx-template.netlify.app");
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { projectData } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(projectData.projectName, "id")}${addAttribute(`/portfolio/${projectData.slug}`, "href")}${addAttribute(`h-fit w-fit transform transition-all duration-500 ease-in-out project-card ${projectData.service} ${projectData.industry}`, "class")}> ${renderComponent($$result, "CustomImage", $$CustomImage, { "mobileImgUrl": projectData.cardImageMobile.image, "desktopImgUrl": projectData.cardImageDesktop.image, "imageSizes": [
    [327, 327],
    [375, 375]
  ], "alt": projectData.cardImageMobile.alt, "imgClassList": "" })} </a>`;
}, "C:/Users/wgrif/Gryffen Studio/Templates/construx/src/components/ProjectCard.astro", void 0);

var ServiceType = /* @__PURE__ */ ((ServiceType2) => {
  ServiceType2["Residential"] = "residential";
  ServiceType2["Commercial"] = "commercial";
  ServiceType2["Industrial"] = "industrial";
  ServiceType2["Infrastructure"] = "infrastructure";
  return ServiceType2;
})(ServiceType || {});
var IndustryType = /* @__PURE__ */ ((IndustryType2) => {
  IndustryType2["Health"] = "health";
  IndustryType2["Education"] = "education";
  IndustryType2["RealEstate"] = "real estate";
  return IndustryType2;
})(IndustryType || {});
defineCollection({
  type: "data",
  schema: ({ image }) => z.object({
    projectName: z.string().max(100, {
      message: "Project name is too long!"
    }),
    projectSummaryParagraph: z.string(),
    projectSummaryPoints: z.array(z.string()),
    clientName: z.string(),
    slug: z.string(),
    service: z.nativeEnum(ServiceType),
    industry: z.nativeEnum(IndustryType),
    location: z.string(),
    completionDate: z.string().date().nullish().refine((date) => date ? new Date(date) <= /* @__PURE__ */ new Date() : null, {
      message: "Date must be before current date"
    }),
    members: z.array(reference("team")),
    featured: z.boolean(),
    cardImageMobile: z.object({
      image: image(),
      alt: z.string()
    }),
    cardImageDesktop: z.object({
      image: image(),
      alt: z.string()
    }),
    projectImagesMobile: z.array(
      z.object({
        image: image(),
        alt: z.string()
      })
    ),
    projectImagesDesktop: z.array(
      z.object({
        image: image(),
        alt: z.string()
      })
    )
  })
});
defineCollection({
  type: "data",
  schema: ({ image }) => z.object({
    reviewerName: z.string().max(100, {
      message: "Project name is too long!"
    }),
    featured: z.boolean(),
    reviewerLocation: z.string(),
    review: z.string(),
    reviewerImage: z.object({
      image: image(),
      alt: z.string()
    })
  })
});
defineCollection({
  type: "data",
  schema: ({ image }) => z.object({
    name: z.string().max(100, {
      message: "Team member name is too long!"
    }),
    role: z.string(),
    slug: z.string(),
    location: z.string(),
    phoneNumber: z.string(),
    email: z.string().email(),
    bio: z.string(),
    cardImageMobile: z.object({
      image: image(),
      alt: z.string()
    }),
    cardImageDesktop: z.object({
      image: image(),
      alt: z.string()
    }),
    profileImageMobile: z.object({
      image: image(),
      alt: z.string()
    }),
    profileImageDesktop: z.object({
      image: image(),
      alt: z.string()
    })
  })
});
defineCollection({
  type: "data",
  schema: () => z.object({
    positionName: z.string(),
    positionLocation: z.string()
  })
});

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const projects = await getCollection("projects");
  const projectServices = Object.values(ServiceType);
  const projectIndustries = Object.values(IndustryType);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Services - Construx", "description": "Build with Construx" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "h1Text": "our portfolio", "description": "Explore our successful projects", "heroImages": [heroImageSM, heroImage] })} ${maybeRenderHead()}<main> <section class="container flex flex-col items-center space-y-8 pb-8 pt-16 lg:flex-row lg:justify-between lg:space-y-0"> <div class="relative w-full max-w-[327px] lg:w-[28%] lg:max-w-[28%]"> <select id="serviceSelect" class="portfolio-dropdown peer"> <option value="" selected>Service:</option> ${projectServices.map((service) => {
    return renderTemplate`<option class="capitalize"${addAttribute(service, "value")}> ${service} </option>`;
  })} </select> <span class="arrow-icon icon-[simple-line-icons--arrow-down] pointer-events-none absolute right-[18px] top-[14.5px] z-10 h-5 w-5 transform duration-300 peer-focus:rotate-180 lg:right-[18px] lg:top-[14.5px]"></span> </div> <div class="relative w-full max-w-[327px] lg:w-[28%] lg:max-w-[28%]"> <select id="industrySelect" class="portfolio-dropdown peer"> <option value="" selected>Industry:</option> ${projectIndustries.map((industry) => {
    return renderTemplate`<option class="capitalize"${addAttribute(industry, "value")}> ${industry} </option>`;
  })} </select> <span class="arrow-icon icon-[simple-line-icons--arrow-down] pointer-events-none absolute right-[18px] top-[14.5px] z-10 h-5 w-5 transform duration-300 peer-focus:rotate-180 lg:right-[18px] lg:top-[14.5px]"></span> </div> <input type="text" id="findByNameInput" placeholder="Find by name" class="w-full max-w-[327px] appearance-none rounded-none border-b border-black pb-4 text-xl placeholder:text-xl placeholder:text-black lg:w-[28%] lg:max-w-[28%]"> </section> <section class="container pb-16"> <div class="grid place-items-center gap-y-7 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-14"> ${projects.map((project) => {
    return renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "projectData": project.data })}`;
  })} </div> </section> </main>  ` })}`;
}, "C:/Users/wgrif/Gryffen Studio/Templates/construx/src/pages/portfolio/index.astro", void 0);

const $$file = "C:/Users/wgrif/Gryffen Studio/Templates/construx/src/pages/portfolio/index.astro";
const $$url = "/portfolio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
