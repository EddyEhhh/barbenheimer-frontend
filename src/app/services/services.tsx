import { Axios } from "axios";

import AxiosInstance from "../api/AxiosInstance";
import {SeatingInterface } from "../interface/interface";

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
        const {data} = await AxiosInstance.post(`/api/v1/schedules/1`, seating);
        return data;
    } catch {

    }
    
}


export const getScheduleFromHall = async (hall : string | string[]) => {
    try {
        const {data, status} = await AxiosInstance.get(`/api/v1/schedules/${hall}`);
        return data;
    } catch (error) {
    }
}


// export const startPaymentSession = async() => {
//     try {
//         const data = await Axios.post(`http://localhost/3000/api/checkout/`);
//         return data;
//     } catch {

//     }
// }

// export const getCheckoutLink = async (quantity : number) {
//     try {
//         const {data, status} = await Axios.post(`http://localhost/3000/api/checkout`, )
//         AxiosInstance.
//     }
// }