import { Axios } from "axios";

import AxiosInstance from "../api/AxiosInstance";
import {SeatingInterface } from "../interface/interface";
import { Router } from "next/router";
import { SourceTextModule } from "vm";
import { HallInterface, SeatingInterface } from "../interface/interface";
import Cookies from 'js-cookie'
import { getAuthConfig } from "./AuthenticationService";




export const getAllMovies = async () => {
    // console.log("Hello: " + getAuthConfig().headers.Authorization);
    try {
        const {data, status} = await AxiosInstance.get("/api/v1/movies"
            );

        return data;        
        } catch(error) {
            //set error
        }
}

export const getSpecificMovies = async (id : string | string[]) => {
    try {
        const {data, status} = await AxiosInstance.get(`/api/v1/movies/${id}`)
        return data;
    } catch (error) {
        return error;
    }
}


export const submitSeats =async (showId : string, id : {}[]) => {
    // console.log(id);
    try {
        const {data, status} = await AxiosInstance.post(`/api/v1/schedules/${showId}`, id);
        return data;
    } catch (error) {
        window.location.reload();
    }
}
//valid seats at /paymentpage
export const validateSeats = async (paymentIntentId: string) => {
    try{
       return await AxiosInstance.get(`/api/v1/reserves/checkToken/${paymentIntentId}`);

    } catch (error) {
        return false
    }
}


//gets payment info for /paymentpage
export const getOnGoingPurchaseDetails = async (paymentIntentId: string) => {
    try{
        const data = await AxiosInstance.get(`/api/v1/reserves/${paymentIntentId}`);
        // console.log(data.data.movie);

        // console.log(data.data);
       return data.data;

    } catch (error) {

    }
}



export const getCompletedPurchaseInfo = async (paymentIntentId :string) => {
    try{
        // console.log(paymentIntentId);
        const data = await AxiosInstance.get(`/api/v1/payments/getPurchase/${paymentIntentId}`);
        return data
    } catch (error) {
        // console.log("hi")
        return error;
    }
}

export const getScheduleFromHall = async (hall : string | string[]) => {
    try {
        const {data, status} = await AxiosInstance.get(`/api/v1/schedules/${hall}`);
        return data;
    } catch (error) {
        return error;
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