import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent } from './astro/server_7OBbTJTL.mjs';
import 'kleur/colors';
import { $ as $$CustomImage } from './CustomImage_Cb-r3vcl.mjs';

const $$Astro = createAstro("https://construx-template.netlify.app");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const { h1Text, description, heroImages } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="relative flex h-[453px] w-full items-center justify-center"> ${heroImages ? renderTemplate`${renderComponent($$result, "CustomImage", $$CustomImage, { "mobileImgUrl": heroImages[0], "desktopImgUrl": heroImages[1], "imageSizes": [
    [375, 453],
    [1440, 453]
  ], "alt": `Hero Image`, "imgClassList": "absolute inset-0 block h-full w-full object-cover object-center z-0", "loading": "eager" })}` : null} <div class="container z-20 text-white"> <h1 class="text-center">${h1Text}</h1> <p class="mt-8 text-center text-2xl first-letter:capitalize lg:mx-56"> ${description} </p> </div> <div class="absolute left-0 top-0 z-10 h-full w-full bg-black bg-opacity-50 bg-blend-luminosity"></div> </header>`;
}, "C:/Users/wgrif/Gryffen Studio/Templates/construx/src/components/Hero.astro", void 0);

export { $$Hero as $ };
