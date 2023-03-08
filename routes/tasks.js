const express = require('express');
const router = express.Router();
const {getAllTasks, updateTask, getTask, deleteTask, createTask} = require('./constrollers/tasks')

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').patch(updateTask).get(getTask).delete(deleteTask);

module.exports = router