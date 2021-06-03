import {v4 as uuidv4} from 'uuid';
import React, { useState } from 'react';
import { Box, TextInput, Select, Text, Paragraph } from 'grommet';
import { NumberInput } from 'grommet-controls';
import { Redirect } from 'react-router-dom';
import Ingredients from './Ingredients';
import Search from './Search';
import Cuisine from './Cuisine'
import Category from './Category';
import Submit from './Submit';
import Instruction from './Instruction';
import './RecipeForm.css';



const hrs = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12'
];
const mins = [
  '0',
  '5',
  '10',
  '15',
  '20',
  '25',
  '30',
  '35',
  '40',
  '45',
  '50',
  '55'
];

export default function RecipeForm(props) {
  const [name, setName] = useState('');
  const [hours, setHours] = useState('0');
  const [minutes, setMinutes] = useState('0');
  const [portions, setPortions] = useState(1);
  const [category, setCategory] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [priceTotal, setPriceTotal] = useState('');
  const [caloriesTotal, setCaloriesTotal] = useState('');
  const [search, setSearch] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([
    { id: uuidv4(), text: '' }
  ]);
  const [id, setId] = useState('');
  const [image, setImage] = useState('');
  const [errors, setError] = useState({
    name: '',
    image: '',
    ingredients: '',
    instructions: '',
    category: '',
    cuisine: ''
  });
  const [portionsSuffix, setSuffix] = useState(' portion');
  const clickSubmit = async () => {
    // debugger;
    if (
      !name ||
      !image ||
      ingredients.length === 0 ||
      instructions[0].text === '' ||
      !category || !cuisine
    ) {
      const newErrors = {};
      if (!name) {
        newErrors.name = 'Please, fill a name';
      }
      if (!image) {
        newErrors.image = 'Please, insert an image';
      }
      if (!category) {
        newErrors.category = 'Please, choose a category';
      }
      if (!cuisine) {
        newErrors.cuisines = 'Please, choose a cuisine';
      }
      if (ingredients.length === 0) {
        newErrors.ingredients = 'Please, add ingredients';
      }
      if (instructions[0].text === '') {
        newErrors.instructions =
          'Please, fill cooking instructions';
      }
      setError(newErrors);
    } else {
      try {
        let instructionsTrimmed = instructions;
        if (instructions[instructions.length - 1].text === '') {
          instructionsTrimmed = instructions.slice(0, instructions.length - 1);
        }
        const response = await fetch('/api/recipes/', {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify({
            name,
            hours,
            minutes,
            image,
            portions,
            ingredients,
            instructions: instructionsTrimmed,
            cuisine,
            category,
            priceTotal,
            caloriesTotal,
            portionsSuffix
          }),
          credentials: 'include'
        });
        if (response.status === 200) {
          const { recipeId } = await response.json();
          setId(recipeId);
        } else {
          setError({ ...errors, server: `ERROR: ${response.status}` });
        }
      } catch (error) {
        setError({ ...errors, server: error });
      }
    }
  };

  if (id) {
    return <Redirect to={`/recipes/${id}`} />;
  }
  return (
    <Box
      justify="between"
      alignContent="stretch"
      margin="medium"
      gap="medium"
      pad="medium"
      fill="vertical"
      direction="column"
      elevation="medium"
      width="80%"
      height="medium"
    >
      <Paragraph
        margin={{
          vertical: 'medium',
          horizontal: '...',
          top: 'large',
          bottom: '...',
          left: '...',
          right: '...'
        }}
        className="bold"
        alignSelf="center"
        size="small"
        responsive={true}
        textAlign="center"
      >
        New recipe
      </Paragraph>
      <Box
        align="center"
        alignContent="center"
        alignSelf="center"
        // basis="large"
        border="bottom"
        direction="row-responsive"
      >
        <TextInput
          plain={true}
          placeholder="    Recipe name"
          value={name}
          className="ingredient-name"
          onChange={event => {
            setError({ ...errors, name: '' });
            setName(event.target.value);
          }}
        />
        {errors.name && (
          <Paragraph
            margin={{
              vertical: 'medium',
              horizontal: '...',
              top: 'large',
              bottom: '...',
              left: '...',
              right: '...'
            }}
            className="bold"
            alignSelf="center"
            size="small"
            responsive={true}
            textAlign="center"
            color="red"
          >
            {errors.name}
          </Paragraph>
        )}
      </Box>
      <Paragraph
        margin={{
          vertical: 'medium',
          horizontal: '...',
          top: 'large',
          bottom: '...',
          left: '...',
          right: '...'
        }}
        className="bold"
        alignSelf="center"
        size="small"
        responsive={true}
        textAlign="center"
      >
        Portion amount
      </Paragraph>
      <Box
        round="small"
        align="center"
        alignContent="center"
        alignSelf="center"
        // basis="large"
        // border="bottom"
        direction="row-responsive"
        elevation="small"
        fill={false}
        flex={false}
        width={{ min: '220px', max: '220px' }}
      >
        <NumberInput
          min={1}
          max={12}
          value={portions}
          suffix={portionsSuffix}
          onChange={({ target: { value } }) => {
            if (parseFloat(value) === 1) {
              setSuffix(' portions');
            } else if (parseFloat(value) > 4) {
              setSuffix(' portions');
            } else {
              setSuffix(' portions');
            }
            setPortions(value);
          }}
        />
      </Box>
      <Paragraph
        margin={{
          vertical: 'medium',
          horizontal: '...',
          top: 'large',
          bottom: '...',
          left: '...',
          right: '...'
        }}
        className="bold"
        alignSelf="center"
        size="small"
        responsive={true}
        textAlign="center"
      >
        Ingredients
      </Paragraph>
      {ingredients.length > 0 && (
        <Ingredients
          ingredients={ingredients}
          setIngredients={setIngredients}
          setPriceTotal={setPriceTotal}
          setCaloriesTotal={setCaloriesTotal}
        />
      )}
      <Search setSearch={setSearch} />
      {search}
      {errors.ingredients && (
        <Text size="medium" color="red">
          {errors.ingredients}
        </Text>
      )}
      <Paragraph
        margin={{
          vertical: 'medium',
          horizontal: '...',
          top: 'large',
          bottom: '...',
          left: '...',
          right: '...'
        }}
        className="bold"
        alignSelf="center"
        size="small"
        responsive={true}
        textAlign="center"
      >
        Instructions
      </Paragraph>
      {instructions &&
        instructions.map((instruction, index) => (
          <Box
            // align="center"
            // alignContent="center"
            alignSelf="center"
            direction="row-responsive"
            key={instruction.id}
          >
            <Instruction
              instruction={instruction}
              instructions={instructions}
              setInstructions={setInstructions}
              errors={errors}
              setError={setError}
              index={index}
            />
          </Box>
        ))}
      {errors.instructions && (
        <Text size="medium" color="red">
          {errors.instructions}
        </Text>
      )}
      <Box
        alignSelf="center"
        alignContent="center"
        direction="row"
        round="small"
        // elevation="small"
        fill={false}
        flex="grow"
        margin={{ vertical: '0px' }}
        width={{ min: '800px', max: '800px' }}
      >
        <Box
          alignSelf="left"
          alignContent="top"
          direction="column"
          round="small"
          // elevation="small"
          fill={false}
          flex="grow"
          margin={{ vertical: '0px' }}
          // width={{ min: '800px', max: '800px' }}
        >
          <Paragraph
            margin={{
              vertical: 'medium',
              horizontal: '...',
              top: 'large',
              bottom: '...',
              left: '...',
              right: '...'
            }}
            className="bold"
            alignSelf="left"
            size="small"
            responsive={true}
            textAlign="left"
          >
            Cuisine
          </Paragraph>
          <Cuisine
            cuisine={cuisine}
            setCuisine={setCuisine}
            errors={errors}
            setError={setError}
          />
          {errors.cuisine && (
            <Text size="medium" color="red">
              {errors.cuisine}
            </Text>
          )}
        </Box>
        <Box
          alignSelf="right"
          direction="column"
          round="small"
          // elevation="small"
          fill={false}
          flex="grow"
          margin={{ vertical: '0px' }}
          // width={{ min: '800px', max: '800px' }}
        >
          <Paragraph
            margin={{
              vertical: 'medium',
              horizontal: '...',
              top: 'large',
              bottom: '...',
              left: '...',
              right: '...'
            }}
            className="bold"
            alignSelf="left"
            size="small"
            responsive={true}
            textAlign="left"
          >
            Category
          </Paragraph>
          <Category
            category={category}
            setCategory={setCategory}
            errors={errors}
            setError={setError}
          />
          {errors.category && (
            <Text size="medium" color="red">
              {errors.category}
            </Text>
          )}
        </Box>
        <Box
          alignSelf="right"
          direction="column"
          round="small"
          // elevation="small"
          fill={false}
          flex="grow"
          margin={{ vertical: '0px' }}
          // width={{ min: '800px', max: '800px' }}
        >
          <Paragraph
            margin={{
              vertical: 'medium',
              horizontal: '...',
              top: 'large',
              bottom: '...',
              left: '...',
              right: '...'
            }}
            className="bold"
            alignSelf="left"
            size="small"
            responsive={true}
            textAlign="left"
          >
            Cooking time
          </Paragraph>
          <Select
            id="hours"
            name="hours"
            placeholder="hodin"
            dropHeight="small"
            options={hrs}
            value={hours}
            onChange={({ option }) => setHours(option)}
          />
          <Paragraph
            className="bold"
            alignSelf="left"
            size="small"
            responsive={true}
            textAlign="left"
          >
            h.
          </Paragraph>
          <Select
            id="minutes"
            name="minutes"
            placeholder="minut"
            dropHeight="small"
            options={mins}
            value={minutes}
            onChange={({ option }) => setMinutes(option)}
          />
          <Paragraph
            className="bold"
            alignSelf="left"
            size="small"
            responsive={true}
            textAlign="left"
          >
            min.
          </Paragraph>
        </Box>
      </Box>
      <Box
        alignSelf="center"
        alignContent="center"
        direction="row"
        round="small"
        // elevation="small"
        fill={false}
        flex="grow"
        width="400px"
        margin={{
          "left": "55px"
        }}

      >
      </Box>
      <Box
        alignSelf="center"
        alignContent="center"
        direction="row"
        round="small"
        // elevation="small"
        fill={false}
        flex="grow"
        margin={{ vertical: '0px' }}
      >
        <Submit name="Create recipe" clickSubmit={clickSubmit} />
        {errors.server && (
          <Text size="medium" color="red">
            {errors.server}
          </Text>
        )}
      </Box>
    </Box>
  );
}