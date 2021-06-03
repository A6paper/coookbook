import React from 'react';
import { Select, Box, Text } from 'grommet';

const cuisine = [
    'Czech cuisine',
    'Italian cuisine',
    'Scandinavian cuisine',
    'Kazakh cuisine',
    'Ukrainian cuisine'
  ];

export default function CuisineSelector({ recipesCuisine, recipesFromApi }) {
  const [value, setValue] = React.useState('');
  return (
    <Box direction="row" width='midle' margin="xsmall">
      <Text margin='xsmall' alignSelf='center'> Vyberte typ kuchyne: </Text>
      <Select
        value={value}
        placeholder=" Vyberte typ kuchyne"
        options={cuisine}
        onChange={({ option }) => {
          setValue(option);
          if (option === 'Libovolna kuchyne') {
            recipesFromApi()
          } else recipesCuisine(option)
        }}
      />
    </Box>
  );
}
