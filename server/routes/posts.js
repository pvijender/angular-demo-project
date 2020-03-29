const express = require ('express');
const router = express.Router();
const axios  = require ('axios');
const PostAPI  = 'https://jsonplaceholder.typicode.com'

//GET POST
router.get('/', (req, res)=>{
    axios.get(`${PostAPI}/posts`).then(
        posts=>{
            // console.log(posts.data);
            res.status(200).json(posts.data);
        })

        .catch(error=>{
            res.status(500).send(error); 
        })
});

module.exports = router;