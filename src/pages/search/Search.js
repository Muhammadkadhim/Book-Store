import { useState } from "react";
import { MdSearch } from "react-icons/md";
import axios from "axios";

import { useForm } from "react-hook-form";

export default function Search() {
    const { register, handleSubmit } = useForm();
    const [searchRes, setSearchRes] = useState([]);

    const getSearchResult = (query) => {
        axios
            .get(`http://openlibrary.org/search.json?q=${query}&limit=10`)
            .then((res) => {
                setSearchRes(res.data.docs);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const onSubmit = (data) => {
        getSearchResult(data.query);
    };

    console.log(searchRes);

    return (
        <div className="flex flex-col gap-20 py-10  items-center ">
            <div className="flex flex-col-reverse md:flex-row items-center justify-center w-10/12 mx-auto mt-20">
                <form
                    className="flex items-center md:flex-grow w-full md:w-8/12 mb-4 md:mb-0 md:ml-2"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <select
                        className="select  w-6/12  md:w-2/12 bg-base-300  focus:outline-0   p-2.5"
                        {...register("select", { required: true })}
                    >
                        <option value="All">All</option>
                        <option value="Title">Title</option>
                        <option value="Author">Author</option>
                    </select>

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
                            placeholder="Search"
                            autoFocus
                            name="query"
                            {...register("query", { required: true })}
                        />
                    </div>
                    <button className="p-2.5 ml-2 text-sm font-medium text-white bg-base-300 h-full hover:bg-black transition ease-out duration-150 rounded-lg focus:outline-none">
                        <MdSearch style={{ fontSize: "22px" }} />
                        <span className="sr-only">Search</span>
                    </button>
                </form>
            </div>

            <div className="flex gap-4 flex-wrap justify-center">
                {searchRes.map((book) => {
                    return (
                        <div className="w-44 h-44 bg-white rounded-lg shadow-md flex flex-col justify-center items-center">
                            <h1>{book.title}</h1>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
