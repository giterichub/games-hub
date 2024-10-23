import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
    const { data, error, isLoading } = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
    
    // console.log(games);
    // console.log(games.map(game => console.log(game)));

    return (
        <>
            
            { error && <Text> {error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3 }} padding='10px' spacing={3}>
            { isLoading && skeletons.map(skeleton => (
                <GameCardContainer>
                    <GameCardSkeleton key={skeleton} />
                </GameCardContainer>
            
            )) }
                    {data.map(game => (
                        <GameCardContainer>
                            <GameCard key={game.id} game={game} />
                        </GameCardContainer>
                    ) )}
                
            </SimpleGrid>
        </>
    );
}
export default GameGrid;