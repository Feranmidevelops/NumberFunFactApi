require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Root route for basic information
app.get("/", (req, res) => {
  res.send("Welcome to the Number Fun Fact API! use /api/classify-number to get a fun fact.");
});

// Route for number-based requests
app.get("/api/classify-number", async (req, res) => {
  let { number } = req.query;

  if (!number) {
    return res.status(400).json({ error: "Missing parameter: 'number' is required." });
  }


  // Validate input
  number = parseFloat(number);
  number = Math.abs(Number(number));
  number = Math.abs(Math.round(number));

  if (isNaN(number)) {
    return res
      .status(400)
      .json({ error: "Invalid input: Please enter a numeric value." });
  }

  try {
    const response = await axios.get(
      `http://numbersapi.com/${number}/math?json`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching number fact" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
