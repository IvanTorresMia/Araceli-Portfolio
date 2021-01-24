import React from "react";
import './style.css'
function Health() {
  return (
    <div className="health">
      <div className="row">
        <div className="col">
      <h1 className="heading">Porque me dedico a la salud?</h1>
      <hr />
      <p>Muchos tenemos sueños y differentes visiones que queremos ver pasar
      Yo estoy aqui para que puedas vivir para ver pasar esos sueños</p>
      <br />
      <div className="row">
      <table className="col">
        <thead className="">Importancias De la salud</thead>
        <td className="row tableItem">Tener salud tambien</td>
        <td className="row tableItem">Tener Salud en casa</td>
        <td className="row tableItem">Tener Salud en casa</td>
        <td className="row tableItem">Tener Salud en casa</td>
      </table>
      <table className="col">
        <thead className="tableHeading">Importancias De la salud</thead>
        <td className="row tableItem">Tener salud tambien</td>
        <td className="row tableItem">Tener Salud en casa</td>
        <td className="row tableItem">Tener Salud en casa</td>
        <td className="row tableItem">Tener Salud en casa</td>
      </table>
      </div>
      </div>
      <div className="col">
          <img className="family-image" src="https://c1.wallpaperflare.com/preview/683/135/639/health-insurance-healthcare-insurance-problem.jpg" alt="happy family"/>
          </div>
      </div>
    </div>
  );
}

export default Health;


