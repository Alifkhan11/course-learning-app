import mongoose from "mongoose"
import app from "./app"
import { Server } from "http"

const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT || 5001
const dbUrl = process.env.DB_URL


let server: Server

async function main() {
  try {
    await mongoose.connect(dbUrl as string)
    console.log('Connected to database')

    server = app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })

  } catch (error) {
    console.log(error)
  }
}



main()