import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell } from "recharts";

const MyPieChart = ({donationLength}) => {
  // if (donationLength === 0){
  //     return
  // }
  // Calculate percentages
  const donatedPercentage = (donationLength / 12) * 100;
  const remainingPercentage = 100 - donatedPercentage;

  const data = [
    { name: "Donated", value: donatedPercentage },
    { name: "Remaining", value: remainingPercentage }
  ];

  const COLORS = ["#00BB98", "#E33D41"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize={outerRadius < 150 ? "16" : "35"} // Adjust font size based on outerRadius
        fontWeight={outerRadius < 150 ? "normal" : "bold"} // Adjust font weight based on outerRadius
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  // Determine the outerRadius dynamically based on screen width
  const getOuterRadius = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 770) {
      return 200; // For tablet and larger screens
    } else {
      return 100; // For mobile screens
    }
  };

  const [outerRadius, setOuterRadius] = useState(getOuterRadius());

  // Update outerRadius when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setOuterRadius(getOuterRadius());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-screen overflow-hidden">
      <div className="">
        <PieChart width={800} height={800}>
          <Pie
            data={data}
            cx={400}
            cy={400}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={outerRadius}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
};

export default MyPieChart;
