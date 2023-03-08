const express = require('express')
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const dotenv = require("dotenv")
dotenv.config()

app.use(express.static('./public'))
console.log('Task Manager App')
// app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/api/v1/tasks', tasks)

const port = process.env.PORT || 3000
const start = async()=>{
    await connectDB(process.env.MONGO_URI)
        .then(() => {console.log('CONNECTED TO DB....')
        })
        .catch(error => console.log(error))
}
start().then(()=>{
    app.listen(port, () => {
        console.log('Server is listening at port 3000')
    })
})