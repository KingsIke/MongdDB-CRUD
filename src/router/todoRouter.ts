import express from "express";
import { createTodo, deleteTodo, getTodo, updateTodo } from "../controller/todoController";

const router = express.Router()

router.post('/create', createTodo)
router.get('/all-tours', getTodo)
router.patch('/update-tours/:id', updateTodo)
router.delete('/delete-tours/:id', deleteTodo)



export default router