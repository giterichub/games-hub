import { Box, Button, Flex, HStack } from "@chakra-ui/react";

interface Props{
    isLoading: boolean;
    loadMoreGames: () => void;
}

const LoadMoreButton = ({isLoading, loadMoreGames}: Props) => {
    return (
            // <HStack position={ isLoading ? 'fixed' : 'static'} justifyContent="center" 
            // width={ isLoading ? "calc(100% - 200px)" : '100%'} marginY={6} bottom={10}>
            // <Button onClick={loadMoreGames} isLoading={isLoading} loadingText='Loading' colorScheme='teal' 
            //     variant='outline' spinnerPlacement='start'> Load More </Button>
            // </HStack>
            <HStack width="100%" justifyContent="center" marginY={6}>
            <Button onClick={loadMoreGames} isLoading={isLoading} loadingText='Loading' colorScheme='teal' 
                variant='outline' spinnerPlacement='start'> Load More </Button>
            </HStack>
    );
}
export default LoadMoreButton;