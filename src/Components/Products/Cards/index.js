import React from "react";

const Cards = ({ img, title, description, name }) => {
  return (
    <div className="product-cards col">
      <div className="row">
        <img src={img} alt={name} />
      </div>
      <div className="row card-info">
        <div className="row">
          <h3>{title}</h3>
        </div>
        <div className="row">
          <p>{description}</p>
        </div>
      </div>
      <div className="row Card-footer">
        <span>{name}</span>
      </div>
    </div>
  );
};

export default Cards;
