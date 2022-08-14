import React, { useState } from "react";
import { Link } from "react-router-dom";
import { pages, categories } from "../../constants/";
import {
    MdClose,
    MdNotes,
    MdKeyboardArrowDown,
    MdKeyboardArrowUp,
} from "react-icons/md";

const Menu = () => {
    const [menu, setMenu] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const dropdownToggler = (e) => {
        let menu = e.target.nextElementSibling;
        menu.classList.toggle("hidden");
    };

    return (
        <>
            <div className="z-50">
                <div className="px-3 text-left  group">
                    <button
                        onClick={() => {
                            setMenu(!menu);
                        }}
                    >
                        {" "}
                        <MdNotes style={{ fontSize: "24px" }} />
                    </button>
                </div>
                <div
                    id="drawer-example"
                    className={`${
                        menu
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-[100%] opacity-0"
                    }  absolute top-0 left-0 right-0 w-full md:w-96  z-40 h-screen p-4 overflow-y-auto bg-base-100 shadow-2xl   transition-all duration-500`}
                    tabIndex="-1"
                    aria-labelledby="drawer-label"
                >
                    <button
                        type="button"
                        data-drawer-dismiss="menu"
                        aria-controls="menu"
                        aria-label="open menu"
                        className="text-gray-200 bg-transparent  hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center"
                        onClick={(e) => {
                            setMenu(!menu);
                        }}
                    >
                        <MdClose style={{ fontSize: "24px" }} />
                        <span className="sr-only">Close menu</span>
                    </button>
                    <div className="w-full h-fit py-10  flex flex-col gap-5">
                        <span className="text-xs text-slate-400">Menu</span>
                        {/* redering pages */}
                        <div className="w-full">
                            <button
                                data-dropdown-toggle="dropdown"
                                className=" w-full flex justify-between text-white bg-base-300  font-medium rounded-lg text-sm px-4 py-2.5 text-center  items-center "
                                type="button"
                                onClick={(e) => {
                                    dropdownToggler(e);
                                    setDropdownOpen(!dropdownOpen);
                                }}
                            >
                                Pages
                                {dropdownOpen ? (
                                    <span className=" pointer-events-none">
                                        <MdKeyboardArrowUp
                                            style={{ fontSize: "22px" }}
                                        />
                                    </span>
                                ) : (
                                    <span className=" pointer-events-none">
                                        <MdKeyboardArrowDown
                                            style={{ fontSize: "22px" }}
                                        />
                                    </span>
                                )}
                            </button>
                            <div className="hidden mt-2 z-10 w-full text-left bg-base-300 text-slate-200 rounded-lg shadow ">
                                <ul
                                    className="py-1 text-sm"
                                    aria-labelledby="dropdownDefault"
                                >
                                    {pages.map((page, index) => {
                                        return (
                                            <li
                                                onClick={() => {
                                                    setMenu(!menu);
                                                }}
                                                key={index}
                                            >
                                                <Link
                                                    to={`/${page.url}`}
                                                    className="block py-2 px-4 hover:bg-slate-900  focus:bg-slate-900"
                                                >
                                                    {page.txt}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>

                        <span className="text-xs text-slate-400">
                            Categories
                        </span>

                        {/* redering categories */}
                        {categories.map((category, index) => {
                            return (
                                <div className="w-full" key={index}>
                                    <button
                                        data-dropdown-toggle="dropdown"
                                        className=" w-full flex justify-between text-slate-100 bg-base-300  font-medium rounded-lg text-sm px-4 py-2.5 text-center  items-center "
                                        type="button"
                                        onClick={(e) => {
                                            dropdownToggler(e);
                                            setDropdownOpen(!dropdownOpen);
                                        }}
                                    >
                                        {category.title}
                                        {dropdownOpen ? (
                                            <span className=" pointer-events-none">
                                                <MdKeyboardArrowUp
                                                    style={{ fontSize: "22px" }}
                                                />
                                            </span>
                                        ) : (
                                            <span className=" pointer-events-none">
                                                <MdKeyboardArrowDown
                                                    style={{ fontSize: "22px" }}
                                                />
                                            </span>
                                        )}
                                    </button>
                                    <div className="hidden mt-2 z-10 w-full text-left bg-base-300 text-slate-200 rounded-lg shadow ">
                                        <ul
                                            className="py-1 text-sm"
                                            aria-labelledby="dropdownDefault"
                                        >
                                            {category.subCategory.map(
                                                (sCategory, index) => {
                                                    return (
                                                        <li
                                                            onClick={() => {
                                                                setMenu(!menu);
                                                            }}
                                                            key={index}
                                                        >
                                                            <Link
                                                                to={`${sCategory.url}`}
                                                                className="block py-2 px-4 hover:bg-slate-900  focus:bg-slate-900"
                                                            >
                                                                {sCategory.txt}
                                                            </Link>
                                                        </li>
                                                    );
                                                }
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Menu;
