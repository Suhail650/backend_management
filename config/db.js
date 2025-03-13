const mongoose = require("mongoose");
require("dotenv").config();
const connection_String = process.env.CLUSTURE_URI;

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(connection_String);
    console.log(`MongoDB Connected : ${connect.connection.host}`);
  } catch (error) {
    console.log(`Connection Error : ${error.message}`);
    process.exit(1);
  }
};

mongoose.connection.once("connected", () => {
  console.log('\x1b[96m%s\x1b[0m',"🛢️  database connected Successfully");
});
mongoose.connection.on("error", (error) => {
  console.log(`DB Error : ${error.message}`);
});
mongoose.connection.on("disconnected", () => {
  console.log("DB Disconnected... ...Reconnecting...");
  connectDB();
});

module.exports = connectDB;
