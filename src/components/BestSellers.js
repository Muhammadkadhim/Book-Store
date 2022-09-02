import { useEffect, useState } from "react";
import { Book, Loading } from "./";
import { Slider } from "./";
import useAxios from "../hooks/useAxios";

export default function BestSellers() {
    const { bookData } = useAxios({
        endpoint: "subjects/photography.json",
        limit: 6,
    });
    const [bestSellers, setBestSellers] = useState(null);

    useEffect(() => {
        if (bookData !== null) setBestSellers(bookData);
    }, [bookData]);

    return (
        <div className=" w-11/12 mx-auto  flex flex-col gap-10 text-center ">
            <h1 className="text-3xl font-medium uppercase text-orange-400">
                Best Sellers
            </h1>

            <Slider>
                {bestSellers ? (
                    bestSellers.map((bestSeller, index) => {
                        return (
                            <Book
                                book={bestSeller}
                                key={index}
                                category="best-sellers"
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
