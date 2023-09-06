const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
const API = require('./api-class')
const tagAPI = new API(Tag, {linkedModel: Product, junctionModel: ProductTag})

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  tagAPI.getAll(req, res)
});

router.get('/:id', (req, res) => {
  tagAPI.getId(req, res)
});

router.post('/', (req, res) => {
  tagAPI.create(req, res)
});

router.put('/:id', (req, res) => {
  tagAPI.update(req, res)
});

router.delete('/:id', (req, res) => {
  tagAPI.delete(req, res)
});

module.exports = router;
