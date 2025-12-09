import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";

const app = express();
const PORT = 5000;
app.use(cors())

// Get directory path safely in ES modules
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
