import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenre";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[] ;
    metacritic: number;
    rating_top: number;
}

const useGames = (gameQuery: GameQuery, page: number) => useData<Game>('/games', { 
    params: {
        genres: gameQuery.genre?.id, 
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sorting,
        search: gameQuery.searchText,
        page: page,
        page_size: 10
    }}, 
        [gameQuery, page]);
        
export default useGames;