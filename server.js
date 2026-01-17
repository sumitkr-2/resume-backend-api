require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const { execSync } = require("child_process");

const app = express();
const prisma = new PrismaClient();

/* ✅ RUN PRISMA ON START (FREE PLAN SAFE) */
try {
  execSync("npx prisma db push", { stdio: "inherit" });
  console.log("✅ Prisma DB synced");
} catch (e) {
  console.error("❌ Prisma DB sync failed", e.message);
}

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

/* ================= HEALTH ================= */
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

/* ================= CREATE PROFILE ================= */
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
          create: req.body.skills.map((s) => ({ name: s })),
        },
      },
      include: { skills: true },
    });

    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ================= READ PROFILE ================= */
app.get("/profile", async (req, res) => {
  const profile = await prisma.profile.findFirst({
    include: { skills: true },
  });
  res.json(profile);
});

/* ================= UPDATE PROFILE (REQUIRED) ================= */
app.put("/profile", async (req, res) => {
  try {
    const existing = await prisma.profile.findFirst();
    if (!existing) {
      return res.status(404).json({ error: "Profile not found" });
    }

    const updated = await prisma.profile.update({
      where: { id: existing.id },
      data: {
        name: req.body.name,
        email: req.body.email,
        education: req.body.education,
        github: req.body.github,
        linkedin: req.body.linkedin,
        portfolio: req.body.portfolio,
      },
      include: { skills: true },
    });

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ================= QUERY ENDPOINT (REQUIRED) ================= */
app.get("/skills/top", async (req, res) => {
  const skills = await prisma.skill.findMany({
    take: 5,
    orderBy: { id: "asc" },
  });
  res.json(skills);
});

/* ================= SERVER ================= */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
