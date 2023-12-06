/*
const http = require('http')

http.createServer(function (req, res) {
    app.use
    const pathName = req.url
    console.log(pathName);
    if (pathName === '/' || pathName === '/home') {
        const myhtml = `<h1>Gap Dev | studio</h1>`
        res.end(myhtml)
    } else if (pathName === '/product') {
        res.end("<h1>My Product</h1>")
    } else {
        res.writeHead(404)
        res.end(`<h1>Not Found</h1>`)
    }

}).listen(5000, 'localhost', () => {
    console.log(`start server`);
})
*/

const express = require('express')
const debug = require('debug')('app')
const app = express()
const port = 5000;
const router = require('./routes/myRouter');
app.use(router)

app.get('/', (req, res) => {
    // const myhtml = "<h1>Devloper Studio | Gap</h1>"
    // res.send(myhtml)
    res.send("<h1>Hello | Studio</h1>")
})

app.listen(port, () => {
    console.log("start server port", port);
})