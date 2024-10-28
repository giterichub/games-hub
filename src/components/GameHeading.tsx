import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props{
    gameText: GameQuery;
}

const GameHeading = ({gameText}: Props) => {    
    const heading = `${gameText.platform?.name || ''} ${gameText.genre?.name || ''} Games`
    return (
        <Heading as='h1' size='3xl' marginY={5}> { heading } </Heading>
    );
}
export default GameHeading;