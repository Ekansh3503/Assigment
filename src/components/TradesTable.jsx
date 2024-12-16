import React from 'react';
import './CSS/TradesTable.css';  // Adjust path if necessary

const TradesTable = ({ traderName, tradesData }) => {
  return (
    <div className="trades-table-container">
      <h1>{traderName} - Trading Log</h1>
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
          {tradesData.map((trade, index) => (
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



