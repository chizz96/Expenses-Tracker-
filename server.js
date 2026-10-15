const express = require("express")
const router = require("./router/expense.router.js")


const app = express()
app.use(express.json())

const port = 3000

app.use(router)

app.listen(port, ()=>{
    console.log(`Server is runing on Port: ${port}`)
}) 