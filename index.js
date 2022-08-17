const { response } = require('express')
const express = require('express')

const app = express()

app.get('/', function(request, response){
    response.send("hallo")
})
app.get('/user', function(request, response){
    response.send("hallo word")
})
app.get('/home', function(request, response){
    response.send("hallo word hallo")
})

app.listen(5000, function(){
    console.log("server running");
})

