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


app.listen(port, () => {
    console.log("Searver is up on port " + port)
})