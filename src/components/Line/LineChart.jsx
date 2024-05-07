import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const TotalSalesTinyLineChart = () => {
  
  const data = [
    {
      name: 'Jan',
      ua: 3,
      sales: 5,
      revenue: 2,
    
    },
    {
      name: 'Feb',
      ua: 4,
      sales: 16,
      revenue: 10,

      
    },
    {
      name: 'March',
      ua: 16,
      sales: 17,
      revenue: 6,

      
    },
    {
      name: 'April',
      ua: 21,
      sales: 17,
      revenue: 25,

      
    },
    {
      name: 'May',
      ua: 13,
      sales: 21,
      revenue: 3,

      
    },
    {
      name: 'June',
      ua: 25,
      sales: 10,
      revenue: 8,

      
    },
    {
      name: 'July',
      ua: 18,
      sales: 22,
      revenue: 14,

      
    },
  ];

  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <LineChart
        width={500}
        height={600}
        data={data}
        style={{ marginTop: "20px" }}
      >
        <CartesianGrid vertical={false} />
        <XAxis dataKey="name" tickLine={false} fontSize={12} />
        <YAxis tickLine={false} fontSize={12} tickFormatter={(n) => `${n} cr`} />
        <Tooltip />
        <Line type="monotone" dataKey="ua" stroke="#57DACC" name="User Aqu" />
        <Line type="monotone" dataKey="sales" stroke="#F47780" name="Sales" />
        <Line type="monotone" dataKey="revenue" stroke="#FFC700" name="Revenue" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TotalSalesTinyLineChart;
