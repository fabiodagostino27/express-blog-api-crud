const express = require("express");
const router = express.Router();
const {index, show, store, update, modify} = require("../controllers/postController");

router.get("/", index);
router.get("/:id", show);
router.post("/", store);
router.put("/:id", update);
router.patch("/:id", modify);

module.exports = router;