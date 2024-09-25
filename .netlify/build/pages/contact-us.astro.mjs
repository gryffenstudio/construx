import '../chunks/page-ssr_lEH_Rutg.mjs';
import { a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_7OBbTJTL.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DUctyxUi.mjs';
import { $ as $$Hero } from '../chunks/Hero_22znlrLk.mjs';
import { $ as $$ContactForm } from '../chunks/ContactForm_C5SCeg-E.mjs';
export { renderers } from '../renderers.mjs';

const $$ContactUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Landing - Construx", "description": "Build with Construx" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "h1Text": "contact us", "description": "contact us today to get in touch with our experienced team of contactors, painters, architects, and more!" })} ${maybeRenderHead()}<main> <section class="mb-8 bg-brand-green-primary py-8 lg:mb-16 lg:bg-white"> <div class="container"> ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} </div> </section> <section class="mb-8 mt-8 lg:hidden"> <div class="flex flex-col items-center justify-center bg-white"> <div class="flex flex-col"> <h3 class="mb-4 text-xl font-bold leading-[30px]">Contact Information</h3> <div class="mb-4 flex items-center space-x-6"> <a href="https://maps.google.com/?q=0000+Design+Drive+Denver+Colorado"${addAttribute(`flex items-center justify-center p-1.5 h-8 w-8 rounded-full bg-black hover:opacity-50`, "class")} aria-label="Construx Location Link"> <span class="icon-[ep--location] h-6 w-6 text-white"></span> </a> <div class="flex flex-col space-y-1"> <span class="font-bold leading-[30px] text-[#303136]">Cnstrx Office</span> <span class="text-sm text-[#303136]">000 Parkway Blg. 16</span> <span class="text-sm text-[#303136]">Colorado Springs, CO</span> </div> </div> <div class="mb-4 flex items-center space-x-6"> <a${addAttribute(`tel:000000000`, "href")}${addAttribute(`flex items-center justify-center h-8 w-8 p-1.5 rounded-full bg-black hover:opacity-50`, "class")} aria-label="Construx Location Link"> <span class="icon-[mage--phone] h-6 w-6 text-white"></span> </a> <div class="flex flex-col space-y-1"> <span class="font-bold leading-[30px] text-[#303136]">Call Us</span> <span class="text-sm text-[#303136]">000-000-0000</span> </div> </div> <div class="mb-4 flex items-center space-x-6"> <a href="mailto:mail@construx.construction"${addAttribute(`flex items-center justify-center p-1.5 h-8 w-8 rounded-full bg-black hover:opacity-50`, "class")} aria-label="Construx Location Link"> <span class="icon-[eva--email-outline] h-6 w-6 text-white"></span> </a> <div class="flex flex-col space-y-1"> <span class="font-bold leading-[30px] text-[#303136]">Mail Us</span> <span class="text-sm text-[#303136]">mail@construx.construction</span> </div> </div> <div class="mb-4 flex items-center space-x-6"> <a href="https://maps.google.com/?q=0000+Design+Drive+Denver+Colorado"${addAttribute(`flex items-center justify-center p-1.5 h-8 w-8 rounded-full bg-black hover:opacity-50`, "class")} aria-label="Construx Location Link"> <span class="icon-[ri--building-4-line] h-6 w-6 text-white"></span> </a> <div class="flex flex-col space-y-1"> <span class="font-bold leading-[30px] text-[#303136]">Opening Hours</span> <span class="text-sm text-[#303136]">Mon-Fri: 8AM - 5PM</span> <span class="text-sm text-[#303136]">Sat-Sun: CLOSED</span> </div> </div> </div> </div> </section> <section class="flex place-content-center"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d397584.8993801168!2d-105.08799396907122!3d38.87522107694246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8713412ea1e6d22b%3A0x418eeb92f5e86b13!2sColorado%20Springs%2C%20CO!5e0!3m2!1sen!2sus!4v1723328206761!5m2!1sen!2sus" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="h-[375px] w-full max-w-[1440px] lg:h-[415px]"></iframe> </section> </main> ` })}`;
}, "C:/Users/wgrif/Gryffen Studio/Templates/construx/src/pages/contact-us.astro", void 0);

const $$file = "C:/Users/wgrif/Gryffen Studio/Templates/construx/src/pages/contact-us.astro";
const $$url = "/contact-us";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$ContactUs,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
