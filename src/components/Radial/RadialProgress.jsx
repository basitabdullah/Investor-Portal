import React from 'react'
import "./RadialProgress.scss";
import CircularProgBar from '../CircularProgBar';
const RadialProgress = (props) => {
  return (
    <div className="progressBar">
      <CircularProgBar
        color="rgba(64, 255, 94, 1)"
        year="Ist Year"
        value={`${props.data[6][0][2021].toFixed(1)} lac`}
        percentage={(props.data[6][0][2021] / 200) * 100}
      />
      <CircularProgBar
        year="2nd Year"
        color="rgba(64, 255, 94, 1)"
        value={`${props.data[6][0][2022].toFixed(1)} lac`}
        percentage={(props.data[6][0][2022] / 200) * 100}
      />
      <CircularProgBar
        year="3rd Year"
        color="rgba(64, 255, 94, 1)"
        value={`${props.data[6][0][2023].toFixed(1)} lac`}
        percentage={(props.data[6][0][2023] / 200) * 100}
      />
      <CircularProgBar
        year="4th Year"
        color="rgba(64, 255, 94, 1)"
        value={`${props.data[6][0][2024].toFixed(1)} lac`}
        percentage={(props.data[6][0][2024] / 200) * 100}
      />
    </div>
  );
}

export default RadialProgress