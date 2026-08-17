const express = require("express");

const router = express.Router();

const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const managerMiddleware = require("../middleware/managerMiddleware");
router.get(
    "/employees",
    authMiddleware,
    managerMiddleware,
    userController.getEmployees
);

module.exports = router;