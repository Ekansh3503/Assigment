import React from "react";
import "./CSS/SortingControls.css";

const SortingControls = ({ onSort }) => {
  return (
    <div className="sorting-controls">
      <button onClick={() => onSort("score")}>Sort by Score</button>
      <button onClick={() => onSort("rank")}>Sort by Rank</button>
    </div>
  );
};

export default SortingControls;
