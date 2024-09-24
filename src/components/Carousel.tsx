// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import type { PaginationOptions, SwiperOptions } from 'swiper/types';
import { useMediaQuery } from '../utils/reactHooks';

export interface CarouselImage {
    image: any;
    alt: string;
}

export interface ProjectSlide {
    mobileImage: CarouselImage;
    desktopImage: CarouselImage;
    href: string;
}

export interface ProjectImageSlide extends Omit<ProjectSlide, 'href'> {}

export interface ReviewSlide {
    reviewerName: string;
    reviewerImage: CarouselImage;
    reviewerLocation: string;
    review: string;
}

export interface CarouselProps {
    projectSlides?: ProjectSlide[];
    projectImageSlides?: ProjectImageSlide[];
    reviewSlides?: ReviewSlide[];
    paginationClass: string;
}

export default function Carousel(props: CarouselProps) {
    const isMobile = useMediaQuery('(max-width: 1024px)');

    const pagination: PaginationOptions = {
        clickable: true,
        el: props.paginationClass,
        type: 'bullets',
    };

    // Define the common Swiper props
    const swiperProps: SwiperOptions = {
        spaceBetween: 20,
        slidesPerView: 1,
        pagination,
        modules: [Navigation, Pagination, Autoplay, EffectFade],
        breakpoints: {
            1024: {
                navigation: {
                    enabled: true,
                    nextEl: '.image-swiper-button-next',
                    prevEl: '.image-swiper-button-prev',
                },
                slidesPerView: props.projectImageSlides ? 1 : 1.1,
                centeredSlides: true,
            },
        },
    };

    // Add autoplay conditionally
    if (props.projectImageSlides) {
        swiperProps.autoplay = {
            delay: 4000,
            disableOnInteraction: true,
        };
        swiperProps.speed = 1000;
    }

    return (
        <>
            <div className='relative mt-8'>
                {props.reviewSlides && (
                    <div className='absolute -top-[73px] right-0 flex justify-end space-x-10'>
                        {/* Custom Previous Button */}
                        <div className='relative hidden items-center justify-center lg:flex'>
                            <button
                                aria-label='Carousel Prev Button'
                                className='image-swiper-button-prev peer disabled:opacity-20 lg:flex'
                            >
                                <span className='icon-[carbon--arrow-left] h-[30px] w-[30px] text-black peer-disabled:opacity-20' />
                            </button>
                        </div>
                        {/* Custom Next Button */}
                        <div className='relative hidden items-center justify-center lg:flex'>
                            <button
                                aria-label='Carousel Next Button'
                                className='image-swiper-button-next peer disabled:opacity-20 lg:flex'
                            >
                                <span className='icon-[carbon--arrow-right] h-[30px] w-[30px] text-black peer-disabled:opacity-20' />
                            </button>
                        </div>
                    </div>
                )}
                {props.projectImageSlides && (
                    <div className='absolute top-[45%] z-20 w-full'>
                        {/* Custom Previous Button */}
                        <div className='absolute bottom-0 left-20 top-0 hidden lg:flex'>
                            <button
                                aria-label='Carousel Prev Button'
                                className='image-swiper-button-prev peer disabled:opacity-20 lg:block'
                            >
                                <span className='icon-[carbon--arrow-left] h-[60px] w-[60px] text-white peer-disabled:opacity-20' />
                            </button>
                        </div>
                        {/* Custom Next Button */}
                        <div className='absolute bottom-0 right-20 top-0 hidden lg:flex'>
                            <button
                                aria-label='Carousel Next Button'
                                className='image-swiper-button-next peer disabled:opacity-20 lg:block'
                            >
                                <span className='icon-[carbon--arrow-right] h-[60px] w-[60px] text-white peer-disabled:opacity-20' />
                            </button>
                        </div>
                    </div>
                )}
                <Swiper {...swiperProps}>
                    {isMobile &&
                        props.projectSlides &&
                        props.projectSlides.map((project: ProjectSlide, index) => (
                            <SwiperSlide
                                key={`featuredProject-mobile-${index}`}
                                className='flex h-fit w-full items-center justify-center'
                            >
                                <a
                                    href={`${project.href}`}
                                    aria-label={`Featured Project ${index} Link`}
                                >
                                    <img
                                        src={project.mobileImage.image.src}
                                        alt={project.mobileImage.alt}
                                        height={330}
                                        width={327}
                                        className='h-auto w-full rounded-lg'
                                    />
                                </a>
                            </SwiperSlide>
                        ))}
                    {isMobile &&
                        props.projectImageSlides &&
                        props.projectImageSlides.map((project: ProjectImageSlide, index) => (
                            <SwiperSlide
                                key={`project-image-mobile-${index}`}
                                className='flex h-fit w-full items-center justify-center'
                            >
                                <img
                                    src={project.mobileImage.image.src}
                                    alt={project.mobileImage.alt}
                                    height={675}
                                    width={375}
                                    className='h-screen max-h-[675px] w-full'
                                />
                            </SwiperSlide>
                        ))}
                    {isMobile &&
                        props.reviewSlides &&
                        props.reviewSlides.map((review: ReviewSlide, index) => (
                            <SwiperSlide
                                key={`review-mobile-${index}`}
                                className='flex h-fit w-full items-center justify-center rounded-xl bg-white'
                            >
                                <div className='flex w-full flex-col items-center justify-center space-y-7 rounded-xl px-4 py-8'>
                                    <span className='icon-[raphael--quote] h-[45px] w-[45px] text-brand-green-primary' />

                                    <p className='mt-5 text-center font-bold leading-[30px]'>
                                        {review.review}
                                    </p>
                                    <div className='flex items-center justify-center space-x-4'>
                                        <div className='flex h-[53px] w-[56px] items-center justify-center rounded-full'>
                                            <img
                                                src={review.reviewerImage.image.src}
                                                alt={review.reviewerImage.alt}
                                                height={56}
                                                width={56}
                                                className='rounded-full'
                                            />
                                        </div>
                                        <div className='flex flex-col space-y-2'>
                                            <p className='font-bold capitalize leading-tight text-brand-gray-dark'>
                                                {review.reviewerName}
                                            </p>
                                            <p className='text-sm font-semibold capitalize leading-tight text-brand-gray-dark'>
                                                {review.reviewerLocation}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    {!isMobile &&
                        props.projectImageSlides &&
                        props.projectImageSlides.map((project: ProjectImageSlide, index) => (
                            <SwiperSlide
                                key={`project-image-mobile-${index}`}
                                className='flex h-full w-full items-center justify-center'
                            >
                                <img
                                    src={project.desktopImage.image.src}
                                    alt={project.desktopImage.alt}
                                    height={675}
                                    width={1440}
                                    className='h-screen max-h-[675px] w-full'
                                />
                            </SwiperSlide>
                        ))}
                    {!isMobile &&
                        props.reviewSlides &&
                        props.reviewSlides.map((review: ReviewSlide, index) => (
                            <SwiperSlide
                                key={`review-desktop-${index}`}
                                className='flex h-fit w-full items-center justify-center rounded-xl bg-white'
                            >
                                <div className='flex h-[370px] w-full flex-col items-center justify-center space-y-8 rounded-xl border px-20 py-8'>
                                    <span className='icon-[raphael--quote] h-[45px] w-[45px] text-brand-green-primary' />

                                    <p className='mt-5 text-center font-bold leading-[30px]'>
                                        {review.review}
                                    </p>
                                    <div className='flex items-center justify-center space-x-4'>
                                        <div className='flex h-[56px] w-[56px] items-center justify-center rounded-full'>
                                            <img
                                                src={review.reviewerImage.image.src}
                                                alt={review.reviewerImage.alt}
                                                height={600}
                                                width={600}
                                                className='rounded-full'
                                            />
                                        </div>
                                        <div className='flex flex-col space-y-2'>
                                            <p className='font-bold capitalize leading-tight text-brand-gray-dark'>
                                                {review.reviewerName}
                                            </p>
                                            <p className='text-sm font-semibold capitalize leading-tight text-brand-gray-dark'>
                                                {review.reviewerLocation}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
            <div className='flex items-center justify-center space-x-4 pt-8'>
                <div className={props.paginationClass.replace('.', '')} />
            </div>
        </>
    );
}
