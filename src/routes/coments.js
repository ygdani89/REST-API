const {Router} = require('express')
const router =  Router()


router.get('/', async (req,res)=>{

const response = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
const coments = await response.json()
res.json(coments)

})




module.exports = router;