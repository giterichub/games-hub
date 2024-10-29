import { Card, Image, CardBody, Heading, Text, HStack } from "@chakra-ui/react";
import useGames, { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CricticScore";
import Emoji from "./Emoji";
import GameCardSkeleton from "./GameCardSkeleton";
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
        <Card>
            <Image src={getCroppedImageUrl(game.background_image)}></Image>
            <CardBody>
                {/* {game.parent_platforms.map(({platform}) => <Text>{platform.name}</Text> )} */}
                <HStack justifyContent="space-between" marginBottom={3}>
                    <PlatformIconList platforms={game.parent_platforms?.map(p => p.platform )} />
                    <CriticScore score={game.metacritic} />
                </HStack>
                <Heading fontSize="2xl">{game.name}</Heading>
                <Emoji rating={game.rating_top} />
            </CardBody>
        </Card>
    );
}
export default GameCard;