const express = require('express');
const app = express();
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const Mylib = require('./model/mylib');

const dbu = 'mongodb://localhost/check';


mongoose.connect(dbu, { useNewUrlParser: true, useUnifiedTopology: true })
.then(result => app.listen(3000))
.catch(err => console.log(err));


// mongoose & mongo tests
app.get('/add-blog', (req, res) => {
  const mylib = new Mylib({
    company: 'nmbmbh',
    cin: '6484iuhih'
  });

  mylib.save()
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    console.log(err);
  });
});

// find all docs in collection
app.get('/all-blogs', (req, res) => {
  Mylib.find()
    .then(result => {
          
        res.send(body);
      
     
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/single-blog', (req, res) => {
  Mylib.findById('5f844f1b97079521dc0d2c11')
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/',(req,res) =>{

    res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about',(req,res) =>{

    res.sendFile('./views/about.html', { root: __dirname });

});

app.use((req, res) => {
  res.status(404).sendFile('./views/404.html', { root: __dirname });
});
