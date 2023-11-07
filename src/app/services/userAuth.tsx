import AxiosInstance from "../api/AxiosInstance";
import Cookie from "js-cookie";



export const checkLoginDetails = async (username : string, password : string) => {
    try {
        const {data} = await AxiosInstance.post('/api/v1/auth', {username: 'james', password: 'admin'});
        console.log(data);
        return data;
    } catch(error) {
        throw error;
    }
}



