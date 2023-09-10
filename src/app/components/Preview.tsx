import {Box, Button, Paper, Slide, Typography} from '@mui/material'
import anime1 from '../images/anime1.jpeg'
import anime2 from '../images/yourname.jpg'
import anime4 from '../images/vz3avvg6752b1.webp'
import Image, { StaticImageData } from 'next/image'
import { useState, useEffect} from 'react'


const images: StaticImageData[] = [
    anime1, 
    anime2,
    anime4
]

const Preview = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(1);
    const [isSlideIn, setIsSlideIn] = useState<boolean>(false);
    useEffect(() => {
        if (!isSlideIn) {
            console.log("what?")
            setTimeout(() => {
                setIsSlideIn(true);
            }, 8000);
        }
    }, [])

    useEffect(() => {
        const timer = setInterval(() => {
            const nextIndex: number = (currentImageIndex + 1) % images.length;
            setCurrentImageIndex(nextIndex);
        },10000);
        return () => {
            clearInterval(timer);
        }; 
    }, [currentImageIndex]);

    const test = (
        <Paper>
            <Image 
            src={images[currentImageIndex]} alt="no image" 
            fill={true}
            objectFit="cover"
            >
            </Image>
        </Paper>
    )
    return (
        <Box position='relative' sx = {{width:1, height:700}}>
            {isSlideIn ? (
            <Slide in={true}
             direction="left"
             key={currentImageIndex}
             timeout={1500}
             mountOnEnter
             unmountOnExit            
            >
            {  <Image 
            src={images[currentImageIndex]} alt="no image" 
            fill={true}
            style={{objectFit:"cover"}}
            >
            </Image>
          }
            </Slide>) : (<Image 
                src={images[0]} alt="no image" 
                fill={true}
                style={{objectFit:"cover"}}
                className='transition: ease-in-out opacity-0 duration-[5s]'
                onLoadingComplete={(image) => image.classList.remove("opacity-0")}
                >
            </Image>)} 

           
        </Box>
    )
}

export default Preview;