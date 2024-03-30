import React from 'react';
import Company from "./Company";

const Data = ({ data }) => {
    return (
        <div className="data-container">
            {data.map((item) => (
                <Company
                    name={item.name}
                    company={item.company}
                    category={item.category}
                    price={item.price}
                    rating={item.rating}
                    discount={item.discount}
                    availability={item.availability}
                />
            ))}
        </div>
    );
}

export default Data;
