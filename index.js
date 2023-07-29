const express = require("express")
const mongoose = require("mongoose")
const app = express()
const PORT = 3000
require("dotenv").config()
const cors = require("cors")
app.use(express.json())
app.use(cors())

const connectionURL = process.env.MONGO_URI

app.use("/api", require("./routes/router"))

const start = () => {
  try {
    mongoose.connect(connectionURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("Connected to DataBase")
    app.listen(PORT, err => {
      if (err) {
        console.log("Error occured")
      } else {
        console.log(`Server running at PORT ${PORT}`)
      }
    })
  } catch (err) {
    console.log("Error Occured while connecting to DB")
  }
}

start()
