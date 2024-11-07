// /* eslint-disable no-undef */
// import { useEffect, useState } from "react";
// import { getAddedToCart, removeItem } from "../utility";
// import Card from "./Card";
// import CartItem from "./CartItem";

import { Outlet, useLocation, useNavigate } from "react-router-dom";
import CartContent from "./CartContent";
import { useState } from "react";
import { Helmet } from "react-helmet-async";


const Dashboard = () => {

    const navigate = useNavigate();
    const location = useLocation()

    const [activeTab, setActiveTab] = useState("cart");

    const showCartContent = ()=> {
        setActiveTab("cart")
        navigate('/dashboard/cart')
    }

    const showWishContent = () => {
        setActiveTab("wishlist")
        navigate('/dashboard/wishlist')
    }
    

    return (
        <div>
            <Helmet>
                <title>Dashboard | Gadget Heaven</title>
            </Helmet>

            <div className=" bg-[#9538E2] pb-10 text-center pt-10">
                <h2 className="text-3xl font-bold text-white ">Dashboard</h2>
                <p className=" text-white mt-5 px-10 md:px-36 lg:px-72">explore the latest gadgets that will take your experience to the next level. from smart device to coolest accessories , we have it all.</p>

                <div className="container mx-auto">
                    <div role="tablist" className=" flex justify-center
                 tabs tabs-boxed  bg-transparent mt-10 gap-5 ">
                        <a onClick={showCartContent} role="tab" className={`tab !rounded-full w-40 font-bold ${activeTab === "cart" ? "bg-white text-black" : "border text-white"}`}>Cart</a>
                        
                        <a onClick={showWishContent} role="tab" className={`tab !rounded-full w-40 font-bold ${activeTab === "wishlist" ? "bg-white text-black" : "border text-white"}`}>Wish List</a>
                    </div>
                </div>

            </div>
            
            
            {location.pathname === '/dashboard' ? <CartContent></CartContent> : <Outlet />}
            

            
        </div>
    );
};

export default Dashboard;