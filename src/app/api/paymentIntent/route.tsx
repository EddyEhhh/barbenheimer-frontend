// This is your test secret API key.
import { NextRequest, NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

export async function POST(req, res) {
  const dataString = await new Response(req.body).text();
  
  const data = JSON.parse(dataString);
  console.log(data.showId);
 
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(2),
    currency: "sgd",

    automatic_payment_methods: {
      enabled: true,
    },
    metadata: {
      seats: `${data.seats}`,
      showId: `${data.showId}`

    }
  });
  
  return NextResponse.json({clientSecret:paymentIntent.client_secret})
}