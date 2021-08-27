const express = require("express");
const Book = require("../models/Book");
const router = express.Router();

const updateMiddleWare = async (req, res, next) => {
	let book;
	try {
		book = await Book.findById(req.params.id);
		if (book == null) {
			return res.status(404).json({ message: "Cannot find book" });
		}
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}

	res.book = book;
	next();
};

router.get("/", async (req, res) => {
	const books = await Book.find().exec();
	try {
		res.json(books);
	} catch (err) {
		res.json({ message: err.message });
	}
});

router.get("/:id", updateMiddleWare, async (req, res) => {
	res.json(res.book);
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

router.patch("/:id", updateMiddleWare, async (req, res) => {
	Book.findByIdAndUpdate(req.params.id, req.body, (err, docs) => {
		if (err) {
			res.status(404).json({ error: err.message });
		} else {
			res.json({ beforeUpdate: res.book, afterUpdate: docs });
		}
	});
});

module.exports = router;
