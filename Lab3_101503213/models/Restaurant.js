const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema(
  {
    cuisine: String,
    name: String,
    city: String,
    restaurant_id: String,
  },
  { collection: "Restaurants", strict: false }
);

module.exports = mongoose.model("Restaurant", RestaurantSchema);
