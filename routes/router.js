// import express
const express = require('express')

// import controller
const userController = require('../controllers/userController')

//import multer
const multerInstance = require('../MulterConfig/multerMiddleware')

//creates routes, using express.Router() class ,object

const router = new express.Router()

//register
router.post('/register',multerInstance.single("user_profile"),userController.register)

//getall employees
router.get('/all-employees',userController.getAllEmployees)

//view employee
router.get('/view-employee/:id',userController.viewuser)


//delete user
router.delete('/remove-employee/:id',userController.removeUser)





//export server
module.exports = router