import AxiosInstance from "../api/AxiosInstance";
import { SeatingInterface } from "../interface/interface";
import Cookies from 'js-cookie'



// export const getAllMovies = async () => {
//     try {
//         const {data, status} = await AxiosInstance.get("/api/v1/movies");
       
//         return data;        
//         } catch(error) {
//             //set error
//         }
// }

// export const submitSeats =async (showId : string, seating : SeatingInterface[]) => {
//     try {
//         const {data} = await AxiosInstance.post(`/api/v1/schedules/${showId}`, seating);
//         console.log(data.token);
//         return data;
//         Cookies.set(`testing`, data.token, {expiration: 60000});
//     } catch {

//     }
    
// }