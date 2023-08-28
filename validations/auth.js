import {body} from 'express-validator'

export const  registerValidation = [
    body('email','email entered incorrectly').isEmail(),
    body('password','password entered incorrectly').isLength({min: 5}),
    body('fullName','name entered incorrectly').isLength({min: 3}),
    body('avatarUrl','image entered incorrectly').optional().isURL(),
]