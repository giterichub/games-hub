import { IconButton } from '@chakra-ui/react';
import { FaHamburger } from 'react-icons/fa';

interface Props{
    onOpen: () => void;
}

const HamburgerIconComponent = ({ onOpen }: Props) => {
    return (
        <IconButton
            aria-label="Open Menu"
            icon={<FaHamburger />}
            onClick={onOpen}
            variant="outline"
        />
    );
};

export default HamburgerIconComponent;
