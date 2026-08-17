require("dotenv").config();

const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");
const errorHandler = require("./middleware/errorHandler");
const authRoutes = require("./routes/authRoutes");
const app = express();




// Middleware
app.use(cors());
app.use(express.json());


// Home Route
app.get("/", (req, res) => {
    res.send("Task Manager API is running...");
});


// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/users", userRoutes);

// Error Handling Middleware
app.use(errorHandler);


// Fallback Error Handler
app.use((err, req, res, next) => {

    console.error(err.stack);

    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Internal Server Error",
    });

});


module.exports = app;