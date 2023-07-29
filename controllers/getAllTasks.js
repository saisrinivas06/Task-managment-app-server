const Task = require("../models/Task")

const getAllTasks = async (req, res) => {
  try {
    const data = await Task.find({})
    res.json(data)
  } catch (err) {
    console.log("Error:", err)
    return res.status(400).json(err)
  }
}
module.exports = { getAllTasks }
