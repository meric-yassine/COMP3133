const express = require("express");
const Restaurant = require("../models/Restaurant");

const router = express.Router();

/**
 * 1) GET all restaurants (all columns)
 * GET http://localhost:3000/restaurants
 */
router.get("/", async (req, res) => {
  try {
    const { sortBy } = req.query;

    // 3) GET all restaurants sorted by restaurant_id ASC/DESC
    // Only return _id, cuisine, name, city, restaurant_id
    if (sortBy) {
      const direction = String(sortBy).toUpperCase() === "DESC" ? -1 : 1;

      const results = await Restaurant.find(
        {},
        { _id: 1, cuisine: 1, name: 1, city: 1, restaurant_id: 1 }
      ).sort({ restaurant_id: direction });

      return res.json(results);
    }

    const results = await Restaurant.find({});
    return res.json(results);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

/**
 * 2) GET by cuisine
 * GET http://localhost:3000/restaurants/cuisine/Bakery
 */
router.get("/cuisine/:cuisine", async (req, res) => {
  try {
    const cuisine = req.params.cuisine;
    const results = await Restaurant.find({ cuisine });
    return res.json(results);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

/**
 * 4) cuisine=Delicatessen AND city != Brooklyn
 * Return only cuisine, name, city (exclude id)
 * Sort by name ASC
 * GET http://localhost:3000/restaurants/Delicatessen
 */
router.get("/:cuisine", async (req, res) => {
  try {
    const cuisine = req.params.cuisine;

    const results = await Restaurant.find(
      { cuisine, city: { $ne: "Brooklyn" } },
      { _id: 0, cuisine: 1, name: 1, city: 1 }
    ).sort({ name: 1 });

    return res.json(results);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

module.exports = router;
