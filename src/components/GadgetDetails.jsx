/* eslint-disable react/jsx-no-duplicate-props */
import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { addCart, addWishlist, getWishlist } from "../utility";

// import {  addToStoredCartList } from "../utility/addToLS";



const GadgetDetails = () => {
    const data = useLoaderData()
    const { id } = useParams()
    const [gadget, setGadget] = useState({})
    const [wishIcon, setWishIcon] = useState(false)

    useEffect(() => {
        const singleGadget = data.find(gadget => gadget.id == id)
        setGadget(singleGadget)

        const disableWishIcon = getWishlist()
        const isExist = disableWishIcon.find(item => item.id == singleGadget.id)
        if(isExist){
            setWishIcon(true)
        }
    }, [data, id])

    const { title, image, price, description, Specification, availability, rating } = gadget || {}

    // Add To cart handler 
    const handleAddToCart = (gadget) => {
        addCart(gadget)
    }

    // Wishlist handler 
    const handleWishlist = (gadget)=> {
        addWishlist(gadget)
        // icon Desable 
        setWishIcon(true)
    }
    

    
    

    return (
        <div className="" >
            <div className=" bg-[#9538E2] pb-52 text-center pt-10">
                <h2 className="text-3xl font-bold text-white ">Product Details</h2>
                <p className=" text-white mt-5 px-10 md:px-36 lg:px-72">explore the latest gadgets that will take your experience to the next level. from smart device to coolest accessories , we have it all.</p>
            </div>

            <div className="container w-11/12 mx-auto px-4 mb-20 -mt-40">

                <div className="flex flex-col md:flex-row gap-7 border rounded-3xl bg-white p-7 items-center">
                    <div className="w-full lg:w-5/12 md:p-3 lg:p-10 border rounded-2xl bg-gray-200">
                        <img src={image} alt="" className="rounded-xl md:h-96" />
                    </div>

                    <div className=" w-full lg:w-7/12 ">
                        <h2 className="text-2xl font-bold textColor">{title}</h2>
                        <p className="font-bold text-gray-500 mb-4 mt-4">Price : {price} </p>
                        <div className="mt-4 mb-4">
                            <span className="px-4 py-2 bg-green-300 border border-green-600 rounded-full">in Stock {availability} </span>
                        </div>
                        <p> {description}</p>

                        <ul className="mt-4 mb-4">
                            <h2 className="font-bold mb-2">Specification :</h2>
                            {
                                Specification && Specification.map(item => (<li className="list-decimal ml-7 font-semibold text-gray-600" key={item}>{item}</li>))
                            }
                        </ul>

                        <p className="font-bold"> Rating: <i className="fa-solid fa-star text-yellow-300"></i></p>

                        <div className="flex items-center ">
                            <i className="fa-solid fa-star text-yellow-300"></i>
                            <i className="fa-solid fa-star text-yellow-300"></i>
                            <i className="fa-solid fa-star text-yellow-300"></i>
                            <i className="fa-solid fa-star text-yellow-300"></i>
                            <i className="fa-solid fa-star-half-stroke text-yellow-300"></i>

                            <p className=" px-3 py-1 ml-4 bg-gray-200 rounded-xl text-white font-semibold border border-[#9538E2] textColor">{rating}</p>
                        </div>

                        <div className="mt-5 mb-4 flex items-center">
                            <Link  onClick={()=> handleAddToCart(gadget)} className="px-6 py-3  rounded-full text-white font-semibold bg-[#9538E2]"> Add to Cart <i className="fa-solid fa-cart-shopping"></i> </Link>

                            <button disabled={wishIcon} onClick={()=> handleWishlist(gadget)}  className="btn  w-12 h-10 p-2 ml-4 group rounded-full  hover:bg-[#9538E2]  font-semibold border border-[#9538E2]">  <i className="fa-regular fa-heart text-xl textColor group-hover:text-white leading-none "></i> </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetDetails;