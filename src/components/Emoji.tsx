import { Image, ImageProps, Tooltip } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.webp"
import thumbsUp from "../assets/thumbs-up.webp"
import meh from "../assets/meh.webp"

interface Props {
    rating: number;
}
const Emoji = ({rating}: Props) => {
    if (rating < 3) return null;
    const emojiMap: {[key: number]: ImageProps} = {
        3: { src: meh, alt: 'meh', boxSize: '25px' },
        4: { src: thumbsUp, alt: 'recommended', boxSize: '25px' },
        5: { src: bullsEye, alt: 'Exceptional', boxSize: '32px' }
    }
    
    return (
        <Tooltip label={{...emojiMap[rating]}.alt} fontSize='md'>
            <Image {...emojiMap[rating]} marginTop={1} />
        </Tooltip>
    );
}
export default Emoji;