const router = require("express").Router();
const booksController = require("../../controllers/booksController");

//  "/api/about"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);


module.exports = router;
