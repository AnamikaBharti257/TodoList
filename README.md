# 📝 MERN To-Do Application

A full-stack To-Do application built using the MERN stack. It allows users to manage daily tasks with features like adding, editing, deleting, completing, and filtering tasks. Tasks are stored in MongoDB, so they remain available even after restarting the application.

## 🚀 Features

- **Add Tasks:** Create new tasks.
- **View Tasks:** Display all saved tasks.
- **Edit Tasks:** Update existing task descriptions.
- **Delete Tasks:** Remove tasks when no longer needed.
- **Mark as Completed:** Toggle tasks between completed and pending.
- **Filter Tasks:** View All, Active, or Completed tasks.
- **Task Statistics:** Display total, completed, and pending tasks.
- **Persistent Storage:** Store tasks in MongoDB Atlas.
- **Responsive UI:** Simple and clean user interface.

## 🛠️ Tech Stack

**Frontend**
- React.js
- JavaScript
- HTML5
- CSS3
- Fetch API

**Backend**
- Node.js
- Express.js
- REST API

**Database**
- MongoDB Atlas
- Mongoose

**Tools**
- VS Code
- Postman
- Git & GitHub
- npm

## 📂 Project Structure

```text
practiceproject/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   └── Todo.js
│   ├── routes/
│   │   ├── greetRoutes.js
│   │   ├── ageRoutes.js
│   │   └── todoRoutes.js
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── TodoForm.jsx
│   │   ├── App.jsx
│   │   └── App.css
│   └── package.json
│
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd practiceproject
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```env
MONGO_URI=your_mongodb_connection_string
```

Start the backend server:

```bash
npm run dev
```

Backend runs at:

`http://localhost:5000`

### 3. Frontend Setup

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the frontend URL displayed in your terminal, usually:

`http://localhost:5173`

## 🔗 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/todos` | Fetch all tasks |
| POST | `/api/todos` | Add a new task |
| DELETE | `/api/todos/:id` | Delete a task |
| PUT | `/api/todos/:id` | Toggle task completion |
| PATCH | `/api/todos/:id` | Edit a task |

## 💡 What I Learned

Through this project, I gained practical experience in:

- Building RESTful APIs using Express.js.
- Connecting a React frontend with a Node.js backend.
- Performing CRUD operations using MongoDB and Mongoose.
- Managing application state using React Hooks.
- Handling asynchronous API requests using Fetch API and async/await.
- Organizing a full-stack application into models, routes, and components.

## 👩‍💻 Author

**Anamika Bharti**

- GitHub: [AnamikaBharti257](https://github.com/AnamikaBharti257)


⭐ If you find this project useful, feel free to star the repository!
