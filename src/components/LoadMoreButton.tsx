import { Button, HStack } from "@chakra-ui/react";

const LoadMoreButton = () => {
    return (
        <HStack justifyContent="center" marginY={6}>
            <Button isLoading loadingText='Loading' colorScheme='teal' 
                variant='outline' spinnerPlacement='start'> Load More </Button>
        </HStack>
    );
}
export default LoadMoreButton;