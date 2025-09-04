// server.js
import express from "express";
import cors from "cors";
import predictRoute from "./routes/predict.js"; // note the .js extension

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // allow requests from any origin
app.use(express.json()); // parse JSON body

// Test route
app.get("/", (req, res) => {
  res.send("Hello from backend!");
});


app.use("/predict", predictRoute)


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

