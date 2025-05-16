const mongoose = require("mongoose");

const weekMenuSchema = new mongoose.Schema({
    weekNumber: { type: Number, required: true },
    days: [{
        day: { type: String, enum: ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag"], required: true },
        dishes: [{ type: String, required: true }] 
    }]
}, { timestamps: true }); // Sköter createdAt & updatedAt automatiskt


const WeekMenu = mongoose.model("WeekMenu", weekMenuSchema);
module.exports = WeekMenu;
