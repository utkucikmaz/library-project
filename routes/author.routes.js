const express = require("express");
const Book = require("../models/Book.model");
const Author = require("../models/Author.model");

const router = express.Router();

router.get("/authors", (req, res, next) => {
    Author.find()
        .then((authorsFromDB) => {
            console.log(authorsFromDB);

            const data = {
                authors: authorsFromDB,
            };

            res.render("authors/authors-list", data);
        })
        .catch((e) => {
            console.log("Error getting list of authors from DB", e);
            next(e);
        });
});

module.exports = router;
