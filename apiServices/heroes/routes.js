const express = require('express');
const { getHeroes, createHeroe, editHeroe, deleteHeroe } = require('./controllers');

const router = express.Router();

router.get('/heroes', getHeroes);
router.post('/heroes', createHeroe);
router.put('/heroes', editHeroe);
router.delete('/heroes/:id', deleteHeroe);

module.exports = router;