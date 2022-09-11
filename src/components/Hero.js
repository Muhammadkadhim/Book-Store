import { Carousel } from "flowbite-react";
import { useState, useEffect } from "react";
import TrendingBook from "./TrendingBook";
import LoadingBooks from "./LoadingBooks";
import useAxios from "../hooks/useAxios";

export default function Hero() {
    const { bookData } = useAxios({
        endpoint: "subjects/new.json",
        limit: 3,
    });
    const [trends, setTrends] = useState(null);

    useEffect(() => {
        if (bookData !== null) setTrends(bookData);
    }, [bookData]);

    return (
        <>
            {trends ? (
                <div className="w-11/12 my-10 mx-auto md:w-full h-[300px]  md:h-[500px]  flex justify-center items-center">
                    <Carousel
                        leftControl=" "
                        rightControl=" "
                        indicators={false}
                    >
                        {trends.map((book, index) => {
                            return (
                                <TrendingBook
                                    book={book}
                                    key={index}
                                    category="trends"
                                />
                            );
                        })}
                    </Carousel>
                </div>
            ) : (
                <div className="w-11/12 mx-auto md:w-12/12 h-56 md:h-[500px]  flex items-center justify-center py-52 ">
                    <LoadingBooks />
                </div>
            )}
        </>
    );
}
