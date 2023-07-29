const Task = require("../models/Task")

const deleteTask = async (req, res) => {
  const { id } = req.params
  const deleteTask = await Task.findByIdAndDelete(id)
  res.send(deleteTask)
}

module.exports = { deleteTask }
