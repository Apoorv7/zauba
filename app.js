const express = require('express');
const app = express();
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const Mylib = require('./model/mylib');

const dbu = 'mongodb://localhost/check';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect(dbu, { useNewUrlParser: true, useUnifiedTopology: true })
.then(result => app.listen(3000))
.catch(err => console.log(err));


// find all docs in collection
app.get('/all-blogs', (req, res) => {
  Mylib.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

app.post('/addcomp', function(req, res){
    return res.redirect('newcomp')
});

app.post('/list', function(req, res){
  var cb = JSON.stringify(req.body);
  var bc = cb.split('"');
  // console.log(bc[3]);
  // console.log(bc[7]);
  var mylib = new Mylib({
    company: bc[3],
    cin: bc[7]

  });

  mylib.save()
   .then(result => {
    return res.redirect('all-blogs')
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

app.get('/newcomp',(req,res) =>{

    res.sendFile('./views/newcomp.html', { root: __dirname });

});

app.use((req, res) => {
  res.status(404).sendFile('./views/404.html', { root: __dirname });
});
