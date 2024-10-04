# Trading Bot Backend

## Description
This is a backend application that simulates a basic trading bot for a hypothetical stock market. It monitors stock price changes and makes buy/sell decisions based on predefined strategies.

## Features
- Mock stock price generation.
- Trading logic (buy when price drops by 2%, sell when price increases by 3%).
- Profit/loss tracking with trade history.

## Setup

1. Install dependencies:

```bash
   npm install

2.Run the application:

```bash
Copy code
npm start
API Endpoints:

/api/stock-price: Get the current stock price.
/api/report: Get a summary of trades made by the bot.
