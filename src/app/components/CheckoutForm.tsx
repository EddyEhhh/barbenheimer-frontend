'use client'
import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import {
  LinkAuthenticationElement,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const search = useSearchParams();
  const route = useRouter();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const clientSecret= search.get('sess');

  useEffect(() => {
    if (!stripe) {
      return;
    }
    if (!clientSecret) {
      return;
    }
    
    //error handling
    stripe.retrievePaymentIntent(clientSecret).then((paymentIntent) => {
      console.log(paymentIntent.error);
      console.log(      paymentIntent.paymentIntent?.status
        );
      if (paymentIntent.error) {
        route.push('/error');
      } 
    });
  }, [stripe]);

//error handling stuffs
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        //url when payment is completed
        return_url: `/paymentSummary?sess=${clientSecret}`,
      },
    });

    if (error) {
      setMessage(error.message || "An unexpected error occurred.");
    }
    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
        <Box height={'fill'} width={'400px'}>
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
                variant="contained">
                <Typography fontWeight={'bold'} variant="subtitle2" id="button-text">
                  Cancel 
                </Typography>
              </Button>
            </Box>
            
            {/* Show any error or success messages */}
            {message && <div id="payment-message">{message}</div>}
      </Box>
    </form>
  );
}