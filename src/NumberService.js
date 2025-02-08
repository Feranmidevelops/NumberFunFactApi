import axios from "axios";

export const getNumberProperties = async (number) => {
  // Validate input to ensure it's a number
  if (isNaN(number) || number === "" || number === null) {
    return { error: "Invalid input: Please enter a numeric value." };
  }

  try {
    const response = await axios.get(
      `https://corsproxy.io/?http://numbersapi.com/${number}/math?json`
    );
    console.log("API Response:", response.data); // Log only the data
    return response.data;
  } catch (error) {
    console.error("Error fetching number properties:", error);
    return { error: "Failed to fetch number properties." };
  }
};
