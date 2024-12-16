import React, { useState } from "react";
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
    tradesData: [
      {
        "openTime": "Dec 13, 2024 @ 21:07:19",
        "symbol": "NAS100",
        "positionId": "#576460752304808957",
        "type": "SELL",
        "volume": 0.03,
        "openPrice": 21834.25,
        "closeTime": "Dec 13, 2024 @ 21:11:29",
        "closePrice": 21784.25,
        "profit": 150.00,
        "change": 0.22
      },
      {
        "openTime": "Dec 13, 2024 @ 20:25:15",
        "symbol": "NAS100",
        "positionId": "#576460752304807764",
        "type": "SELL",
        "volume": 0.03,
        "openPrice": 21894.05,
        "closeTime": "Dec 13, 2024 @ 20:38:01",
        "closePrice": 21859.65,
        "profit": 103.20,
        "change": 0.15
      },
      {
        "openTime": "Dec 13, 2024 @ 20:18:43",
        "symbol": "NAS100",
        "positionId": "#576460752304807458",
        "type": "BUY",
        "volume": 0.03,
        "openPrice": 21929.55,
        "closeTime": "Dec 13, 2024 @ 20:23:06",
        "closePrice": 21904.4,
        "profit": -75.45,
        "change": -0.11
      },
      {
        "openTime": "Dec 12, 2024 @ 20:20:21",
        "symbol": "NAS100",
        "positionId": "#576460752304792430",
        "type": "SELL",
        "volume": 0.03,
        "openPrice": 21646.95,
        "closeTime": "Dec 12, 2024 @ 20:43:07",
        "closePrice": 21615.85,
        "profit": 93.30,
        "change": 0.14
      },
      {
        "openTime": "Dec 12, 2024 @ 01:32:39",
        "symbol": "NAS100",
        "positionId": "#576460752304782281",
        "type": "BUY",
        "volume": 0.04,
        "openPrice": 21783.65,
        "closeTime": "Dec 12, 2024 @ 02:17:33",
        "closePrice": 21783.75,
        "profit": 0.40,
        "change": 0
      },
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
    tradesData: [
      {
        "openTime": "Dec 12, 2024 @ 01:04:08",
        "symbol": "NAS100",
        "positionId": "#576460752304782069",
        "type": "BUY",
        "volume": 0.03,
        "openPrice": 21784.65,
        "closeTime": "Dec 12, 2024 @ 01:17:37",
        "closePrice": 21776.25,
        "profit": -25.20,
        "change": -0.03
      },
      {
        "openTime": "Dec 12, 2024 @ 00:36:06",
        "symbol": "NAS100",
        "positionId": "#576460752304781762",
        "type": "SELL",
        "volume": 0.02,
        "openPrice": 21766.95,
        "closeTime": "Dec 12, 2024 @ 01:03:40",
        "closePrice": 21786.05,
        "profit": -38.20,
        "change": -0.08
      },
      {
        "openTime": "Dec 11, 2024 @ 23:32:26",
        "symbol": "NAS100",
        "positionId": "#576460752304780947",
        "type": "BUY",
        "volume": 0.02,
        "openPrice": 21769.65,
        "closeTime": "Dec 12, 2024 @ 00:26:01",
        "closePrice": 21769.35,
        "profit": -0.60,
        "change": 0
      },
      {
        "openTime": "Dec 11, 2024 @ 21:32:34",
        "symbol": "NAS100",
        "positionId": "#576460752304779176",
        "type": "BUY",
        "volume": 0.04,
        "openPrice": 21682.65,
        "closeTime": "Dec 11, 2024 @ 22:08:39",
        "closePrice": 21738.95,
        "profit": 225.20,
        "change": 0.25
      },
      {
        "openTime": "Dec 11, 2024 @ 21:23:54",
        "symbol": "NAS100",
        "positionId": "#576460752304778994",
        "type": "SELL",
        "volume": 0.04,
        "openPrice": 21662.35,
        "closeTime": "Dec 11, 2024 @ 21:32:30",
        "closePrice": 21681.75,
        "profit": -77.60,
        "change": -0.08
      },
      {
        "openTime": "Dec 11, 2024 @ 21:16:11",
        "symbol": "NAS100",
        "positionId": "#576460752304778835",
        "type": "BUY",
        "volume": 0.03,
        "openPrice": 21703.65,
        "closeTime": "Dec 11, 2024 @ 21:23:40",
        "closePrice": 21663.25,
        "profit": -121.20,
        "change": -0.18
      },
      {
        "openTime": "Dec 11, 2024 @ 20:51:31",
        "symbol": "NAS100",
        "positionId": "#576460752304778258",
        "type": "SELL",
        "volume": 0.02,
        "openPrice": 21684.85,
        "closeTime": "Dec 11, 2024 @ 21:15:44",
        "closePrice": 21704.25,
        "profit": -38.80,
        "change": -0.08
      },
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
    tradesData: [
      {
        "openTime": "Dec 11, 2024 @ 20:30:04",
        "symbol": "NAS100",
        "positionId": "#576460752304777505",
        "type": "BUY",
        "volume": 0.03,
        "openPrice": 21676.45,
        "closeTime": "Dec 11, 2024 @ 20:46:03",
        "closePrice": 21702.95,
        "profit": 79.50,
        "change": 0.12
      },
      {
        "openTime": "Dec 11, 2024 @ 20:17:19",
        "symbol": "NAS100",
        "positionId": "#576460752304777079",
        "type": "BUY",
        "volume": 0.02,
        "openPrice": 21643.85,
        "closeTime": "Dec 11, 2024 @ 20:25:51",
        "closePrice": 21660.85,
        "profit": 34.00,
        "change": 0.07
      },
      {
        "openTime": "Dec 11, 2024 @ 19:21:46",
        "symbol": "NAS100",
        "positionId": "#576460752304775303",
        "type": "SELL",
        "volume": 0.02,
        "openPrice": 21495.55,
        "closeTime": "Dec 11, 2024 @ 19:30:50",
        "closePrice": 21519.05,
        "profit": -47.00,
        "change": -0.1
      },
      {
        "openTime": "Dec 10, 2024 @ 23:55:39",
        "symbol": "NAS100",
        "positionId": "#576460752304765318",
        "type": "SELL",
        "volume": 0.02,
        "openPrice": 21443.85,
        "closeTime": "Dec 11, 2024 @ 00:30:47",
        "closePrice": 21426.45,
        "profit": 34.80,
        "change": 0.08
      },
      {
        "openTime": "Dec 10, 2024 @ 20:53:51",
        "symbol": "NAS100",
        "positionId": "#576460752304761823",
        "type": "SELL",
        "volume": 0.02,
        "openPrice": 21555.35,
        "closeTime": "Dec 10, 2024 @ 21:18:05",
        "closePrice": 21527.75,
        "profit": 55.20,
        "change": 0.12
      },
      {
        "openTime": "Dec 10, 2024 @ 20:20:14",
        "symbol": "NAS100",
        "positionId": "#576460752304760710",
        "type": "SELL",
        "volume": 0.02,
        "openPrice": 21546.55,
        "closeTime": "Dec 10, 2024 @ 20:22:35",
        "closePrice": 21524.35,
        "profit": 44.40,
        "change": 0.1
      },
      {
        "openTime": "Dec 9, 2024 @ 22:03:33",
        "symbol": "NAS100",
        "positionId": "#576460752304747497",
        "type": "SELL",
        "volume": 0.03,
        "openPrice": 21481.45,
        "closeTime": "Dec 9, 2024 @ 23:02:39",
        "closePrice": 21468.85,
        "profit": 37.80,
        "change": 0.05
      },
      {
        "openTime": "Dec 9, 2024 @ 20:01:45",
        "symbol": "NAS100",
        "positionId": "#576460752304744281",
        "type": "BUY",
        "volume": 0.04,
        "openPrice": 21604.40,
        "closeTime": "Dec 9, 2024 @ 20:56:33",
        "closePrice": 21553.85,
        "profit": -202.2,
        "change": -0.23
      }
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
    tradesData: [
      {
        "openTime": "Dec 13, 2024 @ 21:07:19",
        "symbol": "NAS100",
        "positionId": "#576460752304808957",
        "type": "SELL",
        "volume": 0.03,
        "openPrice": 21834.25,
        "closeTime": "Dec 13, 2024 @ 21:11:29",
        "closePrice": 21784.25,
        "profit": 150.00,
        "change": 0.22
      },
      {
        "openTime": "Dec 13, 2024 @ 20:25:15",
        "symbol": "NAS100",
        "positionId": "#576460752304807764",
        "type": "SELL",
        "volume": 0.03,
        "openPrice": 21894.05,
        "closeTime": "Dec 13, 2024 @ 20:38:01",
        "closePrice": 21859.65,
        "profit": 103.20,
        "change": 0.15
      },
      {
        "openTime": "Dec 13, 2024 @ 20:18:43",
        "symbol": "NAS100",
        "positionId": "#576460752304807458",
        "type": "BUY",
        "volume": 0.03,
        "openPrice": 21929.55,
        "closeTime": "Dec 13, 2024 @ 20:23:06",
        "closePrice": 21904.4,
        "profit": -75.45,
        "change": -0.11
      },
      {
        "openTime": "Dec 12, 2024 @ 20:20:21",
        "symbol": "NAS100",
        "positionId": "#576460752304792430",
        "type": "SELL",
        "volume": 0.03,
        "openPrice": 21646.95,
        "closeTime": "Dec 12, 2024 @ 20:43:07",
        "closePrice": 21615.85,
        "profit": 93.30,
        "change": 0.14
      },
      {
        "openTime": "Dec 12, 2024 @ 01:32:39",
        "symbol": "NAS100",
        "positionId": "#576460752304782281",
        "type": "BUY",
        "volume": 0.04,
        "openPrice": 21783.65,
        "closeTime": "Dec 12, 2024 @ 02:17:33",
        "closePrice": 21783.75,
        "profit": 0.40,
        "change": 0
      },
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
    tradesData: [
      {
        "openTime": "Dec 12, 2024 @ 01:04:08",
        "symbol": "NAS100",
        "positionId": "#576460752304782069",
        "type": "BUY",
        "volume": 0.03,
        "openPrice": 21784.65,
        "closeTime": "Dec 12, 2024 @ 01:17:37",
        "closePrice": 21776.25,
        "profit": -25.20,
        "change": -0.03
      },
      {
        "openTime": "Dec 12, 2024 @ 00:36:06",
        "symbol": "NAS100",
        "positionId": "#576460752304781762",
        "type": "SELL",
        "volume": 0.02,
        "openPrice": 21766.95,
        "closeTime": "Dec 12, 2024 @ 01:03:40",
        "closePrice": 21786.05,
        "profit": -38.20,
        "change": -0.08
      },
      {
        "openTime": "Dec 11, 2024 @ 23:32:26",
        "symbol": "NAS100",
        "positionId": "#576460752304780947",
        "type": "BUY",
        "volume": 0.02,
        "openPrice": 21769.65,
        "closeTime": "Dec 12, 2024 @ 00:26:01",
        "closePrice": 21769.35,
        "profit": -0.60,
        "change": 0
      },
      {
        "openTime": "Dec 11, 2024 @ 21:32:34",
        "symbol": "NAS100",
        "positionId": "#576460752304779176",
        "type": "BUY",
        "volume": 0.04,
        "openPrice": 21682.65,
        "closeTime": "Dec 11, 2024 @ 22:08:39",
        "closePrice": 21738.95,
        "profit": 225.20,
        "change": 0.25
      },
      {
        "openTime": "Dec 11, 2024 @ 21:23:54",
        "symbol": "NAS100",
        "positionId": "#576460752304778994",
        "type": "SELL",
        "volume": 0.04,
        "openPrice": 21662.35,
        "closeTime": "Dec 11, 2024 @ 21:32:30",
        "closePrice": 21681.75,
        "profit": -77.60,
        "change": -0.08
      },
      {
        "openTime": "Dec 11, 2024 @ 21:16:11",
        "symbol": "NAS100",
        "positionId": "#576460752304778835",
        "type": "BUY",
        "volume": 0.03,
        "openPrice": 21703.65,
        "closeTime": "Dec 11, 2024 @ 21:23:40",
        "closePrice": 21663.25,
        "profit": -121.20,
        "change": -0.18
      },
      {
        "openTime": "Dec 11, 2024 @ 20:51:31",
        "symbol": "NAS100",
        "positionId": "#576460752304778258",
        "type": "SELL",
        "volume": 0.02,
        "openPrice": 21684.85,
        "closeTime": "Dec 11, 2024 @ 21:15:44",
        "closePrice": 21704.25,
        "profit": -38.80,
        "change": -0.08
      },
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
    tradesData: [
      {
        "openTime": "Dec 11, 2024 @ 20:30:04",
        "symbol": "NAS100",
        "positionId": "#576460752304777505",
        "type": "BUY",
        "volume": 0.03,
        "openPrice": 21676.45,
        "closeTime": "Dec 11, 2024 @ 20:46:03",
        "closePrice": 21702.95,
        "profit": 79.50,
        "change": 0.12
      },
      {
        "openTime": "Dec 11, 2024 @ 20:17:19",
        "symbol": "NAS100",
        "positionId": "#576460752304777079",
        "type": "BUY",
        "volume": 0.02,
        "openPrice": 21643.85,
        "closeTime": "Dec 11, 2024 @ 20:25:51",
        "closePrice": 21660.85,
        "profit": 34.00,
        "change": 0.07
      },
      {
        "openTime": "Dec 11, 2024 @ 19:21:46",
        "symbol": "NAS100",
        "positionId": "#576460752304775303",
        "type": "SELL",
        "volume": 0.02,
        "openPrice": 21495.55,
        "closeTime": "Dec 11, 2024 @ 19:30:50",
        "closePrice": 21519.05,
        "profit": -47.00,
        "change": -0.1
      },
      {
        "openTime": "Dec 10, 2024 @ 23:55:39",
        "symbol": "NAS100",
        "positionId": "#576460752304765318",
        "type": "SELL",
        "volume": 0.02,
        "openPrice": 21443.85,
        "closeTime": "Dec 11, 2024 @ 00:30:47",
        "closePrice": 21426.45,
        "profit": 34.80,
        "change": 0.08
      },
      {
        "openTime": "Dec 10, 2024 @ 20:53:51",
        "symbol": "NAS100",
        "positionId": "#576460752304761823",
        "type": "SELL",
        "volume": 0.02,
        "openPrice": 21555.35,
        "closeTime": "Dec 10, 2024 @ 21:18:05",
        "closePrice": 21527.75,
        "profit": 55.20,
        "change": 0.12
      },
      {
        "openTime": "Dec 10, 2024 @ 20:20:14",
        "symbol": "NAS100",
        "positionId": "#576460752304760710",
        "type": "SELL",
        "volume": 0.02,
        "openPrice": 21546.55,
        "closeTime": "Dec 10, 2024 @ 20:22:35",
        "closePrice": 21524.35,
        "profit": 44.40,
        "change": 0.1
      },
      {
        "openTime": "Dec 9, 2024 @ 22:03:33",
        "symbol": "NAS100",
        "positionId": "#576460752304747497",
        "type": "SELL",
        "volume": 0.03,
        "openPrice": 21481.45,
        "closeTime": "Dec 9, 2024 @ 23:02:39",
        "closePrice": 21468.85,
        "profit": 37.80,
        "change": 0.05
      },
      {
        "openTime": "Dec 9, 2024 @ 20:01:45",
        "symbol": "NAS100",
        "positionId": "#576460752304744281",
        "type": "BUY",
        "volume": 0.04,
        "openPrice": 21604.40,
        "closeTime": "Dec 9, 2024 @ 20:56:33",
        "closePrice": 21553.85,
        "profit": -202.2,
        "change": -0.23
      }
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
    tradesData: [
      {
        "openTime": "Dec 13, 2024 @ 21:07:19",
        "symbol": "NAS100",
        "positionId": "#576460752304808957",
        "type": "SELL",
        "volume": 0.03,
        "openPrice": 21834.25,
        "closeTime": "Dec 13, 2024 @ 21:11:29",
        "closePrice": 21784.25,
        "profit": 150.00,
        "change": 0.22
      },
      {
        "openTime": "Dec 13, 2024 @ 20:25:15",
        "symbol": "NAS100",
        "positionId": "#576460752304807764",
        "type": "SELL",
        "volume": 0.03,
        "openPrice": 21894.05,
        "closeTime": "Dec 13, 2024 @ 20:38:01",
        "closePrice": 21859.65,
        "profit": 103.20,
        "change": 0.15
      },
      {
        "openTime": "Dec 13, 2024 @ 20:18:43",
        "symbol": "NAS100",
        "positionId": "#576460752304807458",
        "type": "BUY",
        "volume": 0.03,
        "openPrice": 21929.55,
        "closeTime": "Dec 13, 2024 @ 20:23:06",
        "closePrice": 21904.4,
        "profit": -75.45,
        "change": -0.11
      },
      {
        "openTime": "Dec 12, 2024 @ 20:20:21",
        "symbol": "NAS100",
        "positionId": "#576460752304792430",
        "type": "SELL",
        "volume": 0.03,
        "openPrice": 21646.95,
        "closeTime": "Dec 12, 2024 @ 20:43:07",
        "closePrice": 21615.85,
        "profit": 93.30,
        "change": 0.14
      },
      {
        "openTime": "Dec 12, 2024 @ 01:32:39",
        "symbol": "NAS100",
        "positionId": "#576460752304782281",
        "type": "BUY",
        "volume": 0.04,
        "openPrice": 21783.65,
        "closeTime": "Dec 12, 2024 @ 02:17:33",
        "closePrice": 21783.75,
        "profit": 0.40,
        "change": 0
      },
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
    tradesData: [
      {
        "openTime": "Dec 12, 2024 @ 01:04:08",
        "symbol": "NAS100",
        "positionId": "#576460752304782069",
        "type": "BUY",
        "volume": 0.03,
        "openPrice": 21784.65,
        "closeTime": "Dec 12, 2024 @ 01:17:37",
        "closePrice": 21776.25,
        "profit": -25.20,
        "change": -0.03
      },
      {
        "openTime": "Dec 12, 2024 @ 00:36:06",
        "symbol": "NAS100",
        "positionId": "#576460752304781762",
        "type": "SELL",
        "volume": 0.02,
        "openPrice": 21766.95,
        "closeTime": "Dec 12, 2024 @ 01:03:40",
        "closePrice": 21786.05,
        "profit": -38.20,
        "change": -0.08
      },
      {
        "openTime": "Dec 11, 2024 @ 23:32:26",
        "symbol": "NAS100",
        "positionId": "#576460752304780947",
        "type": "BUY",
        "volume": 0.02,
        "openPrice": 21769.65,
        "closeTime": "Dec 12, 2024 @ 00:26:01",
        "closePrice": 21769.35,
        "profit": -0.60,
        "change": 0
      },
      {
        "openTime": "Dec 11, 2024 @ 21:32:34",
        "symbol": "NAS100",
        "positionId": "#576460752304779176",
        "type": "BUY",
        "volume": 0.04,
        "openPrice": 21682.65,
        "closeTime": "Dec 11, 2024 @ 22:08:39",
        "closePrice": 21738.95,
        "profit": 225.20,
        "change": 0.25
      },
      {
        "openTime": "Dec 11, 2024 @ 21:23:54",
        "symbol": "NAS100",
        "positionId": "#576460752304778994",
        "type": "SELL",
        "volume": 0.04,
        "openPrice": 21662.35,
        "closeTime": "Dec 11, 2024 @ 21:32:30",
        "closePrice": 21681.75,
        "profit": -77.60,
        "change": -0.08
      },
      {
        "openTime": "Dec 11, 2024 @ 21:16:11",
        "symbol": "NAS100",
        "positionId": "#576460752304778835",
        "type": "BUY",
        "volume": 0.03,
        "openPrice": 21703.65,
        "closeTime": "Dec 11, 2024 @ 21:23:40",
        "closePrice": 21663.25,
        "profit": -121.20,
        "change": -0.18
      },
      {
        "openTime": "Dec 11, 2024 @ 20:51:31",
        "symbol": "NAS100",
        "positionId": "#576460752304778258",
        "type": "SELL",
        "volume": 0.02,
        "openPrice": 21684.85,
        "closeTime": "Dec 11, 2024 @ 21:15:44",
        "closePrice": 21704.25,
        "profit": -38.80,
        "change": -0.08
      },
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
    tradesData: [
      {
        "openTime": "Dec 11, 2024 @ 20:30:04",
        "symbol": "NAS100",
        "positionId": "#576460752304777505",
        "type": "BUY",
        "volume": 0.03,
        "openPrice": 21676.45,
        "closeTime": "Dec 11, 2024 @ 20:46:03",
        "closePrice": 21702.95,
        "profit": 79.50,
        "change": 0.12
      },
      {
        "openTime": "Dec 11, 2024 @ 20:17:19",
        "symbol": "NAS100",
        "positionId": "#576460752304777079",
        "type": "BUY",
        "volume": 0.02,
        "openPrice": 21643.85,
        "closeTime": "Dec 11, 2024 @ 20:25:51",
        "closePrice": 21660.85,
        "profit": 34.00,
        "change": 0.07
      },
      {
        "openTime": "Dec 11, 2024 @ 19:21:46",
        "symbol": "NAS100",
        "positionId": "#576460752304775303",
        "type": "SELL",
        "volume": 0.02,
        "openPrice": 21495.55,
        "closeTime": "Dec 11, 2024 @ 19:30:50",
        "closePrice": 21519.05,
        "profit": -47.00,
        "change": -0.1
      },
      {
        "openTime": "Dec 10, 2024 @ 23:55:39",
        "symbol": "NAS100",
        "positionId": "#576460752304765318",
        "type": "SELL",
        "volume": 0.02,
        "openPrice": 21443.85,
        "closeTime": "Dec 11, 2024 @ 00:30:47",
        "closePrice": 21426.45,
        "profit": 34.80,
        "change": 0.08
      },
      {
        "openTime": "Dec 10, 2024 @ 20:53:51",
        "symbol": "NAS100",
        "positionId": "#576460752304761823",
        "type": "SELL",
        "volume": 0.02,
        "openPrice": 21555.35,
        "closeTime": "Dec 10, 2024 @ 21:18:05",
        "closePrice": 21527.75,
        "profit": 55.20,
        "change": 0.12
      },
      {
        "openTime": "Dec 10, 2024 @ 20:20:14",
        "symbol": "NAS100",
        "positionId": "#576460752304760710",
        "type": "SELL",
        "volume": 0.02,
        "openPrice": 21546.55,
        "closeTime": "Dec 10, 2024 @ 20:22:35",
        "closePrice": 21524.35,
        "profit": 44.40,
        "change": 0.1
      },
      {
        "openTime": "Dec 9, 2024 @ 22:03:33",
        "symbol": "NAS100",
        "positionId": "#576460752304747497",
        "type": "SELL",
        "volume": 0.03,
        "openPrice": 21481.45,
        "closeTime": "Dec 9, 2024 @ 23:02:39",
        "closePrice": 21468.85,
        "profit": 37.80,
        "change": 0.05
      },
      {
        "openTime": "Dec 9, 2024 @ 20:01:45",
        "symbol": "NAS100",
        "positionId": "#576460752304744281",
        "type": "BUY",
        "volume": 0.04,
        "openPrice": 21604.40,
        "closeTime": "Dec 9, 2024 @ 20:56:33",
        "closePrice": 21553.85,
        "profit": -202.2,
        "change": -0.23
      }
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
    tradesData: [
      {
        "openTime": "Dec 13, 2024 @ 21:07:19",
        "symbol": "NAS100",
        "positionId": "#576460752304808957",
        "type": "SELL",
        "volume": 0.03,
        "openPrice": 21834.25,
        "closeTime": "Dec 13, 2024 @ 21:11:29",
        "closePrice": 21784.25,
        "profit": 150.00,
        "change": 0.22
      },
      {
        "openTime": "Dec 13, 2024 @ 20:25:15",
        "symbol": "NAS100",
        "positionId": "#576460752304807764",
        "type": "SELL",
        "volume": 0.03,
        "openPrice": 21894.05,
        "closeTime": "Dec 13, 2024 @ 20:38:01",
        "closePrice": 21859.65,
        "profit": 103.20,
        "change": 0.15
      },
      {
        "openTime": "Dec 13, 2024 @ 20:18:43",
        "symbol": "NAS100",
        "positionId": "#576460752304807458",
        "type": "BUY",
        "volume": 0.03,
        "openPrice": 21929.55,
        "closeTime": "Dec 13, 2024 @ 20:23:06",
        "closePrice": 21904.4,
        "profit": -75.45,
        "change": -0.11
      },
      {
        "openTime": "Dec 12, 2024 @ 20:20:21",
        "symbol": "NAS100",
        "positionId": "#576460752304792430",
        "type": "SELL",
        "volume": 0.03,
        "openPrice": 21646.95,
        "closeTime": "Dec 12, 2024 @ 20:43:07",
        "closePrice": 21615.85,
        "profit": 93.30,
        "change": 0.14
      },
      {
        "openTime": "Dec 12, 2024 @ 01:32:39",
        "symbol": "NAS100",
        "positionId": "#576460752304782281",
        "type": "BUY",
        "volume": 0.04,
        "openPrice": 21783.65,
        "closeTime": "Dec 12, 2024 @ 02:17:33",
        "closePrice": 21783.75,
        "profit": 0.40,
        "change": 0
      },
    ],
  },
];

const Leaderboard = () => {
  const [selectedTrader, setSelectedTrader] = useState(null);

  const handleSelectTrader = (rank) => {
    const trader = topTradersPerformanceData.find((t) => t.rank === rank);
    setSelectedTrader(trader);
  };

  return (
    <div>
      <Navbar />
      <div className="leaderboard-container">
        {/* Left: Rank Table */}
        <div className="rank-table">
          <h2>Top 10 Traders</h2>
          <div className="table-container">
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
          <p>
            This is a collection of the top 10 Funded FunderPro Traders who are eligible for payouts.
            We have chosen to only display the top 10 for motivational purposes!
          </p>
          <h3>Last Update: less than a minute ago</h3>
        </div>

        {/* Right: Performance Box and Graph */}
        <div className="performance-container">
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
      </div>

      {/* Trades Table Below */}
      {selectedTrader && <TradesTable traderName={selectedTrader.name} tradesData={selectedTrader.tradesData} />}
    </div>
  );
};

export default Leaderboard;