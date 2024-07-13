const express = require("express");
const authRoutes = require("./routes/authRoute");
const categoryRoute = require("./routes/categoryRoute");
const productRoute = require("./routes/productRoute");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const path = require("path");
dotenv.config();
connectDb();
app.use(cors());

app.use(express.json());
app.use(express.static(path.join(__dirname, "./client/build")));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/product", productRoute);
app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is Running on Port ${PORT}`);
});
