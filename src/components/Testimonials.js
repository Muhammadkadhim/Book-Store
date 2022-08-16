import { Slider } from "../components";
import { testimonials } from "../constants";
export default function Testimonials() {
    return (
        <div className="w-11/12 md:w-12/12 mx-auto flex flex-col gap-5">
            <div class="my-6 text-center  w-full flex flex-col gap-5">
                <h2 class="text-4xl font-bold text-orange-400">Testimonials</h2>
                <p class="text-sm text-gray-400">
                    What do our customers say about us
                </p>
            </div>
            <Slider>
                {testimonials.map((testimonial, index) => {
                    return (
                        <div
                            class="p-4 rounded-lg shadow-md bg-base-300 md:w-52 h-72"
                            key={index}
                        >
                            <div class="mb-2">
                                <div class="flex flex-col items-center justify-center">
                                    <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                                        <img
                                            src={testimonial.avatar}
                                            alt="img"
                                            class="object-cover object-center w-full h-full"
                                        />
                                    </div>
                                    <h5 class="font-bold text-orange-500">
                                        {testimonial.name}
                                    </h5>
                                    <span className="h-[.04rem] w-24 bg-gray-600 my-3"></span>
                                    <p class="mb-2 text-center text-sm tracking-wide text-gray-100 ">
                                        " {testimonial.speech}"
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}
