/**
 * Fil för hantering av autentisering
 * Middleware
 */

const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: "Du får inte vara här!" });
    }

    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: "Ingen giltig token!", error: err.message });
        }
        req.user = decoded; // Spara användarinformationen i request-objektet
        next();
    });
}

module.exports = authenticateToken;
