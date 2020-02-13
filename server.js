const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  console.log(`
    req.method: ${req.method}
    req.url: ${req.url}
    timestamp: ${Date.now()}
    `)
  next()
}

const validateUserId = async (req, res, next) => {
  try {
    const idCheck = await getById(req.params.id)

    if(idCheck.length === 0 ) {
      return res.status(400).json({messsage: "invalid user id"})
    }
    req.id = req.params.id
    next()
  }catch(e){
    next(e)
  }
}

const validateUser = async (req, res, next) => {
  try {
    if(!req.body){
      
    }
  }catch(e) {
    next(e)
  }
}

module.exports = server;
