const express = require("express")
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

//To convert request data into json
app.use(express.json())

//Create User
app.post('/users', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
    // user.save().then(() => {
    //     res.status(201).send(user)
    // }).catch((error) => {
    //     res.status(400).send(error)
    // })
})

//Create Task
app.post('/tasks', async (req, res) => {
    const task = new Task(req.body)
    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

//Get all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users)
    } catch (e) {
        res.status(500).send(e)
    }
})
//Get single user by id
app.get('/users/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const user = await User.findById(_id)
        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }
})

//Get all tasks
app.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.send(tasks)
    } catch (e) {
        res.status(500).send(e)
    }

})
//Get single task by id
app.get('/tasks/:id', async (req, res) => {
    try {
        const _id = req.params.id
        const task = await Task.findById(_id)
        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
})

app.listen(port, () => {
    console.log("Searver is up on port " + port)
})