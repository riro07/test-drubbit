const { Router } = require('express');

// controllers: da una response
const userCount = require('../controllers/users');

// middleware: validaciones de req
const validation = require('../middlewares/valitation-cookie');


const router = Router();


router.get('/',
    validation
,userCount )


module.exports = router;