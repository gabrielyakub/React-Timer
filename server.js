var express = require('express');

// Create app
var app = express();

// port dari env var
const PORT = process.env.PORT || 3000;

// openweather cuma kerja di HTTP gk di HTTPS
//express middleware
app.use(function(req, res, next){
  //request, response, next(buat redirect kalo middlewarenya selesai)
  if(req.headers['x-forwarded-proto'] === 'https'){
    res.redirect('http://'+ req.hostname + req.url);
  }else{
    next();
  }
})

// app.use() add functionality to express application
// express.static -> specify folder name to be exposed to the web server
app.use(express.static('public'));

// start the server, app.listen(port, function(){});
app.listen(PORT, function(){
  console.log('Express server is up on port ' + PORT);
});
