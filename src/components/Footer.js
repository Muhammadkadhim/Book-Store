import { FiTwitter, FiFacebook, FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <footer className="bg-base-200 dark:bg-gray-900 rounded-t-lg">
            <div className="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-slate-100 uppercase dark:text-gray-400">
                        KitabStore
                    </h2>
                    <ul className="text-slate-300 dark:text-gray-400">
                        <li className="mb-4">
                            <Link to="#" className=" hover:underline">
                                About
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link to="#" className="hover:underline">
                                Careers
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link to="#" className="hover:underline">
                                Brand Center
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link to="#" className="hover:underline">
                                Blog
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-slate-100 uppercase dark:text-gray-400">
                        Help center
                    </h2>
                    <ul className="text-slate-300 dark:text-gray-400">
                        <li className="mb-4">
                            <Link to="#" className="hover:underline">
                                Discord Server
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link to="#" className="hover:underline">
                                Twitter
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link to="#" className="hover:underline">
                                Facebook
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link to="#" className="hover:underline">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-slate-100 uppercase dark:text-gray-400">
                        Legal
                    </h2>
                    <ul className="text-slate-300 dark:text-gray-400">
                        <li className="mb-4">
                            <Link to="#" className="hover:underline">
                                Privacy Policy
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link to="#" className="hover:underline">
                                Licensing
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link to="#" className="hover:underline">
                                Terms &amp; Conditions
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="md:mt-10 md:mr-3 lg:mr-0">
                    <h2 className="mb-6 text-sm font-semibold text-orange-400  dark:text-gray-400">
                        Get the latest news
                    </h2>
                    <div className="flex justify-center mt-6">
                        <div className="bg-base-300 rounded-lg">
                            <div className="flex flex-wrap justify-between md:flex-row">
                                <input
                                    type="email"
                                    className="m-1 p-2 appearance-none text-base-300 text-sm focus:outline-none rounded-md"
                                    placeholder="Enter your email"
                                />
                                <button className="w-full m-1 p-2 text-sm bg-base-200 hover:bg-base-300 text-orange-300 rounded-lg font-semibold uppercase lg:w-auto">
                                    subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* copyright */}
            <div className="py-6 px-4 bg-base-200 border-t border-t-slate-500 text-center dark:bg-gray-700 md:flex md:items-center md:justify-between">
                <span className="text-sm tex-slate-400  sm:text-center">
                    © 2022 <Link to="https://flowbite.com/">BokoShop</Link>. All
                    Rights Reserved.
                </span>
                <div className="flex mt-4 space-x-6 justify-center md:justify-start md:mt-0">
                    <Link
                        to="#"
                        className="text-gray-400 hover:text-orange-300 dark:hover:text-white"
                    >
                        <FiFacebook style={{ fontSize: "18px" }} />
                        <span className="sr-only">Facebook page</span>
                    </Link>
                    <Link
                        to="#"
                        className="text-gray-400 hover:text-orange-300 dark:hover:text-white"
                    >
                        <FiInstagram style={{ fontSize: "18px" }} />
                        <span className="sr-only">Instagram page</span>
                    </Link>
                    <Link
                        to="#"
                        className="text-gray-400 hover:text-orange-300 dark:hover:text-white"
                    >
                        <FiTwitter style={{ fontSize: "18px" }} />
                        <span className="sr-only">Twitter page</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
