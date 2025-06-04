/**
 * Mongooseschema för bordsbokningar
 */

const mongoose = require("mongoose");


const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Namn måste anges"], minlength: [2, "Namnet måste vara minst 2 tecken långt"] },
    guests: { type: Number, required: [true, "Antal gäster måste anges"], min: [1, "Minst en gäst krävs"] },
    date: { type: Date, required: [true, "Datum måste anges"] },  
    time: { type: String, required: [true, "Tid måste anges"] },  
    email: { type: String, required: [true, "E-post måste anges"] },
    phone: { type: String, required: [true, "Telefonnummer måste anges"] }
}, { timestamps: true });


// const bookingSchema = new mongoose.Schema({
//     name: { type: String, required: true },     // Namn på bokaren
//     guests: { type: Number, required: true },   // Antal personer
//     date: { type: String, required: true },     // Datum för bokning (YYYY-MM-DD)
//     time: { type: String, required: true },     // (ex. "18:00")
//     email: { type: String, required: true },    // E-postadress för kontakt
//     phone: { type: String, required: true },    // Telefonnummer för kontakt
// }, { timestamps: true });                       // Skapar automatiska tidsstämplar

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
