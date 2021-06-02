const express = require('express');

const router = express.Router();
const { parseSearchPageVV } = require('../parser/kosik');

module.exports = router;

router
  .route('/')
  // get all ingredients POST
  .post(async (req, res) => {
    try {
      const { productname } = req.body;
      const ingredients = await parseSearchPageVV(productname);
      if (ingredients.length !== 0) {
        res.send(JSON.stringify({ message: 'ok', ingredients }));
      } else {
        res.status(204).json([]);
      }
    } catch (error) {
      res.status(400).json(error);
    }
  });