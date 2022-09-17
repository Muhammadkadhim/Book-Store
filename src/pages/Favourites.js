import React from "react";
import { useSelector } from "react-redux";
import { BookList } from "../components";

export default function Favourites() {
    const favourites = useSelector((state) => state.user.favourites);

    return (
        <div className="flex justify-center w-full flex-col py-10">
            <header className="text-center">
                <h1 className="text-orange-400 font-bold text-3xl">
                    Favourites
                </h1>
            </header>

            <div className="my-10">
                {favourites.length > 0 ? (
                    <BookList books={favourites} category="Favourites" />
                ) : (
                    <p className="text-center">You have no favourite book</p>
                )}
            </div>
        </div>
    );
}
