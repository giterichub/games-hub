import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import usePlatform from "../hooks/usePlatform";

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}

const PlatformSelector = ({onSelectPlatform, selectedPlatform}: Props) => {

    const {data, error} = usePlatform();
    
    if (error) return null; 

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                { selectedPlatform?.name || 'Platform'}
            </MenuButton>
            <MenuList>
                {data.map(item => <MenuItem onClick={() => onSelectPlatform(item)} key={item.id}> {item.slug} </MenuItem>)}
            </MenuList>
        </Menu>
    );
}
export default PlatformSelector;