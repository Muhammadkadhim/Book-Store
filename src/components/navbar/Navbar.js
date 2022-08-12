import { MdOutlinePersonOutline, MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import NavLinks from "./Menu";

export default function Navbar() {
    return (
        <div className="navbar bg-base-100 z-50 fixed top-0 left-0  px-10">
            <div className="navbar-start">
                <NavLinks />
            </div>
            <div className="navbar-center">
                <Link to="/" className="btn btn-ghost normal-case text-xl">
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
                    <label tabIndex="0" className="btn btn-ghost btn-circle">
                        <MdOutlinePersonOutline fontSize={"24px"} />
                    </label>
                    <ul
                        tabIndex="0"
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow-xl  bg-base-300 rounded-lg w-52"
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
