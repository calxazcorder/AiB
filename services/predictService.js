const API_BASE_URL = "http://localhost:8001"; // Flask API port

const processPrediction = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/predict`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    // Check if the response is ok before parsing JSON
    if (!response.ok) {
      const errorText = await response.text(); // Get as text first
      console.error(`Flask API error (${response.status}):`, errorText);
      return {
        success: false,
        prediction: null,
        error: `API returned ${response.status}`
      };
    }

    const result = await response.json(); // Only parse JSON if response is ok
    console.log(result);
    return {
      prediction: result.prediction,
    };
  } catch (error) {
    console.error("Error calling prediction API:", error);
    return {
      prediction
    };
  }
};

export default processPrediction;