const postsList = require('../data/posts');


function index(req, res) {
    res.send('Elenco dei post');
}

function show(req, res) {
    res.send('Visualizzazione del post ' + req.params.id);
}

function store(req, res) {
    res.send('Creazione nuovo post');
}

function update(req, res) {
    res.send('Modifica integrale del post ' + req.params.id);
}

function modify(req, res) {
    res.send('Modifica parziale del post ' + req.params.id);
}

function destroy(req, res) {
    res.send('Eliminazione del post ' + req.params.id);
}

// esportiamo tutto
module.exports = { index, show, store, update, modify, destroy }