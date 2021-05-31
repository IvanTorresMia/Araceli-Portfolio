import { ButtonBase } from "@material-ui/core";
import React, { useEffect } from "react";
import Image from "../../assets/araceli2.jpg";

const AboutMe = () => {

  useEffect(() => {
    const aboutMeItems = document.querySelectorAll(".fade-in");

      aboutMeItems.forEach(item => {
        let top = item.getBoundingClientRect().top
        if (top < window.innerHeight -50) {
          item.classList.add("fade-in-up")
        }
      })

  }, [])

  return (
    <div className="container">
      <div className="about-me row">
        <div className="col aboutme-section">
          <div className="Card">
            <div className="card-header">
              <h2 className="fade-in">Quien Soy?</h2>
            </div>
            <div className="card-body">
              <p className="card-text fade-in">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil, eveniet aliquid culpa
                officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia.
                Quo neque error repudiandae fuga?
              </p>
              <button className="btn btn-dark">facebook</button>
            </div>
          </div>
        </div>
        <div className="col img-container">
          <img className="fade-in" src={Image} alt="about me" />
          <h3 className="card-title fade-in">Araceli Mia</h3>
          <p className="fade-in">Vendedora De Productos</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
