import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import {
  Home,
} from 'views';

import { defaultTheme } from 'config';

export const App = () => {
  return (
    <ChakraProvider theme={defaultTheme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ChakraProvider >
  );
}