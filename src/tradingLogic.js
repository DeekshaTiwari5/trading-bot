const {
  updateProfitLoss,
  getSummary,
} = require("./tracking");

let lastPrice = 100; // Initial stock price
let balance = 1000; // Initial balance
let position = 0; // Number of stocks held
let trades = []; // Record of trades

// Trading logic
function trade(currentPrice) {
  console.log(`Current Price: ${currentPrice}`);

  // Buy condition
  if (currentPrice < lastPrice * 0.98 && balance >= currentPrice) {
    position++;
    balance -= currentPrice;
    trades.push({ action: "buy", price: currentPrice, timestamp: new Date() });
    console.log(`Bought 1 stock at ${currentPrice}`);
  }
  // Sell condition
  else if (currentPrice > lastPrice * 1.03 && position > 0) {
    position--;
    balance += currentPrice;
    trades.push({ action: "sell", price: currentPrice, timestamp: new Date() });
    console.log(`Sold 1 stock at ${currentPrice}`);
  }

  lastPrice = currentPrice; // Update lastPrice for the next trade
  updateProfitLoss(currentPrice, trades); // Update profit/loss tracker
}

// Start trading bot simulation
function startTradingBot() {
  setInterval(() => {
    // Replace with API call to fetch stock price in a real scenario
    const currentPrice = Math.random() * 200; // Mock stock price
    trade(currentPrice);
    const { realizedProfit, unrealizedProfit } = getSummary();
    console.log(
      `Realized Profit: ${realizedProfit}, Unrealized Profit: ${unrealizedProfit}`
    );
  }, 5000); // Fetch new price every 5 seconds
}

module.exports = { startTradingBot };
