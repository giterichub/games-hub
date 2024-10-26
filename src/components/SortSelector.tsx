import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
    onSelectSortOrder: (sorting: string) => void;
    selectedSort: string;
}

const SortSelector = ({onSelectSortOrder, selectedSort}: Props) => {
    
    const sortOrder = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Date added' },
        { value: 'name', label: 'Name' },
        { value: '-released', label: 'Release Date' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average Rating' },
    ];
    const selectedSortValue = sortOrder.find(order => selectedSort === order.value)

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order By: { selectedSortValue?.label || 'Relevance' }
            </MenuButton>
            <MenuList>
                {sortOrder.map(item => <MenuItem onClick={() => onSelectSortOrder(item.value)} key={ item.value } value={ item.value }  > { item.label } </MenuItem> )}  
            </MenuList>
        </Menu>
    );
}
export default SortSelector;