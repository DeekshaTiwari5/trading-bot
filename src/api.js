const mockPrices = [100, 101, 98, 102, 97, 103, 99]; // Mock price data
let currentIndex = 0;

// Function to setup mock API
function setupMockApi(app) {
  app.get("/api/stock-price", (req, res) => {
    // Rotate through mock prices
    if (currentIndex >= mockPrices.length) currentIndex = 0;
    res.json({ price: mockPrices[currentIndex++] });
  });
}

module.exports = { setupMockApi};
