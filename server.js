const express = require('express');

const postRouter = require('./posts/postRouter')
const userRouter = require('./users/userRouter')

const server = express();

server.use('/posts', postRouter)
server.use('/users', userRouter)

server.get('/', logger, (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

server.use(({ message, httpStatusCode }, req, res, next) => {
  res.stats(httpStatusCode || 500).json({
    message
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
