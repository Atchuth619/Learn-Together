# 📚 Learn Together (Daily Trio)

A simple **mobile-first web application** designed to build a daily learning habit by sharing knowledge in three areas:

* 👤 Famous Person
* 📰 Tech News
* 💰 Investment Idea (optional)

This project is built as a **minimal full-stack application** without authentication, focused on simplicity, speed, and real-world usability.

---

## 🚀 Project Idea

Every day, users (friends or small groups) log:

* A **famous person** they learned about
* A **tech news update**
* An optional **investment idea**

This creates a **daily knowledge journal** and helps maintain a consistent learning habit.

---

## 🧱 Tech Stack

### Frontend (Client)

* React.js (Vite)
* Tailwind CSS
* Axios
* React Router

### Backend (Server)

* Node.js
* Express.js
* MongoDB (Atlas)

### Deployment (Free)

* Frontend: Vercel / Netlify
* Backend: Render / Railway
* Database: MongoDB Atlas

---

## 📁 Project Structure

```
learn-together/
│
├── Client/        # React Frontend
│
├── Server/        # Node.js Backend
│
└── README.md
```

---

## ⚙️ Features

* ✍️ Add Daily Entry (Person, News, Investment)
* 📱 Mobile-first UI design
* 📰 Feed to view all entries
* 📅 History tracking by date
* 🔥 Daily learning habit concept
* 👥 Multi-user support without authentication (manual name selection)

---

## 🧠 Data Model

```
DailyEntry {
  author: String,
  date: String,
  famousPerson: {
    name: String,
    notes: String
  },
  techNews: {
    title: String,
    summary: String
  },
  investment: {
    idea: String,
    notes: String
  }
}
```

---

## ⚛️ Frontend Setup (Client)

```bash
cd Client
npm install
npm run dev
```

App will run on:

```
http://localhost:5173
```

---

## 🟢 Backend Setup (Server)

```bash
cd Server
npm install
npm run dev
```

Server runs on:

```
http://localhost:5000
```

---

## 🔗 API Endpoints

### Base URL

```
http://localhost:5000
```

### Create Entry

```
POST /entry
```

### Get All Entries

```
GET /entries
```

---

## 📱 UI Screens

* Home (Feed)
* Add Entry Form
* History View

---

## 🎯 Future Enhancements

* 🔔 Daily reminders
* 📊 Streak tracking system
* ❤️ Like & comment feature
* 🌙 Dark mode
* 🤖 AI-based suggestions (person/news)
* 📂 Bookmark / Save entries

---

## 💡 Why This Project?

* Demonstrates **full-stack development**
* Focuses on **real-life daily habit building**
* Shows **mobile-first UI design skills**
* Clean and minimal **product thinking**

---

## 🧑‍💻 Author

**Atchutha Rama Reddy Karri**
Senior Software Engineer | React Developer

---

## ⭐ Contribution

Feel free to fork and enhance the project. Suggestions and improvements are welcome!

---

## 📦 Database Configuration

This project uses MongoDB Atlas for storing application data.

### 🔹 Database Details

- **Cluster Name:** `Cluster0`
- **Database Name:** `learn-together`
- **Collection Name:** `entries`

### ⚙️ Setup

1. Create a `.env` file inside the `Server/` folder.
2. Add your MongoDB Atlas connection string to the `MONGO_URI` variable. Example:

```
MONGO_URI=mongodb+srv://<username>:<password>@Cluster0.mongodb.net/learn-together?retryWrites=true&w=majority
```

3. Start the server:

```bash
cd Server
npm install
npm run dev
```

The backend will read `MONGO_URI` from environment variables using `dotenv`.

---

## 📌 License

This project is open-source and available under the MIT License.
