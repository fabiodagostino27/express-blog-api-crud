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

module.exports = {index, show};