import { FaWindows, FaPlaystation, FaAndroid, FaLinux, FaApple, FaXbox } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs'
import { Platform } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from 'react-icons';

interface Props {
    platforms: Platform[];
}
const PlatformIconList = ({platforms}: Props) => {
    // console.log(platforms);
    // console.log(platforms.map((platform) => console.log(platform)));

    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        android: FaAndroid,
        linux: FaLinux,
        mac: FaApple,
        xbox: FaXbox,
        nintendo: SiNintendo,
        ios: MdPhoneIphone,
        web: BsGlobe
    }
    
    return (
        <HStack marginY={1}>
            {platforms.map((platform) => <Icon as={iconMap[platform.slug]} color='gray.500'/> )}
        </HStack>
    );
}
export default PlatformIconList;