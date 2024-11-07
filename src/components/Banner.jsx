import { useNavigate } from "react-router-dom";


const Banner = () => {

    const navigate = useNavigate()
    const goToDashboard =() =>{
        navigate('/dashboard')
    }
    return (
        <div className="mb-20 px-3 lg:px-0 ">
            <div className="bg-[#9538E2] -mt-20 rounded-2xl">
                <div className=" container mx-auto text-white pt-32 pb-36 lg:pb-44 ">
                    <div className="hero-content text-center">
                        <div className="lg:w-3/4 px-5">
                            <h1 className=" text-3xl lg:text-5xl font-bold leading-tight">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                            <p className="py-6 lg:px-20">
                                Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!.
                            </p>
                            <button onClick={goToDashboard} className="rounded-full px-10 py-4 bg-white font-bold textColor">Shop Now</button>
                        </div>
                    </div>

                </div>

            </div>
            
            <div className="flex justify-center px-6 md:px-0 -mt-28 lg:-mt-40">
                    <img src="https://i.ibb.co.com/H4KK7Hx/Frame-8.png" alt="" />
                </div>
        </div>

    );
};

export default Banner;