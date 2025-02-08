require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return false;
};


const isPerfect = (num) => {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) sum += i;
  }
  return sum === num;
};

const digitSum = (num) => {
  return num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
};

const properties = (num) => {
  const props = [];
  if (isPrime(num)) props.push("prime");
  if (isPerfect(num)) props.push("perfect");
  if (num % 2 !== 0) props.push("odd"); // Add other properties if needed
  return props;
};

// Root route for basic information
app.get("/", (req, res) => {
  res.send("Welcome to the Number Fun Fact API! Use /api/classify-number to get a fun fact.");
});

// Route for number-based requests
app.get("/api/classify-number", async (req, res) => {
  let { number } = req.query;

  // Check if the 'number' parameter is missing
  if (!number) {
    return res.status(400).json({ error: "Missing parameter: 'number' is required." });
  }

  // Validate input, convert to number, and round it
  number = parseFloat(number);
  number = Math.abs(Math.round(number)); // Round to nearest integer

  // Validate the number
  if (isNaN(number)) {
    return res.status(400).json({ error: "Invalid input: Please enter a numeric value." });
  }

  try {
    // Fetch the fun fact from the Numbers API
    const response = await axios.get(`http://numbersapi.com/${number}/math?json`);

    // Return the response with the additional properties
    res.json({
      number: number,
      is_prime: isPrime(number),
      is_perfect: isPerfect(number),
      properties: properties(number),
      digit_sum: digitSum(number),
      fun_fact: response.data.text,
    });
  } catch (error) {
    // Handle any errors from the API call or internal issues
    console.error(error); // Log the error to the console
    res.status(500).json({ error: "Error fetching number fact" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
