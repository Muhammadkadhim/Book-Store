import { useState } from "react";
import { MdOutlinePersonOutline, MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [openSearch, setOpenSearch] = useState(false);
    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown w-fit">
                    <label tabindex="0" class="btn btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h7"
                            />
                        </svg>
                    </label>
                    <ul
                        tabindex="0"
                        class="menu menu-compact dropdown-content mt-3 p-2 shadow-sm shadow-gray-900 bg-base-100 rounded-box w-52"
                    >
                        <li className="opacity-50 pointer-events-none border-b border-gray-500">
                            <Link to="#">Categories</Link>
                        </li>
                        <li>
                            <Link to="#">Classics</Link>
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
                        <div className="flex ">
                            <input
                                type="search"
                                placeholder="Search Here"
                                class="md:hidden input w-[300px] max-w-xs shadow-sm shadow-slate-900 rounded-lg"
                            />
                        </div>
                    </ul>
                </div>
            </div>
            <div class="navbar-center">
                <Link to="/" class="btn btn-ghost normal-case text-xl">
                    BookShop
                </Link>
            </div>
            <div class="navbar-end">
                <div className="hidden md:flex">
                    <input
                        type="search"
                        placeholder="Search Here"
                        class={`input w-[300px] max-w-xs shadow-sm shadow-slate-900 rounded-lg  ${
                            openSearch ? "" : "hidden"
                        } `}
                    />
                    <button
                        class="btn btn-ghost btn-circle"
                        onClick={() => {
                            setOpenSearch(!openSearch);
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </button>
                </div>
                <button class="btn btn-ghost btn-circle">
                    <div class="indicator">
                        <MdOutlineShoppingCart fontSize={"22px"} />
                    </div>
                </button>
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle">
                        <MdOutlinePersonOutline fontSize={"24px"} />
                    </label>
                    <ul
                        tabindex="0"
                        class="menu menu-compact dropdown-content mt-3 p-2 shadow-sm shadow-gray-900 bg-base-100 rounded-box w-52"
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
