import AxiosInstance from "../api/AxiosInstance";
import { SeatingInterface } from "../interface/interface";
import { cookies } from 'next/headers'



export const getAllMovies = async () => {
    try {
        const {data, status} = await AxiosInstance.get("/api/v1/movies");
       
        return data;        
        } catch(error) {
            //set error
        }
}

export const submitSeats =async (seating : SeatingInterface[]) => {
    try {
        const {data} = await AxiosInstance.post(`/api/v1/schedules/${seating}`);
        // if (data.ok) {
        //     cookies().set('sessionId', `testing cookie`, {expires: 600000})
        // }
        return data;
        
    } catch {

    }
    
}