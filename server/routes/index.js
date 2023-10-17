const express=require('express')
const router=express.Router()
const mainController=require('../controllers/mainController')

//APP ROUTES
//HOME PAGE
router.get('/',mainController.homepage)
//ABOUT PAGE
router.get('/about',mainController.aboutpage)


module.exports=router