/* eslint-disable react/prop-types */
import { Link,  } from "react-router-dom";


const Card = ({ gadget }) => {
    const { id, title, image,  price } = gadget || {}
    return (
        <div>
            <div className="card bg-white shadow-xl">
                <figure className="px-4 pt-4">
                    <img
                        src={image}
                        alt="Gadget"
                        className="rounded-xl w-full h-[200px]" />
                </figure>
                <div className="card-body items-start text-center">
                    <h2 className="card-title font-bold">{ title}</h2>
                    <p className="text-md font-semibold text-gray-500">Price : {price}</p>
                    <div className="card-actions">
                        <Link to={`/gadget/${id}`} className="rounded-full px-6 py-2 border border-[#9538E2] font-bold textColor">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;