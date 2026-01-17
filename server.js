require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
app.use(express.static("public")); // serves frontend

// Health check (mandatory)
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Create profile with skills
app.post("/profile", async (req, res) => {
  try {
    const profile = await prisma.profile.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        education: req.body.education,
        github: req.body.github,
        linkedin: req.body.linkedin,
        portfolio: req.body.portfolio,
        skills: {
          create: req.body.skills.map(s => ({ name: s })),
        },
      },
    });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get profile
app.get("/profile", async (req, res) => {
  const profile = await prisma.profile.findFirst({
    include: { skills: true },
  });
  res.json(profile);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
