// Express routes for bugs

const express = require('express');
const router = express.Router();
const bugController = require('../controllers/bugController');

router.get('/', bugController.getBugs);
router.post('/', bugController.createBug);

module.exports = router;