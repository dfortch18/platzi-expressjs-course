const { Router } = require("express");
const { faker } = require("@faker-js/faker");

const router = Router();

router.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
      res.json({ limit, offset });
  } else {
      res.json('No query params');
  }
});

module.exports = router;
