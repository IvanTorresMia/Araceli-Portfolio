import React, { useContext, useEffect } from "react";
import CardContext from "../../context";
import Cards from "./Cards";

const Products = () => {
  const context = useContext(CardContext);

useEffect(() => {
  const buttons = document.querySelectorAll(".cards-container")
 window.addEventListener("scroll", () => {
    buttons.forEach((button) => {
      let top = button.getBoundingClientRect().top

      if (top < window.innerHeight - 50) {
        button.classList.add("fade-in-up")
      }
    })
 })
}, [])

  return (
    <div className="container products-container">
        <h2>Ejemplos de Productos</h2>
      <div className="row cards-container">
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
