import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgBar = (props) => {
  
  return (
    <div
      style={{
        width: "130px",
        height: "130px",
        display : "flex",
        alignItems: "center",
        justifyContent : "center",
        flexDirection : "column"
      }}
    >  
      <p style={{fontSize : "12px"}}>{props.year}</p>
      <CircularProgressbar
        value={props.percentage}
        text={props.value}
       
        strokeWidth={15}
        styles={buildStyles({
          rotation: 0.25,
          strokeLinecap: "but",
          textSize: "13px",
          pathTransitionDuration: 0.5,
          pathColor: `${props.color} ${props.percentage / 100})`,
          textColor: "#000000",
          trailColor: "#D4D2D25E",
          backgroundColor: "#DAF43D",
        })}
      />
    </div>
  );
};

export default CircularProgBar;
