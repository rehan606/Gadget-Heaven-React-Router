import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Categories from "./Categories";
import Heading from "./Heading";
import { Helmet } from "react-helmet-async";



const Home = () => {
    const categories = useLoaderData()
    return (
        <div className="" >
            <Helmet>
                <title>Home | Gadget Heaven</title>
            </Helmet>
            <Banner></Banner>
            <Heading></Heading>
            <div className="lg:flex lg:gap-4 pb-28" >
                <div >
                    <Categories categories={categories}></Categories>
                </div>
                <div >
                    <Outlet></Outlet>
                </div>
            </div>
            
            

        </div>
    );
};

export default Home;