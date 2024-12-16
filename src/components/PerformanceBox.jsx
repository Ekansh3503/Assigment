import React from "react";
import "./CSS/PerformanceBox.css";

const PerformanceBox = ({ trader }) => {
  return (
    <div className="performance-box">
      <h2>{trader.name} - Performance</h2>
      <div className="performance-grid">
        {trader.performanceData.map((item, index) => (
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

