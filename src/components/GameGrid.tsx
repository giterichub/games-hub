import { useEffect, useState } from "react";
import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames, { Game } from "../hooks/useGames";
import GameCardContainer from "./GameCardContainer";
import GameCard from "./GameCard";
import LoadMoreButton from "./LoadMoreButton";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
    const [page, setPage] = useState(1);
    const { data, error, isLoading } = useGames(gameQuery, page);
    const [allGames, setAllGames] = useState<Game[]>(data);
            
    useEffect(() => {
        if (data.length > 0) {
            setAllGames(prev => [...prev, ...data]); 
        }
    }, [data]);

    const loadMoreGames = () => {
        setPage(prev => prev + 1); 
        // setAllGames(data.slice(0, page + 10));
    };

    if (error) return <Text>{error}</Text>;

    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <>
            {/* <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3, "2xl": 4 }} padding='10px' spacing={5}>
                {isLoading && skeletons.map(skeleton => (
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton />
                    </GameCardContainer>
                ))}
                {allGames.map(game => (
                    <GameCardContainer key={game.id}>
                        <GameCard game={game} />
                    </GameCardContainer>
                ))}
            </SimpleGrid> */}
            <ul className="game-grid-container">
                {allGames.map(game => (
                    <li className="game-grid-items">
                    <GameCardContainer key={game.id}>
                        <GameCard game={game} />
                    </GameCardContainer></li>
                ))}
            </ul>
            
            <LoadMoreButton loadMoreGames={loadMoreGames} isLoading={isLoading} />
        </>
    );
};

export default GameGrid;
