import { Flex, Img, Stack, Text } from "@chakra-ui/react";

export function BannerHome(){
    return(
        <Flex direction={["column-reverse", "row"]}
        h="20.9375rem"
        textShadow='0 0 10px black'
        alignItems="start"
        backgroundImage="url(/image/warren-wong-fNUNt9w3m-Q-unsplash.jpg)"
        bgPosition="0% 30%"
        bgSize="cover"
        justifyContent={["center","space-between"]}
        px={["2rem","8.75rem"]}
        pt={["0","5rem"]}
        mb="5rem"
      >
        <Stack spacing="1.25rem" color="light.200" >
          <Text
            as="strong"
            fontWeight="500"
            fontSize="2.25rem"
          >
            5 Continentes,<br/>
            infinitas possibilidades.
          </Text>
          <Text
            as="span"
            fontWeight="500"
            fontSize="1.25rem"
            maxW="32.75rem"
          >
            Chegou a hora de tirar do papel a viagem que você
            sempre sonhou.
          </Text>
        </Stack>
        <Img display={["none","flex"]} src="/Airplane.svg" />
      </Flex>
    )
}