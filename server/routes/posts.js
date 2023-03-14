const router = require('express').Router()
const controller = require('../controllers/posts')

router.post('/new', controller.createPost)
router.put('/edit/:id', controller.editPost)
router.delete('/delete/:id', controller.deletePost)
router.get('/:id', controller.getPostById)
router.get('', controller.getPosts)

module.exports = router
