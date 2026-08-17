require("dotenv").config();

const mongoose = require("mongoose");
const Task = require("../models/Task");

const MONGO_URI = process.env.MONGO_URI;

const MANAGER_ID = new mongoose.Types.ObjectId(
    "6a7578ca45ebd62e5df364ef"
);

const EMPLOYEE_ID = new mongoose.Types.ObjectId(
    "6a74782b0f08825ac3b2c7ad"
);

const tasks = [
    {
        title: "Complete Node.js API",
        description: "Implement and test the remaining Node.js API endpoints.",
        priority: "high",
        status: "pending",
        completed: false,
        dueDate: new Date("2026-08-11"),
        estimatedTime: "4 hours",
    },
    {
        title: "Fix Authentication Bugs",
        description: "Fix issues related to login and JWT authentication.",
        priority: "high",
        status: "completed",
        completed: true,
        dueDate: new Date("2026-08-09"),
        estimatedTime: "3 hours",
    },
    {
        title: "Create Task Controller",
        description: "Implement controller logic for task creation and management.",
        priority: "high",
        status: "completed",
        completed: true,
        dueDate: new Date("2026-08-10"),
        estimatedTime: "2 hours",
    },
    {
        title: "Update Task UI",
        description: "Improve the task card design and user experience.",
        priority: "medium",
        status: "pending",
        completed: false,
        dueDate: new Date("2026-08-12"),
        estimatedTime: "3 hours",
    },
    {
        title: "Implement Delete Task",
        description: "Implement secure task deletion with authorization.",
        priority: "high",
        status: "pending",
        completed: false,
        dueDate: new Date("2026-08-11"),
        estimatedTime: "2 hours",
    },
    {
        title: "Test Task API",
        description: "Test GET, POST, PUT and DELETE task endpoints.",
        priority: "medium",
        status: "completed",
        completed: true,
        dueDate: new Date("2026-08-08"),
        estimatedTime: "2 hours",
    },
    {
        title: "Configure MongoDB",
        description: "Configure MongoDB Atlas connection using Mongoose.",
        priority: "high",
        status: "completed",
        completed: true,
        dueDate: new Date("2026-08-07"),
        estimatedTime: "3 hours",
    },
    {
        title: "Create Mongoose Schema",
        description: "Create and validate the task schema.",
        priority: "medium",
        status: "completed",
        completed: true,
        dueDate: new Date("2026-08-08"),
        estimatedTime: "2 hours",
    },
    {
        title: "Implement Task Routes",
        description: "Create Express routes for all task operations.",
        priority: "high",
        status: "completed",
        completed: true,
        dueDate: new Date("2026-08-09"),
        estimatedTime: "2 hours",
    },
    {
        title: "Add Error Handling",
        description: "Implement centralized backend error handling.",
        priority: "medium",
        status: "pending",
        completed: false,
        dueDate: new Date("2026-08-13"),
        estimatedTime: "2 hours",
    },
    {
        title: "Improve Login Page",
        description: "Improve login page validation and user experience.",
        priority: "low",
        status: "pending",
        completed: false,
        dueDate: new Date("2026-08-15"),
        estimatedTime: "2 hours",
    },
    {
        title: "Implement Role Based Access",
        description: "Implement permissions for managers and employees.",
        priority: "high",
        status: "pending",
        completed: false,
        dueDate: new Date("2026-08-12"),
        estimatedTime: "4 hours",
    },
    {
        title: "Test Employee Dashboard",
        description: "Test employee task viewing and task management.",
        priority: "medium",
        status: "pending",
        completed: false,
        dueDate: new Date("2026-08-14"),
        estimatedTime: "3 hours",
    },
    {
        title: "Test Manager Dashboard",
        description: "Test manager task assignment and management features.",
        priority: "medium",
        status: "completed",
        completed: true,
        dueDate: new Date("2026-08-09"),
        estimatedTime: "2 hours",
    },
    {
        title: "Fix Task Validation",
        description: "Fix validation issues with task assignment fields.",
        priority: "high",
        status: "completed",
        completed: true,
        dueDate: new Date("2026-08-10"),
        estimatedTime: "2 hours",
    },
    {
        title: "Add Loading States",
        description: "Add loading indicators for task operations.",
        priority: "low",
        status: "pending",
        completed: false,
        dueDate: new Date("2026-08-16"),
        estimatedTime: "1 hour",
    },
    {
        title: "Improve Task Card Design",
        description: "Improve task cards, badges and action buttons.",
        priority: "low",
        status: "completed",
        completed: true,
        dueDate: new Date("2026-08-10"),
        estimatedTime: "2 hours",
    },
    {
        title: "Implement Task Filtering",
        description: "Allow users to filter tasks by status and priority.",
        priority: "medium",
        status: "pending",
        completed: false,
        dueDate: new Date("2026-08-17"),
        estimatedTime: "3 hours",
    },
    {
        title: "API Integration Testing",
        description: "Perform end-to-end testing of frontend and backend APIs.",
        priority: "high",
        status: "pending",
        completed: false,
        dueDate: new Date("2026-08-18"),
        estimatedTime: "4 hours",
    },
    {
        title: "Project Documentation",
        description: "Document the project architecture, APIs and setup process.",
        priority: "low",
        status: "pending",
        completed: false,
        dueDate: new Date("2026-08-19"),
        estimatedTime: "2 hours",
    },
];

const seedTasks = async () => {
    try {
        if (!MONGO_URI) {
            throw new Error("MONGO_URI is not defined in .env");
        }

        await mongoose.connect(MONGO_URI);

        console.log("MongoDB connected");

        const tasksToInsert = tasks.map((task) => ({
            ...task,
            assignedTo: EMPLOYEE_ID,
            assignedBy: MANAGER_ID,
            createdAt: new Date(),
            updatedAt: new Date(),
        }));

        const insertedTasks = await Task.insertMany(tasksToInsert);

        console.log(
            `Successfully inserted ${insertedTasks.length} tasks`
        );

        console.log(
            `Assigned by manager: ${MANAGER_ID}`
        );

        console.log(
            `Assigned to employee: ${EMPLOYEE_ID}`
        );

        await mongoose.disconnect();

        console.log("MongoDB disconnected");
        process.exit(0);

    } catch (error) {
        console.error("Error seeding tasks:");
        console.error(error);

        await mongoose.disconnect();

        process.exit(1);
    }
};

seedTasks();