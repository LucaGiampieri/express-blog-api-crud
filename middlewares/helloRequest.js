function helloRequest(req, res, next) {

    console.log("Complimenti hai effetuato la tua richiesta con successo");

    next();

};

module.exports = helloRequest;