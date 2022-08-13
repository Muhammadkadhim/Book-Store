import { Loading } from "./";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

export default function Slider({ children }) {
    return (
        <div className="w-full  mx-auto pl-20 md:pl-0">
            <Swiper
                freeMode={FreeMode}
                grabCursor={true}
                modules={[FreeMode, Autoplay]}
                autoplay={{ delay: 2000 }}
                className="mySwiper"
                slidesPerView={5}
                spaceBetween={50}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    1200: {
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
        </div>
    );
}
