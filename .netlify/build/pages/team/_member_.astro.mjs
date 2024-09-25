import '../../chunks/page-ssr_lEH_Rutg.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_7OBbTJTL.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_BARt5xy0.mjs';
import { $ as $$Layout } from '../../chunks/Layout_DUctyxUi.mjs';
import { $ as $$CustomImage } from '../../chunks/CustomImage_Cb-r3vcl.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://construx-template.netlify.app");
async function getStaticPaths() {
  const team = await getCollection("team");
  return team.map((member) => ({
    params: {
      member: member.data.slug
    },
    props: { member }
  }));
}
const $$member = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$member;
  const { member } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${member.data.name} - Construx`, "description": `${member.data.name} is the ${member.data.role} at Construx` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <section class="container flex flex-col space-y-8 py-16 lg:flex-row lg:justify-between lg:space-y-0"> ${renderComponent($$result2, "CustomImage", $$CustomImage, { "mobileImgUrl": member.data.profileImageMobile.image, "desktopImgUrl": member.data.profileImageDesktop.image, "imageSizes": [
    [327, 327],
    [500, 500]
  ], "alt": `${member.data.name} profile picture`, "classList": "place-self-center" })} <div class="flex flex-col space-y-8 lg:w-[40%] xl:w-1/2"> <div> <span class="font-bold leading-[45px] last:capitalize">${member.data.role}</span> <h2 class="-mt-2 text-left">${member.data.name}</h2> </div> <div> <p class="font-medium capitalize leading-[30px]">${member.data.bio}</p> </div> <a href="/team" class="h-fit w-fit"> <button class="mt-8 inline-flex h-12 w-fit items-center justify-center rounded-lg bg-brand-green-primary px-8 py-3 hover:opacity-50"> <span class="font-medium tracking-tighter text-white">Read about the team</span> </button> </a> </div> </section> </main> ` })}`;
}, "C:/Users/wgrif/Gryffen Studio/Templates/construx/src/pages/team/[member].astro", void 0);

const $$file = "C:/Users/wgrif/Gryffen Studio/Templates/construx/src/pages/team/[member].astro";
const $$url = "/team/[member]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$member,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
