import { HStack, Switch, useColorMode, Text } from "@chakra-ui/react";
import useSmoothTransition from "../hooks/useSmoothTransition";

const ColorModeSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode();
    return (
        <HStack whiteSpace='nowrap'>
            <Switch colorScheme="green" isChecked={colorMode === 'dark'} onChange={ () => { toggleColorMode(); useSmoothTransition(); } } ></Switch>
            <Text>Dark Mode</Text>
        </HStack>
    );
}

export default ColorModeSwitch;