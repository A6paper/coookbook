import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Image, Text, DropButton, Heading } from 'grommet';

const RecipeItem = item => {
  const {
    name,
    image,
    _id,
    ingredients,
    priceTotal,
    caloriesTotal,
    category,
    authorName,
    hours,
    minutes
  } = item;
  const ingredientsList = () => (
    <Box margin="xsmall">
      {ingredients.map(item => (
        <a
          key={item.id}
          style={{ textDecoration: 'none' }}
          href={item.link}
          target="_blank" rel="noreferrer"
        >
          {' '}
          <Text size="small" color="black" margin="xsmall">
            {' '}
            {item.name}
          </Text>{' '}
        </a>
      ))}{' '}
    </Box>
  );
  return (
    <Box direction="row">
      <Box height="small" width="small" margin="xsmall">
        <Image src={image} alt={name} fit="cover" />
      </Box>
      <Box direction="column" width="medium" align="start">
        <Link style={{ textDecoration: 'none' }} to={`/recipes/${_id}`}>
          <Heading level="3" margin="none" color="#01a982">
            {' '}
            {category} / {name}
          </Heading>
        </Link>

        <Box alignSelf="start">
          <DropButton
            style={{ border: 'none' }}
            alignSelf="start"
            label={`Ингредиенты - ${ingredients.length}`}
            dropAlign={{ top: 'bottom', left: 'left' }}
            dropContent={ingredientsList()}
          />
        </Box>
        <Box alignSelf="start">
          <Text>Cena receptu: {priceTotal} Kč </Text>
          <Text>Nutritions: {caloriesTotal} kcal </Text>
          {/* <Text>Category: {category}</Text> */}
          <Text>Автор: {authorName}</Text>
          <Text>
            Preparation time:{' '}
            {hours === '0'
              ? ''
              : hours === '1'
              ? `${hours} hodina`
              : hours > 1 && hours < 5
              ? `${hours} hodiny`
              : `${hours} hodin`}{' '}
            {minutes !== '0' && `${minutes} minut`}{' '}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default RecipeItem;