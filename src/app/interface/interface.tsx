
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