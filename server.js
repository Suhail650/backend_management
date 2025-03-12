const app = require("./app");
require("dotenv").config();
const connectDB = require("./config/db");

connectDB();
const port = process.env.PORT || 5002;
app.listen(port, () => {
  console.log(`Server Running on http://localhost:${port}`);
});
