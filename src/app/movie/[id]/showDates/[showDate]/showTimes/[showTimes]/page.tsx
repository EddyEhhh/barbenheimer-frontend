'use client'
import DescriptionBox from "./DescriptionBox";
import SeatSelection from "./SeatSelection";
import { useState, useEffect } from "react";
import AxiosInstance from "@/app/api/AxiosInstance";
import { MovieSpecificDetailsInterface } from "@/app/interface/interface";
import { useParams, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { ParsedUrlQuery } from "querystring";


const MovieSeatingPage = () => {
    const params = useParams();
    console.log(typeof params.showTimes)

    const [movieData, setMovieData] = useState<MovieSpecificDetailsInterface>();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data, status} = await AxiosInstance.get(`/api/v1/movies/${params.id}`);
                setMovieData(data);
            } catch {
            }
        }
         fetchData();
    }, [])

    
    return (
        <>  
            {movieData && <DescriptionBox
                title={movieData.title}
                runtimeInMinute={movieData.runtimeInMinute}
                ageRestriction={movieData.ageRestriction}
                language={movieData.language}
                movieImage={movieData.movieImages[0].imageUrl}
                showDate={params.showDate}
                showTime={decodeURIComponent(params.showTimes)}
            />}
            <SeatSelection></SeatSelection>
        </>
    );
}

export default MovieSeatingPage;