var express = require('express')
var app = express()
app.use(express.static('./public'))
app.use('/mail', require('./route/router'))
app.listen(2000, function(){
	console.log('listen on 127.0.0.1:2000')
})