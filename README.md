# TaskManager

# Task Manager

This is a simple full-stack Task Manager application built using **React**, **Node.js**, **Express.js**, and **Tailwind CSS**. The application allows users to manage their daily tasks by creating, editing, updating, completing, and deleting them through a clean and responsive user interface.

The backend stores data in a local JSON file, making it a good project for understanding CRUD operations and REST APIs without using a database.

---

## Features

- Create a new task
- View all tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed or pending
- Set task priority (High, Medium, Low)
- Add due dates
- Add estimated completion time
- Responsive UI built with Tailwind CSS

---

## Tech Stack

### Frontend

- React.js
- React Router DOM
- Axios
- Tailwind CSS
- Lucide React Icons

### Backend

- Node.js
- Express.js
- Express Router
- File System (fs)

---

## Folder Structure

```
TaskManager
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── services
│   ├── data
│   ├── app.js
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── Hooks
│   │   ├── pages
│   │   ├── App.jsx
│   │   └── index.js
│   └── package.json
│
└── README.md
```

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/task-manager.git
```

Move into the project folder.

```bash
cd task-manager
```

---

### Install Backend Dependencies

```bash
cd backend
npm install
```

---

### Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

---

## Running the Project

Start the backend server.

```bash
cd backend
npm start
```

The backend will run on:

```
http://localhost:5000
```

Open another terminal and start the frontend.

```bash
cd frontend
npm start
```

The frontend will run on:

```
http://localhost:3000
```

---

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/tasks` | Fetch all tasks |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

---

## Project Structure

I tried to keep the project organized by separating the responsibilities into different folders.

### Routes

The routes define the available API endpoints and use **Express Router**.

### Controllers

Controllers receive the request and call the required service functions.

### Services

The service layer contains the business logic and is responsible for reading and writing task data to the JSON file.

### Components

Reusable UI components such as:

- Navbar
- Task Card
- Task Form
- Task List

### Custom Hooks

The frontend uses custom hooks to keep API logic separate from the UI.

- useFetchTasks
- useCreateTask
- useUpdateTask
- useDeleteTask

---

## CRUD Operations

The application supports all basic CRUD operations.

- Create a task
- Read all tasks
- Update task details
- Delete a task
- Mark a task as completed or pending

---

## What I Learned

While building this project, I practiced:

- React components and hooks
- React Router
- Custom Hooks
- Tailwind CSS
- REST APIs
- Express.js
- Express Router
- CRUD operations
- Working with the File System module
- Organizing a project using controllers, routes, and services

---

## Future Improvements

Some features that can be added in the future are:

- User authentication
- MongoDB integration
- Search functionality
- Filter tasks by priority
- Sorting tasks
- Pagination
- Dark mode
- Task categories

---

## Screenshots

You can add screenshots of the Home page, Task List, Create Task page, and Edit Task page here after uploading the project to GitHub.

---

## Author

**Bhushan**

This project was built as a practice project to understand how a full-stack CRUD application works using React and Express.
