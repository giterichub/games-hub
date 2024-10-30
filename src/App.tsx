import { Box, Grid, GridItem, HStack, Show, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, 
  DrawerBody, Button, useDisclosure, useBreakpointValue, IconButton } 
from '@chakra-ui/react'
import { FaHamburger } from 'react-icons/fa';
import { MdClose } from "react-icons/md";
import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenre';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';
import theme from './theme';

export interface GameQuery{
  genre: Genre | null;
  platform: Platform | null;
  sorting: string;
  searchText: string;
}

function App() {
  const [ gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery); 
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      <Show below="lg">
                    <IconButton boxSize='30px' marginLeft={3}
                        aria-label="Open Menu"
                        icon={<FaHamburger />}
                        onClick={onOpen}
                        variant="outline"
                        marginY={4}
                    />
                </Show>
      <GridItem area={'nav'}>
        <Navbar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})} />
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
    <Drawer isOpen={isOpen} onClose={onClose} placement="left">
    <DrawerOverlay>
        <DrawerContent>
          <HStack justifyContent='space-between' paddingRight={3}>
            <DrawerHeader>Menu</DrawerHeader>
            <MdClose size='25px' onClick={onClose} />
          </HStack>
            <DrawerBody>
                {/* Add your menu items here */}
                <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => {setGameQuery({...gameQuery, genre}); onClose()}} />
                {/* <Button  w="100%">Close</Button> */}
                {/* You can add more buttons or links as needed */}
            </DrawerBody>
        </DrawerContent>
    </DrawerOverlay>
</Drawer>
</>
  )
}

export default App;
