import React from "react";
import axios from "axios";

export default function useAxios({ endpoint, specialEndpoint, limit, bookId }) {
    const BASE_URL = "https://openlibrary.org/";

    const [bookData, setBookData] = React.useState(null);
    const [specialBook, setSpecialBook] = React.useState(null);
    const [bookDetailsData, setBookDetailsData] = React.useState(null);
    const [authors, setAuthors] = React.useState([]);
    const [authorsKeys, setAuthorsKeys] = React.useState([]);

    React.useEffect(() => {
        if (endpoint) {
            axios
                .get(`${BASE_URL}${endpoint}?limit=${limit}`)
                .then((data) => {
                    const works = data.data.works.map((work) => {
                        const cover_id = work.cover_id || work.cover_i;
                        const { key, title } = work;

                        let authors = "";
                        work.authors.forEach((author) => {
                            authors += author.name + ", ";
                        });
                        return {
                            id: key,
                            title: title,
                            authors: authors,
                            cover:
                                cover_id != null
                                    ? `https://covers.openlibrary.org/b/id/${cover_id}-L.jpg`
                                    : undefined,
                            price: Math.floor(Math.random() * (10 - 5 + 1)) + 5,
                        };
                    });
                    setBookData(works);
                })
                .catch((err) => console.log(err));
        }
    }, [endpoint]);

    // getting data of a special book
    React.useEffect(() => {
        if (specialEndpoint) {
            axios
                .get(`${BASE_URL}${specialEndpoint}?limit=${limit}`)
                .then((data) => {
                    setSpecialBook({
                        id: data.data.key,
                        title: data.data.title,
                        description: data.data.description,
                        cover:
                            data.data.covers != null
                                ? `https://covers.openlibrary.org/b/id/${data.data.covers[0]}-L.jpg`
                                : undefined,
                    });
                })
                .catch((err) => console.log(err));
        }
    }, []);

    // getting book details
    React.useEffect(() => {
        if (bookId) {
            const data = axios.get(`${BASE_URL}works/${bookId}.json`);

            data.then((data) => {
                setAuthorsKeys(data.data.authors);

                let description = "";
                if (data.data.description) {
                    if (typeof data.data.description === "string") {
                        description = data.data.description;
                    } else {
                        description = data.data.description.value;
                    }
                } else {
                    description = "No Description Found";
                }

                setBookDetailsData({
                    id: data.data.key,
                    title: data.data.title,
                    description: description,

                    cover:
                        data.data.covers != null
                            ? `https://covers.openlibrary.org/b/id/${data.data.covers[0]}-L.jpg`
                            : undefined,
                    price: Math.floor(Math.random() * (10 - 5 + 1)) + 5,
                });
            });

            data.catch((err) => console.log(err));
        }
    }, [bookId]);

    // getting authors
    React.useEffect(() => {
        setAuthors([]);
        authorsKeys.map((authorKey) => {
            setAuthors([]);
            axios
                .get(
                    `${BASE_URL.replace("org/", "org")}${
                        authorKey.author.key
                    }.json`
                )
                .then((data) =>
                    setAuthors((prevState) => [
                        ...prevState,
                        data.data.name + ", ",
                    ])
                )
                .catch((err) => {
                    console.log(err);
                });
        });
    }, [authorsKeys]);

    return { bookData, specialBook, bookDetailsData, authors };
}
