const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/test', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

//PRODUCT

const productSchema = new mongoose.Schema({ 
    image: String,
    name: String,
    price: String,
});

productSchema.virtual('id')
  .get(function() {
    return this._id.toHexString();
  });
  
 productSchema.set('toJSON', {
  virtuals: true
});

const Product = mongoose.model('Product', productSchema);

app.get('/api/products', async (req, res) => {
    console.log("in get products");
  try {
    let products = await Product.find();
    res.send({products: products});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post('/api/products', async (req, res) => {
    const product = new Product({
        image: req.body.image,
        name: req.body.name,
        price:req.body.price,
  });
  console.log(product);
  try {
    await product.save();
    res.send({product:product});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/products/:id', async (req, res) => {
  try {
    await Product.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

//>>>>>>>>>>>>>>CART

let cart = [];
const id = 0;
const img = "";
const name =  "";
const price =  0;

app.get('/api/cart', (req, res) => {
  console.log("In cart get");
  res.send(cart);
});

app.post('/api/cart/:id/:image/:name/:price', (req, res) => {
  console.log("In cart post");
  id = parseInt(req.params.id);
  img = req.params.image;
  name =  req.params.name;
  price: parseInt(req.params.quantity);
  
  const additionalItem = cart.find(item => item.id == id);
  
  if (additionalItem) {
    additionalItem.quantity += 1;
    res.send(additionalItem);
  }else{
    let item = {
      id: id,
      image: img,
      name: name,
      price: price,
      quantity: 1,
    };
    cart.push(item);
    res.send(item);
  }
  
});

app.put('/api/cart/:id/:quantity', (req,res) => {
    console.log("in cart put");
    let id = parseInt(req.params.id);
    let quantity = req.params.quantity;
    let itemsMap = cart.map(item => {
      return parseInt(item.id);
      });
    let index = itemsMap.indexOf(id);
    if (index === -1) {
      res.status(404)
        .send("Sorry, that item doesn't exist\n");
      return;
      }
    let item = cart[index];
    item.quantity = parseInt(quantity);
    res.send(item);
    }
);

app.delete('/api/cart/:id', (req, res) => {
  console.log("In cart delete");
  let id = parseInt(req.params.id);
  let removeIndex = cart.map(item => {
      return parseInt(item.id);
    })
    .indexOf(id);
  if (removeIndex === -1) {
    res.status(404)
      .send("Sorry, that product doesn't exist");
    return;
  }
  cart.splice(removeIndex, 1);
  res.sendStatus(200);
});



app.listen(3000, () => console.log('Server listening on port 3000!'));