const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 5000

async function start() {
    try {
        await mongoose.connect('mongodb+srv://dshelever:Abc123@cluster0.ftj7c9a.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser:true ,
            useUnifiedTopology:true, 
            useCreateIndex:true,
            useFindAndModify:true
        })

        app.listen(PORT, ()=>{
            console.log('Server started on port ${PORT} ')
        })
    } catch (error) {
        
    }

}