import React, {useEffect, useState} from 'react';
import {Grid,Typography} from '@mui/material';
import {useRouter} from 'next/navigation';

const CountdownTimer = () => {
    const router = useRouter();
    const [countdown, setCountdown] = useState(600); 
    
    //Decrements time by 1 second till 0 seconds before rerouting user back to homepage
    useEffect(() => {
        const timer = setInterval(() => {
            if (countdown > 0) {
                setCountdown(countdown - 1);
            } else {
                clearInterval(timer);
                router.push('/');
            }
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [countdown, router]);

    //Convert seconds to MM:SS format
    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <Grid className='countdown-timer' container justifyContent={'center'}>
            <Typography variant="h4" sx={{mt:10}}> Time left: {formatTime(countdown)}</Typography>
        </Grid>
    );
};

export default CountdownTimer;