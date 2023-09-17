
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
    movieScheduleTimes: MovieScheduleTimeInterface[]
    onClickHandler : () => void
}


export interface MovieScheduleTimeInterface {
    id: number,
    showTime :string,
    hall: HallInterface[]

}

export interface HallInterface {
    id: number,
    seatCapacity: number,
    seats: number[]
}