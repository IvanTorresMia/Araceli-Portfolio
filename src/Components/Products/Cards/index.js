import React from "react";

const Cards = ({ img, title, description, name }) => {
  return (
    <div>
      <div className="card mb-3 product-cards col">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={img} className="card-img" alt={name} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">
                {description}
              </p>
              <p className="card-text">
                <small className="text-muted">{name}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
