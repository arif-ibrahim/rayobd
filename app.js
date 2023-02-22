const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
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

app.use(cors());
app.use(express.json());
app.use(express.static(`${__dirname}/public/`));

app.use(slug.API_ROOT_PATH, router);

//error middlewares
app.use(commonErrorHandler);

// listening to port
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
