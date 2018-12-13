var express = require('express');
var cors = require('cors');
//var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer({_dest: 'uploads/',
get dest() {
    return this._dest;
},
set dest(value) {
    this._dest = value;
},
});

var app = module.exports = express();

//app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/public'));

app.post('/upload', upload.single('file'), (req, res) =>{
    return res.json(req.file);
})

app.listen(process.env.PORT || 3000, () =>{
    console.log('Node.js listening ...');
  });