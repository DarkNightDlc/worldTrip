import { Center,  Link,  Stack, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { SwiperSlide } from "swiper/react";

interface CardSlide{
    image: string;
    children: string[];
    link: string | null;
}

export function CardSlide({image, children, link }:CardSlide){
    return (
        <NextLink href={`/continent/${link}`} passHref>
            <Link>
                <Center
                    backgroundImage={`url(${image})`}
                    bgSize="cover"
                    h="450px"
                    w="full"
                >
                    <Stack color="light.200" fontWeight="700" textAlign="center" textShadow='0 0 10px black' >
                        <Text
                            fontSize="3rem"
                        >
                            {children[0]}
                        </Text>
                        <Text
                            fontSize="2.25rem"
                        >
                            {children[1]}
                        </Text>
                    </Stack>
                </Center>
            </Link>
        </NextLink>
    )
}