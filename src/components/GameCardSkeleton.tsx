import { Card, CardBody, HStack, Skeleton, SkeletonText } from '@chakra-ui/react'
const GameCardSkeleton = () => {
   return <Skeleton height="240px" />;
    // <Card>
      
    //   {/* <CardBody>
    //     <SkeletonText />
    //   </CardBody>
    // </Card> */}
  //   return (
  //     <Card>
  //         <Skeleton height="200px" width="100%" />
  //         <CardBody>
  //             <HStack justifyContent="space-between" marginBottom={3}>
  //                 <Skeleton height="10px" width="40%" />
  //                 <Skeleton height="10px" width="20%" />
  //             </HStack>
  //             <Skeleton height="20px" width="100%" />
  //             <Skeleton height="15px" width="100%" />
  //         </CardBody>
  //     </Card>
  // );
  
}
export default GameCardSkeleton