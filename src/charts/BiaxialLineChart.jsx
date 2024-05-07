import React, { useContext } from "react";
import { MdOutlineShowChart } from "react-icons/md";
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
import "./biaxialLegend.scss";
import { Context } from "..";

const BiaxialLineChart = () => {
  const { data } = useContext(Context);

  const fetchedData = [
    {
      name: "2020",
      value1: data[5][0]["Listing Progression"],
      value2: data[5][0]["Projected paid users"],
      value3: data[5][0]["Projected user base"],
    },
    {
      name: "2021",
      value1: data[5][1]["Listing Progression"],
      value2: data[5][1]["Projected paid users"],
      value3: data[5][1]["Projected user base"],
    },
    {
      name: "2022",
      value1: data[5][2]["Listing Progression"],
      value2: data[5][2]["Projected paid users"],
      value3: data[5][2]["Projected user base"],
    },
    {
      name: "2023",
      value1: data[5][3]["Listing Progression"],
      value2: data[5][3]["Projected paid users"],
      value3: data[5][3]["Projected user base"],
    },
  ];



  return (
    <ResponsiveContainer height={"90%"} width={"90%"}>
      <LineChart data={fetchedData} margin={{ right: 20 }}>
        <XAxis dataKey="name" tickLine={false} fontSize={"13px"} />
        <CartesianGrid opacity={0.3} vertical={false} />

        <YAxis tickLine={false} fontSize={"13px"} />
        <Tooltip content={<CustomTooltip payload={data} />} />
        <Legend content={<CustomLegend payload={data} />} />
        <Line
          type="monotone"
          dataKey="value1"
          stroke="#57DACC"
          name="Listing Progression"
          color="#57DACC"
        />
        <Line
          type="monotone"
          dataKey="value2"
          stroke="#F47780"
          name="Projected user base @ 5% of total listings (Progression)"
          color="#F47780"
        />
        <Line
          type="monotone"
          dataKey="value3"
          stroke="#FFC700"
          name="Projected paid users @ (2 to 4)% of total users/Qtr"
          color="#FFC700"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="customTooltipBiaxial">
        <div className="container">
          <p className="lineVal1">YEAR: {label}</p>
          <p className="lineVal2">Listing Progression: {payload[0]?.value}</p>
          <p className="lineVal3">Projected User base : {payload[1]?.value}</p>
          <p className="lineVal4">Projected Paid Users: {payload[2]?.value}</p>
        </div>
      </div>
    );
  }

  return null;
};
const CustomLegend = ({ payload }) => {
  return (
    <ul className="bilegendsContainer">
      {payload.map((item) => (
        <li key={item.value} className="biLegends">
          <div className="biItem">
            <div className="biClrBox">
              <MdOutlineShowChart style={{ color: item.payload.color }} />
            </div>
            <span style={{ color: item.payload.color }}>{item.value}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BiaxialLineChart;
