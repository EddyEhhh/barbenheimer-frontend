import AxiosInstance from "../api/AxiosInstance";


export const getAllMovies = async () => {
    try {
        const {data, status} = await AxiosInstance.get("/api/v1/movies")
        return data;        
        } catch(error) {
            //set error
        }
}