const express=require('express')
const router=express.Router()
const mainController=require('../controllers/mainController')


//APP ROUTES
//HOME PAGE
router.get('/',mainController.homepage)
//ABOUT PAGE
router.get('/about',mainController.aboutpage)

//DASH BOARD
router.get('/dashboard',mainController.dashboard)


module.exports=router