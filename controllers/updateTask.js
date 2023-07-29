const Task = require("../models/Task")

const updateTask = async (req, res) => {
  const { id } = req.params
  const taskFound = await Task.findById(id)
  taskFound.completed = !taskFound.completed
  await taskFound.save()
  return res.json(taskFound)
}

module.exports = { updateTask }
