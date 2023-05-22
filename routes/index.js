const express = require('express');
const heroes = require('../apiServices/heroes/routes.js');
const metrics = require('../apiServices/monitoring/routes.js');

const router = express.Router();

router.use('/', heroes);
router.use('/metrics', metrics);

module.exports = router;