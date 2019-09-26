require('../src/db/mongoose')
const Task = require('../src/models/task')

//Promise chaining
// Task.findByIdAndDelete('5d8a580bcd7a0f296c2ee448').then((tasks) => {
//     console.log(tasks)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

//async await
const deleteAndCount = async (id) => {
    const tasks = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteAndCount('5d8b1ef8fd7e012ec4ab1385').then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})