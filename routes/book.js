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
		name: req.body.name,
		// pageCount: req.body.pageCount,
		description: req.body.description,
	});
	try {
		const newBook = await book.save();
		res.redirect("/books");
	} catch (err) {
		res.json({ message: err.message });
	}
});

router.delete("/:id", async (req, res) => {
	const book = await Book.findById(req.params.id);

	try {
		book
			.remove()
			.then(() => res.json({ success: true }))
			.catch((err) => res.status(404).json({ error: err.message }));
	} catch (err) {
		res.status(404).json({ error: err.message });
	}
});

module.exports = router;
