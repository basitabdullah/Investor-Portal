import React from "react";
import CircularProgBar from "../CircularProgBar";
import "./RadialProgressLossection.scss";
const RadialProgressLossSection = (props) => {
  return (
    <div className="progressBar">
      <CircularProgBar
        color="rgba(255, 61, 61, 1)"
        year="Ist Year"
        value={`${props.data[6][1][2021].toFixed(1)} lac`}
        percentage={(props.data[6][0][2021] / 200) * 100}
      />
      <CircularProgBar
        year="2nd Year"
        color="rgba(255, 61, 61, 1)"
        value={`${props.data[6][1][2022].toFixed(1)} lac`}
        percentage={(props.data[6][1][2022] / 200) * 100}
      />
      <CircularProgBar
        year="3rd Year"
        color="rgba(255, 61, 61, 1)"
        value={`${props.data[6][1][2023].toFixed(1)} lac`}
        percentage={(props.data[6][1][2023] / 200) * 100}
      />
      <CircularProgBar
        year="4th Year"
        color="rgba(255, 61, 61, 1)"
        value={`${props.data[6][1][2021].toFixed(1)} lac`}
        percentage={(props.data[6][1][2021] / 200) * 100}
      />
    </div>
  );
};

export default RadialProgressLossSection;
