const{Router}= require('express')
const router= Router()
const User =require('../models/User')



//req- данные которые приходят с фронтенда 
//res- данные которые уйдут на фронтенд
router.post('/registration', async(req,res)=>{
    try {
        const {email, password}= req.body

        const isUsed = await User.findOne({email})

        if(isUsed){
            return res.status(300).json({message: 'This email already exists'})
        }

        const user = new User({
            email,password
        })
        // метод из mongoose - сохроняет в базе данных 
        await user.save()

        res.status(201).json({message:'user created'})





    } catch (error) {
        console.log(error);
    }
})


module.exports = router