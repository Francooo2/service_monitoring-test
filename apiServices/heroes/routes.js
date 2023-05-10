const express = require('express');
const { getHeroes, createHeroe, editHeroe, deleteHeroe } = require('./controllers');

const router = express.Router();

router.get('/', getHeroes);
router.post('/', createHeroe);
router.put('/', editHeroe);
router.delete('/:id', deleteHeroe);

module.exports = router;