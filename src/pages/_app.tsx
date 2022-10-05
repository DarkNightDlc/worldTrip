import type { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/Theme'

import { PrismicProvider } from '@prismicio/react'
import { client } from '../services/prismic'

import { Header } from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider client={client}>
      <ChakraProvider theme={theme}>
        <Header/>
        <Component {...pageProps} />
      </ChakraProvider>
    </PrismicProvider>
 
  )
}

export default MyApp
