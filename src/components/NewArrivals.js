import { useEffect, useState } from "react";
import { Book, Loading } from "./";
import { Slider } from "./";
import useAxios from "../hooks/useAxios";

export default function NewBooks() {
    const { bookData } = useAxios({
        endpoint: "subjects/new.json",
        limit: 6,
    });
    const [newArrivals, setNewArrivals] = useState(null);

    useEffect(() => {
        if (bookData !== null) setNewArrivals(bookData);
    }, [bookData]);

    return (
        <div className=" w-11/12 mx-auto  flex flex-col gap-10 text-center">
            <h1 className="text-3xl font-medium uppercase text-orange-400">
                New Arrivals
            </h1>

            <Slider>
                {newArrivals ? (
                    newArrivals.map((newArrival, index) => {
                        return (
                            <Book
                                book={newArrival}
                                key={index}
                                category="new-arrivals"
                            />
                        );
                    })
                ) : (
                    <Loading />
                )}
            </Slider>
        </div>
    );
}
