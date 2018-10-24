const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '/dist/application')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/application/index.html'));
});

var port = 3000
app.listen(process.env.PORT || port, function () {
  console.log('server is listening ' + port + ' Port')
})
  