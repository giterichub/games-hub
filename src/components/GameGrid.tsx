import { SimpleGrid, Text } from "@chakra-ui/react";
import { useState } from "react";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import { Genre } from "../hooks/useGenre";
import { Platform } from "../hooks/usePlatform";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import LoadMoreButton from "./LoadMoreButton";

interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({gameQuery, }: Props) => {    
    const [page, setPage] = useState(1);
    const { data, error, isLoading } = useGames(gameQuery, page);
    
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
        // console.log(games.map(game => console.log(game)));
    if (error) return <Text> {error}</Text>;

    const loadMoreGames = () => {
        setPage(prev => prev + 1); // Increment page number to load more
    };

    return (
        <>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3, "2xl": 4 }} padding='10px' spacing={5}>
            { isLoading && skeletons.map(skeleton => (
                <GameCardContainer key={skeleton}>
                    <GameCardSkeleton />
                </GameCardContainer>
            
            )) }
                    {data.map(game => (
                        <GameCardContainer key={game.id}>
                            <GameCard game={game} />
                        </GameCardContainer>
                    ) )}
                
            </SimpleGrid>
            <LoadMoreButton />
        </>
            
    );
}
export default GameGrid;