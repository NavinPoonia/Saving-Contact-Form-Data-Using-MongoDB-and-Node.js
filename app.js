const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const bodyparser=require("body-parser")
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contactdance', {useNewUrlParser: true, useUnifiedTopology: true});
const port = 80;

// mongoose

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
//   console.log("we are connected !!")
});

const contactSchema = new mongoose.Schema({
    name: String,
    phone:String,
    email:String,
    address:String,
    desc:String
  });
  const contact = mongoose.model('contact', contactSchema);


app.use('/static', express.static('static')) 
app.use(express.urlencoded());

app.set('view engine', 'pug') 
app.set('views', path.join(__dirname, 'views')) 
app.get('/', (req, res)=>{
    res.status(200).render('home.pug');
})
app.get('/contact', (req, res)=>{
    
    res.status(200).render('contact.pug');
})
app.post('/contact', (req, res)=>{
    var mydata=new contact(req.body);
    mydata.save().then(()=>{
        res.send("saved to database")
    }).catch(()=>{
        res.status(400).send("not saved to database")
    })
})


app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
