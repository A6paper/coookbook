import React, { useState } from 'react';
import { Box, Select } from 'grommet';

const cuisine = [
    'Czech cuisine',
    'Italian cuisine',
    'Scandinavian cuisine',
    'Kazakh cuisine',
    'Ukrainian cuisine'
];

export default function Cuisine(props) {
  // eslint-disable-next-line no-use-before-define
  const [options, setOptions] = useState(cuisine);
  const { cuisine, setCuisine, errors, setError } = props;
  return (
    <Box fill align="start" justify="center">
      <Select
        id="cuisine"
        className="input"
        name="cuisine"
        size="medium"
        placeholder="Vyberte typ kuchyni"
        dropHeight="small"
        value={cuisine}
        options={options}
        onChange={({ option }) => {
          setError({ ...errors, cuisine: '' });
          setCuisine(option);
        }}
        />
        </Box>
      );
    }