const posts = require("../data/postsData");

const index = (req, res) => res.json(posts);

const show = (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);
    
    if (!post) {
        res.status(404);

        return res.json ({
            error: "Not Found",
            message: "Post non trovato"
        })
    };

    res.json(post);
}

const store = (req, res) => res.send("Creazione nuovo post");
const update = (req, res) => res.send(`Modifica integrale del post: ${req.params.id}`);
const modify = (req, res) => res.send(`Modifica parziale del post: ${req.params.id}`);

const destroy = (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);
    
    if (!post) {
        res.status(404);

        return res.json ({
            error: "Not Found",
            message: "Post non trovato"
        })
    };

    posts.splice(posts.indexOf(post), 1);
    res.sendStatus(204);
    console.log(posts);
}


module.exports = {index, show, store, update, modify, destroy};