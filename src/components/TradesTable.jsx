import React, { useState, useEffect } from 'react';
import tradesData from '../trades.json';  // Import JSON directly
import './CSS/TradesTable.css';  // Adjust path if necessary

// This component maps the JSON data and displays it in a table.
const TradesTable = () => {
  const [trades, setTrades] = useState([]);

  // Set the imported JSON data directly to state
  useEffect(() => {
    setTrades(tradesData);
  }, []);

  return (
    <div>
      <h1>Trades Table</h1>
      <table>
        <thead>
          <tr>
            <th>Open Time</th>
            <th>Symbol</th>
            <th>Position ID</th>
            <th>Type</th>
            <th>Volume</th>
            <th>Open Price</th>
            <th>Close Time</th>
            <th>Close Price</th>
            <th>Profit</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through the trades data */}
          {trades.map((trade, index) => (
            <tr key={index}>
              <td>{trade.openTime}</td>
              <td>{trade.symbol}</td>
              <td>{trade.positionId}</td>
              <td>{trade.type}</td>
              <td>{trade.volume}</td>
              <td>{trade.openPrice}</td>
              <td>{trade.closeTime}</td>
              <td>{trade.closePrice}</td>
              <td>{trade.profit}</td>
              <td>{trade.change}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TradesTable;

