import toast from "react-hot-toast";

const getAddedToCart = ()=> {
    const all = localStorage.getItem('addToCart')
    if(all){
        const addToCart = JSON.parse(all)
        
        return addToCart

    }else{
        return []
    }
}

const addCart = gadget => {
  
    const addToCart = getAddedToCart()
    const isExist = addToCart.find(item => item.id == gadget.id)
    if(isExist) return toast.error('This item already Exist! in Cart');

    addToCart.push(gadget)
    localStorage.setItem('addToCart', JSON.stringify(addToCart) )
    toast.success('Item Added Successfully!');
}

const removeItem = id => {
    const addToCart = getAddedToCart()
    const remaining = addToCart.filter(gadget => gadget.id != id)
    localStorage.setItem('addToCart', JSON.stringify(remaining) )
    toast.success('Successfully! Remove Item  ');
}

//---------------------------Wishlist-----------------------------------

// Get all wishlist 
const getWishlist = () => {
    const all = localStorage.getItem('wishlist')

    if(all){
        const wishList = JSON.parse(all)
        return wishList
    }else{
        return []
    }
}


// Add wishlist 
const addWishlist = gadget =>{

    const wishList = getWishlist()
    const isExist = wishList.find(item => item.id == gadget.id)
    if(isExist) return toast.error('This item already Exist! in Wishlist');

    wishList.push(gadget)
    localStorage.setItem('wishlist', JSON.stringify(wishList))
    toast.success('Item Successfully! Added in Wishlist');
}

export {addCart , getAddedToCart, removeItem, addWishlist, getWishlist}