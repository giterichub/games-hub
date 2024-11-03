import { IconButton } from "@chakra-ui/react"
import { MdArrowUpward } from "react-icons/md";

const ScrollToTopButton = () => {
    console.log(globalThis.scrollY);
    
    const scrollToTop = () => {
        globalThis.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    return (
        <IconButton onClick={scrollToTop} size='lg' position='fixed' rounded='full' bottom={10} right={10} aria-label="Search database">
            <MdArrowUpward size={24} />
        </IconButton>
    );
}
export default ScrollToTopButton;