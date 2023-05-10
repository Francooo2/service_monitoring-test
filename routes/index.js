const express = require('express');
const heroes = require('../apiServices/heroes/routes.js');

const router = express.Router();

router.use('/heroes', heroes);

module.exports = router;