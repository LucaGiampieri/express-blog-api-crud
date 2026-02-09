const postsList = require('../data/posts');

function index(req, res) {

    const ojbectPosts = {
        postsNumber: postsList.length,
        posts: postsList
    }

    res.json(ojbectPosts);
}

function show(req, res) {
    const postId = postsList.find(post =>
        post.id === parseInt(req.params.id));

    if (!postId) {
        res.status(404);
        return res.json({
            error: "404 Not Found",
            message: "post non trovato"
        })
    }

    res.json(postId);

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