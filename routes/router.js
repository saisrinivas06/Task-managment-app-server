const express = require("express")
const router = express.Router()
const { getAllTasks } = require("../controllers/getAllTasks")
const { createTask } = require("../controllers/createTask")
const { deleteTask } = require("../controllers/deleteTask")
const { updateTask } = require("../controllers/updateTask")
const { getHistory } = require("../controllers/getHistory")

router.route("/tasks").get(getAllTasks).post(createTask)
router.route("/tasks/:id").delete(deleteTask).patch(updateTask)
router.route("/tasks/history").get(getHistory)
module.exports = router
