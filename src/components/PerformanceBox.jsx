import React from "react";
import "./CSS/PerformanceBox.css";

const PerformanceBox = () => {
  const performanceData = [
    { label: "Starting Balance", value: "$10,000.00" },
    { label: "Current Equity", value: "$10,366.65" },
    { label: "Current Balance", value: "$10,366.65" },
    { label: "Cumulative PNL", value: "$366.65" },
    { label: "% Return", value: "3.67%" },
    { label: "Active Days", value: "7" },
    { label: "AVG. Winning Trade", value: "$61.10" },
    { label: "Profit Factor", value: "0.86" },
    { label: "NO. Trades Placed", value: "14" },
  ];

  return (
    <div className="performance-box">
      <h2>Ishaq M. - Performance</h2>
      <div className="performance-grid">
        {performanceData.map((item, index) => (
          <div key={index} className="performance-item">
            <span className="label">{item.label}</span>
            <span className="value">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceBox;
