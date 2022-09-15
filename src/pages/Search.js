import { useState } from "react";
import { MdSearch } from "react-icons/md";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Book, Loading } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { clearState, saveSearchedRes } from "../redux/searchSlice";
import { useEffect } from "react";

export default function Search() {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();

    const searchRes = useSelector((state) => state.search.searchRes);
    const searchTerm = useSelector((state) => state.search.searchTerm);

    const [loading, setLoading] = useState(false);
    const [noBooksFound, setNoBooksFound] = useState(false);

    const getSearchResult = (query) => {
        setLoading(true);
        dispatch(saveSearchedRes([]));
        setNoBooksFound(false);

        axios
            .get(`http://openlibrary.org/search.json?q=${query}&limit=20`)
            .then((data) => {
                const works = data.data.docs.map((doc) => {
                    const { title, key, cover_i } = doc;
                    console.log(key);
                    return {
                        id: key,
                        title: title,
                        cover:
                            cover_i != null
                                ? `https://covers.openlibrary.org/b/id/${cover_i}-L.jpg`
                                : undefined,
                        price: Math.floor(Math.random() * (10 - 5 + 1)) + 5,
                    };
                });
                if (!(works.length > 0)) {
                    setNoBooksFound(true);
                    setLoading(false);
                } else {
                    dispatch(saveSearchedRes({ works, query }));
                    setLoading(false);
                    setNoBooksFound(false);
                }
            });
    };

    const onSubmit = (data) => {
        getSearchResult(data.query);
    };

    return (
        <div className="flex flex-col gap-16 py-5  items-center ">
            <div className="flex flex-col-reverse md:flex-row items-center justify-center w-10/12 mx-auto mt-20">
                <form
                    className="flex items-center md:flex-grow w-full md:w-8/12 mb-4 md:mb-0 md:ml-2"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <label htmlFor="simple-search" className="sr-only">
                        Search
                    </label>
                    <div className="relative w-full">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <MdSearch style={{ fontSize: "20px" }} />
                        </div>
                        <input
                            type="text"
                            id="simple-search"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
                            placeholder="Search by Title, Authors, Keyword or ISBN"
                            autoFocus
                            name="query"
                            {...register("query", { required: true })}
                        />
                    </div>
                    <button
                        className={` p-2.5 ml-2 text-sm font-medium text-white bg-slate-800 h-full hover:bg-black transition ease-out duration-150 rounded-lg focus:outline-none`}
                    >
                        <MdSearch style={{ fontSize: "22px" }} />
                        <span className="sr-only">Search</span>
                    </button>
                </form>
            </div>
            <div className=" w-10/12">
                <p className={`${!searchRes && "hidden"} text-slate-500`}>
                    You searched for:{" "}
                    <span className="font-bold text-white">{searchTerm}</span>
                </p>
            </div>
            <div className="flex gap-4 flex-wrap justify-center p-10">
                {noBooksFound && "No Books Found"}
                {loading ? <Loading /> : ""}
                {searchRes &&
                    searchRes.map((book) => {
                        return (
                            <Book book={book} key={book.id} category="search" />
                        );
                    })}
            </div>
        </div>
    );
}
