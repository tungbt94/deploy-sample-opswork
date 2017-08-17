var express = require('express');

const app = express();
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public');

app.get('/', function(req, res) {
  res.render('index.html');
});

app.listen(3000, function(){
  console.log("Server start on port 3000");
})