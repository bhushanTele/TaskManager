// const fs = require("fs");
// const path = require("path");


// const filePath = path.join(
//     __dirname,
//     "../data/tasks.json"
// );


// const getTasksFromFile = () => {

//     const data = fs.readFileSync(filePath);

//     return JSON.parse(data);

// };


// const saveTasksToFile = (tasks) => {

//     fs.writeFileSync(
//         filePath,
//         JSON.stringify(tasks, null, 2)
//     );

// };


// const getTasks = () => {

//     return getTasksFromFile();

// };


// const createTask = (taskData) => {

//     const tasks = getTasksFromFile();

//     const newTask = {

//         id: Date.now(),

//         title: taskData.title,

//         description: taskData.description || "",

//         priority: taskData.priority || "medium",

//         status: "pending",

//         dueDate: taskData.dueDate || null,

//         estimatedTime: taskData.estimatedTime || null,

//         createdAt: new Date().toISOString(),

//         updatedAt: new Date().toISOString(),

//         completed: false
//     };


//     tasks.push(newTask);

//     saveTasksToFile(tasks);

//     return newTask;

// };


// const updateTask = (id, taskData) => {
//     const tasks = getTasksFromFile();

//     const task = tasks.find(
//         task => task.id === Number(id)
//     );

//     if (!task) {
//         return null;
//     }

//     task.title = taskData.title ?? task.title;
//     task.description = taskData.description ?? task.description;
//     task.priority = taskData.priority ?? task.priority;
//     task.completed = taskData.completed ?? task.completed;
//     task.status = taskData.status ?? task.status;
//     task.dueDate = taskData.dueDate ?? task.dueDate;
//     task.estimatedTime = taskData.estimatedTime ?? task.estimatedTime;

//     task.updatedAt = new Date().toISOString();

//     saveTasksToFile(tasks);

//     return task;
// };


// const deleteTask = (id) => {

//     const tasks = getTasksFromFile();

//     const updatedTasks = tasks.filter(
//         task => task.id !== Number(id)
//     );


//     saveTasksToFile(updatedTasks);

// };


// module.exports = {
//     getTasks,
//     createTask,
//     updateTask,
//     deleteTask
// };





const Task = require("../models/Task");

const getTasks = async (user) => {

    if (user.role === "manager") {

        return await Task.find({

            assignedBy: user._id

        })
        .populate("assignedTo", "username")
        .sort({
            createdAt: -1
        });

    }

    return await Task.find({

        assignedTo: user._id

    })
    .populate("assignedBy", "username")
    .sort({
        createdAt: -1
    });

};

// const createTask = async (taskData, userId) => {

//     const newTask = await Task.create({

//         title: taskData.title,

//         description: taskData.description,

//         priority: taskData.priority,

//         status: taskData.completed ? "completed" : "pending",

//         completed: taskData.completed ?? false,

//         dueDate: taskData.dueDate,

//         estimatedTime: taskData.estimatedTime,

//         user: userId

//     });

//     return newTask;
// };

// const createTask = async (taskData, managerId) => {

//     const newTask = await Task.create({

//         title: taskData.title,

//         description: taskData.description,

//         priority: taskData.priority,

//         status: taskData.completed ? "completed" : "pending",

//         completed: taskData.completed ?? false,

//         dueDate: taskData.dueDate,

//         estimatedTime: taskData.estimatedTime,

//         assignedTo: taskData.assignedTo,

//         assignedBy: managerId

//     });

//     return newTask;

// };

const createTask = async (taskData, userId) => {
    const newTask = await Task.create({
        title: taskData.title,
        description: taskData.description,
        priority: taskData.priority,

        status: taskData.completed ? "completed" : "pending",

        completed: taskData.completed ?? false,

        dueDate: taskData.dueDate,
        estimatedTime: taskData.estimatedTime,

        // If assignedTo is provided, use it.
        // Otherwise, assign the task to the logged-in user.
        assignedTo: taskData.assignedTo || userId,

        // User who created the task
        assignedBy: userId
    });

    return newTask;
};
const updateTask = async (taskId, user, taskData) => {

    const filter =
        user.role === "manager"
            ? {
                  _id: taskId,
                  assignedBy: user._id
              }
            : {
                  _id: taskId,
                  assignedTo: user._id
              };

    const updatedTask = await Task.findOneAndUpdate(

        filter,

        {
            ...taskData,

            status: taskData.completed
                ? "completed"
                : "pending"
        },

        {
            new: true,
            runValidators: true
        }

    )
    .populate("assignedTo", "username")
    .populate("assignedBy", "username");

    return updatedTask;

};

const deleteTask = async (taskId, user) => {

    const query = {
        _id: taskId
    };

    if (user.role === "manager") {
        query.assignedBy = user._id;
    } else {
        query.assignedTo = user._id;
    }

    return await Task.findOneAndDelete(query);
};

module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask
};