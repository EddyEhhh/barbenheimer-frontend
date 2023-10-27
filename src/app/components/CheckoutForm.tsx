'use client'
import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import {
  LinkAuthenticationElement,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmCardPayment(
      // Replace with your client secret
      "payment_intent_client_secret",
      {
        payment_method: {
          card: elements.getElement(PaymentElement),
          billing_details: {
            email,
          },
        },
      }
    );

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`.
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
        <Box height={'100vh'} width={'900px'}>
            <LinkAuthenticationElement
                id="link-authentication-element"
                onChange={(e) => setEmail(e.target.value)}
            />
            <PaymentElement
                id="payment-element"
                options={paymentElementOptions}
            />
            <Box mt={2} display={'flex'} justifyContent={'center'}>
            <Button 
            
                disabled={isLoading || !stripe || !elements}
                id="submit"
                type="submit"
                size="large"
                variant="contained" 

            >
                <Typography fontWeight={'bold'} variant="body2" id="button-text">
                  Pay now
                </Typography>
            </Button>
            </Box>
            
            {/* Show any error or success messages */}
            {message && <div id="payment-message">{message}</div>}
      </Box>
    </form>
  );
}