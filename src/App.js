import logo from './logo.svg';
import './App.css';
import { Box, useColorMode, useColorModeValue, } from '@chakra-ui/react';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box bg={useColorModeValue('gray.200', 'gray.900')}>
      <Box >Hello world</Box>
    </Box>
  );
}

export default App;
