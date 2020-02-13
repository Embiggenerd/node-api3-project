const express = require('express');

const postRouter = require('./posts/postRouter')
const userRouter = require('./users/userRouter')

const server = express();

server.use(express.json())
server.use('/posts', postRouter)
server.use('/users', userRouter)

server.get('/', logger, (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

server.use((err, req, res, next) => {
  console.log(err)
  res.status(err.httpStatusCode || 500).json({
    message: err.message
  })
  return
})

//custom middleware

function logger(req, res, next) {
  console.log(`
    req.method: ${req.method}
    req.url: ${req.url}
    timestamp: ${Date.now()}
    `)
  next()
}



module.exports = server;
