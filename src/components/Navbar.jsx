/* eslint-disable no-unused-vars */
import { NavLink, useLocation } from "react-router-dom";


const Navbar = () => {
    const location = useLocation()

    // Dashboard 
    const sectionBackgroundClass =
        location.pathname === "/dashboard" ? "bg-white pt-5 pb-2" : "transfarent";

    const textColorClass =
        location.pathname === "/dashboard" ? "textColor font-bold" : "text-white";

    // Dashboard/cart 
    const sectionBackground =
        location.pathname === "/dashboard/cart" ? "bg-white pt-5 pb-2" : "transfarent";

    const textColors =
        location.pathname === "/dashboard/cart" ? "textColor font-bold" : "text-white";

    // Statistics 
    const stastisticBg =
        location.pathname === "/statistics" ? "bg-white pt-5 pb-2" : "transfarent";

    const stastisticText =
        location.pathname === "/statistics" ? "textColor font-bold" : "text-white";

    // Track Order 
    const trackBg =
        location.pathname === "/track" ? "bg-white pt-5 pb-2" : "transfarent";

    const trackText =
        location.pathname === "/track" ? "textColor font-bold" : "text-white";

    // Wish List
    const wishBg =
        location.pathname === "/dashboard/wishlist" ? "bg-white pt-5 pb-2" : "transfarent";

    const wishText =
        location.pathname === "/dashboard/wishlist" ? "textColor font-bold" : "text-white";

    // Gadget Details 



    const links = <>
        <li><NavLink className={`${textColorClass} ${textColors} ${stastisticText} ${trackText} ${wishText}`} to="/">Home</NavLink></li>
        <li><NavLink className={`${textColorClass} ${textColors} ${stastisticText} ${trackText} ${wishText}`} to="/statistics">Statistics</NavLink></li>
        <li><NavLink className={`${textColorClass} ${textColors} ${stastisticText} ${trackText} ${wishText}`} to="/dashboard">Dashboard</NavLink></li>
        <li><NavLink className={`${textColorClass} ${textColors} ${stastisticText} ${trackText} ${wishText}`} to="/track">Track Order</NavLink></li>


    </>



    return (
        <div className={`pt-10   ${sectionBackgroundClass} ${sectionBackground} ${stastisticBg} ${trackBg} ${wishBg}`}>
            <div className="container navbar  mx-auto  lg:w-11/12 text-white md:px-16 lg:px-10 ">
                <div className="navbar-start ml-4 md:ml-0">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn text-white border-none bg-purple-700 mr-3 lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-purple-500 text-white rounded-box z-[1] mt-3 w-60 ml-5 p-2 shadow">
                            {/* Dynamic List items */}
                            {links}
                        </ul>
                    </div>
                    <NavLink to='/' className={`text-lg md:text-xl  cursor-pointer font-semibold ${textColorClass} ${textColors} ${stastisticText} ${trackText} ${wishText} `}>Gadget Heaven</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {/* Dynamic List items */}
                        {links}
                    </ul>
                </div>
                <div className="navbar-end pr-3 md:pr-0">

                    <button className=" flex">
                        <i className="fa-solid fa-cart-shopping border border-[#9538E2] bg-white rounded-full p-4 text-black"></i>
                        <span className="text-white font-semibold border border-[#9538E2] textColor bg-white w-6 h-6 rounded-full -ml-4">0</span>
                    </button>

                    <button className="ml-2 md:ml-4 flex">
                        <i className="fa-regular fa-heart border border-[#9538E2] bg-white rounded-full p-4 text-black"></i>
                        <span className="text-white font-semibold border border-[#9538E2] textColor bg-white w-6 h-6 rounded-full -ml-4">0</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;