import { MdOutlineShoppingCart, MdFavoriteBorder } from "react-icons/md";
import { delimiter } from "../utils/delimiter";
import { Link } from "react-router-dom";
import { Tooltip } from "flowbite-react";

import cover_not_found from "../assets/cover_not_found.svg";

export default function Book(props) {
    return (
        <div
            className="flex flex-col items-center gap-2 p-2 text-center text-white  h-[320px] w-[200px] bg-base-200 rounded-lg shadow-md shadow-base-300 hover:outline hover:outline-slate-700 transition ease-out"
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
                    className="h-[200px] rounded-lg w-full bg-base-300 grid place-content-center"
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
                <Tooltip content="Add to Cart">
                    <button className="text-orange-300">
                        <MdOutlineShoppingCart style={{ fontSize: "18px" }} />
                    </button>
                </Tooltip>

                <Tooltip content="Add to Favorites">
                    <button className="text-orange-300">
                        <MdFavoriteBorder style={{ fontSize: "18px" }} />
                    </button>
                </Tooltip>
            </div>
        </div>
    );
}
