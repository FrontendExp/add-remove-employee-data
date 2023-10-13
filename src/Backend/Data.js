const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const employees = []

app.post('/employee',function(req,res){
  employees.push(req.body)
  res.send({status:true})
})

app.get('/employees',function(req,res){
  
  res.send({employees})
})

app.get('/employees',function(req,res){
  
  res.send({employees})

  
})

app.delete('/employee/:index', function (req, res) {

  const { index } = req.params;
  employees.splice(index, 1);
  res.send({ status: true });

  
});









app.listen(4000);