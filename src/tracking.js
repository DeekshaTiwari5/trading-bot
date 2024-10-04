let realizedProfit = 0; // Total realized profit
let unrealizedProfit = 0; // Total unrealized profit
let position = 0; // Number of stocks held

// Update profit and loss based on current price and trades
function updateProfitLoss(currentPrice, trades) {
  unrealizedProfit =
    position *
    (currentPrice -
      trades.find((trade) => trade.action === "buy" && !trade.sold)?.price ||
      0);

  trades.forEach((trade) => {
    if (trade.action === "sell") {
      realizedProfit +=
        trade.price -
        trades.find((t) => t.action === "buy" && t.timestamp < trade.timestamp)
          .price;
    }
  });
}

// Get profit and loss summary
function getSummary() {
  return {
    realizedProfit,
    unrealizedProfit,
  };
}

module.exports = { updateProfitLoss, getSummary };
