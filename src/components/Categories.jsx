/* eslint-disable react/prop-types */
import {  NavLink } from "react-router-dom";


const Categories = ({categories}) => {
    return (
        <div className="container w-12/12 mx-auto  mb-20">
            
            <div role="tablist" className="lg:items-start mx-4 lg:mx-0 lg:ml-20
             tabs tabs-boxed border border-gray-300 bg-white p-5 rounded-xl space-y-3 flex flex-wrap md:flex-nowrap lg:flex-col  lg:w-[250px]">
                
                {
                    categories.map(category=> (
                    <NavLink
                         key={category.category} to={`/category/${category.category}`} role="tab" 
                         className={({isActive})=> `tab w-full h-12 !rounded-full font-semibold bg-gray-200 hover:bg-[#4b39f5] hover:text-white ${isActive ? 'tab-active' : ''}`}>{category.category}
                    </NavLink> ))
                }

                
            </div>
        </div>
    );
};

export default Categories;
