import React from 'react';
import { Select, Box, Text } from 'grommet';

const categories = [
    'Cold appetizer',
    'Hot appetizer',
    'Soup',
    'Main dish',
    'Salad',
    'Pasta',
    'Desert'
  ];

export default function CategorySelector({ recipesCategory, recipesFromApi }) {
  const [value, setValue] = React.useState('');
  return (
    <Box direction="row" width='midle' margin="xsmall">
      <Text margin='xsmall' alignSelf='center'> Vyberte kategorii: </Text>
      <Select
        value={value}
        placeholder=" Vyberte kategorii"
        options={categories}
        onChange={({ option }) => {
          setValue(option);
          if (option === 'Libovolna kategorie') {
            recipesFromApi()
          } else recipesCategory(option)
        }}
      />
    </Box>
  );
}
