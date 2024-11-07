// import { useEffect, useState } from "react";
// import {  useLoaderData } from "react-router-dom";
// import { getStoredCartList } from "../utility/addToLS";
// import Card from "./Card";



const CartList = () => {
    // const [cart, setCart] = useState([])
    // const allData = useLoaderData()
    
    
    // useEffect(()=> {
        
    //     const storeCartList = getStoredCartList();
    //     const storeCartListInt = storeCartList.map(id => parseInt(id));

    //     const addCartList = allData.filter(item => storeCartListInt.includes(item.id));
    //     setCart(addCartList)
    // },[allData])

    return (
        <div>
            

            {/* <div className="px-24">
                
                <div>
                    Total cart : {cart.length}

                    {
                        cart.map(item => <Card key={cart.id} cart={item} ></Card>)
                    }

                    
                </div>
            </div> */}
        </div>
    );
};

export default CartList;