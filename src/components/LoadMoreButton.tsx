import { Button, HStack } from "@chakra-ui/react";

interface Props{
    isLoading: boolean;
    loadMoreGames: () => void;
}

const LoadMoreButton = ({isLoading, loadMoreGames}: Props) => {
    return (
        <HStack width="100%" justifyContent="center" marginY={6}>
            <Button onClick={loadMoreGames} isLoading={isLoading} loadingText='Loading' colorScheme='green' 
                variant='outline' spinnerPlacement='start'> Load More </Button>
        </HStack>
    );
}
export default LoadMoreButton;