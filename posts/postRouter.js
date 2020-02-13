const express = require('express');

const router = express.Router();

const {
  get,
  getById,
  insert,
  update,
  remove,
} = require('./postDb')
const { validatePost, validatePostId } = require('./middleware')

router.get('/', async (req, res, next) => {
  try {
    const posts = await get()
    res.json(posts)
  } catch (e) {
    next(e)
  }
});

router.get('/:id', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

module.exports = router;
