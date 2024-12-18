import { Box, Grid, GridItem, HStack, Show } 
from '@chakra-ui/react'
import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenre';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';

export interface GameQuery{
  genre: Genre | null;
  platform: Platform | null;
  sorting: string;
  searchText: string;
}

function App() {
  const [ gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery); 

  return (
    <>
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}
    templateColumns={{
      base: '1fr',
      lg: '200px 1fr'
    }}
    transition="background-color 200ms linear"
    >

      <GridItem area={'nav'}>
        <Navbar  onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} 
            gameQuery={gameQuery} setGameQuery={setGameQuery}  />
      </GridItem>
      <Show above="lg">
        <GridItem area={'aside'} paddingX={5}><GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})} /></GridItem>
      </Show>
      <GridItem area={'main'}>
        <Box paddingLeft={2}>
          <GameHeading gameText={gameQuery} />
          <HStack spacing={5} marginBottom={2}>
            <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})} />
            <SortSelector selectedSort={gameQuery.sorting} onSelectSortOrder={(sorting) => setGameQuery({...gameQuery, sorting})} />
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
</>
  )
}

export default App;
