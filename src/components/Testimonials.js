import { Slider } from "../components";
import { testimonials } from "../constants";
export default function Testimonials() {
    return (
        <div className="w-11/12 md:w-12/12 mx-auto flex flex-col gap-5">
            <div className="my-6 text-center  w-full flex flex-col gap-5">
                <h2 className="text-4xl font-bold text-orange-400">
                    Testimonials
                </h2>
                <p className="text-sm text-gray-400">
                    What do our customers say about us
                </p>
            </div>
            <Slider>
                {testimonials.map((testimonial, index) => {
                    return (
                        <div
                            className="p-4 rounded-lg shadow-md bg-slate-800 md:w-52 h-52 md:h-60 2xl:w-56"
                            key={index}
                        >
                            <div className="mb-2">
                                <div className="flex flex-col items-center justify-center">
                                    <div className="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                                        <img
                                            src={testimonial.avatar}
                                            alt="img"
                                            className="object-cover object-center w-full h-full"
                                        />
                                    </div>
                                    <h5 className="font-bold text-orange-500">
                                        {testimonial.name}
                                    </h5>
                                    <span className="h-[.04rem] w-24 bg-gray-600 my-3"></span>
                                    <p className="mb-2 text-center text-sm tracking-wide text-gray-100 ">
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
