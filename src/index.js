const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user-route')
const taskRouter = require('./routers/task-route')

const app= express()
const port = process.env.PORT ||3000
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port,()=>{
    console.log("server is up and running");
})

