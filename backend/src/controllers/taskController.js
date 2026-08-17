const taskService = require("../services/taskService");

const getTasks = async (req, res, next) => {
    try {
        console.log("Controller reached");
        console.log(req.user);

        const tasks = await taskService.getTasks(req.user);

        console.log(tasks);

        res.status(200).json(tasks);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

// const createTask = async (req, res, next) => {
//     try {

//             console.log("REQ USER:", req.user);
//         console.log("REQ BODY:", req.body);

//         const task = await taskService.createTask(
//             req.body,
//             req.user._id
//         );

//         res.status(201).json(task);

//     } catch (error) {

//         next(error);

//     }
// };


const createTask = async (req, res, next) => {
    try {
        const task = await taskService.createTask(
            req.body,
            req.user._id
        );

        res.status(201).json(task);

    } catch (error) {
        next(error);
    }
};
const updateTask = async (req, res, next) => {
    try {

        const updatedTask = await taskService.updateTask(
            req.params.id,
            req.user,
            req.body
        );
        if (!updatedTask) {

            return res.status(404).json({
                message: "Task not found"
            });

        }

        res.status(200).json(updatedTask);

    } catch (error) {

        next(error);

    }
};

const deleteTask = async (req, res, next) => {
    try {

        const deletedTask = await taskService.deleteTask(
            req.params.id,
            req.user
        );

        if (!deletedTask) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.status(200).json({
            message: "Task deleted successfully"
        });

    } catch (error) {
        next(error);
    }
};

module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask
};