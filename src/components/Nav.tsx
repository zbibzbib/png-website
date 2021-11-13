import React from 'react';

import { useColorModeValue, Text, Box } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

type NavProps = {
  to?: string;
  title: string;
  active?: boolean;
  children?: any;
  onClick?: VoidFunction;
}

export const Nav: React.FC<NavProps> = ({ to, title, active, children, onClick }) => {
  
  const color = useColorModeValue('#868099', '#A6A0BB');
  const activeColor = useColorModeValue('#237FFA', 'linear-gradient(to right, #6C9EFF, #09CA65 35%, #7BD2A2 70%, #FBFE7F)');

  return (
    <Box as={to ? RouterLink : null} to={to || '#'} p={['6px', '8px']} textDecoration="none" 
      fontWeight={600} position="relative" onClick={onClick} cursor="pointer">
      <Text bg={active ? activeColor : color} _hover={{ 
        background: activeColor, 
        backgroundClip: 'text',
        textfillcolor: 'transparent'
      }} backgroundClip="text" textfillcolor="transparent">
        <>
        {title || children}
        </>
      </Text>
      {
        active ?
        <Box mt={1} h="3px" bg={activeColor} position="absolute" 
          left="8px" right="8px" bottom="0px" borderRadius="5px" /> : null
      }
    </Box>
  );
}