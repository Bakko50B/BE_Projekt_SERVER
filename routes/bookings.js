const express = require("express");
const router = express.Router();
const Booking = require("../models/booking");
const authenticateToken = require("../middleware/authMiddleware");

// GET - Hämta alla bokningar (Öppen)
router.get("/", async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ error: "Serverfel vid hämtning av bokningar!", details: error.message });
    }
});

// POST - Skapa en ny bokning (Öppen)
router.post("/", async (req, res) => {
    try {
        const { name, guests, date, time, email, phone } = req.body;
        const newBooking = new Booking({ name, guests, date, time, email, phone });
        await newBooking.save();
        res.status(201).json(newBooking);
    } catch (error) {
        res.status(400).json({ error: "Fel vid skapande av bokning!", details: error.message });
    }
});

// DELETE - Ta bort en bokning (Skyddad)
router.delete("/:id", authenticateToken, async (req, res) => {
    try {
        const bookingToDelete = await Booking.findById(req.params.id);
        if (!bookingToDelete) {
            return res.status(404).json({ error: "Bokningen hittades inte!" });
        }
        await Booking.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Bokningen har tagits bort!" });
    } catch (error) {
        res.status(400).json({ error: "Fel vid borttagning av bokning!", details: error.message });
    }
});

module.exports = router;
