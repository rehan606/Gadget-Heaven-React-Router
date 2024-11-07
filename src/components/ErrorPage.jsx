import { useNavigate } from "react-router-dom";


const ErrorPage = () => {
    const navigate = useNavigate()
    const backToHome =()=>{
        navigate('/')
    }
    return (
        <div className="container mx-auto flex justify-center items-center w-full h-screen px-10 lg:px-0">
            <div className=" bg-[#03253E] w-full lg:h-[500px] rounded-xl  flex items-center justify-center gap-3 lg:gap-6 px-10 lg:px-20">
                <div className="lg:w-6/12 p-5 lg:p-10 text-center md:text-start">
                    <h2 className=" text-[60px] md:text-[96px] font-bold text-[#4CD3B2] leading-none">404</h2>
                    <h2 className=" text-lg font-semibold text-[#36a78a]">Internal Server Error</h2>
                    <p className="text-[#237561] text-xs">Someone is resting here, Do Not Disturb.</p>
                    <h2 className="text-gray-300 text-2xl mt-4">Oops! You are Lost.</h2>
                    <p className="text-gray-400 mb-16">This page you are looking for isn't available.  try to search again or go Back</p>

                    <button onClick={backToHome} className="bg-[#4DD2B3] px-7 py-3 font-bold text-white rounded-lg"><i className="fa-solid fa-arrow-left-long mr-3"></i>Go Back</button>
                </div>
                <div className="hidden md:block lg:w-6/12 lg:p-16">
                    <img className="rounded-full border-2 w-80 lg:w-full" src="https://img.freepik.com/premium-photo/digital-illustration-international-internet-day-with-boy-computer-with-planets-back_460232-4524.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;