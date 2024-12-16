# FunderPro Leaderboard

This project displays a leaderboard with the top traders, showcasing their performance data, trading logs, and more. The leaderboard is interactive, where users can select a trader to view their detailed performance data, including their trades and performance graph.

## Features

- **Leaderboard**: Displays the top traders, including their rank, return percentage, and profit.
- **Trader's Performance**: View detailed performance data of the selected trader, including cumulative profit, return percentage, and trading statistics.
- **Trades Log**: Display all trades performed by the selected trader.
- **Performance Graph**: View a graphical representation of the trader's performance over time.

## Tech Stack

- **React**: The core framework for building the user interface.
- **CSS**: Custom styling for layout and responsiveness.
- **React Hooks**: Used for state management (`useState`, `useEffect`).
- **Recharts**: Library used to visualize the performance graph.

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/PraptiTeredesa/leaderboard.git
   ```

2. Navigate to the project directory:

   ```bash
   cd leaderboard
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Run the application:

   ```bash
   npm start
   ```

   This will start the development server and open the application in your default browser.

## Usage

### 1. Leaderboard
The main page displays a leaderboard of the top traders. Click on any trader's name or rank to view their performance and trading log.

### 2. Performance Data
Once a trader is selected, you will see their **Performance Box** with detailed metrics, such as:
- Starting balance
- Current equity and balance
- Cumulative profit/loss
- Return percentage
- Active days
- Profit factor
- Average winning trade

### 3. Trading Log
You will also be able to view the trader's **Trading Log**, showing all the trades they’ve made, including:
- Open time and close time
- Symbol and position ID
- Trade type (BUY/SELL)
- Volume and prices
- Profit and percentage change for each trade

### 4. Performance Graph
The **Performance Graph** visually represents the trader's performance over time, showing the balance and equity progression.

- **Navbar.jsx**: Contains the navigation bar component.
- **PerformanceBox.jsx**: Displays performance data of the selected trader.
- **PerformanceGraph.jsx**: Displays the performance graph for the selected trader.
- **TradesTable.jsx**: Displays the trading log for the selected trader.
- **Leaderboard.jsx**: Contains the main leaderboard page.

## Contributing

1. Fork the repository.
2. Create your branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to your branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
