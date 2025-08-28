# 🌐 MERN Stack with MongoDB Atlas (Dockerized)
This project is a **MERN (MongoDB, Express, React, Node.js) stack application** containerised with Docker and connected to **MongoDB Atlas** as the cloud database.

---

## 🚀 Features

- Full-stack MERN application (Frontend + Backend)
- MongoDB Atlas for database hosting
- Dockerized services for easy deployment
- Ready-to-use scripts to run both backend and frontend

---

## ⚙️ Setup Instructions
<br>
### 1️⃣ Configure MongoDB Atlas <br>
In the backend/db.js file, replace the MongoDB URL with your MongoDB Atlas cluster connection string:

const mongoURI = "your-mongodb-atlas-cluster-url";

⚠️ Make sure your Atlas cluster allows connections from your IP.
<br>

### 2️⃣ Run Backend
#### Navigate to the backend folder and start the server:

cd backend <br>
npm install <br>
npm run server <br>
<br>

### 3️⃣ Run Frontend
#### Navigate to the frontend folder and start the React app:

cd frontend <br>
npm install <br>
npm start <br>
<br>

### 🐳 Run with Docker (Optional)
#### You can also spin up the services with Docker Compose:

docker-compose up --build

---

### 📬 Contact

Author: Madusha Lakshan

GitHub: UbimasterOfficial

Email: dmmadushalw1999@gmail.com

