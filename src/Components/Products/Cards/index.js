import React from "react";

const Cards = ({ img, title, description, name }) => {
  return (
    <div className="product-cards fade-in">
      <div className="img-con">
        <img src={img} alt={name} />
      </div>
      <div className="card-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="Card-footer">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Cards;
