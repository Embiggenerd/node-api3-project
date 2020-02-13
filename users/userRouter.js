const express = require('express');
const router = express.Router();

const {
  get,
  getById,
  getUserPosts,
  insert,
  update,
  remove,
} = require('./userDb')

const postDB = require('../posts/postDb')

const { validateUser, validateUserId } = require('./middleware')
const { validatePost } = require('../posts/middleware')

router.post('/', validateUser, async (req, res, next) => {
  try {
    const users = await insert(req.body)
    res.json(users)
  } catch (e) {
    next(e)
  }
});

router.post('/:id/posts', validateUserId, validatePost, async (req, res, next) => {
  try {
    const posted = await postDB.insert({
      text: req.body.text,
      user_id: req.params.id
    })

    res.json(posted)

  } catch (e) {
    next(e)
  }
});

router.get('/', async (req, res) => {
  try {
    const users = await get()
    res.json(users)
  } catch (e) {
    next(e)
  }
});

router.get('/:id', validateUserId, async (req, res, next) => {
  console.log('req.userID', req.userID)
  try {
    const user = await getById(req.userID)
    res.json(user)
  } catch (e) {
    next(e)
  }
});

router.get('/:id/posts', validateUserId, async (req, res, next) => {
  try {
    const posts = await getUserPosts(req.userID)
    res.json(posts)
  } catch (e) {
    next(e)
  }
});

router.delete('/:id', validateUserId, async (req, res, next) => {
  try {
    const deleted = await remove(req.userID)
    console.log(deleted)
    res.json({ userID:req.userID })
  } catch (e) {
    next(e)
  }
});

router.put('/:id', (req, res) => {
  // do your magic!
});



module.exports = router;
