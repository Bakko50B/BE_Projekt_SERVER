const express = require('express');
const router = express.Router();
const WeekMenu = require("../models/WeekMenu");
const authenticateToken = require("../middleware/authMiddleware");

// GET - Alla veckomenyer (Öppen)
router.get("/", async (req, res) => {
    try {
        const weekMenus = await WeekMenu.find();
        res.status(200).json(weekMenus);
    } catch (error) {
        res.status(500).json({ error: "Serverfel vid hämtning av veckomenyer!" });
    }
});

// POST - Skapa en ny veckomeny (Skyddad)
router.post("/", authenticateToken, async (req, res) => {
    try {
        const { weekNumber, days } = req.body;
        const newWeekMenu = new WeekMenu({ weekNumber, days });
        await newWeekMenu.save();
        res.status(201).json(newWeekMenu);
    } catch (error) {
        res.status(400).json({ error: "Fel vid skapande av veckomeny!" });
    }
});

// PUT - Uppdatera en veckomeny (Skyddad)
router.put("/:id", authenticateToken, async (req, res) => {
    try {
        const updatedWeekMenu = await WeekMenu.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedWeekMenu);
    } catch (error) {
        res.status(400).json({ error: "Fel vid uppdatering!" });
    }
});

// DELETE - Ta bort en veckomeny (Skyddad)
router.delete("/:id", authenticateToken, async (req, res) => {
    try {
        await WeekMenu.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Veckomenyn har tagits bort!" });
    } catch (error) {
        res.status(400).json({ error: "Fel vid borttagning!" });
    }
});

module.exports = router;
