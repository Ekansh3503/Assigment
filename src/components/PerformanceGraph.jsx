import React from "react";
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
import "./CSS/PerformanceGraph.css"

const PerformanceGraph = () => {
  // Sample data showing the equity progression
  const data = [
    { name: "Start", balance: 10000, equity: 10000 },
    { name: "Day 2", balance: 10020, equity: 10030 },
    { name: "Day 4", balance: 10100, equity: 10120 },
    { name: "Day 6", balance: 10200, equity: 10250 },
    { name: "Current", balance: 10366.65, equity: 10366.65 },
  ];

  return (
    <div className="performance-graph">
      <h2>Performance Graph</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis  label={{ value: "Equity", position: "insideBottom", dy: 10 }} />
          <YAxis label={{ value: "", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Line type="monotone" dataKey="balance" stroke="#8884d8" activeDot={{ r: 8 }} name=" " />
          <Line type="monotone" dataKey="equity" stroke="#82ca9d" name=" " />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceGraph;
