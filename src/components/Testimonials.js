import { Slider } from "../components";
import { testimonials } from "../constants";
export default function Testimonials() {
    return (
        <>
            <div class="my-6 text-center  w-10/12 mx-auto">
                <h2 class="text-4xl font-bold text-orange-400">Testimonials</h2>
                <p class="text-lg text-gray-300">
                    What our customers say about us
                </p>
            </div>
            <Slider>
                {testimonials.map((testimonial, index) => {
                    return (
                        <div
                            class="p-4 rounded-lg shadow-md bg-base-300 w-56 lg:w-60 h-80 md:w-56"
                            key={index}
                        >
                            <div class="mb-2">
                                <div class="flex flex-col items-center justify-center">
                                    <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                                        <img
                                            src="https://cdn.pixabay.com/photo/2017/05/19/12/38/entrepreneur-2326419__340.jpg"
                                            alt="img"
                                            class="object-cover object-center w-full h-full"
                                        />
                                    </div>
                                    <h5 class="font-bold text-orange-500">
                                        {testimonial.name}
                                    </h5>
                                    <span className="h-[.04rem] w-24 bg-gray-600 my-3"></span>
                                    <p class="mb-2 text-center text-gray-100 ">
                                        " {testimonial.speech}"
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </>
    );
}
