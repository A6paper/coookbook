const express = require('express');

const router = express.Router();
const Recipe = require('../models/recipe');

module.exports = router;

// api/recipes
router
  .route('/')
  // get all recipes GET
  .get(async (req, res) => {
    try {
      const recipes = await Recipe.find();
      return res.send(JSON.stringify({ message: 'ok', recipes }));
    } catch (error) {
      return res.send(JSON.stringify({ message: 'error', error }));
    }
  })
  // create a recipe POST
  .post(async (req, res) => {
    const recipe = {
      ...req.body,
      author: req.session.userId,
      authorName: req.session.username,
    };
    const newRecipe = new Recipe(recipe);
    try {
      await newRecipe.save();
      return res.send(
        JSON.stringify({ message: 'ok', recipeId: newRecipe.id }),
      );
    } catch (error) {
      return res.send(JSON.stringify({ message: 'error', error }));
    }
  });

//  get recipes sorted by price
router.get('/price', async (req, res) => {
  let sortFlag = 1;
  if (req.query.direction !== 'up') {
    sortFlag = -1;
  }
  try {
    const recipes = await Recipe.find().sort({ priceTotal: sortFlag });
    return res.send(JSON.stringify({ message: 'ok', recipes }));
  } catch (error) {
    return res.send(JSON.stringify({ message: 'error', error }));
  }
});

// get recipes sorted by calories
router.get('/calorific', async (req, res) => {
  let sortFlag = 1;
  if (req.query.direction !== 'up') {
    sortFlag = -1;
  }
  try {
    const recipes = await Recipe.find().sort({ caloriesTotal: sortFlag });
    return res.send(JSON.stringify({ message: 'ok', recipes }));
  } catch (error) {
    return res.send(JSON.stringify({ message: 'error', error }));
  }
});

// get random recipe
router.get('/random', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    const randIndex = Math.floor(Math.random() * recipes.length);
    return res.send(
      JSON.stringify({ message: 'ok', id: recipes[randIndex]._id }),
    );
  } catch (error) {
    return res.send(JSON.stringify({ message: 'error', error }));
  }
});

router
  .route('/category/:category')
  // get all categories GET
  .get(async (req, res) => {
    try {
      const recipes = await Recipe.find({ category: req.params.category });
      return res.send(JSON.stringify({ message: 'ok', recipes }));
    } catch (error) {
      return res.send(JSON.stringify({ message: 'error', error }));
    }
  });

router
  .route('/:id')
  // get recipe by id GET
  .get(async (req, res) => {
    try {
      const recipe = await Recipe.findById(req.params.id);
      return res.send(JSON.stringify({ message: 'ok', recipe }));
    } catch (error) {
      return res.send(JSON.stringify({ message: 'error', error }));
    }
  })
  // delete recipe by id DELETE
  .delete(async (req, res) => {
    try {
      const deleteResult = await Recipe.deleteOne({ _id: req.params.id });
      return res.send(JSON.stringify({ message: 'ok' }));
    } catch (error) {
      return res.send(JSON.stringify({ message: 'error', error }));
    }
  })
  // edit exact recipe PUT
  .put(async (req, res) => {
    try {
      const {
        name,
        hours,
        minutes,
        image,
        portions,
        ingredients,
        instructions,
        category,
        priceTotal,
        caloriesTotal,
        portionsSuffix,
      } = req.body;
      await Recipe.updateOne(
        { _id: req.params.id },
        {
          $set: {
            name,
            hours,
            minutes,
            image,
            portions,
            ingredients,
            instructions,
            category,
            priceTotal,
            caloriesTotal,
            portionsSuffix,
          },
        },
      );
      return res.send(JSON.stringify({ message: 'ok' }));
    } catch (error) {
      return res.send(JSON.stringify({ message: 'error', error }));
    }
  });