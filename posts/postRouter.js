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

router.get('/:id', validatePostId, async (req, res, next) => {
  try {
    const post = await getById(req.postID)
    res.json(post)

  } catch (e) {
    next(e)
  }
});

router.delete('/:id', validatePostId, async (req, res, next) => {
try {
  await remove(req.postID)
  res.json(req.postID)
} catch (e) {
  next(e)
}});

router.put('/:id', (req, res) => {
  // do your magic!
});

module.exports = router;
