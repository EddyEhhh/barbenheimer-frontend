
export interface MovieDetailsInterface {
    id: number,
    title: string,
    runtimeInMinute: number,
    movieImages: {imageUrl: string}[],
    rating?: number,
    ageRestriction: number,
    releaseDate?: Date,
    lastShowingDate?: Date,
    showingDate: Date,
    ticketSaleDate?: Date
}


export interface MovieSpecificDetailsInterface {
    id:number,
    title: string,
    runtimeInMinute: number,
    movieImages: {imageUrl: string}[],
    rating?: number,
    ageRestriction: number,
    releaseDate: Date,
    showingDate: Date,
    ticketSaleDate?: Date,
    basePrice?: number,
    cast?: string,
    description?: string,
    language: string,
    genre?: string,
    director: string,
}


export interface MovieScheduleDatesInterface {
    id: number,
    showDate: string,
    movieScheduleTimes?: MovieScheduleTimeInterface[]
    index : number

    onClickHandler : () => void
    selectedDate: number
    
}


export interface MovieScheduleTimeInterface {
    id: number,
    showTime :string,
    hall: HallInterface,

    onClickHandler : () => void
    selectedTime : number

}

export interface HallInterface {
    id: number,
    seatCapacity: number,
    seats: number[]
}

export interface SeatingArrangementInterface {
    number: number,
    seats: SeatingInterface[]
}

export interface SeatingInterface {
    rowCharacter: string,
    columnNumber: number,
    x: number,
    y:number,
    state:number
}