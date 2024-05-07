import React, { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./stackedBarLegend.scss";
import { Context } from "../index";

const BarChartComponent = () => {
  const { data } = useContext(Context);

  const restructuredData = [
    {
      category: "2020",
      option1: Number(
        (data[2]?.RevenueModel.PerformanceSelling.revenue.YEAR1 / 100).toFixed(
          3
        )
      ),
      option2: Number(
        (data[2]?.RevenueModel.LogisticPartners.revenue.YEAR1 / 100).toFixed(3)
      ),
      option3: Number(
        data[2]?.RevenueModel.FintechPartners.revenue.YEAR1 / 100
      ).toFixed(3),
      option4: Number(
        data[2]?.RevenueModel.ADSubscription.revenue.YEAR1 / 100
      ).toFixed(3),
    },
    {
      category: "2021",
      option1: Number(
        (data[2]?.RevenueModel.PerformanceSelling.revenue.YEAR2 / 100).toFixed(
          3
        )
      ),
      option2: Number(
        (data[2]?.RevenueModel.LogisticPartners.revenue.YEAR2 / 100).toFixed(3)
      ),
      option3: Number(
        data[2]?.RevenueModel.FintechPartners.revenue.YEAR2 / 100
      ).toFixed(3),
      option4: Number(
        data[2]?.RevenueModel.ADSubscription.revenue.YEAR2 / 100
      ).toFixed(3),
    },
    {
      category: "2022",
      option1: Number(
        (data[2]?.RevenueModel.PerformanceSelling.revenue.YEAR3 / 100).toFixed(
          3
        )
      ),
      option2: Number(
        (data[2]?.RevenueModel.LogisticPartners.revenue.YEAR3 / 100).toFixed(3)
      ),
      option3: Number(
        data[2]?.RevenueModel.FintechPartners.revenue.YEAR3 / 100
      ).toFixed(3),
      option4: Number(
        data[2]?.RevenueModel.ADSubscription.revenue.YEAR3 / 100
      ).toFixed(3),
    },
    {
      category: "2023",
      option1: Number(
        (data[2]?.RevenueModel.PerformanceSelling.revenue.YEAR4 / 100).toFixed(
          3
        )
      ),
      option2: Number(
        (data[2]?.RevenueModel.LogisticPartners.revenue.YEAR4 / 100).toFixed(3)
      ),
      option3: Number(
        data[2]?.RevenueModel.FintechPartners.revenue.YEAR4 / 100
      ).toFixed(3),
      option4: Number(
        data[2]?.RevenueModel.ADSubscription.revenue.YEAR4 / 100
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
        <XAxis dataKey="category" tickLine={false} fontSize={"15px"} />
        <YAxis
          tickLine={false}
          fontSize={"15px"}
          tickFormatter={(n) => `${n} cr`}
        />
        <Tooltip content={<CustomTooltip payload={restructuredData} />} />
        <CartesianGrid opacity={0.3} vertical={false} />
        <Legend content={<CustomLegend payload={data} />} />
        <Bar
          dataKey="option1"
          fill="#4BFFDF"
          name="Rev-Sales"
          shape={<CustomBar borderRadius={5} />}
        />
        <Bar
          dataKey="option2"
          fill="#F9075E"
          name="Rev-Logistic"
          shape={<CustomBar borderRadius={5} />}
        />
        <Bar
          dataKey="option3"
          fill="#4FD18B"
          name="Rev-Fintech"
          shape={<CustomBar borderRadius={5} />}
        />
        <Bar
          dataKey="option4"
          fill="#FAB400"
          name="Rev-Sub"
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
              style={{ backgroundColor: item.payload.fill }}
            ></div>
            <span style={{ color: item.payload.fill }}>{item.value}</span>
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
          <p className="label1">YEAR: {label}</p>
          <p className="label2">Rev-Sales : {payload[0]?.value}</p>
          <p className="label3">Rev-Logistic : {payload[1]?.value}</p>
          <p className="label4">Rev-Fintech : {payload[2]?.value}</p>
          <p className="label5">Rev-Sub : {payload[3]?.value}</p>
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
export default BarChartComponent;
