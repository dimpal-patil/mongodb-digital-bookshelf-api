const express = require("express");
const router = express.Router();
const Book = require("../models/Book.js")


// CREATE - POST /
router.post("/", async (req, res) => {
try {
    const newBook = await Book.create(req.body);
    res.status(201).json(newBook);
} catch (error) {
    console.error("Error creating book:", error);
    res.status(500).json({ error: "Failed to create book" });
}
});

// READ ALL - GET /
router.get("/", async (req, res) => {
try {
    const allBooks = await Book.find({});
    res.status(200).json(allBooks);
} catch (error) {
    console.error("Error getting books:", error);
    res.status(500).json({ error: "Failed to get books" });
}
});

// READ ONE - GET /:id
router.get("/:id", async (req, res) => {
try {
    const foundBook = await Book.findById(req.params.id);

    if (!foundBook) {
    return res.status(404).json({ error: "Book not found" });
    }

    res.status(200).json(foundBook);
} catch (error) {
    console.error("Error finding book:", error);
    res.status(500).json({ error: "Failed to find book" });
}
});

// UPDATE - PUT /:id
router.put("/:id", async (req, res) => {
try {
    const updatedBook = await Book.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    if (!updatedBook) {
        return res.status(404).json({ error: "Book not found" });
    }

    res.status(200).json(updatedBook);
} catch (error) {
    console.error("Error updating book:", error);
    res.status(500).json({ error: "Failed to update book" });
}
});

// DELETE - DELETE /:id
router.delete("/:id", async (req, res) => {
try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);

    if (!deletedBook) {
    return res.status(404).json({ error: "Book not found" });
    }

    res.status(200).json({
        message: "Book deleted successfully",
        book: deletedBook,
    });
} catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).json({ error: "Failed to delete book" });
}
});

module.exports = router;