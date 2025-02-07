import axios from "axios";

export const getNumberProperties = async (number) => {
  try {
    const response = await axios.get(
      `http://numbersapi.com/${number}/math?json`
    );
    console.log("API Response:", response); // Log the full response
    return response.data;
  } catch (error) {
    console.error("Error fetching number properties:", error);
    return null;
  }
};
