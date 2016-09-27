var express = require('express')
var app = express()

app.get('/',function(req,res){
  res.send('hello sun')
  console.log('vv')
})

app.get('/about',function(req,res){
  res.send('hello expsadsadasress')
  console.log('asdsa')
})


app.listen(3000,function(){
  console.log('running on port 3000...plz visit http://localhost:3000')
})
