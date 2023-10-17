const express=require('express')
const router=express.Router()
const dashboardController=require('../controllers/dashboardController')

//APP ROUTES
//DASH BOARD
router.get('/dashboard',dashboardController.dashboard)


module.exports=router