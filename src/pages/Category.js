import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BookList, Loading } from "../components/";
import { Link } from "react-router-dom";

export default function Category() {
    const { category } = useParams();
    const [books, setBooks] = useState();

    useEffect(() => {
        axios
            .get(`https://openlibrary.org/subjects/${category}.json?limit=20`)
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
                    <BookList books={books} category={category} />
                ) : (
                    <Loading />
                )}
            </div>
        </>
    );
}
