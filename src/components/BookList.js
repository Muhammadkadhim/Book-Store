import { MdOutlineShoppingCart, MdFavoriteBorder } from "react-icons/md";
import { delimiter } from "../utils/delimiter";
import { Link } from "react-router-dom";
import { Tooltip } from "flowbite-react";

export default function BookList({ books, category }) {
    return (
        <div className="flex flex-wrap justify-center gap-10">
            {books.map((book, index) => {
                return (
                    <div
                        className="flex flex-col items-center gap-2 p-2 text-center text-white  h-[320px] w-[200px] bg-base-200 rounded-lg shadow-md shadow-base-300  hover:scale-105 transition ease-out duration-200"
                        key={index}
                    >
                        {book.cover ? (
                            <Link to={`/category/${category}${book.id}`}>
                                <img
                                    src={book.cover}
                                    alt={book.title}
                                    className="h-[200px] rounded-lg object-contain"
                                />
                            </Link>
                        ) : (
                            <Link
                                to={`/category/${category}${book.id}`}
                                className="h-[200px] rounded-lg w-full bg-base-300 grid place-content-center"
                            >
                                <h1 className="text-orange-400 text-sm">
                                    {book.title}
                                </h1>
                            </Link>
                        )}
                        <h1 className="text-md">{delimiter(book.title, 20)}</h1>
                        <p className="text-md text-orange-200 font-bold">
                            ${book.price}
                        </p>
                        <div className="flex gap-5 items-center">
                            <Tooltip content="Add to Cart">
                                <button className="text-orange-300">
                                    <MdOutlineShoppingCart
                                        style={{ fontSize: "18px" }}
                                    />
                                </button>
                            </Tooltip>

                            <Tooltip content="Add to Favorites">
                                <button className="text-orange-300">
                                    <MdFavoriteBorder
                                        style={{ fontSize: "18px" }}
                                    />
                                </button>
                            </Tooltip>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
