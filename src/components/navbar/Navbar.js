import { MdOutlinePersonOutline, MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logout as logoutAction } from "../../redux/userSlice";
import NavLinks from "./Menu";
import { logo } from "../../assets/";
import { useState } from "react";
import { useEffect } from "react";

export default function Navbar() {
    const dispatch = useDispatch();
    let isAuthorized = useSelector((state) => state.user.isAuthorized);

    const [user, setUser] = useState("");

    useEffect(() => {
        const parsedUser = JSON.parse(localStorage.getItem("user"));
        setUser(parsedUser.username);
    }, [isAuthorized]);

    return (
        <div className="navbar bg-base-100 z-50 fixed top-0 left-0  px-5">
            <div className="navbar-start">
                <NavLinks />
            </div>
            <div className="navbar-center">
                <Link
                    to="/"
                    className="btn btn-ghost normal-case text-xl flex gap-2"
                >
                    <img src={logo} alt="logo" className="w-6 object-contain" />
                    KitabStore
                </Link>
            </div>
            <div className="navbar-end">
                <div className="hidden md:flex">
                    <Link to="/search" className="btn btn-ghost btn-circle">
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
                    </Link>
                </div>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <MdOutlineShoppingCart fontSize={"22px"} />
                    </div>
                </button>
                <div className="dropdown dropdown-end">
                    {isAuthorized ? (
                        <div
                            tabIndex="0"
                            class="avatar placeholder btn btn-ghost btn-circle"
                        >
                            <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
                                <span>{user.charAt(0)}</span>
                            </div>
                        </div>
                    ) : (
                        <label
                            tabIndex="0"
                            className="btn btn-ghost btn-circle"
                        >
                            <MdOutlinePersonOutline fontSize={"24px"} />
                        </label>
                    )}

                    <ul
                        tabIndex="0"
                        className={`menu menu-compact dropdown-content mt-3 p-2 shadow-xl  bg-base-300 rounded-lg w-52 ${
                            isAuthorized ? "hidden" : ""
                        }`}
                    >
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </ul>
                    <ul
                        tabIndex="0"
                        className={`menu menu-compact dropdown-content mt-3 p-2 shadow-xl  bg-base-300 rounded-lg w-52 ${
                            isAuthorized ? "" : "hidden"
                        }`}
                    >
                        <li>
                            <Link
                                to="/login"
                                onClick={() => {
                                    dispatch(logoutAction());
                                }}
                            >
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
