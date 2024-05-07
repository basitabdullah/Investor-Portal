import React, { useContext } from "react";
import { ResponsivePie } from "@nivo/pie";
import "../styles/charts.scss";
import { Context } from "../index";

const PieChartComponent = () => {
  const { data } = useContext(Context);
  const fetchedData = [
    {
      id: "Marketing",
      value: Number(data[1] && data[1][0].YEAR4),
      color: "#FFCF54",
    },
    {
      id: "Admin",
      value: Number(data[1] && data[1][1].YEAR4),
      color: "#2EEF92",
    },
    {
      id: "Legal & Infrastructure",
      value: Number(data[1] && data[1][2].YEAR4),
      color: "#FF406E",
    },
    {
      id: "Office Space",
      value: Number(data[1] && data[1][3].YEAR4),
      color: "#7654FF",
    },
    {
      id: "IT",
      value: Number(data[1] && data[1][4].YEAR4),
      color: "#0085FF",
    },
    {
      id: "Legal fees",
      value: Number(data[1] && data[1][2].YEAR4),
      color: "#FFF50B",
    },
    {
      id: "Miscellenous",
      value: Number(data[1] && data[1][5].YEAR4),
      color: "#FFCF54",
    },
  ];

  return (
    <ResponsivePie
      data={fetchedData}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      startAngle={-4}
      innerRadius={0.3}
      padAngle={1}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
    />
  );
};

export default PieChartComponent;
