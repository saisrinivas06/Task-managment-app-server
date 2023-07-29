const Task = require("../models/Task")
const History = require("../models/History")

const createTask = async (req, res) => {
  try {
    console.log(req.body)
    const data = await Task.create({ ...req.body })
    await History.create({ ...data })
    res.json(data)
  } catch (err) {
    res.send(err)
  }
}

module.exports = { createTask }
