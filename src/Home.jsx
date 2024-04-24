import React, { useState } from 'react';
import { Box, Heading, Input, Button, List, ListItem, ListIcon, VStack } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

function Home() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, input.trim()]);
      setInput('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <VStack p={8}>
      <Heading mb={6}>Todo App</Heading>
      <Box>
        <Input
          placeholder="Add a new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          size="lg"
          mr={2}
        />
        <Button onClick={handleAddTodo} colorScheme="blue">Add</Button>
      </Box>
      <List spacing={3} mt={6} w="100%">
        {todos.map((todo, index) => (
          <ListItem key={index} d="flex" justifyContent="space-between" alignItems="center">
            {todo}
            <ListIcon as={FaTrash} color="red.500" w={5} h={5} cursor="pointer" onClick={() => handleDeleteTodo(index)} />
          </ListItem>
        ))}
      </List>
    </VStack>
  );
}

export default Home;