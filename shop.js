const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Dummy data for products
const products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Phone', price: 500 },
  { id: 3, name: 'Headphones', price: 100 }
];

// Store the cart (using a simple in-memory array for now)
let cart = [];

// Set view engine to EJS
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Home page: Show all products
app.get('/', (req, res) => {
  res.render('index', { products });
});





