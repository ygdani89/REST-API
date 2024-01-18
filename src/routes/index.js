const { Router } = require('express')
const router = Router()


// 4 routes  

router.get('/',(req ,res ) => {
    res.json({"Title":"Hola mundo"}) // para responder a las peticiones get con un json 
})
 

module.exports = router;