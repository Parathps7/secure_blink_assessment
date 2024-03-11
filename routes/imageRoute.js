const express = require('express')
const router = express.Router()
const validateToken = require('../middlewares/validateTokenHandler')
const userAuth = require('../middlewares/userAuth')
const {add,del,view} =require('../controllers/imageControllers')
const multer = require('multer')
const randomstring = require('randomstring')
const path = require('path')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,  path.join(__dirname, '../uploads'))
    },
    filename: function (req, file, cb) {
      cb(null,(new Date().toDateString().split(' ').join('')) + '-' + file.originalname )
    }
  })
  
  const uploads = multer({ storage: storage })



// add image - admin only
router.post('/add',validateToken,userAuth('admin'),uploads.single('file'),add);

//delete image - admin only
router.get('/delete',validateToken,userAuth('admin'),del);

//view images - user & admin
router.post('/view',validateToken,userAuth('user','admin'),view);



module.exports = router