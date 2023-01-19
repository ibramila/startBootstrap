const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express() //expressi istifade etmey ucun app yazirq

app.use(cors())
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let products = [
    {
        id: 0,
        name: "Malahat",
        isDiscounted: false,
        price: 30,
        rate: 3,
        discountPercentage: 30
    },
    {
        id: 1,
        name: "Malahat",
        isDiscounted: false,
        price: 30,
        rate: 3,
        discountPercentage: 30
    },
    {
        id: 2,
        name: "Malahat",
        isDiscounted: false,
        price: 30,
        rate: 3,
        discountPercentage: 30
    },
    {
        id: 3,
        name: "Malahat",
        isDiscounted: false,
        price: 30,
        rate: 3,
        discountPercentage: 30
    },
    {
        id: 4,
        name: "Malahat",
        isDiscounted: false,
        price: 30,
        rate: 3,
        discountPercentage: 35345
    }
    ,
    {
        id: 5,
        name: "Maladfvbsbvhat",
        isDiscounted: false,
        price: 30,
        rate: 3,
        discountPercentage: 30
    }
]

let idCounter = 5

//!get all products

app.get("/products", (req, res) => {
    res.send({
        success: true,
        quantity: products.length,
        products
    })
});

//!get product by id
app.get("/products/:id", (req, res) => {
    const id = +req.params.id
    const product = products.find(p => p.id == id)
    if (!product) {
        return res.json({
            success: false
        })
    }
    res.send(
        {
            success: true,
            product
        }
    )
})

//!add product

app.post("/products", (req, res) => {
    const newProduct = { ...req.body, id: idCounter++ };
    products = [...products, newProduct];
    res.json({
        success: true,
        products
    })
})

//!deelete product

app.delete("/products/:id", (req, res) => {
    const id = +req.params.id;

    products = products.filter((u) => u.id !== id)
    res.send({
        success: true,
        products
    })
})

//! update product

app.put("/products/:id", (req, res) => {
    const id = +req.params.id;
    console.log(id)
    products = products.filter((u) => u.id !== id);

    const updatedProduct = {
        id: +req.params.id,
        name: req.body.name,
        isDiscounted: req.body.isDiscounted,
        rate: req.body.rate,
        price: req.body.price,
        discountPercentage: req.body.discountPercentage
    };

    products.push(updatedProduct);
    res.json({
        success: "sdklvskjvn",
        products
    });
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`server is up and running ion the port: ${PORT}`);
})