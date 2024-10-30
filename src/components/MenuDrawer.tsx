import { Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, HStack, } from '@chakra-ui/react';
import { MdClose } from 'react-icons/md';
import { GameQuery } from '../App';
import GenreList from './GenreList';

interface Props{
    isOpen: boolean;
    onClose: () => void;
    gameQuery: GameQuery;
    setGameQuery: (query: GameQuery) => void;
}

const MenuDrawer = ({ isOpen, onClose, gameQuery, setGameQuery }: Props) => {
    return (
        <Drawer isOpen={isOpen} onClose={onClose} placement="left">
    <DrawerOverlay>
        <DrawerContent>
          <HStack justifyContent='space-between' paddingRight={3}>
            <DrawerHeader>Menu</DrawerHeader>
            <MdClose size='25px' onClick={onClose} />
          </HStack>
            <DrawerBody>
                <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => { 
                        setGameQuery({...gameQuery, genre})
                        onClose();
                    }} />
            </DrawerBody>
        </DrawerContent>
    </DrawerOverlay>
</Drawer>
    );
};

export default MenuDrawer;
