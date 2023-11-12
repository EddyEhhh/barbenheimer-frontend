

//general functions are placed here

import { SeatingInterface } from "../interface/interface";

export const convertTo12Hours = (showTime : string) => {
    const [hours, minute] = showTime.split(":");
    let time = 'AM';
    let hour = parseInt(hours, 10);

    if (hour >= 12) {
        time = "PM";
        if (hour > 12) {
          hour -= 12;
        }
    }
    return `${hour}:${minute} ${time}`;
}


export const dateConverter = (showDate : string) => {
    
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    const [years, months, days] = showDate.split("-");
    const day = parseInt(days, 10);
    const month = parseInt(months,10);
    const date = new Date(2022, month-1 ,day);
    return `${dayNames[date.getDay()]} ${days} ${monthNames[month -1]}`
}


export const seatToString = (seat : SeatingInterface[]) => {
    let seatString : string = "";

    for (let i = 0; i < seat.length;i++){
        seatString += seat[i].rowCharacter + seat[i].columnNumber + " "
    }
    return seatString;
}