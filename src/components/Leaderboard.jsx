import React from "react";
import PerformanceGraph from "./PerformanceGraph";
import "./CSS/Leaderboard.css";
import TradesTable from "./TradesTable";
import Navbar from "./Navbar";
import PerformanceBox from "./PerformanceBox";

// Sample Top 10 Traders Data
const topTraders = [
    { rank: 1, name: "Ishaq M.", returnPercent: "3.67%", profit: "$366.65" },
    { rank: 2, name: "Pankaj B.", returnPercent: "3.62%", profit: "$3,618.01" },
    { rank: 3, name: "Alan A.", returnPercent: "1.87%", profit: "$187.32" },
    { rank: 4, name: "Matteo V.", returnPercent: "1.36%", profit: "$68.00" },
    { rank: 5, name: "Gian Delfino T.", returnPercent: "1.07%", profit: "$537.34" },
    { rank: 6, name: "Yash B.", returnPercent: "1.05%", profit: "$527.10" },
    { rank: 7, name: "Gaetano S.", returnPercent: "1.03%", profit: "$515.57" },
    { rank: 8, name: "Guido V.", returnPercent: "1.01%", profit: "$503.94" },
    { rank: 9, name: "Timo K.", returnPercent: "1%", profit: "$2,009.56" },
    { rank: 10, name: "Coste R.", returnPercent: "0.92%", profit: "$924.24" },
];

const Leaderboard = () => {
    return (
        <div>
            <Navbar />
            <div>
                <div className="top-traders" style={{ marginTop: "80px" }}>
                    <h1>Top 10 Traders</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>#Rank</th>
                                <th>Name</th>
                                <th>Return %</th>
                                <th>$ Profit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {topTraders.map((trader) => (
                                <tr key={trader.rank}>
                                    <td>{trader.rank}</td>
                                    <td>{trader.name}</td>
                                    <td>{trader.returnPercent}</td>
                                    <td>{trader.profit}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p>
                        This is a collection of the top 10 Funded FunderPro Traders who are
                        eligible for payouts. We have chosen to only display the top 10 for
                        motivational purposes!
                    </p>
                    <p>
                       Last Update less than a minute ago
                    </p>
                </div>
                <div>
                    <PerformanceBox />
                    <PerformanceGraph />
                </div>
            </div>
            <TradesTable />
        </div>
    );
};

export default Leaderboard;
