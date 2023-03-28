import { useColorMode as useChakraColorMode } from '@chakra-ui/react';

export const useColorMode = () => {
  const { colorMode, toggleColorMode } = useChakraColorMode();

  const toggle = () => {
    toggleColorMode();
  };

  return { colorMode, toggle };
};