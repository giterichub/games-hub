import { Card, Image, CardBody, Heading, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CricticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface Props{
    game: Game;
}

const GameCard = ({game}: Props) => {
    
    return (
        <Card transition="background-color 800ms linear">
            <Image src={getCroppedImageUrl(game.background_image)}></Image>
            <CardBody>
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