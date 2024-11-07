/* eslint-disable no-undef */
/* eslint-disable react/prop-types */


const CartItem = ({ gadget , handleRemove}) => {


    const {  title, image, description, price } = gadget || {}
    return (
        <div className="flex flex-col md:flex-row items-center mb-5 bg-white rounded-2xl p-5 gap-5 mt-5 md:mt-10 md:h-52 mx-5 md:mx-14">
            <div className="md:w-4/12 lg:w-2/12  bg-gray-300 p-2 md:p-3 rounded-2xl">
                <img src={image} alt="" className="w-full md:h-[150px] rounded-2xl " />
            </div>

            <div className="md:w-8/12 lg:w-10/12 flex  justify-between">
                <div className=" space-y-4">
                    <h2 className="textColor font-bold text-2xl"> {title}</h2>
                    <p className=" text-gray-400"> {description}</p>
                    <p className="font-bold text-gray-500">Price: {price}</p>
                </div>
                <div className=" rounded-full w-10 h-10 md:-mt-5">
                    <button ><i onClick={()=> handleRemove(id)} className="fa-regular fa-circle-xmark text-2xl text-red-600"></i></button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;