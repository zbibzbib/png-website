import React from 'react';
import { PulseLoader } from 'react-spinners';

import {
  Button,
  ButtonProps,
  useColorModeValue
} from '@chakra-ui/react';

export const PrimaryButton: React.FC<ButtonProps> = (props) => {
  const validColor = 'black';
  const validBg = 'linear-gradient(to right top, #6C9EFF, #09CA65 35%, #7BD2A2 70%, #FBFE7F)';
  const hoverBg = 'linear-gradient(to left bottom, #6C9EFF, #09CA65 35%, #7BD2A2 70%, #FBFE7F)';
  const invalidColor = 'whiteAlpha.400';
  const invalidBg = 'linear-gradient(to right top, rgba(108, 158, 255, .3), rgba(9, 202, 101, .3) 35%, rgba(123, 210, 162, .3) 70%, rgba(251, 254, 127, .3))';

  const { isDisabled, onClick, ...rest } = props;
  return (
    <Button {...rest}
      bg={isDisabled ? invalidBg : validBg}
      cursor={isDisabled ? 'not-allowed' : 'pointer'}
      _hover={{ background: isDisabled ? `` : hoverBg }}
      _active={{ background: isDisabled ? `` : validBg }}
      color={isDisabled ? invalidColor : validColor}
      borderRadius="3xl"
      spinner={<PulseLoader size={10} margin={4} color="white" />}
      onClick={isDisabled ? null : onClick}
    />
  );
}