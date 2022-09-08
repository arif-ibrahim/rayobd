const express = require("express");
const dotenv = require("dotenv");
const slug = require("./Common/Constants/slug");
const router = require("./Router");
const connectDB = require("./Config/db");
const commonErrorHandler = require("./Middleware/error");
// imports end

// APP DECLARATION
const app = express();

// .env
dotenv.config();

// DATABASE CONNECTION
connectDB();

app.use(express.json());

app.use(slug.API_ROOT_PATH, router);

//error middlewares
app.use(commonErrorHandler);

// listening to port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
