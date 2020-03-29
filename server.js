const express  = require('express');
const path = require('path');
const app = express();
//getting the POSTS routes
const posts = require('./server/routes/posts');

//Using Middleware
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/posts',posts);
//Catch all other routes requests and return it to the index
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'dist/index.html'))
});

const port = process.env.PORT || 4600;

app.listen(port, (req, res)=>{
    console.log(`running server on port ${port}`);
});