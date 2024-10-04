require("dotenv").config();
const express = require("express");
const { startTradingBot } = require("./src/tradingLogic");
const { setupMockApi } = require("./src/api");
const { getSummary } = require("./src/tracking");


const app = express();
const PORT = process.env.PORT || 8000;

// Start the mock API to serve stock prices
setupMockApi(app);

// Start the trading bot
startTradingBot();

app.get("/api/summary", (req, res) => {
  const summary = getSummary();
  res.json(summary);
});

app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`);
});

