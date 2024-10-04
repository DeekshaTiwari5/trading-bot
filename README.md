# Trading Bot Simulation

This is a simple trading bot simulation that executes trades based on predefined rules and conditions while tracking its profit/loss and performance metrics.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Trading Logic](#trading-logic)
- [Profit/Loss Tracking](#profitloss-tracking)
- [Contributing](#contributing)
- [License](#license)

## Features
- Continuously monitors stock price changes using mock data.
- Executes trades based on simple trading strategies.
- Tracks profit/loss metrics for trades made.
- Provides an API endpoint to retrieve trading summary.

## Technologies Used
- Node.js
- Express
- dotenv (for environment variables)

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm (Node package manager)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/trading-bot-simulation.git
   cd trading-bot-simulation

2. Install dependencies:

 ```bash
-npm install

3.  .env file 
PORT=8000

4.  Start the server:
 **npm start

The server will run on the specified port (default: 8000).
 You can access the API using the following endpoint:[ http://localhost:8000/api/summary]
API Endpoints
GET /api/summary: Returns the current profit/loss

summary of the trading bot.