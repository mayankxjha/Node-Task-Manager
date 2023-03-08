const Task = require('../../models/Task')
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json({tasks})
    } catch (err) {
        res.status(500).json({msg: err})
    }
}
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (err) {
        res.status(500).json({msg: err})
    }
}
const updateTask = async (req, res) => {
    try {
        const {id: taskID} = req.params
        const queriedTask = await Task.findOneAndUpdate({_id: taskID}, req.body, {
            new: true,
            runValidators: true,
        })
        if (!queriedTask) {
            return res.status(404).json({msg: `No task with the id: ${taskId}`})
        }
        res.status(200).json({queriedTask})
    } catch (err) {
        res.status(500).json({msg: err})
    }
}
const getTask = async (req, res) => {
    try {
        const {id: taskId} = req.params;
        const queriedTask = await Task.findOne({_id: taskId})
        if (!queriedTask) {
            return res.status(404).json({msg: `No task with the id: ${taskId}`})
        }
        res.status(200).json({queriedTask})
    } catch (err) {
        res.status(500).json({msg: err})
    }
}
const deleteTask = async (req, res) => {
    try {
        const {id: taskId} = req.params;
        const queriedTask = await Task.findOneAndDelete({_id: taskId})
        if (!queriedTask) {
            return res.status(404).json({msg: `No task with the id: ${taskId}`})
        }
        res.status(200).json({queriedTask})
    } catch (err) {
        res.status(500).json({msg: err})
    }
}

module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask
}