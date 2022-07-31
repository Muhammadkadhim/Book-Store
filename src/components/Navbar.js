import { useState } from "react";
import { MdOutlinePersonOutline, MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [openSearch, setOpenSearch] = useState(false);
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown w-fit">
                    <label tabIndex="0" className="btn btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex="0"
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow-sm shadow-gray-900 bg-base-100 rounded-box w-52"
                    >
                        <li className="menu-title">
                            <span>Pages</span>
                        </li>
                        <li>
                            <Link to="#">Home</Link>
                        </li>
                        <li>
                            <Link to="#">About</Link>
                        </li>

                        <li className="menu-title mt-3">
                            <span>Category</span>
                        </li>
                        <li>
                            <Link to="#">classNameics</Link>
                        </li>
                        <li>
                            <Link to="#">Tragedy</Link>
                        </li>
                        <li>
                            <Link to="#">Sci-Fi</Link>
                        </li>
                        <li>
                            <Link to="#">Fantasy</Link>
                        </li>
                        <li>
                            <Link to="#">Action and Adventure</Link>
                        </li>
                        <li>
                            <Link to="#">Crime</Link>
                        </li>
                        <li>
                            <Link to="#">Humor and Satire</Link>
                        </li>
                        <div className="flex mt-5 md:hidden">
                            <input
                                type="search"
                                placeholder="Search Here"
                                className=" input w-full  shadow-sm shadow-slate-900 rounded-lg"
                            />
                        </div>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    BookShop
                </Link>
            </div>
            <div className="navbar-end">
                <div className="hidden md:flex">
                    <input
                        type="search"
                        placeholder="Search Here"
                        className={`input w-[300px] max-w-xs shadow-sm shadow-slate-900 rounded-lg  ${
                            openSearch ? "" : "hidden"
                        } `}
                    />
                    <button
                        className="btn btn-ghost btn-circle"
                        onClick={() => {
                            setOpenSearch(!openSearch);
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </button>
                </div>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <MdOutlineShoppingCart fontSize={"22px"} />
                    </div>
                </button>
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost btn-circle">
                        <MdOutlinePersonOutline fontSize={"24px"} />
                    </label>
                    <ul
                        tabIndex="0"
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow-sm shadow-gray-900 bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
