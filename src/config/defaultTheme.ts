import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import type { GlobalStyleProps } from '@chakra-ui/theme-tools';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const theme = {
  colors: {
    pngGray: {
      50: '#F7F7F7',
      100: '#EDEDED',
      200: '#E2E2E2',
      300: '#CBCBCB',
      400: '#A0A0A0',
      500: '#717171',
      600: '#4A4A4A',
      700: '#2D2D2D',
      800: '#1A1A1A',
      900: '#171717',
    }
  },
  shadows: {
    pngShadow: 'rgb(0 0 0 / 1%) 0px 0px 1px, rgb(0 0 0 / 4%) 0px 4px 8px, rgb(0 0 0 / 4%) 0px 16px 24px, rgb(0 0 0 / 1%) 0px 24px 32px'
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false
  },
  styles: {
    global: (props: GlobalStyleProps) => ({
      body: {
        bg: mode('rgb(248, 249, 250)', '#1B1A1C')(props),
        color: mode('#1B1A1C', 'white')(props),
      },
    })
  },
  components: {
    Tooltip: {
      baseStyle: (props: GlobalStyleProps) => ({
        bg: mode('white', 'black')(props),
        color: mode('black', 'white')(props),
      })
    },
    Button: {
      baseStyle: {
        borderRadius: 'xl',
        _focus: {
          boxShadow: 'none'
        }
      }
    },
    Link: {
      baseStyle: {
        _focus: {
          boxShadow: 'none'
        }
      }
    },
    Menu: {
      baseStyle: (props: GlobalStyleProps) => ({
        list: {
          bg: mode('white', '#1B1A1C')(props),
        }
      })
    },
    Modal: {
      baseStyle: (props: GlobalStyleProps) => ({
        overlay: {
          bg: mode('blackAlpha.600', 'blackAlpha.700')(props),
        },
        dialog: {
          bg: mode('white', '#1B1A1C')(props),
        }
      })
    },
    CloseButton: {
      baseStyle: {
        _focus: {
          boxShadow: 'none'
        }
      }
    },
    Tabs: {
      baseStyle: {
        tab: {
          _focus: {
            boxShadow: 'none'
          }
        }
      }
    },
    breakpoints: createBreakpoints({
      sm: "375px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
      "2xl": "1536px",
    })
  }
}

export const defaultTheme = extendTheme(theme);