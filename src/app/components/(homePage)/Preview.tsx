import {Box, Slide, Fade, Typography, Card, CardMedia, CardContent} from '@mui/material'
import anime1 from '../../images/anime1.jpeg'
import anime2 from '../../images/yourname.jpg'
import anime4 from '../../images/vz3avvg6752b1.webp'
import Image, { StaticImageData } from 'next/image'
import { useState, useEffect} from 'react'


const images: StaticImageData[] = [
    anime1, 
    anime2,
]

const Preview = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(1);
    const [isSlideIn, setIsSlideIn] = useState<boolean>(false);

    const [isHover, setIsHover] = useState<boolean>(false);

    const pictureOnMouseEnter = () => {
        setIsHover(true);
    }
    const pictureOnMouseLeave = () => {
        setIsHover(false);
    }

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
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
             <Box position='relative'
              sx = {{
                height:800,
                width: isHover === true ? '100%' : '100%', 
                transition: 'width 0.1s ease-in-out',
               }}>
            {isSlideIn ? (
            <Slide in={true}
             direction="left"
             key={currentImageIndex}
             timeout={1500}
             mountOnEnter
             onMouseEnter = {pictureOnMouseEnter}
             onMouseLeave = {pictureOnMouseLeave}
                        
            >
            {
            <Card 
            sx={{
                height:800, 
                borderRadius:'4px', 
            }}
           >
            <CardMedia 
                sx={{height: 800,   
                // border:isHover === true ? 4 : '',
                // transition:"border 0.2s ease-in-out",
                // borderRadius:'3px',
                // borderColor:'primary.dark'
                }}
                image={images[currentImageIndex].src}
            />
                <CardContent sx={{backgroundColor:'transparent'}}>
                    <Typography variant="h4" color="textPrimary">HELLO </Typography>
                </CardContent>
            </Card>          

                // <Box sx={{backgroundImage:`${anime1.src}`, height:800}} border={1}>
                //     {/* <img    
                //     src={}
                //     alt="no image"
                //     style={{objectFit:"cover", fill:'100'}}
                //     >
                //     </img> */}
                // </Box>
             
          }
            </Slide>) : (
            <Fade in={true} timeout={500} unmountOnExit>
                {  
                <Image 
                src={images[0]} alt="no image" 
                fill={true}
                style={{objectFit:"cover"}}
                priority={true}>
                </Image>
                }
            </Fade>
           )} 

           
        </Box>

        </Box>
       
    )
}

export default Preview;