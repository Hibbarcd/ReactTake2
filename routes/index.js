const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

//no hit route here============
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

module.exports = router;
