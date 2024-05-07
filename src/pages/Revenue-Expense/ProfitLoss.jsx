import React, { useState } from "react";
import RadialProgress from "../../components/Radial/RadialProgress";
import "../../pages/Revenue-Expense/revYearly.scss";
import RadialProgressLossSection from "../../components/Radial/RadialProgressLossSection";

const ProfitLoss = (props) => {
  const [profitClk, setProfitClk] = useState(true);
  const [lossClk, setLossClk] = useState(false);

  const profitToggle = () => {
    setProfitClk(true);
    setLossClk(false);
  };

  const lossToggle = () => {
    setLossClk(true);
    setProfitClk(false);
  };

  return (
    <div className="progress">
      <div className="btns">
        <div className="profit" onClick={profitToggle} >
          Profit
        </div>
        <div className="loss" onClick={lossToggle}>
          Loss
        </div>
      </div>
      <div className="line"></div>
      {profitClk ? <RadialProgress data = {props.data}/> : <RadialProgressLossSection data = {props.data} />}
    </div>
  );
};

export default ProfitLoss;
