'use client'
import React, { useEffect, useState} from "react";
import { StripeElementsOptions, loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Box, Divider, Paper} from "@mui/material";
import CheckoutForm from "../components/CheckoutForm";
import getStripe from "../services/getStripe";
import CountdownTimer from "../components/(paymentDetailsPage)/CountdownTimer";
import PaymentHeader from "../components/(paymentDetailsPage)/PaymentHeader";
import { useRouter, useSearchParams } from "next/navigation";
import { useStripe,useElements } from "@stripe/react-stripe-js";
// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.

export default function App() {
  const route = useRouter()
  const stripePromise = getStripe();

  const [clientSecret, setClientSecret] = useState<String | null>("");
  const search = useSearchParams();
  // route.events.on('routeChangeStart', (url) => {
  //   console.log(`Route change started to: ${url}`);
  //   // You can perform actions when the route change starts
  // });
  // console.log(search.get('sess'));
  useEffect( () => {
    const id = search.get('sess');
    if (id === null) {
      route.push('/error');
    }
    setClientSecret(id);
    // const fetchData = async () => {
    //   try {
    //     const data = await fetch("/api/paymentIntent/", {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    //     })

    //     const datajson = await data.json();
    //     setClientSecret(datajson.clientSecret);
    //   } catch {

    //   }
    // }
    // if (clientSecret == "") {
    //   fetchData();
    // }
    }, []);

  const appearance = {
    theme: 'night',
    labels: 'floating',
  };
  const options =  {
    clientSecret : clientSecret,
    appearance,
  };
// console.log(clientSecret);

  return (
    <Box height={'100vh'} display={'flex'} flexDirection={'column'} alignItems={'center'} className="App">
      <CountdownTimer></CountdownTimer>
      
        <Divider orientation="horizontal" flexItem sx={{mt:6,mb:3}}></Divider>
        <Box display={"flex"} justifyContent={'center'} width={'90%'} mt={20}>
            <Box mr={30}>
              <PaymentHeader></PaymentHeader> 
            </Box>

        {clientSecret != "" && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
        )}
        </Box>
     
    </Box>
  );
}