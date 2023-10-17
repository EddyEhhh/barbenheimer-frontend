import AxiosInstance from "../api/AxiosInstance";
import { HallInterface, SeatingInterface } from "../interface/interface";
import Cookies from 'js-cookie'



export const getAllMovies = async () => {
    try {
        const {data, status} = await AxiosInstance.get("/api/v1/movies");
       
        return data;        
        } catch(error) {
            //set error
        }
}

export const getSpecificMovies = async (id : string | string[]) => {
    try {
        const {data, status} = await AxiosInstance.get(`/api/v1/movies/${id}`);
        return data;
    } catch {

    }
}

export const submitSeats =async (showId : string, seating : SeatingInterface[]) => {
    try {
        const {data} = await AxiosInstance.post(`/api/v1/schedules/${showId}`, seating);
        return data;
    } catch {
        
    }
    
}


export const getScheduleFromHall = async (hall : string | string[]) => {
    try {
        const {data, status} = await AxiosInstance.get(`/api/v1/schedules/${hall}`);
        return data;
    } catch {

    }
}