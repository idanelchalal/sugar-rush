const express = require('express')
const controller = require('../controllers/user')
const auth = require('../controllers/auth')
const router = express.Router()

router.post('/add-user', controller.createNewUser)
router.delete('/delete-user/:id', controller.deleteUserById)
router.get('/:id', controller.getSingleUser)
router.get('*', (req, res) => res.send('404', 404))
module.exports = router
