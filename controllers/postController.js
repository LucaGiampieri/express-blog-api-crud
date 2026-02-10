const postsList = require('../data/posts');

function index(req, res) {

    let filteredPost = postsList;

    if (req.query.tags || req.query.title) {
        filteredPost = postsList.filter(post =>
            post.tags.includes(req.query.tags)
            || post.title.includes(req.query.title)
        );
    }

    const ojbectPosts = {
        postsNumber: filteredPost.length,
        posts: filteredPost
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

    const newId = postsList[postsList.length - 1].id + 1;

    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    };

    postsList.push(newPost);

    res.status(201);
    res.json(newPost)
}

function update(req, res) {
    res.send('Modifica integrale del post ' + req.params.id);
}

function modify(req, res) {
    res.send('Modifica parziale del post ' + req.params.id);
}

function destroy(req, res) {

    const postId = postsList.find(post =>
        post.id === parseInt(req.params.id));

    if (!postId) {
        res.status(404);
        return res.json({
            error: "404 Not Found",
            message: "post non trovato"
        })
    }

    postsList.splice(postsList.indexOf(postId), 1);

    res.sendStatus(204);

    console.log(postsList);

}

// esportiamo tutto
module.exports = { index, show, store, update, modify, destroy }