const express = require('express');
const app = express();
const port = 3000;

const postsRouter = require('./routes/posts');

const errorHandler = require('./middlewares/errorHandler');
const errorNotFound = require('./middlewares/errorNotFound');

app.use(express.static('public'));

app.get('/', (req, res) => {

    res.send("Server del mio blog");

})

app.use(express.json());

app.use("/posts", postsRouter);

app.use(errorHandler, errorNotFound);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
