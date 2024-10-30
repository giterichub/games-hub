import { HStack, IconButton, Image, Show, useDisclosure } from "@chakra-ui/react";
import { FaHamburger } from "react-icons/fa";
import { GameQuery } from "../App";
import logo from '../assets/logo.webp';
import ColorModeSwitch from "./ColorModeSwitch";
import MenuDrawer from "./MenuDrawer";
import SearchInput from "./SearchInput";

interface Props {
    onSearch: (searchText :string) => void;
    gameQuery: GameQuery;
    setGameQuery: (query: GameQuery) => void;
}

const Navbar = ({ onSearch, gameQuery, setGameQuery }: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <HStack padding="0 10px">
            <Show below="lg">
                <IconButton boxSize='30px' aria-label="Open Menu" icon={<FaHamburger />} onClick={onOpen} 
                variant="outline" marginY={4} />
            </Show>
            <Image src={logo} boxSize='60px' />
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch />
            </HStack>
            <MenuDrawer isOpen={isOpen} onClose={onClose} gameQuery={gameQuery} setGameQuery={setGameQuery} />
        </>
    );
}
export default Navbar;