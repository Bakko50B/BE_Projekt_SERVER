/**
 * Mongooseschema för Rätter
 */

const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String },
    category: { type: String, enum: ["förrätt", "huvudrätt", "efterrätt", "dryck"], required: true },
    price: { type: Number, required: true },
    typ: {type: String},
    alkoholhalt: {type: Number, default: 0}
}, { timestamps: true });                                           // Hanterar createdAt & updatedAt automatiskt

const Dish = mongoose.model("Dish", dishSchema);
module.exports = Dish;