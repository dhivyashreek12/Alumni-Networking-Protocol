const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from public folder
app.use(express.static(path.join(__dirname, "public")));

// Home Route
app.get("/", (req, res) => {
    res.redirect("/login.html");
});

// Login API
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (email && password) {
        res.json({
            success: true,
            message: "Login Successful"
        });
    } else {
        res.status(400).json({
            success: false,
            message: "Email and Password Required"
        });
    }
});

// Profile API
app.post("/profile", (req, res) => {
    console.log(req.body);

    res.json({
        success: true,
        message: "Profile Saved Successfully"
    });
});

// Jobs API
app.get("/jobs", (req, res) => {
    res.json([
        {
            company: "Google",
            role: "Software Engineer"
        },
        {
            company: "Zoho",
            role: "Web Developer"
        }
    ]);
});

// Mentorship API
app.post("/mentor", (req, res) => {
    res.json({
        success: true,
        message: "Mentorship Request Sent"
    });
});

// Events API
app.get("/events", (req, res) => {
    res.json([
        {
            title: "Alumni Meet 2026",
            date: "25-08-2026",
            venue: "College Auditorium"
        }
    ]);
});

// Messages API
app.post("/message", (req, res) => {
    res.json({
        success: true,
        message: "Message Sent"
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server Running: http://localhost:${PORT}`);
});