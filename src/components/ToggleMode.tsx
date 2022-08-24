import { IconButton, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const ToggleMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label='Mode'
      icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
      isRound={true}
      size='lg'
      colorScheme='pink'
      // mt='8'
      onClick={toggleColorMode}
    />
  );
};

export default ToggleMode;
