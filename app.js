const express = require("express");
const app = express();
const port = 3000;
const routerPosts = require("./routers/posts")
const errorsHandler = require("./middlewares/errorsHandler");
const notFound = require("./middlewares/notFound");

app.use(express.static("public"));
app.use(express.json());
app.use(notFound);
app.use(errorsHandler);

app.use("/posts", routerPosts);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
