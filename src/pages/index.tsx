import type { NextPage } from 'next'

import { useAllPrismicDocumentsByType } from '@prismicio/react'

import {  Center, Divider, Stack, Text } from '@chakra-ui/react'

import { BannerHome } from '../components/BannerHome'
import { ContinentsSlide } from '../components/ContinentsSlide'
import { TravelTypes } from '../components/TravelTypes'

const Home: NextPage = () => {

  return (
    <Stack as="main" maxW="1440px" mx="auto" pb="2.5rem" >
      <BannerHome/>
      <TravelTypes/>
      <Center>
        <Divider mt="5rem" mb="3.3125rem" w="90px" border="2px" borderColor='dark.800' bg="dark.800" borderRadius="full"/>
      </Center>
      <Stack alignItems="center">
        <Text align="center" fontSize="2.25rem" fontWeight="500" mb="3.25rem" >
          Vamos nessa?<br/>
          Então escolha seu continete
        </Text>
        <ContinentsSlide />
      </Stack>
    </Stack>
  )
}

export default Home;