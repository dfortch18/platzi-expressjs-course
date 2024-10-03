const { Router } = require('express');
const ProductService = require('../services/product.service');
const validatorHandler = require("../middlewares/validator-handler.middleware-generator");
const { getProductSchema, createProductSchema, updateProductSchema } = require("../schemas");


const router = Router();
const productService = new ProductService();

router.get('/', async (req, res) => {
  let { size } = req.query;
  const limit = size || 10;
  res.json(await productService.find(limit));
});

router.get('/:id', validatorHandler(getProductSchema, 'params'), async (req, res, next) => {
  try {
    const { id } = req.params;
    res.json(await productService.findOne(id));
  } catch (error) {
    next(error);
  }
});

router.post('/', validatorHandler(createProductSchema, 'body'), async (req, res) => {
  const body = req.body;

  res.status(201).json(await productService.create(body));
});

router.patch('/:id', validatorHandler(getProductSchema, 'params'), validatorHandler(updateProductSchema, 'body'), async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;

    res.json(await productService.update(id, body));
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.delete('/:id', validatorHandler(getProductSchema, 'params'), async (req, res) => {
  const { id } = req.params;
  res.json(await productService.delete(id));
});

module.exports = router;
