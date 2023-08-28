import { error } from 'console'
import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import mongoose from 'mongoose'
import {validationResult} from 'express-validator'

import {registerValidation} from './validations/auth.js'

mongoose.connect(
    'mongodb+srv://dshelever:Abc123@cluster0.ftj7c9a.mongodb.net/blog?retryWrites=true&w=majority')
     .then(()=>console.log('DB ok'))
     .catch(()=>console.log('DB error',error))

const app = express()

app.use(express.json())

app.post('/auth/register',registerValidation, async (req, res)=>{
   try {
    const error= validationResult(req) 
    if(!error.isEmpty()){
        return res.status(400).json(errors.array())
    }

    const password = req.body.password
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const doc = new UserModel({
        email:req.body.email,
        fullName:req.body.fullName,
        avatarUrl:req.body.avatarUrl,
        passwordHash:hash,
    })

    const user= await doc.save()

    const token = jwt.sign({
       _id:user._id 
    },
    'secret123',
    {
        expiresIn:'30d'
    })

    const {passwordHash, ...userData}= user._doc
    res.json({
        ...user._doc,
        token
    })
   } catch (error) {
    console.log(error)
    res.status(500).json({
        message: 'failed to register', 
    })
   }
})