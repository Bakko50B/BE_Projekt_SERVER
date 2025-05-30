/**
 * Mongooseschema för bordsbokningar
 */

const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    name: { type: String, required: true },     // Namn på bokaren
    guests: { type: Number, required: true },   // Antal personer
    date: { type: String, required: true },     // Datum för bokning (YYYY-MM-DD)
    time: { type: String, required: true },     // (ex. "18:00")
    email: { type: String, required: true },    // E-postadress för kontakt
    phone: { type: String, required: true },    // Telefonnummer för kontakt
}, { timestamps: true });                       // Skapar automatiska tidsstämplar

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
