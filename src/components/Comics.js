import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { Book, Loading } from "./";
import { Slider } from "./";

export default function Comics() {
    const { bookData } = useAxios({
        endpoint: "subjects/comics.json",
        limit: 6,
    });
    const [comics, setComics] = useState(null);

    useEffect(() => {
        if (bookData !== null) setComics(bookData);
    }, [bookData]);

    return (
        <div className=" w-11/12 mx-auto  flex flex-col gap-10 text-center">
            <h1 className="text-3xl font-medium uppercase text-orange-400">
                Comics
            </h1>

            <Slider>
                {comics ? (
                    comics.map((comic, index) => {
                        return (
                            <Book book={comic} key={index} category="comics" />
                        );
                    })
                ) : (
                    <Loading />
                )}
            </Slider>
        </div>
    );
}
