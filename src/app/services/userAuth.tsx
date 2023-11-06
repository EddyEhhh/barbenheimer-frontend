import AxiosInstance from "../api/AxiosInstance";



export const checkLoginDetails = async (username : string, password : string) => {
    try {
        const {data} = await AxiosInstance.post('/api/v1/auth', {username: username, password: password});
        return data;
    } catch(error) {
        throw error;
    }
}

