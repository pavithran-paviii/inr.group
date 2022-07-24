import React from "react";
import caja from "../assets/svg/caja-icon.svg";
import planta from "../assets/svg/planta-icon.svg";

export const Tipscontainer = () => {
  return (
    <div id="tips-container">
      <img src={caja} alt="" id="caja-icon" />
      <img src={planta} alt="" id="planta-icon" />
      <div id="tips-inner-container">
        <div>
          <h4 className="tips-content">Como ahorrar</h4>
          <p id="tips-para" className="tips-content">
            Activa este método para realizar ahorros y verifica los procesos que
            te beneficien
          </p>
          <button id="tips-btn">SEND TIPS</button>
        </div>
      </div>
    </div>
  );
};
