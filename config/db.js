const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connection established...");
    } catch (error) {
        console.error({msg : error.message});
        process.exit(1);
    }
}

module.exports = connectDB;