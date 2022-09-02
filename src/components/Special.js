import { useEffect, useState } from "react";

import { delimiter } from "../utils/delimiter";
import { Tooltip } from "flowbite-react";

import { MdFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
import useAxios from "../hooks/useAxios";

export default function Special() {
    const { specialBook } = useAxios({
        specialEndpoint: "works/OL2010879W.json",
    });
    const [special, setSpecial] = useState(null);

    useEffect(() => {
        if (specialBook !== null) setSpecial(specialBook);
    }, [specialBook]);

    return (
        <div className="w-full flex flex-col gap-10 text-center">
            <h1 className="text-3xl font-medium uppercase text-orange-400">
                Special Offer
            </h1>
            {special && (
                <div className="w-11/12 mx-auto md:w-full h-full lg:px-20 px-5  py-10 rounded-lg bg-slate-800 flex flex-col md:flex-row  gap-10">
                    <img
                        src={special.cover}
                        alt={special.title}
                        className="h-96 rounded-md object-contain"
                    />
                    <div className="flex flex-col gap-5 items-center md:items-start text-left">
                        <h1 className="text-2xl text-white">{special.title}</h1>
                        <p className="text-sm text-gray-300 md:w-10/12 lg:w-8/12 text-center md:text-left">
                            {delimiter(special.description, 300)}
                        </p>
                        <p className="text-xl text-orange-500 flex items-center ">
                            $3 USD{" "}
                            <span className="text-sm text-orange-200 ml-5">
                                80% off
                            </span>
                        </p>
                        <div className="flex gap-5 items-center">
                            <Tooltip content="Add to Cart">
                                <button className="text-orange-300">
                                    <MdOutlineShoppingCart
                                        style={{
                                            fontSize: "24px",
                                        }}
                                    />
                                </button>
                            </Tooltip>

                            <Tooltip content="Add to Favorites">
                                <button className="text-orange-300">
                                    <MdFavoriteBorder
                                        style={{
                                            fontSize: "24px",
                                        }}
                                    />
                                </button>
                            </Tooltip>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
