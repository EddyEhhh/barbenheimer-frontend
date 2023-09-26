import React, { useEffect, useState } from 'react';
import {Grid,Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {useRouter} from 'next/navigation';

const CountdownTimer = () => {
    const router = useRouter();
    const [countdown, setCountdown] = useState(600); 
  
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

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <Grid container justifyContent={'center'}>
            <Typography variant="h4" sx={{mt:10}}>Time left: {formatTime(countdown)}</Typography>
        </Grid>
    );
};

export default CountdownTimer;