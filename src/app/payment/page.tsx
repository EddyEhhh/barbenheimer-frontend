'use client'
import React, { useEffect, useState} from "react";
import { StripeElementsOptions, loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Box, Divider, Paper} from "@mui/material";
import CheckoutForm from "../components/(paymentPage)/CheckoutForm";
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
  const search = useSearchParams();

  const [clientSecret, setClientSecret] = useState<String | null>("");

  useEffect( () => {
    const id = search.get('sess');
    if (id === null) {
      route.push('/error');
    }
    setClientSecret(id);
    }, []);

  const appearance = {
    theme: 'night',
    labels: 'floating',
  };
  const options =  {
    clientSecret : clientSecret,
    appearance,
  };

  return (
    <Box height={'100vh'} display={'flex'} flexDirection={'column'} alignItems={'center'} className="App">
        {clientSecret != "" && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
        )}
    </Box>
     
  );
}