import express, { Request, Response } from "express"
import Todo from "../model/todoModel"


export const createTodo = async (req: Request, res: Response) => {
    // res.status(200).json({ message: "yes" })
    const todo = new Todo(req.body)
    try {
        await todo.save()
        return res.status(200).json({
            message: "Successfully Created",
            todo
        })
    } catch (error) {
        return res.status(400).json({
            Error: `You run into a Create ${error}`
        })
    }

}

export const getTodo = async (req: Request, res: Response) => {
    const todo = await Todo.find({})
    try {
        return res.status(200).json({
            message: "This is all todo details",
            todo
        })
    } catch (error) {
        return res.status(404).json({
            Error: `You run into a Get ${error}`
        })
    }
}

export const updateTodo = async (req: Request, res: Response) => {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body)
        // await todo.save()
        return res.status(201).json({
            message: "Successfully Updated",

        })

    } catch (error) {
        return res.status(404).json({
            Error: `You run into a Update ${error}`
        })
    }
}

export const deleteTodo = async (req: Request, res: Response) => {
    try {
        await Todo.findByIdAndDelete(req.params.id)
        // await Todo.save()
        return res.status(201).json({
            message: "Successfully deleted",
        })

    } catch (error) {
        return res.status(404).json({
            Error: `You run into a Delete ${error}`
        })
    }
}