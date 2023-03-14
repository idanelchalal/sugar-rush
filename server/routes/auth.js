const router = require('express').Router()
const controller = require('../controllers/auth')
router.post('/login', controller.logIn)
router.post('/logout', controller.logOut)
router.get('*', (req, res) => res.send('404', 404))

module.exports = router
