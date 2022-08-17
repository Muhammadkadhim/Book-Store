import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowBanner(true);
        }, 5000);
    }, []);

    const handleCookieBanner = () => {
        setShowBanner(false);
    };

    return (
        <div
            className={` ${
                showBanner ? "" : "hidden"
            } py-6 flex-col justify-center sm:py-12`}
        >
            <div className="w-12/12 mx-auto bg-white fixed inset-x-5 p-5 bottom-0 z-50 rounded-lg drop-shadow-2xl flex gap-4 flex-wrap md:flex-nowrap text-center md:text-left items-center justify-center md:justify-between">
                <div className="w-full text-gray-500">
                    This website uses cookies to ensure you get the best
                    experience on our website.
                    <Link
                        to="#"
                        className="text-indigo-600 whitespace-nowrap  hover:underline"
                    >
                        Learn more
                    </Link>
                </div>
                <div className="flex gap-4 items-center flex-shrink-0">
                    <button
                        onClick={handleCookieBanner}
                        className="text-indigo-600 focus:outline-none hover:underline"
                    >
                        Decline
                    </button>
                    <button
                        onClick={handleCookieBanner}
                        className="bg-indigo-500 px-5 py-2 text-white rounded-md hover:bg-indigo-700 focus:outline-none"
                    >
                        Allow Coockies
                    </button>
                </div>
            </div>
        </div>
    );
}
