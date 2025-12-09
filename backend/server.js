import express from "express";
import cors from "cors";
import fs from "fs";
import dontenv from "dotenv";
import path from "path";
dontenv.config()

const app = express();
const PORT = 5000;
const clientUrl = process.env.CLIENT_URL || "http://localhost:5173";

app.use(cors({
  origin: clientUrl,
  credentials: true,
}));

// Get directory of the content.json file
const __dirname = path.resolve();

app.get("/api/content", (req, res) => {
  const filePath = path.join(__dirname, "content.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading JSON file" });
    }
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
