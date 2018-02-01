// Redundante nos outros códigos
const five = require("johnny-five");
const board = new five.Board({
    port: "COM3"
});

var path = require("path");
var fs = require('fs');

fs.writeFile(path.join(__dirname, './id'), "Hey there!", function(err) {
    if(err) {
        return console.error(err);
    }
    console.log("The file was saved!");
});

/*
fs.writeFile('file', 'text to be written', function (errorFunction) {

})
*/
