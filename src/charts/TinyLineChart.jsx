import React, { useContext } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./tinyLine.scss"
import { Context } from "..";
const TinyLineChart = () => {
  const { data } = useContext(Context);


  const fetchedData = [
    { name: "2020", value: data[4][0][2020] },
    { name: "2021", value: data[4][0][2021] },
    { name: "2022", value: data[4][0][2022] },
    { name: "2023", value: data[4][0][2023] },
  ];
;

  return (
    <ResponsiveContainer height={"90%"} width={"90%"}>
      <LineChart
        width={550}
        height={400}
        data={fetchedData}
        margin={{ right: 20 }}
      >
        <CartesianGrid opacity={0.3} vertical={false} />
        <XAxis dataKey="name" tickLine={false} fontSize={"13px"} />
        <YAxis
          tickLine={false}
          fontSize={"13px"}
          tickFormatter={(n) => `${n} cr`}
        />
        <Tooltip content={<CustomTooltip payload={data} />} />

        <Legend content={<CustomLegend payload={data} />} />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#FFB03A"
          name="GMV value(Gross Merchandises value)"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

const CustomLegend = ({ payload }) => {
  return (
    <ul className="legendsContainer">
      {payload.map((item) => (
        <li key={item.value} className="legends">
          <div className="item">
            <div className="clrBox" style={{backgroundColor : item.payload.stroke ,borderRadius :"100%"}}></div>
            <span style={{ color: item.payload.stroke }}>{item.value}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="customTooltipLine">
        <div className="container">
          <p className="lineVal2">GMV Value: {payload[0]?.value}</p>
          <p className="lineVal1">YEAR: {label}</p>
        </div>
      </div>
    );
  }

  return null;
};
export default TinyLineChart;
