import React, { useContext } from "react";
import CardContext from "../../context";
import Cards from "./Cards";

const Products = () => {
  const context = useContext(CardContext);
  return (
    <div className="container products-container">
        <h2>Ejemplos de Productos</h2>
      <div className="row card-container">
        {context.map((data, i) => (
          <Cards
            img={data.img}
            description={data.description}
            name={data.name}
            title={data.title}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
