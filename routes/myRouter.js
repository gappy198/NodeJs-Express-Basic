const express = require('express')
const router = express.Router()

router.get('/home', (req, res) => {
    res.send("<h1>Home page</h1>")
})

router.get('/product', (req, res) => {
    res.send("<h1>Product page</h1>")
})

module.exports = router