import React from "react";
import { Link } from "react-router-dom";
import {
    MdOutlineShoppingCart,
    MdFavoriteBorder,
    MdOutlineEast,
} from "react-icons/md";

export default function TrendingBook({ book }) {
    return (
        <Link
            to="/trending"
            className="px-0 md:px-20 flex gap-5 md:gap-10 items-center  h-full "
        >
            <img
                src={book.cover}
                alt={book.title}
                className="w-32 h-52 md:w-52 md:h-72 object-fill rounded-lg"
            />
            <div className="self-start mt-12 md:mt-32 flex flex-col gap-3">
                <h3 className="text-xs md:text-md">{book.author}</h3>
                <h1 className="text-md md:text-2xl text-white">{book.title}</h1>
                <p className="text-md md:text-2xl text-orange-300">
                    ${book.price}
                </p>
                <div className="gap-5 mt-3 hidden md:flex">
                    <button className="hover:text-orange-300 transition ease-in-out duration-150">
                        <MdOutlineShoppingCart style={{ fontSize: "24px" }} />
                    </button>
                    <button className="hover:text-orange-300 transition ease-in-out duration-150">
                        <MdFavoriteBorder style={{ fontSize: "24px" }} />
                    </button>
                </div>
                <button
                    type="button"
                    class="flex gap-3 items-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none w-fit rounded-lg px-2 py-2 mt-3 text-xs md:text-sm"
                >
                    Read more <MdOutlineEast style={{ fontSize: "18px" }} />
                </button>
            </div>
        </Link>
    );
}
