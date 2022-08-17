import { MdEmail, MdLock } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login as loginAction } from "../../redux/userSlice";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isAuthorized = useSelector((state) => state.user.isAuthorized);
    const message = useSelector((state) => state.user.message);

    const { register, handleSubmit } = useForm();

    const onSubmit = (payload) => {
        dispatch(loginAction(payload));
    };

    useEffect(() => {
        if (isAuthorized) {
            navigate("/");
        }
    });

    return (
        <>
            <div className="text-sm breadcrumbs w-10/12 mx-auto">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>Login</li>
                </ul>
            </div>
            <div className="p-8 lg:w-1/2 mx-auto ">
                <div className="bg-gray-700 rounded-t-lg p-8">
                    <p className="text-center text-sm text-gray-400 font-light">
                        Sign in with
                    </p>
                    <div>
                        <div className="flex items-center justify-center space-x-4 mt-3">
                            <button className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 mr-3"
                                    viewBox="0 0 48 48"
                                >
                                    <path
                                        fill="#fbc02d"
                                        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                                    />
                                    <path
                                        fill="#e53935"
                                        d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
                                    />
                                    <path
                                        fill="#4caf50"
                                        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                                    />
                                    <path
                                        fill="#1565c0"
                                        d="M43.611 20.083 43.595 20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                                    />
                                </svg>
                                Google
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-600 rounded-b-lg py-12 px-4 lg:px-24">
                    <p className="text-center text-sm text-gray-100 font-light">
                        Or sign in with credentials
                    </p>
                    <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
                        <div className="relative">
                            <input
                                className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Email"
                                {...register("email", { required: true })}
                            />
                            <div className="absolute left-0 inset-y-0 flex items-center">
                                <div className="h-7 w-7 ml-3 text-gray-400 p-1">
                                    <MdEmail fontSize={"22px"} />
                                </div>
                            </div>
                        </div>
                        <div className="relative mt-3">
                            <input
                                className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Password"
                                {...register("password", { required: true })}
                            />
                            <div className="absolute left-0 inset-y-0 flex items-center">
                                <div className="h-7 w-7 ml-3 text-gray-400 p-1">
                                    <MdLock fontSize={"22px"} />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center mt-8">
                            <button className="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                                Sign in
                            </button>
                            <p className="text-sm text-red-400 mt-4 ">
                                {message}
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
