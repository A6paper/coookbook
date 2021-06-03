import React, { useState } from 'react';
import { Box, TextInput, Paragraph, Button} from 'grommet';
import './RecipeForm.css';

export default function Search(props) {
  const { setSearch } = props;
  const [value, setValue] = useState('');
  return (
    <Box
      alignSelf="center"
      direction="row"
      round="small"
      // elevation="small"
      fill={false}
      flex="grow"
      width={{ min: '900px', max: '900px' }}
    >
      <Box
        width={{ min: '750px', max: '750px' }}
        // elevation="small"
        fill
        round="small"
      >
        <TextInput
          // elevation="small"
          className="input"
          placeholder="Insert ingredient name"
          value={value}
          onChange={event => setValue(event.target.value)}
        />
      </Box>
      <Box
        alignContent="center"
        // basis="large"
        // border="bottom"
        direction="row"
        flex="grow"
        focusIndicator={false}
      >
        <Button focusIndicator={false} href="#">
          <Box
            onClick={event => {
              event.preventDefault();
              event.stopPropagation();
              setSearch(value);
            }}
            onFocus={event => event.stopPropagation()}
            hoverIndicator
            height="50px"
            focusIndicator={true}
            // align="center"
            direction="row"
            // gap="xsmall"
            pad={{ vertical: '0px', horizontal: '43px' }}
            margin={{ vertical: '0px', horizontal: '10px' }}
            width={{ min: '140px', max: '140px' }}
            background="accent-1"
            round="small"
            elevation="small"
          >
            <Paragraph
              className="button"
              alignSelf="center"
              textAlign="center"
              elevation="small"
            >
              Search
            </Paragraph>
          </Box>
        </Button>
      </Box>
    </Box>
  );
}