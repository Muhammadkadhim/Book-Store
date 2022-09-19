import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cover_not_found from "../assets/cover_not_found.svg";
import {
    MdOutlineShoppingCart,
    MdOutlineEast,
    MdFavorite,
    MdOutlineFavoriteBorder,
    MdRemoveShoppingCart,
} from "react-icons/md";
import { Tooltip } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { saveToCart } from "../redux/CartSlice";
import { saveToFavourites } from "../redux/userSlice";

export default function TrendingBook({ book }) {
    const dispatch = useDispatch();

    const [addedToCart, setAddedToCart] = useState(false);
    const [addedToFaourites, setAddedToFavourites] = useState(false);

    const cart = useSelector((state) => state.user.cart);
    const favourites = useSelector((state) => state.user.favourites);

    useEffect(() => {
        cart.map((item) => {
            if (item.id === book.id) {
                setAddedToCart(true);
            }
        });
        favourites.map((item) => {
            if (item.id === book.id) {
                setAddedToFavourites(true);
            }
        });
    }, []);

    const addToCart = () => {
        dispatch(saveToCart(book));
        setAddedToCart(!addedToCart);
    };
    const addToFavourites = () => {
        dispatch(saveToFavourites(book));
        setAddedToFavourites(!addedToFaourites);
    };

    return (
        <div className="pl-5 md:px-20 flex gap-5 md:gap-10 items-center  h-full bg-slate-800 rounded-lg">
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
                <h3 className="text-xs md:text-md">{book.authors}</h3>
                <h1 className="text-md md:text-2xl text-white">{book.title}</h1>
                <p className="text-md md:text-2xl text-orange-300">
                    ${book.price}
                </p>
                <div className="gap-5 mt-3 hidden md:flex">
                    <Tooltip
                        content={`${
                            addedToCart ? "Remove from cart" : "Add to cart"
                        }`}
                    >
                        <button className="text-orange-300" onClick={addToCart}>
                            {addedToCart ? (
                                <MdRemoveShoppingCart
                                    style={{ fontSize: "18px" }}
                                />
                            ) : (
                                <MdOutlineShoppingCart
                                    style={{ fontSize: "18px" }}
                                />
                            )}
                        </button>
                    </Tooltip>

                    <Tooltip
                        content={`${
                            addedToFaourites
                                ? "Remove from favorites"
                                : "Add to favorites"
                        }`}
                    >
                        <button
                            className="text-orange-300"
                            onClick={addToFavourites}
                        >
                            {addedToFaourites ? (
                                <MdFavorite style={{ fontSize: "18px" }} />
                            ) : (
                                <MdOutlineFavoriteBorder
                                    style={{ fontSize: "18px" }}
                                />
                            )}
                        </button>
                    </Tooltip>
                </div>
                <Link
                    to={`trends/works${book.id.replace("/works", "")}`}
                    type="button"
                    className="flex gap-3 items-center text-white bg-gray-700 hover:bg-gray-900 shadow-md focus:outline-none w-fit rounded-lg px-2 py-2 mt-3 text-xs md:text-sm"
                >
                    Read more <MdOutlineEast style={{ fontSize: "18px" }} />
                </Link>
            </div>
        </div>
    );
}
