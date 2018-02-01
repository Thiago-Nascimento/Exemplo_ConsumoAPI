// Redundante nos outros códigos
const five = require("johnny-five");
const board = new five.Board({
    port: "COM3"
});

var path = require("path");
var fs = require('fs');

var content;

fs.readFile(path.join(__dirname, './id'), function read(err, data) {
    if (err) {
        throw err;
    }
    
    content = data.toString();    
    console.log(content);
});

