
<div align="center">

# 🧩 Resume Backend API (Track A)

A minimal, production-minded **backend project** built as part of the  
**Intern – Software & AI Developer** assessment.

This application stores my **real resume/profile data** in a database, exposes it via clean REST APIs, and serves a very basic frontend to consume those APIs.

</div>

---

## 🚀 Live Demo

- 🌐 **Frontend:** https://resume-backend-api.onrender.com  
- 📄 **Profile API:** https://resume-backend-api.onrender.com/profile  
- ❤️ **Health Check:** https://resume-backend-api.onrender.com/health  

---

## 🧱 Tech Stack

| Layer | Technology |
|-----|------------|
| Backend | Node.js, Express |
| Database | SQLite |
| ORM | Prisma |
| Frontend | HTML, Vanilla JavaScript |
| Hosting | Render |

---

## ✨ Features

- Persistent database seeded with **real resume data**
- REST APIs to create and read profile information
- Relational data modeling for skills
- Health endpoint for service liveness
- Minimal frontend that calls the hosted backend API
- Clean, readable project structure

---

## 📌 API Endpoints

### ✅ Health Check
```http
GET /health
````

Response:

```json
{ "status": "ok" }
```

---

### 👤 Get Profile

```http
GET /profile
```

Returns the stored profile along with associated skills.

---

### 📝 Create Profile (used for seeding)

```http
POST /profile
```

Example request:

```bash
curl -X POST https://resume-backend-api.onrender.com/profile \
-H "Content-Type: application/json" \
-d '{
  "name": "Sumit Kumar",
  "email": "sumit.kumar120664@gmail.com",
  "education": "B.Tech in Computer Science and Engineering, National Institute of Technology Delhi (2023–2027, CGPA: 7.87)",
  "github": "https://github.com/sumitkr-2",
  "linkedin": "https://www.linkedin.com/in/sumit-kumar2004",
  "portfolio": "https://sumitkr-2.github.io/Portfolio_website",
  "skills": [
    "C++",
    "C",
    "Python",
    "JavaScript",
    "FastAPI",
    "REST APIs",
    "MySQL",
    "Docker",
    "Git",
    "GitHub",
    "Redis",
    "Algorithms",
    "Data Structures",
    "Operating Systems",
    "DBMS",
    "Computer Networks"
  ]
}'
```

---

## 🗄 Database Schema

### Profile

* `id` (Primary Key)
* `name`
* `email` (unique)
* `education`
* `github`
* `linkedin`
* `portfolio`

### Skill

* `id` (Primary Key)
* `name`
* `profileId` (Foreign Key → Profile)

Schema is defined using Prisma in `prisma/schema.prisma`.

---

## 🖥 Frontend

The frontend is intentionally **very basic** and implemented using plain HTML and JavaScript.

* Automatically fetches data from `/profile` on page load
* Demonstrates backend → frontend integration
* Light inline styling only (no frameworks)

This strictly follows the **“very basic frontend”** requirement.

---

## ▶️ Run Locally

Clone the repository:

```bash
git clone https://github.com/sumitkr-2/resume-backend-api
cd resume-backend-api
npm install
```

Create `.env` file:

```env
DATABASE_URL="file:./prisma/dev.db"
PORT=3000
```

Initialize database:

```bash
npx prisma generate
npx prisma db push
```

Start the server:

```bash
npm run dev
```

Open in browser:

```
http://localhost:3000
```

---

## 📄 Resume

🔗 **Resume Link:**
[https://drive.google.com/file/d/1_8KBDq_a3z9btfwt2NUKBkdinxeg8neT/view?usp=sharing](https://drive.google.com/file/d/1_8KBDq_a3z9btfwt2NUKBkdinxeg8neT/view?usp=sharing)

---

## ⚠️ Known Limitations

* No authentication or authorization (out of scope)
* Single-profile use case
* No pagination or advanced filtering
* Minimal UI by design

---

## 🧠 Notes

The scope was intentionally kept **small and production-minded**, focusing on:

* Correct API design
* Persistent data storage
* Clear schema modeling
* Clean documentation

Advanced features and UI complexity were intentionally avoided to align with the backend-focused nature of the assessment.

````

---

## ✅ AB KYA KARNA HAI (LAST STEPS)

### 1️⃣ README commit kar
```bash
git add README.md
git commit -m "Finalize README with deployed links and resume"
git push origin main
````

### 2️⃣ Submit karte time yeh links daalna

* **GitHub Repo:**
  [https://github.com/sumitkr-2/resume-backend-api](https://github.com/sumitkr-2/resume-backend-api)
* **Live App:**
  [https://resume-backend-api.onrender.com](https://resume-backend-api.onrender.com)
---
