import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import useSmoothTransition from "../hooks/useSmoothTransition";

const ColorModeSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode();
    return (
        <HStack whiteSpace='nowrap'>
            <Switch colorScheme="green" isChecked={colorMode === 'dark'} onChange={ () => { toggleColorMode(); useSmoothTransition(); } } ></Switch>
            {colorMode === 'light' ? <MdDarkMode size="24px" /> : <MdLightMode size="24px"/>}
        </HStack>
    );
}

export default ColorModeSwitch;