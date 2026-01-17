<div align="center">

# Resume Backend API  
### Backend Track A – Software & AI Developer Internship Assessment

A minimal, production-minded backend project that stores my **real resume data**
in a database and exposes clean REST APIs to create, read, update, and query it.

</div>

---

## 🚀 Live Deployment

| Resource | Link |
|--------|------|
| Base URL | https://resume-backend-api.onrender.com |
| Health Check | https://resume-backend-api.onrender.com/health |
| Get Profile | https://resume-backend-api.onrender.com/profile |
| Top Skills (Query) | https://resume-backend-api.onrender.com/skills/top |

---

## 🧱 Tech Stack

| Layer | Technology |
|-----|-----------|
| Runtime | Node.js |
| Framework | Express |
| ORM | Prisma |
| Database | SQLite |
| Frontend | Plain HTML + JavaScript |
| Hosting | Render (Free Tier) |

---

## 📦 Features

- Persistent database with real resume data
- REST APIs covering **Create, Read, Update**
- Query endpoint to demonstrate filtering
- Health endpoint for liveness checks
- Minimal frontend to consume backend APIs
- Clean schema with relations and constraints

---

## 📌 API Endpoints

✔ Supports updating profile fields via `PUT /profile`

### Health Check
```http
GET /health
````

```json
{ "status": "ok" }
```

---

### Create Profile (Seeding – Used Once)

```http
POST /profile
```

```bash
curl -X POST https://resume-backend-api.onrender.com/profile \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Sumit Kumar",
    "email": "sumit.kumar120664@gmail.com",
    "education": "B.Tech in Computer Science and Engineering, NIT Delhi (2023–2027, CGPA: 7.87)",
    "github": "https://github.com/sumitkr-2",
    "linkedin": "https://www.linkedin.com/in/sumit-kumar2004",
    "portfolio": "https://sumitkr-2.github.io/Portfolio_website",
    "skills": ["C++","C","Python","JavaScript","REST APIs","Docker","Git"]
  }'
```

---

### Read Profile

```http
GET /profile
```

Returns the stored profile along with associated skills.

---

### Update Profile

```http
PUT /profile
```

```bash
curl -X PUT https://resume-backend-api.onrender.com/profile \
  -H "Content-Type: application/json" \
  -d '{
    "education": "B.Tech in Computer Science and Engineering, NIT Delhi (Updated)"
  }'
```

---

### Query Endpoint – Top Skills

```http
GET /skills/top
```

Returns a subset of stored skills to demonstrate query functionality.

---

## 🗄 Database Schema (Simplified)

### Profile

* id
* name
* email *(unique)*
* education
* github
* linkedin
* portfolio

### Skill

* id
* name
* profileId *(relation)*

---

## 🖥 Frontend

A very minimal HTML frontend is served from the `/public` directory.

* Fetches `/profile` on page load
* Demonstrates backend → frontend integration
* Intentionally simple (backend-focused assessment)

---

## 🖼 Screenshots

> Screenshots are included to demonstrate successful deployment and API responses.

| Description           | Preview                 |
| --------------------- | ----------------------- |
| Home Page (Frontend)  |<img width="634" height="416" alt="image" src="https://github.com/user-attachments/assets/f12a85a7-b447-47fb-9d1d-4c818f20a78e" />|
| GET /profile response |<img width="657" height="593" alt="image" src="https://github.com/user-attachments/assets/7498d96b-1a57-453c-965b-6bc6b84a08ef" />|
| Top Skills          |<img width="571" height="517" alt="image" src="https://github.com/user-attachments/assets/6ec553de-353e-4359-99f7-59721c9a5570" />|



## ▶️ Run Locally

```bash
git clone https://github.com/sumitkr-2/resume-backend-api
cd resume-backend-api
npm install
```

Create `.env`:

```env
DATABASE_URL="file:./prisma/dev.db"
PORT=3000
```

Initialize database:

```bash
npx prisma generate
npx prisma db push
```

Run server:

```bash
npm start
```

Open:

```
http://localhost:3000
```

---

## ⚠️ Deployment Notes (Render Free Tier)

* SQLite used due to free hosting constraints
* Database files are **not committed** to version control
* Prisma synchronizes schema at runtime
* Single-profile system by design

---

## 📄 Resume

**Resume Link:**
[https://drive.google.com/file/d/1_8KBDq_a3z9btfwt2NUKBkdinxeg8neT/view](https://drive.google.com/file/d/1_8KBDq_a3z9btfwt2NUKBkdinxeg8neT/view)

---

## 🔚 Known Limitations

* No authentication (out of scope)
* Single-profile use case
* Minimal frontend by design
* Projects and work history can be added using the same schema pattern

---


## © Copyright
© 2026 **Sumit Kumar**.
All rights reserved.

---
