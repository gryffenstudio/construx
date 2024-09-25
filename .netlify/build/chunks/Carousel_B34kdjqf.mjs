import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { Swiper, SwiperSlide } from 'swiper/react';
/* empty css                          */
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { u as useMediaQuery } from './reactHooks_C-SsB55_.mjs';

function Carousel(props) {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const pagination = {
    clickable: true,
    el: props.paginationClass,
    type: "bullets"
  };
  const swiperProps = {
    spaceBetween: 20,
    slidesPerView: 1,
    pagination,
    modules: [Navigation, Pagination, Autoplay, EffectFade],
    breakpoints: {
      1024: {
        navigation: {
          enabled: true,
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev"
        },
        slidesPerView: props.projectImageSlides ? 1 : 1.1,
        centeredSlides: true
      }
    }
  };
  if (props.projectImageSlides) {
    swiperProps.autoplay = {
      delay: 4e3,
      disableOnInteraction: true
    };
    swiperProps.speed = 1e3;
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "relative mt-8", children: [
      props.reviewSlides && /* @__PURE__ */ jsxs("div", { className: "absolute -top-[73px] right-0 flex justify-end space-x-10", children: [
        /* @__PURE__ */ jsx("div", { className: "relative hidden items-center justify-center lg:flex", children: /* @__PURE__ */ jsx(
          "button",
          {
            "aria-label": "Carousel Prev Button",
            className: "image-swiper-button-prev peer disabled:opacity-20 lg:flex",
            children: /* @__PURE__ */ jsx("span", { className: "icon-[carbon--arrow-left] h-[30px] w-[30px] text-black peer-disabled:opacity-20" })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "relative hidden items-center justify-center lg:flex", children: /* @__PURE__ */ jsx(
          "button",
          {
            "aria-label": "Carousel Next Button",
            className: "image-swiper-button-next peer disabled:opacity-20 lg:flex",
            children: /* @__PURE__ */ jsx("span", { className: "icon-[carbon--arrow-right] h-[30px] w-[30px] text-black peer-disabled:opacity-20" })
          }
        ) })
      ] }),
      props.projectImageSlides && /* @__PURE__ */ jsxs("div", { className: "absolute top-[45%] z-20 w-full", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-20 top-0 hidden lg:flex", children: /* @__PURE__ */ jsx(
          "button",
          {
            "aria-label": "Carousel Prev Button",
            className: "image-swiper-button-prev peer disabled:opacity-20 lg:block",
            children: /* @__PURE__ */ jsx("span", { className: "icon-[carbon--arrow-left] h-[60px] w-[60px] text-white peer-disabled:opacity-20" })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-20 top-0 hidden lg:flex", children: /* @__PURE__ */ jsx(
          "button",
          {
            "aria-label": "Carousel Next Button",
            className: "image-swiper-button-next peer disabled:opacity-20 lg:block",
            children: /* @__PURE__ */ jsx("span", { className: "icon-[carbon--arrow-right] h-[60px] w-[60px] text-white peer-disabled:opacity-20" })
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs(Swiper, { ...swiperProps, children: [
        isMobile && props.projectSlides && props.projectSlides.map((project, index) => /* @__PURE__ */ jsx(
          SwiperSlide,
          {
            className: "flex h-fit w-full items-center justify-center",
            children: /* @__PURE__ */ jsx(
              "a",
              {
                href: `${project.href}`,
                "aria-label": `Featured Project ${index} Link`,
                children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: project.mobileImage.image.src,
                    alt: project.mobileImage.alt,
                    height: 330,
                    width: 327,
                    className: "h-auto w-full rounded-lg"
                  }
                )
              }
            )
          },
          `featuredProject-mobile-${index}`
        )),
        isMobile && props.projectImageSlides && props.projectImageSlides.map((project, index) => /* @__PURE__ */ jsx(
          SwiperSlide,
          {
            className: "flex h-fit w-full items-center justify-center",
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: project.mobileImage.image.src,
                alt: project.mobileImage.alt,
                height: 675,
                width: 375,
                className: "h-screen max-h-[675px] w-full"
              }
            )
          },
          `project-image-mobile-${index}`
        )),
        isMobile && props.reviewSlides && props.reviewSlides.map((review, index) => /* @__PURE__ */ jsx(
          SwiperSlide,
          {
            className: "flex h-fit w-full items-center justify-center rounded-xl bg-white",
            children: /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col items-center justify-center space-y-7 rounded-xl px-4 py-8", children: [
              /* @__PURE__ */ jsx("span", { className: "icon-[raphael--quote] h-[45px] w-[45px] text-brand-green-primary" }),
              /* @__PURE__ */ jsx("p", { className: "mt-5 text-center font-bold leading-[30px]", children: review.review }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center space-x-4", children: [
                /* @__PURE__ */ jsx("div", { className: "flex h-[53px] w-[56px] items-center justify-center rounded-full", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: review.reviewerImage.image.src,
                    alt: review.reviewerImage.alt,
                    height: 56,
                    width: 56,
                    className: "rounded-full"
                  }
                ) }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-2", children: [
                  /* @__PURE__ */ jsx("p", { className: "font-bold capitalize leading-tight text-brand-gray-dark", children: review.reviewerName }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold capitalize leading-tight text-brand-gray-dark", children: review.reviewerLocation })
                ] })
              ] })
            ] })
          },
          `review-mobile-${index}`
        )),
        !isMobile && props.projectImageSlides && props.projectImageSlides.map((project, index) => /* @__PURE__ */ jsx(
          SwiperSlide,
          {
            className: "flex h-full w-full items-center justify-center",
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: project.desktopImage.image.src,
                alt: project.desktopImage.alt,
                height: 675,
                width: 1440,
                className: "h-screen max-h-[675px] w-full"
              }
            )
          },
          `project-image-mobile-${index}`
        )),
        !isMobile && props.reviewSlides && props.reviewSlides.map((review, index) => /* @__PURE__ */ jsx(
          SwiperSlide,
          {
            className: "flex h-fit w-full items-center justify-center rounded-xl bg-white",
            children: /* @__PURE__ */ jsxs("div", { className: "flex h-[370px] w-full flex-col items-center justify-center space-y-8 rounded-xl border px-20 py-8", children: [
              /* @__PURE__ */ jsx("span", { className: "icon-[raphael--quote] h-[45px] w-[45px] text-brand-green-primary" }),
              /* @__PURE__ */ jsx("p", { className: "mt-5 text-center font-bold leading-[30px]", children: review.review }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center space-x-4", children: [
                /* @__PURE__ */ jsx("div", { className: "flex h-[56px] w-[56px] items-center justify-center rounded-full", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: review.reviewerImage.image.src,
                    alt: review.reviewerImage.alt,
                    height: 600,
                    width: 600,
                    className: "rounded-full"
                  }
                ) }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-2", children: [
                  /* @__PURE__ */ jsx("p", { className: "font-bold capitalize leading-tight text-brand-gray-dark", children: review.reviewerName }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold capitalize leading-tight text-brand-gray-dark", children: review.reviewerLocation })
                ] })
              ] })
            ] })
          },
          `review-desktop-${index}`
        ))
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center space-x-4 pt-8", children: /* @__PURE__ */ jsx("div", { className: props.paginationClass.replace(".", "") }) })
  ] });
}

export { Carousel as C };
