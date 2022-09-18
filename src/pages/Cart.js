import { useSelector } from "react-redux";
import { CartItem } from "../components";

export default function Cart() {
    const cart = useSelector((state) => state.cart.cart);
    const totalPrice = useSelector((state) => state.cart.totalPrice);

    return (
        <>
            <div className="flex justify-center w-full flex-col py-10">
                <header className="text-center">
                    <h1 className="text-orange-400 font-bold text-3xl">
                        Shopping Cart
                    </h1>
                </header>
                <section className="body-font overflow-hidden bg-slate-800 p-4 lg:min-h-[600px] w-11/12 mx-auto my-5 rounded-lg flex flex-col items-center justify-start">
                    <div className="w-full h-10  flex items-center justify-end">
                        <p>
                            Total: <span>{totalPrice}$</span>
                        </p>
                    </div>

                    <div className="flex flex-col gap-10 w-full items-center">
                        {cart.length > 0 ? (
                            cart.map((book) => {
                                return <CartItem book={book} key={book.id} />;
                            })
                        ) : (
                            <p className="mt-5">No items is in the cart</p>
                        )}
                    </div>
                </section>
            </div>
        </>
    );
}
