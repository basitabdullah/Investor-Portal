import React, { useContext } from "react";
import "./stackedBarLegend.scss";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { Context } from "../index";

const StackedBarChart = () => {
  const { data } = useContext(Context);

  const restructuredData = [
    {
      category: "2020",
      option1: Number(
        (data[2]?.RevenueModel.YOYBasics.revenue.YEAR1 / 100).toFixed(3)
      ),
      option2: Number(
        (data[1] && data[1][6] && data[1][6].YEAR1 / 100)?.toFixed(3)
      ),
      option3: Number(
        (data[0] && data[0][11] && data[0][11].YEAR1) / 100
      ).toFixed(3),
    },
    {
      category: "2021",
      option1: Number(
        (data[2]?.RevenueModel.YOYBasics.revenue.YEAR2 / 100).toFixed(3)
      ),

      option2: Number(
        (data[1] && data[1][6] && data[1][6].YEAR2 / 100)?.toFixed(3)
      ),
      option3: Number(
        (data[0] && data[0][11] && data[0][11].YEAR2) / 100
      ).toFixed(3),
    },
    {
      category: "2022",
      option1: Number(
        (data[2]?.RevenueModel.YOYBasics.revenue.YEAR3 / 100).toFixed(3)
      ),

      option2: Number(
        (data[1] && data[1][6] && data[1][6].YEAR3 / 100)?.toFixed(3)
      ),

      option3: Number(
        (data[0] && data[0][11] && data[0][11].YEAR3) / 100
      ).toFixed(3),
    },
    {
      category: "2023",
      option1: Number(
        (data[2]?.RevenueModel.YOYBasics.revenue.YEAR4 / 100).toFixed(3)
      ),

      option2: Number(
        (data[1] && data[1][6] && data[1][6].YEAR4 / 100)?.toFixed(3)
      ),

      option3: Number(
        (data[0] && data[0][11] && data[0][11].YEAR4) / 100
      ).toFixed(3),
    },
  ];

  return (
    <ResponsiveContainer height={"90%"} width={"90%"}>
      <BarChart
        width={550}
        height={400}
        data={restructuredData}
        margin={{ right: 20 }}
      >
        <XAxis dataKey="category" tickLine={false} />
        <YAxis tickLine={false} tickFormatter={(n) => `${n} cr`} />
        <Tooltip content={<CustomTooltip payload={restructuredData} />} />
        <Legend content={<CustomLegend payload={restructuredData} />} />
        <CartesianGrid opacity={0.3} vertical={false} />

        <Bar
          dataKey="option1"
          fill="#3656FD"
          name="Revenue"
          color="#3656FD"
          shape={<CustomBar borderRadius={5} />}
        />
        <Bar
          dataKey="option2"
          fill="#FFAE10"
          name="Expence"
          color="#FFAE10"
          shape={<CustomBar borderRadius={5} />}
        />
        <Bar
          dataKey="option3"
          fill="#37FA17"
          name="Profit"
          color="#37FA17"
          shape={<CustomBar borderRadius={5} />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

const CustomLegend = ({ payload }) => {
  return (
    <ul className="legendsContainer">
      {payload.map((item) => (
        <li key={item.value} className="legends">
          <div className="item">
            <div
              className="clrBox"
              style={{ backgroundColor: item.payload.color }}
            ></div>
            <span style={{ color: item.payload.color }}>{item.value}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};


const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="customTooltipBar">
        <div className="container">
          <p className="val1">YEAR: {label}</p>
          <p className="val2">Revenue : {payload[0]?.value}</p>
          <p className="val3">Expense : {payload[1]?.value}</p>
          <p className="val4">Profit : {payload[2]?.value}</p>
        </div>
      </div>
    );
  }

  return null;
};
const CustomBar = (props) => {
  const { fill, x, y, width, height, borderRadius } = props;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        ry={borderRadius}
      />
    </g>
  );
};
export default StackedBarChart;
