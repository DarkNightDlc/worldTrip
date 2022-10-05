import { extendTheme } from '@chakra-ui/react'


export const theme = extendTheme({
  colors:{
    light:{
      '100':'#ffffff',
      '200':'#F5F8FA',
      '300':'#DADADA'
    },
    dark:{
      '900': '#000000',
      '800': '#47585B',
      '700': '#999999',

    },
    orange:{
      '900': '#FFBA08',
    }
  },
  fonts:{
    heading:'Poppins',
    body:'Poppins'
  },
  styles:{
    global:{
      body:{
        bg: 'light.200',
        color: 'dark.900'
      }
    }
  }
})

// html,
// body {
  // padding: 0;
  // margin: 0;
  // font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    // Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
// }
// 
// a {
  // color: inherit;
  // text-decoration: none;
// }
// 
// * {
  // box-sizing: border-box;
// }
// 
// @media (prefers-color-scheme: dark) {
  // html {
    // color-scheme: dark;
  // }
  // body {
    // color: white;
    // background: black;
  // }
// }
