import { Card, Image, CardBody, Heading } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props{
    game: Game;
}

const GameCard = ({game}: Props) => {
    return (
        <Card borderRadius={10} overflow="hidden">
            <Image src={game.background_image}></Image>
            <CardBody>
                <Heading fontSize="2xl">{game.name}</Heading>
            </CardBody>
        </Card>
    );
}
export default GameCard;