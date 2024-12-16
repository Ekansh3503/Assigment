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
import "./CSS/PerformanceGraph.css";

const PerformanceGraph = ({ data, traderName }) => {
  return (
    <div className="performance-graph">
      <h2>{traderName ? `${traderName}'s Performance Graph` : "Performance Graph"}</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" label={{ value: "Equity Progression", position: "insideBottom", dy: 10 }} />
          <YAxis label={{ value: "", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Line type="monotone" dataKey="balance" stroke="#8884d8" activeDot={{ r: 8 }} name="Current Balance" />
          <Line type="monotone" dataKey="equity" stroke="#82ca9d" name="Starting Balance" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceGraph;
