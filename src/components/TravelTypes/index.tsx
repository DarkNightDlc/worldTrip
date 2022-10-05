import { Wrap } from "@chakra-ui/react";
import { TravelCandle } from "./candles";

export function TravelTypes(){
    return(
        <Wrap
        px={["3rem","3rem","4rem","8.75rem"]}
        w="full"
        py="2rem"
        justify={["center","center","space-evenly"]}
      >
        <TravelCandle link='/' image='/coquetel.svg' >vida noturna</TravelCandle>
        <TravelCandle link='/' image='/beach.svg' >praia</TravelCandle>
        <TravelCandle link='/' image='/city.svg' >moderno</TravelCandle>
        <TravelCandle link='/' image='/history.svg' >clássico</TravelCandle>
        <TravelCandle link='/' image='/world.svg' >e mais...</TravelCandle>
      </Wrap>
    )
}