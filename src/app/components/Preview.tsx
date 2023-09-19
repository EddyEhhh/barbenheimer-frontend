import {Box, Slide, Fade} from '@mui/material'
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
    return (
        <Box position='relative' sx = {{width:1, height:800}}>
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
                style={{objectFit:"cover"}}>
            </Image>
          }
            </Slide>) : (
            <Fade in={true} timeout={2000} unmountOnExit>{  <Image 
                src={images[0]} alt="no image" 
                fill={true}
                style={{objectFit:"cover"}}>
            </Image>}</Fade>
           )} 

           
        </Box>
    )
}

export default Preview;