import { useEffect, useState } from "react";
import axios from "axios";
import { Book } from ".";
import { Slider } from ".";

export default function BestSellers() {
    const [bestSellers, setBestSellers] = useState();

    useEffect(() => {
        axios
            .get(`https://openlibrary.org/subjects/photography.json?limit=${8}`)
            .then((data) => {
                const books = data.data.works.map((work) => {
                    const { key, authors, cover_id, title } = work;

                    return {
                        id: key,
                        title: title,
                        authors: authors,
                        cover:
                            cover_id != null
                                ? `https://covers.openlibrary.org/b/id/${cover_id}-L.jpg`
                                : undefined,
                        description: "No Description Found",
                        price: Math.floor(Math.random() * (15 - 5 + 1)) + 5,
                    };
                });

                setBestSellers(books);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className=" w-11/12 mx-auto  flex flex-col gap-10 text-center">
            <h1 className="text-orange-200 text-2xl uppercase">Best Sellers</h1>

            <Slider>
                {bestSellers
                    ? bestSellers.map((bestSeller, index) => {
                          return (
                              <Book
                                  book={bestSeller}
                                  key={index}
                                  category="Best Sellers"
                              />
                          );
                      })
                    : ""}
            </Slider>
        </div>
    );
}
