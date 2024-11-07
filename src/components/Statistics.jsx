import { Helmet } from "react-helmet-async";


const Statistics = () => {
    return (
        <div >
            <Helmet>
                <title>Statistics | Gadget Heaven</title>
            </Helmet>
            <div className=" bg-[#9538E2] pb-10 text-center pt-10">
                <h2 className="text-3xl font-bold text-white ">Statistics</h2>
                <p className=" text-white mt-5 px-10 md:px-28 lg:px-72">explore the latest gadgets that will take your experience to the next level. from smart device to coolest accessories , we have it all.</p>

            </div>

            <div className="container mx-auto px-6 md:px-16" >
                <h2 className="font-bold text-2xl textColor mt-5">Statistics</h2>
                <div className="flex justify-center py-10">
                    <img src="https://i.ibb.co.com/Dw4JGVH/Frame-2087325590.png" alt="" className="w-full border border-[#9538E2] rounded-xl" />
                    
                </div>
            </div>
        </div>
    );
};

export default Statistics;