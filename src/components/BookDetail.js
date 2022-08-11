import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { MdFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
import { Tooltip } from "flowbite-react";
export default function BookDetail() {
    const { category, bookId } = useParams();
    const [book, setBook] = useState();

    useEffect(() => {
        axios
            .get(`https://openlibrary.org/works/${bookId}.json`)
            .then((data) => {
                console.log(data.data);
                let authors = [];
                data.data.authors.forEach((author) => {
                    axios
                        .get(`https://openlibrary.org${author.author.key}.json`)
                        .then((data) => {
                            authors.push(data.data.name);
                        })
                        .catch((err) => console.log(err));
                });

                // getting general data
                setBook({
                    id: data.data.key,
                    title: data.data.title,
                    authors: authors,
                    cover: data.data.covers
                        ? `https://covers.openlibrary.org/b/id/${data.data.covers[0]}-L.jpg`
                        : undefined,
                    description: data.data.description
                        ? data.data.description.value
                        : "No description found",
                    subjects: data.data.subjects
                        ? data.data.subjects.join(",")
                        : "No subjects found",
                    price: Math.floor(Math.random() * (15 - 5 + 1)) + 5,
                });
            })
            .catch((err) => console.log(err));
    }, [bookId]);

    return (
        <>
            <div className="text-sm breadcrumbs  w-9/12 md:w-11/12 mx-auto">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to={`/category/${category}`}>{category}</Link>
                    </li>
                    <li>{book ? book.title : ""}</li>
                </ul>
            </div>
            {book ? (
                <section className="body-font overflow-hidden bg-base-200 md:h-[600px] w-11/12 mx-auto my-5 rounded-lg flex items-center justify-center">
                    <div className="w-9/12 px-5 py-5 mx-auto ">
                        <div className="lg:w-4/5 mx-auto flex flex-wrap rounded-lg">
                            <img
                                alt={book.title}
                                className="lg:w-1/2 w-full h-[400px] object-contain object-center rounded-lg"
                                src={book.cover}
                            />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h2 className="text-sm title-font text-orange-400 tracking-widest">
                                    {category}
                                </h2>
                                <h1 className="text-slate-100 text-2xl title-font font-medium mb-1">
                                    {book.title}
                                </h1>
                                <hr className="my-5" />
                                <h2 className="text-sm title-font text-orange-400 tracking-widest">
                                    Description:
                                </h2>
                                <p className="leading-relaxed text-orange-200">
                                    {book.description}
                                </p>

                                <div className="flex mt-5 justify-between items-center">
                                    <span className="title-font font-medium text-2xl text-slate-400">
                                        ${book.price}.00
                                    </span>
                                    <div className="flex gap-5 items-center">
                                        <Tooltip content="Add to Cart">
                                            <button className="text-orange-300">
                                                <MdOutlineShoppingCart
                                                    style={{ fontSize: "24px" }}
                                                />
                                            </button>
                                        </Tooltip>

                                        <Tooltip content="Add to Favorites">
                                            <button className="text-orange-300">
                                                <MdFavoriteBorder
                                                    style={{ fontSize: "24px" }}
                                                />
                                            </button>
                                        </Tooltip>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                ""
            )}
        </>
    );
}
