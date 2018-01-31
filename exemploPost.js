const five = require("johnny-five");
const board = new five.Board({
    port: "COM3"
});

const request = require("request");
const config = require("./config");
const id = config.idSensor;
const api = config.api;
const endpointUpdateSensor = api + "/api/Sensor/" + id;
const endPointCreateSensor = api + "/api/Sensor/";

board.on("ready", function() {
    const sensor = new five.Proximity({
        pin: 10,
        controller: "HCSR04",
        freq: 2000
    });

    sensor.on("data", function() {
        console.log('Esta é a distancia: ' + this.cm);

        const cm = Math.floor(this.cm);
        const dados = {
            valor: cm
        };

        request.post(endPointCreateSensor, {
            json: true,
            body: dados
        }, function(error, res, body){
            if(error) {
                console.error(error);
                return;
            }
            // erro é nulo, tudo ok
            console.log('Status Code:' + res && res.statusCode);
            console.log(body);
        });
    });
});