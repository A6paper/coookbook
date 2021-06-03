import React, { useState } from 'react';
import { Box, Select } from 'grommet';

const categories = [
  'Cold appetizer',
  'Hot appetizer',
  'Soup',
  'Main dish',
  'Salad',
  'Pasta',
  'Desert'
];

export default function Category(props) {
  const [options, setOptions] = useState(categories);
  const { category, setCategory, errors, setError } = props;
  return (
    <Box fill align="start" justify="center">
      <Select
        id="category"
        className="input"
        name="category"
        size="medium"
        placeholder="Vyberte kategorii"
        dropHeight="small"
        value={category}
        options={options}
        onChange={({ option }) => {
          setError({ ...errors, category: '' });
          setCategory(option);
        }}
        />
        </Box>
      );
    }