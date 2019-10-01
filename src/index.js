const express = require("express")
require('./db/mongoose')
const jwt = require("jsonwebtoken")

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
