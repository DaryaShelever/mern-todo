import { error, log } from 'console'
import express from 'express'
import mongoose from 'mongoose'
import {registerValidation} from './validations/auth.js'
import checkAuth from './utils/checkAuth.js'
import {register, login, get} from './controllers/UserController.js'

mongoose.connect(
    'mongodb+srv://dshelever:Abc123@cluster0.ftj7c9a.mongodb.net/blog?retryWrites=true&w=majority')
     .then(()=>console.log('DB ok'))
     .catch(()=>console.log('DB error',error))

const app = express()

app.use(express.json())

app.post('/auth/login',)

app.post('/auth/register',registerValidation, )

app.get('/auth/me',checkAuth, )
app.listen(4444, (err)=> {
    if(err){
        return console.log(err);
    }
    console.log('Server ok');
})