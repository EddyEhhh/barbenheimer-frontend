'use client'
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Box, Divider} from "@mui/material";
import CheckoutForm from "../components/CheckoutForm";
import getStripe from "../services/getStripe";
import CountdownTimer from "../components/(paymentDetailsPage)/CountdownTimer";
import PaymentHeader from "../components/(paymentDetailsPage)/PaymentHeader";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = getStripe();

export default function App() {
  const [clientSecret, setClientSecret] = React.useState("");

  React.useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/api/paymentIntent/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'night',
    labels: 'floating'

  };
  const options = {
    clientSecret,
    appearance,
    variables: {
        colorText: '#FFFFFF',
    
        // See all possible variables below
    },
  };

  return (
    <div className="App">
      <Box>
      <Box>
        <CountdownTimer></CountdownTimer>
        <PaymentHeader></PaymentHeader> 
      </Box>
      

        {/* <Divider orientation="horizontal" flexItem sx={{mt:6,mb:3}}></Divider> */}
        <Box display={"flex"} justifyContent='center'>
        {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
        </Box>
     
      </Box>
      
    </div>
  );
}