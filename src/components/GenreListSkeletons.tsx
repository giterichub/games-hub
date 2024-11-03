import { HStack, List, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListSkeletons = () => {
    return (
        <List>
            <ListItem paddingY="5px">
                <HStack>
                    <Skeleton width='32px' borderRadius={8} height='32px' />
                    <SkeletonText width='70%' height='5px' noOfLines={1} />
                </HStack>
            </ListItem>
        </List>
    );
}
export default GenreListSkeletons;