const dotenv = require("dotenv");

const productData = require("./data/Products");
const connectDB = require("./config/db");
const Product = require("./model/productSchema");

dotenv.config();

connectDB();

const importData = async () => {
    try {
        await Product.deleteMany({});

        await Product.insertMany(productData);

        console.log("Data imported successfully...");
        process.exit();
    } catch (error) {
        console.error("Data import fail!!!", error);
        process.exit(1);
    }
}

importData();