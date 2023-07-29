const History = require("../models/History")

const getHistory = async (req, res) => {
  try {
    res.json(await History.find())
  } catch (err) {
    console.log(err)
  }
}

module.exports = { getHistory }
