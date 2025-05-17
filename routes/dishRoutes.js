const express = require('express');
const router = express.Router();
const Dish = require("../models/Dish");
const authenticateToken = require("../middleware/authMiddleware");

// GET - Alla rätter (Öppen)
router.get("/", async (req, res) => {
    try {
        const dishes = await Dish.find();
        res.status(200).json(dishes);
    } catch (error) {
        res.status(500).json({ error: "Serverfel vid hämtning av rätter!" });
    }
});

// Dish med unikt id
router.get("/:id", authenticateToken, async (req, res) => {
    try {
        const dish = await Dish.findById(req.params.id);
        if (!dish) {
            return res.status(404).json({ error: "Rätten hittades inte!" });
        }
        res.status(200).json(dish);
    } catch (error) {
        res.status(400).json({ error: "Felaktigt ID-format!" });
    }
});

// POST - Skapa en ny rätt (Skyddad)
router.post("/", authenticateToken, async (req, res) => {
    try {
        console.log("Incoming data:", req.body);
        const { name, description, category, price } = req.body;
        console.log("Category before saving:", category);
        const newDish = new Dish({ name, description, category, price });
        await newDish.save();
        res.status(201).json(newDish);
    } catch (error) {
        if (error.name === "ValidationError") {
            return res.status(400).json({ error: "Valideringsfel: Kontrollera att alla fält är korrekt ifyllda!" });
        }
        if (error.code === 11000) {
            return res.status(400).json({ error: `Rätten "${error.keyValue.name}" finns redan!` });
        }
        console.error("Fel vid skapande av rätt:", error); // Logga felet!
        res.status(400).json({ error: error.message });
    }
});

// PUT - Uppdatera en rätt (Skyddad)
router.put("/:id", authenticateToken, async (req, res) => {
    try {
        const updatedDish = await Dish.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedDish);
    } catch (error) {
        res.status(400).json({ error: "Fel vid uppdatering!" });
    }
});

// DELETE - Ta bort en rätt (Skyddad)
router.delete("/:id", authenticateToken, async (req, res) => {
    try {
        await Dish.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Rätten har tagits bort!" });
    } catch (error) {
        res.status(400).json({ error: "Fel vid borttagning!" });
    }
});

module.exports = router;
