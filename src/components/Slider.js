import { Loading } from "./";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import React from "react";

SwiperCore.use([Navigation]);

export default function Slider({ children }) {
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);

    return (
        <div className="w-full flex relative">
            <Swiper
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                freeMode={FreeMode}
                grabCursor={true}
                loop
                modules={[FreeMode, Autoplay, Navigation]}
                autoplay={false}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                onSwiper={(swiper) => {
                    // Delay execution for the refs to be defined
                    setTimeout(() => {
                        // Override prevEl & nextEl now that refs are defined
                        swiper.params.navigation.prevEl =
                            navigationPrevRef.current;
                        swiper.params.navigation.nextEl =
                            navigationNextRef.current;

                        // Re-init navigation
                        swiper.navigation.destroy();
                        swiper.navigation.init();
                        swiper.navigation.update();
                    });
                }}
                className="mySwiper"
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1400: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                }}
            >
                {Array.isArray(children) ? (
                    children.map((child, index) => {
                        return <SwiperSlide key={index}>{child}</SwiperSlide>;
                    })
                ) : (
                    <Loading />
                )}
            </Swiper>
            <div
                className="w-10 h-10 bg-base-200 text-slate-900 hover:bg-black hover:border-2 hover:border-white hover:text-white focus:bg-black focus:text-white transition ease-in-out duration-150 cursor-pointer rounded-full absolute left-[-55px] top-[40%] z-30  hidden md:flex justify-center items-center"
                ref={navigationPrevRef}
            >
                <MdChevronLeft style={{ fontSize: "24px" }} />
            </div>
            <div
                className="w-10 h-10 bg-base-200 text-slate-900 hover:bg-black hover:border-2 hover:border-white hover:text-white focus:bg-black focus:text-white transition ease-in-out duration-150 cursor-pointer rounded-full absolute right-[-55px] top-[40%] z-30 hidden md:flex justify-center items-center  "
                ref={navigationNextRef}
            >
                <MdChevronRight style={{ fontSize: "24px" }} />
            </div>
        </div>
    );
}
