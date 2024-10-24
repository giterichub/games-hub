import useData from "./useData";
import { Platform } from "./useGames";

interface Props {
    id: number;
    name: string;
    slug: string;
}
const usePlatform = () => useData<Props>('/platforms/lists/parents');
export default usePlatform;