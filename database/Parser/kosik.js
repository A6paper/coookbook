const request = require('request-promise');
const parse = require('cheerio');
const Ingredient = require('../models/ingredient');


async function parseSearchPageVV(productName) {
  let link = encodeURI('https://kosik.cz/search/?q=' + productName);
  const products = [];
  try {
    const html = await request(link);
    const links = [];
    parse('.ProductCards__item', html).map(function() {
      let link = parse('.ProductCard__link', this).attr('href');
      links.push(link);
    });

    // async 
    await Promise.all(
      links.map(async link => {
        productInfo = await parseProductPageVV(link);
        products.push(productInfo);
      }),
    );

    return products; 
  } catch (err) {
    return err;
  }
}

async function parseProductPageVV(link) {
  try {
    const fullLink = 'https://kosik.cz' + link;
    const html = await request(encodeURI(fullLink));

    let result = {
      id: uuidv1(),
      name: parse('.Product__title', html)
        .text()
        .trim(),
      weight: parse('.Product__listItem', html)
        .text()
        .trim(),
      rating: parse('.Rating__text', html)
        .text()
        .trim(),
      price: parse('.Price.Price--lg > .Price__value', html)
        .text()
        .trim(),
      currency: parse('.Price.Price--lg > .Price__unit', html)
        .text()
        .trim(),

      link: fullLink,
    };

    parse('.ProductGallery__image', html).map(function() {
      let Imagelink = parse('.lazyload', this).attr('data-src');
      result['imageLink'] = 'https://kosik.cz' + Imagelink;
    });

      const newIngredient = new Ingredient(result);
  
      return newIngredient;
    } catch (err) {
      return err;
    }
  }