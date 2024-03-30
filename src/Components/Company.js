import React from 'react';
import './Company.css'; 

const Company = ({
  name,
  company,
  category,
  price,
  rating,
  discount,
  availability
}) => {
    
    return (
        <div className='card'>
            <h1>{name}</h1>
            <h2>{company}</h2>
            <p><b>Category: </b> {category} </p>
            <p><b>Price: </b> ${price}</p>
            <p><b>Rating: </b> {rating}/5</p>
            <p><b>Discount: </b>{discount}</p>
            <p><b>Availability: </b>{availability}</p>
        </div>    
    )
};

export default Company;
