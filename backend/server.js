import express from "express";
import cors from "cors";
import fs from "fs";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app = express();
const PORT = 5000;
// const clientUrl = "http://localhost:5173"; // 
const allowedOrigins = [
  "http://localhost:5174",
  "http://localhost:3000",
  "https://portryfarm.vercel.app"
];

app.use(cors({
  origin(origin, callback) {
    // Allow server-to-server, Postman, curl
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true
}));


// Get absolute path of backend folder
const __dirname = path.resolve();

// Utility function to read JSON files
const readJSONFile = (filePath, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading JSON file" });
    }
    res.json(JSON.parse(data));
  });
};

// Endpoint for home page
app.get("/api/content/home", (req, res) => {
  const filePath = path.join(__dirname, "content/home.json");
  readJSONFile(filePath, res);
});

// Endpoint for products page
app.get("/api/content/products", (req, res) => {
  const filePath = path.join(__dirname, "content/products.json");
  readJSONFile(filePath, res);
});

// Endpoint for about page
app.get("/api/content/about", (req, res) => {
  const filePath = path.join(__dirname, "content/about.json");
  readJSONFile(filePath, res);
});

// Endpoint for contact page
app.get("/api/content/contact", (req, res) => {
  const filePath = path.join(__dirname, "content/contact.json");
  readJSONFile(filePath, res);
});

// Endpoint for blog page
app.get("/api/content/blog", (req, res) => {
  const filePath = path.join(__dirname, "content/blog.json");
  readJSONFile(filePath, res);
});

// Endpoint for team page
app.get("/api/content/team", (req, res) => {
  const filePath = path.join(__dirname, "content/team.json");
  readJSONFile(filePath, res);
});

// Endpoint for review page
app.get("/api/content/review", (req, res) => {
  const filePath = path.join(__dirname, "content/review.json");
  readJSONFile(filePath, res);
});

// Endpoint for order page
app.get("/api/content/order", (req, res) => {
  const filePath = path.join(__dirname, "content/order.json");
  readJSONFile(filePath, res);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
