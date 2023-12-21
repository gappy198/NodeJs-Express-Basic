const express = require('express')
const app = express()
const port = 5000;
const router = require('./routes/myRouter')
const path = require('path')

app.use(router)
app.use(express.static(path.join(__dirname,'public')))
app.get('/', (req, res) => {
    res.send("<h1>Hello World | Studio</h1>")
})

app.listen(port, () => {
    console.log("start server port", port);
})