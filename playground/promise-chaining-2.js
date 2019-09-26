require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5d8a580bcd7a0f296c2ee448').then((tasks) => {
    console.log(tasks)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})
    