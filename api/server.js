const express = require("express")

const server = express()
console.log('YOU HAVE THE RIGHT STUFF')
// DO YOUR MAGIC

server.use(express.json())

server.use('*', (req, res, next) => {
    next({status: 404, message: 'Page not found'})
})

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})

module.exports = server
