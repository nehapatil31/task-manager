var express = require('express')
var router = express.Router()
const Task = require('../models/task')


//Create Task
router.post('/tasks', async (req, res) => {
    const task = new Task(req.body)
    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

//Get all tasks
router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.send(tasks)
    } catch (e) {
        res.status(500).send(e)
    }

})
//Get single task by id
router.get('/tasks/:id', async (req, res) => {
    try {
        const _id = req.params.id
        const task = await Task.findById(_id)
        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router