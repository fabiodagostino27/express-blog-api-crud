const posts = require("../data/postsData");

const index = (req, res) => res.json(posts);

module.exports = {index};