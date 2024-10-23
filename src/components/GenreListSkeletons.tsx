import { HStack, List, ListItem, Skeleton, SkeletonText, Text } from "@chakra-ui/react";

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

// const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// {skeletons.map(skeleton => <GenreListSkeletons key={skeleton} />)}