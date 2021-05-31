import React from 'react';

const Cards = ({ img, name, testimony }) => {

    return (
        <div className="testi-cards">
         <img src={img} alt={name} />
         <p>{testimony}</p>
         <h4>{name}</h4>
        </div>
    )
}

export default Cards;