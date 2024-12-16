import React, {useState} from "react";
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

const topTradersPerformanceData = [
    {
      rank: 1,
      name: "Ishaq M.",
      performanceData: [
        { label: "Starting Balance", value: "$10,000.00" },
        { label: "Current Equity", value: "$10,366.65" },
        { label: "Current Balance", value: "$10,366.65" },
        { label: "Cumulative PNL", value: "$366.65" },
        { label: "% Return", value: "3.67%" },
        { label: "Active Days", value: "7" },
        { label: "AVG. Winning Trade", value: "$61.10" },
        { label: "Profit Factor", value: "0.86" },
        { label: "NO. Trades Placed", value: "14" },
      ],
      graphData: [
        { name: "Start", balance: 10000, equity: 10000 },
        { name: "Day 2", balance: 10050, equity: 10030 },
        { name: "Day 4", balance: 10100, equity: 10150 },
        { name: "Day 6", balance: 10200, equity: 10300 },
        { name: "Current", balance: 10366.65, equity: 10366.65 },
      ],
    },
    {
      rank: 2,
      name: "Pankaj B.",
      performanceData: [
        { label: "Starting Balance", value: "$10,000.00" },
        { label: "Current Equity", value: "$13,618.01" },
        { label: "Current Balance", value: "$13,618.01" },
        { label: "Cumulative PNL", value: "$3,618.01" },
        { label: "% Return", value: "3.62%" },
        { label: "Active Days", value: "12" },
        { label: "AVG. Winning Trade", value: "$150.40" },
        { label: "Profit Factor", value: "1.2" },
        { label: "NO. Trades Placed", value: "28" },
      ],
      graphData: [
        { name: "Start", balance: 10000, equity: 10000 },
        { name: "Day 3", balance: 11500, equity: 11550 },
        { name: "Day 6", balance: 12200, equity: 12300 },
        { name: "Day 9", balance: 13000, equity: 13300 },
        { name: "Current", balance: 13618.01, equity: 13618.01 },
      ],
    },
    {
      rank: 3,
      name: "Alan A.",
      performanceData: [
        { label: "Starting Balance", value: "$10,000.00" },
        { label: "Current Equity", value: "$10,187.32" },
        { label: "Current Balance", value: "$10,187.32" },
        { label: "Cumulative PNL", value: "$187.32" },
        { label: "% Return", value: "1.87%" },
        { label: "Active Days", value: "8" },
        { label: "AVG. Winning Trade", value: "$31.22" },
        { label: "Profit Factor", value: "0.95" },
        { label: "NO. Trades Placed", value: "10" },
      ],
      graphData: [
        { name: "Start", balance: 10000, equity: 10000 },
        { name: "Day 2", balance: 10050, equity: 10040 },
        { name: "Day 4", balance: 10080, equity: 10070 },
        { name: "Day 6", balance: 10120, equity: 10100 },
        { name: "Current", balance: 10187.32, equity: 10187.32 },
      ],
    },
    {
      rank: 4,
      name: "Matteo V.",
      performanceData: [
        { label: "Starting Balance", value: "$10,000.00" },
        { label: "Current Equity", value: "$10,068.00" },
        { label: "Current Balance", value: "$10,068.00" },
        { label: "Cumulative PNL", value: "$68.00" },
        { label: "% Return", value: "1.36%" },
        { label: "Active Days", value: "5" },
        { label: "AVG. Winning Trade", value: "$11.33" },
        { label: "Profit Factor", value: "0.88" },
        { label: "NO. Trades Placed", value: "6" },
      ],
      graphData: [
        { name: "Start", balance: 10000, equity: 10000 },
        { name: "Day 1", balance: 10020, equity: 10010 },
        { name: "Day 3", balance: 10030, equity: 10025 },
        { name: "Day 4", balance: 10050, equity: 10060 },
        { name: "Current", balance: 10068.00, equity: 10068.00 },
      ],
    },
    {
      rank: 5,
      name: "Gian Delfino T.",
      performanceData: [
        { label: "Starting Balance", value: "$10,000.00" },
        { label: "Current Equity", value: "$10,537.34" },
        { label: "Current Balance", value: "$10,537.34" },
        { label: "Cumulative PNL", value: "$537.34" },
        { label: "% Return", value: "1.07%" },
        { label: "Active Days", value: "9" },
        { label: "AVG. Winning Trade", value: "$40.00" },
        { label: "Profit Factor", value: "1.12" },
        { label: "NO. Trades Placed", value: "16" },
      ],
      graphData: [
        { name: "Start", balance: 10000, equity: 10000 },
        { name: "Day 3", balance: 10200, equity: 10250 },
        { name: "Day 5", balance: 10350, equity: 10380 },
        { name: "Day 7", balance: 10400, equity: 10490 },
        { name: "Current", balance: 10537.34, equity: 10537.34 },
      ],
    },
    {
        rank: 6,
        name: "Yash B.",
        performanceData: [
          { label: "Starting Balance", value: "$10,000.00" },
          { label: "Current Equity", value: "$10,527.10" },
          { label: "Current Balance", value: "$10,527.10" },
          { label: "Cumulative PNL", value: "$527.10" },
          { label: "% Return", value: "1.05%" },
          { label: "Active Days", value: "7" },
          { label: "AVG. Winning Trade", value: "$50.25" },
          { label: "Profit Factor", value: "1.1" },
          { label: "NO. Trades Placed", value: "14" },
        ],
        graphData: [
          { name: "Start", balance: 10000, equity: 10000 },
          { name: "Day 2", balance: 10030, equity: 10050 },
          { name: "Day 4", balance: 10100, equity: 10120 },
          { name: "Day 6", balance: 10250, equity: 10300 },
          { name: "Current", balance: 10527.10, equity: 10527.10 },
        ],
      },
      {
        rank: 7,
        name: "Gaetano S.",
        performanceData: [
          { label: "Starting Balance", value: "$10,000.00" },
          { label: "Current Equity", value: "$10,515.57" },
          { label: "Current Balance", value: "$10,515.57" },
          { label: "Cumulative PNL", value: "$515.57" },
          { label: "% Return", value: "1.03%" },
          { label: "Active Days", value: "8" },
          { label: "AVG. Winning Trade", value: "$45.00" },
          { label: "Profit Factor", value: "1.08" },
          { label: "NO. Trades Placed", value: "13" },
        ],
        graphData: [
          { name: "Start", balance: 10000, equity: 10000 },
          { name: "Day 2", balance: 10040, equity: 10070 },
          { name: "Day 4", balance: 10120, equity: 10160 },
          { name: "Day 6", balance: 10200, equity: 10280 },
          { name: "Current", balance: 10515.57, equity: 10515.57 },
        ],
      },
      {
        rank: 8,
        name: "Guido V.",
        performanceData: [
          { label: "Starting Balance", value: "$10,000.00" },
          { label: "Current Equity", value: "$10,503.94" },
          { label: "Current Balance", value: "$10,503.94" },
          { label: "Cumulative PNL", value: "$503.94" },
          { label: "% Return", value: "1.01%" },
          { label: "Active Days", value: "5" },
          { label: "AVG. Winning Trade", value: "$20.00" },
          { label: "Profit Factor", value: "0.98" },
          { label: "NO. Trades Placed", value: "9" },
        ],
        graphData: [
          { name: "Start", balance: 10000, equity: 10000 },
          { name: "Day 1", balance: 10020, equity: 10030 },
          { name: "Day 3", balance: 10080, equity: 10100 },
          { name: "Day 4", balance: 10150, equity: 10180 },
          { name: "Current", balance: 10503.94, equity: 10503.94 },
        ],
      },
      {
        rank: 9,
        name: "Timo K.",
        performanceData: [
          { label: "Starting Balance", value: "$10,000.00" },
          { label: "Current Equity", value: "$12,009.56" },
          { label: "Current Balance", value: "$12,009.56" },
          { label: "Cumulative PNL", value: "$2,009.56" },
          { label: "% Return", value: "1.00%" },
          { label: "Active Days", value: "10" },
          { label: "AVG. Winning Trade", value: "$80.38" },
          { label: "Profit Factor", value: "1.15" },
          { label: "NO. Trades Placed", value: "25" },
        ],
        graphData: [
          { name: "Start", balance: 10000, equity: 10000 },
          { name: "Day 3", balance: 11000, equity: 11200 },
          { name: "Day 5", balance: 11500, equity: 11700 },
          { name: "Day 8", balance: 12000, equity: 12050 },
          { name: "Current", balance: 12009.56, equity: 12009.56 },
        ],
      },
      {
        rank: 10,
        name: "Coste R.",
        performanceData: [
          { label: "Starting Balance", value: "$10,000.00" },
          { label: "Current Equity", value: "$10,924.24" },
          { label: "Current Balance", value: "$10,924.24" },
          { label: "Cumulative PNL", value: "$924.24" },
          { label: "% Return", value: "0.92%" },
          { label: "Active Days", value: "8" },
          { label: "AVG. Winning Trade", value: "$50.00" },
          { label: "Profit Factor", value: "1.02" },
          { label: "NO. Trades Placed", value: "15" },
        ],
        graphData: [
          { name: "Start", balance: 10000, equity: 10000 },
          { name: "Day 2", balance: 10050, equity: 10040 },
          { name: "Day 4", balance: 10100, equity: 10120 },
          { name: "Day 6", balance: 10200, equity: 10300 },
          { name: "Current", balance: 10924.24, equity: 10924.24 },
        ],
      },    
  ];

const Leaderboard = () => {
    const [selectedTrader, setSelectedTrader] = useState(null);
  
    // Handler to select a trader
    const handleSelectTrader = (rank) => {
      const trader = topTradersPerformanceData.find((t) => t.rank === rank);
      setSelectedTrader(trader);
    };
  
    return (
      <div>
        <Navbar />
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
                <tr
                  key={trader.rank}
                  onClick={() => handleSelectTrader(trader.rank)}
                  style={{ cursor: "pointer" }}
                >
                  <td>{trader.rank}</td>
                  <td>{trader.name}</td>
                  <td>{trader.returnPercent}</td>
                  <td>{trader.profit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          {selectedTrader ? (
            <>
              <PerformanceBox trader={selectedTrader} />
              <PerformanceGraph data={selectedTrader.graphData} traderName={selectedTrader.name} />
            </>
          ) : (
            <p style={{ textAlign: "center", marginTop: "20px" }}>
              Select a trader from the leaderboard to view their performance details.
            </p>
          )}
        </div>
        <TradesTable />
      </div>
    );
  };
  
  export default Leaderboard;