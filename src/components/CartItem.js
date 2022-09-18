import { useState } from "react";
import { Link } from "react-router-dom";
import { MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md";

export default function CartItem({ book }) {
    const [numberOfBooks, setNumberOfBooks] = useState(1);

    return (
        <div className="relative py-20 w-full h-24 flex justify-between items-center p-2">
            <Link to="" className="flex gap-5 items-center">
                <img src={book.cover} alt={book.title} className="h-24" />
                <h1 className="text-white text-md">{book.title}</h1>
            </Link>
            <div className="w-16 h-16 flex flex-col gap-5 justify-center items-center">
                <span>{book.price * numberOfBooks}$</span>
                <div className="flex items-center gap-2">
                    <button
                        className="text-3xl"
                        onClick={() =>
                            numberOfBooks !== 1 &&
                            setNumberOfBooks(numberOfBooks - 1)
                        }
                    >
                        <MdRemoveCircleOutline fontSize={"24px"} />
                    </button>
                    {numberOfBooks}
                    <button
                        className="text-3xl "
                        onClick={() => setNumberOfBooks(numberOfBooks + 1)}
                    >
                        <MdAddCircleOutline fontSize={"24px"} />
                    </button>
                </div>
            </div>
        </div>
    );
}
