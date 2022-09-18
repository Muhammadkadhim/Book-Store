import {
    MdFavoriteBorder,
    MdOutlinePersonOutline,
    MdOutlineShoppingCart,
} from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import NavLinks from "./Menu";
import { logo } from "../../assets/";
import { useDispatch, useSelector } from "react-redux";
import { logout as logoutAction } from "../../redux/userSlice";

export default function Navbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const authorized = useSelector((state) => state.user.authorized);
    const userInfo = useSelector((state) => state.user.userInfo);

    const logoutHandler = () => {
        dispatch(logoutAction());
        navigate("/login");
    };

    return (
        <div className="navbar bg-slate-800 z-50 fixed top-0 left-0  px-5">
            <div className="navbar-start">
                <NavLinks />
            </div>
            <div className="navbar-center">
                <Link
                    to="/"
                    className="btn btn-ghost normal-case text-xl flex gap-2 text-white"
                >
                    <img src={logo} alt="logo" className="w-6 object-contain" />
                    KitabStore
                </Link>
            </div>
            <div className="navbar-end">
                <div className="hidden md:flex ">
                    <Link
                        to="/search"
                        className="btn btn-ghost btn-circle text-white"
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
                    </Link>
                </div>
                <button className="btn btn-ghost btn-circle text-white">
                    <Link to="/favourites" className="indicator">
                        <MdFavoriteBorder fontSize={"22px"} />
                    </Link>
                </button>
                <button className="btn btn-ghost btn-circle text-white">
                    <Link to="/cart" className="indicator">
                        <MdOutlineShoppingCart fontSize={"22px"} />
                    </Link>
                </button>
                <div className="dropdown dropdown-end">
                    {authorized ? (
                        <>
                            <label
                                tabIndex="0"
                                className="btn btn-ghost btn-circle text-white"
                            >
                                <MdOutlinePersonOutline fontSize={"24px"} />
                            </label>
                            <ul
                                tabIndex="0"
                                className="menu menu-compact dropdown-content  mt-3 p-2 shadow-xl text-white  bg-slate-800 rounded-lg w-fit"
                            >
                                <li>
                                    username: {userInfo && userInfo.username}
                                </li>
                                <li>email: {userInfo && userInfo.email}</li>
                                <li className="flex items-center border-t mt-2">
                                    <button
                                        className="w-full grid place-content-center"
                                        onClick={logoutHandler}
                                    >
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </>
                    ) : (
                        <Link
                            to="/login"
                            className="btn btn-ghost btn-circle text-white"
                        >
                            <MdOutlinePersonOutline fontSize={"24px"} />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
