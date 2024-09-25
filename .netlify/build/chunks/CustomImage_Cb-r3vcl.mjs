import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_7OBbTJTL.mjs';
import 'kleur/colors';
import 'clsx';
import { a as getImage } from './_astro_assets_B8fPYVwK.mjs';

const $$Astro = createAstro("https://construx-template.netlify.app");
const $$CustomImage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CustomImage;
  const {
    mobileImgUrl,
    desktopImgUrl,
    imageSizes,
    alt,
    loading = "lazy",
    decoding = "async",
    classList,
    imgClassList
  } = Astro2.props;
  async function generateImage(src, format, width, height) {
    return await getImage({
      src,
      format,
      width: width ?? 0,
      height: height ?? 0,
      quality: "high"
    });
  }
  const [mobileWidth, mobileHeight] = imageSizes[0];
  const [desktopWidth, desktopHeight] = imageSizes[1];
  const mobileImgAVIF = await generateImage(mobileImgUrl, "avif", mobileWidth, mobileHeight);
  const desktopImgAVIF = await generateImage(desktopImgUrl, "avif", desktopWidth, desktopHeight);
  const mobileImgWebP = await generateImage(mobileImgUrl, "webp", mobileWidth, mobileHeight);
  const desktopImgWebP = await generateImage(desktopImgUrl, "webp", desktopWidth, desktopHeight);
  return renderTemplate`${maybeRenderHead()}<picture${addAttribute(classList, "class")}> <!-- AVIF Sources --> <source type="image/avif" media="(max-width: 810px)"${addAttribute(mobileImgAVIF.src, "srcset")}${addAttribute(mobileImgAVIF.attributes.height, "height")}${addAttribute(mobileImgAVIF.attributes.width, "width")}> <source type="image/avif" media="(min-width: 811px)"${addAttribute(desktopImgAVIF.src, "srcset")}${addAttribute(desktopImgAVIF.attributes.height, "height")}${addAttribute(desktopImgAVIF.attributes.width, "width")}> <!-- WebP Sources --> <source type="image/webp" media="(max-width: 810px)"${addAttribute(mobileImgWebP.src, "srcset")}${addAttribute(mobileImgWebP.attributes.height, "height")}${addAttribute(mobileImgWebP.attributes.width, "width")}> <source type="image/webp" media="(min-width: 811px)"${addAttribute(desktopImgWebP.src, "srcset")}${addAttribute(desktopImgWebP.attributes.height, "height")}${addAttribute(desktopImgWebP.attributes.width, "width")}> <img${addAttribute(imgClassList, "class")}${addAttribute(typeof desktopImgUrl === "string" ? desktopImgUrl : desktopImgUrl.src, "src")}${addAttribute(alt, "alt")}${addAttribute(loading, "loading")}${addAttribute(decoding, "decoding")}> </picture>`;
}, "C:/Users/wgrif/Gryffen Studio/Templates/construx/src/components/CustomImage.astro", void 0);

export { $$CustomImage as $ };
