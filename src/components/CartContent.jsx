/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import { getAddedToCart, removeItem } from "../utility";

import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const CartContent = () => {


    const [gadget, setGadget] = useState([])
    const [totalCost, setTotalCost] = useState(0);
    // Modal 
    const [isModalOpen, setIsModalOpen] = useState(false);
    // Modal close and redirect to Home
    const navigate = useNavigate()

    useEffect(() => {
        const cartData = getAddedToCart()
        setGadget(cartData)
        updateTotalCost(cartData);

    }, [])

    // Remove item from cart
    const handleRemove = id => {
        removeItem(id)
        const cartData = getAddedToCart()
        setGadget(cartData)
        updateTotalCost(cartData);
    }

    // Calculate and update the total cost
    const updateTotalCost = (gadgetList) => {
        const total = gadgetList.reduce((sum, item) => sum + item.price, 0);
        setTotalCost(total);
    };

    // Sort items by price
    const sortByPrice = () => {
        const sortedGadgets = [...gadget].sort((a, b) => b.price - a.price);
        setGadget(sortedGadgets);
    };

    // Purchase Button handler for modal
    const handlePurchase = () => {
        setIsModalOpen(true);
        setGadget([]); 
        setTotalCost(0); 
    };

    // Close Modal
    const closeModal = () => {
        setIsModalOpen(false);
        navigate('/')
    };

    
    // const redirectHome = ()=> {
        
    // }

    return (
        <div>
            
            <div className=" px-6 md:px-16">
                <div className="container mx-auto flex justify-between items-center mt-5">
                    <div>
                        <h2 className="font-bold text-xl">Cart</h2>
                    </div>

                    <div className="flex items-center gap-1 md:gap-3">
                        <h2 className=" text-xs md:text-lg font-semibold">Total Cost : {totalCost} </h2>
                        <button onClick={sortByPrice} className="text-xs md:text-lg px-2 md:px-5 py-2 rounded-full border textColor font-semibold border-[#9538E2]">Sort by Price <i className="fa-solid fa-arrow-up-a-z"></i> </button>

                        <button onClick={handlePurchase} className="text-xs md:text-lg px-2 md:px-5 py-2 rounded-full border font-semibold text-white bg-[#9538E2]">Purchase</button>
                    </div>
                </div>

            </div>

            {/* 
            <div className="container mx-auto gap-4">
                {
                    gadget.map(gadget => ( <CartItem handleRemove={handleRemove} key={gadget.id} gadget={gadget}></CartItem> ))
                }
            </div> */}

            <div className="container mx-auto gap-4 pb-20">
                {gadget.length > 0 ? (
                    gadget.map(gadget => (
                        <CartItem handleRemove={handleRemove} key={gadget.id} gadget={gadget}></CartItem>
                    ))
                ) : (
                    <p className="text-center mt-5 font-bold">Your cart is empty.</p>
                )}
            </div>

            {/* Modal  */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg text-center w-96 ">
                        <div className="flex justify-center">
                            <img src="https://i.ibb.co.com/TPwGzZN/Group.png" alt="" />
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Payment Successfully!</h2>
                        <hr />
                        <p className="mt-4">Your purchase was successful!</p>
                        <p> <span className="text-green-400 font-bold">Thanks</span> for Your purchasing</p>
                        <button onClick={closeModal} className="mt-5 px-4 py-2 bg-[#9538E2] text-white font-semibold rounded-full">
                            Close
                        </button>
                    </div>
                </div>
            )}



        </div>
    );
};

export default CartContent;