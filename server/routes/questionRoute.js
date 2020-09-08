var express = require("express");
var router = express.Router();
var questionsController = require("../controllers/questionsController");

router.get("/", questionsController.getAllQuestions);

module.exports = router;