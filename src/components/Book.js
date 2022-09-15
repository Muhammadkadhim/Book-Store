import {
    MdOutlineShoppingCart,
    MdRemoveShoppingCart,
    MdFavoriteBorder,
    MdFavorite,
} from "react-icons/md";
import { delimiter } from "../utils/delimiter";
import { Link } from "react-router-dom";
import { Tooltip } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { saveToCart, saveToFavourites } from "../redux/userSlice";
import { cover_not_found } from "../assets";
import { useEffect, useState } from "react";

export default function Book(props) {
    const dispatch = useDispatch();

    const [addedToCart, setAddedToCart] = useState(false);
    const [addedToFaourites, setAddedToFavourites] = useState(false);

    const cart = useSelector((state) => state.user.cart);
    const favourites = useSelector((state) => state.user.favourites);

    useEffect(() => {
        cart.forEach((item) => {
            if (item === props.book.id) {
                setAddedToCart(true);
            }
        });
        favourites.forEach((item) => {
            if (item === props.book.id) {
                setAddedToFavourites(true);
            }
        });
    }, []);

    const addToCart = () => {
        dispatch(saveToCart(props.book.id));
        setAddedToCart(!addedToCart);
    };
    const addToFavourites = () => {
        dispatch(saveToFavourites(props.book.id));
        setAddedToFavourites(!addedToFaourites);
    };

    return (
        <div
            className="flex flex-col items-center gap-2 p-2 text-center text-white w-full h-[320px] md:w-[200px] bg-slate-800 rounded-lg  hover:outline hover:outline-slate-700 transition ease-out"
            key={props.index}
        >
            {props.book.cover ? (
                <Link to={`/${props.category}${props.book.id}`}>
                    <img
                        src={props.book.cover}
                        alt={props.book.title}
                        className="h-[200px] rounded-lg object-contain"
                    />
                </Link>
            ) : (
                <Link
                    to={`/${props.category}/${props.book.id}`}
                    className="h-[200px] rounded-lg w-full grid place-content-center"
                >
                    <img
                        src={cover_not_found}
                        alt={props.book.title}
                        className="h-[200px] rounded-lg object-contain"
                    />
                </Link>
            )}
            <h1 className="text-md">{delimiter(props.book.title, 20)}</h1>
            <p className="text-md text-orange-200 font-bold">
                ${props.book.price}
            </p>
            <div className="flex gap-5 items-center">
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
                            <MdFavoriteBorder style={{ fontSize: "18px" }} />
                        )}
                    </button>
                </Tooltip>
            </div>
        </div>
    );
}
