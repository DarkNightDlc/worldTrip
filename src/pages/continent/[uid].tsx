import { Box, Button, Center, Flex, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { usePrismicDocumentByUID } from "@prismicio/react"
import { GetServerSideProps } from "next"
import LinkNext from "next/link";
import { useState } from "react";

interface ContinentProps {
    uid: string;
}

export default function Continent({uid}:ContinentProps){

    
    const [document] =usePrismicDocumentByUID('continente', uid)
    var [timer, setTimer] = useState("start") 
    const timeOut =  setTimeout(() =>{ setTimer("Time Out")}, 2*1000) 

    if( document !== undefined){
        clearTimeout(timeOut)
        console.log(document)
        return (
            <Stack as="main" maxW="1440px" mx="auto" pb="5rem" >
                <Flex
                    w="full"
                    h="31.25rem"
                    backgroundImage={document.data.banner.url}
                    backgroundSize="cover"
                    alignItems="end"
                    px={["2rem","8.75rem"]}
                    py="3.75rem"
                    fontWeight="600"
                    fontSize="3rem"
                    color="light.200"
                >
                    <Text as="h1">
                        {document.data.continentname[0].text}
                    </Text>
                </Flex>
                
                <SimpleGrid
                  py="5rem"
                  px={["2rem","8.75rem"]}
                  flex="1"
                  gap="4.375rem"
                  minChildWidth="320px"
                  alignItems="center"
                >
                    <Text as="p" fontSize="1.5rem" fontWeight="400" color="dark.800" textAlign={["center","left"]}>
                        {document.data.description[0].text}
                    </Text>
                    <Flex w="full" justifyContent="space-evenly" gap="2.625rem" >
                        <Text as="h6" textAlign="center" fontSize="3rem" fontWeight="600" color="orange.900">
                            {document.data.country}
                            <Text as="p" textAlign="center" color="dark.800" fontSize="1.5rem">
                                países
                            </Text>
                        </Text>
                        <Text as="h6" textAlign="center" fontSize="3rem" fontWeight="600" color="orange.900">
                            {document.data.city}
                            <Text as="p" textAlign="center" color="dark.800" fontSize="1.5rem">
                                cidades
                            </Text>
                        </Text>
                        <Text as="h6" textAlign="center" fontSize="3rem" fontWeight="600" color="orange.900">
                            {document.data.languages}
                            <Text as="p" textAlign="center" color="dark.800" fontSize="1.5rem">
                                linguas
                            </Text>
                        </Text>
                       
                    </Flex>
                </SimpleGrid>
                <Stack px={["2rem","8.75rem"]}>
                    <Text 
                        as="h5"
                        fontWeight="500"
                        fontSize="2.25rem"
                        color="dark.800"
                    >Cidades +\<Text as="span">{document.data.city}</Text></Text>
                </Stack>

            </Stack>
        )
    }else if(timer === "Time Out"){
        return(
            <Center w="full" h="calc(100vh - 272px)" p="6">
                <Stack alignItems="center" spacing={6}>
                    <Text as="strong" fontSize="5xl" textAlign="center">
                        Não Foi Possivel Achar Este Post!!
                    </Text>
                    <LinkNext href='/'>
                        <Link >
                            <Button fontSize="3xl" p="6" rounded="10" border=" 1px solid" borderColor="black.800">
                                Home
                            </Button>
                        </Link>
                    </LinkNext>
                </Stack>
            </Center>
        )
    }else(
        
        timeOut

    )
}

export const getServerSideProps: GetServerSideProps = async ({params})=>{

    const uid = params?.uid;

    return {
        props:{
            uid
        }
    }
}