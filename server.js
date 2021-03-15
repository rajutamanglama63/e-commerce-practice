const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const productRoute = require("./routes/productRoutes");

const app = express();

// mongoDB connection
connectDB();

dotenv.config();
const Port = process.env.PORT || 4000;

// middleware
app.use(express.json());

// routes
// app.use("/", (req, res) => {
//     res.send("Hello!");
// });

app.use("/api/products", productRoute);

app.listen(Port, () => {
    console.log(`Server running on port http://localhost:${Port}`);
});

