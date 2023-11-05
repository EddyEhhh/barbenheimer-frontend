import AxiosInstance from "../api/AxiosInstance";



export const checkLoginDetails = async (username : string, password : string) => {
    try {
        const {data, status} = await AxiosInstance.post('/api/v1/auth', {username, password });
        console.log('Response from the backend:', data);
        return data;
    } catch(error) {
        throw error;
    }
}

