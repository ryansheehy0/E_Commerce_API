const router = require('express').Router();
const { Category, Product } = require('../../models');
const API = require('./api-class')
const categoryAPI = new API(Category, {linkedModel: Product})

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  categoryAPI.getAll(req, res)
});

router.get('/:id', (req, res) => {
  categoryAPI.getId(req, res)
});

router.post('/', (req, res) => {
  categoryAPI.create(req, res)
});

router.put('/:id', (req, res) => {
  categoryAPI.update(req, res)
});

router.delete('/:id', (req, res) => {
  categoryAPI.delete(req, res)
});

module.exports = router;
