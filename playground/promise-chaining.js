require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('5d877f4efcb5d832f48869c3', { age: 11 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 11 })
}).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})