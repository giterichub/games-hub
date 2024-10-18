import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '84118c1fddec4842a9613d5496e80843'
    }
})