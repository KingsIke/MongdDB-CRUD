import express from "express";
import logger from "morgan";
import todoRouter from "./router/todoRouter";
import mongoose from "mongoose";
import dotenv from "dotenv"


dotenv.config()

const app = express()
mongoose.connect(process.env.DATABASE_URL!, () => {
    console.log("Data connected")
})

app.use(express.json())
app.use(logger("dev"))

app.use("/todos", todoRouter)

app.listen(3030, () => {
    console.log("App started 3030")
})