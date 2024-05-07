import React from "react";
import { ResponsivePie } from "@nivo/pie";

const RevenuePieChart = (props) => {
  const fetchedData = [
    {
      id: "Revenue - Performance Selling",
      value: props.PerformanceSelling,
    },
    {
      id: "Revenue - Logistic",
      value: props.Logistic,
    },
    {
      id: "Revenue - Fintech",
      value: props.Fintech,
    },
    {
      id: "Revenue - Subscription",
      value: props.Subscription,
    },
  ];


  return (
    <div
      style={{
        display: "flex",
        width: 700,
        height: 300,
        padding: "2rem",
      }}
    >
      <ResponsivePie
        data={fetchedData}
        margin={{ top: 0, right: 70, bottom: 10, left: 10 }}
        innerRadius={0.2}
        padAngle={0.7}
        cornerRadius={0}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0]] }}
        colors={{ scheme: "category10" }}
        enableArcLinkLabels={false}
        enableArcLabels={false}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#ffffff"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: "color" }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="transparent"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        legends={[
          {
            anchor: "right",
            direction: "column",

            justify: false,
            translateX: 50,
            translateY: 36,
            itemsSpacing: 5,
            itemWidth: 170,
            itemHeight: 20,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "square",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default RevenuePieChart;
