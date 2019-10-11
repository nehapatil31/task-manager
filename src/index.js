const express = require("express")
require('./db/mongoose')

const app = express()
const port = process.env.PORT || 3000

//To convert request data into json
app.use(express.json())

var userRouter = require('./routers/user')
var taskRouter = require('./routers/task')
app.use(userRouter)
app.use(taskRouter)

// app.get('*', function(req, res) {
//     res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
// });

app.listen(port, () => {
    console.log("Server is up on port " + port)
})

const multer = require('multer')
const upload = multer({
    dest: 'images',
    limits:{
        fileSize: 1000000      //File size - number in bytes
    }
})
app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
})

// myfunction = async () => {
//     const password = 'abc123!'
//     const hashedPassword = await bcrypt.hash(password, 8)
//     console.log(hashedPassword)

//     const isMatch = await bcrypt.compare('abc13!', hashedPassword)
//     console.log(isMatch)

// }
// myfunction()

// myfunction = async ()=>{
//     const token = jwt.sign({ '_id':'acb'}, 'thisismynewcourse')
//     console.log(token)

//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data)
// }
// myfunction()


// const Task = require('./models/task')
// const User = require('./models/user')
// const abc = async ()=>{
//     // const task = await Task.findById('5d9c84c320311b06a4c592bd')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('5d9c253e7fe44a20203ab66f')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }
// abc()
