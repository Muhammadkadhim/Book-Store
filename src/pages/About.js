import { Testimonials } from "../components/";
import { bookstore } from "../assets";
import {
    MdOutlineLocalShipping,
    MdPersonOutline,
    MdCompareArrows,
} from "react-icons/md";
import { AiOutlinePercentage } from "react-icons/ai";
export default function About() {
    return (
        <div className=" w-full mx-auto flex flex-col gap-10 py-10">
            <div className="w-full h-fit p-10 bg-slate-800 flex flex-col lg:flex-row text-center lg:text-left gap-10 items-center rounded-lg">
                <div className="flex flex-col gap-5">
                    <h1 className="text-4xl text-white ">Kitab Store</h1>
                    <p className="text-gray-300 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolorum eum non nesciunt natus, eos fuga distinctio
                        nostrum perferendis, quia excepturi iure dolore et!
                        Animi asperiores, dolores, temporibus repellat aut
                        aliquam libero mollitia saepe doloribus quas error
                        reiciendis sed eligendi distinctio.
                    </p>
                </div>
                <img
                    src={bookstore}
                    alt="people are buying books"
                    className="w-[500px] object-contain"
                />
            </div>

            <div className="min-h-96 w-full flex flex-col justify-center gap-5 text-center">
                <h1 className="text-4xl text-orange-400 font-bold ">
                    Our Services
                </h1>
                <p className="text-gray-400 text-sm max-w-[500px] mx-auto ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus, saepe incidunt ipsam eveniet inventore cum?
                </p>
                <div className="flex flex-wrap gap-5 justify-center mt-5">
                    <div className="w-[200px] h-[200px] flex flex-col items-center justify-center shadow-lg rounded-md bg-slate-800 text-white hover:bg-slate-200 hover:text-slate-900 transition ease-in-out duration-300">
                        <MdOutlineLocalShipping style={{ fontSize: "64px" }} />
                        <h1 className="text-lg font-medium ">
                            Delivery Service
                        </h1>
                    </div>
                    <div className="w-[200px] h-[200px] flex flex-col items-center justify-center shadow-lg rounded-md bg-slate-800 text-white hover:bg-slate-200 hover:text-slate-900 transition ease-in-out duration-300">
                        <MdCompareArrows style={{ fontSize: "64px" }} />
                        <h1 className="text-lg font-medium ">
                            Shipping and Return
                        </h1>
                    </div>
                    <div className="w-[200px] h-[200px] flex flex-col items-center justify-center shadow-lg rounded-md bg-slate-800 text-white hover:bg-slate-200 hover:text-slate-900 transition ease-in-out duration-300">
                        <AiOutlinePercentage style={{ fontSize: "64px" }} />
                        <h1 className="text-lg font-medium ">Promotion</h1>
                    </div>
                    <div className="w-[200px] h-[200px] flex flex-col items-center justify-center shadow-lg rounded-md bg-slate-800 text-white hover:bg-slate-200 hover:text-slate-900 transition ease-in-out duration-300">
                        <MdPersonOutline style={{ fontSize: "64px" }} />
                        <h1 className="text-lg font-medium ">
                            24 Hour Service
                        </h1>
                    </div>
                </div>
            </div>
            <Testimonials />
        </div>
    );
}
