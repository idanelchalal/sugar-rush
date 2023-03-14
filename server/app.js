const express = require('express')
const mongoConnect = require('./util/dal')
const cookieParser = require('cookie-parser')
const path = require('path')
const cors = require('cors')
const Config = require('./config')
// const { logger } = require('./middlewares/logger')

// INITIALIZING THE APP
const app = express()
// ENABLE LINES BELOW TO ENABLE LOGGER
// app.use(logger)

// Cross origin requests
app.use(
    cors({
        origin: 'http://localhost:3000',
        methods: ['POST', 'GET', 'OPTIONS', 'HEAD'],
        credentials: true,
    })
)

// Parsers
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())

// ROUTER
app.use('/', express.static(path.join(__dirname, 'public')))
app.use(require('./routes/router'))

// DAL
mongoConnect(Config.connectionString, async () => {
    await app.listen(Config.PORT, () =>
        console.log(`Server is listening on port ${Config.PORT}`)
    )
})
