import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Book } from "../components";

export default function Cart() {
    const cart = useSelector((state) => state.user.cart);
    const [books, setBooks] = useState([]);

    cart.forEach((bookId) => {
        axios
            .get(`https://openlibrary.org${bookId}.json`)
            .then((data) => {
                console.log(data);
            })
            .catch((err) => console.log(err));
    });

    return (
        <>
            <div className="flex justify-center w-full flex-col py-10">
                <header className="text-center">
                    <h1 className="text-orange-400 font-bold text-3xl">
                        Shopping Cart
                    </h1>
                </header>
                <section className="body-font overflow-hidden bg-slate-800 lg:min-h-[600px] w-11/12 mx-auto my-5 rounded-lg flex items-center justify-center">
                    <div>
                        <div>{cart.map((item) => {})}</div>
                    </div>
                </section>
            </div>
        </>
    );
}
