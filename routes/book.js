const express = require("express");
const Book = require("../models/Book");
const router = express.Router();

router.get("/", async (req, res) => {
	const books = await Book.find().exec();
	try {
		res.json(books);
	} catch (err) {
		res.json({ message: err.message });
	}
});

router.post("/new", async (req, res) => {
	const book = new Book({
		title: req.body.title,
		pageCount: req.body.pageCount,
		description: req.body.description,
	});
	try {
		const newBook = await book.save();
		res.redirect("/books");
	} catch (err) {
		res.json({ message: err.message });
	}
});

module.exports = router;
