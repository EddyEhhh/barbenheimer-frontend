'use client'
import React, { useState, useEffect } from "react";
import { Box, Button, Typography, Divider } from "@mui/material";
import {
  LinkAuthenticationElement,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import CountdownTimer from "./(paymentDetailsPage)/CountdownTimer";
import PaymentHeader from "./(paymentDetailsPage)/PaymentHeader";
import { MovieSeatInformationInterface } from "../interface/interface";
import { getOnGoingPurchaseDetails, getPurchaseInfo, validateSeats } from "../services/services";
import { usePathname } from "next/navigation";
import { seatToString } from "../services/util";
import Image from "next/image";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const search = useSearchParams();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string>("");
  const [movieData, setMovieData] = useState<any>();

  const [isLoading, setIsLoading] = useState(false);
  const clientSecret= search.get('sess');
  const route = useRouter();

  useEffect(() => {
    if (!stripe) {
      return;
    }
    if (!clientSecret) {
      return;
    }
    //error handling for start of page, we check if clientsecret is legit or if payment has already been made
    stripe.retrievePaymentIntent(clientSecret).then((paymentIntent) => {
      if (paymentIntent.error || paymentIntent.paymentIntent?.status == "succeeded" || paymentIntent.paymentIntent?.status == "canceled") {
        route.push('/error');
      } 

      getOnGoingPurchaseDetails(paymentIntent.paymentIntent!.id)
      .then((res)=> {
        setMovieData(res)
        console.log(res.movie);
      });
    });

  }, [stripe]);
  
  const cancelButton = () => {
    // stripe!.retrievePaymentIntent(`clientSecret`).then((paymentIntent) => {
    //   paymentIntent.paymentIntent.cancel();
    
    // })
  }

//error handling stuffs
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsLoading(true);
    
    //retrive the paymentID to send to springboot for external validation of seats
    const isSeatAval = await backendSeatValidation();
    //if seats are not taken, check with stripe if payment is correct
    if (isSeatAval) {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          //success URL
          return_url: `http://localhost:3000/paymentSummary`,
        },
      });
  
      if (error) {
        setMessage(error.message || "An unexpected error occurred.");
      }
    }

   
    setIsLoading(false);
  };


  //checks with springboot whether seat was bought by another person
  const backendSeatValidation = async () => {
    await stripe!.retrievePaymentIntent(clientSecret!).then((paymentIntent) => {
      if (paymentIntent.error) {
        route.push('/error');
      } 

    validateSeats(paymentIntent.paymentIntent!.id).then((res) =>{
      if (res == false) {
        setMessage("sorry current seats have been taken");
        return false;
      }
      });
    });
    return true;

    
  }


  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <CountdownTimer></CountdownTimer>
      <Divider orientation="horizontal" flexItem sx={{mt:6,mb:10}}></Divider>

      <Box display={'flex'}  flexDirection={'row'} width={'1200px'}>
        <Box display={"flex"} justifyContent={'center'} alignContent={'center'} width={'70%'}>
          <Box position = 'relative' width={'60%'} >
            {movieData && <Image
              src = {movieData.movie.movieImages[0].imageUrl}
              fill={true}
              style={{objectFit:"contain"}}
              sizes="(max-width: 600px) 100vw, 600px"
              priority
            >

            </Image>}
          </Box>
          
            <Box width={'1'}>
              {movieData && <PaymentHeader
              title={movieData.movie.title}
              time={movieData.movieTime}
              date={movieData.movieDate}
              hall={movieData.hallNumber}
              seatNumber={seatToString(movieData.seatDetails)}
              image={movieData.movie.movieImages[0].imageUrl}
              />}
            </Box>
        </Box>


        <Box height={'fill'} width={'30%'}>
          <Box pb={2}>
            <LinkAuthenticationElement
                  id="link-authentication-element"
                  onChange={(e) => setEmail(e.target.value)}
              />
          </Box>
          <PaymentElement
                id="payment-element"
                options={paymentElementOptions}
            />
            
            <Box mt={2} display={'flex'} justifyContent={'space-between'}>
              <Button 
                  disabled={isLoading || !stripe || !elements}
                  id="submit"
                  type="submit"
                  size="large"
                  variant="contained">
                  <Typography fontWeight={'bold'} variant="body2">Pay</Typography>
              </Button>

              <Button 
                disabled={isLoading || !stripe || !elements}
                color="error"
                id="submit"
                type="submit"
                size="large"
                variant="contained"
                onClick={cancelButton}>
                <Typography fontWeight={'bold'} variant="subtitle2" id="button-text">
                  Cancel 
                </Typography>
              </Button>
            </Box>
            
            {/* Show any error or success messages */}
            {message && <div id="payment-message">{message}</div>}
        </Box>
      </Box>

      

    



        
    </form>
  );
}