require('../src/db/mongoose')
const User = require('../src/models/user')

//Promise chaining
// User.findByIdAndUpdate('5d877f4efcb5d832f48869c3', { age: 11 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 11 })
// }).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })

//async await 
const upadateAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

upadateAndCount('5d8c57a08a38192ae8d19ab6', 11).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})