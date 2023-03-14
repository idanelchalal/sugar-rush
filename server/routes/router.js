// IMPORTS
const router = require('express').Router()
const path = require('path')

// ROUTES IMPORTS
const postRoutes = require('./posts')
const userRoutes = require('./user')
const authRoutes = require('./auth')

router.get('^/$|/index(.html)?', (req, res) => {
    res.send('MAIN')
})

router.use('/post', postRoutes)
router.use('/user', userRoutes)
router.use('/auth', authRoutes)

router.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html') && !req.accepts('json'))
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    else if (req.accepts('json')) res.json({ message: '404 Not Found' })
    else res.type('txt').send('404 Not Found')
})

module.exports = router
