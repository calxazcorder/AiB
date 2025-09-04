import express from "express";
import processPrediction from "../services/predictService.js"; // note the .js extension

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const formData = req.body;

    // Call the service function
    const result = await processPrediction(formData);

    // Send response back to frontend
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

export default router;

