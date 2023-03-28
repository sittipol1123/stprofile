import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import tailwindConfig from '../../tailwind.config';

const breakpoints = createBreakpoints(tailwindConfig.theme.screens);

const theme = extendTheme({
  breakpoints,
  colors: {
    primary: {
      500: tailwindConfig.theme.extend.colors.primary,
    },
    secondary: {
      500: tailwindConfig.theme.extend.colors.secondary,
    },
  },
})

export default theme