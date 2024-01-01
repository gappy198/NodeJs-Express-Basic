const express = require('express')
const app = express()
const router = require('./routes/myRouter')
const path = require('path')
const products = require('./data/products.json')
const productRouter = express.Router()
app.use(router)

app.set("views", './src/views');
app.set("view engine", "ejs");

productRouter.route("/").get((req, res) => {
    res.render("products", {
        products,
    })
})

productRouter.route("/:id").get((req, res) => {
    const id = req.params.id
    res.render("product", {
        product: products[id]
    })
})

app.use("/products", productRouter)

app.get('/', (req, res) => {
    res.render('index', { username: 'GapDev', customers: ["Golf", "Gap", "Get"] })
})

app.use(express.static(path.join(__dirname, '/public/')))

app.listen(5000, () => {
    console.log("start server port", 5000);
})