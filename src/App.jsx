import { useState, useEffect, useCallback } from "react";
import {
  Box,
  Heading,
  Input,
  InputRightElement,
  InputGroup,
  Stack,
  FormControl,
  FormErrorMessage,
  SimpleGrid,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import PokemonCard from "./components/PokemonCard";
import pokemonValues from "./lib/web_json_updated.json";

function App() {
  const [filteredPokemon, setFilteredPokemon] = useState(Object.keys(pokemonValues));
  const [input, setInput] = useState('');
  const [debouncedInput, setDebouncedInput] = useState('');

  // Debounce the input to avoid excessive re-renders
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedInput(input);
    }, 100); // 300ms debounce time

    return () => {
      clearTimeout(handler);
    };
  }, [input]);

  // Filter the Pokemon list based on the debounced input
  useEffect(() => {
    if (debouncedInput.length > 2) {
      setFilteredPokemon(
        Object.keys(pokemonValues).filter((name) =>
          name.toLowerCase().includes(debouncedInput.toLowerCase())
        )
      );
    }
  }, [debouncedInput]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const isError = filteredPokemon.length === 0;

  return (
      <Stack direction="column" gap={5} width="100%" mx={10}>
        <Heading position="sticky">Pokemon Weaknesses</Heading>
        <FormControl isInvalid={isError}>
          <InputGroup maxWidth="400px">
            <Input
              placeholder="Search Pokemon"
              value={input}
              onChange={handleInputChange}
            />
            <InputRightElement>
              <SearchIcon />
            </InputRightElement>
          </InputGroup>
          {isError && (
            <FormErrorMessage>
              Your entry doesn't match any Pokemon in our database.
            </FormErrorMessage>
          )}
        </FormControl>
        <Box p={0} m={0} width="100%" height='700px' overflowY="scroll">
        <SimpleGrid columns={{sm: 1, md: 3, lg: 4}} gap={3}>
        {debouncedInput.length > 2 && filteredPokemon.slice(0, 9).map((name, index) => (
          <PokemonCard
            key={index}
            four={Object.keys(pokemonValues[name]["four"])}
            two={Object.keys(pokemonValues[name]["two"])}
            half={Object.keys(pokemonValues[name]["half"])}
            quarter={Object.keys(pokemonValues[name]["quarter"])}
            zero={Object.keys(pokemonValues[name]["zero"])}
            name={name.charAt(0).toUpperCase() + name.slice(1)}
            img={pokemonValues[name]["sprite"]}
          />
        ))}
        </SimpleGrid>
        </Box>
      </Stack>
  );
}

export default App;
