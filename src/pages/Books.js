import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BookList, Loading } from "../components";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

import ReactPaginate from "react-paginate";

export default function Books() {
    const { category } = useParams();
    const [books, setBooks] = useState();

    // pagination
    const [currentBooks, setCurrentBooks] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        let limit = Math.floor(Math.random() * (50 - 25 + 1)) + 25;
        axios
            .get(
                `https://openlibrary.org/subjects/${category}.json?limit=${limit}`
            )
            .then((data) => {
                const books = data.data.works.map((work) => {
                    const { key, authors, cover_id, edition_count, title } =
                        work;

                    return {
                        id: key,
                        title: title,
                        authors: authors,
                        cover:
                            cover_id != null
                                ? `https://covers.openlibrary.org/b/id/${cover_id}-L.jpg`
                                : undefined,
                        edition_count: edition_count,
                        price: Math.floor(Math.random() * (15 - 5 + 1)) + 5,
                    };
                });

                setBooks(books);
            })
            .catch((err) => console.log(err));
    }, [category]);

    // pagination
    useEffect(() => {
        if (books) {
            const endOffset = itemOffset + itemsPerPage;
            setCurrentBooks(books.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(books.length / itemsPerPage));
        }
    }, [itemsPerPage, itemOffset, books]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % books.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <div className="text-sm breadcrumbs  w-9/12 md:w-11/12 mx-auto">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>{category}</li>
                </ul>
            </div>
            <div className=" flex flex-wrap items-center justify-center my-10">
                {books ? (
                    <div className="flex flex-col gap-24 items-center ">
                        <BookList books={currentBooks} category={category} />
                        <ReactPaginate
                            nextLabel={
                                <button
                                    type="button"
                                    class="text-white bg-base-200 hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
                                >
                                    <MdKeyboardArrowRight
                                        style={{ fontSize: "20px" }}
                                    />
                                    <span class="sr-only">Next Page</span>
                                </button>
                            }
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            containerClassName="flex items-center gap-2"
                            activeClassName="bg-slate-600 text-white"
                            pageClassName="hover:bg-slate-800 hover:text-white rounded-full w-9 h-9 flex items-center justify-center transition ease-out duration-150"
                            previousLabel={
                                <button
                                    type="button"
                                    class="text-white bg-base-200 hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
                                >
                                    <MdKeyboardArrowLeft
                                        style={{ fontSize: "20px" }}
                                    />
                                    <span class="sr-only">Previous Page</span>
                                </button>
                            }
                            renderOnZeroPageCount={null}
                        />
                    </div>
                ) : (
                    <Loading />
                )}
            </div>
        </>
    );
}
