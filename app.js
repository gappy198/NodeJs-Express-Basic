const express = require('express')
const app = express()
const path = require('path')
const productsRouter = require('./src/route/productsRouter')

app.set("views", './src/views');
app.set("view engine", "ejs");

app.use("/products", productsRouter)

app.get('/', (req, res) => {
    res.render('index', { username: 'GapDev', customers: ["Golf", "Gap", "Get"] })
})

app.use(express.static(path.join(__dirname, '/public/')))

app.listen(5000, () => {
    console.log("start server port", 5000);
})