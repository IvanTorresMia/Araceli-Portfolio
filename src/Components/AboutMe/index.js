import React from "react";
import Image from "../../assets/araceli2.jpg";

const AboutMe = () => {
  return (
    <div className="container">
      <div className="about-me row">
        <div className="col aboutme-section">
          <div class="Card text-center">
            <div class="card-header">
              <h2>Quien Soy?</h2>
            </div>
            <div class="card-body">
              <h4 class="card-title">Araceli Mia</h4>
              <p class="card-text">
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
          <img src={Image} alt="about me" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
