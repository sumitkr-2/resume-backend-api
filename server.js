require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const { execSync } = require("child_process");

const app = express();
const prisma = new PrismaClient();

/* ✅ RUN PRISMA ON START (FREE PLAN FIX) */
try {
  execSync("npx prisma db push", { stdio: "inherit" });
  console.log("✅ Prisma DB synced");
} catch (e) {
  console.error("❌ Prisma DB sync failed", e);
}

app.use(cors());
app.use(express.json());
app.use(express.static("public")); // serves frontend

/* Health check */
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

/* Create profile */
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
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

/* Get profile */
app.get("/profile", async (req, res) => {
  const profile = await prisma.profile.findFirst({
    include: { skills: true },
  });
  res.json(profile);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
