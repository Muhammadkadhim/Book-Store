import React from "react";
import { Link } from "react-router-dom";
import cover_not_found from "../assets/cover_not_found.svg";
import {
    MdOutlineShoppingCart,
    MdFavoriteBorder,
    MdOutlineEast,
} from "react-icons/md";
import { Tooltip } from "flowbite-react";

export default function TrendingBook({ book }) {
    return (
        <div className="pl-5 md:px-20 flex gap-5 md:gap-10 items-center  h-full bg-base-200 rounded-lg">
            {book.cover ? (
                <img
                    src={book.cover}
                    alt={book.title}
                    className="w-32 h-52 md:w-52 md:h-72 object-contain rounded-lg"
                />
            ) : (
                <img
                    src={cover_not_found}
                    alt={book.title}
                    className="w-32 h-52 md:w-52 md:h-72 object-contain rounded-lg"
                />
            )}
            <div className="self-start mt-12 md:mt-32 flex flex-col gap-3">
                <h3 className="text-xs md:text-md">{book.author}</h3>
                <h1 className="text-md md:text-2xl text-white">{book.title}</h1>
                <p className="text-md md:text-2xl text-orange-300">
                    ${book.price}
                </p>
                <div className="gap-5 mt-3 hidden md:flex">
                    <Tooltip content="Add to Cart">
                        <button className="text-orange-300">
                            <MdOutlineShoppingCart
                                style={{ fontSize: "24px" }}
                            />
                        </button>
                    </Tooltip>

                    <Tooltip content="Add to Favorites">
                        <button className="text-orange-300">
                            <MdFavoriteBorder style={{ fontSize: "24px" }} />
                        </button>
                    </Tooltip>
                </div>
                <Link
                    to={`/trending${book.id}`}
                    type="button"
                    className="flex gap-3 items-center text-white bg-gray-700 hover:bg-gray-900 shadow-md focus:outline-none w-fit rounded-lg px-2 py-2 mt-3 text-xs md:text-sm"
                >
                    Read more <MdOutlineEast style={{ fontSize: "18px" }} />
                </Link>
            </div>
        </div>
    );
}
