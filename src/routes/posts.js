const router = require('express').Router();
const verify = require('../middlewares/verifyToken');

router.get('/', verify, (req, res)=>{
    console.log(req.user)
    res.json({
        posts: {
            title: 'first post',
            content: 'post content'
        }
    })
})

module.exports = router;