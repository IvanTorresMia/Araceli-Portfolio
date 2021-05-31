import React from "react";
import Hero from "../../Components/Hero";
import Products from "../../Components/Products";
import CardData from "../../CardData";
import CardContext from "../../context";
import Testimonials from "../../Components/Testimonials";

function Home() {
  return (
    <div>
      <Hero />
      <CardContext.Provider value={CardData}>
        <Products />
      </CardContext.Provider>
      <Testimonials />
    </div>
  );
}
export default Home;
