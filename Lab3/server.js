const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const restaurantsRouter = require("./routes/restaurants");

const app = express();
app.use(express.json());

app.use("/restaurants", restaurantsRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB Atlas");
    app.listen(process.env.PORT || 3000, () =>
      console.log(`Server running on http://localhost:${process.env.PORT || 3000}`)
    );
  })
  .catch((err) => console.error("MongoDB connection error:", err));
