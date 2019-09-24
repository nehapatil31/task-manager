const mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})


// const Task = mongoose.model('Task', {
//     description:{
//         type: String
//     },
//     completed: {
//         type: Boolean
//     }
// })

// const task1 = new Task({
//     description: "Wash car",
//     completed: false
// })

// task1.save().then(()=>{
//     console.log(task1)
// }).catch((error)=>{
//     console.log('Error', error)
// })