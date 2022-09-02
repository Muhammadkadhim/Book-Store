import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BookList, Loading } from "../components";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

import ReactPaginate from "react-paginate";
import useAxios from "../hooks/useAxios";

export default function Books() {
    const { category } = useParams();
    const [limit, setLimit] = useState(
        Math.floor(Math.random() * (50 - 25 + 1)) + 25
    );

    // pagination
    const [currentBooks, setCurrentBooks] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [itemOffset, setItemOffset] = useState(0);

    const { bookData } = useAxios({
        endpoint: `subjects/${category}.json`,
        limit: limit,
    });
    const [books, setBooks] = useState(null);

    useEffect(() => {
        if (bookData !== null) setBooks(bookData);
    }, [bookData]);

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
            <div className="text-sm breadcrumbs text-white pt-10  w-9/12 md:w-11/12 mx-auto">
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
                                    className="mx-3 text-white bg-slate-800 hover:bg-black  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center "
                                >
                                    <MdKeyboardArrowRight
                                        style={{ fontSize: "20px" }}
                                    />
                                    <span className="sr-only">Next Page</span>
                                </button>
                            }
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            containerClassName="flex items-center gap-2"
                            activeClassName="bg-black border-2 border-white text-white"
                            pageClassName="mx-1 bg-slate-800 text-white rounded-full w-9 h-9 flex items-center justify-center transition ease-out duration-150"
                            previousLabel={
                                <button
                                    type="button"
                                    className="mx-3 text-white bg-slate-800 hover:bg-black  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
                                >
                                    <MdKeyboardArrowLeft
                                        style={{ fontSize: "20px" }}
                                    />
                                    <span className="sr-only">
                                        Previous Page
                                    </span>
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
