import { Card, Image, CardBody, Heading, Text, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import CriticScore from "./CricticScore";
import PlatformIconList from "./PlatformIconList";

interface Props{
    game: Game;
}

const GameCard = ({game}: Props) => {
    // console.log(game);
    
    // game.parent_platforms.map(({platform}) => console.log(platform))
    // console.log(game.parent_platforms.map(p => p.platform ));
    // console.log(game.parent_platforms);
    
    
    return (
        <Card borderRadius={10} overflow="hidden">
            <Image src={game.background_image}></Image>
            <CardBody>
                <Heading fontSize="2xl">{game.name}</Heading>
                {/* {game.parent_platforms.map(({platform}) => <Text>{platform.name}</Text> )} */}
                <HStack justifyContent="space-between">
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform )} />
                    <CriticScore score={game.metacritic} />
                </HStack>
                
            </CardBody>
        </Card>
    );
}
export default GameCard;