import { Flex, Img, Link, Stack, Text } from "@chakra-ui/react";
import NextLink from "next/link";

interface TravelCandleProps{
    link: string;
    image: string;
    children: string;
}

export function TravelCandle({link, image,children}:TravelCandleProps){
    return (
        <NextLink href={link} passHref >
          <Link w="12rem" h="10rem" >
            <Stack
              p="1rem"
              spacing="1.5rem"
              fontWeight="600"
              justifyContent="center"
              alignItems="center"
              _hover={{border:'1px',
              borderColor:'dark.800',
              borderRadius:"xl"
            }}>
              <Img src={image} w="5.3125rem" h="5.3125rem"/>
              <Text as="span" fontWeight="600" fontSize="1.5rem" textAlign="center" >{children}</Text>
            </Stack>
          </Link>
        </NextLink>
    )
}